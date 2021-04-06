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
async function respond({request, options, $session, route, status = 200, error: error2}) {
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
        const headers2 = {...opts.headers};
        if (opts.credentials !== "omit") {
          uses_credentials = true;
          headers2.cookie = request.headers.cookie;
          if (!headers2.authorization) {
            headers2.authorization = request.headers.authorization;
          }
        }
        const rendered2 = await ssr({
          host: request.host,
          method: opts.method || "GET",
          headers: headers2,
          path: resolved,
          body: opts.body,
          query: new URLSearchParams$1(parsed.query || "")
        }, {
          ...options,
          fetched: url,
          initiator: route
        });
        if (rendered2) {
          if (options.dependencies) {
            options.dependencies.set(resolved, rendered2);
          }
          response = new Response(rendered2.body, {
            status: rendered2.status,
            headers: rendered2.headers
          });
        }
      }
    }
    if (response && page_config.hydrate) {
      const proxy = new Proxy(response, {
        get(response2, key, receiver) {
          async function text() {
            const body2 = await response2.text();
            const headers2 = {};
            response2.headers.forEach((value, key2) => {
              if (key2 !== "etag" && key2 !== "set-cookie")
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
    return response || new Response("Not found", {
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
    return await respond({
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
    if (error2) {
      return {
        status,
        headers: {},
        body: error2.message
      };
    }
    if (!page_component.prerender) {
      return {
        status: 204,
        headers: {},
        body: null
      };
    }
  }
  let rendered;
  if (page_config.ssr) {
    for (let i = 0; i < component_promises.length; i += 1) {
      let loaded;
      try {
        const mod = await component_promises[i];
        components2[i] = mod.default;
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
          return await respond({
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
      return await respond({
        request,
        options,
        $session,
        route: null,
        status: 500,
        error: e instanceof Error ? e : {name: "Error", message: e.toString()}
      });
    } finally {
      unsubscribe();
    }
  } else {
    rendered = {
      head: "",
      html: "",
      css: ""
    };
  }
  const js_deps = route && page_config.ssr ? route.js : [];
  const css_deps = route && page_config.ssr ? route.css : [];
  const style = route && page_config.ssr ? route.style : "";
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
    body: options.template({head, body})
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
  const response = await respond({
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
const identity = (x2) => x2;
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
function set_store_value(store, ret, value = ret) {
  store.set(value);
  return ret;
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
const css$p = {
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
  $$result.css.add(css$p);
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
function init({paths, prerendering}) {
}
const empty = () => ({});
const components = [
  () => Promise.resolve().then(function() {
    return index$4;
  }),
  () => Promise.resolve().then(function() {
    return index$3;
  }),
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
const client_component_lookup = {".svelte/build/runtime/internal/start.js": "start-f697c008.js", "src/routes/index.svelte": "pages/index.svelte-69354a59.js", "src/routes/philosophy/index.svelte": "pages/philosophy/index.svelte-d84d57e3.js", "src/routes/artworks/index.svelte": "pages/artworks/index.svelte-9c1486fd.js", "src/routes/about/index.svelte": "pages/about/index.svelte-8d99e90f.js", "src/routes/lab/index.svelte": "pages/lab/index.svelte-044e0f3f.js"};
const manifest = {
  assets: [{file: "favicon.ico", size: 1150, type: "image/vnd.microsoft.icon"}, {file: "img/01234-6.png", size: 2115211, type: "image/png"}, {file: "img/01234-7.jpg", size: 137827, type: "image/jpeg"}, {file: "img/01234-7.png", size: 2332050, type: "image/png"}, {file: "img/01234.svg", size: 3134, type: "image/svg+xml"}, {file: "img/01234_bn.svg", size: 2729, type: "image/svg+xml"}, {file: "img/02234-14.jpg", size: 124337, type: "image/jpeg"}, {file: "img/0810.jpg", size: 4532546, type: "image/jpeg"}, {file: "img/0877.jpg", size: 4811645, type: "image/jpeg"}, {file: "img/130321.jpg", size: 151318, type: "image/jpeg"}, {file: "img/avatar.jpg", size: 27797, type: "image/jpeg"}, {file: "img/bg1.jpg", size: 181644, type: "image/jpeg"}, {file: "img/bg2.jpg", size: 172530, type: "image/jpeg"}, {file: "img/bg3.jpg", size: 123076, type: "image/jpeg"}, {file: "img/bg4.jpg", size: 130446, type: "image/jpeg"}, {file: "img/ceroo.svg", size: 714, type: "image/svg+xml"}, {file: "img/circle.svg", size: 175, type: "image/svg+xml"}, {file: "img/cover1.jpg", size: 106747, type: "image/jpeg"}, {file: "img/cover1.png", size: 359650, type: "image/png"}, {file: "img/cover2.jpg", size: 387156, type: "image/jpeg"}, {file: "img/cover3.jpg", size: 101288, type: "image/jpeg"}, {file: "img/cover4.jpg", size: 96004, type: "image/jpeg"}, {file: "img/cuadro-anim.mp4", size: 1145856, type: "video/mp4"}, {file: "img/cuadro-anim.webm", size: 1159141, type: "video/webm"}, {file: "img/cuatro.svg", size: 1366, type: "image/svg+xml"}, {file: "img/desdelapoesiadelamateria.mp4", size: 40247979, type: "video/mp4"}, {file: "img/desdelapoesiadelamateria.webm", size: 35627843, type: "video/webm"}, {file: "img/detalle4.jpg", size: 191494, type: "image/jpeg"}, {file: "img/dos.svg", size: 592, type: "image/svg+xml"}, {file: "img/espiral.svg", size: 9872, type: "image/svg+xml"}, {file: "img/esquema-sintesis2.svg", size: 9176, type: "image/svg+xml"}, {file: "img/esquema-sintesis3.svg", size: 12462, type: "image/svg+xml"}, {file: "img/frontend.jpg", size: 68411, type: "image/jpeg"}, {file: "img/gematria.gif", size: 15721, type: "image/gif"}, {file: "img/grafico-11.svg", size: 7871, type: "image/svg+xml"}, {file: "img/grafico-12.svg", size: 14005, type: "image/svg+xml"}, {file: "img/grafico-2.svg", size: 2193, type: "image/svg+xml"}, {file: "img/grafico-3.svg", size: 15046, type: "image/svg+xml"}, {file: "img/grafico-4.jpg", size: 23958, type: "image/jpeg"}, {file: "img/grafico-4.svg", size: 35927, type: "image/svg+xml"}, {file: "img/grafico-7.svg", size: 8829, type: "image/svg+xml"}, {file: "img/grafico-8.svg", size: 70498, type: "image/svg+xml"}, {file: "img/grafico-9.svg", size: 3532, type: "image/svg+xml"}, {file: "img/grafico-cuatro.svg", size: 1891, type: "image/svg+xml"}, {file: "img/grafico-diez.jpg", size: 74950, type: "image/jpeg"}, {file: "img/grafico-dos.svg", size: 1028, type: "image/svg+xml"}, {file: "img/grafico-nueve.jpg", size: 110655, type: "image/jpeg"}, {file: "img/grafico-ocho.jpg", size: 134701, type: "image/jpeg"}, {file: "img/grafico-once.jpg", size: 76392, type: "image/jpeg"}, {file: "img/grafico-siete.jpg", size: 102501, type: "image/jpeg"}, {file: "img/grafico-tres.svg", size: 2621, type: "image/svg+xml"}, {file: "img/img12.jpg", size: 190374, type: "image/jpeg"}, {file: "img/img3.jpg", size: 109151, type: "image/jpeg"}, {file: "img/libro.svg", size: 3213, type: "image/svg+xml"}, {file: "img/logo-footer.svg", size: 4e3, type: "image/svg+xml"}, {file: "img/logo.svg", size: 4253, type: "image/svg+xml"}, {file: "img/malla2.gif", size: 303615, type: "image/gif"}, {file: "img/obra/img0.jpg", size: 164255, type: "image/jpeg"}, {file: "img/obra/img1.jpg", size: 285134, type: "image/jpeg"}, {file: "img/obra/img2.jpg", size: 136439, type: "image/jpeg"}, {file: "img/obra/img3.jpg", size: 253870, type: "image/jpeg"}, {file: "img/obra/img4.jpg", size: 135601, type: "image/jpeg"}, {file: "img/obra/img5.jpg", size: 145776, type: "image/jpeg"}, {file: "img/obra/img6.jpg", size: 190092, type: "image/jpeg"}, {file: "img/obra/img7.jpg", size: 155194, type: "image/jpeg"}, {file: "img/raptordelta.jpeg", size: 103621, type: "image/jpeg"}, {file: "img/tetractys.svg", size: 1443, type: "image/svg+xml"}, {file: "img/tot-v6.png", size: 453687, type: "image/png"}, {file: "img/tres.svg", size: 925, type: "image/svg+xml"}, {file: "img/uno.svg", size: 852, type: "image/svg+xml"}, {file: "img/velociraptor.jpg", size: 51179, type: "image/jpeg"}, {file: "img/vibra.svg", size: 20544, type: "image/svg+xml"}, {file: "robots.txt", size: 67, type: "text/plain"}],
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
      css: ["assets/start-8943e299.css", "assets/pages/index.svelte-94e99b92.css", "assets/Cover-d462abf9.css", "assets/Section-1bdffab9.css"],
      js: ["start-f697c008.js", "chunks/index-d91e1ed8.js", "chunks/index-cc16b092.js", "chunks/pages-26a130a6.js", "pages/index.svelte-69354a59.js", "chunks/Cover-f3b4dc33.js", "chunks/Section-2261cd02.js", "chunks/index-65311448.js", "chunks/index-78b22dae.js"]
    },
    {
      type: "page",
      pattern: /^\/philosophy\/?$/,
      params: empty,
      parts: [{id: "src/routes/philosophy/index.svelte", load: components[1]}],
      css: ["assets/start-8943e299.css", "assets/pages/philosophy/index.svelte-7ed7ae0d.css", "assets/Cover-d462abf9.css", "assets/Section-1bdffab9.css"],
      js: ["start-f697c008.js", "chunks/index-d91e1ed8.js", "chunks/index-cc16b092.js", "chunks/pages-26a130a6.js", "pages/philosophy/index.svelte-d84d57e3.js", "chunks/Cover-f3b4dc33.js", "chunks/Section-2261cd02.js"]
    },
    {
      type: "page",
      pattern: /^\/artworks\/?$/,
      params: empty,
      parts: [{id: "src/routes/artworks/index.svelte", load: components[2]}],
      css: ["assets/start-8943e299.css", "assets/pages/artworks/index.svelte-ff316d65.css", "assets/Cover-d462abf9.css", "assets/Section-1bdffab9.css"],
      js: ["start-f697c008.js", "chunks/index-d91e1ed8.js", "chunks/index-cc16b092.js", "chunks/pages-26a130a6.js", "pages/artworks/index.svelte-9c1486fd.js", "chunks/Cover-f3b4dc33.js", "chunks/index-65311448.js", "chunks/index-78b22dae.js", "chunks/Section-2261cd02.js"]
    },
    {
      type: "page",
      pattern: /^\/about\/?$/,
      params: empty,
      parts: [{id: "src/routes/about/index.svelte", load: components[3]}],
      css: ["assets/start-8943e299.css", "assets/pages/about/index.svelte-379cd0f0.css", "assets/Section-1bdffab9.css"],
      js: ["start-f697c008.js", "chunks/index-d91e1ed8.js", "chunks/index-cc16b092.js", "chunks/pages-26a130a6.js", "pages/about/index.svelte-8d99e90f.js", "chunks/Section-2261cd02.js", "chunks/index-c4bdeab8.js", "chunks/index-78b22dae.js"]
    },
    {
      type: "page",
      pattern: /^\/lab\/?$/,
      params: empty,
      parts: [{id: "src/routes/lab/index.svelte", load: components[4]}],
      css: ["assets/start-8943e299.css", "assets/pages/lab/index.svelte-2face26d.css", "assets/Cover-d462abf9.css", "assets/Section-1bdffab9.css"],
      js: ["start-f697c008.js", "chunks/index-d91e1ed8.js", "chunks/index-cc16b092.js", "chunks/pages-26a130a6.js", "pages/lab/index.svelte-044e0f3f.js", "chunks/Cover-f3b4dc33.js", "chunks/Section-2261cd02.js", "chunks/index-c4bdeab8.js", "chunks/index-65311448.js", "chunks/index-78b22dae.js"]
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
  dependencies,
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
    entry: "/./_app/start-f697c008.js",
    root: Root,
    hooks,
    dev: false,
    amp: false,
    dependencies,
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
const coverData = [
  {
    title: "+0+1234",
    subtitle: "Hermen\xE9utica Hol\xEDstica",
    text: "Descifrando la Creaci\xF3n, en la intersecci\xF3n del arte, la tecnolog\xEDa y los saberes tradicionales. Un cierto tipo de orden que conforma un cierto tipo de conexi\xF3n.",
    img: "./img/cover3.jpg"
  },
  {
    title: "Artwork",
    subtitle: "3D printed art",
    text: "Obra pl\xE1stica",
    img: "./img/bg2.jpg"
  },
  {
    title: "Lab",
    subtitle: "Frontend design laboratory",
    text: "Peque\xF1os ejercicios de programaci\xF3n en los que pongo en pr\xE1ctica ideas",
    img: "./img/bg1.jpg"
  },
  {
    title: "+0+1234",
    subtitle: "<span class='tachado'>My</span> A Holistic Philosophy",
    text: "Sentir Orden Forma Conexi\xF3n",
    img: "./img/circle.svg"
  }
];
var Section_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-qyc0uf,.svelte-qyc0uf:before,.svelte-qyc0uf:after{box-sizing:border-box}\nsection.svelte-qyc0uf{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\nsection.svelte-qyc0uf{display:block}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@keyframes svelte-qyc0uf-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-qyc0uf-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-qyc0uf-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-qyc0uf:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-qyc0uf::selection{color:black;background-color:white;text-shadow:none}\n.tachado.svelte-qyc0uf{text-decoration:line-through}\n.not-clickable.svelte-qyc0uf{pointer-events:none}\n.Section_0.svelte-qyc0uf{padding:2.618rem;min-height:50vh;color:#110e08;background-color:#e5e5e5}\n.Section_1.svelte-qyc0uf{padding:2.618rem;min-height:50vh;color:white;background-color:#414141}\n.Section_2.svelte-qyc0uf{display:grid;place-content:center;color:#e5e5e5;background-color:#2a2929}\n.Section_3.svelte-qyc0uf{color:black;background-color:#b4b4b4;padding:0}\n.Section_4.svelte-qyc0uf{color:#110e08;background-color:#b4b4b4;padding:2.618rem}\n.Section_5.svelte-qyc0uf{min-height:50vh;color:#110e08;background-color:white}';
const css$o = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");.svelte-qyc0uf,.svelte-qyc0uf:before,.svelte-qyc0uf:after{box-sizing:border-box}section.svelte-qyc0uf{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}section.svelte-qyc0uf{display:block}@media(min-width: 769px){}@media(min-width: 1023px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 769px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}@keyframes svelte-qyc0uf-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-qyc0uf-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-qyc0uf-loading{50%{transform:scale(1.2);opacity:0.7}}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-qyc0uf:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-qyc0uf::selection{color:black;background-color:white;text-shadow:none}.tachado.svelte-qyc0uf{text-decoration:line-through}.not-clickable.svelte-qyc0uf{pointer-events:none}.Section_0.svelte-qyc0uf{padding:2.618rem;min-height:50vh;color:#110e08;background-color:#e5e5e5}.Section_1.svelte-qyc0uf{padding:2.618rem;min-height:50vh;color:white;background-color:#414141}.Section_2.svelte-qyc0uf{display:grid;place-content:center;color:#e5e5e5;background-color:#2a2929}.Section_3.svelte-qyc0uf{color:black;background-color:#b4b4b4;padding:0}.Section_4.svelte-qyc0uf{color:#110e08;background-color:#b4b4b4;padding:2.618rem}.Section_5.svelte-qyc0uf{min-height:50vh;color:#110e08;background-color:white}',
  map: '{"version":3,"file":"Section.svelte","sources":["Section.svelte"],"sourcesContent":["<script>\\n    export let variante = 0;\\n    export let id = \\"\\";\\n    let modificador = [\\n        \\"Section_0\\",\\n        \\"Section_1\\",\\n        \\"Section_2\\",\\n        \\"Section_3\\",\\n        \\"Section_4\\",\\n        \\"Section_5\\"\\n    ];\\n</script>\\n\\n<section    {id}\\n            class={modificador[variante]}\\n>\\n    <slot />\\n</section>\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nsvg {\\n  max-height: 90vh;\\n}\\n\\nbody,\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Montserrat\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 40.896px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 86.4px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 144px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 144px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 57.6px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 28.8px;\\n  }\\n}\\n\\nsmall,\\np,\\ndl {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n\\nhgroup {\\n  margin-bottom: 1.618rem;\\n}\\n\\n@media (min-width: 769px) {\\n  p,\\nh4,\\ndl {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\ndt {\\n  color: #414141;\\n  margin-top: 1rem;\\n}\\n\\ndd {\\n  color: #6c6c6c;\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #b4b4b4;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: #6c6c6c;\\n}\\n\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: #6c6c6c;\\n  border: 1px solid #6c6c6c;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\nimg {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.tachado {\\n  text-decoration: line-through;\\n}\\n\\n.not-clickable {\\n  pointer-events: none;\\n}\\n\\nvideo {\\n  width: 100%;\\n  object-fit: cover;\\n  /* mix-blend-mode: luminosity; */\\n  /* border-radius: $h2; */\\n}\\n\\n.Section_0 {\\n  padding: 2.618rem;\\n  min-height: 50vh;\\n  color: #110e08;\\n  background-color: #e5e5e5;\\n}\\n\\n.Section_1 {\\n  padding: 2.618rem;\\n  min-height: 50vh;\\n  color: white;\\n  background-color: #414141;\\n}\\n\\n.Section_2 {\\n  display: grid;\\n  place-content: center;\\n  color: #e5e5e5;\\n  background-color: #2a2929;\\n}\\n\\n.Section_3 {\\n  color: black;\\n  background-color: #b4b4b4;\\n  padding: 0;\\n}\\n\\n.Section_4 {\\n  color: #110e08;\\n  background-color: #b4b4b4;\\n  padding: 2.618rem;\\n}\\n\\n.Section_5 {\\n  min-height: 50vh;\\n  color: #110e08;\\n  background-color: white;\\n}</style>"],"names":[],"mappings":"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"}'
};
const Section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {variante = 0} = $$props;
  let {id = ""} = $$props;
  let modificador = ["Section_0", "Section_1", "Section_2", "Section_3", "Section_4", "Section_5"];
  if ($$props.variante === void 0 && $$bindings.variante && variante !== void 0)
    $$bindings.variante(variante);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  $$result.css.add(css$o);
  return `<section${add_attribute("id", id, 0)} class="${escape(null_to_empty(modificador[variante])) + " svelte-qyc0uf"}">${slots.default ? slots.default({}) : ``}
</section>`;
});
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
var Quote_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-af3sga,.svelte-af3sga:before,.svelte-af3sga:after{box-sizing:border-box}\ndiv.svelte-af3sga,p.svelte-af3sga{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\nq.svelte-af3sga{quotes:none}\nq.svelte-af3sga:before,q.svelte-af3sga:after{content:"";content:none}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\np.svelte-af3sga{font-size:1rem;line-height:28.8px}\n@media(min-width: 769px){p.svelte-af3sga{max-width:769px;margin-left:auto;margin-right:auto}}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@keyframes svelte-af3sga-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-af3sga-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-af3sga-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-af3sga:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-af3sga::selection{color:black;background-color:white;text-shadow:none}\n.mySlides.svelte-af3sga{background-size:cover;display:grid;place-items:center;width:100%;height:inherit;text-align:justify;position:absolute}\nq.svelte-af3sga{color:white;align-self:end}\nq.svelte-af3sga,p.svelte-af3sga{max-width:75%;font-size:1.618rem;line-height:40.896px}\n.author.svelte-af3sga{text-align:right;margin:7px 0;color:#b4b4b4}';
const css$n = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");.svelte-af3sga,.svelte-af3sga:before,.svelte-af3sga:after{box-sizing:border-box}div.svelte-af3sga,p.svelte-af3sga{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}q.svelte-af3sga{quotes:none}q.svelte-af3sga:before,q.svelte-af3sga:after{content:"";content:none}@media(min-width: 769px){}@media(min-width: 1023px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 2140px){}@media(min-width: 374px){}p.svelte-af3sga{font-size:1rem;line-height:28.8px}@media(min-width: 769px){p.svelte-af3sga{max-width:769px;margin-left:auto;margin-right:auto}}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}@keyframes svelte-af3sga-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-af3sga-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-af3sga-loading{50%{transform:scale(1.2);opacity:0.7}}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-af3sga:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-af3sga::selection{color:black;background-color:white;text-shadow:none}.mySlides.svelte-af3sga{background-size:cover;display:grid;place-items:center;width:100%;height:inherit;text-align:justify;position:absolute}q.svelte-af3sga{color:white;align-self:end}q.svelte-af3sga,p.svelte-af3sga{max-width:75%;font-size:1.618rem;line-height:40.896px}.author.svelte-af3sga{text-align:right;margin:7px 0;color:#b4b4b4}',
  map: `{"version":3,"file":"Quote.svelte","sources":["Quote.svelte"],"sourcesContent":["<script>\\n\\timport {\\n\\t\\tfade\\n\\t} from 'svelte/transition';\\n\\t//   export let selectedQuote;\\n\\t// \\texport let qIndex\\n\\texport let quote;\\n\\texport let author;\\n\\texport let image;\\n</script>\\n\\n<!-- Quote template -->\\n<div class=\\"mySlides\\" transition:fade\\nstyle=\\"background-image: url({image});\\">\\n\\t<q>{quote}</q>\\n\\t<p class=\\"author\\">&mdash;{author}</p>\\n</div>\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nsvg {\\n  max-height: 90vh;\\n}\\n\\nbody,\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Montserrat\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 40.896px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 86.4px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 144px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 144px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 57.6px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 28.8px;\\n  }\\n}\\n\\nsmall,\\np,\\ndl {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n\\nhgroup {\\n  margin-bottom: 1.618rem;\\n}\\n\\n@media (min-width: 769px) {\\n  p,\\nh4,\\ndl {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\ndt {\\n  color: #414141;\\n  margin-top: 1rem;\\n}\\n\\ndd {\\n  color: #6c6c6c;\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #b4b4b4;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: #6c6c6c;\\n}\\n\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: #6c6c6c;\\n  border: 1px solid #6c6c6c;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\nimg {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.tachado {\\n  text-decoration: line-through;\\n}\\n\\n.not-clickable {\\n  pointer-events: none;\\n}\\n\\nvideo {\\n  width: 100%;\\n  object-fit: cover;\\n  /* mix-blend-mode: luminosity; */\\n  /* border-radius: $h2; */\\n}\\n\\n.mySlides {\\n  background-size: cover;\\n  display: grid;\\n  place-items: center;\\n  width: 100%;\\n  height: inherit;\\n  text-align: justify;\\n  position: absolute;\\n  /*\\tNOTE: Use with #key -- You just need the direct children position to always be in the same place (i.e. fixed), regardless of their position in DOM (well, for this transition at least) */\\n}\\n\\nq {\\n  color: white;\\n  align-self: end;\\n}\\n\\nq,\\np {\\n  max-width: 75%;\\n  font-size: 1.618rem;\\n  line-height: 40.896px;\\n}\\n\\n.author {\\n  text-align: right;\\n  margin: 7px 0;\\n  color: #b4b4b4;\\n}</style>"],"names":[],"mappings":"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"}`
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
  $$result.css.add(css$n);
  return `
<div class="${"mySlides svelte-af3sga"}" style="${"background-image: url(" + escape(image) + ");"}"><q class="${"svelte-af3sga"}">${escape(quote)}</q>
	<p class="${"author svelte-af3sga"}">\u2014${escape(author)}</p>
</div>`;
});
var Dot_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-1p4qrk9,.svelte-1p4qrk9:before,.svelte-1p4qrk9:after{box-sizing:border-box}\nspan.svelte-1p4qrk9{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@keyframes svelte-1p4qrk9-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-1p4qrk9-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-1p4qrk9-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-1p4qrk9:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-1p4qrk9::selection{color:black;background-color:white;text-shadow:none}\n.not-clickable.svelte-1p4qrk9{pointer-events:none}\n.dot.svelte-1p4qrk9{cursor:pointer;height:15px;width:15px;margin:0 5px;background-color:#414141;border-radius:50%;display:inline-block;transition:background-color 0.3s ease}\n.active.svelte-1p4qrk9,.dot.svelte-1p4qrk9:hover{background-color:black}\n.not-clickable.svelte-1p4qrk9{pointer-events:none}';
const css$m = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");.svelte-1p4qrk9,.svelte-1p4qrk9:before,.svelte-1p4qrk9:after{box-sizing:border-box}span.svelte-1p4qrk9{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}@media(min-width: 769px){}@media(min-width: 1023px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 769px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}@keyframes svelte-1p4qrk9-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-1p4qrk9-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-1p4qrk9-loading{50%{transform:scale(1.2);opacity:0.7}}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-1p4qrk9:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-1p4qrk9::selection{color:black;background-color:white;text-shadow:none}.not-clickable.svelte-1p4qrk9{pointer-events:none}.dot.svelte-1p4qrk9{cursor:pointer;height:15px;width:15px;margin:0 5px;background-color:#414141;border-radius:50%;display:inline-block;transition:background-color 0.3s ease}.active.svelte-1p4qrk9,.dot.svelte-1p4qrk9:hover{background-color:black}.not-clickable.svelte-1p4qrk9{pointer-events:none}',
  map: '{"version":3,"file":"Dot.svelte","sources":["Dot.svelte"],"sourcesContent":["<script>\\n    export let quoteIndex;\\n    export let counter\\n    export let attribution;\\n    export let autoPlaying;\\n</script>\\n\\n<span class=\\"dot\\" class:active={quoteIndex===counter} class:not-clickable={autoPlaying} title={`quote by ${attribution}`} on:click></span>\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nsvg {\\n  max-height: 90vh;\\n}\\n\\nbody,\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Montserrat\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 40.896px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 86.4px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 144px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 144px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 57.6px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 28.8px;\\n  }\\n}\\n\\nsmall,\\np,\\ndl {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n\\nhgroup {\\n  margin-bottom: 1.618rem;\\n}\\n\\n@media (min-width: 769px) {\\n  p,\\nh4,\\ndl {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\ndt {\\n  color: #414141;\\n  margin-top: 1rem;\\n}\\n\\ndd {\\n  color: #6c6c6c;\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #b4b4b4;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: #6c6c6c;\\n}\\n\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: #6c6c6c;\\n  border: 1px solid #6c6c6c;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\nimg {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.tachado {\\n  text-decoration: line-through;\\n}\\n\\n.not-clickable {\\n  pointer-events: none;\\n}\\n\\nvideo {\\n  width: 100%;\\n  object-fit: cover;\\n  /* mix-blend-mode: luminosity; */\\n  /* border-radius: $h2; */\\n}\\n\\n.dot {\\n  cursor: pointer;\\n  height: 15px;\\n  width: 15px;\\n  margin: 0 5px;\\n  background-color: #414141;\\n  border-radius: 50%;\\n  display: inline-block;\\n  transition: background-color 0.3s ease;\\n}\\n\\n/* Add a background color to the active dot/circle */\\n.active,\\n.dot:hover {\\n  background-color: black;\\n}\\n\\n.not-clickable {\\n  pointer-events: none;\\n}</style>"],"names":[],"mappings":"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"}'
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
  $$result.css.add(css$m);
  return `<span class="${[
    "dot svelte-1p4qrk9",
    (quoteIndex === counter ? "active" : "") + " " + (autoPlaying ? "not-clickable" : "")
  ].join(" ").trim()}"${add_attribute("title", `quote by ${attribution}`, 0)}></span>`;
});
var AutoPlayBtn_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-oaleaa.svelte-oaleaa,.svelte-oaleaa.svelte-oaleaa:before,.svelte-oaleaa.svelte-oaleaa:after{box-sizing:border-box}\nspan.svelte-oaleaa.svelte-oaleaa,label.svelte-oaleaa.svelte-oaleaa,section.svelte-oaleaa.svelte-oaleaa{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\nsection.svelte-oaleaa.svelte-oaleaa{display:block}\ninput.svelte-oaleaa.svelte-oaleaa{-webkit-appearance:none;border-radius:0}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\ninput.svelte-oaleaa.svelte-oaleaa{border:none;font-family:inherit;font-size:1rem;line-height:28.8px;font-weight:inherit;color:#414141}\n@keyframes svelte-oaleaa-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-oaleaa-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-oaleaa-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-oaleaa.svelte-oaleaa:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-oaleaa.svelte-oaleaa::selection{color:black;background-color:white;text-shadow:none}\nsection.svelte-oaleaa.svelte-oaleaa{position:absolute;right:10px;top:10px}\nsection.svelte-oaleaa.svelte-oaleaa:hover:after{content:"Auto-play";width:100px;position:absolute;left:0;bottom:-30px;background-color:white;box-shadow:0 0 3px black;padding:5px 0;border-radius:5px}\n.switch.svelte-oaleaa.svelte-oaleaa{position:relative;display:inline-block;width:60px;height:34px}\n.switch.svelte-oaleaa input.svelte-oaleaa{opacity:0;width:0;height:0}\n.slider.svelte-oaleaa.svelte-oaleaa{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#6c6c6c;-webkit-transition:0.4s;transition:0.4s}\n.slider.svelte-oaleaa.svelte-oaleaa:before{position:absolute;content:"";height:26px;width:26px;left:4px;bottom:4px;background-color:white;-webkit-transition:0.4s;transition:0.4s}\ninput.svelte-oaleaa:checked+.slider.svelte-oaleaa{background-color:#3f7bab}\ninput.svelte-oaleaa:focus+.slider.svelte-oaleaa{box-shadow:0 0 1px #2a2929}\ninput.svelte-oaleaa:checked+.slider.svelte-oaleaa:before{-webkit-transform:translateX(26px);-ms-transform:translateX(26px);transform:translateX(26px)}\n.slider.round.svelte-oaleaa.svelte-oaleaa{border-radius:34px}\n.slider.round.svelte-oaleaa.svelte-oaleaa:before{border-radius:50%}';
const css$l = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");.svelte-oaleaa.svelte-oaleaa,.svelte-oaleaa.svelte-oaleaa:before,.svelte-oaleaa.svelte-oaleaa:after{box-sizing:border-box}span.svelte-oaleaa.svelte-oaleaa,label.svelte-oaleaa.svelte-oaleaa,section.svelte-oaleaa.svelte-oaleaa{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}section.svelte-oaleaa.svelte-oaleaa{display:block}input.svelte-oaleaa.svelte-oaleaa{-webkit-appearance:none;border-radius:0}@media(min-width: 769px){}@media(min-width: 1023px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 769px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}input.svelte-oaleaa.svelte-oaleaa{border:none;font-family:inherit;font-size:1rem;line-height:28.8px;font-weight:inherit;color:#414141}@keyframes svelte-oaleaa-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-oaleaa-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-oaleaa-loading{50%{transform:scale(1.2);opacity:0.7}}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-oaleaa.svelte-oaleaa:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-oaleaa.svelte-oaleaa::selection{color:black;background-color:white;text-shadow:none}section.svelte-oaleaa.svelte-oaleaa{position:absolute;right:10px;top:10px}section.svelte-oaleaa.svelte-oaleaa:hover:after{content:"Auto-play";width:100px;position:absolute;left:0;bottom:-30px;background-color:white;box-shadow:0 0 3px black;padding:5px 0;border-radius:5px}.switch.svelte-oaleaa.svelte-oaleaa{position:relative;display:inline-block;width:60px;height:34px}.switch.svelte-oaleaa input.svelte-oaleaa{opacity:0;width:0;height:0}.slider.svelte-oaleaa.svelte-oaleaa{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#6c6c6c;-webkit-transition:0.4s;transition:0.4s}.slider.svelte-oaleaa.svelte-oaleaa:before{position:absolute;content:"";height:26px;width:26px;left:4px;bottom:4px;background-color:white;-webkit-transition:0.4s;transition:0.4s}input.svelte-oaleaa:checked+.slider.svelte-oaleaa{background-color:#3f7bab}input.svelte-oaleaa:focus+.slider.svelte-oaleaa{box-shadow:0 0 1px #2a2929}input.svelte-oaleaa:checked+.slider.svelte-oaleaa:before{-webkit-transform:translateX(26px);-ms-transform:translateX(26px);transform:translateX(26px)}.slider.round.svelte-oaleaa.svelte-oaleaa{border-radius:34px}.slider.round.svelte-oaleaa.svelte-oaleaa:before{border-radius:50%}',
  map: '{"version":3,"file":"AutoPlayBtn.svelte","sources":["AutoPlayBtn.svelte"],"sourcesContent":["<script>\\n    export let switchOn;\\n</script>\\n\\n<section id=\\"auto-play-cont\\">\\n    <!-- Rounded switch -->\\n    <label class=\\"switch\\">\\n        <input type=\\"checkbox\\" bind:checked={switchOn} on:change>\\n        <span class=\\"slider round\\"></span>\\n    </label>\\n</section>\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nsvg {\\n  max-height: 90vh;\\n}\\n\\nbody,\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Montserrat\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 40.896px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 86.4px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 144px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 144px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 57.6px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 28.8px;\\n  }\\n}\\n\\nsmall,\\np,\\ndl {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n\\nhgroup {\\n  margin-bottom: 1.618rem;\\n}\\n\\n@media (min-width: 769px) {\\n  p,\\nh4,\\ndl {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\ndt {\\n  color: #414141;\\n  margin-top: 1rem;\\n}\\n\\ndd {\\n  color: #6c6c6c;\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #b4b4b4;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: #6c6c6c;\\n}\\n\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: #6c6c6c;\\n  border: 1px solid #6c6c6c;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\nimg {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.tachado {\\n  text-decoration: line-through;\\n}\\n\\n.not-clickable {\\n  pointer-events: none;\\n}\\n\\nvideo {\\n  width: 100%;\\n  object-fit: cover;\\n  /* mix-blend-mode: luminosity; */\\n  /* border-radius: $h2; */\\n}\\n\\nsection {\\n  position: absolute;\\n  right: 10px;\\n  top: 10px;\\n}\\n\\nsection:hover:after {\\n  content: \\"Auto-play\\";\\n  width: 100px;\\n  position: absolute;\\n  left: 0;\\n  bottom: -30px;\\n  background-color: white;\\n  box-shadow: 0 0 3px black;\\n  padding: 5px 0;\\n  border-radius: 5px;\\n}\\n\\n/* The switch - the box around the slider */\\n.switch {\\n  position: relative;\\n  display: inline-block;\\n  width: 60px;\\n  height: 34px;\\n}\\n\\n/* Hide default HTML checkbox */\\n.switch input {\\n  opacity: 0;\\n  width: 0;\\n  height: 0;\\n}\\n\\n/* The slider */\\n.slider {\\n  position: absolute;\\n  cursor: pointer;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  bottom: 0;\\n  background-color: #6c6c6c;\\n  -webkit-transition: 0.4s;\\n  transition: 0.4s;\\n}\\n\\n.slider:before {\\n  position: absolute;\\n  content: \\"\\";\\n  height: 26px;\\n  width: 26px;\\n  left: 4px;\\n  bottom: 4px;\\n  background-color: white;\\n  -webkit-transition: 0.4s;\\n  transition: 0.4s;\\n}\\n\\ninput:checked + .slider {\\n  background-color: #3f7bab;\\n}\\n\\ninput:focus + .slider {\\n  box-shadow: 0 0 1px #2a2929;\\n}\\n\\ninput:checked + .slider:before {\\n  -webkit-transform: translateX(26px);\\n  -ms-transform: translateX(26px);\\n  transform: translateX(26px);\\n}\\n\\n/* Rounded sliders */\\n.slider.round {\\n  border-radius: 34px;\\n}\\n\\n.slider.round:before {\\n  border-radius: 50%;\\n}</style>"],"names":[],"mappings":"AAYmB,SAAS,OAAO,CAAC,AAQpC,QAAQ,IAAI,gHAAgH,CAAC,CAAC,AAC9H,4BAAC,CAAE,4BAAC,OAAO,CAAE,4BAAC,MAAM,AAAC,CAAC,AACpB,UAAU,CAAE,UAAU,AACxB,CAAC,AAEgB,gCAAI,CAAkK,iCAAK,CAA6F,OAAO,4BAAQ,CAAC,AACvS,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CAAC,CACT,SAAS,CAAE,IAAI,CACf,IAAI,CAAE,OAAO,CACb,cAAc,CAAE,QAAQ,CACxB,cAAc,CAAE,kBAAkB,CAClC,sBAAsB,CAAE,WAAW,CACnC,gBAAgB,CAAE,IAAI,AACxB,CAAC,AAEoB,OAAO,4BAAO,CAAC,AAClC,OAAO,CAAE,KAAK,AAChB,CAAC,AAwBD,KAAK,4BAAC,CAAC,AACL,kBAAkB,CAAE,IAAI,CACxB,aAAa,CAAE,CAAC,AAClB,CAAC,AAkCD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAK3B,CAAC,AACD,MAAM,AAAC,YAAY,MAAM,CAAC,AAAC,CAAC,AAK5B,CAAC,AACD,MAAM,AAAC,YAAY,MAAM,CAAC,AAAC,CAAC,AAK5B,CAAC,AAOD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAK3B,CAAC,AACD,MAAM,AAAC,YAAY,MAAM,CAAC,AAAC,CAAC,AAO5B,CAAC,AAOD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAM3B,CAAC,AAaD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAQ3B,CAAC,AAeD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAK3B,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAK3B,CAAC,AACD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAM3B,CAAC,AAeD,KAAK,4BAAC,CAAC,AACL,MAAM,CAAE,IAAI,CACZ,WAAW,CAAE,OAAO,CACpB,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,MAAM,CACnB,WAAW,CAAE,OAAO,CACpB,KAAK,CAAE,OAAO,AAChB,CAAC,AA0DD,WAAW,kBAAK,CAAC,AACf,EAAE,AAAC,CAAC,AACF,OAAO,CAAE,GAAG,AACd,CAAC,AACD,IAAI,AAAC,CAAC,AACJ,OAAO,CAAE,CAAC,AACZ,CAAC,AACH,CAAC,AACD,WAAW,mBAAM,CAAC,AAChB,EAAE,AAAC,CAAC,AACF,SAAS,CAAE,WAAW,KAAK,CAAC,CAC5B,OAAO,CAAE,GAAG,AACd,CAAC,AACD,GAAG,AAAC,CAAC,AACH,SAAS,CAAE,WAAW,GAAG,CAAC,CAC1B,OAAO,CAAE,CAAC,AACZ,CAAC,AACD,IAAI,AAAC,CAAC,AACJ,SAAS,CAAE,WAAW,CAAC,CAAC,CACxB,OAAO,CAAE,CAAC,AACZ,CAAC,AACH,CAAC,AACD,WAAW,qBAAQ,CAAC,AAClB,GAAG,AAAC,CAAC,AACH,SAAS,CAAE,MAAM,GAAG,CAAC,CACrB,OAAO,CAAE,GAAG,AACd,CAAC,AACH,CAAC,AAMD,KAAK,AAAC,CAAC,AACL,WAAW,CAAE,aAAa,CAAC,CAAC,kBAAkB,CAAC,CAAC,UAAU,CAAC,CAAC,MAAM,CAAC,CAAC,MAAM,CAAC,CAAC,MAAM,CAAC,CAAC,SAAS,CAAC,CAAC,WAAW,CAAC,CAAC,gBAAgB,CAAC,CAAC,UAAU,AAC1I,CAAC,AAED,4BAAC,MAAM,AAAC,CAAC,AACP,aAAa,CAAE,OAAO,CACtB,aAAa,CAAE,MAAM,CACrB,aAAa,CAAE,GAAG,CAClB,aAAa,CAAE,MAAM,AACvB,CAAC,4BAED,WAAW,AAAC,CAAC,AACX,KAAK,CAAE,KAAK,CACZ,gBAAgB,CAAE,KAAK,CACvB,WAAW,CAAE,IAAI,AACnB,CAAC,AAsBD,OAAO,4BAAC,CAAC,AACP,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAAI,CACX,GAAG,CAAE,IAAI,AACX,CAAC,AAED,mCAAO,MAAM,MAAM,AAAC,CAAC,AACnB,OAAO,CAAE,WAAW,CACpB,KAAK,CAAE,KAAK,CACZ,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,CAAC,CACP,MAAM,CAAE,KAAK,CACb,gBAAgB,CAAE,KAAK,CACvB,UAAU,CAAE,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,KAAK,CACzB,OAAO,CAAE,GAAG,CAAC,CAAC,CACd,aAAa,CAAE,GAAG,AACpB,CAAC,AAGD,OAAO,4BAAC,CAAC,AACP,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,YAAY,CACrB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,AACd,CAAC,AAGD,qBAAO,CAAC,KAAK,cAAC,CAAC,AACb,OAAO,CAAE,CAAC,CACV,KAAK,CAAE,CAAC,CACR,MAAM,CAAE,CAAC,AACX,CAAC,AAGD,OAAO,4BAAC,CAAC,AACP,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,OAAO,CACf,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,CAAC,CACR,MAAM,CAAE,CAAC,CACT,gBAAgB,CAAE,OAAO,CACzB,kBAAkB,CAAE,IAAI,CACxB,UAAU,CAAE,IAAI,AAClB,CAAC,AAED,mCAAO,OAAO,AAAC,CAAC,AACd,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,EAAE,CACX,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,IAAI,CAAE,GAAG,CACT,MAAM,CAAE,GAAG,CACX,gBAAgB,CAAE,KAAK,CACvB,kBAAkB,CAAE,IAAI,CACxB,UAAU,CAAE,IAAI,AAClB,CAAC,AAED,mBAAK,QAAQ,CAAG,OAAO,cAAC,CAAC,AACvB,gBAAgB,CAAE,OAAO,AAC3B,CAAC,AAED,mBAAK,MAAM,CAAG,OAAO,cAAC,CAAC,AACrB,UAAU,CAAE,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,OAAO,AAC7B,CAAC,AAED,mBAAK,QAAQ,CAAG,qBAAO,OAAO,AAAC,CAAC,AAC9B,iBAAiB,CAAE,WAAW,IAAI,CAAC,CACnC,aAAa,CAAE,WAAW,IAAI,CAAC,CAC/B,SAAS,CAAE,WAAW,IAAI,CAAC,AAC7B,CAAC,AAGD,OAAO,MAAM,4BAAC,CAAC,AACb,aAAa,CAAE,IAAI,AACrB,CAAC,AAED,OAAO,kCAAM,OAAO,AAAC,CAAC,AACpB,aAAa,CAAE,GAAG,AACpB,CAAC"}'
};
const AutoPlayBtn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {switchOn} = $$props;
  if ($$props.switchOn === void 0 && $$bindings.switchOn && switchOn !== void 0)
    $$bindings.switchOn(switchOn);
  $$result.css.add(css$l);
  return `<section id="${"auto-play-cont"}" class="${"svelte-oaleaa"}">
    <label class="${"switch svelte-oaleaa"}"><input type="${"checkbox"}" class="${"svelte-oaleaa"}"${add_attribute("checked", switchOn, 1)}>
        <span class="${"slider round svelte-oaleaa"}"></span></label>
</section>`;
});
var QuoteRotator_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-l7vht7,.svelte-l7vht7:before,.svelte-l7vht7:after{box-sizing:border-box}\ndiv.svelte-l7vht7,span.svelte-l7vht7{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@keyframes svelte-l7vht7-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-l7vht7-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-l7vht7-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-l7vht7:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-l7vht7::selection{color:black;background-color:white;text-shadow:none}\n.not-clickable.svelte-l7vht7{pointer-events:none}\n.slideshow-container.svelte-l7vht7{position:relative;background-color:#b4b4b4;display:flex;flex-direction:column;align-items:center;justify-content:center;height:50vh}\n@media(min-width: 1023px){.slideshow-container.svelte-l7vht7{height:100vh}}\n.dot-container.svelte-l7vht7{text-align:center;padding:1.618rem;position:relative;bottom:0}\n.prev.svelte-l7vht7,.next.svelte-l7vht7{cursor:pointer;position:absolute;top:50%;width:auto;margin-top:-1.618rem;padding:1.618rem;color:#e5e5e5;font-weight:bold;font-size:1.618rem;line-height:40.896px;border-radius:0 3px 3px 0;user-select:none}\n.prev.svelte-l7vht7{left:0}\n.next.svelte-l7vht7{position:absolute;right:0;border-radius:3px 0 0 3px}\n.prev.svelte-l7vht7:hover,.next.svelte-l7vht7:hover{background-color:rgba(0, 0, 0, 0.8);color:white;text-decoration:none}';
const css$k = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");.svelte-l7vht7,.svelte-l7vht7:before,.svelte-l7vht7:after{box-sizing:border-box}div.svelte-l7vht7,span.svelte-l7vht7{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}@media(min-width: 769px){}@media(min-width: 1023px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 769px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}@keyframes svelte-l7vht7-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-l7vht7-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-l7vht7-loading{50%{transform:scale(1.2);opacity:0.7}}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-l7vht7:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-l7vht7::selection{color:black;background-color:white;text-shadow:none}.not-clickable.svelte-l7vht7{pointer-events:none}.slideshow-container.svelte-l7vht7{position:relative;background-color:#b4b4b4;display:flex;flex-direction:column;align-items:center;justify-content:center;height:50vh}@media(min-width: 1023px){.slideshow-container.svelte-l7vht7{height:100vh}}.dot-container.svelte-l7vht7{text-align:center;padding:1.618rem;position:relative;bottom:0}.prev.svelte-l7vht7,.next.svelte-l7vht7{cursor:pointer;position:absolute;top:50%;width:auto;margin-top:-1.618rem;padding:1.618rem;color:#e5e5e5;font-weight:bold;font-size:1.618rem;line-height:40.896px;border-radius:0 3px 3px 0;user-select:none}.prev.svelte-l7vht7{left:0}.next.svelte-l7vht7{position:absolute;right:0;border-radius:3px 0 0 3px}.prev.svelte-l7vht7:hover,.next.svelte-l7vht7:hover{background-color:rgba(0, 0, 0, 0.8);color:white;text-decoration:none}',
  map: `{"version":3,"file":"QuoteRotator.svelte","sources":["QuoteRotator.svelte"],"sourcesContent":["<script>\\n\\timport {\\n\\t\\tquotes\\n\\t} from '$lib/data/quoteData.js';\\n\\timport Quote from './Quote.svelte';\\n\\timport Dot from './Dot.svelte';\\n\\timport AutoPlayBtn from './AutoPlayBtn.svelte';\\n\\n\\t/* ADVANCE QUOTE */\\n\\tlet quoteIndex = 0;\\n\\t$: console.log(quoteIndex)\\n\\t$: quote = quotes[quoteIndex].quote;\\n\\t$: author = quotes[quoteIndex].author;\\n\\t$: image = quotes[quoteIndex].image;\\n\\t$: console.log(quoteIndex)\\n\\n\\tconst nextQuote = () => {\\n\\t\\tif (quoteIndex === quotes.length - 1) {\\n\\t\\t\\tquoteIndex = 0;\\n\\t\\t} else {\\n\\t\\t\\tquoteIndex += 1;\\n\\t\\t}\\n\\t}\\n\\n\\tconst prevQuote = () => {\\n\\t\\tif (quoteIndex === 0) {\\n\\t\\t\\tquoteIndex = quotes.length - 1;\\n\\t\\t} else {\\n\\t\\t\\tquoteIndex -= 1;\\n\\t\\t}\\n\\t}\\n\\n\\t/* AUTO PLAY */\\n\\tlet switchOn = false;\\n\\t$: console.log(autoAdvance);\\n\\tlet autoAdvance;\\n\\tlet autoPlaying = false;\\n\\n\\tconst handleAutoAdv = () => {\\n\\t\\tif (switchOn) {\\n\\t\\t\\tautoAdvance = setInterval(nextQuote, 5000);\\n\\t\\t\\tautoPlaying = true;\\n\\t\\t} else {\\n\\t\\t\\tclearInterval(autoAdvance);\\n\\t\\t\\tautoPlaying = false;\\n\\t\\t}\\n\\t}\\n</script>\\n\\n<div class=\\"slideshow-container\\">\\n\\n\\t\\t<!-- THE QUOTE -->\\n\\t\\t{#key quote}\\n\\t\\t\\t<Quote {quote} {author} {image}/>\\n\\t\\t{/key}\\n\\t\\t\\n\\t\\t<!-- Next/prev buttons -->\\n\\t\\t<span href=\\"#prev\\" \\n\\t\\t\\t\\tclass=\\"prev\\" \\n\\t\\t\\t\\tclass:not-clickable={autoPlaying}\\n\\t\\t\\t\\ttitle=\\"previous quote\\" \\n\\t\\t\\t\\ton:click={prevQuote}>&#10094;</span>\\n\\t\\t\\n\\t\\t<span href=\\"#next\\" \\n\\t\\t\\t\\tclass=\\"next\\" \\n\\t\\t\\t\\tclass:not-clickable={autoPlaying}\\n\\t\\t\\t\\ttitle=\\"next quote\\" \\n\\t\\t\\t\\ton:click={nextQuote}>&#10095;</span>\\n\\t</div>\\n\\n\\t<!-- Dots/bullets/indicators -->\\n\\t<div class=\\"dot-container\\">\\n\\t\\t{#each quotes as quote, i}\\n\\t\\t\\t<Dot counter={i} \\n\\t\\t\\t\\t{quoteIndex}\\n\\t\\t\\t\\t{autoPlaying}\\n\\t\\t\\t\\tattribution={quote.author}\\n\\t\\t\\t\\ton:click={() => quoteIndex = i}/>\\n\\t\\t{/each}\\n\\t\\t\\n\\t\\t<AutoPlayBtn bind:switchOn on:change={handleAutoAdv} />\\n\\t</div>\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nsvg {\\n  max-height: 90vh;\\n}\\n\\nbody,\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Montserrat\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 40.896px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 86.4px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 144px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 144px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 57.6px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 28.8px;\\n  }\\n}\\n\\nsmall,\\np,\\ndl {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n\\nhgroup {\\n  margin-bottom: 1.618rem;\\n}\\n\\n@media (min-width: 769px) {\\n  p,\\nh4,\\ndl {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\ndt {\\n  color: #414141;\\n  margin-top: 1rem;\\n}\\n\\ndd {\\n  color: #6c6c6c;\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #b4b4b4;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: #6c6c6c;\\n}\\n\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: #6c6c6c;\\n  border: 1px solid #6c6c6c;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\nimg {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.tachado {\\n  text-decoration: line-through;\\n}\\n\\n.not-clickable {\\n  pointer-events: none;\\n}\\n\\nvideo {\\n  width: 100%;\\n  object-fit: cover;\\n  /* mix-blend-mode: luminosity; */\\n  /* border-radius: $h2; */\\n}\\n\\n/* Slideshow container */\\n.slideshow-container {\\n  position: relative;\\n  background-color: #b4b4b4;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  height: 50vh;\\n}\\n@media (min-width: 1023px) {\\n  .slideshow-container {\\n    height: 100vh;\\n  }\\n}\\n\\n/* The dot/bullet/indicator container */\\n.dot-container {\\n  text-align: center;\\n  padding: 1.618rem;\\n  position: relative;\\n  bottom: 0;\\n}\\n\\n/* Next & previous buttons */\\n.prev, .next {\\n  cursor: pointer;\\n  position: absolute;\\n  top: 50%;\\n  width: auto;\\n  margin-top: -1.618rem;\\n  padding: 1.618rem;\\n  color: #e5e5e5;\\n  font-weight: bold;\\n  font-size: 1.618rem;\\n  line-height: 40.896px;\\n  border-radius: 0 3px 3px 0;\\n  user-select: none;\\n}\\n\\n.prev {\\n  left: 0;\\n}\\n\\n.next {\\n  position: absolute;\\n  right: 0;\\n  border-radius: 3px 0 0 3px;\\n}\\n\\n.prev:hover, .next:hover {\\n  background-color: rgba(0, 0, 0, 0.8);\\n  color: white;\\n  text-decoration: none;\\n}</style>"],"names":[],"mappings":"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"}`
};
const QuoteRotator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let quote;
  let author;
  let image;
  let quoteIndex = 0;
  let switchOn = false;
  let autoAdvance;
  let autoPlaying = false;
  $$result.css.add(css$k);
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
    $$rendered = `<div class="${"slideshow-container svelte-l7vht7"}">
		${validate_component(Quote, "Quote").$$render($$result, {quote, author, image}, {}, {})}
		
		
		<span href="${"#prev"}" class="${["prev svelte-l7vht7", ""].join(" ").trim()}" title="${"previous quote"}">\u276E</span>
		
		<span href="${"#next"}" class="${["next svelte-l7vht7", ""].join(" ").trim()}" title="${"next quote"}">\u276F</span></div>

	
	<div class="${"dot-container svelte-l7vht7"}">${each(quotes, (quote2, i) => `${validate_component(Dot, "Dot").$$render($$result, {
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
var GridBase_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-4ivujl.svelte-4ivujl,.svelte-4ivujl.svelte-4ivujl:before,.svelte-4ivujl.svelte-4ivujl:after{box-sizing:border-box}\ndiv.svelte-4ivujl.svelte-4ivujl{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@keyframes svelte-4ivujl-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-4ivujl-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-4ivujl-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-4ivujl.svelte-4ivujl:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-4ivujl.svelte-4ivujl::selection{color:black;background-color:white;text-shadow:none}\n.tachado.svelte-4ivujl.svelte-4ivujl{text-decoration:line-through}\n.not-clickable.svelte-4ivujl.svelte-4ivujl{pointer-events:none}\n.Grid_0.svelte-4ivujl.svelte-4ivujl{display:grid;min-height:50vh;gap:2.618rem;grid-template-areas:"subarea0" "subarea1" "subarea2"}\n@media(min-width: 769px){.Grid_0.svelte-4ivujl.svelte-4ivujl{grid-template-areas:"subarea1 subarea0" "subarea2 subarea0"}}\n.Grid_0.svelte-4ivujl .svelte-4ivujl:nth-child(1){grid-area:subarea1;align-self:end}\n.Grid_0.svelte-4ivujl .svelte-4ivujl:nth-child(2){grid-area:subarea0;min-width:50vw}\n.Grid_0.svelte-4ivujl .svelte-4ivujl:nth-child(3){grid-area:subarea2;display:grid;align-self:start;place-content:center}\n.Grid_1.svelte-4ivujl.svelte-4ivujl{display:grid;min-height:50vh;gap:2.618rem;grid-template-areas:"subarea0" "subarea1" "subarea2"}\n@media(min-width: 769px){.Grid_1.svelte-4ivujl.svelte-4ivujl{grid-template-areas:"subarea0 subarea1" "subarea0 subarea2"}}\n.Grid_1.svelte-4ivujl .svelte-4ivujl:nth-child(1){grid-area:subarea1;display:grid;align-self:end;text-align:center}\n.Grid_1.svelte-4ivujl .svelte-4ivujl:nth-child(2){grid-area:subarea0;min-width:50vw}\n.Grid_1.svelte-4ivujl .svelte-4ivujl:nth-child(3){grid-area:subarea2;display:grid;align-self:start;place-content:center}\n.Grid_2.svelte-4ivujl.svelte-4ivujl{display:grid;min-height:50vh;gap:2.618rem;grid-template-areas:"subarea0" "subarea1" "subarea2"}\n@media(min-width: 769px){.Grid_2.svelte-4ivujl.svelte-4ivujl{grid-template-areas:"subarea0 subarea1" "subarea0 subarea2"}}\n.Grid_2.svelte-4ivujl .svelte-4ivujl:nth-child(1){grid-area:subarea1;align-self:end}\n.Grid_2.svelte-4ivujl .svelte-4ivujl:nth-child(2){grid-area:subarea0;min-width:50vw}\n.Grid_2.svelte-4ivujl .svelte-4ivujl:nth-child(3){grid-area:subarea2;display:grid;align-self:start;place-content:center}\n.Grid_3.svelte-4ivujl.svelte-4ivujl{display:grid;min-height:50vh;gap:2.618rem;grid-template-areas:"subarea0" "subarea1" "subarea2"}\n@media(min-width: 769px){.Grid_3.svelte-4ivujl.svelte-4ivujl{grid-template-areas:"subarea1 subarea0" "subarea2 subarea2";grid-template-columns:1fr 1.618fr}}\n.Grid_3.svelte-4ivujl .svelte-4ivujl:nth-child(1){grid-area:subarea1}\n.Grid_3.svelte-4ivujl .svelte-4ivujl:nth-child(2){grid-area:subarea0;min-width:50vw}\n.Grid_3.svelte-4ivujl .svelte-4ivujl:nth-child(3){grid-area:subarea2;display:grid;place-content:center}\n.Grid_4.svelte-4ivujl.svelte-4ivujl{display:grid;min-height:50vh;margin-left:1.618rem;gap:2.618rem;grid-template-areas:"subarea0" "subarea1" "subarea2"}\n@media(min-width: 769px){.Grid_4.svelte-4ivujl.svelte-4ivujl{margin-left:2.618rem;grid-template-areas:"subarea1 subarea0" "subarea2 subarea0"}}\n.Grid_4.svelte-4ivujl .svelte-4ivujl:nth-child(1){grid-area:subarea1;align-self:end}\n.Grid_4.svelte-4ivujl .svelte-4ivujl:nth-child(2){grid-area:subarea0;min-width:50vw}\n.Grid_4.svelte-4ivujl .svelte-4ivujl:nth-child(3){grid-area:subarea2;display:grid;align-self:start;place-content:center}';
const css$j = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");.svelte-4ivujl.svelte-4ivujl,.svelte-4ivujl.svelte-4ivujl:before,.svelte-4ivujl.svelte-4ivujl:after{box-sizing:border-box}div.svelte-4ivujl.svelte-4ivujl{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}@media(min-width: 769px){}@media(min-width: 1023px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 769px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}@keyframes svelte-4ivujl-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-4ivujl-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-4ivujl-loading{50%{transform:scale(1.2);opacity:0.7}}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-4ivujl.svelte-4ivujl:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-4ivujl.svelte-4ivujl::selection{color:black;background-color:white;text-shadow:none}.tachado.svelte-4ivujl.svelte-4ivujl{text-decoration:line-through}.not-clickable.svelte-4ivujl.svelte-4ivujl{pointer-events:none}.Grid_0.svelte-4ivujl.svelte-4ivujl{display:grid;min-height:50vh;gap:2.618rem;grid-template-areas:"subarea0" "subarea1" "subarea2"}@media(min-width: 769px){.Grid_0.svelte-4ivujl.svelte-4ivujl{grid-template-areas:"subarea1 subarea0" "subarea2 subarea0"}}.Grid_0.svelte-4ivujl .svelte-4ivujl:nth-child(1){grid-area:subarea1;align-self:end}.Grid_0.svelte-4ivujl .svelte-4ivujl:nth-child(2){grid-area:subarea0;min-width:50vw}.Grid_0.svelte-4ivujl .svelte-4ivujl:nth-child(3){grid-area:subarea2;display:grid;align-self:start;place-content:center}.Grid_1.svelte-4ivujl.svelte-4ivujl{display:grid;min-height:50vh;gap:2.618rem;grid-template-areas:"subarea0" "subarea1" "subarea2"}@media(min-width: 769px){.Grid_1.svelte-4ivujl.svelte-4ivujl{grid-template-areas:"subarea0 subarea1" "subarea0 subarea2"}}.Grid_1.svelte-4ivujl .svelte-4ivujl:nth-child(1){grid-area:subarea1;display:grid;align-self:end;text-align:center}.Grid_1.svelte-4ivujl .svelte-4ivujl:nth-child(2){grid-area:subarea0;min-width:50vw}.Grid_1.svelte-4ivujl .svelte-4ivujl:nth-child(3){grid-area:subarea2;display:grid;align-self:start;place-content:center}.Grid_2.svelte-4ivujl.svelte-4ivujl{display:grid;min-height:50vh;gap:2.618rem;grid-template-areas:"subarea0" "subarea1" "subarea2"}@media(min-width: 769px){.Grid_2.svelte-4ivujl.svelte-4ivujl{grid-template-areas:"subarea0 subarea1" "subarea0 subarea2"}}.Grid_2.svelte-4ivujl .svelte-4ivujl:nth-child(1){grid-area:subarea1;align-self:end}.Grid_2.svelte-4ivujl .svelte-4ivujl:nth-child(2){grid-area:subarea0;min-width:50vw}.Grid_2.svelte-4ivujl .svelte-4ivujl:nth-child(3){grid-area:subarea2;display:grid;align-self:start;place-content:center}.Grid_3.svelte-4ivujl.svelte-4ivujl{display:grid;min-height:50vh;gap:2.618rem;grid-template-areas:"subarea0" "subarea1" "subarea2"}@media(min-width: 769px){.Grid_3.svelte-4ivujl.svelte-4ivujl{grid-template-areas:"subarea1 subarea0" "subarea2 subarea2";grid-template-columns:1fr 1.618fr}}.Grid_3.svelte-4ivujl .svelte-4ivujl:nth-child(1){grid-area:subarea1}.Grid_3.svelte-4ivujl .svelte-4ivujl:nth-child(2){grid-area:subarea0;min-width:50vw}.Grid_3.svelte-4ivujl .svelte-4ivujl:nth-child(3){grid-area:subarea2;display:grid;place-content:center}.Grid_4.svelte-4ivujl.svelte-4ivujl{display:grid;min-height:50vh;margin-left:1.618rem;gap:2.618rem;grid-template-areas:"subarea0" "subarea1" "subarea2"}@media(min-width: 769px){.Grid_4.svelte-4ivujl.svelte-4ivujl{margin-left:2.618rem;grid-template-areas:"subarea1 subarea0" "subarea2 subarea0"}}.Grid_4.svelte-4ivujl .svelte-4ivujl:nth-child(1){grid-area:subarea1;align-self:end}.Grid_4.svelte-4ivujl .svelte-4ivujl:nth-child(2){grid-area:subarea0;min-width:50vw}.Grid_4.svelte-4ivujl .svelte-4ivujl:nth-child(3){grid-area:subarea2;display:grid;align-self:start;place-content:center}',
  map: '{"version":3,"file":"GridBase.svelte","sources":["GridBase.svelte"],"sourcesContent":["<script>\\n    export let variante = 0;\\n    const modificador = [\\n        \\"Grid_0\\",\\n        \\"Grid_1\\",\\n        \\"Grid_2\\",\\n        \\"Grid_3\\",\\n        \\"Grid_4\\"\\n    ];\\n</script>\\n\\n<div class={modificador[variante]}>\\n    <div><slot name=\\"subarea1\\"></slot></div>\\n    <div><slot></slot></div>\\n    <div><slot name=\\"subarea2\\"></slot></div>\\n</div>\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nsvg {\\n  max-height: 90vh;\\n}\\n\\nbody,\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Montserrat\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 40.896px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 86.4px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 144px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 144px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 57.6px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 28.8px;\\n  }\\n}\\n\\nsmall,\\np,\\ndl {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n\\nhgroup {\\n  margin-bottom: 1.618rem;\\n}\\n\\n@media (min-width: 769px) {\\n  p,\\nh4,\\ndl {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\ndt {\\n  color: #414141;\\n  margin-top: 1rem;\\n}\\n\\ndd {\\n  color: #6c6c6c;\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #b4b4b4;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: #6c6c6c;\\n}\\n\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: #6c6c6c;\\n  border: 1px solid #6c6c6c;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\nimg {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.tachado {\\n  text-decoration: line-through;\\n}\\n\\n.not-clickable {\\n  pointer-events: none;\\n}\\n\\nvideo {\\n  width: 100%;\\n  object-fit: cover;\\n  /* mix-blend-mode: luminosity; */\\n  /* border-radius: $h2; */\\n}\\n\\n.Grid_0 {\\n  display: grid;\\n  min-height: 50vh;\\n  gap: 2.618rem;\\n  grid-template-areas: \\"subarea0\\" \\"subarea1\\" \\"subarea2\\";\\n}\\n@media (min-width: 769px) {\\n  .Grid_0 {\\n    grid-template-areas: \\"subarea1 subarea0\\" \\"subarea2 subarea0\\";\\n  }\\n}\\n.Grid_0 *:nth-child(1) {\\n  grid-area: subarea1;\\n  align-self: end;\\n  /* margin-bottom: $h2; */\\n}\\n.Grid_0 *:nth-child(2) {\\n  grid-area: subarea0;\\n  min-width: 50vw;\\n  /* margin-bottom: $h4; */\\n}\\n.Grid_0 *:nth-child(3) {\\n  grid-area: subarea2;\\n  display: grid;\\n  align-self: start;\\n  place-content: center;\\n}\\n\\n.Grid_1 {\\n  display: grid;\\n  min-height: 50vh;\\n  gap: 2.618rem;\\n  grid-template-areas: \\"subarea0\\" \\"subarea1\\" \\"subarea2\\";\\n}\\n@media (min-width: 769px) {\\n  .Grid_1 {\\n    grid-template-areas: \\"subarea0 subarea1\\" \\"subarea0 subarea2\\";\\n  }\\n}\\n.Grid_1 *:nth-child(1) {\\n  grid-area: subarea1;\\n  display: grid;\\n  align-self: end;\\n  text-align: center;\\n}\\n.Grid_1 *:nth-child(2) {\\n  grid-area: subarea0;\\n  min-width: 50vw;\\n}\\n.Grid_1 *:nth-child(3) {\\n  grid-area: subarea2;\\n  display: grid;\\n  align-self: start;\\n  place-content: center;\\n}\\n\\n.Grid_2 {\\n  display: grid;\\n  min-height: 50vh;\\n  gap: 2.618rem;\\n  grid-template-areas: \\"subarea0\\" \\"subarea1\\" \\"subarea2\\";\\n  /* @include media(s2) {\\n      *:nth-child(3),\\n      *:nth-child(1) {\\n          text-align: right;\\n      }\\n  } */\\n}\\n@media (min-width: 769px) {\\n  .Grid_2 {\\n    grid-template-areas: \\"subarea0 subarea1\\" \\"subarea0 subarea2\\";\\n  }\\n}\\n.Grid_2 *:nth-child(1) {\\n  grid-area: subarea1;\\n  align-self: end;\\n}\\n.Grid_2 *:nth-child(2) {\\n  grid-area: subarea0;\\n  min-width: 50vw;\\n  /* margin-bottom: $h4; */\\n}\\n.Grid_2 *:nth-child(3) {\\n  grid-area: subarea2;\\n  display: grid;\\n  align-self: start;\\n  place-content: center;\\n}\\n\\n.Grid_3 {\\n  display: grid;\\n  min-height: 50vh;\\n  gap: 2.618rem;\\n  grid-template-areas: \\"subarea0\\" \\"subarea1\\" \\"subarea2\\";\\n}\\n@media (min-width: 769px) {\\n  .Grid_3 {\\n    grid-template-areas: \\"subarea1 subarea0\\" \\"subarea2 subarea2\\";\\n    grid-template-columns: 1fr 1.618fr;\\n  }\\n}\\n.Grid_3 *:nth-child(1) {\\n  grid-area: subarea1;\\n  /* align-self: center; */\\n}\\n.Grid_3 *:nth-child(2) {\\n  grid-area: subarea0;\\n  min-width: 50vw;\\n}\\n.Grid_3 *:nth-child(3) {\\n  grid-area: subarea2;\\n  display: grid;\\n  place-content: center;\\n}\\n\\n.Grid_4 {\\n  display: grid;\\n  min-height: 50vh;\\n  margin-left: 1.618rem;\\n  gap: 2.618rem;\\n  grid-template-areas: \\"subarea0\\" \\"subarea1\\" \\"subarea2\\";\\n}\\n@media (min-width: 769px) {\\n  .Grid_4 {\\n    margin-left: 2.618rem;\\n    grid-template-areas: \\"subarea1 subarea0\\" \\"subarea2 subarea0\\";\\n  }\\n}\\n.Grid_4 *:nth-child(1) {\\n  grid-area: subarea1;\\n  align-self: end;\\n  /* margin-bottom: $h2; */\\n}\\n.Grid_4 *:nth-child(2) {\\n  grid-area: subarea0;\\n  min-width: 50vw;\\n  /* margin-bottom: $h4; */\\n}\\n.Grid_4 *:nth-child(3) {\\n  grid-area: subarea2;\\n  display: grid;\\n  align-self: start;\\n  place-content: center;\\n}</style>"],"names":[],"mappings":"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"}'
};
const GridBase = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {variante = 0} = $$props;
  const modificador = ["Grid_0", "Grid_1", "Grid_2", "Grid_3", "Grid_4"];
  if ($$props.variante === void 0 && $$bindings.variante && variante !== void 0)
    $$bindings.variante(variante);
  $$result.css.add(css$j);
  return `<div class="${escape(null_to_empty(modificador[variante])) + " svelte-4ivujl"}"><div class="${"svelte-4ivujl"}">${slots.subarea1 ? slots.subarea1({}) : ``}</div>
    <div class="${"svelte-4ivujl"}">${slots.default ? slots.default({}) : ``}</div>
    <div class="${"svelte-4ivujl"}">${slots.subarea2 ? slots.subarea2({}) : ``}</div>
</div>`;
});
var Button_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-1swrfe6,.svelte-1swrfe6:before,.svelte-1swrfe6:after{box-sizing:border-box}\na.svelte-1swrfe6{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\na[target=_blank].svelte-1swrfe6:after{content:" \u2924"}\n@keyframes svelte-1swrfe6-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-1swrfe6-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-1swrfe6-loading{50%{transform:scale(1.2);opacity:0.7}}\na.svelte-1swrfe6:hover{animation-name:svelte-1swrfe6-fade;animation-duration:0.3s}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-1swrfe6:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-1swrfe6::selection{color:black;background-color:white;text-shadow:none}\n.tachado.svelte-1swrfe6{text-decoration:line-through}\n.not-clickable.svelte-1swrfe6{pointer-events:none}\nbutton.svelte-1swrfe6{background-color:transparent;user-select:none}\nbutton.svelte-1swrfe6:focus{border:none}\na.svelte-1swrfe6,button.svelte-1swrfe6{font-size:inherit;display:flex;align-items:center;padding:1rem 1.618rem;text-decoration:none;border-width:1px;border-style:dotted;margin-top:1.618rem;margin-bottom:1.618rem;max-width:29.03rem;position:relative}\na.svelte-1swrfe6:after,button.svelte-1swrfe6:after{font-size:1.618rem;padding-left:0.618rem}\na.svelte-1swrfe6:hover,button.svelte-1swrfe6:hover{cursor:pointer}\n.Dark.svelte-1swrfe6{color:#110e08;border-color:#110e08}\n.Dark.svelte-1swrfe6:hover{color:#e5e5e5;background-color:#110e08;border-color:#110e08}\n.Light.svelte-1swrfe6{color:#b4b4b4;border-color:#b4b4b4}\n.Light.svelte-1swrfe6:hover{color:#110e08;background-color:#b4b4b4;border-color:#b4b4b4}\n.Variante_2.svelte-1swrfe6{color:#b4b4b4;border-color:#6c6c6c;margin-bottom:0;margin-top:0}\n.Variante_2.svelte-1swrfe6:hover{color:#110e08;background-color:#e5e5e5;border-color:#e5e5e5}\n.ColoredInvert.svelte-1swrfe6{color:#b4b4b4;border-color:#b4b4b4}\n.ColoredInvert.svelte-1swrfe6:hover{color:#110e08;background-color:#e5e5e5;border-color:#e5e5e5}\n.UnicodeIcon.svelte-1swrfe6{color:white;border:none;margin:0;font-size:2.618rem;line-height:57.6px}\n@media(min-width: 769px){.UnicodeIcon.svelte-1swrfe6{color:#e8b28a}}\n.UnicodeIcon.svelte-1swrfe6:hover{color:#e5e5e5}\n.ScrollTo.svelte-1swrfe6{color:black;border:none;text-align:center;margin:0;font-size:2.618rem;line-height:57.6px;display:block;background-color:transparent}\n.ScrollTo.svelte-1swrfe6:hover{color:#e5e5e5}\n.Variante_6.svelte-1swrfe6{display:block;border:none;text-align:center;margin:0;font-size:1.618rem;line-height:40.896px;color:#b4b4b4;background-color:#2a2929;width:100%}\n@media(min-width: 1023px){.Variante_6.svelte-1swrfe6{border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:1.618rem;border-bottom-right-radius:1.618rem}}\n.Variante_6.svelte-1swrfe6:hover{background-color:#ebba97;color:#110e08}';
const css$i = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");.svelte-1swrfe6,.svelte-1swrfe6:before,.svelte-1swrfe6:after{box-sizing:border-box}a.svelte-1swrfe6{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}@media(min-width: 769px){}@media(min-width: 1023px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 769px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}a[target=_blank].svelte-1swrfe6:after{content:" \u2924"}@keyframes svelte-1swrfe6-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-1swrfe6-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-1swrfe6-loading{50%{transform:scale(1.2);opacity:0.7}}a.svelte-1swrfe6:hover{animation-name:svelte-1swrfe6-fade;animation-duration:0.3s}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-1swrfe6:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-1swrfe6::selection{color:black;background-color:white;text-shadow:none}.tachado.svelte-1swrfe6{text-decoration:line-through}.not-clickable.svelte-1swrfe6{pointer-events:none}button.svelte-1swrfe6{background-color:transparent;user-select:none}button.svelte-1swrfe6:focus{border:none}a.svelte-1swrfe6,button.svelte-1swrfe6{font-size:inherit;display:flex;align-items:center;padding:1rem 1.618rem;text-decoration:none;border-width:1px;border-style:dotted;margin-top:1.618rem;margin-bottom:1.618rem;max-width:29.03rem;position:relative}a.svelte-1swrfe6:after,button.svelte-1swrfe6:after{font-size:1.618rem;padding-left:0.618rem}a.svelte-1swrfe6:hover,button.svelte-1swrfe6:hover{cursor:pointer}.Dark.svelte-1swrfe6{color:#110e08;border-color:#110e08}.Dark.svelte-1swrfe6:hover{color:#e5e5e5;background-color:#110e08;border-color:#110e08}.Light.svelte-1swrfe6{color:#b4b4b4;border-color:#b4b4b4}.Light.svelte-1swrfe6:hover{color:#110e08;background-color:#b4b4b4;border-color:#b4b4b4}.Variante_2.svelte-1swrfe6{color:#b4b4b4;border-color:#6c6c6c;margin-bottom:0;margin-top:0}.Variante_2.svelte-1swrfe6:hover{color:#110e08;background-color:#e5e5e5;border-color:#e5e5e5}.ColoredInvert.svelte-1swrfe6{color:#b4b4b4;border-color:#b4b4b4}.ColoredInvert.svelte-1swrfe6:hover{color:#110e08;background-color:#e5e5e5;border-color:#e5e5e5}.UnicodeIcon.svelte-1swrfe6{color:white;border:none;margin:0;font-size:2.618rem;line-height:57.6px}@media(min-width: 769px){.UnicodeIcon.svelte-1swrfe6{color:#e8b28a}}.UnicodeIcon.svelte-1swrfe6:hover{color:#e5e5e5}.ScrollTo.svelte-1swrfe6{color:black;border:none;text-align:center;margin:0;font-size:2.618rem;line-height:57.6px;display:block;background-color:transparent}.ScrollTo.svelte-1swrfe6:hover{color:#e5e5e5}.Variante_6.svelte-1swrfe6{display:block;border:none;text-align:center;margin:0;font-size:1.618rem;line-height:40.896px;color:#b4b4b4;background-color:#2a2929;width:100%}@media(min-width: 1023px){.Variante_6.svelte-1swrfe6{border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:1.618rem;border-bottom-right-radius:1.618rem}}.Variante_6.svelte-1swrfe6:hover{background-color:#ebba97;color:#110e08}',
  map: '{"version":3,"file":"Button.svelte","sources":["Button.svelte"],"sourcesContent":["<script>\\n    export let text = \\"\\";\\n    export let url = \\"\\";\\n    export let is_submit = false;\\n    export let target = \\"_blank\\";\\n    export let variante = 0;\\n    export let valorinput = \\"input\\";\\n\\n    let modificador = [\\n        \\"Light\\",\\n        \\"Dark\\",\\n        \\"Variante_2\\",\\n        \\"ColoredInvert\\",\\n        \\"UnicodeIcon\\",\\n        \\"ScrollTo\\",\\n        \\"Variante_6\\"\\n    ];\\n</script>\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nsvg {\\n  max-height: 90vh;\\n}\\n\\nbody,\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Montserrat\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 40.896px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 86.4px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 144px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 144px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 57.6px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 28.8px;\\n  }\\n}\\n\\nsmall,\\np,\\ndl {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n\\nhgroup {\\n  margin-bottom: 1.618rem;\\n}\\n\\n@media (min-width: 769px) {\\n  p,\\nh4,\\ndl {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\ndt {\\n  color: #414141;\\n  margin-top: 1rem;\\n}\\n\\ndd {\\n  color: #6c6c6c;\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #b4b4b4;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: #6c6c6c;\\n}\\n\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: #6c6c6c;\\n  border: 1px solid #6c6c6c;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\nimg {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.tachado {\\n  text-decoration: line-through;\\n}\\n\\n.not-clickable {\\n  pointer-events: none;\\n}\\n\\nvideo {\\n  width: 100%;\\n  object-fit: cover;\\n  /* mix-blend-mode: luminosity; */\\n  /* border-radius: $h2; */\\n}\\n\\nbutton {\\n  background-color: transparent;\\n  user-select: none;\\n}\\nbutton:focus {\\n  border: none;\\n}\\n\\na,\\nbutton {\\n  font-size: inherit;\\n  display: flex;\\n  align-items: center;\\n  padding: 1rem 1.618rem;\\n  text-decoration: none;\\n  border-width: 1px;\\n  border-style: dotted;\\n  /* border-radius: 0; */\\n  margin-top: 1.618rem;\\n  margin-bottom: 1.618rem;\\n  max-width: 29.03rem;\\n  position: relative;\\n}\\na:after,\\nbutton:after {\\n  font-size: 1.618rem;\\n  padding-left: 0.618rem;\\n}\\na:hover,\\nbutton:hover {\\n  cursor: pointer;\\n}\\n\\n.Dark {\\n  color: #110e08;\\n  border-color: #110e08;\\n}\\n.Dark:hover {\\n  color: #e5e5e5;\\n  background-color: #110e08;\\n  border-color: #110e08;\\n}\\n\\n.Light {\\n  color: #b4b4b4;\\n  border-color: #b4b4b4;\\n}\\n.Light:hover {\\n  color: #110e08;\\n  background-color: #b4b4b4;\\n  border-color: #b4b4b4;\\n}\\n\\n.Variante_2 {\\n  color: #b4b4b4;\\n  border-color: #6c6c6c;\\n  margin-bottom: 0;\\n  margin-top: 0;\\n}\\n.Variante_2:hover {\\n  color: #110e08;\\n  background-color: #e5e5e5;\\n  border-color: #e5e5e5;\\n}\\n\\n.ColoredInvert {\\n  color: #b4b4b4;\\n  border-color: #b4b4b4;\\n}\\n.ColoredInvert:hover {\\n  color: #110e08;\\n  background-color: #e5e5e5;\\n  border-color: #e5e5e5;\\n}\\n\\n.UnicodeIcon {\\n  color: white;\\n  border: none;\\n  margin: 0;\\n  font-size: 2.618rem;\\n  line-height: 57.6px;\\n}\\n@media (min-width: 769px) {\\n  .UnicodeIcon {\\n    color: #e8b28a;\\n  }\\n}\\n.UnicodeIcon:hover {\\n  color: #e5e5e5;\\n}\\n\\n.ScrollTo {\\n  color: black;\\n  border: none;\\n  text-align: center;\\n  margin: 0;\\n  font-size: 2.618rem;\\n  line-height: 57.6px;\\n  display: block;\\n  background-color: transparent;\\n}\\n.ScrollTo:hover {\\n  color: #e5e5e5;\\n}\\n\\n.Variante_6 {\\n  display: block;\\n  border: none;\\n  text-align: center;\\n  margin: 0;\\n  font-size: 1.618rem;\\n  line-height: 40.896px;\\n  color: #b4b4b4;\\n  background-color: #2a2929;\\n  width: 100%;\\n}\\n@media (min-width: 1023px) {\\n  .Variante_6 {\\n    border-top-left-radius: 0;\\n    border-bottom-left-radius: 0;\\n    border-top-right-radius: 1.618rem;\\n    border-bottom-right-radius: 1.618rem;\\n  }\\n}\\n.Variante_6:hover {\\n  background-color: #ebba97;\\n  color: #110e08;\\n}</style>\\n\\n{#if url}\\n    <a href=\\"{url}\\" target=\\"{target}\\" class=\\"{modificador[variante]}\\">\\n        {text}\\n    </a>\\n{:else if is_submit}\\n    <button on:click type=\\"submit\\" class=\\"{modificador[variante]}\\">\\n        {text}\\n    </button>\\n{:else}\\n    <button on:click \\n    class=\\"{modificador[variante]}\\"\\n    class:not-clickable={valorinput==\\"\\"}\\n    >\\n        {text}\\n    </button>\\n{/if}\\n"],"names":[],"mappings":"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"}'
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {text = ""} = $$props;
  let {url = ""} = $$props;
  let {is_submit = false} = $$props;
  let {target = "_blank"} = $$props;
  let {variante = 0} = $$props;
  let {valorinput = "input"} = $$props;
  let modificador = [
    "Light",
    "Dark",
    "Variante_2",
    "ColoredInvert",
    "UnicodeIcon",
    "ScrollTo",
    "Variante_6"
  ];
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
  if ($$props.valorinput === void 0 && $$bindings.valorinput && valorinput !== void 0)
    $$bindings.valorinput(valorinput);
  $$result.css.add(css$i);
  return `${url ? `<a${add_attribute("href", url, 0)}${add_attribute("target", target, 0)} class="${escape(null_to_empty(modificador[variante])) + " svelte-1swrfe6"}">${escape(text)}</a>` : `${is_submit ? `<button type="${"submit"}" class="${escape(null_to_empty(modificador[variante])) + " svelte-1swrfe6"}">${escape(text)}</button>` : `<button class="${[
    escape(null_to_empty(modificador[variante])) + " svelte-1swrfe6",
    valorinput == "" ? "not-clickable" : ""
  ].join(" ").trim()}">${escape(text)}</button>`}`}`;
});
const CtaBanner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(GridBase, "GridBase").$$render($$result, {variante: 4}, {}, {
    subarea2: () => `<div slot="${"subarea2"}">${validate_component(Button, "Button").$$render($$result, {variante: 0, text: "cta text", url: "#"}, {}, {})}</div>`,
    subarea1: () => `<div slot="${"subarea1"}"><p>Desde la poes\xEDa de la materia</p></div>`,
    default: () => `<video poster="${"/img/cover3.jpg"}" loop playsinline controls="${"controls"}"><source src="${"/img/desdelapoesiadelamateria.webm"}" type="${"video/webm"}"><source src="${"/img/desdelapoesiadelamateria.mp4"}" type="${"video/mp4"}"><p>Ups! Su navegador no soporta v\xEDdeos HTML5.</p></video>`
  })}`;
});
var Cover_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-1d15n6q,.svelte-1d15n6q:before,.svelte-1d15n6q:after{box-sizing:border-box}\ndiv.svelte-1d15n6q,span.svelte-1d15n6q,h1.svelte-1d15n6q,h2.svelte-1d15n6q,p.svelte-1d15n6q,header.svelte-1d15n6q{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\nheader.svelte-1d15n6q{display:block}\nheader.svelte-1d15n6q{font-family:"Montserrat", sans-serif;letter-spacing:0;font-weight:500;color:#b4b4b4}\nh1.svelte-1d15n6q{font-size:1.618rem;line-height:40.896px;font-weight:bold}\n@media(min-width: 769px){h1.svelte-1d15n6q{font-size:4.236rem;line-height:86.4px}}\n@media(min-width: 1023px){h1.svelte-1d15n6q{font-size:6.854rem;line-height:144px}}\n@media(min-width: 2140px){h1.svelte-1d15n6q{font-size:11.089rem;line-height:144px}}\nh2.svelte-1d15n6q{font-weight:500;font-size:1rem;line-height:28.8px}\n@media(min-width: 374px){h2.svelte-1d15n6q{font-size:1.618rem;line-height:40.896px}}\n@media(min-width: 2140px){h2.svelte-1d15n6q{font-size:2.618rem;line-height:57.6px;margin-left:6.854rem;margin-right:6.854rem}}\n@media(min-width: 374px){}\np.svelte-1d15n6q{font-size:1rem;line-height:28.8px}\n@media(min-width: 769px){p.svelte-1d15n6q{max-width:769px;margin-left:auto;margin-right:auto}}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@keyframes svelte-1d15n6q-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-1d15n6q-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-1d15n6q-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-1d15n6q:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-1d15n6q::selection{color:black;background-color:white;text-shadow:none}\n.tachado.svelte-1d15n6q{text-decoration:line-through}\n.not-clickable.svelte-1d15n6q{pointer-events:none}\n.is_home.svelte-1d15n6q{height:27vh}\n@media(min-width: 769px){.is_home.svelte-1d15n6q{height:100vh}}\n.Cover_0.svelte-1d15n6q{display:grid;place-content:center;min-height:50vh;background-color:#2a2929;text-align:center;padding:0 1.618rem;color:#b4b4b4}\n@media(min-width: 769px){.Cover_0.svelte-1d15n6q{color:#e5e5e5;grid-template-areas:"title" "text";background-size:cover;background-position:top center;background-attachment:fixed;height:100vh;background-position:center}}\n.Cover_1.svelte-1d15n6q{display:grid;place-content:center;min-height:50vh;color:#2a2929;background-color:#e8b28a;text-align:left;padding:0 1.618rem}\n@media(min-width: 769px){.Cover_1.svelte-1d15n6q{text-align:center}}\n.Cover_2.svelte-1d15n6q{display:grid;place-content:center;min-height:50vh;color:#110e08;background-color:#b4b4b4;text-align:center}\n@media(min-width: 769px){.Cover_2.svelte-1d15n6q{min-height:100vh;background-position:center;background-repeat:no-repeat;background-size:cover}}';
const css$h = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");.svelte-1d15n6q,.svelte-1d15n6q:before,.svelte-1d15n6q:after{box-sizing:border-box}div.svelte-1d15n6q,span.svelte-1d15n6q,h1.svelte-1d15n6q,h2.svelte-1d15n6q,p.svelte-1d15n6q,header.svelte-1d15n6q{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}header.svelte-1d15n6q{display:block}header.svelte-1d15n6q{font-family:"Montserrat", sans-serif;letter-spacing:0;font-weight:500;color:#b4b4b4}h1.svelte-1d15n6q{font-size:1.618rem;line-height:40.896px;font-weight:bold}@media(min-width: 769px){h1.svelte-1d15n6q{font-size:4.236rem;line-height:86.4px}}@media(min-width: 1023px){h1.svelte-1d15n6q{font-size:6.854rem;line-height:144px}}@media(min-width: 2140px){h1.svelte-1d15n6q{font-size:11.089rem;line-height:144px}}h2.svelte-1d15n6q{font-weight:500;font-size:1rem;line-height:28.8px}@media(min-width: 374px){h2.svelte-1d15n6q{font-size:1.618rem;line-height:40.896px}}@media(min-width: 2140px){h2.svelte-1d15n6q{font-size:2.618rem;line-height:57.6px;margin-left:6.854rem;margin-right:6.854rem}}@media(min-width: 374px){}p.svelte-1d15n6q{font-size:1rem;line-height:28.8px}@media(min-width: 769px){p.svelte-1d15n6q{max-width:769px;margin-left:auto;margin-right:auto}}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}@keyframes svelte-1d15n6q-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-1d15n6q-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-1d15n6q-loading{50%{transform:scale(1.2);opacity:0.7}}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-1d15n6q:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-1d15n6q::selection{color:black;background-color:white;text-shadow:none}.tachado.svelte-1d15n6q{text-decoration:line-through}.not-clickable.svelte-1d15n6q{pointer-events:none}.is_home.svelte-1d15n6q{height:27vh}@media(min-width: 769px){.is_home.svelte-1d15n6q{height:100vh}}.Cover_0.svelte-1d15n6q{display:grid;place-content:center;min-height:50vh;background-color:#2a2929;text-align:center;padding:0 1.618rem;color:#b4b4b4}@media(min-width: 769px){.Cover_0.svelte-1d15n6q{color:#e5e5e5;grid-template-areas:"title" "text";background-size:cover;background-position:top center;background-attachment:fixed;height:100vh;background-position:center}}.Cover_1.svelte-1d15n6q{display:grid;place-content:center;min-height:50vh;color:#2a2929;background-color:#e8b28a;text-align:left;padding:0 1.618rem}@media(min-width: 769px){.Cover_1.svelte-1d15n6q{text-align:center}}.Cover_2.svelte-1d15n6q{display:grid;place-content:center;min-height:50vh;color:#110e08;background-color:#b4b4b4;text-align:center}@media(min-width: 769px){.Cover_2.svelte-1d15n6q{min-height:100vh;background-position:center;background-repeat:no-repeat;background-size:cover}}',
  map: `{"version":3,"file":"Cover.svelte","sources":["Cover.svelte"],"sourcesContent":["<script>\\n    import Button from '$lib/Button.svelte';\\n\\n    export let title = \\"\\"\\n    export let subtitle = \\"\\"\\n    export let text = \\"\\"\\n    export let img = \\"\\"\\n    export let is_home = false\\n    export let is_products_page = false\\n\\n    export let variante = 0\\n    const modificador = [\\n        \\"Cover_0\\",\\n        \\"Cover_1\\",\\n        \\"Cover_2\\"\\n    ]\\n\\n    let innerWidth, innerHeight, y;\\n</script>\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nsvg {\\n  max-height: 90vh;\\n}\\n\\nbody,\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Montserrat\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 40.896px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 86.4px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 144px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 144px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 57.6px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 28.8px;\\n  }\\n}\\n\\nsmall,\\np,\\ndl {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n\\nhgroup {\\n  margin-bottom: 1.618rem;\\n}\\n\\n@media (min-width: 769px) {\\n  p,\\nh4,\\ndl {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\ndt {\\n  color: #414141;\\n  margin-top: 1rem;\\n}\\n\\ndd {\\n  color: #6c6c6c;\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #b4b4b4;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: #6c6c6c;\\n}\\n\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: #6c6c6c;\\n  border: 1px solid #6c6c6c;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\nimg {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.tachado {\\n  text-decoration: line-through;\\n}\\n\\n.not-clickable {\\n  pointer-events: none;\\n}\\n\\nvideo {\\n  width: 100%;\\n  object-fit: cover;\\n  /* mix-blend-mode: luminosity; */\\n  /* border-radius: $h2; */\\n}\\n\\n.is_home {\\n  height: 27vh;\\n}\\n@media (min-width: 769px) {\\n  .is_home {\\n    height: 100vh;\\n  }\\n}\\n\\n.Cover_0 {\\n  display: grid;\\n  place-content: center;\\n  min-height: 50vh;\\n  background-color: #2a2929;\\n  text-align: center;\\n  padding: 0 1.618rem;\\n  color: #b4b4b4;\\n}\\n@media (min-width: 769px) {\\n  .Cover_0 {\\n    color: #e5e5e5;\\n    grid-template-areas: \\"title\\" \\"text\\";\\n    background-size: cover;\\n    background-position: top center;\\n    background-attachment: fixed;\\n    height: 100vh;\\n    background-position: center;\\n  }\\n}\\n\\n.Cover_1 {\\n  display: grid;\\n  place-content: center;\\n  min-height: 50vh;\\n  color: #2a2929;\\n  background-color: #e8b28a;\\n  text-align: left;\\n  padding: 0 1.618rem;\\n}\\n@media (min-width: 769px) {\\n  .Cover_1 {\\n    text-align: center;\\n  }\\n}\\n\\n.Cover_2 {\\n  display: grid;\\n  place-content: center;\\n  min-height: 50vh;\\n  color: #110e08;\\n  background-color: #b4b4b4;\\n  text-align: center;\\n}\\n@media (min-width: 769px) {\\n  .Cover_2 {\\n    min-height: 100vh;\\n    background-position: center;\\n    background-repeat: no-repeat;\\n    background-size: cover;\\n  }\\n}</style>\\n\\n<svelte:window bind:innerWidth bind:innerHeight bind:scrollY={y} />\\n\\n<header \\n    class={modificador[variante]}\\n    class:is_home\\n    style=\\" \\n    opacity: { 1 - Math.max(0, y / (innerHeight/1.5))};\\n    background-image: url( { innerWidth > 769 || is_home ? img : ''})\\n    \\">\\n\\n    <h1 class=\\"CoverTitle\\">\\n        {title} <br>\\n        <span>\\n            <h2 class=\\"CoverSubTitle\\"> {@html subtitle} </h2>\\n        </span>\\n    </h1>\\n    \\n    <div class=\\"CoverText\\">\\n        <p>{text}</p>\\n    \\n        {#if is_products_page}\\n            <Button variante={5} text=\\"\u142F\\"/>\\n        {/if}\\n    </div>\\n</header>"],"names":[],"mappings":"AAoBmB,SAAS,OAAO,CAAC,AAQpC,QAAQ,IAAI,gHAAgH,CAAC,CAAC,AAC9H,eAAC,CAAE,eAAC,OAAO,CAAE,eAAC,MAAM,AAAC,CAAC,AACpB,UAAU,CAAE,UAAU,AACxB,CAAC,AAEW,kBAAG,CAAE,mBAAI,CAA0B,iBAAE,CAAE,iBAAE,CAAkB,gBAAC,CAAoM,MAAM,eAAsB,CAAC,AACvS,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CAAC,CACT,SAAS,CAAE,IAAI,CACf,IAAI,CAAE,OAAO,CACb,cAAc,CAAE,QAAQ,CACxB,cAAc,CAAE,kBAAkB,CAClC,sBAAsB,CAAE,WAAW,CACnC,gBAAgB,CAAE,IAAI,AACxB,CAAC,AAEO,MAAM,eAAqB,CAAC,AAClC,OAAO,CAAE,KAAK,AAChB,CAAC,AAmCD,MAAM,eACA,CAAC,AACL,WAAW,CAAE,YAAY,CAAC,CAAC,UAAU,CACrC,cAAc,CAAE,CAAC,CACjB,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,OAAO,AAChB,CAAC,AAeD,EAAE,eAAC,CAAC,AACF,SAAS,CAAE,QAAQ,CACnB,WAAW,CAAE,QAAQ,CACrB,WAAW,CAAE,IAAI,AACnB,CAAC,AACD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,EAAE,eAAC,CAAC,AACF,SAAS,CAAE,QAAQ,CACnB,WAAW,CAAE,MAAM,AACrB,CAAC,AACH,CAAC,AACD,MAAM,AAAC,YAAY,MAAM,CAAC,AAAC,CAAC,AAC1B,EAAE,eAAC,CAAC,AACF,SAAS,CAAE,QAAQ,CACnB,WAAW,CAAE,KAAK,AACpB,CAAC,AACH,CAAC,AACD,MAAM,AAAC,YAAY,MAAM,CAAC,AAAC,CAAC,AAC1B,EAAE,eAAC,CAAC,AACF,SAAS,CAAE,SAAS,CACpB,WAAW,CAAE,KAAK,AACpB,CAAC,AACH,CAAC,AAED,EAAE,eAAC,CAAC,AACF,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,MAAM,AACrB,CAAC,AACD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,EAAE,eAAC,CAAC,AACF,SAAS,CAAE,QAAQ,CACnB,WAAW,CAAE,QAAQ,AACvB,CAAC,AACH,CAAC,AACD,MAAM,AAAC,YAAY,MAAM,CAAC,AAAC,CAAC,AAC1B,EAAE,eAAC,CAAC,AACF,SAAS,CAAE,QAAQ,CACnB,WAAW,CAAE,MAAM,CACnB,WAAW,CAAE,QAAQ,CACrB,YAAY,CAAE,QAAQ,AACxB,CAAC,AACH,CAAC,AAOD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAM3B,CAAC,AAGD,CAAC,eACE,CAAC,AACF,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,MAAM,AACrB,CAAC,AAMD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,CAAC,eAEA,CAAC,AACA,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,IAAI,CACjB,YAAY,CAAE,IAAI,AACpB,CAAC,AACH,CAAC,AAeD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAK3B,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAK3B,CAAC,AACD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAM3B,CAAC,AAgFD,WAAW,mBAAK,CAAC,AACf,EAAE,AAAC,CAAC,AACF,OAAO,CAAE,GAAG,AACd,CAAC,AACD,IAAI,AAAC,CAAC,AACJ,OAAO,CAAE,CAAC,AACZ,CAAC,AACH,CAAC,AACD,WAAW,oBAAM,CAAC,AAChB,EAAE,AAAC,CAAC,AACF,SAAS,CAAE,WAAW,KAAK,CAAC,CAC5B,OAAO,CAAE,GAAG,AACd,CAAC,AACD,GAAG,AAAC,CAAC,AACH,SAAS,CAAE,WAAW,GAAG,CAAC,CAC1B,OAAO,CAAE,CAAC,AACZ,CAAC,AACD,IAAI,AAAC,CAAC,AACJ,SAAS,CAAE,WAAW,CAAC,CAAC,CACxB,OAAO,CAAE,CAAC,AACZ,CAAC,AACH,CAAC,AACD,WAAW,sBAAQ,CAAC,AAClB,GAAG,AAAC,CAAC,AACH,SAAS,CAAE,MAAM,GAAG,CAAC,CACrB,OAAO,CAAE,GAAG,AACd,CAAC,AACH,CAAC,AAMD,KAAK,AAAC,CAAC,AACL,WAAW,CAAE,aAAa,CAAC,CAAC,kBAAkB,CAAC,CAAC,UAAU,CAAC,CAAC,MAAM,CAAC,CAAC,MAAM,CAAC,CAAC,MAAM,CAAC,CAAC,SAAS,CAAC,CAAC,WAAW,CAAC,CAAC,gBAAgB,CAAC,CAAC,UAAU,AAC1I,CAAC,AAED,eAAC,MAAM,AAAC,CAAC,AACP,aAAa,CAAE,OAAO,CACtB,aAAa,CAAE,MAAM,CACrB,aAAa,CAAE,GAAG,CAClB,aAAa,CAAE,MAAM,AACvB,CAAC,eAED,WAAW,AAAC,CAAC,AACX,KAAK,CAAE,KAAK,CACZ,gBAAgB,CAAE,KAAK,CACvB,WAAW,CAAE,IAAI,AACnB,CAAC,AAOD,QAAQ,eAAC,CAAC,AACR,eAAe,CAAE,YAAY,AAC/B,CAAC,AAED,cAAc,eAAC,CAAC,AACd,cAAc,CAAE,IAAI,AACtB,CAAC,AASD,QAAQ,eAAC,CAAC,AACR,MAAM,CAAE,IAAI,AACd,CAAC,AACD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,QAAQ,eAAC,CAAC,AACR,MAAM,CAAE,KAAK,AACf,CAAC,AACH,CAAC,AAED,QAAQ,eAAC,CAAC,AACR,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,MAAM,CACrB,UAAU,CAAE,IAAI,CAChB,gBAAgB,CAAE,OAAO,CACzB,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,CAAC,CAAC,QAAQ,CACnB,KAAK,CAAE,OAAO,AAChB,CAAC,AACD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,QAAQ,eAAC,CAAC,AACR,KAAK,CAAE,OAAO,CACd,mBAAmB,CAAE,OAAO,CAAC,MAAM,CACnC,eAAe,CAAE,KAAK,CACtB,mBAAmB,CAAE,GAAG,CAAC,MAAM,CAC/B,qBAAqB,CAAE,KAAK,CAC5B,MAAM,CAAE,KAAK,CACb,mBAAmB,CAAE,MAAM,AAC7B,CAAC,AACH,CAAC,AAED,QAAQ,eAAC,CAAC,AACR,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,MAAM,CACrB,UAAU,CAAE,IAAI,CAChB,KAAK,CAAE,OAAO,CACd,gBAAgB,CAAE,OAAO,CACzB,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,CAAC,CAAC,QAAQ,AACrB,CAAC,AACD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,QAAQ,eAAC,CAAC,AACR,UAAU,CAAE,MAAM,AACpB,CAAC,AACH,CAAC,AAED,QAAQ,eAAC,CAAC,AACR,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,MAAM,CACrB,UAAU,CAAE,IAAI,CAChB,KAAK,CAAE,OAAO,CACd,gBAAgB,CAAE,OAAO,CACzB,UAAU,CAAE,MAAM,AACpB,CAAC,AACD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,QAAQ,eAAC,CAAC,AACR,UAAU,CAAE,KAAK,CACjB,mBAAmB,CAAE,MAAM,CAC3B,iBAAiB,CAAE,SAAS,CAC5B,eAAe,CAAE,KAAK,AACxB,CAAC,AACH,CAAC"}`
};
const Cover = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {title = ""} = $$props;
  let {subtitle = ""} = $$props;
  let {text = ""} = $$props;
  let {img = ""} = $$props;
  let {is_home = false} = $$props;
  let {is_products_page = false} = $$props;
  let {variante = 0} = $$props;
  const modificador = ["Cover_0", "Cover_1", "Cover_2"];
  let innerHeight, y2;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.img === void 0 && $$bindings.img && img !== void 0)
    $$bindings.img(img);
  if ($$props.is_home === void 0 && $$bindings.is_home && is_home !== void 0)
    $$bindings.is_home(is_home);
  if ($$props.is_products_page === void 0 && $$bindings.is_products_page && is_products_page !== void 0)
    $$bindings.is_products_page(is_products_page);
  if ($$props.variante === void 0 && $$bindings.variante && variante !== void 0)
    $$bindings.variante(variante);
  $$result.css.add(css$h);
  return `

<header class="${[
    escape(null_to_empty(modificador[variante])) + " svelte-1d15n6q",
    is_home ? "is_home" : ""
  ].join(" ").trim()}" style="${" \n    opacity: " + escape(1 - Math.max(0, y2 / (innerHeight / 1.5))) + ";\n    background-image: url( " + escape(is_home ? img : "") + ")\n    "}"><h1 class="${"CoverTitle svelte-1d15n6q"}">${escape(title)} <br class="${"svelte-1d15n6q"}">
        <span class="${"svelte-1d15n6q"}"><h2 class="${"CoverSubTitle svelte-1d15n6q"}">${subtitle}</h2></span></h1>
    
    <div class="${"CoverText svelte-1d15n6q"}"><p class="${"svelte-1d15n6q"}">${escape(text)}</p>
    
        ${is_products_page ? `${validate_component(Button, "Button").$$render($$result, {variante: 5, text: "\u142F"}, {}, {})}` : ``}</div></header>`;
});
const pages = [
  {name: "Wellcome", url: "/"},
  {name: "Artwork", url: "/artworks"},
  {name: "Philosophy", url: "/philosophy"},
  {name: "Lab", url: "/lab"},
  {name: "About me", url: "/about"}
];
const secondaryNav = [
  {name: "artwork", url: "/artworks"},
  {name: "philosophy", url: "/philosophy"},
  {name: "lab", url: "/lab"}
];
var NavSecondary_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-ge4s9i.svelte-ge4s9i,.svelte-ge4s9i.svelte-ge4s9i:before,.svelte-ge4s9i.svelte-ge4s9i:after{box-sizing:border-box}\na.svelte-ge4s9i.svelte-ge4s9i,nav.svelte-ge4s9i.svelte-ge4s9i{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\nnav.svelte-ge4s9i.svelte-ge4s9i{display:block}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\nnav.svelte-ge4s9i a.svelte-ge4s9i{padding:0.618rem;text-decoration:none;color:#6c6c6c;border:1px solid #6c6c6c}\n@keyframes svelte-ge4s9i-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-ge4s9i-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-ge4s9i-loading{50%{transform:scale(1.2);opacity:0.7}}\na.svelte-ge4s9i.svelte-ge4s9i:hover{animation-name:svelte-ge4s9i-fade;animation-duration:0.3s}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-ge4s9i.svelte-ge4s9i:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-ge4s9i.svelte-ge4s9i::selection{color:black;background-color:white;text-shadow:none}\nnav.svelte-ge4s9i.svelte-ge4s9i{display:grid;grid-template-columns:repeat(auto-fill, 300px);gap:4.236rem;justify-content:center;align-content:center;background-color:#e8b28a;width:100%;min-height:50vh;padding:4.236rem 0;margin-left:auto;margin-right:auto}\nnav.svelte-ge4s9i a.svelte-ge4s9i{text-align:center;width:100%;border:none;color:#110e08}';
const css$g = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");.svelte-ge4s9i.svelte-ge4s9i,.svelte-ge4s9i.svelte-ge4s9i:before,.svelte-ge4s9i.svelte-ge4s9i:after{box-sizing:border-box}a.svelte-ge4s9i.svelte-ge4s9i,nav.svelte-ge4s9i.svelte-ge4s9i{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}nav.svelte-ge4s9i.svelte-ge4s9i{display:block}@media(min-width: 769px){}@media(min-width: 1023px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 769px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}nav.svelte-ge4s9i a.svelte-ge4s9i{padding:0.618rem;text-decoration:none;color:#6c6c6c;border:1px solid #6c6c6c}@keyframes svelte-ge4s9i-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-ge4s9i-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-ge4s9i-loading{50%{transform:scale(1.2);opacity:0.7}}a.svelte-ge4s9i.svelte-ge4s9i:hover{animation-name:svelte-ge4s9i-fade;animation-duration:0.3s}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-ge4s9i.svelte-ge4s9i:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-ge4s9i.svelte-ge4s9i::selection{color:black;background-color:white;text-shadow:none}nav.svelte-ge4s9i.svelte-ge4s9i{display:grid;grid-template-columns:repeat(auto-fill, 300px);gap:4.236rem;justify-content:center;align-content:center;background-color:#e8b28a;width:100%;min-height:50vh;padding:4.236rem 0;margin-left:auto;margin-right:auto}nav.svelte-ge4s9i a.svelte-ge4s9i{text-align:center;width:100%;border:none;color:#110e08}',
  map: '{"version":3,"file":"NavSecondary.svelte","sources":["NavSecondary.svelte"],"sourcesContent":["<script>\\n    import { secondaryNav } from \\"$lib/data/pages.js\\";\\n</script>\\n\\n<nav>\\n    {#each secondaryNav as {url, name}}\\n        <a \\n            href=\\"{url}\\"\\n            class=\\"NavItem\\"\\n            role=\\"navigation\\" \\n        >\\n            {name}\\n        </a>\\n    {/each}\\n</nav>\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nsvg {\\n  max-height: 90vh;\\n}\\n\\nbody,\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Montserrat\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 40.896px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 86.4px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 144px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 144px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 57.6px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 28.8px;\\n  }\\n}\\n\\nsmall,\\np,\\ndl {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n\\nhgroup {\\n  margin-bottom: 1.618rem;\\n}\\n\\n@media (min-width: 769px) {\\n  p,\\nh4,\\ndl {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\ndt {\\n  color: #414141;\\n  margin-top: 1rem;\\n}\\n\\ndd {\\n  color: #6c6c6c;\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #b4b4b4;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: #6c6c6c;\\n}\\n\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: #6c6c6c;\\n  border: 1px solid #6c6c6c;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\nimg {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.tachado {\\n  text-decoration: line-through;\\n}\\n\\n.not-clickable {\\n  pointer-events: none;\\n}\\n\\nvideo {\\n  width: 100%;\\n  object-fit: cover;\\n  /* mix-blend-mode: luminosity; */\\n  /* border-radius: $h2; */\\n}\\n\\nnav {\\n  display: grid;\\n  grid-template-columns: repeat(auto-fill, 300px);\\n  gap: 4.236rem;\\n  justify-content: center;\\n  align-content: center;\\n  background-color: #e8b28a;\\n  width: 100%;\\n  min-height: 50vh;\\n  padding: 4.236rem 0;\\n  margin-left: auto;\\n  margin-right: auto;\\n}\\nnav a {\\n  text-align: center;\\n  /* display: block; */\\n  width: 100%;\\n  border: none;\\n  color: #110e08;\\n}\\nnav a p {\\n  text-align: center;\\n}</style>"],"names":[],"mappings":"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"}'
};
const NavSecondary = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$g);
  return `<nav class="${"svelte-ge4s9i"}">${each(secondaryNav, ({url, name}) => `<a${add_attribute("href", url, 0)} class="${"NavItem svelte-ge4s9i"}" role="${"navigation"}">${escape(name)}
        </a>`)}
</nav>`;
});
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `

${validate_component(Section, "Section").$$render($$result, {id: "cover", variante: 3}, {}, {
    default: () => `${validate_component(Cover, "Cover").$$render($$result, {
      title: coverData[0].title,
      subtitle: coverData[0].subtitle,
      text: coverData[0].text,
      img: coverData[0].img
    }, {}, {})}`
  })}

${validate_component(Section, "Section").$$render($$result, {id: "navsecondary", variante: 3}, {}, {
    default: () => `${validate_component(NavSecondary, "NavSecondary").$$render($$result, {}, {}, {})}`
  })}

${validate_component(Section, "Section").$$render($$result, {id: "quoterotator", variante: 3}, {}, {
    default: () => `${validate_component(QuoteRotator, "QuoteRotator").$$render($$result, {}, {}, {})}`
  })}

${validate_component(Section, "Section").$$render($$result, {id: "ctabanner", variante: 2}, {}, {
    default: () => `${validate_component(CtaBanner, "CtaBanner").$$render($$result, {}, {}, {})}`
  })}`;
});
var index$4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: Routes
});
var Svg_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-1vb35yi,.svelte-1vb35yi:before,.svelte-1vb35yi:after{box-sizing:border-box}\nsvg.svelte-1vb35yi{max-height:90vh}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@keyframes svelte-1vb35yi-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-1vb35yi-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-1vb35yi-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-1vb35yi:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-1vb35yi::selection{color:black;background-color:white;text-shadow:none}\n.tachado.svelte-1vb35yi{text-decoration:line-through}\n.not-clickable.svelte-1vb35yi{pointer-events:none}\n.Svg_0.svelte-1vb35yi{fill:none;stroke:black}\n.Svg_1.svelte-1vb35yi{fill:blue}';
var Article_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-pq1mca,.svelte-pq1mca:before,.svelte-pq1mca:after{box-sizing:border-box}\nsection.svelte-pq1mca{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\nsection.svelte-pq1mca{display:block}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@keyframes svelte-pq1mca-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-pq1mca-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-pq1mca-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-pq1mca:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-pq1mca::selection{color:black;background-color:white;text-shadow:none}\n.tachado.svelte-pq1mca{text-decoration:line-through}\n.not-clickable.svelte-pq1mca{pointer-events:none}\n.Section_0.svelte-pq1mca{padding:2.618rem;min-height:50vh;color:#110e08;background-color:#e5e5e5}\n.Section_1.svelte-pq1mca{padding:2.618rem;min-height:50vh;color:white;background-color:#414141}\n.Section_2.svelte-pq1mca{display:grid;place-content:center;color:#e5e5e5;background-color:#2a2929}\n.Section_3.svelte-pq1mca{color:black;background-color:#b4b4b4;padding:0}\n.Section_4.svelte-pq1mca{color:#110e08;background-color:#b4b4b4;padding:2.618rem}\n.Section_5.svelte-pq1mca{min-height:50vh;color:#110e08;background-color:white}\n.Section_6.svelte-pq1mca{padding:2.618rem;min-height:50vh;color:#110e08;background-color:white}';
const css$f = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");.svelte-pq1mca,.svelte-pq1mca:before,.svelte-pq1mca:after{box-sizing:border-box}section.svelte-pq1mca{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}section.svelte-pq1mca{display:block}@media(min-width: 769px){}@media(min-width: 1023px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 769px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}@keyframes svelte-pq1mca-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-pq1mca-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-pq1mca-loading{50%{transform:scale(1.2);opacity:0.7}}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-pq1mca:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-pq1mca::selection{color:black;background-color:white;text-shadow:none}.tachado.svelte-pq1mca{text-decoration:line-through}.not-clickable.svelte-pq1mca{pointer-events:none}.Section_0.svelte-pq1mca{padding:2.618rem;min-height:50vh;color:#110e08;background-color:#e5e5e5}.Section_1.svelte-pq1mca{padding:2.618rem;min-height:50vh;color:white;background-color:#414141}.Section_2.svelte-pq1mca{display:grid;place-content:center;color:#e5e5e5;background-color:#2a2929}.Section_3.svelte-pq1mca{color:black;background-color:#b4b4b4;padding:0}.Section_4.svelte-pq1mca{color:#110e08;background-color:#b4b4b4;padding:2.618rem}.Section_5.svelte-pq1mca{min-height:50vh;color:#110e08;background-color:white}.Section_6.svelte-pq1mca{padding:2.618rem;min-height:50vh;color:#110e08;background-color:white}',
  map: '{"version":3,"file":"Article.svelte","sources":["Article.svelte"],"sourcesContent":["<script>\\n    export let variante = 0;\\n    export let id = \\"\\";\\n    let modificador = [\\n        \\"Section_0\\",\\n        \\"Section_1\\",\\n        \\"Section_2\\",\\n        \\"Section_3\\",\\n        \\"Section_4\\",\\n        \\"Section_5\\",\\n        \\"Section_6\\"\\n    ];\\n</script>\\n\\n<section    {id}\\n            class={modificador[variante]}\\n>\\n    <slot />\\n</section>\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nsvg {\\n  max-height: 90vh;\\n}\\n\\nbody,\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Montserrat\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 40.896px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 86.4px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 144px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 144px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 57.6px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 28.8px;\\n  }\\n}\\n\\nsmall,\\np,\\ndl {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n\\nhgroup {\\n  margin-bottom: 1.618rem;\\n}\\n\\n@media (min-width: 769px) {\\n  p,\\nh4,\\ndl {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\ndt {\\n  color: #414141;\\n  margin-top: 1rem;\\n}\\n\\ndd {\\n  color: #6c6c6c;\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #b4b4b4;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: #6c6c6c;\\n}\\n\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: #6c6c6c;\\n  border: 1px solid #6c6c6c;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\nimg {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.tachado {\\n  text-decoration: line-through;\\n}\\n\\n.not-clickable {\\n  pointer-events: none;\\n}\\n\\nvideo {\\n  width: 100%;\\n  object-fit: cover;\\n  /* mix-blend-mode: luminosity; */\\n  /* border-radius: $h2; */\\n}\\n\\n.Section_0 {\\n  padding: 2.618rem;\\n  min-height: 50vh;\\n  color: #110e08;\\n  background-color: #e5e5e5;\\n}\\n\\n.Section_1 {\\n  padding: 2.618rem;\\n  min-height: 50vh;\\n  color: white;\\n  background-color: #414141;\\n}\\n\\n.Section_2 {\\n  display: grid;\\n  place-content: center;\\n  color: #e5e5e5;\\n  background-color: #2a2929;\\n}\\n\\n.Section_3 {\\n  color: black;\\n  background-color: #b4b4b4;\\n  padding: 0;\\n}\\n\\n.Section_4 {\\n  color: #110e08;\\n  background-color: #b4b4b4;\\n  padding: 2.618rem;\\n}\\n\\n.Section_5 {\\n  min-height: 50vh;\\n  color: #110e08;\\n  background-color: white;\\n}\\n\\n.Section_6 {\\n  padding: 2.618rem;\\n  min-height: 50vh;\\n  color: #110e08;\\n  background-color: white;\\n}</style>"],"names":[],"mappings":"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"}'
};
const Article = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {variante = 0} = $$props;
  let {id = ""} = $$props;
  let modificador = [
    "Section_0",
    "Section_1",
    "Section_2",
    "Section_3",
    "Section_4",
    "Section_5",
    "Section_6"
  ];
  if ($$props.variante === void 0 && $$bindings.variante && variante !== void 0)
    $$bindings.variante(variante);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  $$result.css.add(css$f);
  return `<section${add_attribute("id", id, 0)} class="${escape(null_to_empty(modificador[variante])) + " svelte-pq1mca"}">${slots.default ? slots.default({}) : ``}
</section>`;
});
var Tabs_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-13vy02n.svelte-13vy02n,.svelte-13vy02n.svelte-13vy02n:before,.svelte-13vy02n.svelte-13vy02n:after{box-sizing:border-box}\nfigure.svelte-13vy02n.svelte-13vy02n,p.svelte-13vy02n.svelte-13vy02n,img.svelte-13vy02n.svelte-13vy02n,small.svelte-13vy02n.svelte-13vy02n,nav.svelte-13vy02n.svelte-13vy02n{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\nnav.svelte-13vy02n.svelte-13vy02n{display:block}\nsmall.svelte-13vy02n.svelte-13vy02n{font-family:"Montserrat", sans-serif;letter-spacing:0;font-weight:500;color:#b4b4b4}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\nsmall.svelte-13vy02n.svelte-13vy02n,p.svelte-13vy02n.svelte-13vy02n{font-size:1rem;line-height:28.8px}\n@media(min-width: 769px){p.svelte-13vy02n.svelte-13vy02n{max-width:769px;margin-left:auto;margin-right:auto}}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\nfigcaption.svelte-13vy02n.svelte-13vy02n{text-align:left}\n@keyframes svelte-13vy02n-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-13vy02n-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-13vy02n-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-13vy02n.svelte-13vy02n:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-13vy02n.svelte-13vy02n::selection{color:black;background-color:white;text-shadow:none}\nimg.svelte-13vy02n.svelte-13vy02n{max-width:100%;height:auto}\nnav.svelte-13vy02n.svelte-13vy02n{display:grid;grid-auto-flow:column}\n@media(min-width: 769px){nav.svelte-13vy02n.svelte-13vy02n{justify-content:center;background-color:#b4b4b4}}\nnav.svelte-13vy02n button.svelte-13vy02n{padding:1rem 1.618rem;border:none;color:#2a2929;font-size:inherit;background-color:#e5e5e5}\nnav.svelte-13vy02n button.svelte-13vy02n:hover{background-color:white;color:#110e08;cursor:pointer}\nfigcaption.svelte-13vy02n.svelte-13vy02n{padding:1rem;text-align:center}\n.active.svelte-13vy02n.svelte-13vy02n{color:black;background-color:white}';
const css$e = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");.svelte-13vy02n.svelte-13vy02n,.svelte-13vy02n.svelte-13vy02n:before,.svelte-13vy02n.svelte-13vy02n:after{box-sizing:border-box}figure.svelte-13vy02n.svelte-13vy02n,p.svelte-13vy02n.svelte-13vy02n,img.svelte-13vy02n.svelte-13vy02n,small.svelte-13vy02n.svelte-13vy02n,nav.svelte-13vy02n.svelte-13vy02n{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}nav.svelte-13vy02n.svelte-13vy02n{display:block}small.svelte-13vy02n.svelte-13vy02n{font-family:"Montserrat", sans-serif;letter-spacing:0;font-weight:500;color:#b4b4b4}@media(min-width: 769px){}@media(min-width: 1023px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 2140px){}@media(min-width: 374px){}small.svelte-13vy02n.svelte-13vy02n,p.svelte-13vy02n.svelte-13vy02n{font-size:1rem;line-height:28.8px}@media(min-width: 769px){p.svelte-13vy02n.svelte-13vy02n{max-width:769px;margin-left:auto;margin-right:auto}}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}figcaption.svelte-13vy02n.svelte-13vy02n{text-align:left}@keyframes svelte-13vy02n-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-13vy02n-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-13vy02n-loading{50%{transform:scale(1.2);opacity:0.7}}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-13vy02n.svelte-13vy02n:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-13vy02n.svelte-13vy02n::selection{color:black;background-color:white;text-shadow:none}img.svelte-13vy02n.svelte-13vy02n{max-width:100%;height:auto}nav.svelte-13vy02n.svelte-13vy02n{display:grid;grid-auto-flow:column}@media(min-width: 769px){nav.svelte-13vy02n.svelte-13vy02n{justify-content:center;background-color:#b4b4b4}}nav.svelte-13vy02n button.svelte-13vy02n{padding:1rem 1.618rem;border:none;color:#2a2929;font-size:inherit;background-color:#e5e5e5}nav.svelte-13vy02n button.svelte-13vy02n:hover{background-color:white;color:#110e08;cursor:pointer}figcaption.svelte-13vy02n.svelte-13vy02n{padding:1rem;text-align:center}.active.svelte-13vy02n.svelte-13vy02n{color:black;background-color:white}',
  map: `{"version":3,"file":"Tabs.svelte","sources":["Tabs.svelte"],"sourcesContent":["<script>\\n    import GridBase from \\"$lib/GridBase.svelte\\"\\n    import Section from \\"$lib/Section.svelte\\"\\n    import Article from \\"$lib/Article.svelte\\"\\n\\texport let tabsContent = [];\\n\\texport let activeTabValue = 1;\\n\\n\\tconst handleClick = (tabValue) => () => (activeTabValue = tabValue);\\n</script>\\n\\n<nav>\\n\\t{#each tabsContent as item}\\n        <button \\n        class={activeTabValue === item.id ? 'active' : ''}\\n        on:click={ handleClick(item.id) }>{item.title}</button>\\n\\t{/each}\\n</nav>\\n\\n{#each tabsContent as item}\\n    {#if activeTabValue == item.id}\\n    <Article variante={6}>\\n        <GridBase variante={3}>\\n            <figure slot=\\"subarea1\\">\\n                <img src={item.img} alt={item.subtitle}>\\n                <figcaption>{item.subtitle}</figcaption>\\n            </figure>\\n            <p>{@html item.content}</p>\\n            <small slot=\\"subarea2\\">{item.tags}</small>\\n        </GridBase>\\n    </Article>\\n    {/if}\\n{/each}\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nsvg {\\n  max-height: 90vh;\\n}\\n\\nbody,\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Montserrat\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 40.896px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 86.4px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 144px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 144px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 57.6px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 28.8px;\\n  }\\n}\\n\\nsmall,\\np,\\ndl {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n\\nhgroup {\\n  margin-bottom: 1.618rem;\\n}\\n\\n@media (min-width: 769px) {\\n  p,\\nh4,\\ndl {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\ndt {\\n  color: #414141;\\n  margin-top: 1rem;\\n}\\n\\ndd {\\n  color: #6c6c6c;\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #b4b4b4;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: #6c6c6c;\\n}\\n\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: #6c6c6c;\\n  border: 1px solid #6c6c6c;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\nimg {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.tachado {\\n  text-decoration: line-through;\\n}\\n\\n.not-clickable {\\n  pointer-events: none;\\n}\\n\\nvideo {\\n  width: 100%;\\n  object-fit: cover;\\n  /* mix-blend-mode: luminosity; */\\n  /* border-radius: $h2; */\\n}\\n\\nnav {\\n  display: grid;\\n  grid-auto-flow: column;\\n}\\n@media (min-width: 769px) {\\n  nav {\\n    justify-content: center;\\n    background-color: #b4b4b4;\\n  }\\n}\\nnav button {\\n  padding: 1rem 1.618rem;\\n  border: none;\\n  color: #2a2929;\\n  font-size: inherit;\\n  background-color: #e5e5e5;\\n}\\nnav button:hover {\\n  background-color: white;\\n  color: #110e08;\\n  cursor: pointer;\\n}\\n\\nfigcaption {\\n  padding: 1rem;\\n  text-align: center;\\n}\\n\\n.active {\\n  color: black;\\n  background-color: white;\\n}</style>\\n"],"names":[],"mappings":"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"}`
};
const Tabs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {tabsContent: tabsContent2 = []} = $$props;
  let {activeTabValue = 1} = $$props;
  if ($$props.tabsContent === void 0 && $$bindings.tabsContent && tabsContent2 !== void 0)
    $$bindings.tabsContent(tabsContent2);
  if ($$props.activeTabValue === void 0 && $$bindings.activeTabValue && activeTabValue !== void 0)
    $$bindings.activeTabValue(activeTabValue);
  $$result.css.add(css$e);
  return `<nav class="${"svelte-13vy02n"}">${each(tabsContent2, (item) => `<button class="${escape(null_to_empty(activeTabValue === item.id ? "active" : "")) + " svelte-13vy02n"}">${escape(item.title)}</button>`)}</nav>

${each(tabsContent2, (item) => `${activeTabValue == item.id ? `${validate_component(Article, "Article").$$render($$result, {variante: 6}, {}, {
    default: () => `${validate_component(GridBase, "GridBase").$$render($$result, {variante: 3}, {}, {
      subarea2: () => `<small slot="${"subarea2"}" class="${"svelte-13vy02n"}">${escape(item.tags)}</small>`,
      subarea1: () => `<figure slot="${"subarea1"}" class="${"svelte-13vy02n"}"><img${add_attribute("src", item.img, 0)}${add_attribute("alt", item.subtitle, 0)} class="${"svelte-13vy02n"}">
                <figcaption class="${"svelte-13vy02n"}">${escape(item.subtitle)}</figcaption>
            </figure>`,
      default: () => `<p class="${"svelte-13vy02n"}">${item.content}</p>
            
        `
    })}
    `
  })}` : ``}`)}`;
});
const tabsContent = [
  {
    id: 0,
    title: "0. Cifra",
    subtitle: "La Cifra",
    img: "./img/ceroo.svg",
    tags: "tag1, tag2, tag3...",
    content: "Cifra viene del \xE1rabe hisp\xE1nico \u1E63\xEDfr que significa 'cero' (eventualmente cualquier d\xEDgito) y tambi\xE9n viene de safara, o del s\xE1nscrito hind\xFA sunya que significan 'estar vac\xEDo'. En la m\xEDstica jud\xEDa la sefir\xE1 tiene que ver con vasija, contenedor o recipiente. Es el infinito incognoscible que se encapsula y se pre\xF1a a s\xED mismo para dejar espacio en su interior a la finitud. <br>Cero es lo sagrado oculto en lo profano. Todo se 'auto cifra' como Nada. La infinitud est\xE1 en lo finito pero s\xF3lo puede caber desde su ocultamiento o auto retirada. La cifra (0) y el arj\xE9 (1) son la esencia m\xEDnima y m\xE1xima de la existencia juntas. Comprender este concepto es comprender la disoluci\xF3n que permite que exista toda coagulaci\xF3n. Cifra (0) es la posibilidad de que el ser de algo (1) ocurra (4)."
  },
  {
    id: 1,
    title: "1. Arj\xE9",
    subtitle: "El Arj\xE9",
    img: "./img/uno.svg",
    tags: "tag1, tag2, tag3...",
    content: "Arj\xE9 proviene de la Antigua Grecia y significa principio, raz\xF3n primordial, originaria, el comienzo del universo o el primer elemento de todas las cosas. Es la matriz o el molde inicial. El arj\xE9 es el 'plano' o 'blueprint' de la Creaci\xF3n que subyace o 'est\xE1 antes' de lo creado. T\xE9rmino 'mimetizado' (2) como Adam Kadm\xF3n seg\xFAn la m\xEDstica jud\xEDa. Todo lo que suceder\xE1 en el futuro ya tiene su ra\xEDz en el acto inicial de la creaci\xF3n. <br> Del arj\xE9 deriva todo, es el ser nuclear de las cosas, su centro. El Arj\xE9 es el deseo, la voluntad, irradiaci\xF3n, consciencia, luz, foco, un punto sin dimensi\xF3n, es la coordenada en el espacio, el logos, prototipo, arquetipo... La Unidad primera emanada de la nada que se mantiene inalterable. La semilla, la gota seminal que contiene ya todo aquello que Es."
  },
  {
    id: 2,
    title: "2. M\xEDmesis",
    subtitle: "La M\xEDmesis",
    img: "./img/dos.svg",
    tags: "tag1, tag2, tag3...",
    content: "En Cabal\xE1, Reshim\xF3 refiere al aroma de algo original que queda y se mantiene en el tiempo y el espacio. Un recuerdo, referencia, memoria, eco esencial de algo anterior. Un registro de informaci\xF3n previo a lo revelado que se percibe como 'otra vez ello'. <br> La mimesis seg\xFAn Arist\xF3teles no es copia o reproducci\xF3n de algo, sino transposici\xF3n de la cosa misma nuevamente. Es la separaci\xF3n ilusoria entre lo mismo en las cosas. Por la naturaleza l\xEDquida del Conocimiento \xE9ste no se puede poseer, s\xF3lo puede ser 'emulado' desde su experiencia. El pensador cree 'inventar' y poseer un concepto dentro de un nombre o un t\xE9rmino, pero es ilusorio porque el 'pensador' tan solo recibe esos pensamientos, no los crea. Por tanto, aunque usemos distintos t\xE9rminos para poder contextualizar temas, son ficticios y su aglomeraci\xF3n gratuita solo crea m\xE1s ru\xEDdo y confusi\xF3n."
  },
  {
    id: 3,
    title: "3. S\xEDmbolo",
    subtitle: "El S\xEDmbolo",
    img: "./img/tres.svg",
    tags: "tag1, tag2, tag3...",
    content: "Se lo define como la representaci\xF3n perceptible de una idea. S\xEDmbolo viene de symballein, symbolon que en el relato griego es la tessera hospitalis o 'tablilla del recuerdo' que correspond\xEDa al objeto que, habiendo sido dividido, pod\xEDa ser reunido, congregado, reencontrado. El s\xEDmbolo es la relaci\xF3n de lo aparentemente diferente; no es simplemente objetivo ni puramente subjetivo, sino que es constitutivamente La relaci\xF3n. El s\xEDmbolo es s\xEDmbolo cuando simboliza, cuando se le reconoce en cuanto tal. Un s\xEDmbolo que no hable directamente a quien lo percibe deja de ser s\xEDmbolo. Es lo que amalgama, la mediaci\xF3n. Meditar es percibir lo simb\xF3lico. Lo real es s\xEDmbolo. Todo se vela y revela como s\xEDmbolo, no s\xF3lo a trav\xE9s de \xE9l sino en \xE9l. Si algo trasciende est\xE1 siendo simb\xF3lico, ya que es el lenguaje de la Creaci\xF3n. "
  },
  {
    id: 4,
    title: "4. Ritmo",
    subtitle: "El Ritmo",
    img: "./img/cuatro.svg",
    tags: "tag1, tag2, tag3...",
    content: "Ritmo proviene del griego Rithmos y del s\xE1nscrito Rta significando Periodicidad en la sucesi\xF3n de una serie de cosas. <br> La Creaci\xF3n surge de un deseo por conocerse (01) y se manifiesta y cristaliza en el acto de olvidarse (10). El 0 se ritma coloc\xE1ndose tras el 1, de modo que lo coagula a trav\xE9s de un proceso. Es el movimiento el que estructura al sistema. 10 es el movimiento de 1+2+3+4. El ritmo es la metaestructura din\xE1mica que sostiene el despliegue de lo que Es, la pauta que lo cierra, la manera en que la finitud puede perpetuarse y sostenerse. La materia es luz que se agota al transcurrir. Luz que se termina y empieza c\xEDclicamente el mundo, el cuerpo, la vida. El sost\xE9n f\xEDsico de la metaf\xEDsico. Completud, c\xFAlmen, demostraci\xF3n y prueba de todo."
  }
];
const TabHeaders = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Tabs, "Tabs").$$render($$result, {tabsContent}, {}, {})}`;
});
const Philosophy = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
${validate_component(Section, "Section").$$render($$result, {id: "philosophy", variante: 3}, {}, {
    default: () => `${validate_component(Cover, "Cover").$$render($$result, {
      variante: 2,
      title: coverData[3].title,
      subtitle: coverData[3].subtitle,
      text: coverData[3].text,
      img: coverData[3].img
    }, {}, {})}`
  })}

${validate_component(Section, "Section").$$render($$result, {variante: 0}, {}, {
    default: () => `${validate_component(GridBase, "GridBase").$$render($$result, {variante: 1}, {}, {
      subarea2: () => `<nav slot="${"subarea2"}"><a href="${"https://slides.com/sergiofores/"}" target="${"_blank"}">Slides</a> 
			<a href="${"https://docs.google.com/document/d/15oUQRghNb_lihCFGJ9Ls0z1PyihD_a18v1V3AohVqQ4/edit?usp=sharing"}" target="${"_blank"}">Libro</a></nav>`,
      subarea1: () => `<hgroup slot="${"subarea1"}"><h2>+0+1234</h2>
			<h3>Hacia el encuentro con todo lo que Es</h3>
			<h4>+0+1234 consiste en una hermen\xE9utica de la Creaci\xF3n que observa experiencialmente sus principios universales. Ancestralmente 5 s\xEDmbolos num\xE9ricos representan las partes de Todo.</h4></hgroup>`,
      default: () => `<svg fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" viewBox="${"0 0 193 169"}"><path fill="${"none"}" stroke="${"#000"}" stroke-width="${".7"}" d="${"M4 165l31-53 30 53H4zm62 0l30-53 31 53H66zm61 0l31-53 30 53h-61zm-92-54l31-53 30 53H35zm61 0l31-53 31 53H96zM66 58L96 5l31 53H66z"}"></path><circle cx="${"168.3"}" cy="${"18.1"}" r="${"6"}" transform="${"translate(-17 -8) scale(.67024)"}"></circle><circle cx="${"214.1"}" cy="${"98.5"}" r="${"6"}" transform="${"translate(-17 -8) scale(.67024)"}"></circle><circle cx="${"259.9"}" cy="${"178.2"}" r="${"6"}" transform="${"translate(-17 -8) scale(.67024)"}"></circle><circle cx="${"305.7"}" cy="${"257.8"}" r="${"6"}" transform="${"translate(-17 -8) scale(.67024)"}"></circle><circle cx="${"214.1"}" cy="${"257.8"}" r="${"6"}" transform="${"translate(-17 -8) scale(.67024)"}"></circle><circle cx="${"123.2"}" cy="${"257.8"}" r="${"6"}" transform="${"translate(-17 -8) scale(.67024)"}"></circle><circle cx="${"30.8"}" cy="${"257.8"}" r="${"6"}" transform="${"translate(-17 -8) scale(.67024)"}"></circle><circle cx="${"76.9"}" cy="${"178.2"}" r="${"6"}" transform="${"translate(-17 -8) scale(.67024)"}"></circle><circle cx="${"168.3"}" cy="${"178.2"}" r="${"6"}" transform="${"translate(-17 -8) scale(.67024)"}"></circle><circle cx="${"123.2"}" cy="${"98.5"}" r="${"6"}" transform="${"translate(-17 -8) scale(.67024)"}"></circle></svg>`
    })}`
  })}

${validate_component(Section, "Section").$$render($$result, {variante: 0}, {}, {
    default: () => `${validate_component(GridBase, "GridBase").$$render($$result, {variante: 0}, {}, {
      subarea2: () => `<div slot="${"subarea2"}"><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex.</p></div>`,
      subarea1: () => `<div slot="${"subarea1"}"><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex.</p></div>`,
      default: () => `<img src="${"./img/logo.svg"}" alt="${""}">`
    })}`
  })}

${validate_component(Section, "Section").$$render($$result, {variante: 0}, {}, {
    default: () => `${validate_component(GridBase, "GridBase").$$render($$result, {variante: 2}, {}, {
      subarea2: () => `<div slot="${"subarea2"}"><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex.</p>
			
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex.</p></div>`,
      subarea1: () => `<div slot="${"subarea1"}"><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex.</p></div>`,
      default: () => `<img src="${"./img/01234_bn.svg"}" alt="${""}">`
    })}`
  })}

${validate_component(Section, "Section").$$render($$result, {variante: 4}, {}, {
    default: () => `${validate_component(GridBase, "GridBase").$$render($$result, {variante: 2}, {}, {
      subarea2: () => `<div slot="${"subarea2"}"><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex.</p>
			
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex.</p></div>`,
      subarea1: () => `<div slot="${"subarea1"}"><p><strong>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex.</strong></p></div>`,
      default: () => `<img src="${"./img/grafico-8.svg"}" alt="${""}">`
    })}`
  })}

${validate_component(Section, "Section").$$render($$result, {id: "tabheaders", variante: 5}, {}, {
    default: () => `${validate_component(TabHeaders, "TabHeaders").$$render($$result, {}, {}, {})}`
  })}`;
});
var index$3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: Philosophy
});
const images = [
  {
    id: 0,
    name: "Primera imagen",
    imgurl: "img/obra/img1.jpg",
    description: "3D Print Painting. 100cm"
  },
  {
    id: 1,
    name: "Red Nature",
    imgurl: "img/obra/img2.jpg",
    description: "3D Print Painting. 100cm"
  },
  {
    id: 2,
    name: "Path",
    imgurl: "img/obra/img3.jpg",
    description: "3D Print Painting. 100cm"
  },
  {
    id: 3,
    name: "Country Road",
    imgurl: "img/obra/img4.jpg",
    description: "3D Print Painting. 100cm"
  },
  {
    id: 4,
    name: "Throughway",
    imgurl: "img/obra/img5.jpg",
    description: "3D Print Painting. 100cm"
  },
  {
    id: 5,
    name: "Golden Pond",
    imgurl: "img/obra/img5.jpg",
    description: "3D Print Painting. 100cm"
  },
  {
    id: 6,
    name: "preUltima imagen",
    imgurl: "img/obra/img6.jpg",
    description: "3D Print Painting. 100cm"
  },
  {
    id: 7,
    name: "Ultima imagen",
    imgurl: "img/obra/img3.jpg",
    description: "3D Print Painting. 100cm"
  }
];
var Slide_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-1yu7aww,.svelte-1yu7aww:before,.svelte-1yu7aww:after{box-sizing:border-box}\ndiv.svelte-1yu7aww,img.svelte-1yu7aww{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@keyframes svelte-1yu7aww-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-1yu7aww-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-1yu7aww-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-1yu7aww:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-1yu7aww::selection{color:black;background-color:white;text-shadow:none}\nimg.svelte-1yu7aww{max-width:100%;height:auto}\n.Slide.svelte-1yu7aww{position:relative;text-align:center;grid-area:slide;padding-top:1.618rem;overflow-y:auto}\n.numbertext.svelte-1yu7aww{color:#6c6c6c;position:absolute;top:1.618rem;left:1.618rem}\nimg.svelte-1yu7aww{width:90%;border-radius:50%}\n@media(min-width: 769px){img.svelte-1yu7aww{width:auto;max-height:90vh}}';
var Thumbnail_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-shjdxg,.svelte-shjdxg:before,.svelte-shjdxg:after{box-sizing:border-box}\nimg.svelte-shjdxg{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@keyframes svelte-shjdxg-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-shjdxg-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-shjdxg-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-shjdxg:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-shjdxg::selection{color:black;background-color:white;text-shadow:none}\nimg.svelte-shjdxg{max-width:100%;height:auto}\n.sample.svelte-shjdxg{opacity:0.4}\n.sample.svelte-shjdxg:hover{opacity:1}\nimg.svelte-shjdxg{padding:0.618rem;border-radius:50%;transition:all 0.1s ease-in-out}\n.cursor.svelte-shjdxg{cursor:pointer}\n.active.svelte-shjdxg{opacity:1;border:1px dotted #2a2929}';
var Caption_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-dw7qg1,.svelte-dw7qg1:before,.svelte-dw7qg1:after{box-sizing:border-box}\ndiv.svelte-dw7qg1,p.svelte-dw7qg1,a.svelte-dw7qg1{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\np.svelte-dw7qg1{font-size:1rem;line-height:28.8px}\n@media(min-width: 769px){p.svelte-dw7qg1{max-width:769px;margin-left:auto;margin-right:auto}}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@keyframes svelte-dw7qg1-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-dw7qg1-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-dw7qg1-loading{50%{transform:scale(1.2);opacity:0.7}}\na.svelte-dw7qg1:hover{animation-name:svelte-dw7qg1-fade;animation-duration:0.3s}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-dw7qg1:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-dw7qg1::selection{color:black;background-color:white;text-shadow:none}\n.caption-container.svelte-dw7qg1{grid-area:captio;display:flex;align-items:center;justify-content:space-between;text-align:center;color:#b4b4b4;background-color:#2a2929;align-self:start}\n.prev.svelte-dw7qg1,.next.svelte-dw7qg1{cursor:pointer;width:auto;padding:1rem;margin-top:0px;color:#6c6c6c;font-size:1.618rem;line-height:40.896px;user-select:none;text-decoration:none}\n.prev.svelte-dw7qg1:hover,.next.svelte-dw7qg1:hover{color:#e5e5e5}\n.prev.svelte-dw7qg1:active,.next.svelte-dw7qg1:active{color:#e8b28a}\np.svelte-dw7qg1{margin-bottom:0}';
var Lightbox_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-1x39c5h,.svelte-1x39c5h:before,.svelte-1x39c5h:after{box-sizing:border-box}\ndiv.svelte-1x39c5h,span.svelte-1x39c5h{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@keyframes svelte-1x39c5h-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-1x39c5h-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-1x39c5h-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-1x39c5h:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-1x39c5h::selection{color:black;background-color:white;text-shadow:none}\n.lightbox.svelte-1x39c5h{position:fixed;z-index:9999;left:0;top:0;display:grid;grid-template-areas:"slide thumb" "slide thumb" "captio thumb";width:100%;height:100vh;overflow:hidden;background-color:#110e08}\n@media(min-width: 1023px){.lightbox.svelte-1x39c5h{overflow:auto;grid-template-areas:"captio slide thumb"}}\n.Thumbnails.svelte-1x39c5h{grid-area:thumb;width:4.236rem;margin-top:4.236rem;overflow-y:auto}\n@media(min-width: 769px){.Thumbnails.svelte-1x39c5h{width:6.854rem;gap:1.618rem;overflow-y:auto}}\n.close.svelte-1x39c5h{padding:1rem;color:#e8b28a;position:absolute;z-index:1000;top:0.618rem;right:1rem;font-size:1.618rem;line-height:40.896px}\n.close.svelte-1x39c5h:hover,.close.svelte-1x39c5h:focus{color:#e5e5e5;cursor:pointer}';
var ImageDisplay_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-631io9,.svelte-631io9:before,.svelte-631io9:after{box-sizing:border-box}\ndiv.svelte-631io9,img.svelte-631io9{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@keyframes svelte-631io9-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-631io9-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-631io9-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-631io9:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-631io9::selection{color:black;background-color:white;text-shadow:none}\nimg.svelte-631io9{max-width:100%;height:auto}\n.DemoGallery.svelte-631io9{padding:2.618rem;text-align:center;display:grid;grid-template-columns:repeat(2, 1fr);gap:1.618rem}\n@media(min-width: 769px){.DemoGallery.svelte-631io9{grid-template-columns:repeat(auto-fill, minmax(133px, 20%));place-content:center;gap:1.618rem}}\nimg.svelte-631io9{border-radius:50%;transition:0.2s;cursor:pointer;place-self:center}\n@media(min-width: 769px){img.svelte-631io9{margin:1.618rem}}\n@media(min-width: 769px){img.svelte-631io9:hover{box-shadow:0 1rem 1.618rem rgba(17, 14, 8, 0.5);transform:scale(1.05)}}';
const css$d = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");.svelte-631io9,.svelte-631io9:before,.svelte-631io9:after{box-sizing:border-box}div.svelte-631io9,img.svelte-631io9{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}@media(min-width: 769px){}@media(min-width: 1023px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 769px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}@keyframes svelte-631io9-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-631io9-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-631io9-loading{50%{transform:scale(1.2);opacity:0.7}}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-631io9:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-631io9::selection{color:black;background-color:white;text-shadow:none}img.svelte-631io9{max-width:100%;height:auto}.DemoGallery.svelte-631io9{padding:2.618rem;text-align:center;display:grid;grid-template-columns:repeat(2, 1fr);gap:1.618rem}@media(min-width: 769px){.DemoGallery.svelte-631io9{grid-template-columns:repeat(auto-fill, minmax(133px, 20%));place-content:center;gap:1.618rem}}img.svelte-631io9{border-radius:50%;transition:0.2s;cursor:pointer;place-self:center}@media(min-width: 769px){img.svelte-631io9{margin:1.618rem}}@media(min-width: 769px){img.svelte-631io9:hover{box-shadow:0 1rem 1.618rem rgba(17, 14, 8, 0.5);transform:scale(1.05)}}',
  map: `{"version":3,"file":"ImageDisplay.svelte","sources":["ImageDisplay.svelte"],"sourcesContent":["<script>\\n\\timport { fade, fly } from 'svelte/transition';\\n\\timport { images } from '$lib/data/imageData.js';\\n</script>\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nsvg {\\n  max-height: 90vh;\\n}\\n\\nbody,\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Montserrat\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 40.896px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 86.4px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 144px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 144px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 57.6px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 28.8px;\\n  }\\n}\\n\\nsmall,\\np,\\ndl {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n\\nhgroup {\\n  margin-bottom: 1.618rem;\\n}\\n\\n@media (min-width: 769px) {\\n  p,\\nh4,\\ndl {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\ndt {\\n  color: #414141;\\n  margin-top: 1rem;\\n}\\n\\ndd {\\n  color: #6c6c6c;\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #b4b4b4;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: #6c6c6c;\\n}\\n\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: #6c6c6c;\\n  border: 1px solid #6c6c6c;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\nimg {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.tachado {\\n  text-decoration: line-through;\\n}\\n\\n.not-clickable {\\n  pointer-events: none;\\n}\\n\\nvideo {\\n  width: 100%;\\n  object-fit: cover;\\n  /* mix-blend-mode: luminosity; */\\n  /* border-radius: $h2; */\\n}\\n\\n.DemoGallery {\\n  padding: 2.618rem;\\n  text-align: center;\\n  display: grid;\\n  grid-template-columns: repeat(2, 1fr);\\n  gap: 1.618rem;\\n}\\n@media (min-width: 769px) {\\n  .DemoGallery {\\n    grid-template-columns: repeat(auto-fill, minmax(133px, 20%));\\n    place-content: center;\\n    gap: 1.618rem;\\n  }\\n}\\n\\nimg {\\n  border-radius: 50%;\\n  transition: 0.2s;\\n  cursor: pointer;\\n  place-self: center;\\n}\\n@media (min-width: 769px) {\\n  img {\\n    margin: 1.618rem;\\n    /* max-width: 50vw; */\\n  }\\n}\\n\\n@media (min-width: 769px) {\\n  img:hover {\\n    box-shadow: 0 1rem 1.618rem rgba(17, 14, 8, 0.5);\\n    transform: scale(1.05);\\n  }\\n}</style>\\n\\n\\n<!-- Image Row -->\\n<div class=\\"DemoGallery\\">\\n\\t{#each images as {id, imgurl, name}}\\n\\t\\t<img {id} src={imgurl} alt={name} on:click />\\n\\t{/each}\\n</div>\\n"],"names":[],"mappings":"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"}`
};
const ImageDisplay = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$d);
  return `
<div class="${"DemoGallery svelte-631io9"}">${each(images, ({id, imgurl, name}) => `<img${add_attribute("id", id, 0)}${add_attribute("src", imgurl, 0)}${add_attribute("alt", name, 0)} class="${"svelte-631io9"}">`)}</div>`;
});
var LightboxGallery_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-1b47u2g,.svelte-1b47u2g:before,.svelte-1b47u2g:after{box-sizing:border-box}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@keyframes svelte-1b47u2g-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-1b47u2g-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-1b47u2g-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-1b47u2g:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-1b47u2g::selection{color:black;background-color:white;text-shadow:none}\naside.svelte-1b47u2g{display:grid;place-items:center;padding-bottom:2.618rem}';
const css$c = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");.svelte-1b47u2g,.svelte-1b47u2g:before,.svelte-1b47u2g:after{box-sizing:border-box}@media(min-width: 769px){}@media(min-width: 1023px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 769px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}@keyframes svelte-1b47u2g-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-1b47u2g-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-1b47u2g-loading{50%{transform:scale(1.2);opacity:0.7}}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-1b47u2g:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-1b47u2g::selection{color:black;background-color:white;text-shadow:none}aside.svelte-1b47u2g{display:grid;place-items:center;padding-bottom:2.618rem}',
  map: `{"version":3,"file":"LightboxGallery.svelte","sources":["LightboxGallery.svelte"],"sourcesContent":["<script>\\n\\timport Lightbox from './Lightbox.svelte';\\n\\timport Button from '$lib/Button.svelte';\\n\\timport ImageDisplay from './ImageDisplay.svelte';\\n\\n\\tlet modalOpen = false;\\n\\t// $: console.log(modalOpen);\\n\\n\\tlet imageShowingIndex = 0;\\n\\n\\tconst handleImgClick = (e) => {\\n\\t\\timageShowingIndex = Number(e.target.id);\\n\\t\\tmodalOpen = true;\\n\\t};\\n</script>\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nsvg {\\n  max-height: 90vh;\\n}\\n\\nbody,\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Montserrat\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 40.896px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 86.4px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 144px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 144px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 57.6px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 28.8px;\\n  }\\n}\\n\\nsmall,\\np,\\ndl {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n\\nhgroup {\\n  margin-bottom: 1.618rem;\\n}\\n\\n@media (min-width: 769px) {\\n  p,\\nh4,\\ndl {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\ndt {\\n  color: #414141;\\n  margin-top: 1rem;\\n}\\n\\ndd {\\n  color: #6c6c6c;\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #b4b4b4;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: #6c6c6c;\\n}\\n\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: #6c6c6c;\\n  border: 1px solid #6c6c6c;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\nimg {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.tachado {\\n  text-decoration: line-through;\\n}\\n\\n.not-clickable {\\n  pointer-events: none;\\n}\\n\\nvideo {\\n  width: 100%;\\n  object-fit: cover;\\n  /* mix-blend-mode: luminosity; */\\n  /* border-radius: $h2; */\\n}\\n\\naside {\\n  display: grid;\\n  place-items: center;\\n  padding-bottom: 2.618rem;\\n}\\n\\n/* .container {\\n\\tposition: relative;\\n} */</style>\\n\\n<!-- The Modal/Lightbox -->\\n{#if modalOpen}\\n\\t<Lightbox on:click={() => (modalOpen = false)} {imageShowingIndex} />\\n{:else}\\n\\t<ImageDisplay on:click={handleImgClick} />\\n{/if}\\n\\n<!-- Button to open Lightbox -->\\n<aside>\\n\\t<Button variante={1} text=\\"View gallery\\" on:click={() => (modalOpen = true)} />\\n</aside>\\n\\n"],"names":[],"mappings":"AAgBmB,SAAS,OAAO,CAAC,AAQpC,QAAQ,IAAI,gHAAgH,CAAC,CAAC,AAC9H,eAAC,CAAE,eAAC,OAAO,CAAE,eAAC,MAAM,AAAC,CAAC,AACpB,UAAU,CAAE,UAAU,AACxB,CAAC,AA6ED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAK3B,CAAC,AACD,MAAM,AAAC,YAAY,MAAM,CAAC,AAAC,CAAC,AAK5B,CAAC,AACD,MAAM,AAAC,YAAY,MAAM,CAAC,AAAC,CAAC,AAK5B,CAAC,AAOD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAK3B,CAAC,AACD,MAAM,AAAC,YAAY,MAAM,CAAC,AAAC,CAAC,AAO5B,CAAC,AAOD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAM3B,CAAC,AAaD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAQ3B,CAAC,AAeD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAK3B,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAK3B,CAAC,AACD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAM3B,CAAC,AAgFD,WAAW,mBAAK,CAAC,AACf,EAAE,AAAC,CAAC,AACF,OAAO,CAAE,GAAG,AACd,CAAC,AACD,IAAI,AAAC,CAAC,AACJ,OAAO,CAAE,CAAC,AACZ,CAAC,AACH,CAAC,AACD,WAAW,oBAAM,CAAC,AAChB,EAAE,AAAC,CAAC,AACF,SAAS,CAAE,WAAW,KAAK,CAAC,CAC5B,OAAO,CAAE,GAAG,AACd,CAAC,AACD,GAAG,AAAC,CAAC,AACH,SAAS,CAAE,WAAW,GAAG,CAAC,CAC1B,OAAO,CAAE,CAAC,AACZ,CAAC,AACD,IAAI,AAAC,CAAC,AACJ,SAAS,CAAE,WAAW,CAAC,CAAC,CACxB,OAAO,CAAE,CAAC,AACZ,CAAC,AACH,CAAC,AACD,WAAW,sBAAQ,CAAC,AAClB,GAAG,AAAC,CAAC,AACH,SAAS,CAAE,MAAM,GAAG,CAAC,CACrB,OAAO,CAAE,GAAG,AACd,CAAC,AACH,CAAC,AAMD,KAAK,AAAC,CAAC,AACL,WAAW,CAAE,aAAa,CAAC,CAAC,kBAAkB,CAAC,CAAC,UAAU,CAAC,CAAC,MAAM,CAAC,CAAC,MAAM,CAAC,CAAC,MAAM,CAAC,CAAC,SAAS,CAAC,CAAC,WAAW,CAAC,CAAC,gBAAgB,CAAC,CAAC,UAAU,AAC1I,CAAC,AAED,eAAC,MAAM,AAAC,CAAC,AACP,aAAa,CAAE,OAAO,CACtB,aAAa,CAAE,MAAM,CACrB,aAAa,CAAE,GAAG,CAClB,aAAa,CAAE,MAAM,AACvB,CAAC,eAED,WAAW,AAAC,CAAC,AACX,KAAK,CAAE,KAAK,CACZ,gBAAgB,CAAE,KAAK,CACvB,WAAW,CAAE,IAAI,AACnB,CAAC,AAsBD,KAAK,eAAC,CAAC,AACL,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,cAAc,CAAE,QAAQ,AAC1B,CAAC"}`
};
const LightboxGallery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$c);
  return `
${`${validate_component(ImageDisplay, "ImageDisplay").$$render($$result, {}, {}, {})}`}


<aside class="${"svelte-1b47u2g"}">${validate_component(Button, "Button").$$render($$result, {variante: 1, text: "View gallery"}, {}, {})}</aside>`;
});
const Artworks = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Section, "Section").$$render($$result, {id: "cover", variante: 3}, {}, {
    default: () => `${validate_component(Cover, "Cover").$$render($$result, {
      title: coverData[1].title,
      subtitle: coverData[1].subtitle,
      text: coverData[1].text,
      img: coverData[1].img
    }, {}, {})}`
  })}



${validate_component(Section, "Section").$$render($$result, {variante: 2}, {}, {
    default: () => `${validate_component(GridBase, "GridBase").$$render($$result, {variante: 4}, {}, {
      subarea2: () => `<div slot="${"subarea2"}"><p>Todo son formas de arte simb\xF3licas en si mismas y, como tales, cumplen una funci\xF3n mediadora capaz de abrirle lo real a la conciencia.</p></div>`,
      subarea1: () => `<div slot="${"subarea1"}"><p>Desde la poes\xEDa de la materia</p></div>`,
      default: () => `<video poster="${"/img/cover3.jpg"}" loop playsinline controls="${"controls"}"><source src="${"/img/desdelapoesiadelamateria.webm"}" type="${"video/webm"}"><source src="${"/img/desdelapoesiadelamateria.mp4"}" type="${"video/mp4"}"><p>Ups! Su navegador no soporta v\xEDdeos HTML5.</p></video>`
    })}`
  })}

${validate_component(Section, "Section").$$render($$result, {id: "lightboxgallery", variante: 3}, {}, {
    default: () => `${validate_component(LightboxGallery, "LightboxGallery").$$render($$result, {}, {}, {})}`
  })}

`;
});
var index$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: Artworks
});
var AboutMe_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-trapwf.svelte-trapwf,.svelte-trapwf.svelte-trapwf:before,.svelte-trapwf.svelte-trapwf:after{box-sizing:border-box}\ndiv.svelte-trapwf.svelte-trapwf,span.svelte-trapwf.svelte-trapwf,h2.svelte-trapwf.svelte-trapwf,img.svelte-trapwf.svelte-trapwf,section.svelte-trapwf.svelte-trapwf{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\nsection.svelte-trapwf.svelte-trapwf{display:block}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\nh2.svelte-trapwf.svelte-trapwf{font-weight:500;font-size:1rem;line-height:28.8px}\n@media(min-width: 374px){h2.svelte-trapwf.svelte-trapwf{font-size:1.618rem;line-height:40.896px}}\n@media(min-width: 2140px){h2.svelte-trapwf.svelte-trapwf{font-size:2.618rem;line-height:57.6px;margin-left:6.854rem;margin-right:6.854rem}}\n@media(min-width: 374px){}\ndl.svelte-trapwf.svelte-trapwf{font-size:1rem;line-height:28.8px}\n@media(min-width: 769px){dl.svelte-trapwf.svelte-trapwf{max-width:769px;margin-left:auto;margin-right:auto}}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@keyframes svelte-trapwf-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-trapwf-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-trapwf-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-trapwf.svelte-trapwf:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-trapwf.svelte-trapwf::selection{color:black;background-color:white;text-shadow:none}\nimg.svelte-trapwf.svelte-trapwf{max-width:100%;height:auto}\n.AboutMe.svelte-trapwf.svelte-trapwf{position:relative;background-color:white;display:grid;align-items:center;text-align:center;padding:2.618rem}\n.AboutMe.svelte-trapwf .AboutMeHeader.svelte-trapwf{max-width:46.971rem;margin-top:1.618rem;margin-bottom:1.618rem;color:rgba(255, 255, 255, 0.65);margin-left:auto;margin-right:auto}\n.AboutMe.svelte-trapwf .AboutMeText.svelte-trapwf{color:#2a2929}\n.Avatar.svelte-trapwf.svelte-trapwf{justify-self:center;max-width:11.089rem;height:11.089rem;border-radius:50%}\n.idioma_switch.svelte-trapwf.svelte-trapwf{position:relative;margin-bottom:1rem;display:flex;justify-items:flex-end}\n.idioma_switch.svelte-trapwf button.svelte-trapwf:nth-child(1){position:absolute;right:0;top:0;border:none;background-color:transparent;color:#e8b28a}\n.idioma_switch.svelte-trapwf button.svelte-trapwf:nth-child(1):hover{color:#6c6c6c;cursor:pointer}';
const css$b = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");.svelte-trapwf.svelte-trapwf,.svelte-trapwf.svelte-trapwf:before,.svelte-trapwf.svelte-trapwf:after{box-sizing:border-box}div.svelte-trapwf.svelte-trapwf,span.svelte-trapwf.svelte-trapwf,h2.svelte-trapwf.svelte-trapwf,img.svelte-trapwf.svelte-trapwf,section.svelte-trapwf.svelte-trapwf{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}section.svelte-trapwf.svelte-trapwf{display:block}@media(min-width: 769px){}@media(min-width: 1023px){}@media(min-width: 2140px){}h2.svelte-trapwf.svelte-trapwf{font-weight:500;font-size:1rem;line-height:28.8px}@media(min-width: 374px){h2.svelte-trapwf.svelte-trapwf{font-size:1.618rem;line-height:40.896px}}@media(min-width: 2140px){h2.svelte-trapwf.svelte-trapwf{font-size:2.618rem;line-height:57.6px;margin-left:6.854rem;margin-right:6.854rem}}@media(min-width: 374px){}dl.svelte-trapwf.svelte-trapwf{font-size:1rem;line-height:28.8px}@media(min-width: 769px){dl.svelte-trapwf.svelte-trapwf{max-width:769px;margin-left:auto;margin-right:auto}}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}@keyframes svelte-trapwf-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-trapwf-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-trapwf-loading{50%{transform:scale(1.2);opacity:0.7}}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-trapwf.svelte-trapwf:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-trapwf.svelte-trapwf::selection{color:black;background-color:white;text-shadow:none}img.svelte-trapwf.svelte-trapwf{max-width:100%;height:auto}.AboutMe.svelte-trapwf.svelte-trapwf{position:relative;background-color:white;display:grid;align-items:center;text-align:center;padding:2.618rem}.AboutMe.svelte-trapwf .AboutMeHeader.svelte-trapwf{max-width:46.971rem;margin-top:1.618rem;margin-bottom:1.618rem;color:rgba(255, 255, 255, 0.65);margin-left:auto;margin-right:auto}.AboutMe.svelte-trapwf .AboutMeText.svelte-trapwf{color:#2a2929}.Avatar.svelte-trapwf.svelte-trapwf{justify-self:center;max-width:11.089rem;height:11.089rem;border-radius:50%}.idioma_switch.svelte-trapwf.svelte-trapwf{position:relative;margin-bottom:1rem;display:flex;justify-items:flex-end}.idioma_switch.svelte-trapwf button.svelte-trapwf:nth-child(1){position:absolute;right:0;top:0;border:none;background-color:transparent;color:#e8b28a}.idioma_switch.svelte-trapwf button.svelte-trapwf:nth-child(1):hover{color:#6c6c6c;cursor:pointer}',
  map: '{"version":3,"file":"AboutMe.svelte","sources":["AboutMe.svelte"],"sourcesContent":["<script>\\n    export let title = \\"\\"\\n    export let subtitle = \\"\\"\\n    export let text = \\"\\"\\n    export let textingles = \\"\\"\\n    export let img = \\"\\"\\n    let idioma_switch = true;\\n</script>\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nsvg {\\n  max-height: 90vh;\\n}\\n\\nbody,\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Montserrat\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 40.896px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 86.4px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 144px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 144px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 57.6px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 28.8px;\\n  }\\n}\\n\\nsmall,\\np,\\ndl {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n\\nhgroup {\\n  margin-bottom: 1.618rem;\\n}\\n\\n@media (min-width: 769px) {\\n  p,\\nh4,\\ndl {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\ndt {\\n  color: #414141;\\n  margin-top: 1rem;\\n}\\n\\ndd {\\n  color: #6c6c6c;\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #b4b4b4;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: #6c6c6c;\\n}\\n\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: #6c6c6c;\\n  border: 1px solid #6c6c6c;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\nimg {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.tachado {\\n  text-decoration: line-through;\\n}\\n\\n.not-clickable {\\n  pointer-events: none;\\n}\\n\\nvideo {\\n  width: 100%;\\n  object-fit: cover;\\n  /* mix-blend-mode: luminosity; */\\n  /* border-radius: $h2; */\\n}\\n\\n.AboutMe {\\n  position: relative;\\n  background-color: white;\\n  display: grid;\\n  align-items: center;\\n  text-align: center;\\n  padding: 2.618rem;\\n}\\n.AboutMe .AboutMeHeader {\\n  max-width: 46.971rem;\\n  margin-top: 1.618rem;\\n  margin-bottom: 1.618rem;\\n  color: rgba(255, 255, 255, 0.65);\\n  margin-left: auto;\\n  margin-right: auto;\\n}\\n.AboutMe .AboutMeText {\\n  color: #2a2929;\\n}\\n.AboutMe p {\\n  color: #6c6c6c;\\n}\\n\\n.Avatar {\\n  justify-self: center;\\n  max-width: 11.089rem;\\n  height: 11.089rem;\\n  border-radius: 50%;\\n}\\n\\n.idioma_switch {\\n  position: relative;\\n  margin-bottom: 1rem;\\n  display: flex;\\n  justify-items: flex-end;\\n}\\n.idioma_switch button:nth-child(1) {\\n  position: absolute;\\n  right: 0;\\n  top: 0;\\n  border: none;\\n  background-color: transparent;\\n  color: #e8b28a;\\n}\\n.idioma_switch button:nth-child(1):hover {\\n  color: #6c6c6c;\\n  cursor: pointer;\\n}</style>\\n\\n<section class=\\"AboutMe\\">\\n\\n    <img class=\\"Avatar\\" src={img} alt={title}>\\n\\n    <h2 class=\\"AboutMeHeader\\">\\n        {title} <br>\\n        <span class=\\"AboutMeText\\">{@html subtitle}</span>\\n    </h2>\\n\\n    <div class=\\"idioma_switch\\">\\n        <button on:click={()=>{\\n            idioma_switch = !idioma_switch;\\n        }}>{#if idioma_switch}English{:else}Espa\xF1ol{/if}</button>\\n    </div>\\n\\n    <dl>\\n    {#if idioma_switch}\\n        {@html text}\\n    {:else}\\n        {@html textingles}\\n    {/if}\\n    </dl>\\n</section>"],"names":[],"mappings":"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"}'
};
const AboutMe = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {title = ""} = $$props;
  let {subtitle = ""} = $$props;
  let {text = ""} = $$props;
  let {textingles = ""} = $$props;
  let {img = ""} = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.textingles === void 0 && $$bindings.textingles && textingles !== void 0)
    $$bindings.textingles(textingles);
  if ($$props.img === void 0 && $$bindings.img && img !== void 0)
    $$bindings.img(img);
  $$result.css.add(css$b);
  return `<section class="${"AboutMe svelte-trapwf"}"><img class="${"Avatar svelte-trapwf"}"${add_attribute("src", img, 0)}${add_attribute("alt", title, 0)}>

    <h2 class="${"AboutMeHeader svelte-trapwf"}">${escape(title)} <br class="${"svelte-trapwf"}">
        <span class="${"AboutMeText svelte-trapwf"}">${subtitle}</span></h2>

    <div class="${"idioma_switch svelte-trapwf"}"><button class="${"svelte-trapwf"}">${`English`}</button></div>

    <dl class="${"svelte-trapwf"}">${`${text}`}</dl></section>`;
});
const aboutmeData = {
  title: "Sergio For\xE9s Raga",
  subtitle: "Siento que todo est\xE1 unido y tambi\xE9n imbricado por una paradoja tan sutil como rotunda. No distingo entre pintura, impresi\xF3n 3D, dise\xF1o web, c\xF3digo o poes\xEDa. Lo que Es es todo a la vez y en eso consiste el proceso de toda la Creaci\xF3n.",
  text: "<dt>1992</dt><dd>Estudios de Artes Aplicadas y procedimientos pict\xF3ricos.</dd> <dt>1997</dt> <dd>Estudios de Arte Electr\xF3nico y Dise\xF1o Digital en EsDi.</dd> <dt>Desde 1999</dt> <dd>Ejerciendo como freelance: Dise\xF1o Gr\xE1fico/Web y desarrollo de temas en Wordpress.</dd> <dt>En 2010</dt> <dd>Me enfoco en Prototipado Frontend y desarrollo de interfaz de usuario.</dd> <dt>2020</dt> <dd>Incorporo la impresi\xF3n 3D en mi proceso creativo y desarrollo una Hermen\xE9utica Hol\xEDstica de la Creaci\xF3n (+0+1234) como v\xEDa trascendental y de autorealizaci\xF3n.</dd>",
  textingles: "<dt>1992</dt><dd>Studied Applied Arts and pictorial procedures, then Electronic Art and Digital Design.</dd> <dt>Since 1999</dt> <dd>Working as a Graphic and Web Designer.</dd> <dt>2010</dt><dd>I focused on Frontend Prototyping and UI development.</dd> <dt>Since 2020</dt> <dd>I incorporate 3D printing into my creative process and develop a Holistic Hermeneutics of Creation (+0+1234) as a transcendental and self-realization way.</dd>",
  img: "./img/avatar.jpg"
};
const AboutMeTxt = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(AboutMe, "AboutMe").$$render($$result, Object.assign(aboutmeData), {}, {})}`;
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
var Skillbar_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-1kfsnp2,.svelte-1kfsnp2:before,.svelte-1kfsnp2:after{box-sizing:border-box}\ndiv.svelte-1kfsnp2,span.svelte-1kfsnp2{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@keyframes svelte-1kfsnp2-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-1kfsnp2-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-1kfsnp2-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-1kfsnp2:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-1kfsnp2::selection{color:black;background-color:white;text-shadow:none}\n.container.svelte-1kfsnp2{width:100%;margin-top:0.618rem;position:relative}\nspan.svelte-1kfsnp2{position:absolute;top:32%;left:8px;color:white}\n.skills.svelte-1kfsnp2{text-align:right;padding:0.618rem 0.618rem 0.618rem 0;color:white;transition:0.5s ease-out}';
const css$a = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");.svelte-1kfsnp2,.svelte-1kfsnp2:before,.svelte-1kfsnp2:after{box-sizing:border-box}div.svelte-1kfsnp2,span.svelte-1kfsnp2{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}@media(min-width: 769px){}@media(min-width: 1023px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 769px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}@keyframes svelte-1kfsnp2-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-1kfsnp2-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-1kfsnp2-loading{50%{transform:scale(1.2);opacity:0.7}}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-1kfsnp2:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-1kfsnp2::selection{color:black;background-color:white;text-shadow:none}.container.svelte-1kfsnp2{width:100%;margin-top:0.618rem;position:relative}span.svelte-1kfsnp2{position:absolute;top:32%;left:8px;color:white}.skills.svelte-1kfsnp2{text-align:right;padding:0.618rem 0.618rem 0.618rem 0;color:white;transition:0.5s ease-out}',
  map: `{"version":3,"file":"Skillbar.svelte","sources":["Skillbar.svelte"],"sourcesContent":["<script>\\n\\t// https://svelte.dev/docs#tweened\\n\\timport {\\n\\t\\ttweened\\n\\t} from 'svelte/motion';\\n\\t// https://svelte.dev/docs#svelte_easing\\n\\timport {\\n\\t\\tbackInOut\\n\\t} from 'svelte/easing';\\n\\n\\texport let skill;\\n\\texport let percent;\\n\\texport let color;\\n\\texport let delTime;\\n\\n\\tconst progress = tweened(30, {\\n\\t\\tdelay: delTime,\\n\\t\\tduration: 2000,\\n\\t\\teasing: backInOut\\n\\t});\\n\\n\\t// Changes the initial value of 30 to percent value in skillLevels array\\n\\tprogress.set(percent)\\n</script>\\n\\n<div class=\\"container\\">\\n\\t<span class=\\"skill\\">{skill}</span>\\n\\t<div class=\\"skills\\" style=\\"width: {$progress}%; background-color: {color}\\">\\n\\t\\t{percent}%\\n\\t</div>\\n</div>\\n\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nsvg {\\n  max-height: 90vh;\\n}\\n\\nbody,\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Montserrat\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 40.896px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 86.4px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 144px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 144px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 57.6px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 28.8px;\\n  }\\n}\\n\\nsmall,\\np,\\ndl {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n\\nhgroup {\\n  margin-bottom: 1.618rem;\\n}\\n\\n@media (min-width: 769px) {\\n  p,\\nh4,\\ndl {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\ndt {\\n  color: #414141;\\n  margin-top: 1rem;\\n}\\n\\ndd {\\n  color: #6c6c6c;\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #b4b4b4;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: #6c6c6c;\\n}\\n\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: #6c6c6c;\\n  border: 1px solid #6c6c6c;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\nimg {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.tachado {\\n  text-decoration: line-through;\\n}\\n\\n.not-clickable {\\n  pointer-events: none;\\n}\\n\\nvideo {\\n  width: 100%;\\n  object-fit: cover;\\n  /* mix-blend-mode: luminosity; */\\n  /* border-radius: $h2; */\\n}\\n\\n.container {\\n  width: 100%;\\n  /* background-color: $grey_2; */\\n  margin-top: 0.618rem;\\n  position: relative;\\n}\\n\\nspan {\\n  position: absolute;\\n  top: 32%;\\n  left: 8px;\\n  color: white;\\n}\\n\\n.skills {\\n  text-align: right;\\n  padding: 0.618rem 0.618rem 0.618rem 0;\\n  /* font-weight: 300; */\\n  color: white;\\n  transition: 0.5s ease-out;\\n}</style>"],"names":[],"mappings":"AAiCmB,SAAS,OAAO,CAAC,AAQpC,QAAQ,IAAI,gHAAgH,CAAC,CAAC,AAC9H,eAAC,CAAE,eAAC,OAAO,CAAE,eAAC,MAAM,AAAC,CAAC,AACpB,UAAU,CAAE,UAAU,AACxB,CAAC,AAEW,kBAAG,CAAE,IAAI,eAAmR,CAAC,AACvS,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CAAC,CACT,SAAS,CAAE,IAAI,CACf,IAAI,CAAE,OAAO,CACb,cAAc,CAAE,QAAQ,CACxB,cAAc,CAAE,kBAAkB,CAClC,sBAAsB,CAAE,WAAW,CACnC,gBAAgB,CAAE,IAAI,AACxB,CAAC,AAiED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAK3B,CAAC,AACD,MAAM,AAAC,YAAY,MAAM,CAAC,AAAC,CAAC,AAK5B,CAAC,AACD,MAAM,AAAC,YAAY,MAAM,CAAC,AAAC,CAAC,AAK5B,CAAC,AAOD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAK3B,CAAC,AACD,MAAM,AAAC,YAAY,MAAM,CAAC,AAAC,CAAC,AAO5B,CAAC,AAOD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAM3B,CAAC,AAaD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAQ3B,CAAC,AAeD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAK3B,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAK3B,CAAC,AACD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAM3B,CAAC,AAgFD,WAAW,mBAAK,CAAC,AACf,EAAE,AAAC,CAAC,AACF,OAAO,CAAE,GAAG,AACd,CAAC,AACD,IAAI,AAAC,CAAC,AACJ,OAAO,CAAE,CAAC,AACZ,CAAC,AACH,CAAC,AACD,WAAW,oBAAM,CAAC,AAChB,EAAE,AAAC,CAAC,AACF,SAAS,CAAE,WAAW,KAAK,CAAC,CAC5B,OAAO,CAAE,GAAG,AACd,CAAC,AACD,GAAG,AAAC,CAAC,AACH,SAAS,CAAE,WAAW,GAAG,CAAC,CAC1B,OAAO,CAAE,CAAC,AACZ,CAAC,AACD,IAAI,AAAC,CAAC,AACJ,SAAS,CAAE,WAAW,CAAC,CAAC,CACxB,OAAO,CAAE,CAAC,AACZ,CAAC,AACH,CAAC,AACD,WAAW,sBAAQ,CAAC,AAClB,GAAG,AAAC,CAAC,AACH,SAAS,CAAE,MAAM,GAAG,CAAC,CACrB,OAAO,CAAE,GAAG,AACd,CAAC,AACH,CAAC,AAMD,KAAK,AAAC,CAAC,AACL,WAAW,CAAE,aAAa,CAAC,CAAC,kBAAkB,CAAC,CAAC,UAAU,CAAC,CAAC,MAAM,CAAC,CAAC,MAAM,CAAC,CAAC,MAAM,CAAC,CAAC,SAAS,CAAC,CAAC,WAAW,CAAC,CAAC,gBAAgB,CAAC,CAAC,UAAU,AAC1I,CAAC,AAED,eAAC,MAAM,AAAC,CAAC,AACP,aAAa,CAAE,OAAO,CACtB,aAAa,CAAE,MAAM,CACrB,aAAa,CAAE,GAAG,CAClB,aAAa,CAAE,MAAM,AACvB,CAAC,eAED,WAAW,AAAC,CAAC,AACX,KAAK,CAAE,KAAK,CACZ,gBAAgB,CAAE,KAAK,CACvB,WAAW,CAAE,IAAI,AACnB,CAAC,AAsBD,UAAU,eAAC,CAAC,AACV,KAAK,CAAE,IAAI,CAEX,UAAU,CAAE,QAAQ,CACpB,QAAQ,CAAE,QAAQ,AACpB,CAAC,AAED,IAAI,eAAC,CAAC,AACJ,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,GAAG,CACR,IAAI,CAAE,GAAG,CACT,KAAK,CAAE,KAAK,AACd,CAAC,AAED,OAAO,eAAC,CAAC,AACP,UAAU,CAAE,KAAK,CACjB,OAAO,CAAE,QAAQ,CAAC,QAAQ,CAAC,QAAQ,CAAC,CAAC,CAErC,KAAK,CAAE,KAAK,CACZ,UAAU,CAAE,IAAI,CAAC,QAAQ,AAC3B,CAAC"}`
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
  $$result.css.add(css$a);
  $$unsubscribe_progress();
  return `<div class="${"container svelte-1kfsnp2"}"><span class="${"skill svelte-1kfsnp2"}">${escape(skill)}</span>
	<div class="${"skills svelte-1kfsnp2"}" style="${"width: " + escape($progress) + "%; background-color: " + escape(color)}">${escape(percent)}%
	</div>
</div>`;
});
const Skillsbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section><h2>Technical Skills</h2>
	${each(skillLevels, ({skill, percent, color, delTime}) => `${validate_component(Skillbar, "Skillbar").$$render($$result, {skill, percent, color, delTime}, {}, {})}`)}</section>`;
});
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Section, "Section").$$render($$result, {id: "aboutmetxt", variante: 3}, {}, {
    default: () => `${validate_component(AboutMeTxt, "AboutMeTxt").$$render($$result, {}, {}, {})}`
  })}

${validate_component(Section, "Section").$$render($$result, {id: "skillsbar", variante: 0}, {}, {
    default: () => `${validate_component(Skillsbar, "Skillsbar").$$render($$result, {}, {}, {})}`
  })}`;
});
var index$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: About
});
var PhiSvg_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-kujcv0.svelte-kujcv0,.svelte-kujcv0.svelte-kujcv0:before,.svelte-kujcv0.svelte-kujcv0:after{box-sizing:border-box}\ndiv.svelte-kujcv0.svelte-kujcv0,h2.svelte-kujcv0.svelte-kujcv0,p.svelte-kujcv0.svelte-kujcv0,main.svelte-kujcv0.svelte-kujcv0{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\nmain.svelte-kujcv0.svelte-kujcv0{display:block}\ninput.svelte-kujcv0.svelte-kujcv0{-webkit-appearance:none;border-radius:0}\nsvg.svelte-kujcv0.svelte-kujcv0{max-height:90vh}\nmain.svelte-kujcv0.svelte-kujcv0{font-family:"Montserrat", sans-serif;letter-spacing:0;font-weight:500;color:#b4b4b4}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\nh2.svelte-kujcv0.svelte-kujcv0{font-weight:500;font-size:1rem;line-height:28.8px}\n@media(min-width: 374px){h2.svelte-kujcv0.svelte-kujcv0{font-size:1.618rem;line-height:40.896px}}\n@media(min-width: 2140px){h2.svelte-kujcv0.svelte-kujcv0{font-size:2.618rem;line-height:57.6px;margin-left:6.854rem;margin-right:6.854rem}}\n@media(min-width: 374px){}\np.svelte-kujcv0.svelte-kujcv0{font-size:1rem;line-height:28.8px}\n@media(min-width: 769px){p.svelte-kujcv0.svelte-kujcv0{max-width:769px;margin-left:auto;margin-right:auto}}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\ninput.svelte-kujcv0.svelte-kujcv0{border:none;font-family:inherit;font-size:1rem;line-height:28.8px;font-weight:inherit;color:#414141}\ninput[type=number].svelte-kujcv0.svelte-kujcv0{color:#b4b4b4;background-color:#110e08;padding:0.618rem}\ninput[type=number].svelte-kujcv0.svelte-kujcv0:focus{outline:none}\ninput[type=range].svelte-kujcv0.svelte-kujcv0{-webkit-appearance:none;width:100%}\ninput[type=range].svelte-kujcv0.svelte-kujcv0:focus{outline:none}\ninput[type=range].svelte-kujcv0.svelte-kujcv0::-webkit-slider-runnable-track{width:100%;height:1px;cursor:pointer;background:#b4b4b4;border-radius:0px}\ninput[type=range].svelte-kujcv0.svelte-kujcv0::-webkit-slider-thumb{height:30px;width:30px;border-radius:50px;background:#b4b4b4;cursor:grab;-webkit-appearance:none;margin-top:-14.5px}\ninput[type=range].svelte-kujcv0.svelte-kujcv0:focus::-webkit-slider-runnable-track{background:#6c6c6c}\n@keyframes svelte-kujcv0-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-kujcv0-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-kujcv0-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-kujcv0.svelte-kujcv0:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-kujcv0.svelte-kujcv0::selection{color:black;background-color:white;text-shadow:none}\nsvg.svelte-kujcv0 circle.svelte-kujcv0{fill:#6c6c6c}\nsvg.svelte-kujcv0 g.svelte-kujcv0{transform:translate(50%, 50%)}\n.PhiSvg.svelte-kujcv0.svelte-kujcv0{display:grid;grid-template-columns:1fr;grid-template-areas:"media" "texto";padding-top:0;padding-right:2.618rem;padding-left:2.618rem;padding-bottom:1.618rem}\n@media(min-width: 769px){.PhiSvg.svelte-kujcv0.svelte-kujcv0{padding-bottom:0;padding-right:0;grid-template-columns:1fr 1.62fr;grid-template-areas:"texto media"}}\n.PhiSvg.svelte-kujcv0 .BannerMedia.svelte-kujcv0{grid-area:media}\n.PhiSvg.svelte-kujcv0 .controls.svelte-kujcv0{margin-bottom:1.618rem;width:100%;display:grid;gap:2.618rem}\n.PhiSvg.svelte-kujcv0 .PhiSvgText.svelte-kujcv0{display:grid;justify-items:start;align-self:center;grid-area:texto}';
const css$9 = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");.svelte-kujcv0.svelte-kujcv0,.svelte-kujcv0.svelte-kujcv0:before,.svelte-kujcv0.svelte-kujcv0:after{box-sizing:border-box}div.svelte-kujcv0.svelte-kujcv0,h2.svelte-kujcv0.svelte-kujcv0,p.svelte-kujcv0.svelte-kujcv0,main.svelte-kujcv0.svelte-kujcv0{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}main.svelte-kujcv0.svelte-kujcv0{display:block}input.svelte-kujcv0.svelte-kujcv0{-webkit-appearance:none;border-radius:0}svg.svelte-kujcv0.svelte-kujcv0{max-height:90vh}main.svelte-kujcv0.svelte-kujcv0{font-family:"Montserrat", sans-serif;letter-spacing:0;font-weight:500;color:#b4b4b4}@media(min-width: 769px){}@media(min-width: 1023px){}@media(min-width: 2140px){}h2.svelte-kujcv0.svelte-kujcv0{font-weight:500;font-size:1rem;line-height:28.8px}@media(min-width: 374px){h2.svelte-kujcv0.svelte-kujcv0{font-size:1.618rem;line-height:40.896px}}@media(min-width: 2140px){h2.svelte-kujcv0.svelte-kujcv0{font-size:2.618rem;line-height:57.6px;margin-left:6.854rem;margin-right:6.854rem}}@media(min-width: 374px){}p.svelte-kujcv0.svelte-kujcv0{font-size:1rem;line-height:28.8px}@media(min-width: 769px){p.svelte-kujcv0.svelte-kujcv0{max-width:769px;margin-left:auto;margin-right:auto}}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}input.svelte-kujcv0.svelte-kujcv0{border:none;font-family:inherit;font-size:1rem;line-height:28.8px;font-weight:inherit;color:#414141}input[type=number].svelte-kujcv0.svelte-kujcv0{color:#b4b4b4;background-color:#110e08;padding:0.618rem}input[type=number].svelte-kujcv0.svelte-kujcv0:focus{outline:none}input[type=range].svelte-kujcv0.svelte-kujcv0{-webkit-appearance:none;width:100%}input[type=range].svelte-kujcv0.svelte-kujcv0:focus{outline:none}input[type=range].svelte-kujcv0.svelte-kujcv0::-webkit-slider-runnable-track{width:100%;height:1px;cursor:pointer;background:#b4b4b4;border-radius:0px}input[type=range].svelte-kujcv0.svelte-kujcv0::-webkit-slider-thumb{height:30px;width:30px;border-radius:50px;background:#b4b4b4;cursor:grab;-webkit-appearance:none;margin-top:-14.5px}input[type=range].svelte-kujcv0.svelte-kujcv0:focus::-webkit-slider-runnable-track{background:#6c6c6c}@keyframes svelte-kujcv0-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-kujcv0-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-kujcv0-loading{50%{transform:scale(1.2);opacity:0.7}}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-kujcv0.svelte-kujcv0:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-kujcv0.svelte-kujcv0::selection{color:black;background-color:white;text-shadow:none}svg.svelte-kujcv0 circle.svelte-kujcv0{fill:#6c6c6c}svg.svelte-kujcv0 g.svelte-kujcv0{transform:translate(50%, 50%)}.PhiSvg.svelte-kujcv0.svelte-kujcv0{display:grid;grid-template-columns:1fr;grid-template-areas:"media" "texto";padding-top:0;padding-right:2.618rem;padding-left:2.618rem;padding-bottom:1.618rem}@media(min-width: 769px){.PhiSvg.svelte-kujcv0.svelte-kujcv0{padding-bottom:0;padding-right:0;grid-template-columns:1fr 1.62fr;grid-template-areas:"texto media"}}.PhiSvg.svelte-kujcv0 .BannerMedia.svelte-kujcv0{grid-area:media}.PhiSvg.svelte-kujcv0 .controls.svelte-kujcv0{margin-bottom:1.618rem;width:100%;display:grid;gap:2.618rem}.PhiSvg.svelte-kujcv0 .PhiSvgText.svelte-kujcv0{display:grid;justify-items:start;align-self:center;grid-area:texto}',
  map: `{"version":3,"file":"PhiSvg.svelte","sources":["PhiSvg.svelte"],"sourcesContent":["<script>\\n\\timport Button from '$lib/Button.svelte';\\n\\timport { tweened } from 'svelte/motion';\\n\\texport let title = '';\\n\\texport let text = '';\\n\\tlet angle = 0.618033988749;\\n\\tlet numDots = 360;\\n\\tlet dotsize = 1.62 * 1.62;\\n\\tlet tweenedCount = tweened(0, {\\n\\t\\tduration: 500,\\n\\t\\tinterpolate: (a, b) => (t) => Math.round((b - a) * t + a)\\n\\t});\\n\\tlet innerWidth, innerHeight, svgWidth;\\n\\texport let variante = 0;\\n\\tlet modificador = ['Light', 'Dark', 'Colored', 'Light2'];\\n\\n\\t$: $tweenedCount = numDots;\\n</script>\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nsvg {\\n  max-height: 90vh;\\n}\\n\\nbody,\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Montserrat\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 40.896px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 86.4px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 144px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 144px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 57.6px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 28.8px;\\n  }\\n}\\n\\nsmall,\\np,\\ndl {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n\\nhgroup {\\n  margin-bottom: 1.618rem;\\n}\\n\\n@media (min-width: 769px) {\\n  p,\\nh4,\\ndl {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\ndt {\\n  color: #414141;\\n  margin-top: 1rem;\\n}\\n\\ndd {\\n  color: #6c6c6c;\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #b4b4b4;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: #6c6c6c;\\n}\\n\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: #6c6c6c;\\n  border: 1px solid #6c6c6c;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\nimg {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.tachado {\\n  text-decoration: line-through;\\n}\\n\\n.not-clickable {\\n  pointer-events: none;\\n}\\n\\nvideo {\\n  width: 100%;\\n  object-fit: cover;\\n  /* mix-blend-mode: luminosity; */\\n  /* border-radius: $h2; */\\n}\\n\\nsvg circle {\\n  fill: #6c6c6c;\\n}\\nsvg g {\\n  transform: translate(50%, 50%);\\n}\\n\\n.PhiSvg {\\n  display: grid;\\n  grid-template-columns: 1fr;\\n  grid-template-areas: \\"media\\" \\"texto\\";\\n  padding-top: 0;\\n  padding-right: 2.618rem;\\n  padding-left: 2.618rem;\\n  padding-bottom: 1.618rem;\\n}\\n@media (min-width: 769px) {\\n  .PhiSvg {\\n    padding-bottom: 0;\\n    padding-right: 0;\\n    grid-template-columns: 1fr 1.62fr;\\n    grid-template-areas: \\"texto media\\";\\n  }\\n}\\n.PhiSvg .BannerMedia {\\n  grid-area: media;\\n}\\n.PhiSvg .controls {\\n  margin-bottom: 1.618rem;\\n  width: 100%;\\n  display: grid;\\n  gap: 2.618rem;\\n}\\n.PhiSvg .PhiSvgText {\\n  display: grid;\\n  justify-items: start;\\n  align-self: center;\\n  grid-area: texto;\\n}</style>\\n\\n<svelte:window bind:innerWidth bind:innerHeight />\\n\\n<main class=\\"PhiSvg\\">\\n\\n\\t<div class=\\"BannerMedia\\">\\n\\n\\t\\t<slot name=\\"hasvideo\\">\\n\\t\\t\\t<svg viewBox=\\"0 0 200 200\\" xmlns=\\"http://www.w3.org/2000/svg\\">\\n\\t\\t\\t\\t<g>\\n\\t\\t\\t\\t\\t{#each { length: $tweenedCount } as _, index (index)}\\n\\t\\t\\t\\t\\t\\t<circle\\n\\t\\t\\t\\t\\t\\t\\tr={dotsize}\\n\\t\\t\\t\\t\\t\\t\\tcx={Math.cos(index * angle * 2 * Math.PI) * index * 0.2}\\n\\t\\t\\t\\t\\t\\t\\tcy={Math.sin(index * angle * 2 * Math.PI) * index * 0.2} />\\n\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t</g>\\n\\t\\t\\t</svg>\\n\\t\\t</slot>\\n\\t</div>\\n\\n\\t<div class=\\"PhiSvgText\\">\\n\\t\\t\\t<h2>{title}</h2>\\n\\t\\t\\t<p>{@html text}</p>\\n\\t\\t<div class=\\"controls\\">\\n\\t\\t\\t<input type=\\"number\\" bind:value={angle} step=\\"0.001\\" />\\n\\t\\t\\t<input type=\\"range\\" bind:value={$tweenedCount} min={0} max={numDots} />\\n\\t\\t</div>\\n\\t\\t<Button\\n\\t\\t\\tvariante={0}\\n\\t\\t\\ttext=\\"Play\\"\\n\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t$tweenedCount = $tweenedCount > 0 ? 0 : numDots;\\n\\t\\t\\t}} />\\n\\t</div>\\n\\n</main>\\n"],"names":[],"mappings":"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"}`
};
let numDots = 360;
const PhiSvg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $tweenedCount, $$unsubscribe_tweenedCount;
  let {title = ""} = $$props;
  let {text = ""} = $$props;
  let angle = 0.618033988749;
  let dotsize = 1.62 * 1.62;
  let tweenedCount = tweened(0, {
    duration: 500,
    interpolate: (a, b) => (t) => Math.round((b - a) * t + a)
  });
  $$unsubscribe_tweenedCount = subscribe(tweenedCount, (value) => $tweenedCount = value);
  let {variante = 0} = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.variante === void 0 && $$bindings.variante && variante !== void 0)
    $$bindings.variante(variante);
  $$result.css.add(css$9);
  set_store_value(tweenedCount, $tweenedCount = numDots, $tweenedCount);
  $$unsubscribe_tweenedCount();
  return `

<main class="${"PhiSvg svelte-kujcv0"}"><div class="${"BannerMedia svelte-kujcv0"}">${slots.hasvideo ? slots.hasvideo({}) : `
			<svg viewBox="${"0 0 200 200"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"svelte-kujcv0"}"><g class="${"svelte-kujcv0"}">${each({length: $tweenedCount}, (_, index2) => `<circle${add_attribute("r", dotsize, 0)}${add_attribute("cx", Math.cos(index2 * angle * 2 * Math.PI) * index2 * 0.2, 0)}${add_attribute("cy", Math.sin(index2 * angle * 2 * Math.PI) * index2 * 0.2, 0)} class="${"svelte-kujcv0"}"></circle>`)}</g></svg>
		`}</div>

	<div class="${"PhiSvgText svelte-kujcv0"}"><h2 class="${"svelte-kujcv0"}">${escape(title)}</h2>
			<p class="${"svelte-kujcv0"}">${text}</p>
		<div class="${"controls svelte-kujcv0"}"><input type="${"number"}" step="${"0.001"}" class="${"svelte-kujcv0"}"${add_attribute("value", angle, 1)}>
			<input type="${"range"}"${add_attribute("min", 0, 0)}${add_attribute("max", numDots, 0)} class="${"svelte-kujcv0"}"${add_attribute("value", $tweenedCount, 1)}></div>
		${validate_component(Button, "Button").$$render($$result, {variante: 0, text: "Play"}, {}, {})}</div></main>`;
});
var Draggable_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-1x7rf1j,.svelte-1x7rf1j:before,.svelte-1x7rf1j:after{box-sizing:border-box}\ndiv.svelte-1x7rf1j{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@keyframes svelte-1x7rf1j-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-1x7rf1j-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-1x7rf1j-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-1x7rf1j:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-1x7rf1j::selection{color:black;background-color:white;text-shadow:none}\n.draggable.svelte-1x7rf1j{user-select:none;cursor:move;z-index:1000;font-size:4.236rem;line-height:86.4px}';
const css$8 = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");.svelte-1x7rf1j,.svelte-1x7rf1j:before,.svelte-1x7rf1j:after{box-sizing:border-box}div.svelte-1x7rf1j{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}@media(min-width: 769px){}@media(min-width: 1023px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 769px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}@keyframes svelte-1x7rf1j-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-1x7rf1j-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-1x7rf1j-loading{50%{transform:scale(1.2);opacity:0.7}}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-1x7rf1j:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-1x7rf1j::selection{color:black;background-color:white;text-shadow:none}.draggable.svelte-1x7rf1j{user-select:none;cursor:move;z-index:1000;font-size:4.236rem;line-height:86.4px}',
  map: `{"version":3,"file":"Draggable.svelte","sources":["Draggable.svelte"],"sourcesContent":["<script>\\n    import {fade} from 'svelte/transition';\\n    export let x = 0\\n    export let y = 0\\n    let moving = false\\n\\n    const start = () => {\\n        moving = true\\n    }\\n    function stop() {\\n        moving = false\\n    }\\n\\n    function move(e) {\\n        if (moving) {\\n            x += e.movementX * 2.5\\n            y += e.movementY * 2.5\\n        }\\n    }\\n</script>\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nsvg {\\n  max-height: 90vh;\\n}\\n\\nbody,\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Montserrat\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 40.896px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 86.4px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 144px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 144px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 57.6px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 28.8px;\\n  }\\n}\\n\\nsmall,\\np,\\ndl {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n\\nhgroup {\\n  margin-bottom: 1.618rem;\\n}\\n\\n@media (min-width: 769px) {\\n  p,\\nh4,\\ndl {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\ndt {\\n  color: #414141;\\n  margin-top: 1rem;\\n}\\n\\ndd {\\n  color: #6c6c6c;\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #b4b4b4;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: #6c6c6c;\\n}\\n\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: #6c6c6c;\\n  border: 1px solid #6c6c6c;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\nimg {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.tachado {\\n  text-decoration: line-through;\\n}\\n\\n.not-clickable {\\n  pointer-events: none;\\n}\\n\\nvideo {\\n  width: 100%;\\n  object-fit: cover;\\n  /* mix-blend-mode: luminosity; */\\n  /* border-radius: $h2; */\\n}\\n\\n.draggable {\\n  user-select: none;\\n  cursor: move;\\n  z-index: 1000;\\n  font-size: 4.236rem;\\n  line-height: 86.4px;\\n}</style>\\n\\n<svelte:window on:mouseup={stop} />\\n<text x={x} y={y} \\n    font-size=\\"55\\"\\n    on:mousedown={start}\\n    on:mousemove={move}\\n    class=\\"draggable\\"\\n>\\n{#if moving}\\n    <div transition:fade>xxx</div>\\n{/if}\\n<slot></slot>\\n</text>"],"names":[],"mappings":"AAqBmB,SAAS,OAAO,CAAC,AAQpC,QAAQ,IAAI,gHAAgH,CAAC,CAAC,AAC9H,eAAC,CAAE,eAAC,OAAO,CAAE,eAAC,MAAM,AAAC,CAAC,AACpB,UAAU,CAAE,UAAU,AACxB,CAAC,AAEW,GAAG,eAAyR,CAAC,AACvS,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CAAC,CACT,SAAS,CAAE,IAAI,CACf,IAAI,CAAE,OAAO,CACb,cAAc,CAAE,QAAQ,CACxB,cAAc,CAAE,kBAAkB,CAClC,sBAAsB,CAAE,WAAW,CACnC,gBAAgB,CAAE,IAAI,AACxB,CAAC,AAiED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAK3B,CAAC,AACD,MAAM,AAAC,YAAY,MAAM,CAAC,AAAC,CAAC,AAK5B,CAAC,AACD,MAAM,AAAC,YAAY,MAAM,CAAC,AAAC,CAAC,AAK5B,CAAC,AAOD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAK3B,CAAC,AACD,MAAM,AAAC,YAAY,MAAM,CAAC,AAAC,CAAC,AAO5B,CAAC,AAOD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAM3B,CAAC,AAaD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAQ3B,CAAC,AAeD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAK3B,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAK3B,CAAC,AACD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAM3B,CAAC,AAgFD,WAAW,mBAAK,CAAC,AACf,EAAE,AAAC,CAAC,AACF,OAAO,CAAE,GAAG,AACd,CAAC,AACD,IAAI,AAAC,CAAC,AACJ,OAAO,CAAE,CAAC,AACZ,CAAC,AACH,CAAC,AACD,WAAW,oBAAM,CAAC,AAChB,EAAE,AAAC,CAAC,AACF,SAAS,CAAE,WAAW,KAAK,CAAC,CAC5B,OAAO,CAAE,GAAG,AACd,CAAC,AACD,GAAG,AAAC,CAAC,AACH,SAAS,CAAE,WAAW,GAAG,CAAC,CAC1B,OAAO,CAAE,CAAC,AACZ,CAAC,AACD,IAAI,AAAC,CAAC,AACJ,SAAS,CAAE,WAAW,CAAC,CAAC,CACxB,OAAO,CAAE,CAAC,AACZ,CAAC,AACH,CAAC,AACD,WAAW,sBAAQ,CAAC,AAClB,GAAG,AAAC,CAAC,AACH,SAAS,CAAE,MAAM,GAAG,CAAC,CACrB,OAAO,CAAE,GAAG,AACd,CAAC,AACH,CAAC,AAMD,KAAK,AAAC,CAAC,AACL,WAAW,CAAE,aAAa,CAAC,CAAC,kBAAkB,CAAC,CAAC,UAAU,CAAC,CAAC,MAAM,CAAC,CAAC,MAAM,CAAC,CAAC,MAAM,CAAC,CAAC,SAAS,CAAC,CAAC,WAAW,CAAC,CAAC,gBAAgB,CAAC,CAAC,UAAU,AAC1I,CAAC,AAED,eAAC,MAAM,AAAC,CAAC,AACP,aAAa,CAAE,OAAO,CACtB,aAAa,CAAE,MAAM,CACrB,aAAa,CAAE,GAAG,CAClB,aAAa,CAAE,MAAM,AACvB,CAAC,eAED,WAAW,AAAC,CAAC,AACX,KAAK,CAAE,KAAK,CACZ,gBAAgB,CAAE,KAAK,CACvB,WAAW,CAAE,IAAI,AACnB,CAAC,AAsBD,UAAU,eAAC,CAAC,AACV,WAAW,CAAE,IAAI,CACjB,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,QAAQ,CACnB,WAAW,CAAE,MAAM,AACrB,CAAC"}`
};
const Draggable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {x: x2 = 0} = $$props;
  let {y: y2 = 0} = $$props;
  if ($$props.x === void 0 && $$bindings.x && x2 !== void 0)
    $$bindings.x(x2);
  if ($$props.y === void 0 && $$bindings.y && y2 !== void 0)
    $$bindings.y(y2);
  $$result.css.add(css$8);
  return `
<text${add_attribute("x", x2, 0)}${add_attribute("y", y2, 0)} font-size="${"55"}" class="${"draggable svelte-1x7rf1j"}">${``}${slots.default ? slots.default({}) : ``}</text>`;
});
var Form_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-75cf6k,.svelte-75cf6k:before,.svelte-75cf6k:after{box-sizing:border-box}\nform.svelte-75cf6k{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@keyframes svelte-75cf6k-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-75cf6k-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-75cf6k-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-75cf6k:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-75cf6k::selection{color:black;background-color:white;text-shadow:none}\n.tachado.svelte-75cf6k{text-decoration:line-through}\n.not-clickable.svelte-75cf6k{pointer-events:none}\n.Variante_0.svelte-75cf6k{display:flex;flex-direction:row}\n.Form_1.svelte-75cf6k{margin-inline:auto}\n@media(min-width: 1023px){.Form_1.svelte-75cf6k{display:grid;grid-template-areas:"input button"}}\n.Form_1.svelte-75cf6k:nth-child(1){grid-area:input}\n.Form_1.svelte-75cf6k:nth-child(2){grid-area:button;width:fit-content}';
const css$7 = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");.svelte-75cf6k,.svelte-75cf6k:before,.svelte-75cf6k:after{box-sizing:border-box}form.svelte-75cf6k{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}@media(min-width: 769px){}@media(min-width: 1023px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 769px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}@keyframes svelte-75cf6k-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-75cf6k-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-75cf6k-loading{50%{transform:scale(1.2);opacity:0.7}}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-75cf6k:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-75cf6k::selection{color:black;background-color:white;text-shadow:none}.tachado.svelte-75cf6k{text-decoration:line-through}.not-clickable.svelte-75cf6k{pointer-events:none}.Variante_0.svelte-75cf6k{display:flex;flex-direction:row}.Form_1.svelte-75cf6k{margin-inline:auto}@media(min-width: 1023px){.Form_1.svelte-75cf6k{display:grid;grid-template-areas:"input button"}}.Form_1.svelte-75cf6k:nth-child(1){grid-area:input}.Form_1.svelte-75cf6k:nth-child(2){grid-area:button;width:fit-content}',
  map: '{"version":3,"file":"Form.svelte","sources":["Form.svelte"],"sourcesContent":["<script>\\n    export let name = \\"My form group\\";\\n    export let variante = 0;\\n    const modificador = [\\n        \\"Variante_0\\",\\n        \\"Form_1\\"\\n    ]\\n</script>\\n\\n<form \\n    {name} \\n    on:submit|preventDefault\\n    class={modificador[variante]}\\n>\\n    <slot />\\n</form>\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nsvg {\\n  max-height: 90vh;\\n}\\n\\nbody,\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Montserrat\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 40.896px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 86.4px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 144px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 144px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 57.6px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 28.8px;\\n  }\\n}\\n\\nsmall,\\np,\\ndl {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n\\nhgroup {\\n  margin-bottom: 1.618rem;\\n}\\n\\n@media (min-width: 769px) {\\n  p,\\nh4,\\ndl {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\ndt {\\n  color: #414141;\\n  margin-top: 1rem;\\n}\\n\\ndd {\\n  color: #6c6c6c;\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #b4b4b4;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: #6c6c6c;\\n}\\n\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: #6c6c6c;\\n  border: 1px solid #6c6c6c;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\nimg {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.tachado {\\n  text-decoration: line-through;\\n}\\n\\n.not-clickable {\\n  pointer-events: none;\\n}\\n\\nvideo {\\n  width: 100%;\\n  object-fit: cover;\\n  /* mix-blend-mode: luminosity; */\\n  /* border-radius: $h2; */\\n}\\n\\n.Variante_0 {\\n  display: flex;\\n  flex-direction: row;\\n}\\n\\n.Form_1 {\\n  margin-inline: auto;\\n}\\n@media (min-width: 1023px) {\\n  .Form_1 {\\n    display: grid;\\n    grid-template-areas: \\"input button\\";\\n  }\\n}\\n.Form_1:nth-child(1) {\\n  grid-area: input;\\n}\\n.Form_1:nth-child(2) {\\n  grid-area: button;\\n  width: fit-content;\\n}</style>"],"names":[],"mappings":"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"}'
};
const Form = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {name = "My form group"} = $$props;
  let {variante = 0} = $$props;
  const modificador = ["Variante_0", "Form_1"];
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.variante === void 0 && $$bindings.variante && variante !== void 0)
    $$bindings.variante(variante);
  $$result.css.add(css$7);
  return `<form${add_attribute("name", name, 0)} class="${escape(null_to_empty(modificador[variante])) + " svelte-75cf6k"}">${slots.default ? slots.default({}) : ``}
</form>`;
});
var Input_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-7pbckl,.svelte-7pbckl:before,.svelte-7pbckl:after{box-sizing:border-box}\ninput.svelte-7pbckl{-webkit-appearance:none;border-radius:0}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\ninput.svelte-7pbckl{border:none;font-family:inherit;font-size:1rem;line-height:28.8px;font-weight:inherit;color:#414141}\n@keyframes svelte-7pbckl-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-7pbckl-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-7pbckl-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-7pbckl:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-7pbckl::selection{color:black;background-color:white;text-shadow:none}\n.svelte-7pbckl:focus{outline:none}\ninput.svelte-7pbckl{font-size:1.618rem;line-height:40.896px;padding:1rem;border:none;background-color:white}\n@media(min-width: 1023px){input.svelte-7pbckl{border-top-left-radius:1.618rem;border-bottom-left-radius:1.618rem}}\ninput.svelte-7pbckl:focus-within{background-color:#e8b28a;color:#110e08}\ninput.svelte-7pbckl:focus-within::placeholder{color:transparent}\ninput.svelte-7pbckl::placeholder{color:#2a2929}';
const css$6 = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");.svelte-7pbckl,.svelte-7pbckl:before,.svelte-7pbckl:after{box-sizing:border-box}input.svelte-7pbckl{-webkit-appearance:none;border-radius:0}@media(min-width: 769px){}@media(min-width: 1023px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 769px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}input.svelte-7pbckl{border:none;font-family:inherit;font-size:1rem;line-height:28.8px;font-weight:inherit;color:#414141}@keyframes svelte-7pbckl-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-7pbckl-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-7pbckl-loading{50%{transform:scale(1.2);opacity:0.7}}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-7pbckl:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-7pbckl::selection{color:black;background-color:white;text-shadow:none}.svelte-7pbckl:focus{outline:none}input.svelte-7pbckl{font-size:1.618rem;line-height:40.896px;padding:1rem;border:none;background-color:white}@media(min-width: 1023px){input.svelte-7pbckl{border-top-left-radius:1.618rem;border-bottom-left-radius:1.618rem}}input.svelte-7pbckl:focus-within{background-color:#e8b28a;color:#110e08}input.svelte-7pbckl:focus-within::placeholder{color:transparent}input.svelte-7pbckl::placeholder{color:#2a2929}',
  map: `{"version":3,"file":"Input.svelte","sources":["Input.svelte"],"sourcesContent":["<script>\\n\\texport let value = '';\\n\\texport let placeholder = '\\"...\u05D1\u05E8\u05D0\u05E9\u05D9\u05EA \u05D1\u05E8\u05D0 \u05D0\u05DC\u05D4\u05D9\u05DD\\"';\\n\\tconst onInput = (e) => (value = e.target.value);\\n</script>\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nsvg {\\n  max-height: 90vh;\\n}\\n\\nbody,\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Montserrat\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 40.896px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 86.4px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 144px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 144px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 57.6px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 28.8px;\\n  }\\n}\\n\\nsmall,\\np,\\ndl {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n\\nhgroup {\\n  margin-bottom: 1.618rem;\\n}\\n\\n@media (min-width: 769px) {\\n  p,\\nh4,\\ndl {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\ndt {\\n  color: #414141;\\n  margin-top: 1rem;\\n}\\n\\ndd {\\n  color: #6c6c6c;\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #b4b4b4;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: #6c6c6c;\\n}\\n\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: #6c6c6c;\\n  border: 1px solid #6c6c6c;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\nimg {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.tachado {\\n  text-decoration: line-through;\\n}\\n\\n.not-clickable {\\n  pointer-events: none;\\n}\\n\\nvideo {\\n  width: 100%;\\n  object-fit: cover;\\n  /* mix-blend-mode: luminosity; */\\n  /* border-radius: $h2; */\\n}\\n\\n*:focus {\\n  outline: none;\\n}\\n\\ninput {\\n  font-size: 1.618rem;\\n  line-height: 40.896px;\\n  padding: 1rem;\\n  border: none;\\n  background-color: white;\\n}\\n@media (min-width: 1023px) {\\n  input {\\n    border-top-left-radius: 1.618rem;\\n    border-bottom-left-radius: 1.618rem;\\n  }\\n}\\ninput:focus-within {\\n  background-color: #e8b28a;\\n  color: #110e08;\\n}\\ninput:focus-within::placeholder {\\n  color: transparent;\\n}\\ninput::placeholder {\\n  color: #2a2929;\\n}</style>\\n\\n<input {value} {placeholder} type=\\"\\" name=\\"\\" on:input={onInput} />\\n"],"names":[],"mappings":"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"}`
};
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {value = ""} = $$props;
  let {placeholder = '"...\u05D1\u05E8\u05D0\u05E9\u05D9\u05EA \u05D1\u05E8\u05D0 \u05D0\u05DC\u05D4\u05D9\u05DD"'} = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  $$result.css.add(css$6);
  return `<input${add_attribute("value", value, 0)}${add_attribute("placeholder", placeholder, 0)} type="${""}" name="${""}" class="${"svelte-7pbckl"}">`;
});
var T0T_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-eqgbnf,.svelte-eqgbnf:before,.svelte-eqgbnf:after{box-sizing:border-box}\ndiv.svelte-eqgbnf,h2.svelte-eqgbnf,p.svelte-eqgbnf{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\nsvg.svelte-eqgbnf{max-height:90vh}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\nh2.svelte-eqgbnf{font-weight:500;font-size:1rem;line-height:28.8px}\n@media(min-width: 374px){h2.svelte-eqgbnf{font-size:1.618rem;line-height:40.896px}}\n@media(min-width: 2140px){h2.svelte-eqgbnf{font-size:2.618rem;line-height:57.6px;margin-left:6.854rem;margin-right:6.854rem}}\n@media(min-width: 374px){}\np.svelte-eqgbnf{font-size:1rem;line-height:28.8px}\nhgroup.svelte-eqgbnf{margin-bottom:1.618rem}\n@media(min-width: 769px){p.svelte-eqgbnf{max-width:769px;margin-left:auto;margin-right:auto}}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@keyframes svelte-eqgbnf-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-eqgbnf-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-eqgbnf-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-eqgbnf:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-eqgbnf::selection{color:black;background-color:white;text-shadow:none}\ncircle.svelte-eqgbnf{fill:none;stroke:#b4b4b4;stroke-width:4}\nhgroup.svelte-eqgbnf,p.svelte-eqgbnf{text-align:center}';
const css$5 = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");.svelte-eqgbnf,.svelte-eqgbnf:before,.svelte-eqgbnf:after{box-sizing:border-box}div.svelte-eqgbnf,h2.svelte-eqgbnf,p.svelte-eqgbnf{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}svg.svelte-eqgbnf{max-height:90vh}@media(min-width: 769px){}@media(min-width: 1023px){}@media(min-width: 2140px){}h2.svelte-eqgbnf{font-weight:500;font-size:1rem;line-height:28.8px}@media(min-width: 374px){h2.svelte-eqgbnf{font-size:1.618rem;line-height:40.896px}}@media(min-width: 2140px){h2.svelte-eqgbnf{font-size:2.618rem;line-height:57.6px;margin-left:6.854rem;margin-right:6.854rem}}@media(min-width: 374px){}p.svelte-eqgbnf{font-size:1rem;line-height:28.8px}hgroup.svelte-eqgbnf{margin-bottom:1.618rem}@media(min-width: 769px){p.svelte-eqgbnf{max-width:769px;margin-left:auto;margin-right:auto}}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}@keyframes svelte-eqgbnf-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-eqgbnf-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-eqgbnf-loading{50%{transform:scale(1.2);opacity:0.7}}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-eqgbnf:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-eqgbnf::selection{color:black;background-color:white;text-shadow:none}circle.svelte-eqgbnf{fill:none;stroke:#b4b4b4;stroke-width:4}hgroup.svelte-eqgbnf,p.svelte-eqgbnf{text-align:center}',
  map: `{"version":3,"file":"T0T.svelte","sources":["T0T.svelte"],"sourcesContent":["<script>\\n  // import {fade} from 'svelte/transition';\\n  import GridBase from \\"$lib/GridBase.svelte\\";\\n  import Draggable from \\"./Draggable.svelte\\";\\n  import Form from \\"$lib/Form.svelte\\";\\n  import Input from \\"$lib/Input.svelte\\";\\n  import Button from \\"$lib/Button.svelte\\";\\n\\n  let x = 0\\n  let y = 0;\\n  let new_items = [];\\n  let value = \\"\\";\\n  let base_unit = 1000\\n  let canvas = { width: base_unit, height: base_unit }\\n  let radio_peque = canvas.width/4;\\n  let radio_grande = canvas.width/2;\\n  let circles = [\\n    { id: \\"circulogrande\\", cx: radio_grande, cy: radio_grande, r: radio_grande },\\n    { id: \\"circuloizda\\", cx: radio_peque, cy: radio_grande, r: radio_peque },\\n    { id: \\"circulodcha\\", cx: radio_peque*3, cy: radio_grande, r: radio_peque }\\n  ]\\n  let items = [\\n    { id: 0, xpos: 0, ypos: 500 },\\n    { id: 1, xpos: 500, ypos: 500 },\\n    { id: 2, xpos: 750, ypos: 750 },\\n    { id: 3, xpos: 750, ypos: 250 },\\n    { id: 4, xpos: 1000, ypos: 500 }\\n  ]\\n  const addItem = () => {\\n    // Anade al array el texto del input \\n    new_items = [...new_items, value]\\n  }\\n\\n  let svg = null;\\n  const save = (svg, name = 'your-01234-map.svg') => {\\n\\t\\tsvg.setAttribute(\\"xmlns\\", \\"http://www.w3.org/2000/svg\\");\\n\\t\\tlet svgData = svg.outerHTML;\\n\\t\\tlet preface = '<?xml version=\\"1.0\\" standalone=\\"no\\"?>\\\\r\\\\n';\\n\\t\\tlet svgBlob = new Blob([preface, svgData], {type:\\"image/svg+xml;charset=utf-8\\"});\\n\\t\\tlet svgUrl = URL.createObjectURL(svgBlob);\\n\\t\\tlet downloadLink = document.createElement(\\"a\\");\\n\\t\\tdownloadLink.href = svgUrl;\\n\\t\\tdownloadLink.download = name;\\n\\t\\tdocument.body.appendChild(downloadLink);\\n\\t\\tdownloadLink.click();\\n\\t\\tdocument.body.removeChild(downloadLink);\\n}\\n</script>\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nsvg {\\n  max-height: 90vh;\\n}\\n\\nbody,\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Montserrat\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 40.896px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 86.4px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 144px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 144px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 57.6px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 28.8px;\\n  }\\n}\\n\\nsmall,\\np,\\ndl {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n\\nhgroup {\\n  margin-bottom: 1.618rem;\\n}\\n\\n@media (min-width: 769px) {\\n  p,\\nh4,\\ndl {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\ndt {\\n  color: #414141;\\n  margin-top: 1rem;\\n}\\n\\ndd {\\n  color: #6c6c6c;\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #b4b4b4;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: #6c6c6c;\\n}\\n\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: #6c6c6c;\\n  border: 1px solid #6c6c6c;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\nimg {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.tachado {\\n  text-decoration: line-through;\\n}\\n\\n.not-clickable {\\n  pointer-events: none;\\n}\\n\\nvideo {\\n  width: 100%;\\n  object-fit: cover;\\n  /* mix-blend-mode: luminosity; */\\n  /* border-radius: $h2; */\\n}\\n\\ntext {\\n  fill: black;\\n  font-family: \\"Montserrat\\", sans-serif;\\n  font-weight: bold;\\n}\\n\\ncircle {\\n  fill: none;\\n  stroke: #b4b4b4;\\n  stroke-width: 4;\\n}\\n\\nhgroup, p {\\n  text-align: center;\\n}</style>\\n\\n<GridBase variante={1}>\\n  <svg bind:this={svg} viewBox=\\"-1 -1 {canvas.width} {canvas.height}\\">\\n    <g transform=\\"translate(150,150) scale(0.7)\\" >\\n      {#each circles as circle}\\n      <circle cx={circle.cx} cy={circle.cy} r={circle.r} id={circle.id} fill=\\"none\\" stroke=\\"black\\"/>\\n      {/each}\\n      {#each items as item}\\n        <Draggable x={item.xpos} y={item.ypos}>{item.id}</Draggable>\\n      {/each}\\n      {#each new_items as new_i}\\n        <Draggable {x} {y}>{new_i}</Draggable>\\n      {/each}\\n    </g>\\n  </svg>\\n\\n  <div slot=\\"subarea1\\">\\n    <hgroup>\\n      <h2>Meta-Mapa +0+1234</h2>\\n      <p>Cualquier palabra que escribas se ordena naturalmente en una de estas zonas.</p>\\n    </hgroup>\\n    <Form on:submit={addItem} variante={1}>\\n      <Input bind:value placeholder=\\"Your word\\"/>\\n      <Button variante={6} text=\\"Add\\" />\\n    </Form>\\n  </div>\\n  <div slot=\\"subarea2\\">\\n    <Button on:click={() => save(svg)} variante={1} text=\\"Download svg\\" />\\n  </div>\\n</GridBase>"],"names":[],"mappings":"AAiDmB,SAAS,OAAO,CAAC,AAQpC,QAAQ,IAAI,gHAAgH,CAAC,CAAC,AAC9H,cAAC,CAAE,cAAC,OAAO,CAAE,cAAC,MAAM,AAAC,CAAC,AACpB,UAAU,CAAE,UAAU,AACxB,CAAC,AAEW,iBAAG,CAAoC,gBAAE,CAAkB,CAAC,cAAgO,CAAC,AACvS,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CAAC,CACT,SAAS,CAAE,IAAI,CACf,IAAI,CAAE,OAAO,CACb,cAAc,CAAE,QAAQ,CACxB,cAAc,CAAE,kBAAkB,CAClC,sBAAsB,CAAE,WAAW,CACnC,gBAAgB,CAAE,IAAI,AACxB,CAAC,AAiCD,GAAG,cAAC,CAAC,AACH,UAAU,CAAE,IAAI,AAClB,CAAC,AA8BD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAK3B,CAAC,AACD,MAAM,AAAC,YAAY,MAAM,CAAC,AAAC,CAAC,AAK5B,CAAC,AACD,MAAM,AAAC,YAAY,MAAM,CAAC,AAAC,CAAC,AAK5B,CAAC,AAED,EAAE,cAAC,CAAC,AACF,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,MAAM,AACrB,CAAC,AACD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,EAAE,cAAC,CAAC,AACF,SAAS,CAAE,QAAQ,CACnB,WAAW,CAAE,QAAQ,AACvB,CAAC,AACH,CAAC,AACD,MAAM,AAAC,YAAY,MAAM,CAAC,AAAC,CAAC,AAC1B,EAAE,cAAC,CAAC,AACF,SAAS,CAAE,QAAQ,CACnB,WAAW,CAAE,MAAM,CACnB,WAAW,CAAE,QAAQ,CACrB,YAAY,CAAE,QAAQ,AACxB,CAAC,AACH,CAAC,AAOD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAM3B,CAAC,AAGD,CAAC,cACE,CAAC,AACF,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,MAAM,AACrB,CAAC,AAED,MAAM,cAAC,CAAC,AACN,aAAa,CAAE,QAAQ,AACzB,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,CAAC,cAEA,CAAC,AACA,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,IAAI,CACjB,YAAY,CAAE,IAAI,AACpB,CAAC,AACH,CAAC,AAeD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAK3B,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAK3B,CAAC,AACD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAM3B,CAAC,AAgFD,WAAW,kBAAK,CAAC,AACf,EAAE,AAAC,CAAC,AACF,OAAO,CAAE,GAAG,AACd,CAAC,AACD,IAAI,AAAC,CAAC,AACJ,OAAO,CAAE,CAAC,AACZ,CAAC,AACH,CAAC,AACD,WAAW,mBAAM,CAAC,AAChB,EAAE,AAAC,CAAC,AACF,SAAS,CAAE,WAAW,KAAK,CAAC,CAC5B,OAAO,CAAE,GAAG,AACd,CAAC,AACD,GAAG,AAAC,CAAC,AACH,SAAS,CAAE,WAAW,GAAG,CAAC,CAC1B,OAAO,CAAE,CAAC,AACZ,CAAC,AACD,IAAI,AAAC,CAAC,AACJ,SAAS,CAAE,WAAW,CAAC,CAAC,CACxB,OAAO,CAAE,CAAC,AACZ,CAAC,AACH,CAAC,AACD,WAAW,qBAAQ,CAAC,AAClB,GAAG,AAAC,CAAC,AACH,SAAS,CAAE,MAAM,GAAG,CAAC,CACrB,OAAO,CAAE,GAAG,AACd,CAAC,AACH,CAAC,AAMD,KAAK,AAAC,CAAC,AACL,WAAW,CAAE,aAAa,CAAC,CAAC,kBAAkB,CAAC,CAAC,UAAU,CAAC,CAAC,MAAM,CAAC,CAAC,MAAM,CAAC,CAAC,MAAM,CAAC,CAAC,SAAS,CAAC,CAAC,WAAW,CAAC,CAAC,gBAAgB,CAAC,CAAC,UAAU,AAC1I,CAAC,AAED,cAAC,MAAM,AAAC,CAAC,AACP,aAAa,CAAE,OAAO,CACtB,aAAa,CAAE,MAAM,CACrB,aAAa,CAAE,GAAG,CAClB,aAAa,CAAE,MAAM,AACvB,CAAC,cAED,WAAW,AAAC,CAAC,AACX,KAAK,CAAE,KAAK,CACZ,gBAAgB,CAAE,KAAK,CACvB,WAAW,CAAE,IAAI,AACnB,CAAC,AA4BD,MAAM,cAAC,CAAC,AACN,IAAI,CAAE,IAAI,CACV,MAAM,CAAE,OAAO,CACf,YAAY,CAAE,CAAC,AACjB,CAAC,AAED,oBAAM,CAAE,CAAC,cAAC,CAAC,AACT,UAAU,CAAE,MAAM,AACpB,CAAC"}`
};
let x = 0;
let y = 0;
let base_unit = 1e3;
const T0T = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let new_items = [];
  let value = "";
  let canvas = {width: base_unit, height: base_unit};
  let radio_peque = canvas.width / 4;
  let radio_grande = canvas.width / 2;
  let circles = [
    {
      id: "circulogrande",
      cx: radio_grande,
      cy: radio_grande,
      r: radio_grande
    },
    {
      id: "circuloizda",
      cx: radio_peque,
      cy: radio_grande,
      r: radio_peque
    },
    {
      id: "circulodcha",
      cx: radio_peque * 3,
      cy: radio_grande,
      r: radio_peque
    }
  ];
  let items = [
    {id: 0, xpos: 0, ypos: 500},
    {id: 1, xpos: 500, ypos: 500},
    {id: 2, xpos: 750, ypos: 750},
    {id: 3, xpos: 750, ypos: 250},
    {id: 4, xpos: 1e3, ypos: 500}
  ];
  let svg = null;
  $$result.css.add(css$5);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(GridBase, "GridBase").$$render($$result, {variante: 1}, {}, {
      subarea2: () => `<div slot="${"subarea2"}" class="${"svelte-eqgbnf"}">${validate_component(Button, "Button").$$render($$result, {variante: 1, text: "Download svg"}, {}, {})}</div>`,
      subarea1: () => `<div slot="${"subarea1"}" class="${"svelte-eqgbnf"}"><hgroup class="${"svelte-eqgbnf"}"><h2 class="${"svelte-eqgbnf"}">Meta-Mapa +0+1234</h2>
      <p class="${"svelte-eqgbnf"}">Cualquier palabra que escribas se ordena naturalmente en una de estas zonas.</p></hgroup>
    ${validate_component(Form, "Form").$$render($$result, {variante: 1}, {}, {
        default: () => `${validate_component(Input, "Input").$$render($$result, {placeholder: "Your word", value}, {
          value: ($$value) => {
            value = $$value;
            $$settled = false;
          }
        }, {})}
      ${validate_component(Button, "Button").$$render($$result, {variante: 6, text: "Add"}, {}, {})}`
      })}</div>`,
      default: () => `<svg viewBox="${"-1 -1 " + escape(canvas.width) + " " + escape(canvas.height)}" class="${"svelte-eqgbnf"}"${add_attribute("this", svg, 1)}><g transform="${"translate(150,150) scale(0.7)"}" class="${"svelte-eqgbnf"}">${each(circles, (circle) => `<circle${add_attribute("cx", circle.cx, 0)}${add_attribute("cy", circle.cy, 0)}${add_attribute("r", circle.r, 0)}${add_attribute("id", circle.id, 0)} fill="${"none"}" stroke="${"black"}" class="${"svelte-eqgbnf"}"></circle>`)}${each(items, (item) => `${validate_component(Draggable, "Draggable").$$render($$result, {x: item.xpos, y: item.ypos}, {}, {default: () => `${escape(item.id)}`})}`)}${each(new_items, (new_i) => `${validate_component(Draggable, "Draggable").$$render($$result, {x, y}, {}, {default: () => `${escape(new_i)}`})}`)}</g></svg>`
    })}`;
  } while (!$$settled);
  return $$rendered;
});
var Alert_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-1s0l5il,.svelte-1s0l5il:before,.svelte-1s0l5il:after{box-sizing:border-box}\ndiv.svelte-1s0l5il{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@keyframes svelte-1s0l5il-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-1s0l5il-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-1s0l5il-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-1s0l5il:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-1s0l5il::selection{color:black;background-color:white;text-shadow:none}\n.Alert.svelte-1s0l5il{color:white;padding:1rem;display:none;position:relative}\n.haserror.svelte-1s0l5il{margin-top:1rem;display:block;border-top-width:2px;border-bottom-width:2px;border-top-style:dashed;border-top-style:dashed;border-bottom-style:dashed;border-top-color:#414141;border-bottom-color:#414141;animation-name:svelte-1s0l5il-show_error;animation-duration:0.3s;animation-fill-mode:backwards;animation-iteration-count:1}\n@keyframes svelte-1s0l5il-show_error{0%{transform:translateY(0px);opacity:0}50%{transform:translateY(10px);opacity:1}}';
var Gematria_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-ntgnaa.svelte-ntgnaa,.svelte-ntgnaa.svelte-ntgnaa:before,.svelte-ntgnaa.svelte-ntgnaa:after{box-sizing:border-box}\nh2.svelte-ntgnaa.svelte-ntgnaa,p.svelte-ntgnaa.svelte-ntgnaa,a.svelte-ntgnaa.svelte-ntgnaa,small.svelte-ntgnaa.svelte-ntgnaa,main.svelte-ntgnaa.svelte-ntgnaa,footer.svelte-ntgnaa.svelte-ntgnaa,header.svelte-ntgnaa.svelte-ntgnaa{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\nfooter.svelte-ntgnaa.svelte-ntgnaa,header.svelte-ntgnaa.svelte-ntgnaa,main.svelte-ntgnaa.svelte-ntgnaa{display:block}\nmain.svelte-ntgnaa.svelte-ntgnaa,header.svelte-ntgnaa.svelte-ntgnaa,small.svelte-ntgnaa.svelte-ntgnaa{font-family:"Montserrat", sans-serif;letter-spacing:0;font-weight:500;color:#b4b4b4}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\nh2.svelte-ntgnaa.svelte-ntgnaa{font-weight:500;font-size:1rem;line-height:28.8px}\n@media(min-width: 374px){h2.svelte-ntgnaa.svelte-ntgnaa{font-size:1.618rem;line-height:40.896px}}\n@media(min-width: 2140px){h2.svelte-ntgnaa.svelte-ntgnaa{font-size:2.618rem;line-height:57.6px;margin-left:6.854rem;margin-right:6.854rem}}\n@media(min-width: 374px){}\nsmall.svelte-ntgnaa.svelte-ntgnaa,p.svelte-ntgnaa.svelte-ntgnaa{font-size:1rem;line-height:28.8px}\n@media(min-width: 769px){p.svelte-ntgnaa.svelte-ntgnaa{max-width:769px;margin-left:auto;margin-right:auto}}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\na[target=_blank].svelte-ntgnaa.svelte-ntgnaa:after{content:" \u2924"}\n@keyframes svelte-ntgnaa-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-ntgnaa-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-ntgnaa-loading{50%{transform:scale(1.2);opacity:0.7}}\na.svelte-ntgnaa.svelte-ntgnaa:hover{animation-name:svelte-ntgnaa-fade;animation-duration:0.3s}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-ntgnaa.svelte-ntgnaa:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-ntgnaa.svelte-ntgnaa::selection{color:black;background-color:white;text-shadow:none}\nheader.svelte-ntgnaa.svelte-ntgnaa{text-align:center;margin-bottom:1.618rem}\n.result.svelte-ntgnaa.svelte-ntgnaa{color:#b4b4b4;font-weight:bold;font-size:6.854rem;line-height:144px}\nsmall.svelte-ntgnaa.svelte-ntgnaa{display:block;font-size:1rem;line-height:28.8px;margin:1rem}\nsmall.svelte-ntgnaa a.svelte-ntgnaa{color:inherit;text-decoration:none}\nmain.svelte-ntgnaa.svelte-ntgnaa{display:grid;place-items:center;text-align:center}\np.svelte-ntgnaa.svelte-ntgnaa,small.svelte-ntgnaa.svelte-ntgnaa{text-align:center}';
const css$4 = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");.svelte-ntgnaa.svelte-ntgnaa,.svelte-ntgnaa.svelte-ntgnaa:before,.svelte-ntgnaa.svelte-ntgnaa:after{box-sizing:border-box}h2.svelte-ntgnaa.svelte-ntgnaa,p.svelte-ntgnaa.svelte-ntgnaa,a.svelte-ntgnaa.svelte-ntgnaa,small.svelte-ntgnaa.svelte-ntgnaa,main.svelte-ntgnaa.svelte-ntgnaa,footer.svelte-ntgnaa.svelte-ntgnaa,header.svelte-ntgnaa.svelte-ntgnaa{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}footer.svelte-ntgnaa.svelte-ntgnaa,header.svelte-ntgnaa.svelte-ntgnaa,main.svelte-ntgnaa.svelte-ntgnaa{display:block}main.svelte-ntgnaa.svelte-ntgnaa,header.svelte-ntgnaa.svelte-ntgnaa,small.svelte-ntgnaa.svelte-ntgnaa{font-family:"Montserrat", sans-serif;letter-spacing:0;font-weight:500;color:#b4b4b4}@media(min-width: 769px){}@media(min-width: 1023px){}@media(min-width: 2140px){}h2.svelte-ntgnaa.svelte-ntgnaa{font-weight:500;font-size:1rem;line-height:28.8px}@media(min-width: 374px){h2.svelte-ntgnaa.svelte-ntgnaa{font-size:1.618rem;line-height:40.896px}}@media(min-width: 2140px){h2.svelte-ntgnaa.svelte-ntgnaa{font-size:2.618rem;line-height:57.6px;margin-left:6.854rem;margin-right:6.854rem}}@media(min-width: 374px){}small.svelte-ntgnaa.svelte-ntgnaa,p.svelte-ntgnaa.svelte-ntgnaa{font-size:1rem;line-height:28.8px}@media(min-width: 769px){p.svelte-ntgnaa.svelte-ntgnaa{max-width:769px;margin-left:auto;margin-right:auto}}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}a[target=_blank].svelte-ntgnaa.svelte-ntgnaa:after{content:" \u2924"}@keyframes svelte-ntgnaa-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-ntgnaa-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-ntgnaa-loading{50%{transform:scale(1.2);opacity:0.7}}a.svelte-ntgnaa.svelte-ntgnaa:hover{animation-name:svelte-ntgnaa-fade;animation-duration:0.3s}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-ntgnaa.svelte-ntgnaa:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-ntgnaa.svelte-ntgnaa::selection{color:black;background-color:white;text-shadow:none}header.svelte-ntgnaa.svelte-ntgnaa{text-align:center;margin-bottom:1.618rem}.result.svelte-ntgnaa.svelte-ntgnaa{color:#b4b4b4;font-weight:bold;font-size:6.854rem;line-height:144px}small.svelte-ntgnaa.svelte-ntgnaa{display:block;font-size:1rem;line-height:28.8px;margin:1rem}small.svelte-ntgnaa a.svelte-ntgnaa{color:inherit;text-decoration:none}main.svelte-ntgnaa.svelte-ntgnaa{display:grid;place-items:center;text-align:center}p.svelte-ntgnaa.svelte-ntgnaa,small.svelte-ntgnaa.svelte-ntgnaa{text-align:center}',
  map: `{"version":3,"file":"Gematria.svelte","sources":["Gematria.svelte"],"sourcesContent":["<script>\\n\\timport Form from '$lib/Form.svelte';\\n\\timport Button from '$lib/Button.svelte';\\n\\timport Input from '$lib/Input.svelte';\\n\\timport Alert from '$lib/Alert.svelte';\\n\\n\\tlet gematria = new Map([\\n\\t\\t['\\\\u05D0', 1], //'alef', '\u200E\u05D0'\\n\\t\\t['\\\\u05D1', 2], //'bet', '\u05D1\u200E'\\n\\t\\t['\\\\u05D2', 3], //'guimel', '\u05D2\u200E'\\n\\t\\t['\\\\u05D3', 4], //'dalet', '\u05D3\u200E'\\n\\t\\t['\\\\u05D4', 5], //'he', '\u05D4\u200E'\\n\\t\\t['\\\\u05D5', 6], //'vav', '\u05D5\u200E'\\n\\t\\t['\\\\u05D6', 7], //'tzain', '\u05D6\u200E'\\n\\t\\t['\\\\u05D7', 8], //'jet', '\u05D7\u200E'\\n\\t\\t['\\\\u05D8', 9], //'tet', '\u05D8\u200E'\\n\\t\\t['\\\\u05D9', 10], //'yod', '\u05D9\u200E'\\n\\t\\t['\\\\u05DB', 20], //'kaf', '\u05DB'\\n\\t\\t['\\\\u05DC', 30], //'lamed', '\u05DC\u200E'\\n\\t\\t['\\\\u05DE', 40], //'mem', '\u05DE'\\n\\t\\t['\\\\u05DF', 50], //'nun', '\u05E0'\\n\\t\\t['\\\\u05E1', 60], //'samej', '\u05E1\u200E'\\n\\t\\t['\\\\u05E2', 70], //'ayin', '\u05E2\u200E'\\n\\t\\t['\\\\u05E4', 80], //'pe', '\u05E4'\\n\\t\\t['\\\\u05E6', 90], //'tzadic', '\u05E6'\\n\\t\\t['\\\\u05E7', 100], //'kof', '\u05E7\u200E'\\n\\t\\t['\\\\u05E8', 200], //'resh', '\u05E8\u200E'\\n\\t\\t['\\\\u05E9', 300], //'shin', '\u05E9\u200E'\\n\\t\\t['\\\\u05EA', 400], //'tav', '\u05EA\u200E'\\n\\t\\t['\\\\u05DA', 500], //'kaf_sofit', '\u05DA\u200E'\\n\\t\\t['\\\\u05DD', 600], //'mem_sofit', '\u05DD\u200E'\\n\\t\\t['\\\\u05DF', 700], //'nun_sofit', '\u05DF\u200E'\\n\\t\\t['\\\\u05E3', 800], //'pe_sofit', '\u05E3\u200E'\\n\\t\\t['\\\\u05E5', 900] //'tzadi_sofit', '\u05E5\u200E'\\n\\t]);\\n\\tlet valorinput = '';\\n\\tlet haserror = false;\\n\\tlet errormessage = '';\\n\\t$: counter = 0;\\n\\tlet arrayASumar = [];\\n\\tlet splited = [];\\n\\n\\tfunction handleSubmit() {\\n\\t\\thaserror = false;\\n\\t\\tcounter = 0;\\n\\t\\tvalorinput = valorinput;\\n\\t\\tsplited = valorinput.split('');\\n\\t\\terrormessage = '';\\n\\t\\tfor (const s of splited) {\\n\\t\\t\\tif (s == '\\\\u05D0') {\\n\\t\\t\\t\\tcounter += 1;\\n\\t\\t\\t} else if (s == '\\\\u05D1') {\\n\\t\\t\\t\\tcounter += 2;\\n\\t\\t\\t} else if (s == '\\\\u05D2') {\\n\\t\\t\\t\\tcounter += 3;\\n\\t\\t\\t} else if (s == '\\\\u05D3') {\\n\\t\\t\\t\\tcounter += 4;\\n\\t\\t\\t} else if (s == '\\\\u05D4') {\\n\\t\\t\\t\\tcounter += 5;\\n\\t\\t\\t} else if (s == '\\\\u05D5') {\\n\\t\\t\\t\\tcounter += 6;\\n\\t\\t\\t} else if (s == '\\\\u05D6') {\\n\\t\\t\\t\\tcounter += 7;\\n\\t\\t\\t} else if (s == '\\\\u05D7') {\\n\\t\\t\\t\\tcounter += 8;\\n\\t\\t\\t} else if (s == '\\\\u05D8') {\\n\\t\\t\\t\\tcounter += 9;\\n\\t\\t\\t} else if (s == '\\\\u05D9') {\\n\\t\\t\\t\\tcounter += 10;\\n\\t\\t\\t} else if (s == '\\\\u05DB') {\\n\\t\\t\\t\\tcounter += 20;\\n\\t\\t\\t} else if (s == '\\\\u05DC') {\\n\\t\\t\\t\\tcounter += 30;\\n\\t\\t\\t} else if (s == '\\\\u05DE') {\\n\\t\\t\\t\\tcounter += 40;\\n\\t\\t\\t} else if (s == '\\\\u05DF') {\\n\\t\\t\\t\\tcounter += 50;\\n\\t\\t\\t} else if (s == '\\\\u05E1') {\\n\\t\\t\\t\\tcounter += 60;\\n\\t\\t\\t} else if (s == '\\\\u05E2') {\\n\\t\\t\\t\\tcounter += 70;\\n\\t\\t\\t} else if (s == '\\\\u05E4') {\\n\\t\\t\\t\\tcounter += 80;\\n\\t\\t\\t} else if (s == '\\\\u05E6') {\\n\\t\\t\\t\\tcounter += 90;\\n\\t\\t\\t} else if (s == '\\\\u05E7') {\\n\\t\\t\\t\\tcounter += 100;\\n\\t\\t\\t} else if (s == '\\\\u05E8') {\\n\\t\\t\\t\\tcounter += 200;\\n\\t\\t\\t} else if (s == '\\\\u05E9') {\\n\\t\\t\\t\\tcounter += 300;\\n\\t\\t\\t} else if (s == '\\\\u05EA') {\\n\\t\\t\\t\\tcounter += 400;\\n\\t\\t\\t} else if (s == '\\\\u05DA') {\\n\\t\\t\\t\\tcounter += 500;\\n\\t\\t\\t} else if (s == '\\\\u05DD') {\\n\\t\\t\\t\\tcounter += 600;\\n\\t\\t\\t} else if (s == '\\\\u05DF') {\\n\\t\\t\\t\\tcounter += 700;\\n\\t\\t\\t} else if (s == '\\\\u05E3') {\\n\\t\\t\\t\\tcounter += 800;\\n\\t\\t\\t} else if (s == '\\\\u05E5') {\\n\\t\\t\\t\\tcounter += 900;\\n\\t\\t\\t} else if (s == ' ') {\\n\\t\\t\\t\\tcounter += 0;\\n\\t\\t\\t} else {\\n\\t\\t\\t\\thaserror = true;\\n\\t\\t\\t\\tif ((haserror = true)) {\\n\\t\\t\\t\\t\\terrormessage = 'S\xF3lo contabilizan las consonantes hebreas.';\\n\\t\\t\\t\\t} else {\\n\\t\\t\\t\\t\\thaserror = false;\\n\\t\\t\\t\\t\\terrormessage = '';\\n\\t\\t\\t\\t}\\n\\t\\t\\t}\\n\\t\\t}\\n\\t\\treturn counter;\\n\\t}\\n</script>\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nsvg {\\n  max-height: 90vh;\\n}\\n\\nbody,\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Montserrat\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 40.896px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 86.4px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 144px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 144px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 57.6px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 28.8px;\\n  }\\n}\\n\\nsmall,\\np,\\ndl {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n\\nhgroup {\\n  margin-bottom: 1.618rem;\\n}\\n\\n@media (min-width: 769px) {\\n  p,\\nh4,\\ndl {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\ndt {\\n  color: #414141;\\n  margin-top: 1rem;\\n}\\n\\ndd {\\n  color: #6c6c6c;\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #b4b4b4;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: #6c6c6c;\\n}\\n\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: #6c6c6c;\\n  border: 1px solid #6c6c6c;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\nimg {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.tachado {\\n  text-decoration: line-through;\\n}\\n\\n.not-clickable {\\n  pointer-events: none;\\n}\\n\\nvideo {\\n  width: 100%;\\n  object-fit: cover;\\n  /* mix-blend-mode: luminosity; */\\n  /* border-radius: $h2; */\\n}\\n\\nheader {\\n  text-align: center;\\n  margin-bottom: 1.618rem;\\n}\\n\\n.result {\\n  color: #b4b4b4;\\n  font-weight: bold;\\n  font-size: 6.854rem;\\n  line-height: 144px;\\n}\\n\\nsmall {\\n  display: block;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  margin: 1rem;\\n}\\nsmall a {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\nmain {\\n  display: grid;\\n  place-items: center;\\n  text-align: center;\\n}\\n\\np,\\nsmall {\\n  text-align: center;\\n}</style>\\n\\n<header>\\n\\t<h2>Gematria App</h2>\\n\\t<p>Lo que valen las palabras hebreas</p>\\n</header>\\n\\n<main>\\n\\t<h2 class=\\"result\\">{counter}</h2>\\n\\n\\t<Form on:submit={handleSubmit} variante={0}>\\n\\t\\t<Input bind:value={valorinput} />\\n\\t\\t<Button variante={6} text=\\"Go!\\" {valorinput} />\\n\\t</Form>\\n\\n\\t{#if haserror == true}\\n\\t\\t<Alert>{errormessage}</Alert>\\n\\t{/if}\\n</main>\\n\\n<footer>\\n\\t<small>\u05D1\u05E8\u05D0\u05E9\u05D9\u05EA \u05D1\u05E8\u05D0 \u05D0\u05DC\u05D4\u05D9\u05DD \u05D0\u05EA \u05D4\u05E9\u05DE\u05D9\u05DD \u05D5\u05D0\u05EA \u05D4\u05D0\u05E8\u05E5 (G\xE9nesis, 1)</small>\\n\\t<small>\\n\\t\\t<a href=\\"https://tanach.us/Server.txt?Genesis*&content=Consonants\\" target=\\"_blank\\"> \\n\\tPuedes tomar los textos hebreos directamente del Codex de Leningrado\\n\\t\\t</a>\\n\\t</small>\\n</footer>\\n"],"names":[],"mappings":"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"}`
};
const Gematria = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let counter;
  let valorinput = "";
  $$result.css.add(css$4);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    counter = 0;
    $$rendered = `<header class="${"svelte-ntgnaa"}"><h2 class="${"svelte-ntgnaa"}">Gematria App</h2>
	<p class="${"svelte-ntgnaa"}">Lo que valen las palabras hebreas</p></header>

<main class="${"svelte-ntgnaa"}"><h2 class="${"result svelte-ntgnaa"}">${escape(counter)}</h2>

	${validate_component(Form, "Form").$$render($$result, {variante: 0}, {}, {
      default: () => `${validate_component(Input, "Input").$$render($$result, {value: valorinput}, {
        value: ($$value) => {
          valorinput = $$value;
          $$settled = false;
        }
      }, {})}
		${validate_component(Button, "Button").$$render($$result, {variante: 6, text: "Go!", valorinput}, {}, {})}`
    })}

	${``}</main>

<footer class="${"svelte-ntgnaa"}"><small class="${"svelte-ntgnaa"}">\u05D1\u05E8\u05D0\u05E9\u05D9\u05EA \u05D1\u05E8\u05D0 \u05D0\u05DC\u05D4\u05D9\u05DD \u05D0\u05EA \u05D4\u05E9\u05DE\u05D9\u05DD \u05D5\u05D0\u05EA \u05D4\u05D0\u05E8\u05E5 (G\xE9nesis, 1)</small>
	<small class="${"svelte-ntgnaa"}"><a href="${"https://tanach.us/Server.txt?Genesis*&content=Consonants"}" target="${"_blank"}" class="${"svelte-ntgnaa"}">Puedes tomar los textos hebreos directamente del Codex de Leningrado
		</a></small></footer>`;
  } while (!$$settled);
  return $$rendered;
});
const Lab = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
${validate_component(Section, "Section").$$render($$result, {id: "cover", variante: 3}, {}, {
    default: () => `${validate_component(Cover, "Cover").$$render($$result, {
      variante: 1,
      title: coverData[2].title,
      subtitle: coverData[2].subtitle,
      text: coverData[2].text
    }, {}, {})}`
  })}


