import {randomBytes, createHash} from "crypto";
import http from "http";
import https from "https";
import zlib from "zlib";
import Stream, {PassThrough, pipeline} from "stream";
import {types} from "util";
import {format, parse, resolve, URLSearchParams as URLSearchParams$1} from "url";
var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
var unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
var escaped$1 = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function devalue(value) {
  var counts = new Map();
  function walk(thing) {
    if (typeof thing === "function") {
      throw new Error("Cannot stringify a function");
    }
    if (counts.has(thing)) {
      counts.set(thing, counts.get(thing) + 1);
      return;
    }
    counts.set(thing, 1);
    if (!isPrimitive(thing)) {
      var type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach(walk);
          break;
        case "Set":
        case "Map":
          Array.from(thing).forEach(walk);
          break;
        default:
          var proto = Object.getPrototypeOf(thing);
          if (proto !== Object.prototype && proto !== null && Object.getOwnPropertyNames(proto).sort().join("\0") !== objectProtoOwnPropertyNames) {
            throw new Error("Cannot stringify arbitrary non-POJOs");
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new Error("Cannot stringify POJOs with symbolic keys");
          }
          Object.keys(thing).forEach(function(key) {
            return walk(thing[key]);
          });
      }
    }
  }
  walk(value);
  var names = new Map();
  Array.from(counts).filter(function(entry) {
    return entry[1] > 1;
  }).sort(function(a, b) {
    return b[1] - a[1];
  }).forEach(function(entry, i) {
    names.set(entry[0], getName(i));
  });
  function stringify(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (isPrimitive(thing)) {
      return stringifyPrimitive(thing);
    }
    var type = getType(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return "Object(" + stringify(thing.valueOf()) + ")";
      case "RegExp":
        return "new RegExp(" + stringifyString(thing.source) + ', "' + thing.flags + '")';
      case "Date":
        return "new Date(" + thing.getTime() + ")";
      case "Array":
        var members = thing.map(function(v, i) {
          return i in thing ? stringify(v) : "";
        });
        var tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return "[" + members.join(",") + tail + "]";
      case "Set":
      case "Map":
        return "new " + type + "([" + Array.from(thing).map(stringify).join(",") + "])";
      default:
        var obj = "{" + Object.keys(thing).map(function(key) {
          return safeKey(key) + ":" + stringify(thing[key]);
        }).join(",") + "}";
        var proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return Object.keys(thing).length > 0 ? "Object.assign(Object.create(null)," + obj + ")" : "Object.create(null)";
        }
        return obj;
    }
  }
  var str = stringify(value);
  if (names.size) {
    var params_1 = [];
    var statements_1 = [];
    var values_1 = [];
    names.forEach(function(name, thing) {
      params_1.push(name);
      if (isPrimitive(thing)) {
        values_1.push(stringifyPrimitive(thing));
        return;
      }
      var type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values_1.push("Object(" + stringify(thing.valueOf()) + ")");
          break;
        case "RegExp":
          values_1.push(thing.toString());
          break;
        case "Date":
          values_1.push("new Date(" + thing.getTime() + ")");
          break;
        case "Array":
          values_1.push("Array(" + thing.length + ")");
          thing.forEach(function(v, i) {
            statements_1.push(name + "[" + i + "]=" + stringify(v));
          });
          break;
        case "Set":
          values_1.push("new Set");
          statements_1.push(name + "." + Array.from(thing).map(function(v) {
            return "add(" + stringify(v) + ")";
          }).join("."));
          break;
        case "Map":
          values_1.push("new Map");
          statements_1.push(name + "." + Array.from(thing).map(function(_a) {
            var k = _a[0], v = _a[1];
            return "set(" + stringify(k) + ", " + stringify(v) + ")";
          }).join("."));
          break;
        default:
          values_1.push(Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}");
          Object.keys(thing).forEach(function(key) {
            statements_1.push("" + name + safeProp(key) + "=" + stringify(thing[key]));
          });
      }
    });
    statements_1.push("return " + str);
    return "(function(" + params_1.join(",") + "){" + statements_1.join(";") + "}(" + values_1.join(",") + "))";
  } else {
    return str;
  }
}
function getName(num) {
  var name = "";
  do {
    name = chars[num % chars.length] + name;
    num = ~~(num / chars.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? name + "_" : name;
}
function isPrimitive(thing) {
  return Object(thing) !== thing;
}
function stringifyPrimitive(thing) {
  if (typeof thing === "string")
    return stringifyString(thing);
  if (thing === void 0)
    return "void 0";
  if (thing === 0 && 1 / thing < 0)
    return "-0";
  var str = String(thing);
  if (typeof thing === "number")
    return str.replace(/^(-)?0\./, "$1.");
  return str;
}
function getType(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function escapeUnsafeChar(c) {
  return escaped$1[c] || c;
}
function escapeUnsafeChars(str) {
  return str.replace(unsafeChars, escapeUnsafeChar);
}
function safeKey(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? key : escapeUnsafeChars(JSON.stringify(key));
}
function safeProp(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? "." + key : "[" + escapeUnsafeChars(JSON.stringify(key)) + "]";
}
function stringifyString(str) {
  var result = '"';
  for (var i = 0; i < str.length; i += 1) {
    var char = str.charAt(i);
    var code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped$1) {
      result += escaped$1[char];
    } else if (code >= 55296 && code <= 57343) {
      var next = str.charCodeAt(i + 1);
      if (code <= 56319 && (next >= 56320 && next <= 57343)) {
        result += char + str[++i];
      } else {
        result += "\\u" + code.toString(16).toUpperCase();
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}
function dataUriToBuffer(uri) {
  if (!/^data:/i.test(uri)) {
    throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');
  }
  uri = uri.replace(/\r?\n/g, "");
  const firstComma = uri.indexOf(",");
  if (firstComma === -1 || firstComma <= 4) {
    throw new TypeError("malformed data: URI");
  }
  const meta = uri.substring(5, firstComma).split(";");
  let charset = "";
  let base64 = false;
  const type = meta[0] || "text/plain";
  let typeFull = type;
  for (let i = 1; i < meta.length; i++) {
    if (meta[i] === "base64") {
      base64 = true;
    } else {
      typeFull += `;${meta[i]}`;
      if (meta[i].indexOf("charset=") === 0) {
        charset = meta[i].substring(8);
      }
    }
  }
  if (!meta[0] && !charset.length) {
    typeFull += ";charset=US-ASCII";
    charset = "US-ASCII";
  }
  const encoding = base64 ? "base64" : "ascii";
  const data = unescape(uri.substring(firstComma + 1));
  const buffer = Buffer.from(data, encoding);
  buffer.type = type;
  buffer.typeFull = typeFull;
  buffer.charset = charset;
  return buffer;
}
var src = dataUriToBuffer;
const {Readable} = Stream;
const wm = new WeakMap();
async function* read(parts) {
  for (const part of parts) {
    if ("stream" in part) {
      yield* part.stream();
    } else {
      yield part;
    }
  }
}
class Blob {
  constructor(blobParts = [], options = {type: ""}) {
    let size = 0;
    const parts = blobParts.map((element) => {
      let buffer;
      if (element instanceof Buffer) {
        buffer = element;
      } else if (ArrayBuffer.isView(element)) {
        buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
      } else if (element instanceof ArrayBuffer) {
        buffer = Buffer.from(element);
      } else if (element instanceof Blob) {
        buffer = element;
      } else {
        buffer = Buffer.from(typeof element === "string" ? element : String(element));
      }
      size += buffer.length || buffer.size || 0;
      return buffer;
    });
    const type = options.type === void 0 ? "" : String(options.type).toLowerCase();
    wm.set(this, {
      type: /[^\u0020-\u007E]/.test(type) ? "" : type,
      size,
      parts
    });
  }
  get size() {
    return wm.get(this).size;
  }
  get type() {
    return wm.get(this).type;
  }
  async text() {
    return Buffer.from(await this.arrayBuffer()).toString();
  }
  async arrayBuffer() {
    const data = new Uint8Array(this.size);
    let offset = 0;
    for await (const chunk of this.stream()) {
      data.set(chunk, offset);
      offset += chunk.length;
    }
    return data.buffer;
  }
  stream() {
    return Readable.from(read(wm.get(this).parts));
  }
  slice(start = 0, end = this.size, type = "") {
    const {size} = this;
    let relativeStart = start < 0 ? Math.max(size + start, 0) : Math.min(start, size);
    let relativeEnd = end < 0 ? Math.max(size + end, 0) : Math.min(end, size);
    const span = Math.max(relativeEnd - relativeStart, 0);
    const parts = wm.get(this).parts.values();
    const blobParts = [];
    let added = 0;
    for (const part of parts) {
      const size2 = ArrayBuffer.isView(part) ? part.byteLength : part.size;
      if (relativeStart && size2 <= relativeStart) {
        relativeStart -= size2;
        relativeEnd -= size2;
      } else {
        const chunk = part.slice(relativeStart, Math.min(size2, relativeEnd));
        blobParts.push(chunk);
        added += ArrayBuffer.isView(chunk) ? chunk.byteLength : chunk.size;
        relativeStart = 0;
        if (added >= span) {
          break;
        }
      }
    }
    const blob = new Blob([], {type});
    Object.assign(wm.get(blob), {size: span, parts: blobParts});
    return blob;
  }
  get [Symbol.toStringTag]() {
    return "Blob";
  }
  static [Symbol.hasInstance](object) {
    return typeof object === "object" && typeof object.stream === "function" && object.stream.length === 0 && typeof object.constructor === "function" && /^(Blob|File)$/.test(object[Symbol.toStringTag]);
  }
}
Object.defineProperties(Blob.prototype, {
  size: {enumerable: true},
  type: {enumerable: true},
  slice: {enumerable: true}
});
var fetchBlob = Blob;
class FetchBaseError extends Error {
  constructor(message, type) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
    this.type = type;
  }
  get name() {
    return this.constructor.name;
  }
  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }
}
class FetchError extends FetchBaseError {
  constructor(message, type, systemError) {
    super(message, type);
    if (systemError) {
      this.code = this.errno = systemError.code;
      this.erroredSysCall = systemError.syscall;
    }
  }
}
const NAME = Symbol.toStringTag;
const isURLSearchParameters = (object) => {
  return typeof object === "object" && typeof object.append === "function" && typeof object.delete === "function" && typeof object.get === "function" && typeof object.getAll === "function" && typeof object.has === "function" && typeof object.set === "function" && typeof object.sort === "function" && object[NAME] === "URLSearchParams";
};
const isBlob = (object) => {
  return typeof object === "object" && typeof object.arrayBuffer === "function" && typeof object.type === "string" && typeof object.stream === "function" && typeof object.constructor === "function" && /^(Blob|File)$/.test(object[NAME]);
};
function isFormData(object) {
  return typeof object === "object" && typeof object.append === "function" && typeof object.set === "function" && typeof object.get === "function" && typeof object.getAll === "function" && typeof object.delete === "function" && typeof object.keys === "function" && typeof object.values === "function" && typeof object.entries === "function" && typeof object.constructor === "function" && object[NAME] === "FormData";
}
const isAbortSignal = (object) => {
  return typeof object === "object" && object[NAME] === "AbortSignal";
};
const carriage = "\r\n";
const dashes = "-".repeat(2);
const carriageLength = Buffer.byteLength(carriage);
const getFooter = (boundary) => `${dashes}${boundary}${dashes}${carriage.repeat(2)}`;
function getHeader(boundary, name, field) {
  let header = "";
  header += `${dashes}${boundary}${carriage}`;
  header += `Content-Disposition: form-data; name="${name}"`;
  if (isBlob(field)) {
    header += `; filename="${field.name}"${carriage}`;
    header += `Content-Type: ${field.type || "application/octet-stream"}`;
  }
  return `${header}${carriage.repeat(2)}`;
}
const getBoundary = () => randomBytes(8).toString("hex");
async function* formDataIterator(form, boundary) {
  for (const [name, value] of form) {
    yield getHeader(boundary, name, value);
    if (isBlob(value)) {
      yield* value.stream();
    } else {
      yield value;
    }
    yield carriage;
  }
  yield getFooter(boundary);
}
function getFormDataLength(form, boundary) {
  let length = 0;
  for (const [name, value] of form) {
    length += Buffer.byteLength(getHeader(boundary, name, value));
    if (isBlob(value)) {
      length += value.size;
    } else {
      length += Buffer.byteLength(String(value));
    }
    length += carriageLength;
  }
  length += Buffer.byteLength(getFooter(boundary));
  return length;
}
const INTERNALS$2 = Symbol("Body internals");
class Body {
  constructor(body, {
    size = 0
  } = {}) {
    let boundary = null;
    if (body === null) {
      body = null;
    } else if (isURLSearchParameters(body)) {
      body = Buffer.from(body.toString());
    } else if (isBlob(body))
      ;
    else if (Buffer.isBuffer(body))
      ;
    else if (types.isAnyArrayBuffer(body)) {
      body = Buffer.from(body);
    } else if (ArrayBuffer.isView(body)) {
      body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
    } else if (body instanceof Stream)
      ;
    else if (isFormData(body)) {
      boundary = `NodeFetchFormDataBoundary${getBoundary()}`;
      body = Stream.Readable.from(formDataIterator(body, boundary));
    } else {
      body = Buffer.from(String(body));
    }
    this[INTERNALS$2] = {
      body,
      boundary,
      disturbed: false,
      error: null
    };
    this.size = size;
    if (body instanceof Stream) {
      body.on("error", (err) => {
        const error2 = err instanceof FetchBaseError ? err : new FetchError(`Invalid response body while trying to fetch ${this.url}: ${err.message}`, "system", err);
        this[INTERNALS$2].error = error2;
      });
    }
  }
  get body() {
    return this[INTERNALS$2].body;
  }
  get bodyUsed() {
    return this[INTERNALS$2].disturbed;
  }
  async arrayBuffer() {
    const {buffer, byteOffset, byteLength} = await consumeBody(this);
    return buffer.slice(byteOffset, byteOffset + byteLength);
  }
  async blob() {
    const ct = this.headers && this.headers.get("content-type") || this[INTERNALS$2].body && this[INTERNALS$2].body.type || "";
    const buf = await this.buffer();
    return new fetchBlob([buf], {
      type: ct
    });
  }
  async json() {
    const buffer = await consumeBody(this);
    return JSON.parse(buffer.toString());
  }
  async text() {
    const buffer = await consumeBody(this);
    return buffer.toString();
  }
  buffer() {
    return consumeBody(this);
  }
}
Object.defineProperties(Body.prototype, {
  body: {enumerable: true},
  bodyUsed: {enumerable: true},
  arrayBuffer: {enumerable: true},
  blob: {enumerable: true},
  json: {enumerable: true},
  text: {enumerable: true}
});
async function consumeBody(data) {
  if (data[INTERNALS$2].disturbed) {
    throw new TypeError(`body used already for: ${data.url}`);
  }
  data[INTERNALS$2].disturbed = true;
  if (data[INTERNALS$2].error) {
    throw data[INTERNALS$2].error;
  }
  let {body} = data;
  if (body === null) {
    return Buffer.alloc(0);
  }
  if (isBlob(body)) {
    body = body.stream();
  }
  if (Buffer.isBuffer(body)) {
    return body;
  }
  if (!(body instanceof Stream)) {
    return Buffer.alloc(0);
  }
  const accum = [];
  let accumBytes = 0;
  try {
    for await (const chunk of body) {
      if (data.size > 0 && accumBytes + chunk.length > data.size) {
        const err = new FetchError(`content size at ${data.url} over limit: ${data.size}`, "max-size");
        body.destroy(err);
        throw err;
      }
      accumBytes += chunk.length;
      accum.push(chunk);
    }
  } catch (error2) {
    if (error2 instanceof FetchBaseError) {
      throw error2;
    } else {
      throw new FetchError(`Invalid response body while trying to fetch ${data.url}: ${error2.message}`, "system", error2);
    }
  }
  if (body.readableEnded === true || body._readableState.ended === true) {
    try {
      if (accum.every((c) => typeof c === "string")) {
        return Buffer.from(accum.join(""));
      }
      return Buffer.concat(accum, accumBytes);
    } catch (error2) {
      throw new FetchError(`Could not create Buffer from response body for ${data.url}: ${error2.message}`, "system", error2);
    }
  } else {
    throw new FetchError(`Premature close of server response while trying to fetch ${data.url}`);
  }
}
const clone = (instance, highWaterMark) => {
  let p1;
  let p2;
  let {body} = instance;
  if (instance.bodyUsed) {
    throw new Error("cannot clone body after it is used");
  }
  if (body instanceof Stream && typeof body.getBoundary !== "function") {
    p1 = new PassThrough({highWaterMark});
    p2 = new PassThrough({highWaterMark});
    body.pipe(p1);
    body.pipe(p2);
    instance[INTERNALS$2].body = p1;
    body = p2;
  }
  return body;
};
const extractContentType = (body, request) => {
  if (body === null) {
    return null;
  }
  if (typeof body === "string") {
    return "text/plain;charset=UTF-8";
  }
  if (isURLSearchParameters(body)) {
    return "application/x-www-form-urlencoded;charset=UTF-8";
  }
  if (isBlob(body)) {
    return body.type || null;
  }
  if (Buffer.isBuffer(body) || types.isAnyArrayBuffer(body) || ArrayBuffer.isView(body)) {
    return null;
  }
  if (body && typeof body.getBoundary === "function") {
    return `multipart/form-data;boundary=${body.getBoundary()}`;
  }
  if (isFormData(body)) {
    return `multipart/form-data; boundary=${request[INTERNALS$2].boundary}`;
  }
  if (body instanceof Stream) {
    return null;
  }
  return "text/plain;charset=UTF-8";
};
const getTotalBytes = (request) => {
  const {body} = request;
  if (body === null) {
    return 0;
  }
  if (isBlob(body)) {
    return body.size;
  }
  if (Buffer.isBuffer(body)) {
    return body.length;
  }
  if (body && typeof body.getLengthSync === "function") {
    return body.hasKnownLength && body.hasKnownLength() ? body.getLengthSync() : null;
  }
  if (isFormData(body)) {
    return getFormDataLength(request[INTERNALS$2].boundary);
  }
  return null;
};
const writeToStream = (dest, {body}) => {
  if (body === null) {
    dest.end();
  } else if (isBlob(body)) {
    body.stream().pipe(dest);
  } else if (Buffer.isBuffer(body)) {
    dest.write(body);
    dest.end();
  } else {
    body.pipe(dest);
  }
};
const validateHeaderName = typeof http.validateHeaderName === "function" ? http.validateHeaderName : (name) => {
  if (!/^[\^`\-\w!#$%&'*+.|~]+$/.test(name)) {
    const err = new TypeError(`Header name must be a valid HTTP token [${name}]`);
    Object.defineProperty(err, "code", {value: "ERR_INVALID_HTTP_TOKEN"});
    throw err;
  }
};
const validateHeaderValue = typeof http.validateHeaderValue === "function" ? http.validateHeaderValue : (name, value) => {
  if (/[^\t\u0020-\u007E\u0080-\u00FF]/.test(value)) {
    const err = new TypeError(`Invalid character in header content ["${name}"]`);
    Object.defineProperty(err, "code", {value: "ERR_INVALID_CHAR"});
    throw err;
  }
};
class Headers extends URLSearchParams {
  constructor(init2) {
    let result = [];
    if (init2 instanceof Headers) {
      const raw = init2.raw();
      for (const [name, values] of Object.entries(raw)) {
        result.push(...values.map((value) => [name, value]));
      }
    } else if (init2 == null)
      ;
    else if (typeof init2 === "object" && !types.isBoxedPrimitive(init2)) {
      const method = init2[Symbol.iterator];
      if (method == null) {
        result.push(...Object.entries(init2));
      } else {
        if (typeof method !== "function") {
          throw new TypeError("Header pairs must be iterable");
        }
        result = [...init2].map((pair) => {
          if (typeof pair !== "object" || types.isBoxedPrimitive(pair)) {
            throw new TypeError("Each header pair must be an iterable object");
          }
          return [...pair];
        }).map((pair) => {
          if (pair.length !== 2) {
            throw new TypeError("Each header pair must be a name/value tuple");
          }
          return [...pair];
        });
      }
    } else {
      throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");
    }
    result = result.length > 0 ? result.map(([name, value]) => {
      validateHeaderName(name);
      validateHeaderValue(name, String(value));
      return [String(name).toLowerCase(), String(value)];
    }) : void 0;
    super(result);
    return new Proxy(this, {
      get(target, p, receiver) {
        switch (p) {
          case "append":
          case "set":
            return (name, value) => {
              validateHeaderName(name);
              validateHeaderValue(name, String(value));
              return URLSearchParams.prototype[p].call(receiver, String(name).toLowerCase(), String(value));
            };
          case "delete":
          case "has":
          case "getAll":
            return (name) => {
              validateHeaderName(name);
              return URLSearchParams.prototype[p].call(receiver, String(name).toLowerCase());
            };
          case "keys":
            return () => {
              target.sort();
              return new Set(URLSearchParams.prototype.keys.call(target)).keys();
            };
          default:
            return Reflect.get(target, p, receiver);
        }
      }
    });
  }
  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }
  toString() {
    return Object.prototype.toString.call(this);
  }
  get(name) {
    const values = this.getAll(name);
    if (values.length === 0) {
      return null;
    }
    let value = values.join(", ");
    if (/^content-encoding$/i.test(name)) {
      value = value.toLowerCase();
    }
    return value;
  }
  forEach(callback) {
    for (const name of this.keys()) {
      callback(this.get(name), name);
    }
  }
  *values() {
    for (const name of this.keys()) {
      yield this.get(name);
    }
  }
  *entries() {
    for (const name of this.keys()) {
      yield [name, this.get(name)];
    }
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  raw() {
    return [...this.keys()].reduce((result, key) => {
      result[key] = this.getAll(key);
      return result;
    }, {});
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return [...this.keys()].reduce((result, key) => {
      const values = this.getAll(key);
      if (key === "host") {
        result[key] = values[0];
      } else {
        result[key] = values.length > 1 ? values : values[0];
      }
      return result;
    }, {});
  }
}
Object.defineProperties(Headers.prototype, ["get", "entries", "forEach", "values"].reduce((result, property) => {
  result[property] = {enumerable: true};
  return result;
}, {}));
function fromRawHeaders(headers = []) {
  return new Headers(headers.reduce((result, value, index2, array) => {
    if (index2 % 2 === 0) {
      result.push(array.slice(index2, index2 + 2));
    }
    return result;
  }, []).filter(([name, value]) => {
    try {
      validateHeaderName(name);
      validateHeaderValue(name, String(value));
      return true;
    } catch (e) {
      return false;
    }
  }));
}
const redirectStatus = new Set([301, 302, 303, 307, 308]);
const isRedirect = (code) => {
  return redirectStatus.has(code);
};
const INTERNALS$1 = Symbol("Response internals");
class Response extends Body {
  constructor(body = null, options = {}) {
    super(body, options);
    const status = options.status || 200;
    const headers = new Headers(options.headers);
    if (body !== null && !headers.has("Content-Type")) {
      const contentType = extractContentType(body);
      if (contentType) {
        headers.append("Content-Type", contentType);
      }
    }
    this[INTERNALS$1] = {
      url: options.url,
      status,
      statusText: options.statusText || "",
      headers,
      counter: options.counter,
      highWaterMark: options.highWaterMark
    };
  }
  get url() {
    return this[INTERNALS$1].url || "";
  }
  get status() {
    return this[INTERNALS$1].status;
  }
  get ok() {
    return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
  }
  get redirected() {
    return this[INTERNALS$1].counter > 0;
  }
  get statusText() {
    return this[INTERNALS$1].statusText;
  }
  get headers() {
    return this[INTERNALS$1].headers;
  }
  get highWaterMark() {
    return this[INTERNALS$1].highWaterMark;
  }
  clone() {
    return new Response(clone(this, this.highWaterMark), {
      url: this.url,
      status: this.status,
      statusText: this.statusText,
      headers: this.headers,
      ok: this.ok,
      redirected: this.redirected,
      size: this.size
    });
  }
  static redirect(url, status = 302) {
    if (!isRedirect(status)) {
      throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
    }
    return new Response(null, {
      headers: {
        location: new URL(url).toString()
      },
      status
    });
  }
  get [Symbol.toStringTag]() {
    return "Response";
  }
}
Object.defineProperties(Response.prototype, {
  url: {enumerable: true},
  status: {enumerable: true},
  ok: {enumerable: true},
  redirected: {enumerable: true},
  statusText: {enumerable: true},
  headers: {enumerable: true},
  clone: {enumerable: true}
});
const getSearch = (parsedURL) => {
  if (parsedURL.search) {
    return parsedURL.search;
  }
  const lastOffset = parsedURL.href.length - 1;
  const hash = parsedURL.hash || (parsedURL.href[lastOffset] === "#" ? "#" : "");
  return parsedURL.href[lastOffset - hash.length] === "?" ? "?" : "";
};
const INTERNALS = Symbol("Request internals");
const isRequest = (object) => {
  return typeof object === "object" && typeof object[INTERNALS] === "object";
};
class Request extends Body {
  constructor(input, init2 = {}) {
    let parsedURL;
    if (isRequest(input)) {
      parsedURL = new URL(input.url);
    } else {
      parsedURL = new URL(input);
      input = {};
    }
    let method = init2.method || input.method || "GET";
    method = method.toUpperCase();
    if ((init2.body != null || isRequest(input)) && input.body !== null && (method === "GET" || method === "HEAD")) {
      throw new TypeError("Request with GET/HEAD method cannot have body");
    }
    const inputBody = init2.body ? init2.body : isRequest(input) && input.body !== null ? clone(input) : null;
    super(inputBody, {
      size: init2.size || input.size || 0
    });
    const headers = new Headers(init2.headers || input.headers || {});
    if (inputBody !== null && !headers.has("Content-Type")) {
      const contentType = extractContentType(inputBody, this);
      if (contentType) {
        headers.append("Content-Type", contentType);
      }
    }
    let signal = isRequest(input) ? input.signal : null;
    if ("signal" in init2) {
      signal = init2.signal;
    }
    if (signal !== null && !isAbortSignal(signal)) {
      throw new TypeError("Expected signal to be an instanceof AbortSignal");
    }
    this[INTERNALS] = {
      method,
      redirect: init2.redirect || input.redirect || "follow",
      headers,
      parsedURL,
      signal
    };
    this.follow = init2.follow === void 0 ? input.follow === void 0 ? 20 : input.follow : init2.follow;
    this.compress = init2.compress === void 0 ? input.compress === void 0 ? true : input.compress : init2.compress;
    this.counter = init2.counter || input.counter || 0;
    this.agent = init2.agent || input.agent;
    this.highWaterMark = init2.highWaterMark || input.highWaterMark || 16384;
    this.insecureHTTPParser = init2.insecureHTTPParser || input.insecureHTTPParser || false;
  }
  get method() {
    return this[INTERNALS].method;
  }
  get url() {
    return format(this[INTERNALS].parsedURL);
  }
  get headers() {
    return this[INTERNALS].headers;
  }
  get redirect() {
    return this[INTERNALS].redirect;
  }
  get signal() {
    return this[INTERNALS].signal;
  }
  clone() {
    return new Request(this);
  }
  get [Symbol.toStringTag]() {
    return "Request";
  }
}
Object.defineProperties(Request.prototype, {
  method: {enumerable: true},
  url: {enumerable: true},
  headers: {enumerable: true},
  redirect: {enumerable: true},
  clone: {enumerable: true},
  signal: {enumerable: true}
});
const getNodeRequestOptions = (request) => {
  const {parsedURL} = request[INTERNALS];
  const headers = new Headers(request[INTERNALS].headers);
  if (!headers.has("Accept")) {
    headers.set("Accept", "*/*");
  }
  let contentLengthValue = null;
  if (request.body === null && /^(post|put)$/i.test(request.method)) {
    contentLengthValue = "0";
  }
  if (request.body !== null) {
    const totalBytes = getTotalBytes(request);
    if (typeof totalBytes === "number" && !Number.isNaN(totalBytes)) {
      contentLengthValue = String(totalBytes);
    }
  }
  if (contentLengthValue) {
    headers.set("Content-Length", contentLengthValue);
  }
  if (!headers.has("User-Agent")) {
    headers.set("User-Agent", "node-fetch");
  }
  if (request.compress && !headers.has("Accept-Encoding")) {
    headers.set("Accept-Encoding", "gzip,deflate,br");
  }
  let {agent} = request;
  if (typeof agent === "function") {
    agent = agent(parsedURL);
  }
  if (!headers.has("Connection") && !agent) {
    headers.set("Connection", "close");
  }
  const search = getSearch(parsedURL);
  const requestOptions = {
    path: parsedURL.pathname + search,
    pathname: parsedURL.pathname,
    hostname: parsedURL.hostname,
    protocol: parsedURL.protocol,
    port: parsedURL.port,
    hash: parsedURL.hash,
    search: parsedURL.search,
    query: parsedURL.query,
    href: parsedURL.href,
    method: request.method,
    headers: headers[Symbol.for("nodejs.util.inspect.custom")](),
    insecureHTTPParser: request.insecureHTTPParser,
    agent
  };
  return requestOptions;
};
class AbortError extends FetchBaseError {
  constructor(message, type = "aborted") {
    super(message, type);
  }
}
const supportedSchemas = new Set(["data:", "http:", "https:"]);
async function fetch(url, options_) {
  return new Promise((resolve2, reject) => {
    const request = new Request(url, options_);
    const options = getNodeRequestOptions(request);
    if (!supportedSchemas.has(options.protocol)) {
      throw new TypeError(`node-fetch cannot load ${url}. URL scheme "${options.protocol.replace(/:$/, "")}" is not supported.`);
    }
    if (options.protocol === "data:") {
      const data = src(request.url);
      const response2 = new Response(data, {headers: {"Content-Type": data.typeFull}});
      resolve2(response2);
      return;
    }
    const send = (options.protocol === "https:" ? https : http).request;
    const {signal} = request;
    let response = null;
    const abort = () => {
      const error2 = new AbortError("The operation was aborted.");
      reject(error2);
      if (request.body && request.body instanceof Stream.Readable) {
        request.body.destroy(error2);
      }
      if (!response || !response.body) {
        return;
      }
      response.body.emit("error", error2);
    };
    if (signal && signal.aborted) {
      abort();
      return;
    }
    const abortAndFinalize = () => {
      abort();
      finalize();
    };
    const request_ = send(options);
    if (signal) {
      signal.addEventListener("abort", abortAndFinalize);
    }
    const finalize = () => {
      request_.abort();
      if (signal) {
        signal.removeEventListener("abort", abortAndFinalize);
      }
    };
    request_.on("error", (err) => {
      reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, "system", err));
      finalize();
    });
    request_.on("response", (response_) => {
      request_.setTimeout(0);
      const headers = fromRawHeaders(response_.rawHeaders);
      if (isRedirect(response_.statusCode)) {
        const location = headers.get("Location");
        const locationURL = location === null ? null : new URL(location, request.url);
        switch (request.redirect) {
          case "error":
            reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, "no-redirect"));
            finalize();
            return;
          case "manual":
            if (locationURL !== null) {
              try {
                headers.set("Location", locationURL);
              } catch (error2) {
                reject(error2);
              }
            }
            break;
          case "follow": {
            if (locationURL === null) {
              break;
            }
            if (request.counter >= request.follow) {
              reject(new FetchError(`maximum redirect reached at: ${request.url}`, "max-redirect"));
              finalize();
              return;
            }
            const requestOptions = {
              headers: new Headers(request.headers),
              follow: request.follow,
              counter: request.counter + 1,
              agent: request.agent,
              compress: request.compress,
              method: request.method,
              body: request.body,
              signal: request.signal,
              size: request.size
            };
            if (response_.statusCode !== 303 && request.body && options_.body instanceof Stream.Readable) {
              reject(new FetchError("Cannot follow redirect with body being a readable stream", "unsupported-redirect"));
              finalize();
              return;
            }
            if (response_.statusCode === 303 || (response_.statusCode === 301 || response_.statusCode === 302) && request.method === "POST") {
              requestOptions.method = "GET";
              requestOptions.body = void 0;
              requestOptions.headers.delete("content-length");
            }
            resolve2(fetch(new Request(locationURL, requestOptions)));
            finalize();
            return;
          }
        }
      }
      response_.once("end", () => {
        if (signal) {
          signal.removeEventListener("abort", abortAndFinalize);
        }
      });
      let body = pipeline(response_, new PassThrough(), (error2) => {
        reject(error2);
      });
      if (process.version < "v12.10") {
        response_.on("aborted", abortAndFinalize);
      }
      const responseOptions = {
        url: request.url,
        status: response_.statusCode,
        statusText: response_.statusMessage,
        headers,
        size: request.size,
        counter: request.counter,
        highWaterMark: request.highWaterMark
      };
      const codings = headers.get("Content-Encoding");
      if (!request.compress || request.method === "HEAD" || codings === null || response_.statusCode === 204 || response_.statusCode === 304) {
        response = new Response(body, responseOptions);
        resolve2(response);
        return;
      }
      const zlibOptions = {
        flush: zlib.Z_SYNC_FLUSH,
        finishFlush: zlib.Z_SYNC_FLUSH
      };
      if (codings === "gzip" || codings === "x-gzip") {
        body = pipeline(body, zlib.createGunzip(zlibOptions), (error2) => {
          reject(error2);
        });
        response = new Response(body, responseOptions);
        resolve2(response);
        return;
      }
      if (codings === "deflate" || codings === "x-deflate") {
        const raw = pipeline(response_, new PassThrough(), (error2) => {
          reject(error2);
        });
        raw.once("data", (chunk) => {
          if ((chunk[0] & 15) === 8) {
            body = pipeline(body, zlib.createInflate(), (error2) => {
              reject(error2);
            });
          } else {
            body = pipeline(body, zlib.createInflateRaw(), (error2) => {
              reject(error2);
            });
          }
          response = new Response(body, responseOptions);
          resolve2(response);
        });
        return;
      }
      if (codings === "br") {
        body = pipeline(body, zlib.createBrotliDecompress(), (error2) => {
          reject(error2);
        });
        response = new Response(body, responseOptions);
        resolve2(response);
        return;
      }
      response = new Response(body, responseOptions);
      resolve2(response);
    });
    writeToStream(request_, request);
  });
}
function noop$1() {
}
function safe_not_equal$1(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
const subscriber_queue$1 = [];
function writable$1(value, start = noop$1) {
  let stop;
  const subscribers = [];
  function set(new_value) {
    if (safe_not_equal$1(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue$1.length;
        for (let i = 0; i < subscribers.length; i += 1) {
          const s2 = subscribers[i];
          s2[1]();
          subscriber_queue$1.push(s2, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue$1.length; i += 2) {
            subscriber_queue$1[i][0](subscriber_queue$1[i + 1]);
          }
          subscriber_queue$1.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop$1) {
    const subscriber = [run2, invalidate];
    subscribers.push(subscriber);
    if (subscribers.length === 1) {
      stop = start(set) || noop$1;
    }
    run2(value);
    return () => {
      const index2 = subscribers.indexOf(subscriber);
      if (index2 !== -1) {
        subscribers.splice(index2, 1);
      }
      if (subscribers.length === 0) {
        stop();
        stop = null;
      }
    };
  }
  return {set, update, subscribe: subscribe2};
}
function normalize(loaded) {
  if (loaded.error) {
    const error2 = typeof loaded.error === "string" ? new Error(loaded.error) : loaded.error;
    const status = loaded.status;
    if (!(error2 instanceof Error)) {
      return {
        status: 500,
        error: new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof error2}"`)
      };
    }
    if (!status || status < 400 || status > 599) {
      console.warn('"error" returned from load() without a valid status code \u2014 defaulting to 500');
      return {status: 500, error: error2};
    }
    return {status, error: error2};
  }
  if (loaded.redirect) {
    if (!loaded.status || Math.floor(loaded.status / 100) !== 3) {
      return {
        status: 500,
        error: new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')
      };
    }
    if (typeof loaded.redirect !== "string") {
      return {
        status: 500,
        error: new Error('"redirect" property returned from load() must be a string')
      };
    }
  }
  return loaded;
}
const s = JSON.stringify;
async function get_response({request, options, $session, route, status = 200, error: error2}) {
  const dependencies = {};
  const serialized_session = try_serialize($session, (error3) => {
    throw new Error(`Failed to serialize session data: ${error3.message}`);
  });
  const serialized_data = [];
  const match = error2 ? null : route.pattern.exec(request.path);
  const params = error2 ? {} : route.params(match);
  const page = {
    host: request.host,
    path: request.path,
    query: request.query,
    params
  };
  let uses_credentials = false;
  const fetcher = async (resource, opts = {}) => {
    let url;
    if (typeof resource === "string") {
      url = resource;
    } else {
      url = resource.url;
      opts = {
        method: resource.method,
        headers: resource.headers,
        body: resource.body,
        mode: resource.mode,
        credentials: resource.credentials,
        cache: resource.cache,
        redirect: resource.redirect,
        referrer: resource.referrer,
        integrity: resource.integrity,
        ...opts
      };
    }
    if (options.local && url.startsWith(options.paths.assets)) {
      url = url.replace(options.paths.assets, "");
    }
    const parsed = parse(url);
    if (opts.credentials !== "omit") {
      uses_credentials = true;
    }
    let response;
    if (parsed.protocol) {
      response = await fetch(parsed.href, opts);
    } else {
      const resolved = resolve(request.path, parsed.pathname);
      const filename = resolved.slice(1);
      const filename_html = `${filename}/index.html`;
      const asset = options.manifest.assets.find((d) => d.file === filename || d.file === filename_html);
      if (asset) {
        if (options.get_static_file) {
          response = new Response(options.get_static_file(asset.file), {
            headers: {
              "content-type": asset.type
            }
          });
        } else {
          response = await fetch(`http://${page.host}/${asset.file}`, opts);
        }
      }
      if (!response) {
        const rendered2 = await ssr({
          host: request.host,
          method: opts.method || "GET",
          headers: opts.headers || {},
          path: resolved,
          body: opts.body,
          query: new URLSearchParams$1(parsed.query || "")
        }, {
          ...options,
          fetched: url,
          initiator: route
        });
        if (rendered2) {
          dependencies[resolved] = rendered2;
          response = new Response(rendered2.body, {
            status: rendered2.status,
            headers: rendered2.headers
          });
        }
      }
    }
    if (response) {
      const proxy = new Proxy(response, {
        get(response2, key, receiver) {
          async function text() {
            const body2 = await response2.text();
            const headers2 = {};
            response2.headers.forEach((value, key2) => {
              if (key2 !== "etag")
                headers2[key2] = value;
            });
            serialized_data.push({
              url,
              json: `{"status":${response2.status},"statusText":${s(response2.statusText)},"headers":${s(headers2)},"body":${escape$1(body2)}}`
            });
            return body2;
          }
          if (key === "text") {
            return text;
          }
          if (key === "json") {
            return async () => {
              return JSON.parse(await text());
            };
          }
          return Reflect.get(response2, key, receiver);
        }
      });
      return proxy;
    }
    return new Response("Not found", {
      status: 404
    });
  };
  const component_promises = error2 ? [options.manifest.layout()] : [options.manifest.layout(), ...route.parts.map((part) => part.load())];
  const components2 = [];
  const props_promises = [];
  let context = {};
  let maxage;
  let page_component;
  try {
    page_component = error2 ? {ssr: options.ssr, router: options.router, hydrate: options.hydrate} : await component_promises[component_promises.length - 1];
  } catch (e) {
    return await get_response({
      request,
      options,
      $session,
      route: null,
      status: 500,
      error: e instanceof Error ? e : {name: "Error", message: e.toString()}
    });
  }
  const page_config = {
    ssr: "ssr" in page_component ? page_component.ssr : options.ssr,
    router: "router" in page_component ? page_component.router : options.router,
    hydrate: "hydrate" in page_component ? page_component.hydrate : options.hydrate
  };
  if (options.only_render_prerenderable_pages) {
    if (error2)
      return;
    if (!page_component.prerender)
      return;
  }
  let rendered;
  if (page_config.ssr) {
    for (let i = 0; i < component_promises.length; i += 1) {
      let loaded;
      try {
        const mod = await component_promises[i];
        components2[i] = mod.default;
        if (mod.preload) {
          throw new Error("preload has been deprecated in favour of load. Please consult the documentation: https://kit.svelte.dev/docs#loading");
        }
        if (mod.load) {
          loaded = await mod.load.call(null, {
            page,
            get session() {
              uses_credentials = true;
              return $session;
            },
            fetch: fetcher,
            context: {...context}
          });
          if (!loaded && mod === page_component)
            return;
        }
      } catch (e) {
        if (error2)
          throw e instanceof Error ? e : new Error(e);
        loaded = {
          error: e instanceof Error ? e : {name: "Error", message: e.toString()},
          status: 500
        };
      }
      if (loaded) {
        loaded = normalize(loaded);
        if (loaded.error) {
          return await get_response({
            request,
            options,
            $session,
            route: null,
            status: loaded.status,
            error: loaded.error
          });
        }
        if (loaded.redirect) {
          return {
            status: loaded.status,
            headers: {
              location: loaded.redirect
            }
          };
        }
        if (loaded.context) {
          context = {
            ...context,
            ...loaded.context
          };
        }
        maxage = loaded.maxage || 0;
        props_promises[i] = loaded.props;
      }
    }
    const session = writable$1($session);
    let session_tracking_active = false;
    const unsubscribe = session.subscribe(() => {
      if (session_tracking_active)
        uses_credentials = true;
    });
    session_tracking_active = true;
    if (error2) {
      if (options.dev) {
        error2.stack = await options.get_stack(error2);
      } else {
        error2.stack = String(error2);
      }
    }
    const props = {
      status,
      error: error2,
      stores: {
        page: writable$1(null),
        navigating: writable$1(null),
        session
      },
      page,
      components: components2
    };
    for (let i = 0; i < props_promises.length; i += 1) {
      props[`props_${i}`] = await props_promises[i];
    }
    try {
      rendered = options.root.render(props);
    } catch (e) {
      if (error2)
        throw e instanceof Error ? e : new Error(e);
      return await get_response({
        request,
        options,
        $session,
        route: null,
        status: 500,
        error: e instanceof Error ? e : {name: "Error", message: e.toString()}
      });
    }
    unsubscribe();
  } else {
    rendered = {
      head: "",
      html: "",
      css: ""
    };
  }
  const js_deps = route ? route.js : [];
  const css_deps = route ? route.css : [];
  const style = route ? route.style : "";
  const prefix = `${options.paths.assets}/${options.app_dir}`;
  const links = options.amp ? `<style amp-custom>${style || (await Promise.all(css_deps.map((dep) => options.get_amp_css(dep)))).join("\n")}</style>` : [
    ...js_deps.map((dep) => `<link rel="modulepreload" href="${prefix}/${dep}">`),
    ...css_deps.map((dep) => `<link rel="stylesheet" href="${prefix}/${dep}">`)
  ].join("\n			");
  let init2 = "";
  if (options.amp) {
    init2 = `
		<style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style>
		<noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
		<script async src="https://cdn.ampproject.org/v0.js"></script>`;
  } else if (page_config.router || page_config.hydrate) {
    init2 = `
		<script type="module">
			import { start } from ${s(options.entry)};
			start({
				target: ${options.target ? `document.querySelector(${s(options.target)})` : "document.body"},
				paths: ${s(options.paths)},
				session: ${serialized_session},
				host: ${request.host ? s(request.host) : "location.host"},
				route: ${!!page_config.router},
				hydrate: ${page_config.hydrate ? `{
					status: ${status},
					error: ${serialize_error(error2)},
					nodes: ${route ? `[
						${(route ? route.parts : []).map((part) => `import(${s(options.get_component_path(part.id))})`).join(",\n						")}
					]` : "[]"},
					page: {
						host: ${request.host ? s(request.host) : "location.host"}, // TODO this is redundant
						path: ${s(request.path)},
						query: new URLSearchParams(${s(request.query.toString())}),
						params: ${s(params)}
					}
				}` : "null"}
			});
		</script>`;
  }
  const head = [
    rendered.head,
    style && !options.amp ? `<style data-svelte>${style}</style>` : "",
    links,
    init2
  ].join("\n\n");
  const body = options.amp ? rendered.html : `${rendered.html}

			${serialized_data.map(({url, json}) => `<script type="svelte-data" url="${url}">${json}</script>`).join("\n\n			")}
		`.replace(/^\t{2}/gm, "");
  const headers = {
    "content-type": "text/html"
  };
  if (maxage) {
    headers["cache-control"] = `${uses_credentials ? "private" : "public"}, max-age=${maxage}`;
  }
  return {
    status,
    headers,
    body: options.template({head, body}),
    dependencies
  };
}
async function render_page(request, route, options) {
  if (options.initiator === route) {
    return {
      status: 404,
      headers: {},
      body: `Not found: ${request.path}`
    };
  }
  const $session = await options.hooks.getSession({context: request.context});
  const response = await get_response({
    request,
    options,
    $session,
    route,
    status: route ? 200 : 404,
    error: route ? null : new Error(`Not found: ${request.path}`)
  });
  if (response) {
    return response;
  }
  if (options.fetched) {
    return {
      status: 500,
      headers: {},
      body: `Bad request in load function: failed to fetch ${options.fetched}`
    };
  }
}
function try_serialize(data, fail) {
  try {
    return devalue(data);
  } catch (err) {
    if (fail)
      fail(err);
    return null;
  }
}
function serialize_error(error2) {
  if (!error2)
    return null;
  let serialized = try_serialize(error2);
  if (!serialized) {
    const {name, message, stack} = error2;
    serialized = try_serialize({name, message, stack});
  }
  if (!serialized) {
    serialized = "{}";
  }
  return serialized;
}
const escaped$2 = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
function escape$1(str) {
  let result = '"';
  for (let i = 0; i < str.length; i += 1) {
    const char = str.charAt(i);
    const code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped$2) {
      result += escaped$2[char];
    } else if (code >= 55296 && code <= 57343) {
      const next = str.charCodeAt(i + 1);
      if (code <= 56319 && next >= 56320 && next <= 57343) {
        result += char + str[++i];
      } else {
        result += `\\u${code.toString(16).toUpperCase()}`;
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}
async function render_route(request, route) {
  const mod = await route.load();
  const handler = mod[request.method.toLowerCase().replace("delete", "del")];
  if (handler) {
    const match = route.pattern.exec(request.path);
    const params = route.params(match);
    const response = await handler({...request, params});
    if (response) {
      if (typeof response !== "object" || response.body == null) {
        return {
          status: 500,
          body: `Invalid response from route ${request.path}; ${response.body == null ? "body is missing" : `expected an object, got ${typeof response}`}`,
          headers: {}
        };
      }
      let {status = 200, body, headers = {}} = response;
      headers = lowercase_keys(headers);
      if (typeof body === "object" && !("content-type" in headers) || headers["content-type"] === "application/json") {
        headers = {...headers, "content-type": "application/json"};
        body = JSON.stringify(body);
      }
      return {status, body, headers};
    }
  }
}
function lowercase_keys(obj) {
  const clone2 = {};
  for (const key in obj) {
    clone2[key.toLowerCase()] = obj[key];
  }
  return clone2;
}
function md5(body) {
  return createHash("md5").update(body).digest("hex");
}
async function ssr(incoming, options) {
  if (incoming.path.endsWith("/") && incoming.path !== "/") {
    const q = incoming.query.toString();
    return {
      status: 301,
      headers: {
        location: incoming.path.slice(0, -1) + (q ? `?${q}` : "")
      }
    };
  }
  const context = await options.hooks.getContext(incoming) || {};
  try {
    return await options.hooks.handle({
      ...incoming,
      params: null,
      context
    }, async (request) => {
      for (const route of options.manifest.routes) {
        if (!route.pattern.test(request.path))
          continue;
        const response = route.type === "endpoint" ? await render_route(request, route) : await render_page(request, route, options);
        if (response) {
          if (response.status === 200) {
            if (!/(no-store|immutable)/.test(response.headers["cache-control"])) {
              const etag = `"${md5(response.body)}"`;
              if (request.headers["if-none-match"] === etag) {
                return {
                  status: 304,
                  headers: {},
                  body: null
                };
              }
              response.headers["etag"] = etag;
            }
          }
          return response;
        }
      }
      return await render_page(request, null, options);
    });
  } catch (e) {
    if (e && e.stack) {
      e.stack = await options.get_stack(e);
    }
    console.error(e && e.stack || e);
    return {
      status: 500,
      headers: {},
      body: options.dev ? e.stack : e.message
    };
  }
}
function noop() {
}
const identity = (x) => x;
function assign(tar, src2) {
  for (const k in src2)
    tar[k] = src2[k];
  return tar;
}
function run(fn) {
  return fn();
}
function blank_object() {
  return Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
function subscribe(store, ...callbacks) {
  if (store == null) {
    return noop;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function null_to_empty(value) {
  return value == null ? "" : value;
}
const is_client = typeof window !== "undefined";
let now = is_client ? () => window.performance.now() : () => Date.now();
let raf = is_client ? (cb) => requestAnimationFrame(cb) : noop;
const tasks = new Set();
function run_tasks(now2) {
  tasks.forEach((task) => {
    if (!task.c(now2)) {
      tasks.delete(task);
      task.f();
    }
  });
  if (tasks.size !== 0)
    raf(run_tasks);
}
function loop(callback) {
  let task;
  if (tasks.size === 0)
    raf(run_tasks);
  return {
    promise: new Promise((fulfill) => {
      tasks.add(task = {c: callback, f: fulfill});
    }),
    abort() {
      tasks.delete(task);
    }
  };
}
let current_component;
function set_current_component(component) {
  current_component = component;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function onMount(fn) {
  get_current_component().$$.on_mount.push(fn);
}
function afterUpdate(fn) {
  get_current_component().$$.after_update.push(fn);
}
function setContext(key, context) {
  get_current_component().$$.context.set(key, context);
}
const escaped = {
  '"': "&quot;",
  "'": "&#39;",
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;"
};
function escape(html) {
  return String(html).replace(/["'&<>]/g, (match) => escaped[match]);
}
function each(items, fn) {
  let str = "";
  for (let i = 0; i < items.length; i += 1) {
    str += fn(items[i], i);
  }
  return str;
}
const missing_component = {
  $$render: () => ""
};
function validate_component(component, name) {
  if (!component || !component.$$render) {
    if (name === "svelte:component")
      name += " this={...}";
    throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
  }
  return component;
}
let on_destroy;
function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots, context) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(parent_component ? parent_component.$$.context : context || []),
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({$$});
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }
  return {
    render: (props = {}, {$$slots = {}, context = new Map()} = {}) => {
      on_destroy = [];
      const result = {title: "", head: "", css: new Set()};
      const html = $$render(result, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map((css2) => css2.code).join("\n"),
          map: null
        },
        head: result.title + result.head
      };
    },
    $$render
  };
}
function add_attribute(name, value, boolean) {
  if (value == null || boolean && !value)
    return "";
  return ` ${name}${value === true ? "" : `=${typeof value === "string" ? JSON.stringify(escape(value)) : `"${value}"`}`}`;
}
const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {status} = $$props;
  let {error: error2} = $$props;
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.error === void 0 && $$bindings.error && error2 !== void 0)
    $$bindings.error(error2);
  return `<h1>${escape(status)}</h1>

<p>${escape(error2.message)}</p>


${error2.stack ? `<pre>${escape(error2.stack)}</pre>` : ``}`;
});
var error = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: Error$1
});
var root_svelte = "#svelte-announcer.svelte-1j55zn5{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}";
const css$e = {
  code: "#svelte-announcer.svelte-1j55zn5{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}",
  map: `{"version":3,"file":"root.svelte","sources":["root.svelte"],"sourcesContent":["<!-- This file is generated by @sveltejs/kit \u2014 do not edit it! -->\\n<script>\\n\\timport { setContext, afterUpdate, onMount } from 'svelte';\\n\\timport ErrorComponent from \\"../components/error.svelte\\";\\n\\n\\t// error handling\\n\\texport let status = undefined;\\n\\texport let error = undefined;\\n\\n\\t// stores\\n\\texport let stores;\\n\\texport let page;\\n\\n\\texport let components;\\n\\texport let props_0 = null;\\n\\texport let props_1 = null;\\n\\n\\tconst Layout = components[0];\\n\\n\\tsetContext('__svelte__', stores);\\n\\n\\t$: stores.page.set(page);\\n\\tafterUpdate(stores.page.notify);\\n\\n\\tlet mounted = false;\\n\\tlet navigated = false;\\n\\tlet title = null;\\n\\n\\tonMount(() => {\\n\\t\\tconst unsubscribe = stores.page.subscribe(() => {\\n\\t\\t\\tif (mounted) {\\n\\t\\t\\t\\tnavigated = true;\\n\\t\\t\\t\\ttitle = document.title;\\n\\t\\t\\t}\\n\\t\\t});\\n\\n\\t\\tmounted = true;\\n\\t\\treturn unsubscribe;\\n\\t});\\n</script>\\n\\n<Layout {...(props_0 || {})}>\\n\\t{#if error}\\n\\t\\t<ErrorComponent {status} {error}/>\\n\\t{:else}\\n\\t\\t<svelte:component this={components[1]} {...(props_1 || {})}/>\\n\\t{/if}\\n</Layout>\\n\\n{#if mounted}\\n\\t<div id=\\"svelte-announcer\\" aria-live=\\"assertive\\" aria-atomic=\\"true\\">\\n\\t\\t{#if navigated}\\n\\t\\t\\tNavigated to {title}\\n\\t\\t{/if}\\n\\t</div>\\n{/if}\\n\\n<style>\\n\\t#svelte-announcer {\\n\\t\\tposition: absolute;\\n\\t\\tleft: 0;\\n\\t\\ttop: 0;\\n\\t\\tclip: rect(0 0 0 0);\\n\\t\\tclip-path: inset(50%);\\n\\t\\toverflow: hidden;\\n\\t\\twhite-space: nowrap;\\n\\t\\twidth: 1px;\\n\\t\\theight: 1px;\\n\\t}\\n</style>"],"names":[],"mappings":"AA0DC,iBAAiB,eAAC,CAAC,AAClB,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,CAAC,CACP,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACnB,SAAS,CAAE,MAAM,GAAG,CAAC,CACrB,QAAQ,CAAE,MAAM,CAChB,WAAW,CAAE,MAAM,CACnB,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,AACZ,CAAC"}`
};
const Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {status = void 0} = $$props;
  let {error: error2 = void 0} = $$props;
  let {stores} = $$props;
  let {page} = $$props;
  let {components: components2} = $$props;
  let {props_0 = null} = $$props;
  let {props_1 = null} = $$props;
  const Layout = components2[0];
  setContext("__svelte__", stores);
  afterUpdate(stores.page.notify);
  let mounted = false;
  let navigated = false;
  let title = null;
  onMount(() => {
    const unsubscribe = stores.page.subscribe(() => {
      if (mounted) {
        navigated = true;
        title = document.title;
      }
    });
    mounted = true;
    return unsubscribe;
  });
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.error === void 0 && $$bindings.error && error2 !== void 0)
    $$bindings.error(error2);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.components === void 0 && $$bindings.components && components2 !== void 0)
    $$bindings.components(components2);
  if ($$props.props_0 === void 0 && $$bindings.props_0 && props_0 !== void 0)
    $$bindings.props_0(props_0);
  if ($$props.props_1 === void 0 && $$bindings.props_1 && props_1 !== void 0)
    $$bindings.props_1(props_1);
  $$result.css.add(css$e);
  {
    stores.page.set(page);
  }
  return `


${validate_component(Layout, "Layout").$$render($$result, Object.assign(props_0 || {}), {}, {
    default: () => `${error2 ? `${validate_component(Error$1, "ErrorComponent").$$render($$result, {status, error: error2}, {}, {})}` : `${validate_component(components2[1] || missing_component, "svelte:component").$$render($$result, Object.assign(props_1 || {}), {}, {})}`}`
  })}

${mounted ? `<div id="${"svelte-announcer"}" aria-live="${"assertive"}" aria-atomic="${"true"}" class="${"svelte-1j55zn5"}">${navigated ? `Navigated to ${escape(title)}` : ``}</div>` : ``}`;
});
var user_hooks = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module"
});
const template = ({head, body}) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<link rel="icon" href="/favicon.ico" />\n		<meta name="viewport" content="width=device-width, initial-scale=1" />\n		' + head + '\n	</head>\n	<body>\n		<div id="svelte">' + body + "</div>\n	</body>\n</html>\n";
function init({paths}) {
}
const empty = () => ({});
const components = [
  () => Promise.resolve().then(function() {
    return index$2;
  }),
  () => Promise.resolve().then(function() {
    return index$1;
  }),
  () => Promise.resolve().then(function() {
    return index;
  })
];
const client_component_lookup = {".svelte/build/runtime/internal/start.js": "start-a606f874.js", "src/routes/index.svelte": "pages/index.svelte-f93b544a.js", "src/routes/artworks/index.svelte": "pages/artworks/index.svelte-ff9b157c.js", "src/routes/about/index.svelte": "pages/about/index.svelte-24e5b52c.js"};
const manifest = {
  assets: [{file: "favicon.ico", size: 1150, type: "image/vnd.microsoft.icon"}, {file: "img/01234-6.png", size: 2115211, type: "image/png"}, {file: "img/01234-7.jpg", size: 137827, type: "image/jpeg"}, {file: "img/01234-7.png", size: 2332050, type: "image/png"}, {file: "img/01234.svg", size: 3134, type: "image/svg+xml"}, {file: "img/02234-14.jpg", size: 124337, type: "image/jpeg"}, {file: "img/0810.jpg", size: 4532546, type: "image/jpeg"}, {file: "img/0877.jpg", size: 4811645, type: "image/jpeg"}, {file: "img/130321.jpg", size: 151318, type: "image/jpeg"}, {file: "img/avatar.jpg", size: 27797, type: "image/jpeg"}, {file: "img/bg1.jpg", size: 181644, type: "image/jpeg"}, {file: "img/bg2.jpg", size: 172530, type: "image/jpeg"}, {file: "img/bg3.jpg", size: 123076, type: "image/jpeg"}, {file: "img/bg4.jpg", size: 130446, type: "image/jpeg"}, {file: "img/cover1.jpg", size: 106747, type: "image/jpeg"}, {file: "img/cover1.png", size: 359650, type: "image/png"}, {file: "img/cover2.jpg", size: 387156, type: "image/jpeg"}, {file: "img/cover3.jpg", size: 101288, type: "image/jpeg"}, {file: "img/cover4.jpg", size: 96004, type: "image/jpeg"}, {file: "img/cuadro-anim.mp4", size: 1145856, type: "video/mp4"}, {file: "img/cuadro-anim.webm", size: 1159141, type: "video/webm"}, {file: "img/desdelapoesiadelamateria.mp4", size: 40247979, type: "video/mp4"}, {file: "img/desdelapoesiadelamateria.webm", size: 35627843, type: "video/webm"}, {file: "img/detalle4.jpg", size: 191494, type: "image/jpeg"}, {file: "img/esquema-sintesis2.svg", size: 9176, type: "image/svg+xml"}, {file: "img/esquema-sintesis3.svg", size: 12462, type: "image/svg+xml"}, {file: "img/frontend.jpg", size: 68411, type: "image/jpeg"}, {file: "img/gematria.gif", size: 15721, type: "image/gif"}, {file: "img/grafico-4.jpg", size: 23958, type: "image/jpeg"}, {file: "img/grafico-diez.jpg", size: 74950, type: "image/jpeg"}, {file: "img/grafico-nueve.jpg", size: 110655, type: "image/jpeg"}, {file: "img/grafico-ocho.jpg", size: 134701, type: "image/jpeg"}, {file: "img/grafico-once.jpg", size: 76392, type: "image/jpeg"}, {file: "img/grafico-siete.jpg", size: 102501, type: "image/jpeg"}, {file: "img/img12.jpg", size: 190374, type: "image/jpeg"}, {file: "img/img3.jpg", size: 109151, type: "image/jpeg"}, {file: "img/libro.svg", size: 3213, type: "image/svg+xml"}, {file: "img/logo-footer.svg", size: 4e3, type: "image/svg+xml"}, {file: "img/logo.svg", size: 4253, type: "image/svg+xml"}, {file: "img/malla2.gif", size: 303615, type: "image/gif"}, {file: "img/obra/img0.jpg", size: 164255, type: "image/jpeg"}, {file: "img/obra/img1.jpg", size: 285134, type: "image/jpeg"}, {file: "img/obra/img2.jpg", size: 136439, type: "image/jpeg"}, {file: "img/obra/img3.jpg", size: 253870, type: "image/jpeg"}, {file: "img/obra/img4.jpg", size: 135601, type: "image/jpeg"}, {file: "img/obra/img5.jpg", size: 145776, type: "image/jpeg"}, {file: "img/obra/img6.jpg", size: 190092, type: "image/jpeg"}, {file: "img/obra/img7.jpg", size: 155194, type: "image/jpeg"}, {file: "img/raptordelta.jpeg", size: 103621, type: "image/jpeg"}, {file: "img/tetractys.svg", size: 1443, type: "image/svg+xml"}, {file: "img/tot-v6.png", size: 453687, type: "image/png"}, {file: "img/velociraptor.jpg", size: 51179, type: "image/jpeg"}, {file: "robots.txt", size: 67, type: "text/plain"}],
  layout: () => Promise.resolve().then(function() {
    return $layout$1;
  }),
  error: () => Promise.resolve().then(function() {
    return error;
  }),
  routes: [
    {
      type: "page",
      pattern: /^\/$/,
      params: empty,
      parts: [{id: "src/routes/index.svelte", load: components[0]}],
      css: ["assets/start-5122558e.css", "assets/pages/index.svelte-8a8b585e.css", "assets/FlipCard-7018c46f.css", "assets/Section-95823de1.css"],
      js: ["start-a606f874.js", "chunks/vendor-02401848.js", "chunks/index-ca4d1474.js", "pages/index.svelte-f93b544a.js", "chunks/FlipCard-594c53eb.js", "chunks/Section-d4b14a01.js"]
    },
    {
      type: "page",
      pattern: /^\/artworks\/?$/,
      params: empty,
      parts: [{id: "src/routes/artworks/index.svelte", load: components[1]}],
      css: ["assets/start-5122558e.css", "assets/FlipCard-7018c46f.css"],
      js: ["start-a606f874.js", "chunks/vendor-02401848.js", "chunks/index-ca4d1474.js", "pages/artworks/index.svelte-ff9b157c.js", "chunks/FlipCard-594c53eb.js"]
    },
    {
      type: "page",
      pattern: /^\/about\/?$/,
      params: empty,
      parts: [{id: "src/routes/about/index.svelte", load: components[2]}],
      css: ["assets/start-5122558e.css", "assets/pages/about/index.svelte-911f19d7.css", "assets/Section-95823de1.css"],
      js: ["start-a606f874.js", "chunks/vendor-02401848.js", "chunks/index-ca4d1474.js", "pages/about/index.svelte-24e5b52c.js", "chunks/Section-d4b14a01.js"]
    }
  ]
};
const get_hooks = (hooks2) => ({
  getContext: hooks2.getContext || (() => ({})),
  getSession: hooks2.getSession || (() => ({})),
  handle: hooks2.handle || ((request, render2) => render2(request))
});
const hooks = get_hooks(user_hooks);
function render(request, {
  paths = {base: "", assets: "/."},
  local = false,
  only_render_prerenderable_pages = false,
  get_static_file
} = {}) {
  return ssr({
    ...request,
    host: request.headers["host"]
  }, {
    paths,
    local,
    template,
    manifest,
    target: "#svelte",
    entry: "/./_app/start-a606f874.js",
    root: Root,
    hooks,
    dev: false,
    amp: false,
    only_render_prerenderable_pages,
    app_dir: "_app",
    get_component_path: (id) => "/./_app/" + client_component_lookup[id],
    get_stack: (error2) => error2.stack,
    get_static_file,
    get_amp_css: (dep) => amp_css_lookup[dep],
    ssr: true,
    router: true,
    hydrate: true
  });
}
const quotes = [
  {
    quote: "The road to success is always under construction.",
    author: "Lily Tomlin",
    image: "/img/bg1.jpg"
  },
  {
    quote: "A day without sunshine is like, you know, night.",
    author: "Steve Martin",
    image: "/img/bg2.jpg"
  },
  {
    quote: "My grandmother started walking five miles a day when she was sixty. She's ninety-seven now, and we don't know where the hell she is.",
    author: "Ellen Degeneres",
    image: "/img/bg3.jpg"
  },
  {
    quote: "Expecting the world to treat you fairly because you are a good person is a little like expecting the bull not to attack you because you are a vegetarian.",
    author: "Denis Wholey",
    image: "/img/bg4.jpg"
  },
  {
    quote: "Life begins at 40 - but so do fallen arches, rheumatism, faulty eyesight, and the tendency to tell a story to the same person, three or four times.",
    author: "Helen Rowland",
    image: "/img/cover4.jpg"
  }
];
function backInOut(t) {
  const s2 = 1.70158 * 1.525;
  if ((t *= 2) < 1)
    return 0.5 * (t * t * ((s2 + 1) * t - s2));
  return 0.5 * ((t -= 2) * t * ((s2 + 1) * t + s2) + 2);
}
var Quote_svelte = '@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,400;0,700;1,400&display=swap");\n@charset "UTF-8";\n.svelte-1pfkgpk,.svelte-1pfkgpk:before,.svelte-1pfkgpk:after{box-sizing:border-box}\ndiv.svelte-1pfkgpk,p.svelte-1pfkgpk{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\nq.svelte-1pfkgpk{quotes:none}\nq.svelte-1pfkgpk:before,q.svelte-1pfkgpk:after{content:"";content:none}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\np.svelte-1pfkgpk{text-align:left;font-size:1rem;line-height:25.92px}\np.svelte-1pfkgpk{margin-bottom:0.618rem}\n@media(min-width: 374px){p.svelte-1pfkgpk{max-width:769px;margin-left:auto;margin-right:auto}}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@keyframes svelte-1pfkgpk-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-1pfkgpk-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-1pfkgpk-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-1pfkgpk:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-1pfkgpk::selection{color:black;background-color:white;text-shadow:none}\n.mySlides.svelte-1pfkgpk{background-size:cover;display:grid;place-items:center;width:100%;height:inherit;text-align:justify;position:absolute}\nq.svelte-1pfkgpk{color:white;align-self:end}\nq.svelte-1pfkgpk,p.svelte-1pfkgpk{max-width:75%;font-size:1.618rem;line-height:36.8064px}\n.author.svelte-1pfkgpk{text-align:right;margin:7px 0;color:#b4b4b4}';
const css$d = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,400;0,700;1,400&display=swap");.svelte-1pfkgpk,.svelte-1pfkgpk:before,.svelte-1pfkgpk:after{box-sizing:border-box}div.svelte-1pfkgpk,p.svelte-1pfkgpk{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}q.svelte-1pfkgpk{quotes:none}q.svelte-1pfkgpk:before,q.svelte-1pfkgpk:after{content:"";content:none}@media(min-width: 769px){}@media(min-width: 1023px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 2140px){}@media(min-width: 374px){}p.svelte-1pfkgpk{text-align:left;font-size:1rem;line-height:25.92px}p.svelte-1pfkgpk{margin-bottom:0.618rem}@media(min-width: 374px){p.svelte-1pfkgpk{max-width:769px;margin-left:auto;margin-right:auto}}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}@keyframes svelte-1pfkgpk-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-1pfkgpk-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-1pfkgpk-loading{50%{transform:scale(1.2);opacity:0.7}}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-1pfkgpk:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-1pfkgpk::selection{color:black;background-color:white;text-shadow:none}.mySlides.svelte-1pfkgpk{background-size:cover;display:grid;place-items:center;width:100%;height:inherit;text-align:justify;position:absolute}q.svelte-1pfkgpk{color:white;align-self:end}q.svelte-1pfkgpk,p.svelte-1pfkgpk{max-width:75%;font-size:1.618rem;line-height:36.8064px}.author.svelte-1pfkgpk{text-align:right;margin:7px 0;color:#b4b4b4}',
  map: `{"version":3,"file":"Quote.svelte","sources":["Quote.svelte"],"sourcesContent":["<script>\\n\\timport {\\n\\t\\tfade\\n\\t} from 'svelte/transition';\\n\\t//   export let selectedQuote;\\n\\t// \\texport let qIndex\\n\\texport let quote;\\n\\texport let author;\\n\\texport let image;\\n</script>\\n\\n<!-- Quote template -->\\n<div class=\\"mySlides\\" transition:fade\\nstyle=\\"background-image: url({image});\\">\\n\\t<q>{quote}</q>\\n\\t<p class=\\"author\\">&mdash;{author}</p>\\n</div>\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,400;0,700;1,400&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Josefin Sans\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  color: #2a2929;\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 36.8064px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 77.76px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 129.6px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 129.6px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 25.92px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 36.8064px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 51.84px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 16px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 25.92px;\\n  }\\n}\\n\\nsmall,\\np,\\ndl {\\n  text-align: left;\\n  font-size: 1rem;\\n  line-height: 25.92px;\\n}\\n\\np {\\n  margin-bottom: 0.618rem;\\n}\\n\\n@media (min-width: 374px) {\\n  p,\\nh4,\\ndl {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\ndt {\\n  color: #414141;\\n  margin-top: 1rem;\\n}\\n\\ndd {\\n  color: #6c6c6c;\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 25.92px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 36.8064px;\\n  }\\n}\\n\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 16px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 25.92px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #b4b4b4;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: #6c6c6c;\\n}\\n\\nnav {\\n  padding-top: 1.618rem;\\n}\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: #6c6c6c;\\n  border: 1px solid #6c6c6c;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\n.mySlides {\\n  background-size: cover;\\n  display: grid;\\n  place-items: center;\\n  width: 100%;\\n  height: inherit;\\n  text-align: justify;\\n  position: absolute;\\n  /*\\tNOTE: Use with #key -- You just need the direct children position to always be in the same place (i.e. fixed), regardless of their position in DOM (well, for this transition at least) */\\n}\\n\\nq {\\n  color: white;\\n  align-self: end;\\n}\\n\\nq,\\np {\\n  max-width: 75%;\\n  font-size: 1.618rem;\\n  line-height: 36.8064px;\\n}\\n\\n.author {\\n  text-align: right;\\n  margin: 7px 0;\\n  color: #b4b4b4;\\n}</style>"],"names":[],"mappings":"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"}`
};
const Quote = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {quote} = $$props;
  let {author} = $$props;
  let {image} = $$props;
  if ($$props.quote === void 0 && $$bindings.quote && quote !== void 0)
    $$bindings.quote(quote);
  if ($$props.author === void 0 && $$bindings.author && author !== void 0)
    $$bindings.author(author);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  $$result.css.add(css$d);
  return `
<div class="${"mySlides svelte-1pfkgpk"}" style="${"background-image: url(" + escape(image) + ");"}"><q class="${"svelte-1pfkgpk"}">${escape(quote)}</q>
	<p class="${"author svelte-1pfkgpk"}">\u2014${escape(author)}</p>
</div>`;
});
var Dot_svelte = '@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,400;0,700;1,400&display=swap");\n@charset "UTF-8";\n.svelte-1bg8uoz,.svelte-1bg8uoz:before,.svelte-1bg8uoz:after{box-sizing:border-box}\nspan.svelte-1bg8uoz{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@keyframes svelte-1bg8uoz-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-1bg8uoz-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-1bg8uoz-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-1bg8uoz:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-1bg8uoz::selection{color:black;background-color:white;text-shadow:none}\n.dot.svelte-1bg8uoz{cursor:pointer;height:15px;width:15px;margin:0 5px;background-color:#414141;border-radius:50%;display:inline-block;transition:background-color 0.3s ease}\n.active.svelte-1bg8uoz,.dot.svelte-1bg8uoz:hover{background-color:black}\n.not-clickable.svelte-1bg8uoz{pointer-events:none}';
const css$c = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,400;0,700;1,400&display=swap");.svelte-1bg8uoz,.svelte-1bg8uoz:before,.svelte-1bg8uoz:after{box-sizing:border-box}span.svelte-1bg8uoz{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}@media(min-width: 769px){}@media(min-width: 1023px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}@keyframes svelte-1bg8uoz-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-1bg8uoz-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-1bg8uoz-loading{50%{transform:scale(1.2);opacity:0.7}}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-1bg8uoz:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-1bg8uoz::selection{color:black;background-color:white;text-shadow:none}.dot.svelte-1bg8uoz{cursor:pointer;height:15px;width:15px;margin:0 5px;background-color:#414141;border-radius:50%;display:inline-block;transition:background-color 0.3s ease}.active.svelte-1bg8uoz,.dot.svelte-1bg8uoz:hover{background-color:black}.not-clickable.svelte-1bg8uoz{pointer-events:none}',
  map: '{"version":3,"file":"Dot.svelte","sources":["Dot.svelte"],"sourcesContent":["<script>\\n    export let quoteIndex;\\n    export let counter\\n    export let attribution;\\n    export let autoPlaying;\\n</script>\\n\\n<span class=\\"dot\\" class:active={quoteIndex===counter} class:not-clickable={autoPlaying} title={`quote by ${attribution}`} on:click></span>\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,400;0,700;1,400&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Josefin Sans\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  color: #2a2929;\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 36.8064px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 77.76px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 129.6px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 129.6px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 25.92px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 36.8064px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 51.84px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 16px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 25.92px;\\n  }\\n}\\n\\nsmall,\\np,\\ndl {\\n  text-align: left;\\n  font-size: 1rem;\\n  line-height: 25.92px;\\n}\\n\\np {\\n  margin-bottom: 0.618rem;\\n}\\n\\n@media (min-width: 374px) {\\n  p,\\nh4,\\ndl {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\ndt {\\n  color: #414141;\\n  margin-top: 1rem;\\n}\\n\\ndd {\\n  color: #6c6c6c;\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 25.92px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 36.8064px;\\n  }\\n}\\n\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 16px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 25.92px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #b4b4b4;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: #6c6c6c;\\n}\\n\\nnav {\\n  padding-top: 1.618rem;\\n}\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: #6c6c6c;\\n  border: 1px solid #6c6c6c;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\n.dot {\\n  cursor: pointer;\\n  height: 15px;\\n  width: 15px;\\n  margin: 0 5px;\\n  background-color: #414141;\\n  border-radius: 50%;\\n  display: inline-block;\\n  transition: background-color 0.3s ease;\\n}\\n\\n/* Add a background color to the active dot/circle */\\n.active,\\n.dot:hover {\\n  background-color: black;\\n}\\n\\n.not-clickable {\\n  pointer-events: none;\\n}</style>"],"names":[],"mappings":"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"}'
};
const Dot = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {quoteIndex} = $$props;
  let {counter} = $$props;
  let {attribution} = $$props;
  let {autoPlaying} = $$props;
  if ($$props.quoteIndex === void 0 && $$bindings.quoteIndex && quoteIndex !== void 0)
    $$bindings.quoteIndex(quoteIndex);
  if ($$props.counter === void 0 && $$bindings.counter && counter !== void 0)
    $$bindings.counter(counter);
  if ($$props.attribution === void 0 && $$bindings.attribution && attribution !== void 0)
    $$bindings.attribution(attribution);
  if ($$props.autoPlaying === void 0 && $$bindings.autoPlaying && autoPlaying !== void 0)
    $$bindings.autoPlaying(autoPlaying);
  $$result.css.add(css$c);
  return `<span class="${[
    "dot svelte-1bg8uoz",
    (quoteIndex === counter ? "active" : "") + " " + (autoPlaying ? "not-clickable" : "")
  ].join(" ").trim()}"${add_attribute("title", `quote by ${attribution}`, 0)}></span>`;
});
var AutoPlayBtn_svelte = '@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,400;0,700;1,400&display=swap");\n@charset "UTF-8";\n.svelte-qu5u5u.svelte-qu5u5u,.svelte-qu5u5u.svelte-qu5u5u:before,.svelte-qu5u5u.svelte-qu5u5u:after{box-sizing:border-box}\nspan.svelte-qu5u5u.svelte-qu5u5u,label.svelte-qu5u5u.svelte-qu5u5u,section.svelte-qu5u5u.svelte-qu5u5u{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\nsection.svelte-qu5u5u.svelte-qu5u5u{display:block}\ninput.svelte-qu5u5u.svelte-qu5u5u{-webkit-appearance:none;border-radius:0}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\ninput.svelte-qu5u5u.svelte-qu5u5u{border:none;font-family:inherit;font-size:1rem;line-height:25.92px;font-weight:inherit;color:#414141}\n@keyframes svelte-qu5u5u-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-qu5u5u-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-qu5u5u-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-qu5u5u.svelte-qu5u5u:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-qu5u5u.svelte-qu5u5u::selection{color:black;background-color:white;text-shadow:none}\nsection.svelte-qu5u5u.svelte-qu5u5u{position:absolute;right:10px;top:10px}\nsection.svelte-qu5u5u.svelte-qu5u5u:hover:after{content:"Auto-play";width:100px;position:absolute;left:0;bottom:-30px;background-color:white;box-shadow:0 0 3px black;padding:5px 0;border-radius:5px}\n.switch.svelte-qu5u5u.svelte-qu5u5u{position:relative;display:inline-block;width:60px;height:34px}\n.switch.svelte-qu5u5u input.svelte-qu5u5u{opacity:0;width:0;height:0}\n.slider.svelte-qu5u5u.svelte-qu5u5u{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#6c6c6c;-webkit-transition:0.4s;transition:0.4s}\n.slider.svelte-qu5u5u.svelte-qu5u5u:before{position:absolute;content:"";height:26px;width:26px;left:4px;bottom:4px;background-color:white;-webkit-transition:0.4s;transition:0.4s}\ninput.svelte-qu5u5u:checked+.slider.svelte-qu5u5u{background-color:#3f7bab}\ninput.svelte-qu5u5u:focus+.slider.svelte-qu5u5u{box-shadow:0 0 1px #2a2929}\ninput.svelte-qu5u5u:checked+.slider.svelte-qu5u5u:before{-webkit-transform:translateX(26px);-ms-transform:translateX(26px);transform:translateX(26px)}\n.slider.round.svelte-qu5u5u.svelte-qu5u5u{border-radius:34px}\n.slider.round.svelte-qu5u5u.svelte-qu5u5u:before{border-radius:50%}';
const css$b = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,400;0,700;1,400&display=swap");.svelte-qu5u5u.svelte-qu5u5u,.svelte-qu5u5u.svelte-qu5u5u:before,.svelte-qu5u5u.svelte-qu5u5u:after{box-sizing:border-box}span.svelte-qu5u5u.svelte-qu5u5u,label.svelte-qu5u5u.svelte-qu5u5u,section.svelte-qu5u5u.svelte-qu5u5u{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}section.svelte-qu5u5u.svelte-qu5u5u{display:block}input.svelte-qu5u5u.svelte-qu5u5u{-webkit-appearance:none;border-radius:0}@media(min-width: 769px){}@media(min-width: 1023px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}input.svelte-qu5u5u.svelte-qu5u5u{border:none;font-family:inherit;font-size:1rem;line-height:25.92px;font-weight:inherit;color:#414141}@keyframes svelte-qu5u5u-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-qu5u5u-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-qu5u5u-loading{50%{transform:scale(1.2);opacity:0.7}}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-qu5u5u.svelte-qu5u5u:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-qu5u5u.svelte-qu5u5u::selection{color:black;background-color:white;text-shadow:none}section.svelte-qu5u5u.svelte-qu5u5u{position:absolute;right:10px;top:10px}section.svelte-qu5u5u.svelte-qu5u5u:hover:after{content:"Auto-play";width:100px;position:absolute;left:0;bottom:-30px;background-color:white;box-shadow:0 0 3px black;padding:5px 0;border-radius:5px}.switch.svelte-qu5u5u.svelte-qu5u5u{position:relative;display:inline-block;width:60px;height:34px}.switch.svelte-qu5u5u input.svelte-qu5u5u{opacity:0;width:0;height:0}.slider.svelte-qu5u5u.svelte-qu5u5u{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#6c6c6c;-webkit-transition:0.4s;transition:0.4s}.slider.svelte-qu5u5u.svelte-qu5u5u:before{position:absolute;content:"";height:26px;width:26px;left:4px;bottom:4px;background-color:white;-webkit-transition:0.4s;transition:0.4s}input.svelte-qu5u5u:checked+.slider.svelte-qu5u5u{background-color:#3f7bab}input.svelte-qu5u5u:focus+.slider.svelte-qu5u5u{box-shadow:0 0 1px #2a2929}input.svelte-qu5u5u:checked+.slider.svelte-qu5u5u:before{-webkit-transform:translateX(26px);-ms-transform:translateX(26px);transform:translateX(26px)}.slider.round.svelte-qu5u5u.svelte-qu5u5u{border-radius:34px}.slider.round.svelte-qu5u5u.svelte-qu5u5u:before{border-radius:50%}',
  map: '{"version":3,"file":"AutoPlayBtn.svelte","sources":["AutoPlayBtn.svelte"],"sourcesContent":["<script>\\n    export let switchOn;\\n</script>\\n\\n<section id=\\"auto-play-cont\\">\\n    <!-- Rounded switch -->\\n    <label class=\\"switch\\">\\n        <input type=\\"checkbox\\" bind:checked={switchOn} on:change>\\n        <span class=\\"slider round\\"></span>\\n    </label>\\n</section>\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,400;0,700;1,400&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Josefin Sans\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  color: #2a2929;\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 36.8064px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 77.76px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 129.6px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 129.6px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 25.92px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 36.8064px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 51.84px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 16px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 25.92px;\\n  }\\n}\\n\\nsmall,\\np,\\ndl {\\n  text-align: left;\\n  font-size: 1rem;\\n  line-height: 25.92px;\\n}\\n\\np {\\n  margin-bottom: 0.618rem;\\n}\\n\\n@media (min-width: 374px) {\\n  p,\\nh4,\\ndl {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\ndt {\\n  color: #414141;\\n  margin-top: 1rem;\\n}\\n\\ndd {\\n  color: #6c6c6c;\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 25.92px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 36.8064px;\\n  }\\n}\\n\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 16px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 25.92px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #b4b4b4;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: #6c6c6c;\\n}\\n\\nnav {\\n  padding-top: 1.618rem;\\n}\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: #6c6c6c;\\n  border: 1px solid #6c6c6c;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\nsection {\\n  position: absolute;\\n  right: 10px;\\n  top: 10px;\\n}\\n\\nsection:hover:after {\\n  content: \\"Auto-play\\";\\n  width: 100px;\\n  position: absolute;\\n  left: 0;\\n  bottom: -30px;\\n  background-color: white;\\n  box-shadow: 0 0 3px black;\\n  padding: 5px 0;\\n  border-radius: 5px;\\n}\\n\\n/* The switch - the box around the slider */\\n.switch {\\n  position: relative;\\n  display: inline-block;\\n  width: 60px;\\n  height: 34px;\\n}\\n\\n/* Hide default HTML checkbox */\\n.switch input {\\n  opacity: 0;\\n  width: 0;\\n  height: 0;\\n}\\n\\n/* The slider */\\n.slider {\\n  position: absolute;\\n  cursor: pointer;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  bottom: 0;\\n  background-color: #6c6c6c;\\n  -webkit-transition: 0.4s;\\n  transition: 0.4s;\\n}\\n\\n.slider:before {\\n  position: absolute;\\n  content: \\"\\";\\n  height: 26px;\\n  width: 26px;\\n  left: 4px;\\n  bottom: 4px;\\n  background-color: white;\\n  -webkit-transition: 0.4s;\\n  transition: 0.4s;\\n}\\n\\ninput:checked + .slider {\\n  background-color: #3f7bab;\\n}\\n\\ninput:focus + .slider {\\n  box-shadow: 0 0 1px #2a2929;\\n}\\n\\ninput:checked + .slider:before {\\n  -webkit-transform: translateX(26px);\\n  -ms-transform: translateX(26px);\\n  transform: translateX(26px);\\n}\\n\\n/* Rounded sliders */\\n.slider.round {\\n  border-radius: 34px;\\n}\\n\\n.slider.round:before {\\n  border-radius: 50%;\\n}</style>"],"names":[],"mappings":"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"}'
};
const AutoPlayBtn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {switchOn} = $$props;
  if ($$props.switchOn === void 0 && $$bindings.switchOn && switchOn !== void 0)
    $$bindings.switchOn(switchOn);
  $$result.css.add(css$b);
  return `<section id="${"auto-play-cont"}" class="${"svelte-qu5u5u"}">
    <label class="${"switch svelte-qu5u5u"}"><input type="${"checkbox"}" class="${"svelte-qu5u5u"}"${add_attribute("checked", switchOn, 1)}>
        <span class="${"slider round svelte-qu5u5u"}"></span></label>
</section>`;
});
var QuoteRotator_svelte = '@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,400;0,700;1,400&display=swap");\n@charset "UTF-8";\n.svelte-5g8lv0,.svelte-5g8lv0:before,.svelte-5g8lv0:after{box-sizing:border-box}\ndiv.svelte-5g8lv0,span.svelte-5g8lv0{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@keyframes svelte-5g8lv0-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-5g8lv0-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-5g8lv0-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-5g8lv0:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-5g8lv0::selection{color:black;background-color:white;text-shadow:none}\n.slideshow-container.svelte-5g8lv0{position:relative;background-color:#b4b4b4;display:flex;flex-direction:column;align-items:center;justify-content:center;height:50vh}\n.dot-container.svelte-5g8lv0{text-align:center;padding:1.618rem;position:relative;bottom:0}\n.prev.svelte-5g8lv0,.next.svelte-5g8lv0{cursor:pointer;position:absolute;top:50%;width:auto;margin-top:-1.618rem;padding:1.618rem;color:#e5e5e5;font-weight:bold;font-size:1.618rem;line-height:36.8064px;border-radius:0 3px 3px 0;user-select:none}\n.prev.svelte-5g8lv0{left:0}\n.next.svelte-5g8lv0{position:absolute;right:0;border-radius:3px 0 0 3px}\n.prev.svelte-5g8lv0:hover,.next.svelte-5g8lv0:hover{background-color:rgba(0, 0, 0, 0.8);color:white;text-decoration:none}\n.not-clickable.svelte-5g8lv0{pointer-events:none}';
const css$a = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,400;0,700;1,400&display=swap");.svelte-5g8lv0,.svelte-5g8lv0:before,.svelte-5g8lv0:after{box-sizing:border-box}div.svelte-5g8lv0,span.svelte-5g8lv0{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}@media(min-width: 769px){}@media(min-width: 1023px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}@keyframes svelte-5g8lv0-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-5g8lv0-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-5g8lv0-loading{50%{transform:scale(1.2);opacity:0.7}}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-5g8lv0:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-5g8lv0::selection{color:black;background-color:white;text-shadow:none}.slideshow-container.svelte-5g8lv0{position:relative;background-color:#b4b4b4;display:flex;flex-direction:column;align-items:center;justify-content:center;height:50vh}.dot-container.svelte-5g8lv0{text-align:center;padding:1.618rem;position:relative;bottom:0}.prev.svelte-5g8lv0,.next.svelte-5g8lv0{cursor:pointer;position:absolute;top:50%;width:auto;margin-top:-1.618rem;padding:1.618rem;color:#e5e5e5;font-weight:bold;font-size:1.618rem;line-height:36.8064px;border-radius:0 3px 3px 0;user-select:none}.prev.svelte-5g8lv0{left:0}.next.svelte-5g8lv0{position:absolute;right:0;border-radius:3px 0 0 3px}.prev.svelte-5g8lv0:hover,.next.svelte-5g8lv0:hover{background-color:rgba(0, 0, 0, 0.8);color:white;text-decoration:none}.not-clickable.svelte-5g8lv0{pointer-events:none}',
  map: `{"version":3,"file":"QuoteRotator.svelte","sources":["QuoteRotator.svelte"],"sourcesContent":["<script>\\n\\timport {\\n\\t\\tquotes\\n\\t} from '$lib/data/quoteData.js';\\n\\timport Quote from './Quote.svelte';\\n\\timport Dot from './Dot.svelte';\\n\\timport AutoPlayBtn from './AutoPlayBtn.svelte';\\n\\n\\t/* ADVANCE QUOTE */\\n\\tlet quoteIndex = 0;\\n\\t$: console.log(quoteIndex)\\n\\t$: quote = quotes[quoteIndex].quote;\\n\\t$: author = quotes[quoteIndex].author;\\n\\t$: image = quotes[quoteIndex].image;\\n\\t$: console.log(quoteIndex)\\n\\n\\tconst nextQuote = () => {\\n\\t\\tif (quoteIndex === quotes.length - 1) {\\n\\t\\t\\tquoteIndex = 0;\\n\\t\\t} else {\\n\\t\\t\\tquoteIndex += 1;\\n\\t\\t}\\n\\t}\\n\\n\\tconst prevQuote = () => {\\n\\t\\tif (quoteIndex === 0) {\\n\\t\\t\\tquoteIndex = quotes.length - 1;\\n\\t\\t} else {\\n\\t\\t\\tquoteIndex -= 1;\\n\\t\\t}\\n\\t}\\n\\n\\t/* AUTO PLAY */\\n\\tlet switchOn = false;\\n\\t$: console.log(autoAdvance);\\n\\tlet autoAdvance;\\n\\tlet autoPlaying = false;\\n\\n\\tconst handleAutoAdv = () => {\\n\\t\\tif (switchOn) {\\n\\t\\t\\tautoAdvance = setInterval(nextQuote, 5000);\\n\\t\\t\\tautoPlaying = true;\\n\\t\\t} else {\\n\\t\\t\\tclearInterval(autoAdvance);\\n\\t\\t\\tautoPlaying = false;\\n\\t\\t}\\n\\t}\\n</script>\\n\\n<div class=\\"slideshow-container\\">\\n\\n\\t\\t<!-- THE QUOTE -->\\n\\t\\t{#key quote}\\n\\t\\t\\t<Quote {quote} {author} {image}/>\\n\\t\\t{/key}\\n\\t\\t\\n\\t\\t<!-- Next/prev buttons -->\\n\\t\\t<span href=\\"#prev\\" \\n\\t\\t\\t\\tclass=\\"prev\\" \\n\\t\\t\\t\\tclass:not-clickable={autoPlaying}\\n\\t\\t\\t\\ttitle=\\"previous quote\\" \\n\\t\\t\\t\\ton:click={prevQuote}>&#10094;</span>\\n\\t\\t\\n\\t\\t<span href=\\"#next\\" \\n\\t\\t\\t\\tclass=\\"next\\" \\n\\t\\t\\t\\tclass:not-clickable={autoPlaying}\\n\\t\\t\\t\\ttitle=\\"next quote\\" \\n\\t\\t\\t\\ton:click={nextQuote}>&#10095;</span>\\n\\t</div>\\n\\n\\t<!-- Dots/bullets/indicators -->\\n\\t<div class=\\"dot-container\\">\\n\\t\\t{#each quotes as quote, i}\\n\\t\\t\\t<Dot counter={i} \\n\\t\\t\\t\\t{quoteIndex}\\n\\t\\t\\t\\t{autoPlaying}\\n\\t\\t\\t\\tattribution={quote.author}\\n\\t\\t\\t\\ton:click={() => quoteIndex = i}/>\\n\\t\\t{/each}\\n\\t\\t\\n\\t\\t<AutoPlayBtn bind:switchOn on:change={handleAutoAdv} />\\n\\t</div>\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,400;0,700;1,400&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Josefin Sans\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  color: #2a2929;\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 36.8064px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 77.76px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 129.6px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 129.6px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 25.92px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 36.8064px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 51.84px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 16px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 25.92px;\\n  }\\n}\\n\\nsmall,\\np,\\ndl {\\n  text-align: left;\\n  font-size: 1rem;\\n  line-height: 25.92px;\\n}\\n\\np {\\n  margin-bottom: 0.618rem;\\n}\\n\\n@media (min-width: 374px) {\\n  p,\\nh4,\\ndl {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\ndt {\\n  color: #414141;\\n  margin-top: 1rem;\\n}\\n\\ndd {\\n  color: #6c6c6c;\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 25.92px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 36.8064px;\\n  }\\n}\\n\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 16px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 25.92px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #b4b4b4;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: #6c6c6c;\\n}\\n\\nnav {\\n  padding-top: 1.618rem;\\n}\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: #6c6c6c;\\n  border: 1px solid #6c6c6c;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\n/* Slideshow container */\\n.slideshow-container {\\n  position: relative;\\n  background-color: #b4b4b4;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  height: 50vh;\\n}\\n\\n/* The dot/bullet/indicator container */\\n.dot-container {\\n  text-align: center;\\n  padding: 1.618rem;\\n  position: relative;\\n  bottom: 0;\\n}\\n\\n/* Next & previous buttons */\\n.prev, .next {\\n  cursor: pointer;\\n  position: absolute;\\n  top: 50%;\\n  width: auto;\\n  margin-top: -1.618rem;\\n  padding: 1.618rem;\\n  color: #e5e5e5;\\n  font-weight: bold;\\n  font-size: 1.618rem;\\n  line-height: 36.8064px;\\n  border-radius: 0 3px 3px 0;\\n  user-select: none;\\n}\\n\\n.prev {\\n  left: 0;\\n}\\n\\n.next {\\n  position: absolute;\\n  right: 0;\\n  border-radius: 3px 0 0 3px;\\n}\\n\\n.prev:hover, .next:hover {\\n  background-color: rgba(0, 0, 0, 0.8);\\n  color: white;\\n  text-decoration: none;\\n}\\n\\n.not-clickable {\\n  pointer-events: none;\\n}</style>"],"names":[],"mappings":"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"}`
};
const QuoteRotator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let quote;
  let author;
  let image;
  let quoteIndex = 0;
  let switchOn = false;
  let autoAdvance;
  let autoPlaying = false;
  $$result.css.add(css$a);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      console.log(quoteIndex);
    }
    quote = quotes[quoteIndex].quote;
    author = quotes[quoteIndex].author;
    image = quotes[quoteIndex].image;
    {
      console.log(quoteIndex);
    }
    {
      console.log(autoAdvance);
    }
    $$rendered = `<div class="${"slideshow-container svelte-5g8lv0"}">
		${validate_component(Quote, "Quote").$$render($$result, {quote, author, image}, {}, {})}
		
		
		<span href="${"#prev"}" class="${["prev svelte-5g8lv0", ""].join(" ").trim()}" title="${"previous quote"}">\u276E</span>
		
		<span href="${"#next"}" class="${["next svelte-5g8lv0", ""].join(" ").trim()}" title="${"next quote"}">\u276F</span></div>

	
	<div class="${"dot-container svelte-5g8lv0"}">${each(quotes, (quote2, i) => `${validate_component(Dot, "Dot").$$render($$result, {
      counter: i,
      quoteIndex,
      autoPlaying,
      attribution: quote2.author
    }, {}, {})}`)}
		
		${validate_component(AutoPlayBtn, "AutoPlayBtn").$$render($$result, {switchOn}, {
      switchOn: ($$value) => {
        switchOn = $$value;
        $$settled = false;
      }
    }, {})}
	</div>`;
  } while (!$$settled);
  return $$rendered;
});
const flashCard = [
  {
    word: "Velociraptor",
    image: "/img/velociraptor.jpg"
  },
  {
    word: "Raptor Delta",
    image: "/img/raptordelta.jpeg"
  },
  {
    word: "vesica piscis",
    image: "/img/bg3.jpg"
  },
  {
    word: "vesica piscis",
    image: "/img/bg4.jpg"
  }
];
var FlashCard_svelte = "@keyframes svelte-3n219r-revealTextSlowly{to{color:white\n		}}.flip-box-front.svelte-3n219r,.flip-box-back.svelte-3n219r{position:absolute;width:100%;height:100%;-webkit-backface-visibility:hidden;backface-visibility:hidden}.flip-box-back.svelte-3n219r{color:black;transform:rotateY(180deg)}.image.svelte-3n219r{background-size:cover;background-position:center;background-repeat:none;width:100%;height:100%}.NoRebelesTxt.svelte-3n219r{animation:svelte-3n219r-revealTextSlowly 1s forwards}";
const css$9 = {
  code: "@keyframes svelte-3n219r-revealTextSlowly{to{color:white\n		}}.flip-box-front.svelte-3n219r,.flip-box-back.svelte-3n219r{position:absolute;width:100%;height:100%;-webkit-backface-visibility:hidden;backface-visibility:hidden}.flip-box-back.svelte-3n219r{color:black;transform:rotateY(180deg)}.image.svelte-3n219r{background-size:cover;background-position:center;background-repeat:none;width:100%;height:100%}.NoRebelesTxt.svelte-3n219r{animation:svelte-3n219r-revealTextSlowly 1s forwards}",
  map: '{"version":3,"file":"FlashCard.svelte","sources":["FlashCard.svelte"],"sourcesContent":["<script>\\n\\texport let back_txt;\\n\\texport let foto;\\n\\texport let showCarBack;\\n</script>\\n\\n<div class=\\"flip-box-front\\">\\n\\t<div class=\\"image\\" style=\\"background-image: url({foto})\\"></div>\\n</div>\\n\\n<div class=\\"flip-box-back\\" class:NoRebelesTxt={showCarBack}>\\n\\t<h2>{back_txt}</h2>\\n</div>\\n<style>\\n\\t@keyframes revealTextSlowly {\\n\\t\\tto {\\n\\t\\t\\tcolor: white\\n\\t\\t}\\n\\t}\\n\\n\\t.flip-box-front,\\n\\t.flip-box-back {\\n\\t\\tposition: absolute;\\n\\t\\twidth: 100%;\\n\\t\\theight: 100%;\\n\\t\\t-webkit-backface-visibility: hidden;\\n\\t\\t/* Safari */\\n\\t\\tbackface-visibility: hidden;\\n\\t}\\n\\n\\t.flip-box-front {}\\n\\n\\t.flip-box-back {\\n\\t\\tcolor: black;\\n\\t\\ttransform: rotateY(180deg);\\n\\t}\\n\\n\\t.image {\\n\\t\\tbackground-size: cover;\\n\\t\\tbackground-position: center;\\n\\t\\tbackground-repeat: none;\\n\\t\\twidth: 100%;\\n\\t\\theight: 100%;\\n\\t}\\n\\n\\t.NoRebelesTxt {\\n\\t\\tanimation: revealTextSlowly 1s forwards;\\n\\t}\\n</style>"],"names":[],"mappings":"AAcC,WAAW,8BAAiB,CAAC,AAC5B,EAAE,AAAC,CAAC,AACH,KAAK,CAAE,KAAK;EACb,CAAC,AACF,CAAC,AAED,6BAAe,CACf,cAAc,cAAC,CAAC,AACf,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,2BAA2B,CAAE,MAAM,CAEnC,mBAAmB,CAAE,MAAM,AAC5B,CAAC,AAID,cAAc,cAAC,CAAC,AACf,KAAK,CAAE,KAAK,CACZ,SAAS,CAAE,QAAQ,MAAM,CAAC,AAC3B,CAAC,AAED,MAAM,cAAC,CAAC,AACP,eAAe,CAAE,KAAK,CACtB,mBAAmB,CAAE,MAAM,CAC3B,iBAAiB,CAAE,IAAI,CACvB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,AACb,CAAC,AAED,aAAa,cAAC,CAAC,AACd,SAAS,CAAE,8BAAgB,CAAC,EAAE,CAAC,QAAQ,AACxC,CAAC"}'
};
const FlashCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {back_txt} = $$props;
  let {foto} = $$props;
  let {showCarBack} = $$props;
  if ($$props.back_txt === void 0 && $$bindings.back_txt && back_txt !== void 0)
    $$bindings.back_txt(back_txt);
  if ($$props.foto === void 0 && $$bindings.foto && foto !== void 0)
    $$bindings.foto(foto);
  if ($$props.showCarBack === void 0 && $$bindings.showCarBack && showCarBack !== void 0)
    $$bindings.showCarBack(showCarBack);
  $$result.css.add(css$9);
  return `<div class="${"flip-box-front svelte-3n219r"}"><div class="${"image svelte-3n219r"}" style="${"background-image: url(" + escape(foto) + ")"}"></div></div>

<div class="${["flip-box-back svelte-3n219r", showCarBack ? "NoRebelesTxt" : ""].join(" ").trim()}"><h2>${escape(back_txt)}</h2>
</div>`;
});
var Button_svelte = '@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,400;0,700;1,400&display=swap");\n@charset "UTF-8";\n.svelte-1cj8l1u,.svelte-1cj8l1u:before,.svelte-1cj8l1u:after{box-sizing:border-box}\na.svelte-1cj8l1u{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\na[target=_blank].svelte-1cj8l1u:after{content:" \u2924"}\n@keyframes svelte-1cj8l1u-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-1cj8l1u-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-1cj8l1u-loading{50%{transform:scale(1.2);opacity:0.7}}\na.svelte-1cj8l1u:hover{animation-name:svelte-1cj8l1u-fade;animation-duration:0.3s}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-1cj8l1u:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-1cj8l1u::selection{color:black;background-color:white;text-shadow:none}\nbutton.svelte-1cj8l1u{background-color:transparent;user-select:none}\nbutton.svelte-1cj8l1u:focus{border:none}\na.svelte-1cj8l1u,button.svelte-1cj8l1u{font-size:inherit;display:flex;align-items:center;padding:0.618rem 1rem;text-decoration:none;border-width:1px;border-style:solid;border-radius:4px;margin-top:1.618rem;margin-bottom:1.618rem;max-width:29.03rem;position:relative}\na.svelte-1cj8l1u:after,button.svelte-1cj8l1u:after{font-size:1.618rem;padding-left:0.618rem}\na.svelte-1cj8l1u:hover,button.svelte-1cj8l1u:hover{cursor:pointer}\n.Dark.svelte-1cj8l1u{color:#110e08;border-color:#110e08}\n.Dark.svelte-1cj8l1u:hover{color:#e5e5e5;background-color:#110e08;border-color:#110e08}\n.Light.svelte-1cj8l1u{color:#b4b4b4;border-color:#b4b4b4}\n.Light.svelte-1cj8l1u:hover{color:#110e08;background-color:#b4b4b4;border-color:#b4b4b4}\n.Colored.svelte-1cj8l1u{color:#6c6c6c;border-color:#6c6c6c}\n.Colored.svelte-1cj8l1u:hover{color:#110e08;background-color:#e5e5e5;border-color:#e5e5e5}\n.ColoredInvert.svelte-1cj8l1u{color:#b4b4b4;border-color:#b4b4b4}\n.ColoredInvert.svelte-1cj8l1u:hover{color:#110e08;background-color:#e5e5e5;border-color:#e5e5e5}\n.UnicodeIcon.svelte-1cj8l1u{color:white;border:none;margin:0;font-size:2.618rem;line-height:51.84px}\n@media(min-width: 769px){.UnicodeIcon.svelte-1cj8l1u{color:#e8b28a}}\n.UnicodeIcon.svelte-1cj8l1u:hover{color:#e5e5e5}\n.ScrollTo.svelte-1cj8l1u{color:black;border:none;text-align:center;margin:0;font-size:2.618rem;line-height:51.84px;display:block;background-color:transparent}\n.ScrollTo.svelte-1cj8l1u:hover{color:#e5e5e5}';
const css$8 = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,400;0,700;1,400&display=swap");.svelte-1cj8l1u,.svelte-1cj8l1u:before,.svelte-1cj8l1u:after{box-sizing:border-box}a.svelte-1cj8l1u{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}@media(min-width: 769px){}@media(min-width: 1023px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}a[target=_blank].svelte-1cj8l1u:after{content:" \u2924"}@keyframes svelte-1cj8l1u-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-1cj8l1u-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-1cj8l1u-loading{50%{transform:scale(1.2);opacity:0.7}}a.svelte-1cj8l1u:hover{animation-name:svelte-1cj8l1u-fade;animation-duration:0.3s}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-1cj8l1u:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-1cj8l1u::selection{color:black;background-color:white;text-shadow:none}button.svelte-1cj8l1u{background-color:transparent;user-select:none}button.svelte-1cj8l1u:focus{border:none}a.svelte-1cj8l1u,button.svelte-1cj8l1u{font-size:inherit;display:flex;align-items:center;padding:0.618rem 1rem;text-decoration:none;border-width:1px;border-style:solid;border-radius:4px;margin-top:1.618rem;margin-bottom:1.618rem;max-width:29.03rem;position:relative}a.svelte-1cj8l1u:after,button.svelte-1cj8l1u:after{font-size:1.618rem;padding-left:0.618rem}a.svelte-1cj8l1u:hover,button.svelte-1cj8l1u:hover{cursor:pointer}.Dark.svelte-1cj8l1u{color:#110e08;border-color:#110e08}.Dark.svelte-1cj8l1u:hover{color:#e5e5e5;background-color:#110e08;border-color:#110e08}.Light.svelte-1cj8l1u{color:#b4b4b4;border-color:#b4b4b4}.Light.svelte-1cj8l1u:hover{color:#110e08;background-color:#b4b4b4;border-color:#b4b4b4}.Colored.svelte-1cj8l1u{color:#6c6c6c;border-color:#6c6c6c}.Colored.svelte-1cj8l1u:hover{color:#110e08;background-color:#e5e5e5;border-color:#e5e5e5}.ColoredInvert.svelte-1cj8l1u{color:#b4b4b4;border-color:#b4b4b4}.ColoredInvert.svelte-1cj8l1u:hover{color:#110e08;background-color:#e5e5e5;border-color:#e5e5e5}.UnicodeIcon.svelte-1cj8l1u{color:white;border:none;margin:0;font-size:2.618rem;line-height:51.84px}@media(min-width: 769px){.UnicodeIcon.svelte-1cj8l1u{color:#e8b28a}}.UnicodeIcon.svelte-1cj8l1u:hover{color:#e5e5e5}.ScrollTo.svelte-1cj8l1u{color:black;border:none;text-align:center;margin:0;font-size:2.618rem;line-height:51.84px;display:block;background-color:transparent}.ScrollTo.svelte-1cj8l1u:hover{color:#e5e5e5}',
  map: '{"version":3,"file":"Button.svelte","sources":["Button.svelte"],"sourcesContent":["<script>\\n    export let text = \\"\\";\\n    export let url = \\"\\";\\n    export let is_submit = false;\\n    export let target = \\"_blank\\";\\n    export let variante = 0;\\n    let modificador = [\\n        \\"Light\\",\\n        \\"Dark\\",\\n        \\"Colored\\",\\n        \\"ColoredInvert\\",\\n        \\"UnicodeIcon\\",\\n        \\"ScrollTo\\"\\n    ];\\n</script>\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,400;0,700;1,400&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Josefin Sans\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  color: #2a2929;\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 36.8064px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 77.76px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 129.6px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 129.6px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 25.92px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 36.8064px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 51.84px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 16px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 25.92px;\\n  }\\n}\\n\\nsmall,\\np,\\ndl {\\n  text-align: left;\\n  font-size: 1rem;\\n  line-height: 25.92px;\\n}\\n\\np {\\n  margin-bottom: 0.618rem;\\n}\\n\\n@media (min-width: 374px) {\\n  p,\\nh4,\\ndl {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\ndt {\\n  color: #414141;\\n  margin-top: 1rem;\\n}\\n\\ndd {\\n  color: #6c6c6c;\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 25.92px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 36.8064px;\\n  }\\n}\\n\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 16px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 25.92px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #b4b4b4;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: #6c6c6c;\\n}\\n\\nnav {\\n  padding-top: 1.618rem;\\n}\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: #6c6c6c;\\n  border: 1px solid #6c6c6c;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\nbutton {\\n  background-color: transparent;\\n  user-select: none;\\n}\\nbutton:focus {\\n  /* outline-width: 1px;\\n  outline-style: dotted;\\n  outline-color: unset;             */\\n  border: none;\\n}\\n\\na,\\nbutton {\\n  font-size: inherit;\\n  display: flex;\\n  align-items: center;\\n  padding: 0.618rem 1rem;\\n  text-decoration: none;\\n  border-width: 1px;\\n  border-style: solid;\\n  border-radius: 4px;\\n  margin-top: 1.618rem;\\n  margin-bottom: 1.618rem;\\n  max-width: 29.03rem;\\n  position: relative;\\n}\\na:after,\\nbutton:after {\\n  font-size: 1.618rem;\\n  padding-left: 0.618rem;\\n}\\na:hover,\\nbutton:hover {\\n  cursor: pointer;\\n}\\n\\n.Dark {\\n  color: #110e08;\\n  border-color: #110e08;\\n}\\n.Dark:hover {\\n  color: #e5e5e5;\\n  background-color: #110e08;\\n  border-color: #110e08;\\n}\\n\\n.Light {\\n  color: #b4b4b4;\\n  border-color: #b4b4b4;\\n}\\n.Light:hover {\\n  color: #110e08;\\n  background-color: #b4b4b4;\\n  border-color: #b4b4b4;\\n}\\n\\n.Colored {\\n  color: #6c6c6c;\\n  border-color: #6c6c6c;\\n}\\n.Colored:hover {\\n  color: #110e08;\\n  background-color: #e5e5e5;\\n  border-color: #e5e5e5;\\n}\\n\\n.ColoredInvert {\\n  color: #b4b4b4;\\n  border-color: #b4b4b4;\\n}\\n.ColoredInvert:hover {\\n  color: #110e08;\\n  background-color: #e5e5e5;\\n  border-color: #e5e5e5;\\n}\\n\\n.UnicodeIcon {\\n  color: white;\\n  border: none;\\n  margin: 0;\\n  font-size: 2.618rem;\\n  line-height: 51.84px;\\n}\\n@media (min-width: 769px) {\\n  .UnicodeIcon {\\n    color: #e8b28a;\\n  }\\n}\\n.UnicodeIcon:hover {\\n  color: #e5e5e5;\\n}\\n\\n.ScrollTo {\\n  color: black;\\n  border: none;\\n  text-align: center;\\n  margin: 0;\\n  font-size: 2.618rem;\\n  line-height: 51.84px;\\n  display: block;\\n  background-color: transparent;\\n}\\n.ScrollTo:hover {\\n  color: #e5e5e5;\\n}</style>\\n\\n{#if url}\\n    <a href=\\"{url}\\" target=\\"{target}\\" class=\\"{modificador[variante]}\\">\\n        {text}\\n    </a>\\n{:else if is_submit}\\n    <button on:click type=\\"submit\\" class=\\"{modificador[variante]}\\">\\n        {text}\\n    </button>\\n{:else}\\n    <button on:click class=\\"{modificador[variante]}\\">\\n        {text}\\n    </button>\\n{/if}\\n"],"names":[],"mappings":"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"}'
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {text = ""} = $$props;
  let {url = ""} = $$props;
  let {is_submit = false} = $$props;
  let {target = "_blank"} = $$props;
  let {variante = 0} = $$props;
  let modificador = ["Light", "Dark", "Colored", "ColoredInvert", "UnicodeIcon", "ScrollTo"];
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.is_submit === void 0 && $$bindings.is_submit && is_submit !== void 0)
    $$bindings.is_submit(is_submit);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  if ($$props.variante === void 0 && $$bindings.variante && variante !== void 0)
    $$bindings.variante(variante);
  $$result.css.add(css$8);
  return `${url ? `<a${add_attribute("href", url, 0)}${add_attribute("target", target, 0)} class="${escape(null_to_empty(modificador[variante])) + " svelte-1cj8l1u"}">${escape(text)}</a>` : `${is_submit ? `<button type="${"submit"}" class="${escape(null_to_empty(modificador[variante])) + " svelte-1cj8l1u"}">${escape(text)}</button>` : `<button class="${escape(null_to_empty(modificador[variante])) + " svelte-1cj8l1u"}">${escape(text)}</button>`}`}`;
});
var FlipCard_svelte = '@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,400;0,700;1,400&display=swap");\n@charset "UTF-8";\n.svelte-1xdkst,.svelte-1xdkst:before,.svelte-1xdkst:after{box-sizing:border-box}\ndiv.svelte-1xdkst{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@keyframes svelte-1xdkst-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-1xdkst-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-1xdkst-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-1xdkst:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-1xdkst::selection{color:black;background-color:white;text-shadow:none}\n.ButtonControls.svelte-1xdkst{display:grid;gap:0.618rem;grid-template-columns:1fr 2fr 1fr}\n.flip-box.svelte-1xdkst{background-color:transparent;width:300px;height:200px;perspective:1000px}\n.flip-box-inner.svelte-1xdkst{position:relative;width:100%;height:100%;text-align:center;transition:transform 0.3s;transform-style:preserve-3d}\n.flip-it.svelte-1xdkst{transform:rotateY(180deg)}';
const css$7 = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,400;0,700;1,400&display=swap");.svelte-1xdkst,.svelte-1xdkst:before,.svelte-1xdkst:after{box-sizing:border-box}div.svelte-1xdkst{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}@media(min-width: 769px){}@media(min-width: 1023px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}@keyframes svelte-1xdkst-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-1xdkst-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-1xdkst-loading{50%{transform:scale(1.2);opacity:0.7}}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-1xdkst:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-1xdkst::selection{color:black;background-color:white;text-shadow:none}.ButtonControls.svelte-1xdkst{display:grid;gap:0.618rem;grid-template-columns:1fr 2fr 1fr}.flip-box.svelte-1xdkst{background-color:transparent;width:300px;height:200px;perspective:1000px}.flip-box-inner.svelte-1xdkst{position:relative;width:100%;height:100%;text-align:center;transition:transform 0.3s;transform-style:preserve-3d}.flip-it.svelte-1xdkst{transform:rotateY(180deg)}',
  map: `{"version":3,"file":"FlipCard.svelte","sources":["FlipCard.svelte"],"sourcesContent":["<script>\\n\\timport {\\n\\t\\tflashCard\\n\\t} from \\"$lib/data/flashCard.js\\";\\n\\n\\timport FlashCard from \\"./FlashCard.svelte\\";\\n\\timport Button from \\"$lib/Button.svelte\\";\\n\\n\\n\\tconst toggleShowBack = () => showCarBack = !showCarBack\\n\\tlet showCarBack = false\\n\\tlet image_index = 0\\n\\t$: foto = flashCard[image_index].image\\n\\t$: back_txt = flashCard[image_index].word\\n\\tconst prevCard = () => {\\n\\t\\tshowCarBack = false\\n\\t\\tif (image_index === 0) {\\n\\t\\t\\timage_index = flashCard.length - 1\\n\\t\\t} else {\\n\\t\\t\\timage_index -= 1\\n\\t\\t}\\n\\t}\\n\\tconst nextCard = () => {\\n\\t\\tshowCarBack = false\\n\\t\\tif (image_index === flashCard.length - 1) {\\n\\t\\t\\timage_index = 0\\n\\t\\t} else {\\n\\t\\t\\timage_index += 1\\n\\t\\t}\\n\\t}\\n</script>\\n\\n<div class=\\"flip-box\\">\\n\\n\\t<div class=\\"flip-box-inner\\" class:flip-it={showCarBack}>\\n\\t\\t<FlashCard {showCarBack} {foto} {back_txt} />\\n\\t</div>\\n\\n\\t<div class=\\"ButtonControls\\">\\n\\t\\t<Button\\n\\t\\t\\ton:click={prevCard}\\n            variante={4}\\n            text=\\"\u219C\\"\\n        />\\n\\t\\t<Button\\n\\t\\ton:click={toggleShowBack}\\n\\t\\tvariante={4}\\n\\t\\ttext={showCarBack ? '\u293F' : '\u293E'}\\n        />\\n\\t\\t<Button\\n\\t\\t\\ton:click={nextCard}\\n            variante={4}\\n            text=\\"\u2933\\"\\n        />\\n\\t</div>\\n\\n</div>\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,400;0,700;1,400&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Josefin Sans\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  color: #2a2929;\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 36.8064px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 77.76px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 129.6px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 129.6px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 25.92px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 36.8064px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 51.84px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 16px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 25.92px;\\n  }\\n}\\n\\nsmall,\\np,\\ndl {\\n  text-align: left;\\n  font-size: 1rem;\\n  line-height: 25.92px;\\n}\\n\\np {\\n  margin-bottom: 0.618rem;\\n}\\n\\n@media (min-width: 374px) {\\n  p,\\nh4,\\ndl {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\ndt {\\n  color: #414141;\\n  margin-top: 1rem;\\n}\\n\\ndd {\\n  color: #6c6c6c;\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 25.92px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 36.8064px;\\n  }\\n}\\n\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 16px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 25.92px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #b4b4b4;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: #6c6c6c;\\n}\\n\\nnav {\\n  padding-top: 1.618rem;\\n}\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: #6c6c6c;\\n  border: 1px solid #6c6c6c;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\n.ButtonControls {\\n  display: grid;\\n  gap: 0.618rem;\\n  grid-template-columns: 1fr 2fr 1fr;\\n}\\n\\n.flip-box {\\n  background-color: transparent;\\n  width: 300px;\\n  height: 200px;\\n  perspective: 1000px;\\n  /* Remove this if you don't want the 3D effect */\\n}\\n\\n.flip-box-inner {\\n  position: relative;\\n  width: 100%;\\n  height: 100%;\\n  text-align: center;\\n  transition: transform 0.3s;\\n  transform-style: preserve-3d;\\n}\\n\\n.flip-it {\\n  transform: rotateY(180deg);\\n}</style>"],"names":[],"mappings":"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"}`
};
const FlipCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let foto;
  let back_txt;
  let showCarBack = false;
  let image_index = 0;
  $$result.css.add(css$7);
  foto = flashCard[image_index].image;
  back_txt = flashCard[image_index].word;
  return `<div class="${"flip-box svelte-1xdkst"}"><div class="${["flip-box-inner svelte-1xdkst", ""].join(" ").trim()}">${validate_component(FlashCard, "FlashCard").$$render($$result, {showCarBack, foto, back_txt}, {}, {})}</div>

	<div class="${"ButtonControls svelte-1xdkst"}">${validate_component(Button, "Button").$$render($$result, {variante: 4, text: "\u219C"}, {}, {})}
		${validate_component(Button, "Button").$$render($$result, {
    variante: 4,
    text: "\u293E"
  }, {}, {})}
		${validate_component(Button, "Button").$$render($$result, {variante: 4, text: "\u2933"}, {}, {})}</div>

</div>`;
});
const skillLevels = [
  {
    skill: "HTML / CSS-Sass / SVG",
    percent: 85,
    color: "red",
    delTime: 0
  },
  {
    skill: "JavaScript / Svelte",
    percent: 50,
    color: "darkorange",
    delTime: 1e3
  },
  {
    skill: "Blender / Python Scripting",
    percent: 35,
    color: "green",
    delTime: 1500
  },
  {
    skill: "3D Printing",
    percent: 65,
    color: "rebeccapurple",
    delTime: 2500
  },
  {
    skill: "Three JS",
    percent: 28,
    color: "black",
    delTime: 2500
  }
];
const subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = [];
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (let i = 0; i < subscribers.length; i += 1) {
          const s2 = subscribers[i];
          s2[1]();
          subscriber_queue.push(s2, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop) {
    const subscriber = [run2, invalidate];
    subscribers.push(subscriber);
    if (subscribers.length === 1) {
      stop = start(set) || noop;
    }
    run2(value);
    return () => {
      const index2 = subscribers.indexOf(subscriber);
      if (index2 !== -1) {
        subscribers.splice(index2, 1);
      }
      if (subscribers.length === 0) {
        stop();
        stop = null;
      }
    };
  }
  return {set, update, subscribe: subscribe2};
}
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function get_interpolator(a, b) {
  if (a === b || a !== a)
    return () => a;
  const type = typeof a;
  if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    throw new Error("Cannot interpolate values of different type");
  }
  if (Array.isArray(a)) {
    const arr = b.map((bi, i) => {
      return get_interpolator(a[i], bi);
    });
    return (t) => arr.map((fn) => fn(t));
  }
  if (type === "object") {
    if (!a || !b)
      throw new Error("Object cannot be null");
    if (is_date(a) && is_date(b)) {
      a = a.getTime();
      b = b.getTime();
      const delta = b - a;
      return (t) => new Date(a + t * delta);
    }
    const keys = Object.keys(b);
    const interpolators = {};
    keys.forEach((key) => {
      interpolators[key] = get_interpolator(a[key], b[key]);
    });
    return (t) => {
      const result = {};
      keys.forEach((key) => {
        result[key] = interpolators[key](t);
      });
      return result;
    };
  }
  if (type === "number") {
    const delta = b - a;
    return (t) => a + t * delta;
  }
  throw new Error(`Cannot interpolate ${type} values`);
}
function tweened(value, defaults = {}) {
  const store = writable(value);
  let task;
  let target_value = value;
  function set(new_value, opts) {
    if (value == null) {
      store.set(value = new_value);
      return Promise.resolve();
    }
    target_value = new_value;
    let previous_task = task;
    let started = false;
    let {delay = 0, duration = 400, easing = identity, interpolate = get_interpolator} = assign(assign({}, defaults), opts);
    if (duration === 0) {
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      store.set(value = target_value);
      return Promise.resolve();
    }
    const start = now() + delay;
    let fn;
    task = loop((now2) => {
      if (now2 < start)
        return true;
      if (!started) {
        fn = interpolate(value, new_value);
        if (typeof duration === "function")
          duration = duration(value, new_value);
        started = true;
      }
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      const elapsed = now2 - start;
      if (elapsed > duration) {
        store.set(value = new_value);
        return false;
      }
      store.set(value = fn(easing(elapsed / duration)));
      return true;
    });
    return task.promise;
  }
  return {
    set,
    update: (fn, opts) => set(fn(target_value, value), opts),
    subscribe: store.subscribe
  };
}
var Skillbar_svelte = '@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,400;0,700;1,400&display=swap");\n@charset "UTF-8";\n.svelte-1i1nua6,.svelte-1i1nua6:before,.svelte-1i1nua6:after{box-sizing:border-box}\ndiv.svelte-1i1nua6,span.svelte-1i1nua6{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@keyframes svelte-1i1nua6-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-1i1nua6-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-1i1nua6-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-1i1nua6:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-1i1nua6::selection{color:black;background-color:white;text-shadow:none}\n.container.svelte-1i1nua6{width:100%;margin-top:0.618rem;position:relative}\nspan.svelte-1i1nua6{position:absolute;top:32%;left:8px;color:white}\n.skills.svelte-1i1nua6{text-align:right;padding:0.618rem 0.618rem 0.618rem 0;color:white;transition:0.5s ease-out}';
const css$6 = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,400;0,700;1,400&display=swap");.svelte-1i1nua6,.svelte-1i1nua6:before,.svelte-1i1nua6:after{box-sizing:border-box}div.svelte-1i1nua6,span.svelte-1i1nua6{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}@media(min-width: 769px){}@media(min-width: 1023px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}@keyframes svelte-1i1nua6-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-1i1nua6-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-1i1nua6-loading{50%{transform:scale(1.2);opacity:0.7}}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-1i1nua6:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-1i1nua6::selection{color:black;background-color:white;text-shadow:none}.container.svelte-1i1nua6{width:100%;margin-top:0.618rem;position:relative}span.svelte-1i1nua6{position:absolute;top:32%;left:8px;color:white}.skills.svelte-1i1nua6{text-align:right;padding:0.618rem 0.618rem 0.618rem 0;color:white;transition:0.5s ease-out}',
  map: `{"version":3,"file":"Skillbar.svelte","sources":["Skillbar.svelte"],"sourcesContent":["<script>\\n\\t// https://svelte.dev/docs#tweened\\n\\timport {\\n\\t\\ttweened\\n\\t} from 'svelte/motion';\\n\\t// https://svelte.dev/docs#svelte_easing\\n\\timport {\\n\\t\\tbackInOut\\n\\t} from 'svelte/easing';\\n\\n\\texport let skill;\\n\\texport let percent;\\n\\texport let color;\\n\\texport let delTime;\\n\\n\\tconst progress = tweened(30, {\\n\\t\\tdelay: delTime,\\n\\t\\tduration: 2000,\\n\\t\\teasing: backInOut\\n\\t});\\n\\n\\t// Changes the initial value of 30 to percent value in skillLevels array\\n\\tprogress.set(percent)\\n</script>\\n\\n<div class=\\"container\\">\\n\\t<span class=\\"skill\\">{skill}</span>\\n\\t<div class=\\"skills\\" style=\\"width: {$progress}%; background-color: {color}\\">\\n\\t\\t{percent}%\\n\\t</div>\\n</div>\\n\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,400;0,700;1,400&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Josefin Sans\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  color: #2a2929;\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 36.8064px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 77.76px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 129.6px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 129.6px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 25.92px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 36.8064px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 51.84px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 16px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 25.92px;\\n  }\\n}\\n\\nsmall,\\np,\\ndl {\\n  text-align: left;\\n  font-size: 1rem;\\n  line-height: 25.92px;\\n}\\n\\np {\\n  margin-bottom: 0.618rem;\\n}\\n\\n@media (min-width: 374px) {\\n  p,\\nh4,\\ndl {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\ndt {\\n  color: #414141;\\n  margin-top: 1rem;\\n}\\n\\ndd {\\n  color: #6c6c6c;\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 25.92px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 36.8064px;\\n  }\\n}\\n\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 16px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 25.92px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #b4b4b4;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: #6c6c6c;\\n}\\n\\nnav {\\n  padding-top: 1.618rem;\\n}\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: #6c6c6c;\\n  border: 1px solid #6c6c6c;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\n.container {\\n  width: 100%;\\n  /* background-color: $grey_2; */\\n  margin-top: 0.618rem;\\n  position: relative;\\n}\\n\\nspan {\\n  position: absolute;\\n  top: 32%;\\n  left: 8px;\\n  color: white;\\n}\\n\\n.skills {\\n  text-align: right;\\n  padding: 0.618rem 0.618rem 0.618rem 0;\\n  /* font-weight: 300; */\\n  color: white;\\n  transition: 0.5s ease-out;\\n}</style>"],"names":[],"mappings":"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"}`
};
const Skillbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $progress, $$unsubscribe_progress;
  let {skill} = $$props;
  let {percent} = $$props;
  let {color} = $$props;
  let {delTime} = $$props;
  const progress = tweened(30, {
    delay: delTime,
    duration: 2e3,
    easing: backInOut
  });
  $$unsubscribe_progress = subscribe(progress, (value) => $progress = value);
  progress.set(percent);
  if ($$props.skill === void 0 && $$bindings.skill && skill !== void 0)
    $$bindings.skill(skill);
  if ($$props.percent === void 0 && $$bindings.percent && percent !== void 0)
    $$bindings.percent(percent);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.delTime === void 0 && $$bindings.delTime && delTime !== void 0)
    $$bindings.delTime(delTime);
  $$result.css.add(css$6);
  $$unsubscribe_progress();
  return `<div class="${"container svelte-1i1nua6"}"><span class="${"skill svelte-1i1nua6"}">${escape(skill)}</span>
	<div class="${"skills svelte-1i1nua6"}" style="${"width: " + escape($progress) + "%; background-color: " + escape(color)}">${escape(percent)}%
	</div>
</div>`;
});
const Skillsbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section><h2>Technical Skills</h2>
	${each(skillLevels, ({skill, percent, color, delTime}) => `${validate_component(Skillbar, "Skillbar").$$render($$result, {skill, percent, color, delTime}, {}, {})}`)}</section>`;
});
var Banner_svelte = '@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,400;0,700;1,400&display=swap");\n@charset "UTF-8";\n.svelte-nnqgyc.svelte-nnqgyc,.svelte-nnqgyc.svelte-nnqgyc:before,.svelte-nnqgyc.svelte-nnqgyc:after{box-sizing:border-box}\ndiv.svelte-nnqgyc.svelte-nnqgyc,h2.svelte-nnqgyc.svelte-nnqgyc,p.svelte-nnqgyc.svelte-nnqgyc,img.svelte-nnqgyc.svelte-nnqgyc{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\nh2.svelte-nnqgyc.svelte-nnqgyc{font-weight:500;font-size:1rem;line-height:25.92px}\n@media(min-width: 374px){h2.svelte-nnqgyc.svelte-nnqgyc{font-size:1.618rem;line-height:36.8064px}}\n@media(min-width: 2140px){h2.svelte-nnqgyc.svelte-nnqgyc{font-size:2.618rem;line-height:51.84px;margin-left:6.854rem;margin-right:6.854rem}}\n@media(min-width: 374px){}\np.svelte-nnqgyc.svelte-nnqgyc{text-align:left;font-size:1rem;line-height:25.92px}\np.svelte-nnqgyc.svelte-nnqgyc{margin-bottom:0.618rem}\n@media(min-width: 374px){p.svelte-nnqgyc.svelte-nnqgyc{max-width:769px;margin-left:auto;margin-right:auto}}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@keyframes svelte-nnqgyc-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-nnqgyc-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-nnqgyc-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-nnqgyc.svelte-nnqgyc:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-nnqgyc.svelte-nnqgyc::selection{color:black;background-color:white;text-shadow:none}\n.Banner.svelte-nnqgyc.svelte-nnqgyc{display:grid;grid-template-columns:1fr;grid-template-areas:"media" "texto"}\n.Banner.svelte-nnqgyc img.svelte-nnqgyc{width:100%}\n.Banner.svelte-nnqgyc video{width:100%;object-fit:cover}\n@media(min-width: 769px){.Banner.svelte-nnqgyc.svelte-nnqgyc{padding-bottom:0;padding-right:0;grid-template-columns:1fr 1.62fr;grid-template-areas:"texto media"}}\n.Banner.svelte-nnqgyc .BannerMedia.svelte-nnqgyc{grid-area:media}\n.Banner.svelte-nnqgyc .BannerText.svelte-nnqgyc{display:grid;justify-items:start;align-self:center;justify-self:center;grid-area:texto;padding-left:2.618rem}\n@media(min-width: 769px){.Banner.svelte-nnqgyc .BannerText.svelte-nnqgyc{margin-bottom:0;margin-right:1.618rem;max-width:374px}}\n.Banner.svelte-nnqgyc .BannerText h2.svelte-nnqgyc{font-weight:bold;margin-top:0.618rem;margin-right:0;margin-bottom:0.618rem;margin-left:0}\n@media(min-width: 374px){.Banner.svelte-nnqgyc .BannerText h2.svelte-nnqgyc{font-weight:inherit}}\n.variante_0.svelte-nnqgyc.svelte-nnqgyc{background-color:#110e08}\n.variante_1.svelte-nnqgyc.svelte-nnqgyc{color:black}';
const css$5 = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,400;0,700;1,400&display=swap");.svelte-nnqgyc.svelte-nnqgyc,.svelte-nnqgyc.svelte-nnqgyc:before,.svelte-nnqgyc.svelte-nnqgyc:after{box-sizing:border-box}div.svelte-nnqgyc.svelte-nnqgyc,h2.svelte-nnqgyc.svelte-nnqgyc,p.svelte-nnqgyc.svelte-nnqgyc,img.svelte-nnqgyc.svelte-nnqgyc{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}@media(min-width: 769px){}@media(min-width: 1023px){}@media(min-width: 2140px){}h2.svelte-nnqgyc.svelte-nnqgyc{font-weight:500;font-size:1rem;line-height:25.92px}@media(min-width: 374px){h2.svelte-nnqgyc.svelte-nnqgyc{font-size:1.618rem;line-height:36.8064px}}@media(min-width: 2140px){h2.svelte-nnqgyc.svelte-nnqgyc{font-size:2.618rem;line-height:51.84px;margin-left:6.854rem;margin-right:6.854rem}}@media(min-width: 374px){}p.svelte-nnqgyc.svelte-nnqgyc{text-align:left;font-size:1rem;line-height:25.92px}p.svelte-nnqgyc.svelte-nnqgyc{margin-bottom:0.618rem}@media(min-width: 374px){p.svelte-nnqgyc.svelte-nnqgyc{max-width:769px;margin-left:auto;margin-right:auto}}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}@keyframes svelte-nnqgyc-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-nnqgyc-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-nnqgyc-loading{50%{transform:scale(1.2);opacity:0.7}}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-nnqgyc.svelte-nnqgyc:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-nnqgyc.svelte-nnqgyc::selection{color:black;background-color:white;text-shadow:none}.Banner.svelte-nnqgyc.svelte-nnqgyc{display:grid;grid-template-columns:1fr;grid-template-areas:"media" "texto"}.Banner.svelte-nnqgyc img.svelte-nnqgyc{width:100%}.Banner.svelte-nnqgyc video{width:100%;object-fit:cover}@media(min-width: 769px){.Banner.svelte-nnqgyc.svelte-nnqgyc{padding-bottom:0;padding-right:0;grid-template-columns:1fr 1.62fr;grid-template-areas:"texto media"}}.Banner.svelte-nnqgyc .BannerMedia.svelte-nnqgyc{grid-area:media}.Banner.svelte-nnqgyc .BannerText.svelte-nnqgyc{display:grid;justify-items:start;align-self:center;justify-self:center;grid-area:texto;padding-left:2.618rem}@media(min-width: 769px){.Banner.svelte-nnqgyc .BannerText.svelte-nnqgyc{margin-bottom:0;margin-right:1.618rem;max-width:374px}}.Banner.svelte-nnqgyc .BannerText h2.svelte-nnqgyc{font-weight:bold;margin-top:0.618rem;margin-right:0;margin-bottom:0.618rem;margin-left:0}@media(min-width: 374px){.Banner.svelte-nnqgyc .BannerText h2.svelte-nnqgyc{font-weight:inherit}}.variante_0.svelte-nnqgyc.svelte-nnqgyc{background-color:#110e08}.variante_1.svelte-nnqgyc.svelte-nnqgyc{color:black}',
  map: `{"version":3,"file":"Banner.svelte","sources":["Banner.svelte"],"sourcesContent":["<script>\\n    export let title = '';\\n    export let text = '';\\n    export let img = '';\\n    export let variante = 0;\\n    let modificador = ['variante_0', 'variante_1'];\\n</script>\\n\\n<div class=\\"Banner {modificador[variante]}\\">\\n    <div class=\\"BannerMedia\\">\\n        {#if img}\\n            <slot name=\\"hasimage\\">\\n                <img src={img} alt=\\"Imagen\\" />\\n            </slot>\\n        {/if}\\n        <slot name=\\"hasvideo\\"></slot>\\n        <slot name=\\"hasSVG\\"></slot>\\n    </div>\\n\\n    <div class=\\"BannerText\\">\\n        <h2>{title}</h2>\\n        <p>{@html text}</p>\\n        <slot />\\n    </div>\\n</div>\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,400;0,700;1,400&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Josefin Sans\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  color: #2a2929;\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 36.8064px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 77.76px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 129.6px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 129.6px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 25.92px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 36.8064px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 51.84px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 16px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 25.92px;\\n  }\\n}\\n\\nsmall,\\np,\\ndl {\\n  text-align: left;\\n  font-size: 1rem;\\n  line-height: 25.92px;\\n}\\n\\np {\\n  margin-bottom: 0.618rem;\\n}\\n\\n@media (min-width: 374px) {\\n  p,\\nh4,\\ndl {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\ndt {\\n  color: #414141;\\n  margin-top: 1rem;\\n}\\n\\ndd {\\n  color: #6c6c6c;\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 25.92px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 36.8064px;\\n  }\\n}\\n\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 16px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 25.92px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #b4b4b4;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: #6c6c6c;\\n}\\n\\nnav {\\n  padding-top: 1.618rem;\\n}\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: #6c6c6c;\\n  border: 1px solid #6c6c6c;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\n.Banner {\\n  display: grid;\\n  grid-template-columns: 1fr;\\n  grid-template-areas: \\"media\\" \\"texto\\";\\n}\\n.Banner img {\\n  width: 100%;\\n}\\n.Banner :global(video) {\\n  width: 100%;\\n  object-fit: cover;\\n  /* mix-blend-mode: luminosity; */\\n  /* border-radius: $h2; */\\n}\\n@media (min-width: 769px) {\\n  .Banner {\\n    padding-bottom: 0;\\n    padding-right: 0;\\n    grid-template-columns: 1fr 1.62fr;\\n    grid-template-areas: \\"texto media\\";\\n  }\\n}\\n.Banner .BannerMedia {\\n  grid-area: media;\\n}\\n.Banner .BannerText {\\n  display: grid;\\n  justify-items: start;\\n  align-self: center;\\n  justify-self: center;\\n  grid-area: texto;\\n  padding-left: 2.618rem;\\n}\\n@media (min-width: 769px) {\\n  .Banner .BannerText {\\n    margin-bottom: 0;\\n    margin-right: 1.618rem;\\n    max-width: 374px;\\n  }\\n}\\n.Banner .BannerText h2 {\\n  font-weight: bold;\\n  margin-top: 0.618rem;\\n  margin-right: 0;\\n  margin-bottom: 0.618rem;\\n  margin-left: 0;\\n}\\n@media (min-width: 374px) {\\n  .Banner .BannerText h2 {\\n    font-weight: inherit;\\n  }\\n}\\n\\n.variante_0 {\\n  background-color: #110e08;\\n}\\n\\n.variante_1 {\\n  color: black;\\n}</style>\\n"],"names":[],"mappings":"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"}`
};
const Banner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {title = ""} = $$props;
  let {text = ""} = $$props;
  let {img = ""} = $$props;
  let {variante = 0} = $$props;
  let modificador = ["variante_0", "variante_1"];
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.img === void 0 && $$bindings.img && img !== void 0)
    $$bindings.img(img);
  if ($$props.variante === void 0 && $$bindings.variante && variante !== void 0)
    $$bindings.variante(variante);
  $$result.css.add(css$5);
  return `<div class="${"Banner " + escape(modificador[variante]) + " svelte-nnqgyc"}"><div class="${"BannerMedia svelte-nnqgyc"}">${img ? `${slots.hasimage ? slots.hasimage({}) : `
                <img${add_attribute("src", img, 0)} alt="${"Imagen"}" class="${"svelte-nnqgyc"}">
            `}` : ``}
        ${slots.hasvideo ? slots.hasvideo({}) : ``}
        ${slots.hasSVG ? slots.hasSVG({}) : ``}</div>

    <div class="${"BannerText svelte-nnqgyc"}"><h2 class="${"svelte-nnqgyc"}">${escape(title)}</h2>
        <p class="${"svelte-nnqgyc"}">${text}</p>
        ${slots.default ? slots.default({}) : ``}</div>