${validate_component(Section, "Section").$$render($$result, {id: "phi", variante: 2}, {}, {
    default: () => `${validate_component(PhiSvg, "PhiSvg").$$render($$result, {
      title: "La Divina Proporci\xF3n",
      text: "<p>Sentir el Orden da Forma a la Conexi\xF3n. Dise\xF1o generativo en <code>JS</code> y <code>SVG</code> de la proporci\xF3n \xE1urea. <br> <small><i>Basado en una demo de Tan Li Hau.</i></small></p>"
    }, {}, {})}`
  })}


${validate_component(Section, "Section").$$render($$result, {id: "t0t", variante: 0}, {}, {
    default: () => `${validate_component(T0T, "T0T").$$render($$result, {}, {}, {})}`
  })}


${validate_component(Section, "Section").$$render($$result, {id: "gematria", variante: 1}, {}, {
    default: () => `${validate_component(Gematria, "Gematria").$$render($$result, {}, {}, {})}`
  })}`;
});
var index = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: Lab
});
var app = '\n@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n/* Uso:\n@include media( s + scaling factor ) {\n  property: value;\n}\n*/\n/* GRADIENT LISTS\n============================================= */\n*, *:before, *:after {\n  box-sizing: border-box;\n}\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  text-size-adjust: none;\n}\nfooter, header, nav, section, main {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after, q:before, q:after {\n  content: "";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ninput {\n  -webkit-appearance: none;\n  border-radius: 0;\n}\nsvg {\n  max-height: 90vh;\n}\nbody,\nmain,\nheader,\nsmall {\n  font-family: "Montserrat", sans-serif;\n  letter-spacing: 0;\n  font-weight: 500;\n  color: #b4b4b4;\n}\ni {\n  font-style: italic;\n}\nem {\n  color: #6c6c6c;\n  font-weight: 500;\n}\nstrong {\n  font-weight: 600;\n}\nh1 {\n  font-size: 1.618rem;\n  line-height: 40.896px;\n  font-weight: bold;\n}\n@media (min-width: 769px) {\n  h1 {\n    font-size: 4.236rem;\n    line-height: 86.4px;\n  }\n}\n@media (min-width: 1023px) {\n  h1 {\n    font-size: 6.854rem;\n    line-height: 144px;\n  }\n}\n@media (min-width: 2140px) {\n  h1 {\n    font-size: 11.089rem;\n    line-height: 144px;\n  }\n}\nh2 {\n  font-weight: 500;\n  font-size: 1rem;\n  line-height: 28.8px;\n}\n@media (min-width: 374px) {\n  h2 {\n    font-size: 1.618rem;\n    line-height: 40.896px;\n  }\n}\n@media (min-width: 2140px) {\n  h2 {\n    font-size: 2.618rem;\n    line-height: 57.6px;\n    margin-left: 6.854rem;\n    margin-right: 6.854rem;\n  }\n}\nh3,\nh4 {\n  font-size: 0.618rem;\n  line-height: 17.7777777778px;\n}\n@media (min-width: 374px) {\n  h3,\nh4 {\n    font-size: 1rem;\n    line-height: 28.8px;\n  }\n}\nsmall,\np,\ndl {\n  font-size: 1rem;\n  line-height: 28.8px;\n}\nhgroup {\n  margin-bottom: 1.618rem;\n}\n@media (min-width: 769px) {\n  p,\nh4,\ndl {\n    max-width: 769px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\ndt {\n  color: #414141;\n  margin-top: 1rem;\n}\ndd {\n  color: #6c6c6c;\n}\nblockquote {\n  font-size: 1rem;\n  line-height: 28.8px;\n}\n@media (min-width: 374px) {\n  blockquote {\n    font-size: 1.618rem;\n    line-height: 40.896px;\n  }\n}\n@media (min-width: 374px) {\n  blockquote {\n    margin-left: 2.618rem;\n    margin-right: 2.618rem;\n  }\n}\n@media (min-width: 769px) {\n  blockquote {\n    max-width: 374px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\nsub {\n  color: #110e08;\n  font-weight: 500;\n  padding-left: 2px;\n  padding-top: 0px;\n  font-size: 0.618rem;\n  line-height: 17.7777777778px;\n}\nfigcaption {\n  text-align: left;\n}\ninput {\n  border: none;\n  font-family: inherit;\n  font-size: 1rem;\n  line-height: 28.8px;\n  font-weight: inherit;\n  color: #414141;\n}\ninput[type=text] {\n  padding: 0.618rem;\n  background-color: #e5e5e5;\n}\ninput[type=number] {\n  color: #b4b4b4;\n  background-color: #110e08;\n  padding: 0.618rem;\n}\ninput[type=number]:focus {\n  outline: none;\n}\ninput[type=range] {\n  -webkit-appearance: none;\n  width: 100%;\n}\ninput[type=range]:focus {\n  outline: none;\n}\ninput[type=range]::-webkit-slider-runnable-track {\n  width: 100%;\n  height: 1px;\n  cursor: pointer;\n  background: #b4b4b4;\n  border-radius: 0px;\n}\ninput[type=range]::-webkit-slider-thumb {\n  height: 30px;\n  width: 30px;\n  border-radius: 50px;\n  background: #b4b4b4;\n  cursor: grab;\n  -webkit-appearance: none;\n  margin-top: -14.5px;\n}\ninput[type=range]:focus::-webkit-slider-runnable-track {\n  background: #6c6c6c;\n}\nnav a {\n  padding: 0.618rem;\n  text-decoration: none;\n  color: #6c6c6c;\n  border: 1px solid #6c6c6c;\n}\na[target=_blank]:after {\n  content: " \u2924";\n}\n@keyframes fade {\n  0% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes slide {\n  0% {\n    transform: translateY(-70px);\n    opacity: 0.5;\n  }\n  90% {\n    transform: translateY(5px);\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@keyframes loading {\n  50% {\n    transform: scale(1.2);\n    opacity: 0.7;\n  }\n}\na:hover {\n  animation-name: fade;\n  animation-duration: 0.3s;\n}\n:root {\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;\n}\n*:focus {\n  outline-color: #6c6c6c;\n  outline-style: dashed;\n  outline-width: 1px;\n  outline-style: dotted;\n}\n::selection {\n  color: black;\n  background-color: white;\n  text-shadow: none;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\n.tachado {\n  text-decoration: line-through;\n}\n.not-clickable {\n  pointer-events: none;\n}\nvideo {\n  width: 100%;\n  object-fit: cover;\n  /* mix-blend-mode: luminosity; */\n  /* border-radius: $h2; */\n}';
var SiteLogo_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-1huy2ss.svelte-1huy2ss,.svelte-1huy2ss.svelte-1huy2ss:before,.svelte-1huy2ss.svelte-1huy2ss:after{box-sizing:border-box}\nsvg.svelte-1huy2ss.svelte-1huy2ss{max-height:90vh}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@keyframes svelte-1huy2ss-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-1huy2ss-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-1huy2ss-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-1huy2ss.svelte-1huy2ss:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-1huy2ss.svelte-1huy2ss::selection{color:black;background-color:white;text-shadow:none}\nsvg.svelte-1huy2ss.svelte-1huy2ss{fill:black}\nsvg.svelte-1huy2ss.svelte-1huy2ss:hover{fill:white}\nsvg.svelte-1huy2ss:hover circle.svelte-1huy2ss{stroke:black}\ncircle.svelte-1huy2ss.svelte-1huy2ss{stroke:#b4b4b4}';
const css$3 = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");.svelte-1huy2ss.svelte-1huy2ss,.svelte-1huy2ss.svelte-1huy2ss:before,.svelte-1huy2ss.svelte-1huy2ss:after{box-sizing:border-box}svg.svelte-1huy2ss.svelte-1huy2ss{max-height:90vh}@media(min-width: 769px){}@media(min-width: 1023px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 769px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}@keyframes svelte-1huy2ss-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-1huy2ss-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-1huy2ss-loading{50%{transform:scale(1.2);opacity:0.7}}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-1huy2ss.svelte-1huy2ss:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-1huy2ss.svelte-1huy2ss::selection{color:black;background-color:white;text-shadow:none}svg.svelte-1huy2ss.svelte-1huy2ss{fill:black}svg.svelte-1huy2ss.svelte-1huy2ss:hover{fill:white}svg.svelte-1huy2ss:hover circle.svelte-1huy2ss{stroke:black}circle.svelte-1huy2ss.svelte-1huy2ss{stroke:#b4b4b4}',
  map: '{"version":3,"file":"SiteLogo.svelte","sources":["SiteLogo.svelte"],"sourcesContent":["<script>\\n</script>\\n\\n<svg class=\\"logo\\" width=\\"51\\" height=\\"51\\">\\n\\t<g>\\n\\t\\t<circle cx=\\"25\\" cy=\\"25\\" r=\\"25\\" />\\n\\t\\t<g>\\n\\t\\t\\t<circle cx=\\"12.5\\" cy=\\"25\\" r=\\"12.5\\" />\\n\\t\\t\\t<circle cx=\\"38\\" cy=\\"25\\" r=\\"12.5\\" />\\n\\t\\t</g>\\n\\t\\t<g>\\n\\t\\t\\t<circle cx=\\"6.5\\" cy=\\"25\\" r=\\"6.25\\" />\\n\\t\\t\\t<circle cx=\\"19\\" cy=\\"25\\" r=\\"6.25\\" />\\n\\t\\t\\t<circle cx=\\"31.5\\" cy=\\"25\\" r=\\"6.25\\" />\\n\\t\\t\\t<circle cx=\\"44\\" cy=\\"25\\" r=\\"6.25\\" />\\n\\t\\t</g>\\n\\t</g>\\n</svg>\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nsvg {\\n  max-height: 90vh;\\n}\\n\\nbody,\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Montserrat\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 40.896px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 86.4px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 144px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 144px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 57.6px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 28.8px;\\n  }\\n}\\n\\nsmall,\\np,\\ndl {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n\\nhgroup {\\n  margin-bottom: 1.618rem;\\n}\\n\\n@media (min-width: 769px) {\\n  p,\\nh4,\\ndl {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\ndt {\\n  color: #414141;\\n  margin-top: 1rem;\\n}\\n\\ndd {\\n  color: #6c6c6c;\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #b4b4b4;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: #6c6c6c;\\n}\\n\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: #6c6c6c;\\n  border: 1px solid #6c6c6c;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\nimg {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.tachado {\\n  text-decoration: line-through;\\n}\\n\\n.not-clickable {\\n  pointer-events: none;\\n}\\n\\nvideo {\\n  width: 100%;\\n  object-fit: cover;\\n  /* mix-blend-mode: luminosity; */\\n  /* border-radius: $h2; */\\n}\\n\\nsvg {\\n  fill: black;\\n}\\nsvg:hover {\\n  fill: white;\\n}\\nsvg:hover circle {\\n  stroke: black;\\n}\\n\\ncircle {\\n  stroke: #b4b4b4;\\n}</style>\\n"],"names":[],"mappings":"AAmBmB,SAAS,OAAO,CAAC,AAQpC,QAAQ,IAAI,gHAAgH,CAAC,CAAC,AAC9H,8BAAC,CAAE,8BAAC,OAAO,CAAE,8BAAC,MAAM,AAAC,CAAC,AACpB,UAAU,CAAE,UAAU,AACxB,CAAC,AA6CD,GAAG,8BAAC,CAAC,AACH,UAAU,CAAE,IAAI,AAClB,CAAC,AA8BD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAK3B,CAAC,AACD,MAAM,AAAC,YAAY,MAAM,CAAC,AAAC,CAAC,AAK5B,CAAC,AACD,MAAM,AAAC,YAAY,MAAM,CAAC,AAAC,CAAC,AAK5B,CAAC,AAOD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAK3B,CAAC,AACD,MAAM,AAAC,YAAY,MAAM,CAAC,AAAC,CAAC,AAO5B,CAAC,AAOD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAM3B,CAAC,AAaD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAQ3B,CAAC,AAeD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAK3B,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAK3B,CAAC,AACD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAM3B,CAAC,AAgFD,WAAW,mBAAK,CAAC,AACf,EAAE,AAAC,CAAC,AACF,OAAO,CAAE,GAAG,AACd,CAAC,AACD,IAAI,AAAC,CAAC,AACJ,OAAO,CAAE,CAAC,AACZ,CAAC,AACH,CAAC,AACD,WAAW,oBAAM,CAAC,AAChB,EAAE,AAAC,CAAC,AACF,SAAS,CAAE,WAAW,KAAK,CAAC,CAC5B,OAAO,CAAE,GAAG,AACd,CAAC,AACD,GAAG,AAAC,CAAC,AACH,SAAS,CAAE,WAAW,GAAG,CAAC,CAC1B,OAAO,CAAE,CAAC,AACZ,CAAC,AACD,IAAI,AAAC,CAAC,AACJ,SAAS,CAAE,WAAW,CAAC,CAAC,CACxB,OAAO,CAAE,CAAC,AACZ,CAAC,AACH,CAAC,AACD,WAAW,sBAAQ,CAAC,AAClB,GAAG,AAAC,CAAC,AACH,SAAS,CAAE,MAAM,GAAG,CAAC,CACrB,OAAO,CAAE,GAAG,AACd,CAAC,AACH,CAAC,AAMD,KAAK,AAAC,CAAC,AACL,WAAW,CAAE,aAAa,CAAC,CAAC,kBAAkB,CAAC,CAAC,UAAU,CAAC,CAAC,MAAM,CAAC,CAAC,MAAM,CAAC,CAAC,MAAM,CAAC,CAAC,SAAS,CAAC,CAAC,WAAW,CAAC,CAAC,gBAAgB,CAAC,CAAC,UAAU,AAC1I,CAAC,AAED,8BAAC,MAAM,AAAC,CAAC,AACP,aAAa,CAAE,OAAO,CACtB,aAAa,CAAE,MAAM,CACrB,aAAa,CAAE,GAAG,CAClB,aAAa,CAAE,MAAM,AACvB,CAAC,8BAED,WAAW,AAAC,CAAC,AACX,KAAK,CAAE,KAAK,CACZ,gBAAgB,CAAE,KAAK,CACvB,WAAW,CAAE,IAAI,AACnB,CAAC,AAsBD,GAAG,8BAAC,CAAC,AACH,IAAI,CAAE,KAAK,AACb,CAAC,AACD,iCAAG,MAAM,AAAC,CAAC,AACT,IAAI,CAAE,KAAK,AACb,CAAC,AACD,kBAAG,MAAM,CAAC,MAAM,eAAC,CAAC,AAChB,MAAM,CAAE,KAAK,AACf,CAAC,AAED,MAAM,8BAAC,CAAC,AACN,MAAM,CAAE,OAAO,AACjB,CAAC"}'
};
const SiteLogo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<svg class="${"logo svelte-1huy2ss"}" width="${"51"}" height="${"51"}"><g class="${"svelte-1huy2ss"}"><circle cx="${"25"}" cy="${"25"}" r="${"25"}" class="${"svelte-1huy2ss"}"></circle><g class="${"svelte-1huy2ss"}"><circle cx="${"12.5"}" cy="${"25"}" r="${"12.5"}" class="${"svelte-1huy2ss"}"></circle><circle cx="${"38"}" cy="${"25"}" r="${"12.5"}" class="${"svelte-1huy2ss"}"></circle></g><g class="${"svelte-1huy2ss"}"><circle cx="${"6.5"}" cy="${"25"}" r="${"6.25"}" class="${"svelte-1huy2ss"}"></circle><circle cx="${"19"}" cy="${"25"}" r="${"6.25"}" class="${"svelte-1huy2ss"}"></circle><circle cx="${"31.5"}" cy="${"25"}" r="${"6.25"}" class="${"svelte-1huy2ss"}"></circle><circle cx="${"44"}" cy="${"25"}" r="${"6.25"}" class="${"svelte-1huy2ss"}"></circle></g></g></svg>`;
});
var Nav_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-uz3alh.svelte-uz3alh,.svelte-uz3alh.svelte-uz3alh:before,.svelte-uz3alh.svelte-uz3alh:after{box-sizing:border-box}\ndiv.svelte-uz3alh.svelte-uz3alh,a.svelte-uz3alh.svelte-uz3alh,nav.svelte-uz3alh.svelte-uz3alh{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\nnav.svelte-uz3alh.svelte-uz3alh{display:block}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\nnav.svelte-uz3alh a.svelte-uz3alh{padding:0.618rem;text-decoration:none;color:#6c6c6c;border:1px solid #6c6c6c}\n@keyframes svelte-uz3alh-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-uz3alh-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-uz3alh-loading{50%{transform:scale(1.2);opacity:0.7}}\na.svelte-uz3alh.svelte-uz3alh:hover{animation-name:svelte-uz3alh-fade;animation-duration:0.3s}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-uz3alh.svelte-uz3alh:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-uz3alh.svelte-uz3alh::selection{color:black;background-color:white;text-shadow:none}\n.tachado.svelte-uz3alh.svelte-uz3alh{text-decoration:line-through}\n.not-clickable.svelte-uz3alh.svelte-uz3alh{pointer-events:none}\n.Variante_0.svelte-uz3alh.svelte-uz3alh{padding:2.618rem;text-align:center}\n.Variante_0.svelte-uz3alh a.svelte-uz3alh:hover{color:black}\n.Variante_0.svelte-uz3alh .active.svelte-uz3alh{background-color:#e5e5e5}\n.Variante_1.svelte-uz3alh .active.svelte-uz3alh{background-color:transparent;color:white;font-weight:bold}\n.Variante_1.svelte-uz3alh .MainNav.svelte-uz3alh{display:none;position:fixed;top:5.236rem;left:0;z-index:500;list-style:none;padding-top:1rem;padding-bottom:0.618rem;font-size:1.618rem;line-height:40.896px;background-color:black;border-top-right-radius:1rem;border-bottom-right-radius:1rem}\n@media(min-width: 769px){.Variante_1.svelte-uz3alh .MainNav.svelte-uz3alh{font-size:1rem;line-height:28.8px}}\n.Variante_1.svelte-uz3alh .NavItem.svelte-uz3alh{text-decoration:none;user-select:none;padding:0.618rem 1.618rem;display:block;border:none}\n.Variante_1.svelte-uz3alh .NavItem.svelte-uz3alh:hover{color:white}\n.Variante_1.svelte-uz3alh .MainNavVisible.svelte-uz3alh{display:flex;flex-wrap:wrap;justify-content:space-between;flex-direction:column;animation-name:svelte-uz3alh-slide;animation-duration:0.3s}\n.Variante_1.svelte-uz3alh .ButtonNav.svelte-uz3alh{position:fixed;z-index:1000;top:1.618rem;left:1.618rem}\n.Variante_1.svelte-uz3alh .ButtonNav.svelte-uz3alh:hover{cursor:pointer}';
const css$2 = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");.svelte-uz3alh.svelte-uz3alh,.svelte-uz3alh.svelte-uz3alh:before,.svelte-uz3alh.svelte-uz3alh:after{box-sizing:border-box}div.svelte-uz3alh.svelte-uz3alh,a.svelte-uz3alh.svelte-uz3alh,nav.svelte-uz3alh.svelte-uz3alh{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}nav.svelte-uz3alh.svelte-uz3alh{display:block}@media(min-width: 769px){}@media(min-width: 1023px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 769px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}nav.svelte-uz3alh a.svelte-uz3alh{padding:0.618rem;text-decoration:none;color:#6c6c6c;border:1px solid #6c6c6c}@keyframes svelte-uz3alh-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-uz3alh-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-uz3alh-loading{50%{transform:scale(1.2);opacity:0.7}}a.svelte-uz3alh.svelte-uz3alh:hover{animation-name:svelte-uz3alh-fade;animation-duration:0.3s}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-uz3alh.svelte-uz3alh:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-uz3alh.svelte-uz3alh::selection{color:black;background-color:white;text-shadow:none}.tachado.svelte-uz3alh.svelte-uz3alh{text-decoration:line-through}.not-clickable.svelte-uz3alh.svelte-uz3alh{pointer-events:none}.Variante_0.svelte-uz3alh.svelte-uz3alh{padding:2.618rem;text-align:center}.Variante_0.svelte-uz3alh a.svelte-uz3alh:hover{color:black}.Variante_0.svelte-uz3alh .active.svelte-uz3alh{background-color:#e5e5e5}.Variante_1.svelte-uz3alh .active.svelte-uz3alh{background-color:transparent;color:white;font-weight:bold}.Variante_1.svelte-uz3alh .MainNav.svelte-uz3alh{display:none;position:fixed;top:5.236rem;left:0;z-index:500;list-style:none;padding-top:1rem;padding-bottom:0.618rem;font-size:1.618rem;line-height:40.896px;background-color:black;border-top-right-radius:1rem;border-bottom-right-radius:1rem}@media(min-width: 769px){.Variante_1.svelte-uz3alh .MainNav.svelte-uz3alh{font-size:1rem;line-height:28.8px}}.Variante_1.svelte-uz3alh .NavItem.svelte-uz3alh{text-decoration:none;user-select:none;padding:0.618rem 1.618rem;display:block;border:none}.Variante_1.svelte-uz3alh .NavItem.svelte-uz3alh:hover{color:white}.Variante_1.svelte-uz3alh .MainNavVisible.svelte-uz3alh{display:flex;flex-wrap:wrap;justify-content:space-between;flex-direction:column;animation-name:svelte-uz3alh-slide;animation-duration:0.3s}.Variante_1.svelte-uz3alh .ButtonNav.svelte-uz3alh{position:fixed;z-index:1000;top:1.618rem;left:1.618rem}.Variante_1.svelte-uz3alh .ButtonNav.svelte-uz3alh:hover{cursor:pointer}',
  map: `{"version":3,"file":"Nav.svelte","sources":["Nav.svelte"],"sourcesContent":["<script>\\n    import { pages } from \\"$lib/data/pages.js\\";\\n    export let current_page;\\n\\n    import { clickOutside } from '$lib/clickOutside.js';\\n    import SiteLogo from '$lib/SiteLogo.svelte'\\n\\n    let activemenu = false;\\n    function cuandoClick(event) {\\n        currentitem = event.path[0].hash\\n    }\\n    function contraeMainMenu() {\\n\\t\\tactivemenu = false\\n\\t}\\n    let active;\\n\\n    export let variante = 0;\\n    let modificador = [\\n        \\"Variante_0\\",\\n        \\"Variante_1\\",\\n        \\"Variante_2\\"\\n    ];\\n</script>\\n\\n{#if variante === 1}\\n    <div class=\\"Variante_1\\" use:clickOutside on:click_outside={contraeMainMenu}>\\n        <div class=\\"ButtonNav\\" on:click={() => { activemenu = !activemenu}}> <SiteLogo /> </div>\\n\\n        <nav class={ activemenu ? \\"MainNav MainNavVisible\\" : \\"MainNav\\" }>\\n        {#each pages as {url, name}}\\n            <a \\n                href=\\"{url}\\"\\n                on:click\\n                class=\\"NavItem\\"\\n                class:active={name === current_page}\\n                on:click={contraeMainMenu}\\n                role=\\"navigation\\" \\n            >\\n                {name}\\n            </a>\\n        {/each}\\n        </nav>\\n\\n    </div>\\n{:else}\\n    <nav class={ modificador[ variante ] }>\\n        {#each pages as {url, name}}\\n            <a href=\\"{url}\\"\\n            on:click\\n            class:active={name === current_page}\\n            >\\n                {name}\\n            </a>\\n        {/each}\\n    </nav>\\n{/if}\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nsvg {\\n  max-height: 90vh;\\n}\\n\\nbody,\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Montserrat\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 40.896px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 86.4px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 144px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 144px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 57.6px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 28.8px;\\n  }\\n}\\n\\nsmall,\\np,\\ndl {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n\\nhgroup {\\n  margin-bottom: 1.618rem;\\n}\\n\\n@media (min-width: 769px) {\\n  p,\\nh4,\\ndl {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\ndt {\\n  color: #414141;\\n  margin-top: 1rem;\\n}\\n\\ndd {\\n  color: #6c6c6c;\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #b4b4b4;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: #6c6c6c;\\n}\\n\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: #6c6c6c;\\n  border: 1px solid #6c6c6c;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\nimg {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.tachado {\\n  text-decoration: line-through;\\n}\\n\\n.not-clickable {\\n  pointer-events: none;\\n}\\n\\nvideo {\\n  width: 100%;\\n  object-fit: cover;\\n  /* mix-blend-mode: luminosity; */\\n  /* border-radius: $h2; */\\n}\\n\\n.Variante_0 {\\n  padding: 2.618rem;\\n  text-align: center;\\n}\\n.Variante_0 a:hover {\\n  color: black;\\n}\\n.Variante_0 .active {\\n  background-color: #e5e5e5;\\n}\\n\\n.Variante_1 .active {\\n  background-color: transparent;\\n  color: white;\\n  font-weight: bold;\\n}\\n.Variante_1 .MainNav {\\n  display: none;\\n  position: fixed;\\n  top: 5.236rem;\\n  left: 0;\\n  z-index: 500;\\n  list-style: none;\\n  padding-top: 1rem;\\n  padding-bottom: 0.618rem;\\n  font-size: 1.618rem;\\n  line-height: 40.896px;\\n  background-color: black;\\n  border-top-right-radius: 1rem;\\n  border-bottom-right-radius: 1rem;\\n}\\n@media (min-width: 769px) {\\n  .Variante_1 .MainNav {\\n    font-size: 1rem;\\n    line-height: 28.8px;\\n  }\\n}\\n.Variante_1 .NavItem {\\n  text-decoration: none;\\n  user-select: none;\\n  padding: 0.618rem 1.618rem;\\n  display: block;\\n  border: none;\\n}\\n.Variante_1 .NavItem:hover {\\n  color: white;\\n}\\n.Variante_1 .MainNavVisible {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: space-between;\\n  flex-direction: column;\\n  animation-name: slide;\\n  animation-duration: 0.3s;\\n}\\n.Variante_1 .ButtonNav {\\n  position: fixed;\\n  z-index: 1000;\\n  top: 1.618rem;\\n  left: 1.618rem;\\n}\\n.Variante_1 .ButtonNav:hover {\\n  cursor: pointer;\\n}</style>"],"names":[],"mappings":"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"}`
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {current_page} = $$props;
  let {variante = 0} = $$props;
  let modificador = ["Variante_0", "Variante_1", "Variante_2"];
  if ($$props.current_page === void 0 && $$bindings.current_page && current_page !== void 0)
    $$bindings.current_page(current_page);
  if ($$props.variante === void 0 && $$bindings.variante && variante !== void 0)
    $$bindings.variante(variante);
  $$result.css.add(css$2);
  return `${variante === 1 ? `<div class="${"Variante_1 svelte-uz3alh"}"><div class="${"ButtonNav svelte-uz3alh"}">${validate_component(SiteLogo, "SiteLogo").$$render($$result, {}, {}, {})}</div>

        <nav class="${escape(null_to_empty("MainNav")) + " svelte-uz3alh"}">${each(pages, ({url, name}) => `<a${add_attribute("href", url, 0)} class="${["NavItem svelte-uz3alh", name === current_page ? "active" : ""].join(" ").trim()}" role="${"navigation"}">${escape(name)}
            </a>`)}</nav></div>` : `<nav class="${escape(null_to_empty(modificador[variante])) + " svelte-uz3alh"}">${each(pages, ({url, name}) => `<a${add_attribute("href", url, 0)} class="${["svelte-uz3alh", name === current_page ? "active" : ""].join(" ").trim()}">${escape(name)}
            </a>`)}</nav>`}`;
});
var Links_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-13fenfi.svelte-13fenfi,.svelte-13fenfi.svelte-13fenfi:before,.svelte-13fenfi.svelte-13fenfi:after{box-sizing:border-box}\na.svelte-13fenfi.svelte-13fenfi,small.svelte-13fenfi.svelte-13fenfi,ul.svelte-13fenfi.svelte-13fenfi,li.svelte-13fenfi.svelte-13fenfi{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\nul.svelte-13fenfi.svelte-13fenfi{list-style:none}\nsvg.svelte-13fenfi.svelte-13fenfi{max-height:90vh}\nsmall.svelte-13fenfi.svelte-13fenfi{font-family:"Montserrat", sans-serif;letter-spacing:0;font-weight:500;color:#b4b4b4}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\nsmall.svelte-13fenfi.svelte-13fenfi{font-size:1rem;line-height:28.8px}\n@media(min-width: 769px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\na[target=_blank].svelte-13fenfi.svelte-13fenfi:after{content:" \u2924"}\n@keyframes svelte-13fenfi-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-13fenfi-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-13fenfi-loading{50%{transform:scale(1.2);opacity:0.7}}\na.svelte-13fenfi.svelte-13fenfi:hover{animation-name:svelte-13fenfi-fade;animation-duration:0.3s}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-13fenfi.svelte-13fenfi:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-13fenfi.svelte-13fenfi::selection{color:black;background-color:white;text-shadow:none}\n.Links.svelte-13fenfi.svelte-13fenfi{padding-top:2.618rem;padding-bottom:2.618rem;background-color:#2a2929;display:grid;justify-items:center;align-content:center}\n@media(min-width: 769px){.Links.svelte-13fenfi.svelte-13fenfi{padding-top:6.854rem;padding-bottom:6.854rem}}\n.Links.svelte-13fenfi ul.svelte-13fenfi{width:100%;text-align:center}\n.Links.svelte-13fenfi a[target=_blank].svelte-13fenfi:after{content:""}\n.Links.svelte-13fenfi svg.svelte-13fenfi{max-width:1.618rem;padding-top:1rem;margin-left:0.382rem;margin-right:0.382rem;fill:#b4b4b4}\n.Links.svelte-13fenfi svg.svelte-13fenfi:hover{fill:#e8b28a}\n@media(min-width: 769px){.Links.svelte-13fenfi svg.svelte-13fenfi{margin-left:1rem;margin-right:1rem}}\n.Links.svelte-13fenfi small.svelte-13fenfi{color:#b4b4b4}';
const css$1 = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");.svelte-13fenfi.svelte-13fenfi,.svelte-13fenfi.svelte-13fenfi:before,.svelte-13fenfi.svelte-13fenfi:after{box-sizing:border-box}a.svelte-13fenfi.svelte-13fenfi,small.svelte-13fenfi.svelte-13fenfi,ul.svelte-13fenfi.svelte-13fenfi,li.svelte-13fenfi.svelte-13fenfi{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}ul.svelte-13fenfi.svelte-13fenfi{list-style:none}svg.svelte-13fenfi.svelte-13fenfi{max-height:90vh}small.svelte-13fenfi.svelte-13fenfi{font-family:"Montserrat", sans-serif;letter-spacing:0;font-weight:500;color:#b4b4b4}@media(min-width: 769px){}@media(min-width: 1023px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 2140px){}@media(min-width: 374px){}small.svelte-13fenfi.svelte-13fenfi{font-size:1rem;line-height:28.8px}@media(min-width: 769px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}a[target=_blank].svelte-13fenfi.svelte-13fenfi:after{content:" \u2924"}@keyframes svelte-13fenfi-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-13fenfi-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-13fenfi-loading{50%{transform:scale(1.2);opacity:0.7}}a.svelte-13fenfi.svelte-13fenfi:hover{animation-name:svelte-13fenfi-fade;animation-duration:0.3s}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-13fenfi.svelte-13fenfi:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-13fenfi.svelte-13fenfi::selection{color:black;background-color:white;text-shadow:none}.Links.svelte-13fenfi.svelte-13fenfi{padding-top:2.618rem;padding-bottom:2.618rem;background-color:#2a2929;display:grid;justify-items:center;align-content:center}@media(min-width: 769px){.Links.svelte-13fenfi.svelte-13fenfi{padding-top:6.854rem;padding-bottom:6.854rem}}.Links.svelte-13fenfi ul.svelte-13fenfi{width:100%;text-align:center}.Links.svelte-13fenfi a[target=_blank].svelte-13fenfi:after{content:""}.Links.svelte-13fenfi svg.svelte-13fenfi{max-width:1.618rem;padding-top:1rem;margin-left:0.382rem;margin-right:0.382rem;fill:#b4b4b4}.Links.svelte-13fenfi svg.svelte-13fenfi:hover{fill:#e8b28a}@media(min-width: 769px){.Links.svelte-13fenfi svg.svelte-13fenfi{margin-left:1rem;margin-right:1rem}}.Links.svelte-13fenfi small.svelte-13fenfi{color:#b4b4b4}',
  map: '{"version":3,"file":"Links.svelte","sources":["Links.svelte"],"sourcesContent":["<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nsvg {\\n  max-height: 90vh;\\n}\\n\\nbody,\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Montserrat\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 40.896px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 86.4px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 144px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 144px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 57.6px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 28.8px;\\n  }\\n}\\n\\nsmall,\\np,\\ndl {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n\\nhgroup {\\n  margin-bottom: 1.618rem;\\n}\\n\\n@media (min-width: 769px) {\\n  p,\\nh4,\\ndl {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\ndt {\\n  color: #414141;\\n  margin-top: 1rem;\\n}\\n\\ndd {\\n  color: #6c6c6c;\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #b4b4b4;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: #6c6c6c;\\n}\\n\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: #6c6c6c;\\n  border: 1px solid #6c6c6c;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\nimg {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.tachado {\\n  text-decoration: line-through;\\n}\\n\\n.not-clickable {\\n  pointer-events: none;\\n}\\n\\nvideo {\\n  width: 100%;\\n  object-fit: cover;\\n  /* mix-blend-mode: luminosity; */\\n  /* border-radius: $h2; */\\n}\\n\\n.Links {\\n  padding-top: 2.618rem;\\n  padding-bottom: 2.618rem;\\n  background-color: #2a2929;\\n  display: grid;\\n  justify-items: center;\\n  align-content: center;\\n}\\n@media (min-width: 769px) {\\n  .Links {\\n    padding-top: 6.854rem;\\n    padding-bottom: 6.854rem;\\n  }\\n}\\n.Links ul {\\n  width: 100%;\\n  text-align: center;\\n}\\n.Links a[target=_blank]:after {\\n  content: \\"\\";\\n}\\n.Links svg {\\n  max-width: 1.618rem;\\n  padding-top: 1rem;\\n  margin-left: 0.382rem;\\n  margin-right: 0.382rem;\\n  fill: #b4b4b4;\\n}\\n.Links svg:hover {\\n  fill: #e8b28a;\\n}\\n@media (min-width: 769px) {\\n  .Links svg {\\n    margin-left: 1rem;\\n    margin-right: 1rem;\\n  }\\n}\\n.Links small {\\n  color: #b4b4b4;\\n}</style>\\n\\n<aside class=\\"Links\\">\\n  <small>Follow me at:</small>\\n  <ul>\\n    <li>\\n      <a href=\\"https://www.instagram.com/t.o.d.h/\\" target=\\"_blank\\" rel=\\"noopener\\">\\n        <svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 16 16\\">\\n          <title>Instagram</title>\\n          <circle cx=\\"12.145\\" cy=\\"3.892\\" r=\\"0.96\\" />\\n          <path d=\\"M8,12c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S10.206,12,8,12zM8,6C6.897,6,6,6.897,6,8s0.897,2,2,2s2-0.897,2-2S9.103,6,8,6z\\" />\\n          <path d=\\"M12,16H4c-2.056,0-4-1.944-4-4V4c0-2.056,1.944-4,4-4h8c2.056,0,4,1.944,4,4v8C16,14.056,14.056,16,12,16zM4,2C3.065,2,2,3.065,2,4v8c0,0.953,1.047,2,2,2h8c0.935,0,2-1.065,2-2V4c0-0.935-1.065-2-2-2H4z\\" />\\n        </svg>\\n      </a>\\n      <a href=\\"https://www.linkedin.com/in/sergiofores/\\" target=\\"_blank\\" rel=\\"noopener\\">\\n        <svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 16 16\\">\\n          <title>Linkedin</title>\\n          <path d=\\"M15.3,0H0.7C0.3,0,0,0.3,0,0.7v14.7C0,15.7,0.3,16,0.7,16h14.7c0.4,0,0.7-0.3,0.7-0.7V0.7C16,0.3,15.7,0,15.3,0z M4.7,13.6H2.4V6h2.4V13.6zM3.6,5C2.8,5,2.2,4.3,2.2,3.6c0-0.8,0.6-1.4,1.4-1.4c0.8,0,1.4,0.6,1.4,1.4C4.9,4.3,4.3,5,3.6,5zM13.6,13.6h-2.4V9.9c0-0.9,0-2-1.2-2c-1.2,0-1.4,1-1.4,2v3.8H6.2V6h2.3v1h0c0.3-0.6,1.1-1.2,2.2-1.2c2.4,0,2.8,1.6,2.8,3.6V13.6z\\" />\\n        </svg>\\n      </a>\\n      <a href=\\"https://medium.com/@todh\\" target=\\"_blank\\" rel=\\"noopener\\">\\n        <svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 16 16\\">\\n          <title>Algunos art\xEDculos en Medium</title>\\n          <path d=\\"M15,0H1A1,1,0,0,0,0,1V15a1,1,0,0,0,1,1H15a1,1,0,0,0,1-1V1A1,1,0,0,0,15,0ZM13.292,3.791l-.858.823a.251.251,0,0,0-.1.241V10.9a.251.251,0,0,0,.1.241l.838.823v.181H9.057v-.181l.868-.843c.085-.085.085-.11.085-.241V5.993L7.6,12.124H7.271l-2.81-6.13V10.1a.567.567,0,0,0,.156.472l1.129,1.37v.181h-3.2v-.181l1.129-1.37a.547.547,0,0,0,.146-.472V5.351A.416.416,0,0,0,3.683,5l-1-1.209V3.61H5.8L8.2,8.893,10.322,3.61h2.971Z\\" />\\n        </svg>\\n      </a>\\n      <a href=\\"https://twitter.com/t0tinspire\\" target=\\"_blank\\" rel=\\"noopener\\">\\n        <svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 16 16\\">\\n          <title>Twitter</title>\\n          <path d=\\"M16,3c-0.6,0.3-1.2,0.4-1.9,0.5c0.7-0.4,1.2-1,1.4-1.8c-0.6,0.4-1.3,0.6-2.1,0.8c-0.6-0.6-1.5-1-2.4-1C9.3,1.5,7.8,3,7.8,4.8c0,0.3,0,0.5,0.1,0.7C5.2,5.4,2.7,4.1,1.1,2.1c-0.3,0.5-0.4,1-0.4,1.7c0,1.1,0.6,2.1,1.5,2.7c-0.5,0-1-0.2-1.5-0.4c0,0,0,0,0,0c0,1.6,1.1,2.9,2.6,3.2C3,9.4,2.7,9.4,2.4,9.4c-0.2,0-0.4,0-0.6-0.1c0.4,1.3,1.6,2.3,3.1,2.3c-1.1,0.9-2.5,1.4-4.1,1.4c-0.3,0-0.5,0-0.8,0c1.5,0.9,3.2,1.5,5,1.5c6,0,9.3-5,9.3-9.3c0-0.1,0-0.3,0-0.4C15,4.3,15.6,3.7,16,3z\\" />\\n        </svg>\\n      </a>\\n      <a href=\\"https://github.com/t0t\\" target=\\"_blank\\" rel=\\"noopener\\">\\n        <svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 16 16\\">\\n          <title>Mi repositorio en Github</title>\\n          <path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M8,0.2c-4.4,0-8,3.6-8,8c0,3.5,2.3,6.5,5.5,7.6C5.9,15.9,6,15.6,6,15.4c0-0.2,0-0.7,0-1.4C3.8,14.5,3.3,13,3.3,13c-0.4-0.9-0.9-1.2-0.9-1.2c-0.7-0.5,0.1-0.5,0.1-0.5c0.8,0.1,1.2,0.8,1.2,0.8C4.4,13.4,5.6,13,6,12.8c0.1-0.5,0.3-0.9,0.5-1.1c-1.8-0.2-3.6-0.9-3.6-4c0-0.9,0.3-1.6,0.8-2.1c-0.1-0.2-0.4-1,0.1-2.1c0,0,0.7-0.2,2.2,0.8c0.6-0.2,1.3-0.3,2-0.3c0.7,0,1.4,0.1,2,0.3c1.5-1,2.2-0.8,2.2-0.8c0.4,1.1,0.2,1.9,0.1,2.1c0.5,0.6,0.8,1.3,0.8,2.1c0,3.1-1.9,3.7-3.7,3.9C9.7,12,10,12.5,10,13.2c0,1.1,0,1.9,0,2.2c0,0.2,0.1,0.5,0.6,0.4c3.2-1.1,5.5-4.1,5.5-7.6C16,3.8,12.4,0.2,8,0.2z\\" />\\n        </svg>\\n      </a>\\n      <a href=\\"https://www.facebook.com/TODH-2139705836275088\\" target=\\"_blank\\" rel=\\"noopener\\">\\n        <svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 16 16\\">\\n          <title>Facebook</title>\\n          <path d=\\"M15.3,0H0.7C0.3,0,0,0.3,0,0.7v14.7C0,15.7,0.3,16,0.7,16H8v-5H6V8h2V6c0-2.1,1.2-3,3-3 c0.9,0,1.8,0,2,0v3h-1c-0.6,0-1,0.4-1,1v1h2.6L13,11h-2v5h4.3c0.4,0,0.7-0.3,0.7-0.7V0.7C16,0.3,15.7,0,15.3,0z\\" />\\n        </svg>\\n      </a>\\n    </li>\\n  </ul>\\n</aside>"],"names":[],"mappings":"AAAmB,SAAS,OAAO,CAAC,AAQpC,QAAQ,IAAI,gHAAgH,CAAC,CAAC,AAC9H,8BAAC,CAAE,8BAAC,OAAO,CAAE,8BAAC,MAAM,AAAC,CAAC,AACpB,UAAU,CAAE,UAAU,AACxB,CAAC,AAE0F,+BAAC,CAAiB,mCAAK,CAA6C,gCAAE,CAAE,EAAE,8BAAmI,CAAC,AACvS,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CAAC,CACT,SAAS,CAAE,IAAI,CACf,IAAI,CAAE,OAAO,CACb,cAAc,CAAE,QAAQ,CACxB,cAAc,CAAE,kBAAkB,CAClC,sBAAsB,CAAE,WAAW,CACnC,gBAAgB,CAAE,IAAI,AACxB,CAAC,AAUG,EAAE,8BAAC,CAAC,AACN,UAAU,CAAE,IAAI,AAClB,CAAC,AAqBD,GAAG,8BAAC,CAAC,AACH,UAAU,CAAE,IAAI,AAClB,CAAC,AAKD,KAAK,8BAAC,CAAC,AACL,WAAW,CAAE,YAAY,CAAC,CAAC,UAAU,CACrC,cAAc,CAAE,CAAC,CACjB,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,OAAO,AAChB,CAAC,AAoBD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAK3B,CAAC,AACD,MAAM,AAAC,YAAY,MAAM,CAAC,AAAC,CAAC,AAK5B,CAAC,AACD,MAAM,AAAC,YAAY,MAAM,CAAC,AAAC,CAAC,AAK5B,CAAC,AAOD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAK3B,CAAC,AACD,MAAM,AAAC,YAAY,MAAM,CAAC,AAAC,CAAC,AAO5B,CAAC,AAOD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAM3B,CAAC,AAED,KAAK,8BAEF,CAAC,AACF,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,MAAM,AACrB,CAAC,AAMD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAQ3B,CAAC,AAeD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAK3B,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAK3B,CAAC,AACD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAM3B,CAAC,AA4ED,CAAC,CAAC,MAAM,CAAC,MAAM,+BAAC,MAAM,AAAC,CAAC,AACtB,OAAO,CAAE,IAAI,AACf,CAAC,AAED,WAAW,mBAAK,CAAC,AACf,EAAE,AAAC,CAAC,AACF,OAAO,CAAE,GAAG,AACd,CAAC,AACD,IAAI,AAAC,CAAC,AACJ,OAAO,CAAE,CAAC,AACZ,CAAC,AACH,CAAC,AACD,WAAW,oBAAM,CAAC,AAChB,EAAE,AAAC,CAAC,AACF,SAAS,CAAE,WAAW,KAAK,CAAC,CAC5B,OAAO,CAAE,GAAG,AACd,CAAC,AACD,GAAG,AAAC,CAAC,AACH,SAAS,CAAE,WAAW,GAAG,CAAC,CAC1B,OAAO,CAAE,CAAC,AACZ,CAAC,AACD,IAAI,AAAC,CAAC,AACJ,SAAS,CAAE,WAAW,CAAC,CAAC,CACxB,OAAO,CAAE,CAAC,AACZ,CAAC,AACH,CAAC,AACD,WAAW,sBAAQ,CAAC,AAClB,GAAG,AAAC,CAAC,AACH,SAAS,CAAE,MAAM,GAAG,CAAC,CACrB,OAAO,CAAE,GAAG,AACd,CAAC,AACH,CAAC,AACD,+BAAC,MAAM,AAAC,CAAC,AACP,cAAc,CAAE,mBAAI,CACpB,kBAAkB,CAAE,IAAI,AAC1B,CAAC,AAED,KAAK,AAAC,CAAC,AACL,WAAW,CAAE,aAAa,CAAC,CAAC,kBAAkB,CAAC,CAAC,UAAU,CAAC,CAAC,MAAM,CAAC,CAAC,MAAM,CAAC,CAAC,MAAM,CAAC,CAAC,SAAS,CAAC,CAAC,WAAW,CAAC,CAAC,gBAAgB,CAAC,CAAC,UAAU,AAC1I,CAAC,AAED,8BAAC,MAAM,AAAC,CAAC,AACP,aAAa,CAAE,OAAO,CACtB,aAAa,CAAE,MAAM,CACrB,aAAa,CAAE,GAAG,CAClB,aAAa,CAAE,MAAM,AACvB,CAAC,8BAED,WAAW,AAAC,CAAC,AACX,KAAK,CAAE,KAAK,CACZ,gBAAgB,CAAE,KAAK,CACvB,WAAW,CAAE,IAAI,AACnB,CAAC,AAsBD,MAAM,8BAAC,CAAC,AACN,WAAW,CAAE,QAAQ,CACrB,cAAc,CAAE,QAAQ,CACxB,gBAAgB,CAAE,OAAO,CACzB,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,MAAM,CACrB,aAAa,CAAE,MAAM,AACvB,CAAC,AACD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,MAAM,8BAAC,CAAC,AACN,WAAW,CAAE,QAAQ,CACrB,cAAc,CAAE,QAAQ,AAC1B,CAAC,AACH,CAAC,AACD,qBAAM,CAAC,EAAE,eAAC,CAAC,AACT,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,MAAM,AACpB,CAAC,AACD,qBAAM,CAAC,CAAC,CAAC,MAAM,CAAC,MAAM,gBAAC,MAAM,AAAC,CAAC,AAC7B,OAAO,CAAE,EAAE,AACb,CAAC,AACD,qBAAM,CAAC,GAAG,eAAC,CAAC,AACV,SAAS,CAAE,QAAQ,CACnB,WAAW,CAAE,IAAI,CACjB,WAAW,CAAE,QAAQ,CACrB,YAAY,CAAE,QAAQ,CACtB,IAAI,CAAE,OAAO,AACf,CAAC,AACD,qBAAM,CAAC,kBAAG,MAAM,AAAC,CAAC,AAChB,IAAI,CAAE,OAAO,AACf,CAAC,AACD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,qBAAM,CAAC,GAAG,eAAC,CAAC,AACV,WAAW,CAAE,IAAI,CACjB,YAAY,CAAE,IAAI,AACpB,CAAC,AACH,CAAC,AACD,qBAAM,CAAC,KAAK,eAAC,CAAC,AACZ,KAAK,CAAE,OAAO,AAChB,CAAC"}'
};
const Links = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<aside class="${"Links svelte-13fenfi"}"><small class="${"svelte-13fenfi"}">Follow me at:</small>
  <ul class="${"svelte-13fenfi"}"><li class="${"svelte-13fenfi"}"><a href="${"https://www.instagram.com/t.o.d.h/"}" target="${"_blank"}" rel="${"noopener"}" class="${"svelte-13fenfi"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 16 16"}" class="${"svelte-13fenfi"}"><title class="${"svelte-13fenfi"}">Instagram</title><circle cx="${"12.145"}" cy="${"3.892"}" r="${"0.96"}" class="${"svelte-13fenfi"}"></circle><path d="${"M8,12c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S10.206,12,8,12zM8,6C6.897,6,6,6.897,6,8s0.897,2,2,2s2-0.897,2-2S9.103,6,8,6z"}" class="${"svelte-13fenfi"}"></path><path d="${"M12,16H4c-2.056,0-4-1.944-4-4V4c0-2.056,1.944-4,4-4h8c2.056,0,4,1.944,4,4v8C16,14.056,14.056,16,12,16zM4,2C3.065,2,2,3.065,2,4v8c0,0.953,1.047,2,2,2h8c0.935,0,2-1.065,2-2V4c0-0.935-1.065-2-2-2H4z"}" class="${"svelte-13fenfi"}"></path></svg></a>
      <a href="${"https://www.linkedin.com/in/sergiofores/"}" target="${"_blank"}" rel="${"noopener"}" class="${"svelte-13fenfi"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 16 16"}" class="${"svelte-13fenfi"}"><title class="${"svelte-13fenfi"}">Linkedin</title><path d="${"M15.3,0H0.7C0.3,0,0,0.3,0,0.7v14.7C0,15.7,0.3,16,0.7,16h14.7c0.4,0,0.7-0.3,0.7-0.7V0.7C16,0.3,15.7,0,15.3,0z M4.7,13.6H2.4V6h2.4V13.6zM3.6,5C2.8,5,2.2,4.3,2.2,3.6c0-0.8,0.6-1.4,1.4-1.4c0.8,0,1.4,0.6,1.4,1.4C4.9,4.3,4.3,5,3.6,5zM13.6,13.6h-2.4V9.9c0-0.9,0-2-1.2-2c-1.2,0-1.4,1-1.4,2v3.8H6.2V6h2.3v1h0c0.3-0.6,1.1-1.2,2.2-1.2c2.4,0,2.8,1.6,2.8,3.6V13.6z"}" class="${"svelte-13fenfi"}"></path></svg></a>
      <a href="${"https://medium.com/@todh"}" target="${"_blank"}" rel="${"noopener"}" class="${"svelte-13fenfi"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 16 16"}" class="${"svelte-13fenfi"}"><title class="${"svelte-13fenfi"}">Algunos art\xEDculos en Medium</title><path d="${"M15,0H1A1,1,0,0,0,0,1V15a1,1,0,0,0,1,1H15a1,1,0,0,0,1-1V1A1,1,0,0,0,15,0ZM13.292,3.791l-.858.823a.251.251,0,0,0-.1.241V10.9a.251.251,0,0,0,.1.241l.838.823v.181H9.057v-.181l.868-.843c.085-.085.085-.11.085-.241V5.993L7.6,12.124H7.271l-2.81-6.13V10.1a.567.567,0,0,0,.156.472l1.129,1.37v.181h-3.2v-.181l1.129-1.37a.547.547,0,0,0,.146-.472V5.351A.416.416,0,0,0,3.683,5l-1-1.209V3.61H5.8L8.2,8.893,10.322,3.61h2.971Z"}" class="${"svelte-13fenfi"}"></path></svg></a>
      <a href="${"https://twitter.com/t0tinspire"}" target="${"_blank"}" rel="${"noopener"}" class="${"svelte-13fenfi"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 16 16"}" class="${"svelte-13fenfi"}"><title class="${"svelte-13fenfi"}">Twitter</title><path d="${"M16,3c-0.6,0.3-1.2,0.4-1.9,0.5c0.7-0.4,1.2-1,1.4-1.8c-0.6,0.4-1.3,0.6-2.1,0.8c-0.6-0.6-1.5-1-2.4-1C9.3,1.5,7.8,3,7.8,4.8c0,0.3,0,0.5,0.1,0.7C5.2,5.4,2.7,4.1,1.1,2.1c-0.3,0.5-0.4,1-0.4,1.7c0,1.1,0.6,2.1,1.5,2.7c-0.5,0-1-0.2-1.5-0.4c0,0,0,0,0,0c0,1.6,1.1,2.9,2.6,3.2C3,9.4,2.7,9.4,2.4,9.4c-0.2,0-0.4,0-0.6-0.1c0.4,1.3,1.6,2.3,3.1,2.3c-1.1,0.9-2.5,1.4-4.1,1.4c-0.3,0-0.5,0-0.8,0c1.5,0.9,3.2,1.5,5,1.5c6,0,9.3-5,9.3-9.3c0-0.1,0-0.3,0-0.4C15,4.3,15.6,3.7,16,3z"}" class="${"svelte-13fenfi"}"></path></svg></a>
      <a href="${"https://github.com/t0t"}" target="${"_blank"}" rel="${"noopener"}" class="${"svelte-13fenfi"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 16 16"}" class="${"svelte-13fenfi"}"><title class="${"svelte-13fenfi"}">Mi repositorio en Github</title><path fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M8,0.2c-4.4,0-8,3.6-8,8c0,3.5,2.3,6.5,5.5,7.6C5.9,15.9,6,15.6,6,15.4c0-0.2,0-0.7,0-1.4C3.8,14.5,3.3,13,3.3,13c-0.4-0.9-0.9-1.2-0.9-1.2c-0.7-0.5,0.1-0.5,0.1-0.5c0.8,0.1,1.2,0.8,1.2,0.8C4.4,13.4,5.6,13,6,12.8c0.1-0.5,0.3-0.9,0.5-1.1c-1.8-0.2-3.6-0.9-3.6-4c0-0.9,0.3-1.6,0.8-2.1c-0.1-0.2-0.4-1,0.1-2.1c0,0,0.7-0.2,2.2,0.8c0.6-0.2,1.3-0.3,2-0.3c0.7,0,1.4,0.1,2,0.3c1.5-1,2.2-0.8,2.2-0.8c0.4,1.1,0.2,1.9,0.1,2.1c0.5,0.6,0.8,1.3,0.8,2.1c0,3.1-1.9,3.7-3.7,3.9C9.7,12,10,12.5,10,13.2c0,1.1,0,1.9,0,2.2c0,0.2,0.1,0.5,0.6,0.4c3.2-1.1,5.5-4.1,5.5-7.6C16,3.8,12.4,0.2,8,0.2z"}" class="${"svelte-13fenfi"}"></path></svg></a>
      <a href="${"https://www.facebook.com/TODH-2139705836275088"}" target="${"_blank"}" rel="${"noopener"}" class="${"svelte-13fenfi"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 16 16"}" class="${"svelte-13fenfi"}"><title class="${"svelte-13fenfi"}">Facebook</title><path d="${"M15.3,0H0.7C0.3,0,0,0.3,0,0.7v14.7C0,15.7,0.3,16,0.7,16H8v-5H6V8h2V6c0-2.1,1.2-3,3-3 c0.9,0,1.8,0,2,0v3h-1c-0.6,0-1,0.4-1,1v1h2.6L13,11h-2v5h4.3c0.4,0,0.7-0.3,0.7-0.7V0.7C16,0.3,15.7,0,15.3,0z"}" class="${"svelte-13fenfi"}"></path></svg></a></li></ul></aside>`;
});
var Footer_svelte = "footer.svelte-lti6kl{padding:0;background-color:#f3f3f3}";
const css = {
  code: "footer.svelte-lti6kl{padding:0;background-color:#f3f3f3}",
  map: '{"version":3,"file":"Footer.svelte","sources":["Footer.svelte"],"sourcesContent":["<script>\\n    import Links from \\"$lib/Links.svelte\\"\\n</script>\\n\\n<footer>\\n    <Links />\\n</footer>\\n\\n<style lang=\\"scss\\">footer {\\n  padding: 0;\\n  background-color: #f3f3f3;\\n}</style>"],"names":[],"mappings":"AAQmB,MAAM,cAAC,CAAC,AACzB,OAAO,CAAE,CAAC,CACV,gBAAgB,CAAE,OAAO,AAC3B,CAAC"}'
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<footer class="${"svelte-lti6kl"}">${validate_component(Links, "Links").$$render($$result, {}, {}, {})}
</footer>`;
});
const $layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let current_page = "";
  return `${$$result.head += `${$$result.title = `<title>SvelteKit UI - ${escape(current_page)}</title>`, ""}`, ""}

<main>${validate_component(Nav, "Nav").$$render($$result, {current_page, variante: 1}, {}, {})}
	
	<section>${slots.default ? slots.default({}) : ``}</section>

	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</main>

`;
});
var $layout$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: $layout
});
export {init, render};