</div>`;
});
const CtaBanner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Banner, "Banner").$$render($$result, {
    variante: 1,
    title: "CTA Banner",
    text: "Labore est temporibus odit, exercitationem et magnam",
    img: "./img/bg1.jpg"
  }, {}, {
    default: () => `${validate_component(Button, "Button").$$render($$result, {variante: 1, text: "cta text", url: "#"}, {}, {})}`
  })}`;
});
var Section_svelte = '@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,400;0,700;1,400&display=swap");\n@charset "UTF-8";\n.svelte-1v5ntaz,.svelte-1v5ntaz:before,.svelte-1v5ntaz:after{box-sizing:border-box}\nsection.svelte-1v5ntaz{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\nsection.svelte-1v5ntaz{display:block}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@keyframes svelte-1v5ntaz-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-1v5ntaz-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-1v5ntaz-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-1v5ntaz:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-1v5ntaz::selection{color:black;background-color:white;text-shadow:none}\nsection.svelte-1v5ntaz{padding:2.618rem;min-height:50vh}\n.Variante_0.svelte-1v5ntaz{background-color:#e5e5e5}\n.Variante_1.svelte-1v5ntaz{background-color:#e5e5e5;padding:0}\n.Variante_2.svelte-1v5ntaz{display:grid;place-content:center;background-color:#110e08}';
const css$4 = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,400;0,700;1,400&display=swap");.svelte-1v5ntaz,.svelte-1v5ntaz:before,.svelte-1v5ntaz:after{box-sizing:border-box}section.svelte-1v5ntaz{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}section.svelte-1v5ntaz{display:block}@media(min-width: 769px){}@media(min-width: 1023px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}@keyframes svelte-1v5ntaz-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-1v5ntaz-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-1v5ntaz-loading{50%{transform:scale(1.2);opacity:0.7}}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-1v5ntaz:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-1v5ntaz::selection{color:black;background-color:white;text-shadow:none}section.svelte-1v5ntaz{padding:2.618rem;min-height:50vh}.Variante_0.svelte-1v5ntaz{background-color:#e5e5e5}.Variante_1.svelte-1v5ntaz{background-color:#e5e5e5;padding:0}.Variante_2.svelte-1v5ntaz{display:grid;place-content:center;background-color:#110e08}',
  map: '{"version":3,"file":"Section.svelte","sources":["Section.svelte"],"sourcesContent":["<script>\\n    export let variante = 0;\\n    export let id = \\"\\";\\n    let modificador = [\\n        \\"Variante_0\\",\\n        \\"Variante_1\\",\\n        \\"Variante_2\\"\\n    ];\\n</script>\\n\\n<section    {id}\\n            class={modificador[variante]}\\n>\\n    <slot />\\n</section>\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,400;0,700;1,400&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Josefin Sans\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  color: #2a2929;\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 36.8064px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 77.76px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 129.6px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 129.6px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 25.92px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 36.8064px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 51.84px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 16px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 25.92px;\\n  }\\n}\\n\\nsmall,\\np,\\ndl {\\n  text-align: left;\\n  font-size: 1rem;\\n  line-height: 25.92px;\\n}\\n\\np {\\n  margin-bottom: 0.618rem;\\n}\\n\\n@media (min-width: 374px) {\\n  p,\\nh4,\\ndl {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\ndt {\\n  color: #414141;\\n  margin-top: 1rem;\\n}\\n\\ndd {\\n  color: #6c6c6c;\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 25.92px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 36.8064px;\\n  }\\n}\\n\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 16px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 25.92px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #b4b4b4;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: #6c6c6c;\\n}\\n\\nnav {\\n  padding-top: 1.618rem;\\n}\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: #6c6c6c;\\n  border: 1px solid #6c6c6c;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\nsection {\\n  padding: 2.618rem;\\n  min-height: 50vh;\\n}\\n\\n.Variante_0 {\\n  background-color: #e5e5e5;\\n}\\n\\n.Variante_1 {\\n  background-color: #e5e5e5;\\n  padding: 0;\\n}\\n\\n.Variante_2 {\\n  display: grid;\\n  place-content: center;\\n  background-color: #110e08;\\n}</style>"],"names":[],"mappings":"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"}'
};
const Section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {variante = 0} = $$props;
  let {id = ""} = $$props;
  let modificador = ["Variante_0", "Variante_1", "Variante_2"];
  if ($$props.variante === void 0 && $$bindings.variante && variante !== void 0)
    $$bindings.variante(variante);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  $$result.css.add(css$4);
  return `<section${add_attribute("id", id, 0)} class="${escape(null_to_empty(modificador[variante])) + " svelte-1v5ntaz"}">${slots.default ? slots.default({}) : ``}
</section>`;
});
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Section, "Section").$$render($$result, {id: "quoterotator", variante: 1}, {}, {
    default: () => `${validate_component(QuoteRotator, "QuoteRotator").$$render($$result, {}, {}, {})}`
  })}

${validate_component(Section, "Section").$$render($$result, {id: "flipcard", variante: 2}, {}, {
    default: () => `${validate_component(FlipCard, "FlipCard").$$render($$result, {}, {}, {})}`
  })}

${validate_component(Section, "Section").$$render($$result, {id: "skillsbar", variante: 0}, {}, {
    default: () => `${validate_component(Skillsbar, "Skillsbar").$$render($$result, {}, {}, {})}`
  })}

${validate_component(Section, "Section").$$render($$result, {id: "ctabanner", variante: 1}, {}, {
    default: () => `${validate_component(CtaBanner, "CtaBanner").$$render($$result, {}, {}, {})}`
  })}`;
});
var index$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: Routes
});
const Artworks = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>Artworks</h1>

${validate_component(FlipCard, "FlipCard").$$render($$result, {}, {}, {})}`;
});
var index$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: Artworks
});
var BannerTexto_svelte = '@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,400;0,700;1,400&display=swap");\n@charset "UTF-8";\n.svelte-kw8sz0.svelte-kw8sz0,.svelte-kw8sz0.svelte-kw8sz0:before,.svelte-kw8sz0.svelte-kw8sz0:after{box-sizing:border-box}\ndiv.svelte-kw8sz0.svelte-kw8sz0,span.svelte-kw8sz0.svelte-kw8sz0,h2.svelte-kw8sz0.svelte-kw8sz0,img.svelte-kw8sz0.svelte-kw8sz0,i.svelte-kw8sz0.svelte-kw8sz0,section.svelte-kw8sz0.svelte-kw8sz0{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\nsection.svelte-kw8sz0.svelte-kw8sz0{display:block}\ni.svelte-kw8sz0.svelte-kw8sz0{color:#2a2929;font-style:italic}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\nh2.svelte-kw8sz0.svelte-kw8sz0{font-weight:500;font-size:1rem;line-height:25.92px}\n@media(min-width: 374px){h2.svelte-kw8sz0.svelte-kw8sz0{font-size:1.618rem;line-height:36.8064px}}\n@media(min-width: 2140px){h2.svelte-kw8sz0.svelte-kw8sz0{font-size:2.618rem;line-height:51.84px;margin-left:6.854rem;margin-right:6.854rem}}\n@media(min-width: 374px){}\ndl.svelte-kw8sz0.svelte-kw8sz0{text-align:left;font-size:1rem;line-height:25.92px}\n@media(min-width: 374px){dl.svelte-kw8sz0.svelte-kw8sz0{max-width:769px;margin-left:auto;margin-right:auto}}\ndt.svelte-kw8sz0.svelte-kw8sz0{color:#414141;margin-top:1rem}\ndd.svelte-kw8sz0.svelte-kw8sz0{color:#6c6c6c}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@keyframes svelte-kw8sz0-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-kw8sz0-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-kw8sz0-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-kw8sz0.svelte-kw8sz0:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-kw8sz0.svelte-kw8sz0::selection{color:black;background-color:white;text-shadow:none}\n.BannerTexto.svelte-kw8sz0.svelte-kw8sz0{position:relative;background-color:white;display:grid;align-items:center;text-align:center;padding:2.618rem}\n.BannerTexto.svelte-kw8sz0 .BannerTextoHeader.svelte-kw8sz0{max-width:46.971rem;margin-top:1.618rem;margin-bottom:1.618rem;color:#e8b28a;margin-left:auto;margin-right:auto}\n.BannerTexto.svelte-kw8sz0 .BannerTextoText.svelte-kw8sz0{color:#2a2929}\n.Avatar.svelte-kw8sz0.svelte-kw8sz0{justify-self:center;max-width:11.089rem;height:11.089rem;border-radius:50%}\n.idioma_switch.svelte-kw8sz0.svelte-kw8sz0{position:relative;margin-bottom:1rem;display:flex;justify-items:flex-end}\n.idioma_switch.svelte-kw8sz0 button.svelte-kw8sz0:nth-child(1){position:absolute;right:0;top:0;border:none;background-color:transparent;color:#e8b28a}\n.idioma_switch.svelte-kw8sz0 button.svelte-kw8sz0:nth-child(1):hover{color:#6c6c6c;cursor:pointer}';
const css$3 = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,400;0,700;1,400&display=swap");.svelte-kw8sz0.svelte-kw8sz0,.svelte-kw8sz0.svelte-kw8sz0:before,.svelte-kw8sz0.svelte-kw8sz0:after{box-sizing:border-box}div.svelte-kw8sz0.svelte-kw8sz0,span.svelte-kw8sz0.svelte-kw8sz0,h2.svelte-kw8sz0.svelte-kw8sz0,img.svelte-kw8sz0.svelte-kw8sz0,i.svelte-kw8sz0.svelte-kw8sz0,section.svelte-kw8sz0.svelte-kw8sz0{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}section.svelte-kw8sz0.svelte-kw8sz0{display:block}i.svelte-kw8sz0.svelte-kw8sz0{color:#2a2929;font-style:italic}@media(min-width: 769px){}@media(min-width: 1023px){}@media(min-width: 2140px){}h2.svelte-kw8sz0.svelte-kw8sz0{font-weight:500;font-size:1rem;line-height:25.92px}@media(min-width: 374px){h2.svelte-kw8sz0.svelte-kw8sz0{font-size:1.618rem;line-height:36.8064px}}@media(min-width: 2140px){h2.svelte-kw8sz0.svelte-kw8sz0{font-size:2.618rem;line-height:51.84px;margin-left:6.854rem;margin-right:6.854rem}}@media(min-width: 374px){}dl.svelte-kw8sz0.svelte-kw8sz0{text-align:left;font-size:1rem;line-height:25.92px}@media(min-width: 374px){dl.svelte-kw8sz0.svelte-kw8sz0{max-width:769px;margin-left:auto;margin-right:auto}}dt.svelte-kw8sz0.svelte-kw8sz0{color:#414141;margin-top:1rem}dd.svelte-kw8sz0.svelte-kw8sz0{color:#6c6c6c}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}@keyframes svelte-kw8sz0-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-kw8sz0-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-kw8sz0-loading{50%{transform:scale(1.2);opacity:0.7}}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-kw8sz0.svelte-kw8sz0:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-kw8sz0.svelte-kw8sz0::selection{color:black;background-color:white;text-shadow:none}.BannerTexto.svelte-kw8sz0.svelte-kw8sz0{position:relative;background-color:white;display:grid;align-items:center;text-align:center;padding:2.618rem}.BannerTexto.svelte-kw8sz0 .BannerTextoHeader.svelte-kw8sz0{max-width:46.971rem;margin-top:1.618rem;margin-bottom:1.618rem;color:#e8b28a;margin-left:auto;margin-right:auto}.BannerTexto.svelte-kw8sz0 .BannerTextoText.svelte-kw8sz0{color:#2a2929}.Avatar.svelte-kw8sz0.svelte-kw8sz0{justify-self:center;max-width:11.089rem;height:11.089rem;border-radius:50%}.idioma_switch.svelte-kw8sz0.svelte-kw8sz0{position:relative;margin-bottom:1rem;display:flex;justify-items:flex-end}.idioma_switch.svelte-kw8sz0 button.svelte-kw8sz0:nth-child(1){position:absolute;right:0;top:0;border:none;background-color:transparent;color:#e8b28a}.idioma_switch.svelte-kw8sz0 button.svelte-kw8sz0:nth-child(1):hover{color:#6c6c6c;cursor:pointer}',
  map: `{"version":3,"file":"BannerTexto.svelte","sources":["BannerTexto.svelte"],"sourcesContent":["<script>\\n    export let header = \\"\\"\\n    export let texto = \\"\\"\\n    export let img = \\"\\"\\n    let idioma_switch = false;\\n</script>\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,400;0,700;1,400&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Josefin Sans\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  color: #2a2929;\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 36.8064px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 77.76px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 129.6px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 129.6px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 25.92px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 36.8064px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 51.84px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 16px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 25.92px;\\n  }\\n}\\n\\nsmall,\\np,\\ndl {\\n  text-align: left;\\n  font-size: 1rem;\\n  line-height: 25.92px;\\n}\\n\\np {\\n  margin-bottom: 0.618rem;\\n}\\n\\n@media (min-width: 374px) {\\n  p,\\nh4,\\ndl {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\ndt {\\n  color: #414141;\\n  margin-top: 1rem;\\n}\\n\\ndd {\\n  color: #6c6c6c;\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 25.92px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 36.8064px;\\n  }\\n}\\n\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 16px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 25.92px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #b4b4b4;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: #6c6c6c;\\n}\\n\\nnav {\\n  padding-top: 1.618rem;\\n}\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: #6c6c6c;\\n  border: 1px solid #6c6c6c;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\n.BannerTexto {\\n  position: relative;\\n  background-color: white;\\n  display: grid;\\n  align-items: center;\\n  text-align: center;\\n  padding: 2.618rem;\\n}\\n.BannerTexto .BannerTextoHeader {\\n  max-width: 46.971rem;\\n  margin-top: 1.618rem;\\n  margin-bottom: 1.618rem;\\n  color: #e8b28a;\\n  margin-left: auto;\\n  margin-right: auto;\\n}\\n.BannerTexto .BannerTextoText {\\n  color: #2a2929;\\n}\\n.BannerTexto p {\\n  color: #6c6c6c;\\n}\\n\\n.Avatar {\\n  justify-self: center;\\n  max-width: 11.089rem;\\n  height: 11.089rem;\\n  border-radius: 50%;\\n}\\n\\n.idioma_switch {\\n  position: relative;\\n  margin-bottom: 1rem;\\n  display: flex;\\n  justify-items: flex-end;\\n}\\n.idioma_switch button:nth-child(1) {\\n  position: absolute;\\n  right: 0;\\n  top: 0;\\n  border: none;\\n  background-color: transparent;\\n  color: #e8b28a;\\n}\\n.idioma_switch button:nth-child(1):hover {\\n  color: #6c6c6c;\\n  cursor: pointer;\\n}</style>\\n\\n<section class=\\"BannerTexto\\">\\n\\n    <img class=\\"Avatar\\" src={img} alt=\\"\\">\\n\\n    <h2 class=\\"BannerTextoHeader\\">\\n        {header} <br>\\n        <span class=\\"BannerTextoText\\">{@html texto}</span>\\n    </h2>\\n\\n    <div class=\\"idioma_switch\\">\\n        <button on:click={()=>{\\n            idioma_switch = !idioma_switch;\\n        }}>{#if idioma_switch}English{:else}Espa\xF1ol{/if}</button>\\n    </div>\\n\\n    {#if idioma_switch}\\n    <dl>\\n        <dt>Nac\xED en Vic (Barcelona) en 1976.</dt>\\n    \\n        <dt>1985-1991</dt>\\n        <dd>Durante mi infancia me form\xE9 en la <i>Escola de dibuix i art Masferrer</i> de Vic con los profesores Pere Isern Punt\xED, Eduard Xandri Calvet, Lluis Bres Oliva,\xA0Lluis\xA0Gros Pujol...</dd>\\n    \\n        <dt>1994-1995</dt>\\n        <dd>Estudi\xE9 en <i>Escola d\xB4arts\xA0aplicades i oficis artistics</i>\xA0de Vic.</dd>\\n    \\n        <dt>1997-2001</dt> \\n        <dd>Estudi\xE9\xA0el grado de Dise\xF1o de Moda\xA0en\xA0<i>Escola Superior de Disseny Bau</i> de Barcelona.</dd>\xA0\\n    \\n        <dt>2000-2001</dt> \\n        <dd>Taller de sombrerer\xEDa  en Barcelona con <i>Nina Pawloswsky</i>.</dd>\\n    \\n        <dt>1999 -2004</dt> \\n        <dd>Empiezo a trabajar para la marca de moda para mujer <i>Gimenez&Zuazo</i> y su otra marca <i>Boba by G&Z</i>,\xA0con distribuci\xF3n en el mercado nacional e internacional en 250 puntos de venta canal multi marca en\xA0Espa\xF1a, Francia, Italia, Jap\xF3n...</dd>\\n        <dd>Bajo la direcci\xF3n de los socios, co-dirijo el departamento de dise\xF1o. Me encargaba\xA0de todo el proceso de dise\xF1o y las ilustraciones, desarrollo de las colecciones,\xA0b\xFAsqueda de referencias y tendencias, dise\xF1o, elaboraci\xF3n y supervisi\xF3n de fichas t\xE9cnicas, coordinaci\xF3n con el equipo de patronaje, manejo de fornituras y materiales, coordinaci\xF3n con las empresas de estampaci\xF3n y producci\xF3n.</dd>\xA0\xA0\\n    \\n        <dt>2004-2010</dt> \\n        <dd>Directora creativa y socia fundadora de la marca de moda para mujer <i>Obvia</i>:\xA0desarrollo de la idea de negocio, direcci\xF3n de la compa\xF1\xEDa con un equipo de personas, codirecci\xF3n del departamento de dise\xF1o, directora de producci\xF3n, direcci\xF3n de ventas. Distribuci\xF3n en el mercado nacional con puntos de venta canal multi marca en Espa\xF1a. Fabricaci\xF3n de proximidad.</dd>\\n    \\n        <dt>2010-2018</dt> \\n        <dd>Freelance Textile Graphic Designer. Dise\xF1adora de estampados para mujer, hombre, ni\xF1@s en <i>Padma Dise\xF1o S.L., Zara, Pull&Bear, Bershka, Mango, Replay, Springfield, Blue Inc.,\xA0Studio F Women / STF Group Colombia</i>...</dd>\\n    \\n        <dt>2019</dt> \\n        <dd>Decido dejar el mundo de la moda y de la ilustraci\xF3n para empezar a buscar una expresi\xF3n\xA0m\xE1s\xA0\xEDntima.</dd>\\n    \\n        <dd>Paralelamente a mi actividad profesional mantengo una formaci\xF3n continua en el mundo del arte, con incursiones en diversas t\xE9cnicas como esmalte, cer\xE1mica, escultura, pintura al \xF3leo, arte para ni\xF1os, libros de artista, as\xED como astrolog\xEDa y educaci\xF3n activa.</dd>\\n    \\n        <dt>Actualmente vivo en pareja con el artista multidisciplinar Sergio For\xE9s. Soy madre de dos hijos y, buscando formas alternativas de vida y educaci\xF3n, me traslad\xE9 en 2014 a un peque\xF1o pueblo del Alt Pened\xE8s rodeado de vi\xF1edos y naturaleza.</dt>\\n    </dl>\\n    {:else}\\n    <dl>\\n        <dt>Born in Vic (Barcelona) in 1976.</dt>\\n    \\n        <dt>1985-1991</dt>\\n        <dd>During my childhood I trained at the <i>Escola de dibuix i art Masferrer</i> in Vic with the teachers Pere Isern Punt\xED, Eduard Xandri Calvet, Llu\xEDs Bres Oliva, Llu\xEDs Gros Pujol\u2026</dd>\\n    \\n        <dt>1994-1995</dt>\\n        <dd>Studied at the <i>Escola d'arts aplicades i oficis art\xEDstics</i> (School of Applied Arts and Crafts) in Vic.</dd>\\n    \\n        <dt>1997-2001</dt> \\n        <dd>Degree in Fashion Design from the <i>Escola Superior de Disseny Bau</i> in Barcelona.</dd>\xA0\\n    \\n        <dt>2000-2001</dt> \\n        <dd>Millinery workshop in Barcelona with <i>Nina Pawloswsky</i>.</dd>\\n    \\n        <dt>1999-2004</dt> \\n        <dd>Began working with the women\u2019s fashion brand <i>Gim\xE9nez&Zuazo</i> and its other brand <i>Boba by G&Z</i>, with distribution nationally and internationally through 250 multi-brands channels in Spain, France, Italy, Japan and others.</dd>\\n        <dd>Under the leadership of the partners, co-managed the design department. I was responsible for the entire design process and the illustrations, developing the collections, researching the latest looks and trends, design, drafting and supervising the technical specifications, coordination with the patterns team, managing accessories and materials, coordination with fabric printing and production companies.</dd>\xA0\xA0\\n    \\n        <dt>2004-2010</dt> \\n        <dd>Creative director and founding partner of the women\u2019s fashion brand Obvia. Development of the business idea, part of the management team, co-director of the design department, director of production, director of sales. National distribution to multi-brand points of sale in Spain. Local production.</dd>\\n    \\n        <dt>2010-2018</dt> \\n        <dd>Freelance Textile Graphic Designer. Designer of prints for women, men and children\u2019s clothing\xA0for <i>Padma Dise\xF1o S.L., Zara, Pull&Bear, Bershka, Mango, Replay, Springfield, Blue Inc., Studio F Women / STF Group Colombia</i>...</dd>\\n    \\n        <dt>2019</dt> \\n        <dd>Left the world of fashion and illustration to begin looking for a more intimate mode of expression.</dd>\\n    \\n        <dd>In parallel with my professional career, I maintained a constant level of training in the art world, with incursions into a variety of techniques such as lacquer, ceramics, sculpture, oils, art for children, artist books, as well as astrology and active learning.</dd>\\n    \\n        <dd>Currently, I live with my partner, the multidisciplinary artist Sergio For\xE9s. Mother to two children and searching for alternative ways of life and education. In 2014 I moved to a small village in Alt Pened\xE8s surrounded by vineyards and nature.\\n        </dd>\\n    </dl>    \\n    {/if}\\n</section>"],"names":[],"mappings":"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"}`
};
const BannerTexto = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {header = ""} = $$props;
  let {texto = ""} = $$props;
  let {img = ""} = $$props;
  if ($$props.header === void 0 && $$bindings.header && header !== void 0)
    $$bindings.header(header);
  if ($$props.texto === void 0 && $$bindings.texto && texto !== void 0)
    $$bindings.texto(texto);
  if ($$props.img === void 0 && $$bindings.img && img !== void 0)
    $$bindings.img(img);
  $$result.css.add(css$3);
  return `<section class="${"BannerTexto svelte-kw8sz0"}"><img class="${"Avatar svelte-kw8sz0"}"${add_attribute("src", img, 0)} alt="${""}">

    <h2 class="${"BannerTextoHeader svelte-kw8sz0"}">${escape(header)} <br class="${"svelte-kw8sz0"}">
        <span class="${"BannerTextoText svelte-kw8sz0"}">${texto}</span></h2>

    <div class="${"idioma_switch svelte-kw8sz0"}"><button class="${"svelte-kw8sz0"}">${`Espa\xF1ol`}</button></div>

    ${`<dl class="${"svelte-kw8sz0"}"><dt class="${"svelte-kw8sz0"}">Born in Vic (Barcelona) in 1976.</dt><dt class="${"svelte-kw8sz0"}">1985-1991</dt><dd class="${"svelte-kw8sz0"}">During my childhood I trained at the <i class="${"svelte-kw8sz0"}">Escola de dibuix i art Masferrer</i> in Vic with the teachers Pere Isern Punt\xED, Eduard Xandri Calvet, Llu\xEDs Bres Oliva, Llu\xEDs Gros Pujol\u2026</dd><dt class="${"svelte-kw8sz0"}">1994-1995</dt><dd class="${"svelte-kw8sz0"}">Studied at the <i class="${"svelte-kw8sz0"}">Escola d&#39;arts aplicades i oficis art\xEDstics</i> (School of Applied Arts and Crafts) in Vic.</dd><dt class="${"svelte-kw8sz0"}">1997-2001</dt><dd class="${"svelte-kw8sz0"}">Degree in Fashion Design from the <i class="${"svelte-kw8sz0"}">Escola Superior de Disseny Bau</i> in Barcelona.</dd><dt class="${"svelte-kw8sz0"}">2000-2001</dt><dd class="${"svelte-kw8sz0"}">Millinery workshop in Barcelona with <i class="${"svelte-kw8sz0"}">Nina Pawloswsky</i>.</dd><dt class="${"svelte-kw8sz0"}">1999-2004</dt><dd class="${"svelte-kw8sz0"}">Began working with the women\u2019s fashion brand <i class="${"svelte-kw8sz0"}">Gim\xE9nez&amp;Zuazo</i> and its other brand <i class="${"svelte-kw8sz0"}">Boba by G&amp;Z</i>, with distribution nationally and internationally through 250 multi-brands channels in Spain, France, Italy, Japan and others.</dd><dd class="${"svelte-kw8sz0"}">Under the leadership of the partners, co-managed the design department. I was responsible for the entire design process and the illustrations, developing the collections, researching the latest looks and trends, design, drafting and supervising the technical specifications, coordination with the patterns team, managing accessories and materials, coordination with fabric printing and production companies.</dd><dt class="${"svelte-kw8sz0"}">2004-2010</dt><dd class="${"svelte-kw8sz0"}">Creative director and founding partner of the women\u2019s fashion brand Obvia. Development of the business idea, part of the management team, co-director of the design department, director of production, director of sales. National distribution to multi-brand points of sale in Spain. Local production.</dd><dt class="${"svelte-kw8sz0"}">2010-2018</dt><dd class="${"svelte-kw8sz0"}">Freelance Textile Graphic Designer. Designer of prints for women, men and children\u2019s clothing\xA0for <i class="${"svelte-kw8sz0"}">Padma Dise\xF1o S.L., Zara, Pull&amp;Bear, Bershka, Mango, Replay, Springfield, Blue Inc., Studio F Women / STF Group Colombia</i>...</dd><dt class="${"svelte-kw8sz0"}">2019</dt><dd class="${"svelte-kw8sz0"}">Left the world of fashion and illustration to begin looking for a more intimate mode of expression.</dd><dd class="${"svelte-kw8sz0"}">In parallel with my professional career, I maintained a constant level of training in the art world, with incursions into a variety of techniques such as lacquer, ceramics, sculpture, oils, art for children, artist books, as well as astrology and active learning.</dd><dd class="${"svelte-kw8sz0"}">Currently, I live with my partner, the multidisciplinary artist Sergio For\xE9s. Mother to two children and searching for alternative ways of life and education. In 2014 I moved to a small village in Alt Pened\xE8s surrounded by vineyards and nature.
        </dd></dl>`}</section>`;
});
const AboutMeTxt = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(BannerTexto, "BannerTexto").$$render($$result, {
    header: "About me title",
    texto: "txt about me",
    img: "./img/avatar.jpg"
  }, {}, {})}`;
});
var TabHeaders_svelte = '@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,400;0,700;1,400&display=swap");\n@charset "UTF-8";\n.svelte-eg6h1a,.svelte-eg6h1a:before,.svelte-eg6h1a:after{box-sizing:border-box}\ndiv.svelte-eg6h1a,h1.svelte-eg6h1a,p.svelte-eg6h1a{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\nh1.svelte-eg6h1a{font-size:1.618rem;line-height:36.8064px;font-weight:bold}\n@media(min-width: 769px){h1.svelte-eg6h1a{font-size:4.236rem;line-height:77.76px}}\n@media(min-width: 1023px){h1.svelte-eg6h1a{font-size:6.854rem;line-height:129.6px}}\n@media(min-width: 2140px){h1.svelte-eg6h1a{font-size:11.089rem;line-height:129.6px}}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\np.svelte-eg6h1a{text-align:left;font-size:1rem;line-height:25.92px}\np.svelte-eg6h1a{margin-bottom:0.618rem}\n@media(min-width: 374px){p.svelte-eg6h1a{max-width:769px;margin-left:auto;margin-right:auto}}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@keyframes svelte-eg6h1a-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-eg6h1a-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-eg6h1a-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-eg6h1a:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-eg6h1a::selection{color:black;background-color:white;text-shadow:none}\n.tablink.svelte-eg6h1a{background-color:#b4b4b4;float:left;border:none;outline:none;cursor:pointer;padding:1rem 0.618rem;width:20%}\n.tablink.svelte-eg6h1a:hover{background-color:#6c6c6c}\n.tabcontent.svelte-eg6h1a{color:inherit;padding:2.618rem;text-align:center}';
const css$2 = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,400;0,700;1,400&display=swap");.svelte-eg6h1a,.svelte-eg6h1a:before,.svelte-eg6h1a:after{box-sizing:border-box}div.svelte-eg6h1a,h1.svelte-eg6h1a,p.svelte-eg6h1a{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}h1.svelte-eg6h1a{font-size:1.618rem;line-height:36.8064px;font-weight:bold}@media(min-width: 769px){h1.svelte-eg6h1a{font-size:4.236rem;line-height:77.76px}}@media(min-width: 1023px){h1.svelte-eg6h1a{font-size:6.854rem;line-height:129.6px}}@media(min-width: 2140px){h1.svelte-eg6h1a{font-size:11.089rem;line-height:129.6px}}@media(min-width: 374px){}@media(min-width: 2140px){}@media(min-width: 374px){}p.svelte-eg6h1a{text-align:left;font-size:1rem;line-height:25.92px}p.svelte-eg6h1a{margin-bottom:0.618rem}@media(min-width: 374px){p.svelte-eg6h1a{max-width:769px;margin-left:auto;margin-right:auto}}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}@keyframes svelte-eg6h1a-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-eg6h1a-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-eg6h1a-loading{50%{transform:scale(1.2);opacity:0.7}}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-eg6h1a:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-eg6h1a::selection{color:black;background-color:white;text-shadow:none}.tablink.svelte-eg6h1a{background-color:#b4b4b4;float:left;border:none;outline:none;cursor:pointer;padding:1rem 0.618rem;width:20%}.tablink.svelte-eg6h1a:hover{background-color:#6c6c6c}.tabcontent.svelte-eg6h1a{color:inherit;padding:2.618rem;text-align:center}',
  map: '{"version":3,"file":"TabHeaders.svelte","sources":["TabHeaders.svelte"],"sourcesContent":["<script>\\n\\n    const tabLinks = [\\n        {\\n            title: \\"0\\",\\n            content: \\"lorem ipsum orhjf eirjesr.\\"\\n        },\\n        {\\n            title: \\"1\\",\\n            content: \\"awefawef ewa fwesr.\\"\\n        },\\n        {\\n            title: \\"2\\",\\n            content: \\"awfe awef awrg er jhtsrdf eirjesr.\\"\\n        },\\n        {\\n            title: \\"3\\",\\n            content: \\"l6he65 56hy rbt sfdcv rer rjesr.\\"\\n        },\\n        {\\n            title: \\"4\\",\\n            content: \\"Laod kaoigj aoiusdhgesr.\\"\\n        }\\n    ]\\n    let active = false;\\n    \\n    let elementContainer;\\n    let selectedContent;\\n    const openTab = (e) => {\\n\\n        elementContainer = e.target.id\\n        selectedContent = e.srcElement.parentElement.childNodes[elementContainer]\\n        // selectedContent.style.display = \\"block\\"\\n        console.log(e)\\n        // active = true;\\n        // selectedContent = e.srcElement.parentElement.childNodes\\n        // elementContainer = selectedContent[e.target.id]\\n        \\n        // elementContainer.style.display = \\"block\\"\\n        // console.log(selectedContent[e.target.id])\\n        // if (active ==true) {\\n        // }\\n    }\\n</script>\\n\\n{#each tabLinks as tab}\\n<div class=\\"tabcontent\\">\\n    <h1>{tab.title}</h1>\\n    <p>{tab.content}</p>\\n</div>\\n{/each}\\n<button class=\\"tablink\\" on:click={openTab}> \\n    boton\\n</button>\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,400;0,700;1,400&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Josefin Sans\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  color: #2a2929;\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 36.8064px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 77.76px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 129.6px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 129.6px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 25.92px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 36.8064px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 51.84px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 16px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 25.92px;\\n  }\\n}\\n\\nsmall,\\np,\\ndl {\\n  text-align: left;\\n  font-size: 1rem;\\n  line-height: 25.92px;\\n}\\n\\np {\\n  margin-bottom: 0.618rem;\\n}\\n\\n@media (min-width: 374px) {\\n  p,\\nh4,\\ndl {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\ndt {\\n  color: #414141;\\n  margin-top: 1rem;\\n}\\n\\ndd {\\n  color: #6c6c6c;\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 25.92px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 36.8064px;\\n  }\\n}\\n\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 16px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 25.92px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #b4b4b4;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: #6c6c6c;\\n}\\n\\nnav {\\n  padding-top: 1.618rem;\\n}\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: #6c6c6c;\\n  border: 1px solid #6c6c6c;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\n/* Style the tab buttons */\\n.tablink {\\n  background-color: #b4b4b4;\\n  float: left;\\n  border: none;\\n  outline: none;\\n  cursor: pointer;\\n  padding: 1rem 0.618rem;\\n  width: 20%;\\n}\\n\\n/* Change background color of buttons on hover */\\n.tablink:hover {\\n  background-color: #6c6c6c;\\n}\\n\\n/* Set default styles for tab content */\\n.tabcontent {\\n  color: inherit;\\n  padding: 2.618rem;\\n  text-align: center;\\n}\\n\\n.tabcontent.active {\\n  display: block;\\n  background-color: red;\\n}</style>"],"names":[],"mappings":"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"}'
};
const TabHeaders = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const tabLinks = [
    {
      title: "0",
      content: "lorem ipsum orhjf eirjesr."
    },
    {
      title: "1",
      content: "awefawef ewa fwesr."
    },
    {
      title: "2",
      content: "awfe awef awrg er jhtsrdf eirjesr."
    },
    {
      title: "3",
      content: "l6he65 56hy rbt sfdcv rer rjesr."
    },
    {
      title: "4",
      content: "Laod kaoigj aoiusdhgesr."
    }
  ];
  $$result.css.add(css$2);
  return `${each(tabLinks, (tab) => `<div class="${"tabcontent svelte-eg6h1a"}"><h1 class="${"svelte-eg6h1a"}">${escape(tab.title)}</h1>
    <p class="${"svelte-eg6h1a"}">${escape(tab.content)}</p>
</div>`)}
<button class="${"tablink svelte-eg6h1a"}">boton
</button>`;
});
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Section, "Section").$$render($$result, {id: "tabheaders", variante: 1}, {}, {
    default: () => `${validate_component(TabHeaders, "TabHeaders").$$render($$result, {}, {}, {})}`
  })}

${validate_component(Section, "Section").$$render($$result, {id: "aboutmetxt", variante: 1}, {}, {
    default: () => `${validate_component(AboutMeTxt, "AboutMeTxt").$$render($$result, {}, {}, {})}`
  })}`;
});
var index = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: About
});
var app = '\n@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,400;0,700;1,400&display=swap");\n@charset "UTF-8";\n/* Uso:\n@include media( s + scaling factor ) {\n  property: value;\n}\n*/\n/* GRADIENT LISTS\n============================================= */\n*, *:before, *:after {\n  box-sizing: border-box;\n}\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  text-size-adjust: none;\n}\nfooter, header, nav, section, main {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after, q:before, q:after {\n  content: "";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ninput {\n  -webkit-appearance: none;\n  border-radius: 0;\n}\nmain,\nheader,\nsmall {\n  font-family: "Josefin Sans", sans-serif;\n  letter-spacing: 0;\n  font-weight: 500;\n  color: #b4b4b4;\n}\ni {\n  color: #2a2929;\n  font-style: italic;\n}\nem {\n  color: #6c6c6c;\n  font-weight: 500;\n}\nstrong {\n  font-weight: 600;\n}\nh1 {\n  font-size: 1.618rem;\n  line-height: 36.8064px;\n  font-weight: bold;\n}\n@media (min-width: 769px) {\n  h1 {\n    font-size: 4.236rem;\n    line-height: 77.76px;\n  }\n}\n@media (min-width: 1023px) {\n  h1 {\n    font-size: 6.854rem;\n    line-height: 129.6px;\n  }\n}\n@media (min-width: 2140px) {\n  h1 {\n    font-size: 11.089rem;\n    line-height: 129.6px;\n  }\n}\nh2 {\n  font-weight: 500;\n  font-size: 1rem;\n  line-height: 25.92px;\n}\n@media (min-width: 374px) {\n  h2 {\n    font-size: 1.618rem;\n    line-height: 36.8064px;\n  }\n}\n@media (min-width: 2140px) {\n  h2 {\n    font-size: 2.618rem;\n    line-height: 51.84px;\n    margin-left: 6.854rem;\n    margin-right: 6.854rem;\n  }\n}\nh3,\nh4 {\n  font-size: 0.618rem;\n  line-height: 16px;\n}\n@media (min-width: 374px) {\n  h3,\nh4 {\n    font-size: 1rem;\n    line-height: 25.92px;\n  }\n}\nsmall,\np,\ndl {\n  text-align: left;\n  font-size: 1rem;\n  line-height: 25.92px;\n}\np {\n  margin-bottom: 0.618rem;\n}\n@media (min-width: 374px) {\n  p,\nh4,\ndl {\n    max-width: 769px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\ndt {\n  color: #414141;\n  margin-top: 1rem;\n}\ndd {\n  color: #6c6c6c;\n}\nblockquote {\n  font-size: 1rem;\n  line-height: 25.92px;\n}\n@media (min-width: 374px) {\n  blockquote {\n    font-size: 1.618rem;\n    line-height: 36.8064px;\n  }\n}\n@media (min-width: 374px) {\n  blockquote {\n    margin-left: 2.618rem;\n    margin-right: 2.618rem;\n  }\n}\n@media (min-width: 769px) {\n  blockquote {\n    max-width: 374px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\nsub {\n  color: #110e08;\n  font-weight: 500;\n  padding-left: 2px;\n  padding-top: 0px;\n  font-size: 0.618rem;\n  line-height: 16px;\n}\nfigcaption {\n  text-align: left;\n}\ninput {\n  border: none;\n  font-family: inherit;\n  font-size: 1rem;\n  line-height: 25.92px;\n  font-weight: inherit;\n  color: #414141;\n}\ninput[type=text] {\n  padding: 0.618rem;\n  background-color: #e5e5e5;\n}\ninput[type=number] {\n  color: #b4b4b4;\n  background-color: #110e08;\n  padding: 0.618rem;\n}\ninput[type=number]:focus {\n  outline: none;\n}\ninput[type=range] {\n  -webkit-appearance: none;\n  width: 100%;\n}\ninput[type=range]:focus {\n  outline: none;\n}\ninput[type=range]::-webkit-slider-runnable-track {\n  width: 100%;\n  height: 1px;\n  cursor: pointer;\n  background: #b4b4b4;\n  border-radius: 0px;\n}\ninput[type=range]::-webkit-slider-thumb {\n  height: 30px;\n  width: 30px;\n  border-radius: 50px;\n  background: #b4b4b4;\n  cursor: grab;\n  -webkit-appearance: none;\n  margin-top: -14.5px;\n}\ninput[type=range]:focus::-webkit-slider-runnable-track {\n  background: #6c6c6c;\n}\nnav {\n  padding-top: 1.618rem;\n}\nnav a {\n  padding: 0.618rem;\n  text-decoration: none;\n  color: #6c6c6c;\n  border: 1px solid #6c6c6c;\n}\na[target=_blank]:after {\n  content: " \u2924";\n}\n@keyframes fade {\n  0% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes slide {\n  0% {\n    transform: translateY(-70px);\n    opacity: 0.5;\n  }\n  90% {\n    transform: translateY(5px);\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@keyframes loading {\n  50% {\n    transform: scale(1.2);\n    opacity: 0.7;\n  }\n}\na:hover {\n  animation-name: fade;\n  animation-duration: 0.3s;\n}\n:root {\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;\n}\n*:focus {\n  outline-color: #6c6c6c;\n  outline-style: dashed;\n  outline-width: 1px;\n  outline-style: dotted;\n}\n::selection {\n  color: black;\n  background-color: white;\n  text-shadow: none;\n}';
var Footer_svelte = "footer.svelte-1wa2g83{padding:20px;background-color:#f3f3f3}";
const css$1 = {
  code: "footer.svelte-1wa2g83{padding:20px;background-color:#f3f3f3}",
  map: '{"version":3,"file":"Footer.svelte","sources":["Footer.svelte"],"sourcesContent":["<footer>\\n    <p>This is the default site footer</p>\\n    <slot />\\n</footer>\\n\\n<style lang=\\"scss\\">footer {\\n  padding: 20px;\\n  background-color: #f3f3f3;\\n}</style>"],"names":[],"mappings":"AAKmB,MAAM,eAAC,CAAC,AACzB,OAAO,CAAE,IAAI,CACb,gBAAgB,CAAE,OAAO,AAC3B,CAAC"}'
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="${"svelte-1wa2g83"}"><p>This is the default site footer</p>
    ${slots.default ? slots.default({}) : ``}
</footer>`;
});
const pages = [
  {name: "home", url: "/"},
  {name: "artwork", url: "/artworks"},
  {name: "about", url: "/about"}
];
var $layout_svelte = '@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,400;0,700;1,400&display=swap");\n@charset "UTF-8";\n.svelte-w7x0aa.svelte-w7x0aa,.svelte-w7x0aa.svelte-w7x0aa:before,.svelte-w7x0aa.svelte-w7x0aa:after{box-sizing:border-box}\na.svelte-w7x0aa.svelte-w7x0aa,main.svelte-w7x0aa.svelte-w7x0aa,nav.svelte-w7x0aa.svelte-w7x0aa,section.svelte-w7x0aa.svelte-w7x0aa{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\nnav.svelte-w7x0aa.svelte-w7x0aa,section.svelte-w7x0aa.svelte-w7x0aa,main.svelte-w7x0aa.svelte-w7x0aa{display:block}\nmain.svelte-w7x0aa.svelte-w7x0aa{font-family:"Josefin Sans", sans-serif;letter-spacing:0;font-weight:500;color:#b4b4b4}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\nnav.svelte-w7x0aa.svelte-w7x0aa{padding-top:1.618rem}\nnav.svelte-w7x0aa a.svelte-w7x0aa{padding:0.618rem;text-decoration:none;color:#6c6c6c;border:1px solid #6c6c6c}\n@keyframes svelte-w7x0aa-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-w7x0aa-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-w7x0aa-loading{50%{transform:scale(1.2);opacity:0.7}}\na.svelte-w7x0aa.svelte-w7x0aa:hover{animation-name:svelte-w7x0aa-fade;animation-duration:0.3s}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-w7x0aa.svelte-w7x0aa:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-w7x0aa.svelte-w7x0aa::selection{color:black;background-color:white;text-shadow:none}\nnav.svelte-w7x0aa.svelte-w7x0aa{padding:2.618rem;text-align:center}\nnav.svelte-w7x0aa a.svelte-w7x0aa:hover{color:black}\n.active.svelte-w7x0aa.svelte-w7x0aa{background-color:#e5e5e5}';
const css = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,400;0,700;1,400&display=swap");.svelte-w7x0aa.svelte-w7x0aa,.svelte-w7x0aa.svelte-w7x0aa:before,.svelte-w7x0aa.svelte-w7x0aa:after{box-sizing:border-box}a.svelte-w7x0aa.svelte-w7x0aa,main.svelte-w7x0aa.svelte-w7x0aa,nav.svelte-w7x0aa.svelte-w7x0aa,section.svelte-w7x0aa.svelte-w7x0aa{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}nav.svelte-w7x0aa.svelte-w7x0aa,section.svelte-w7x0aa.svelte-w7x0aa,main.svelte-w7x0aa.svelte-w7x0aa{display:block}main.svelte-w7x0aa.svelte-w7x0aa{font-family:"Josefin Sans", sans-serif;letter-spacing:0;font-weight:500;color:#b4b4b4}@media(min-width: 769px){}@media(min-width: 1023px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}nav.svelte-w7x0aa.svelte-w7x0aa{padding-top:1.618rem}nav.svelte-w7x0aa a.svelte-w7x0aa{padding:0.618rem;text-decoration:none;color:#6c6c6c;border:1px solid #6c6c6c}@keyframes svelte-w7x0aa-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-w7x0aa-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-w7x0aa-loading{50%{transform:scale(1.2);opacity:0.7}}a.svelte-w7x0aa.svelte-w7x0aa:hover{animation-name:svelte-w7x0aa-fade;animation-duration:0.3s}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-w7x0aa.svelte-w7x0aa:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-w7x0aa.svelte-w7x0aa::selection{color:black;background-color:white;text-shadow:none}nav.svelte-w7x0aa.svelte-w7x0aa{padding:2.618rem;text-align:center}nav.svelte-w7x0aa a.svelte-w7x0aa:hover{color:black}.active.svelte-w7x0aa.svelte-w7x0aa{background-color:#e5e5e5}',
  map: `{"version":3,"file":"$layout.svelte","sources":["$layout.svelte"],"sourcesContent":["<script>\\n\\timport '../app.scss';\\n\\t// import Nav from '$lib/Nav.svelte';\\n\\timport Footer from '$lib/Footer.svelte';\\n\\timport { pages } from \\"$lib/data/pages.js\\";\\n\\t\\n\\tlet current_page = \\"\\";\\n\\tconst setCurrentPage = (e) => {\\n        current_page = e.srcElement.firstChild.data\\n    }\\n\\n</script>\\n\\n<svelte:head>\\n\\t<title>SvelteKit UI - {current_page}</title>\\n</svelte:head>\\n\\n<main>\\n\\t<nav>\\n\\t\\t{#each pages as page}\\n\\t\\t\\t<a href=\\"{page.url}\\"\\n\\t\\t\\tclass:active={current_page === page.name}\\n\\t\\t\\ton:click={setCurrentPage}\\n\\t\\t\\t>{page.name}</a>\\n\\t\\t{/each}\\n\\t</nav>\\n\\t\\n\\t<section>\\n\\t\\t<slot />\\n\\t</section>\\n\\n\\t<Footer />\\n</main>\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,400;0,700;1,400&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Josefin Sans\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  color: #2a2929;\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 36.8064px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 77.76px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 129.6px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 129.6px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 25.92px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 36.8064px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 51.84px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 16px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 25.92px;\\n  }\\n}\\n\\nsmall,\\np,\\ndl {\\n  text-align: left;\\n  font-size: 1rem;\\n  line-height: 25.92px;\\n}\\n\\np {\\n  margin-bottom: 0.618rem;\\n}\\n\\n@media (min-width: 374px) {\\n  p,\\nh4,\\ndl {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\ndt {\\n  color: #414141;\\n  margin-top: 1rem;\\n}\\n\\ndd {\\n  color: #6c6c6c;\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 25.92px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 36.8064px;\\n  }\\n}\\n\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 16px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 25.92px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #b4b4b4;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: #6c6c6c;\\n}\\n\\nnav {\\n  padding-top: 1.618rem;\\n}\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: #6c6c6c;\\n  border: 1px solid #6c6c6c;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\nnav {\\n  padding: 2.618rem;\\n  text-align: center;\\n}\\nnav a:hover {\\n  color: black;\\n}\\n\\n.active {\\n  background-color: #e5e5e5;\\n}</style>"],"names":[],"mappings":"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"}`
};
const $layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let current_page = "";
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>SvelteKit UI - ${escape(current_page)}</title>`, ""}`, ""}

<main class="${"svelte-w7x0aa"}"><nav class="${"svelte-w7x0aa"}">${each(pages, (page) => `<a${add_attribute("href", page.url, 0)} class="${["svelte-w7x0aa", current_page === page.name ? "active" : ""].join(" ").trim()}">${escape(page.name)}</a>`)}</nav>
	
	<section class="${"svelte-w7x0aa"}">${slots.default ? slots.default({}) : ``}</section>

	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
</main>`;
});
var $layout$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: $layout
});
export {init, render};
