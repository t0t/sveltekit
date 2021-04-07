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
const css$r = {
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
  $$result.css.add(css$r);
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
    return index$5;
  }),
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
const client_component_lookup = {".svelte/build/runtime/internal/start.js": "start-3b585803.js", "src/routes/index.svelte": "pages/index.svelte-6a8aa010.js", "src/routes/philosophy/index.svelte": "pages/philosophy/index.svelte-9c3c7726.js", "src/routes/prototype/index.svelte": "pages/prototype/index.svelte-eb4365f6.js", "src/routes/artworks/index.svelte": "pages/artworks/index.svelte-c7a88438.js", "src/routes/about/index.svelte": "pages/about/index.svelte-497830d7.js", "src/routes/lab/index.svelte": "pages/lab/index.svelte-5e4a0fb2.js"};
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
      css: ["assets/start-9948e9bb.css", "assets/pages/index.svelte-fa489fbf.css", "assets/Cover-3b709232.css", "assets/Section-77bf4b99.css", "assets/Img-1393e58e.css"],
      js: ["start-3b585803.js", "chunks/index-d91e1ed8.js", "chunks/index-cc16b092.js", "chunks/pages-ac57da01.js", "pages/index.svelte-6a8aa010.js", "chunks/Cover-12fb2afa.js", "chunks/Section-b530c020.js", "chunks/index-65311448.js", "chunks/index-78b22dae.js", "chunks/Img-a99bd539.js"]
    },
    {
      type: "page",
      pattern: /^\/philosophy\/?$/,
      params: empty,
      parts: [{id: "src/routes/philosophy/index.svelte", load: components[1]}],
      css: ["assets/start-9948e9bb.css", "assets/pages/philosophy/index.svelte-e344f630.css", "assets/Cover-3b709232.css", "assets/Section-77bf4b99.css", "assets/TabHeaders-8887b095.css"],
      js: ["start-3b585803.js", "chunks/index-d91e1ed8.js", "chunks/index-cc16b092.js", "chunks/pages-ac57da01.js", "pages/philosophy/index.svelte-9c3c7726.js", "chunks/Cover-12fb2afa.js", "chunks/Section-b530c020.js", "chunks/TabHeaders-cad36516.js"]
    },
    {
      type: "page",
      pattern: /^\/prototype\/?$/,
      params: empty,
      parts: [{id: "src/routes/prototype/index.svelte", load: components[2]}],
      css: ["assets/start-9948e9bb.css", "assets/pages/prototype/index.svelte-5923df56.css", "assets/Cover-3b709232.css", "assets/Section-77bf4b99.css", "assets/TabHeaders-8887b095.css"],
      js: ["start-3b585803.js", "chunks/index-d91e1ed8.js", "chunks/index-cc16b092.js", "chunks/pages-ac57da01.js", "pages/prototype/index.svelte-eb4365f6.js", "chunks/Cover-12fb2afa.js", "chunks/Section-b530c020.js", "chunks/TabHeaders-cad36516.js"]
    },
    {
      type: "page",
      pattern: /^\/artworks\/?$/,
      params: empty,
      parts: [{id: "src/routes/artworks/index.svelte", load: components[3]}],
      css: ["assets/start-9948e9bb.css", "assets/pages/artworks/index.svelte-8777494e.css", "assets/Cover-3b709232.css", "assets/Img-1393e58e.css", "assets/Section-77bf4b99.css"],
      js: ["start-3b585803.js", "chunks/index-d91e1ed8.js", "chunks/index-cc16b092.js", "chunks/pages-ac57da01.js", "pages/artworks/index.svelte-c7a88438.js", "chunks/Cover-12fb2afa.js", "chunks/index-65311448.js", "chunks/index-78b22dae.js", "chunks/Img-a99bd539.js", "chunks/Section-b530c020.js"]
    },
    {
      type: "page",
      pattern: /^\/about\/?$/,
      params: empty,
      parts: [{id: "src/routes/about/index.svelte", load: components[4]}],
      css: ["assets/start-9948e9bb.css", "assets/pages/about/index.svelte-f7bd1f2b.css", "assets/Section-77bf4b99.css"],
      js: ["start-3b585803.js", "chunks/index-d91e1ed8.js", "chunks/index-cc16b092.js", "chunks/pages-ac57da01.js", "pages/about/index.svelte-497830d7.js", "chunks/Section-b530c020.js", "chunks/index-c4bdeab8.js", "chunks/index-78b22dae.js"]
    },
    {
      type: "page",
      pattern: /^\/lab\/?$/,
      params: empty,
      parts: [{id: "src/routes/lab/index.svelte", load: components[5]}],
      css: ["assets/start-9948e9bb.css", "assets/pages/lab/index.svelte-f721ad29.css", "assets/Cover-3b709232.css", "assets/Section-77bf4b99.css"],
      js: ["start-3b585803.js", "chunks/index-d91e1ed8.js", "chunks/index-cc16b092.js", "chunks/pages-ac57da01.js", "pages/lab/index.svelte-5e4a0fb2.js", "chunks/Cover-12fb2afa.js", "chunks/Section-b530c020.js", "chunks/index-c4bdeab8.js", "chunks/index-65311448.js", "chunks/index-78b22dae.js"]
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
    entry: "/./_app/start-3b585803.js",
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
  },
  {
    title: "Holistic Prototype",
    subtitle: "A Frontend Design System",
    text: "Svelte.js, Sass...",
    img: "./img/bg2.jpg"
  }
];
var Section_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-1g4euiq,.svelte-1g4euiq:before,.svelte-1g4euiq:after{box-sizing:border-box}\nsection.svelte-1g4euiq{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\nsection.svelte-1g4euiq{display:block}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@keyframes svelte-1g4euiq-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-1g4euiq-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-1g4euiq-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-1g4euiq:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-1g4euiq::selection{color:black;background-color:white;text-shadow:none}\n.tachado.svelte-1g4euiq{text-decoration:line-through}\n.not-clickable.svelte-1g4euiq{pointer-events:none}\nsection.svelte-1g4euiq{padding:1.618rem}\n@media(min-width: 769px){section.svelte-1g4euiq{padding:2.618rem}}\n.Section_0.svelte-1g4euiq{min-height:50vh;color:#110e08;background-color:#e5e5e5}\n.Section_1.svelte-1g4euiq{padding:0;min-height:50vh;color:white;background-color:#414141}\n.Section_2.svelte-1g4euiq{display:grid;place-content:center;color:#e5e5e5;background-color:#2a2929}\n.Section_3.svelte-1g4euiq{color:black;background-color:#b4b4b4;padding:0}\n.Section_4.svelte-1g4euiq{color:#110e08;background-color:#b4b4b4;padding:2.618rem}\n.Section_5.svelte-1g4euiq{padding:0;min-height:50vh;color:#110e08;background-color:white}\n.Section_6.svelte-1g4euiq{min-height:50vh;color:#e5e5e5;background-color:#414141}';
const css$q = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");.svelte-1g4euiq,.svelte-1g4euiq:before,.svelte-1g4euiq:after{box-sizing:border-box}section.svelte-1g4euiq{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}section.svelte-1g4euiq{display:block}@media(min-width: 769px){}@media(min-width: 1023px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 769px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}@keyframes svelte-1g4euiq-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-1g4euiq-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-1g4euiq-loading{50%{transform:scale(1.2);opacity:0.7}}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-1g4euiq:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-1g4euiq::selection{color:black;background-color:white;text-shadow:none}.tachado.svelte-1g4euiq{text-decoration:line-through}.not-clickable.svelte-1g4euiq{pointer-events:none}section.svelte-1g4euiq{padding:1.618rem}@media(min-width: 769px){section.svelte-1g4euiq{padding:2.618rem}}.Section_0.svelte-1g4euiq{min-height:50vh;color:#110e08;background-color:#e5e5e5}.Section_1.svelte-1g4euiq{padding:0;min-height:50vh;color:white;background-color:#414141}.Section_2.svelte-1g4euiq{display:grid;place-content:center;color:#e5e5e5;background-color:#2a2929}.Section_3.svelte-1g4euiq{color:black;background-color:#b4b4b4;padding:0}.Section_4.svelte-1g4euiq{color:#110e08;background-color:#b4b4b4;padding:2.618rem}.Section_5.svelte-1g4euiq{padding:0;min-height:50vh;color:#110e08;background-color:white}.Section_6.svelte-1g4euiq{min-height:50vh;color:#e5e5e5;background-color:#414141}',
  map: '{"version":3,"file":"Section.svelte","sources":["Section.svelte"],"sourcesContent":["<script>\\n    export let variante = 0;\\n    export let id = \\"\\";\\n    let modificador = [\\n        \\"Section_0\\",\\n        \\"Section_1\\",\\n        \\"Section_2\\",\\n        \\"Section_3\\",\\n        \\"Section_4\\",\\n        \\"Section_5\\",\\n        \\"Section_6\\"\\n    ];\\n</script>\\n\\n<section    {id}\\n            class={modificador[variante]}\\n>\\n    <slot />\\n</section>\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nsvg {\\n  max-height: 90vh;\\n}\\n\\nbody,\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Montserrat\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nul {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  display: flex;\\n  flex-direction: column;\\n  margin-top: 11.089rem;\\n  background-color: blue;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 40.896px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 86.4px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 144px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 144px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 57.6px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 28.8px;\\n  }\\n}\\n\\nsmall,\\np {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n\\nhgroup {\\n  margin-bottom: 1.618rem;\\n}\\n\\n@media (min-width: 769px) {\\n  p,\\nh4 {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #d3b39c;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: blue;\\n}\\n\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: blue;\\n  border: 1px solid blue;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\nbody {\\n  background-color: #414141;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\nimg {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.tachado {\\n  text-decoration: line-through;\\n}\\n\\n.not-clickable {\\n  pointer-events: none;\\n}\\n\\nvideo {\\n  width: 100%;\\n  object-fit: cover;\\n  /* mix-blend-mode: luminosity; */\\n  /* border-radius: $h2; */\\n}\\n\\nsection {\\n  padding: 1.618rem;\\n}\\n@media (min-width: 769px) {\\n  section {\\n    padding: 2.618rem;\\n  }\\n}\\n\\n.Section_0 {\\n  min-height: 50vh;\\n  color: #110e08;\\n  background-color: #e5e5e5;\\n}\\n\\n.Section_1 {\\n  padding: 0;\\n  min-height: 50vh;\\n  color: white;\\n  background-color: #414141;\\n}\\n\\n.Section_2 {\\n  display: grid;\\n  place-content: center;\\n  color: #e5e5e5;\\n  background-color: #2a2929;\\n}\\n\\n.Section_3 {\\n  color: black;\\n  background-color: #b4b4b4;\\n  padding: 0;\\n}\\n\\n.Section_4 {\\n  color: #110e08;\\n  background-color: #b4b4b4;\\n  padding: 2.618rem;\\n}\\n\\n.Section_5 {\\n  padding: 0;\\n  min-height: 50vh;\\n  color: #110e08;\\n  background-color: white;\\n}\\n\\n.Section_6 {\\n  min-height: 50vh;\\n  color: #e5e5e5;\\n  background-color: #414141;\\n}</style>"],"names":[],"mappings":"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"}'
};
const Section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  $$result.css.add(css$q);
  return `<section${add_attribute("id", id, 0)} class="${escape(null_to_empty(modificador[variante])) + " svelte-1g4euiq"}">${slots.default ? slots.default({}) : ``}
</section>`;
});
var GridBase_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-gpunpp.svelte-gpunpp,.svelte-gpunpp.svelte-gpunpp:before,.svelte-gpunpp.svelte-gpunpp:after{box-sizing:border-box}\ndiv.svelte-gpunpp.svelte-gpunpp{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@keyframes svelte-gpunpp-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-gpunpp-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-gpunpp-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-gpunpp.svelte-gpunpp:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-gpunpp.svelte-gpunpp::selection{color:black;background-color:white;text-shadow:none}\n.tachado.svelte-gpunpp.svelte-gpunpp{text-decoration:line-through}\n.not-clickable.svelte-gpunpp.svelte-gpunpp{pointer-events:none}\n.Grid_0.svelte-gpunpp.svelte-gpunpp{display:grid;min-height:50vh;gap:2.618rem;grid-template-areas:"subarea0" "subarea1" "subarea2"}\n@media(min-width: 769px){.Grid_0.svelte-gpunpp.svelte-gpunpp{grid-template-areas:"subarea1 subarea0" "subarea2 subarea0"}}\n.Grid_0.svelte-gpunpp .svelte-gpunpp:nth-child(1){grid-area:subarea1;align-self:end}\n.Grid_0.svelte-gpunpp .svelte-gpunpp:nth-child(2){grid-area:subarea0;min-width:50vw}\n.Grid_0.svelte-gpunpp .svelte-gpunpp:nth-child(3){grid-area:subarea2;display:grid;align-self:start;place-content:center}\n.Grid_1.svelte-gpunpp.svelte-gpunpp{display:grid;min-height:50vh;gap:2.618rem;grid-template-areas:"subarea0" "subarea1" "subarea2"}\n@media(min-width: 769px){.Grid_1.svelte-gpunpp.svelte-gpunpp{grid-template-areas:"subarea0 subarea1" "subarea0 subarea2"}}\n.Grid_1.svelte-gpunpp .svelte-gpunpp:nth-child(1){grid-area:subarea1;display:grid;align-self:end;text-align:center}\n.Grid_1.svelte-gpunpp .svelte-gpunpp:nth-child(2){grid-area:subarea0;min-width:50vw}\n.Grid_1.svelte-gpunpp .svelte-gpunpp:nth-child(3){grid-area:subarea2;display:grid;align-self:start;place-content:center}\n.Grid_2.svelte-gpunpp.svelte-gpunpp{display:grid;min-height:50vh;gap:2.618rem;grid-template-areas:"subarea0" "subarea1" "subarea2"}\n@media(min-width: 769px){.Grid_2.svelte-gpunpp.svelte-gpunpp{grid-template-areas:"subarea0 subarea1" "subarea0 subarea2"}}\n.Grid_2.svelte-gpunpp .svelte-gpunpp:nth-child(1){grid-area:subarea1;align-self:end}\n.Grid_2.svelte-gpunpp .svelte-gpunpp:nth-child(2){grid-area:subarea0;min-width:50vw}\n.Grid_2.svelte-gpunpp .svelte-gpunpp:nth-child(3){grid-area:subarea2;display:grid;align-self:start;place-content:center}\n.Grid_3.svelte-gpunpp.svelte-gpunpp{display:grid;min-height:50vh;gap:2.618rem;grid-template-areas:"subarea0" "subarea1" "subarea2"}\n@media(min-width: 769px){.Grid_3.svelte-gpunpp.svelte-gpunpp{grid-template-areas:"subarea1 subarea0" "subarea2 subarea2";grid-template-columns:1fr 1.618fr}}\n.Grid_3.svelte-gpunpp .svelte-gpunpp:nth-child(1){grid-area:subarea1}\n.Grid_3.svelte-gpunpp .svelte-gpunpp:nth-child(2){grid-area:subarea0;min-width:50vw}\n.Grid_3.svelte-gpunpp .svelte-gpunpp:nth-child(3){grid-area:subarea2;display:grid;place-content:center}\n.Grid_4.svelte-gpunpp.svelte-gpunpp{display:grid;min-height:50vh;gap:1rem;grid-template-areas:"subarea0" "subarea1" "subarea2";padding-bottom:2.618rem}\n@media(min-width: 769px){.Grid_4.svelte-gpunpp.svelte-gpunpp{gap:2.618rem;padding-bottom:0;grid-template-areas:"subarea1 subarea0" "subarea2 subarea0"}}\n.Grid_4.svelte-gpunpp .svelte-gpunpp:nth-child(1){grid-area:subarea1;align-self:end;padding-left:2.618rem;padding-top:1.618rem}\n.Grid_4.svelte-gpunpp .svelte-gpunpp:nth-child(2){grid-area:subarea0;min-width:50vw;background-color:#2a2929}\n.Grid_4.svelte-gpunpp .svelte-gpunpp:nth-child(3){grid-area:subarea2;display:grid;align-self:start;place-content:center;padding-right:2.618rem;padding-left:2.618rem}\n.Grid_5.svelte-gpunpp.svelte-gpunpp{display:grid;min-height:50vh;gap:1.618rem;padding-bottom:2.618rem;grid-template-areas:"subarea0" "subarea2" "subarea1"}\n@media(min-width: 769px){.Grid_5.svelte-gpunpp.svelte-gpunpp{padding-bottom:inherit;gap:2.618rem;grid-template-areas:"subarea0 subarea2" "subarea0 subarea1"}}\n.Grid_5.svelte-gpunpp .svelte-gpunpp:nth-child(1){grid-area:subarea1;justify-self:center}\n@media(min-width: 769px){.Grid_5.svelte-gpunpp .svelte-gpunpp:nth-child(1){justify-self:start;align-self:start}}\n.Grid_5.svelte-gpunpp .svelte-gpunpp:nth-child(2){grid-area:subarea0;min-width:50vw}\n.Grid_5.svelte-gpunpp .svelte-gpunpp:nth-child(3){grid-area:subarea2;display:grid;margin-left:2.618rem;margin-right:2.618rem;text-align:center}\n@media(min-width: 769px){.Grid_5.svelte-gpunpp .svelte-gpunpp:nth-child(3){text-align:inherit;padding-top:2.618rem;margin-left:0}}';
const css$p = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");.svelte-gpunpp.svelte-gpunpp,.svelte-gpunpp.svelte-gpunpp:before,.svelte-gpunpp.svelte-gpunpp:after{box-sizing:border-box}div.svelte-gpunpp.svelte-gpunpp{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}@media(min-width: 769px){}@media(min-width: 1023px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 769px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}@keyframes svelte-gpunpp-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-gpunpp-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-gpunpp-loading{50%{transform:scale(1.2);opacity:0.7}}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-gpunpp.svelte-gpunpp:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-gpunpp.svelte-gpunpp::selection{color:black;background-color:white;text-shadow:none}.tachado.svelte-gpunpp.svelte-gpunpp{text-decoration:line-through}.not-clickable.svelte-gpunpp.svelte-gpunpp{pointer-events:none}.Grid_0.svelte-gpunpp.svelte-gpunpp{display:grid;min-height:50vh;gap:2.618rem;grid-template-areas:"subarea0" "subarea1" "subarea2"}@media(min-width: 769px){.Grid_0.svelte-gpunpp.svelte-gpunpp{grid-template-areas:"subarea1 subarea0" "subarea2 subarea0"}}.Grid_0.svelte-gpunpp .svelte-gpunpp:nth-child(1){grid-area:subarea1;align-self:end}.Grid_0.svelte-gpunpp .svelte-gpunpp:nth-child(2){grid-area:subarea0;min-width:50vw}.Grid_0.svelte-gpunpp .svelte-gpunpp:nth-child(3){grid-area:subarea2;display:grid;align-self:start;place-content:center}.Grid_1.svelte-gpunpp.svelte-gpunpp{display:grid;min-height:50vh;gap:2.618rem;grid-template-areas:"subarea0" "subarea1" "subarea2"}@media(min-width: 769px){.Grid_1.svelte-gpunpp.svelte-gpunpp{grid-template-areas:"subarea0 subarea1" "subarea0 subarea2"}}.Grid_1.svelte-gpunpp .svelte-gpunpp:nth-child(1){grid-area:subarea1;display:grid;align-self:end;text-align:center}.Grid_1.svelte-gpunpp .svelte-gpunpp:nth-child(2){grid-area:subarea0;min-width:50vw}.Grid_1.svelte-gpunpp .svelte-gpunpp:nth-child(3){grid-area:subarea2;display:grid;align-self:start;place-content:center}.Grid_2.svelte-gpunpp.svelte-gpunpp{display:grid;min-height:50vh;gap:2.618rem;grid-template-areas:"subarea0" "subarea1" "subarea2"}@media(min-width: 769px){.Grid_2.svelte-gpunpp.svelte-gpunpp{grid-template-areas:"subarea0 subarea1" "subarea0 subarea2"}}.Grid_2.svelte-gpunpp .svelte-gpunpp:nth-child(1){grid-area:subarea1;align-self:end}.Grid_2.svelte-gpunpp .svelte-gpunpp:nth-child(2){grid-area:subarea0;min-width:50vw}.Grid_2.svelte-gpunpp .svelte-gpunpp:nth-child(3){grid-area:subarea2;display:grid;align-self:start;place-content:center}.Grid_3.svelte-gpunpp.svelte-gpunpp{display:grid;min-height:50vh;gap:2.618rem;grid-template-areas:"subarea0" "subarea1" "subarea2"}@media(min-width: 769px){.Grid_3.svelte-gpunpp.svelte-gpunpp{grid-template-areas:"subarea1 subarea0" "subarea2 subarea2";grid-template-columns:1fr 1.618fr}}.Grid_3.svelte-gpunpp .svelte-gpunpp:nth-child(1){grid-area:subarea1}.Grid_3.svelte-gpunpp .svelte-gpunpp:nth-child(2){grid-area:subarea0;min-width:50vw}.Grid_3.svelte-gpunpp .svelte-gpunpp:nth-child(3){grid-area:subarea2;display:grid;place-content:center}.Grid_4.svelte-gpunpp.svelte-gpunpp{display:grid;min-height:50vh;gap:1rem;grid-template-areas:"subarea0" "subarea1" "subarea2";padding-bottom:2.618rem}@media(min-width: 769px){.Grid_4.svelte-gpunpp.svelte-gpunpp{gap:2.618rem;padding-bottom:0;grid-template-areas:"subarea1 subarea0" "subarea2 subarea0"}}.Grid_4.svelte-gpunpp .svelte-gpunpp:nth-child(1){grid-area:subarea1;align-self:end;padding-left:2.618rem;padding-top:1.618rem}.Grid_4.svelte-gpunpp .svelte-gpunpp:nth-child(2){grid-area:subarea0;min-width:50vw;background-color:#2a2929}.Grid_4.svelte-gpunpp .svelte-gpunpp:nth-child(3){grid-area:subarea2;display:grid;align-self:start;place-content:center;padding-right:2.618rem;padding-left:2.618rem}.Grid_5.svelte-gpunpp.svelte-gpunpp{display:grid;min-height:50vh;gap:1.618rem;padding-bottom:2.618rem;grid-template-areas:"subarea0" "subarea2" "subarea1"}@media(min-width: 769px){.Grid_5.svelte-gpunpp.svelte-gpunpp{padding-bottom:inherit;gap:2.618rem;grid-template-areas:"subarea0 subarea2" "subarea0 subarea1"}}.Grid_5.svelte-gpunpp .svelte-gpunpp:nth-child(1){grid-area:subarea1;justify-self:center}@media(min-width: 769px){.Grid_5.svelte-gpunpp .svelte-gpunpp:nth-child(1){justify-self:start;align-self:start}}.Grid_5.svelte-gpunpp .svelte-gpunpp:nth-child(2){grid-area:subarea0;min-width:50vw}.Grid_5.svelte-gpunpp .svelte-gpunpp:nth-child(3){grid-area:subarea2;display:grid;margin-left:2.618rem;margin-right:2.618rem;text-align:center}@media(min-width: 769px){.Grid_5.svelte-gpunpp .svelte-gpunpp:nth-child(3){text-align:inherit;padding-top:2.618rem;margin-left:0}}',
  map: '{"version":3,"file":"GridBase.svelte","sources":["GridBase.svelte"],"sourcesContent":["<script>\\n    export let variante = 0;\\n    const modificador = [\\n        \\"Grid_0\\",\\n        \\"Grid_1\\",\\n        \\"Grid_2\\",\\n        \\"Grid_3\\",\\n        \\"Grid_4\\",\\n        \\"Grid_5\\"\\n    ];\\n</script>\\n\\n<div class={modificador[variante]}>\\n    <div><slot name=\\"subarea1\\"></slot></div>\\n    <div><slot></slot></div>\\n    <div><slot name=\\"subarea2\\"></slot></div>\\n</div>\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nsvg {\\n  max-height: 90vh;\\n}\\n\\nbody,\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Montserrat\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nul {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  display: flex;\\n  flex-direction: column;\\n  margin-top: 11.089rem;\\n  background-color: blue;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 40.896px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 86.4px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 144px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 144px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 57.6px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 28.8px;\\n  }\\n}\\n\\nsmall,\\np {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n\\nhgroup {\\n  margin-bottom: 1.618rem;\\n}\\n\\n@media (min-width: 769px) {\\n  p,\\nh4 {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #d3b39c;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: blue;\\n}\\n\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: blue;\\n  border: 1px solid blue;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\nbody {\\n  background-color: #414141;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\nimg {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.tachado {\\n  text-decoration: line-through;\\n}\\n\\n.not-clickable {\\n  pointer-events: none;\\n}\\n\\nvideo {\\n  width: 100%;\\n  object-fit: cover;\\n  /* mix-blend-mode: luminosity; */\\n  /* border-radius: $h2; */\\n}\\n\\n.Grid_0 {\\n  display: grid;\\n  min-height: 50vh;\\n  gap: 2.618rem;\\n  grid-template-areas: \\"subarea0\\" \\"subarea1\\" \\"subarea2\\";\\n}\\n@media (min-width: 769px) {\\n  .Grid_0 {\\n    grid-template-areas: \\"subarea1 subarea0\\" \\"subarea2 subarea0\\";\\n  }\\n}\\n.Grid_0 *:nth-child(1) {\\n  grid-area: subarea1;\\n  align-self: end;\\n  /* margin-bottom: $h2; */\\n}\\n.Grid_0 *:nth-child(2) {\\n  grid-area: subarea0;\\n  min-width: 50vw;\\n  /* margin-bottom: $h4; */\\n}\\n.Grid_0 *:nth-child(3) {\\n  grid-area: subarea2;\\n  display: grid;\\n  align-self: start;\\n  place-content: center;\\n}\\n\\n.Grid_1 {\\n  display: grid;\\n  min-height: 50vh;\\n  gap: 2.618rem;\\n  grid-template-areas: \\"subarea0\\" \\"subarea1\\" \\"subarea2\\";\\n}\\n@media (min-width: 769px) {\\n  .Grid_1 {\\n    grid-template-areas: \\"subarea0 subarea1\\" \\"subarea0 subarea2\\";\\n  }\\n}\\n.Grid_1 *:nth-child(1) {\\n  grid-area: subarea1;\\n  display: grid;\\n  align-self: end;\\n  text-align: center;\\n}\\n.Grid_1 *:nth-child(2) {\\n  grid-area: subarea0;\\n  min-width: 50vw;\\n}\\n.Grid_1 *:nth-child(3) {\\n  grid-area: subarea2;\\n  display: grid;\\n  align-self: start;\\n  place-content: center;\\n}\\n\\n.Grid_2 {\\n  display: grid;\\n  min-height: 50vh;\\n  gap: 2.618rem;\\n  grid-template-areas: \\"subarea0\\" \\"subarea1\\" \\"subarea2\\";\\n  /* @include media(s2) {\\n      *:nth-child(3),\\n      *:nth-child(1) {\\n          text-align: right;\\n      }\\n  } */\\n}\\n@media (min-width: 769px) {\\n  .Grid_2 {\\n    grid-template-areas: \\"subarea0 subarea1\\" \\"subarea0 subarea2\\";\\n  }\\n}\\n.Grid_2 *:nth-child(1) {\\n  grid-area: subarea1;\\n  align-self: end;\\n}\\n.Grid_2 *:nth-child(2) {\\n  grid-area: subarea0;\\n  min-width: 50vw;\\n  /* margin-bottom: $h4; */\\n}\\n.Grid_2 *:nth-child(3) {\\n  grid-area: subarea2;\\n  display: grid;\\n  align-self: start;\\n  place-content: center;\\n}\\n\\n.Grid_3 {\\n  display: grid;\\n  min-height: 50vh;\\n  gap: 2.618rem;\\n  grid-template-areas: \\"subarea0\\" \\"subarea1\\" \\"subarea2\\";\\n}\\n@media (min-width: 769px) {\\n  .Grid_3 {\\n    grid-template-areas: \\"subarea1 subarea0\\" \\"subarea2 subarea2\\";\\n    grid-template-columns: 1fr 1.618fr;\\n  }\\n}\\n.Grid_3 *:nth-child(1) {\\n  grid-area: subarea1;\\n  /* align-self: center; */\\n}\\n.Grid_3 *:nth-child(2) {\\n  grid-area: subarea0;\\n  min-width: 50vw;\\n}\\n.Grid_3 *:nth-child(3) {\\n  grid-area: subarea2;\\n  display: grid;\\n  place-content: center;\\n}\\n\\n.Grid_4 {\\n  display: grid;\\n  min-height: 50vh;\\n  gap: 1rem;\\n  grid-template-areas: \\"subarea0\\" \\"subarea1\\" \\"subarea2\\";\\n  padding-bottom: 2.618rem;\\n}\\n@media (min-width: 769px) {\\n  .Grid_4 {\\n    gap: 2.618rem;\\n    padding-bottom: 0;\\n    grid-template-areas: \\"subarea1 subarea0\\" \\"subarea2 subarea0\\";\\n  }\\n}\\n.Grid_4 *:nth-child(1) {\\n  grid-area: subarea1;\\n  align-self: end;\\n  padding-left: 2.618rem;\\n  padding-top: 1.618rem;\\n}\\n.Grid_4 *:nth-child(2) {\\n  grid-area: subarea0;\\n  min-width: 50vw;\\n  background-color: #2a2929;\\n  /* margin-bottom: $h4; */\\n}\\n.Grid_4 *:nth-child(3) {\\n  grid-area: subarea2;\\n  display: grid;\\n  align-self: start;\\n  place-content: center;\\n  padding-right: 2.618rem;\\n  padding-left: 2.618rem;\\n}\\n\\n.Grid_5 {\\n  display: grid;\\n  min-height: 50vh;\\n  gap: 1.618rem;\\n  padding-bottom: 2.618rem;\\n  grid-template-areas: \\"subarea0\\" \\"subarea2\\" \\"subarea1\\";\\n}\\n@media (min-width: 769px) {\\n  .Grid_5 {\\n    padding-bottom: inherit;\\n    gap: 2.618rem;\\n    grid-template-areas: \\"subarea0 subarea2\\" \\"subarea0 subarea1\\";\\n  }\\n}\\n.Grid_5 *:nth-child(1) {\\n  grid-area: subarea1;\\n  justify-self: center;\\n}\\n@media (min-width: 769px) {\\n  .Grid_5 *:nth-child(1) {\\n    justify-self: start;\\n    align-self: start;\\n  }\\n}\\n.Grid_5 *:nth-child(2) {\\n  grid-area: subarea0;\\n  min-width: 50vw;\\n}\\n.Grid_5 *:nth-child(3) {\\n  grid-area: subarea2;\\n  display: grid;\\n  margin-left: 2.618rem;\\n  margin-right: 2.618rem;\\n  text-align: center;\\n}\\n@media (min-width: 769px) {\\n  .Grid_5 *:nth-child(3) {\\n    text-align: inherit;\\n    padding-top: 2.618rem;\\n    margin-left: 0;\\n  }\\n}</style>"],"names":[],"mappings":"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"}'
};
const GridBase = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {variante = 0} = $$props;
  const modificador = ["Grid_0", "Grid_1", "Grid_2", "Grid_3", "Grid_4", "Grid_5"];
  if ($$props.variante === void 0 && $$bindings.variante && variante !== void 0)
    $$bindings.variante(variante);
  $$result.css.add(css$p);
  return `<div class="${escape(null_to_empty(modificador[variante])) + " svelte-gpunpp"}"><div class="${"svelte-gpunpp"}">${slots.subarea1 ? slots.subarea1({}) : ``}</div>
    <div class="${"svelte-gpunpp"}">${slots.default ? slots.default({}) : ``}</div>
    <div class="${"svelte-gpunpp"}">${slots.subarea2 ? slots.subarea2({}) : ``}</div>
</div>`;
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
var Quote_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-1t0mstl,.svelte-1t0mstl:before,.svelte-1t0mstl:after{box-sizing:border-box}\ndiv.svelte-1t0mstl,p.svelte-1t0mstl{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\nq.svelte-1t0mstl{quotes:none}\nq.svelte-1t0mstl:before,q.svelte-1t0mstl:after{content:"";content:none}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\np.svelte-1t0mstl{font-size:1rem;line-height:28.8px}\n@media(min-width: 769px){p.svelte-1t0mstl{max-width:769px;margin-left:auto;margin-right:auto}}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@keyframes svelte-1t0mstl-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-1t0mstl-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-1t0mstl-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-1t0mstl:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-1t0mstl::selection{color:black;background-color:white;text-shadow:none}\n.mySlides.svelte-1t0mstl{background-size:cover;display:grid;place-items:center;place-content:center;width:100%;height:inherit;text-align:center;position:absolute}\nq.svelte-1t0mstl{color:#e5e5e5;align-self:end}\nq.svelte-1t0mstl,p.svelte-1t0mstl{font-style:italic;font-size:1rem;line-height:28.8px;max-width:75%}\n@media(min-width: 1023px){q.svelte-1t0mstl,p.svelte-1t0mstl{font-size:1.618rem;line-height:40.896px}}\n.author.svelte-1t0mstl{text-align:right;margin:7px 0;color:#b4b4b4}';
const css$o = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");.svelte-1t0mstl,.svelte-1t0mstl:before,.svelte-1t0mstl:after{box-sizing:border-box}div.svelte-1t0mstl,p.svelte-1t0mstl{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}q.svelte-1t0mstl{quotes:none}q.svelte-1t0mstl:before,q.svelte-1t0mstl:after{content:"";content:none}@media(min-width: 769px){}@media(min-width: 1023px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 2140px){}@media(min-width: 374px){}p.svelte-1t0mstl{font-size:1rem;line-height:28.8px}@media(min-width: 769px){p.svelte-1t0mstl{max-width:769px;margin-left:auto;margin-right:auto}}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}@keyframes svelte-1t0mstl-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-1t0mstl-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-1t0mstl-loading{50%{transform:scale(1.2);opacity:0.7}}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-1t0mstl:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-1t0mstl::selection{color:black;background-color:white;text-shadow:none}.mySlides.svelte-1t0mstl{background-size:cover;display:grid;place-items:center;place-content:center;width:100%;height:inherit;text-align:center;position:absolute}q.svelte-1t0mstl{color:#e5e5e5;align-self:end}q.svelte-1t0mstl,p.svelte-1t0mstl{font-style:italic;font-size:1rem;line-height:28.8px;max-width:75%}@media(min-width: 1023px){q.svelte-1t0mstl,p.svelte-1t0mstl{font-size:1.618rem;line-height:40.896px}}.author.svelte-1t0mstl{text-align:right;margin:7px 0;color:#b4b4b4}',
  map: `{"version":3,"file":"Quote.svelte","sources":["Quote.svelte"],"sourcesContent":["<script>\\n\\timport {\\n\\t\\tfade\\n\\t} from 'svelte/transition';\\n\\t//   export let selectedQuote;\\n\\t// \\texport let qIndex\\n\\texport let quote;\\n\\texport let author;\\n\\texport let image;\\n</script>\\n\\n<!-- Quote template -->\\n<div class=\\"mySlides\\" transition:fade\\nstyle=\\"background-image: url({image});\\">\\n\\t<q>{quote}</q>\\n\\t<p class=\\"author\\">&mdash;{author}</p>\\n</div>\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nsvg {\\n  max-height: 90vh;\\n}\\n\\nbody,\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Montserrat\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nul {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  display: flex;\\n  flex-direction: column;\\n  margin-top: 11.089rem;\\n  background-color: blue;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 40.896px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 86.4px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 144px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 144px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 57.6px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 28.8px;\\n  }\\n}\\n\\nsmall,\\np {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n\\nhgroup {\\n  margin-bottom: 1.618rem;\\n}\\n\\n@media (min-width: 769px) {\\n  p,\\nh4 {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #d3b39c;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: blue;\\n}\\n\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: blue;\\n  border: 1px solid blue;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\nbody {\\n  background-color: #414141;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\nimg {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.tachado {\\n  text-decoration: line-through;\\n}\\n\\n.not-clickable {\\n  pointer-events: none;\\n}\\n\\nvideo {\\n  width: 100%;\\n  object-fit: cover;\\n  /* mix-blend-mode: luminosity; */\\n  /* border-radius: $h2; */\\n}\\n\\n.mySlides {\\n  background-size: cover;\\n  display: grid;\\n  place-items: center;\\n  place-content: center;\\n  width: 100%;\\n  height: inherit;\\n  text-align: center;\\n  position: absolute;\\n  /* margin-bottom: $h5; */\\n  /*\\tNOTE: Use with #key -- You just need the direct children position to always be in the same place (i.e. fixed), regardless of their position in DOM (well, for this transition at least) */\\n}\\n\\nq {\\n  color: #e5e5e5;\\n  align-self: end;\\n}\\n\\nq,\\np {\\n  font-style: italic;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  max-width: 75%;\\n}\\n@media (min-width: 1023px) {\\n  q,\\np {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n\\n.author {\\n  text-align: right;\\n  margin: 7px 0;\\n  color: #b4b4b4;\\n}</style>"],"names":[],"mappings":"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"}`
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
  $$result.css.add(css$o);
  return `
<div class="${"mySlides svelte-1t0mstl"}" style="${"background-image: url(" + escape(image) + ");"}"><q class="${"svelte-1t0mstl"}">${escape(quote)}</q>
	<p class="${"author svelte-1t0mstl"}">\u2014${escape(author)}</p>
</div>`;
});
var Dot_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-10d72ji,.svelte-10d72ji:before,.svelte-10d72ji:after{box-sizing:border-box}\nspan.svelte-10d72ji{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@keyframes svelte-10d72ji-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-10d72ji-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-10d72ji-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-10d72ji:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-10d72ji::selection{color:black;background-color:white;text-shadow:none}\n.not-clickable.svelte-10d72ji{pointer-events:none}\n.dot.svelte-10d72ji{cursor:pointer;height:15px;width:15px;margin:0 5px;background-color:#b4b4b4;border-radius:50%;display:inline-block;transition:background-color 0.3s ease}\n.active.svelte-10d72ji,.dot.svelte-10d72ji:hover{background-color:#e8b28a}\n.not-clickable.svelte-10d72ji{pointer-events:none}';
const css$n = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");.svelte-10d72ji,.svelte-10d72ji:before,.svelte-10d72ji:after{box-sizing:border-box}span.svelte-10d72ji{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}@media(min-width: 769px){}@media(min-width: 1023px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 769px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}@keyframes svelte-10d72ji-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-10d72ji-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-10d72ji-loading{50%{transform:scale(1.2);opacity:0.7}}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-10d72ji:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-10d72ji::selection{color:black;background-color:white;text-shadow:none}.not-clickable.svelte-10d72ji{pointer-events:none}.dot.svelte-10d72ji{cursor:pointer;height:15px;width:15px;margin:0 5px;background-color:#b4b4b4;border-radius:50%;display:inline-block;transition:background-color 0.3s ease}.active.svelte-10d72ji,.dot.svelte-10d72ji:hover{background-color:#e8b28a}.not-clickable.svelte-10d72ji{pointer-events:none}',
  map: '{"version":3,"file":"Dot.svelte","sources":["Dot.svelte"],"sourcesContent":["<script>\\n    export let quoteIndex;\\n    export let counter\\n    export let attribution;\\n    export let autoPlaying;\\n</script>\\n\\n<span class=\\"dot\\" class:active={quoteIndex===counter} class:not-clickable={autoPlaying} title={`quote by ${attribution}`} on:click></span>\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nsvg {\\n  max-height: 90vh;\\n}\\n\\nbody,\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Montserrat\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nul {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  display: flex;\\n  flex-direction: column;\\n  margin-top: 11.089rem;\\n  background-color: blue;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 40.896px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 86.4px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 144px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 144px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 57.6px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 28.8px;\\n  }\\n}\\n\\nsmall,\\np {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n\\nhgroup {\\n  margin-bottom: 1.618rem;\\n}\\n\\n@media (min-width: 769px) {\\n  p,\\nh4 {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #d3b39c;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: blue;\\n}\\n\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: blue;\\n  border: 1px solid blue;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\nbody {\\n  background-color: #414141;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\nimg {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.tachado {\\n  text-decoration: line-through;\\n}\\n\\n.not-clickable {\\n  pointer-events: none;\\n}\\n\\nvideo {\\n  width: 100%;\\n  object-fit: cover;\\n  /* mix-blend-mode: luminosity; */\\n  /* border-radius: $h2; */\\n}\\n\\n.dot {\\n  cursor: pointer;\\n  height: 15px;\\n  width: 15px;\\n  margin: 0 5px;\\n  background-color: #b4b4b4;\\n  border-radius: 50%;\\n  display: inline-block;\\n  transition: background-color 0.3s ease;\\n}\\n\\n/* Add a background color to the active dot/circle */\\n.active,\\n.dot:hover {\\n  background-color: #e8b28a;\\n}\\n\\n.not-clickable {\\n  pointer-events: none;\\n}</style>"],"names":[],"mappings":"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"}'
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
  $$result.css.add(css$n);
  return `<span class="${[
    "dot svelte-10d72ji",
    (quoteIndex === counter ? "active" : "") + " " + (autoPlaying ? "not-clickable" : "")
  ].join(" ").trim()}"${add_attribute("title", `quote by ${attribution}`, 0)}></span>`;
});
var AutoPlayBtn_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-pyabmg.svelte-pyabmg,.svelte-pyabmg.svelte-pyabmg:before,.svelte-pyabmg.svelte-pyabmg:after{box-sizing:border-box}\ndiv.svelte-pyabmg.svelte-pyabmg,span.svelte-pyabmg.svelte-pyabmg,label.svelte-pyabmg.svelte-pyabmg{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\ninput.svelte-pyabmg.svelte-pyabmg{-webkit-appearance:none;border-radius:0}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\ninput.svelte-pyabmg.svelte-pyabmg{border:none;font-family:inherit;font-size:1rem;line-height:28.8px;font-weight:inherit;color:#414141}\n@keyframes svelte-pyabmg-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-pyabmg-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-pyabmg-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-pyabmg.svelte-pyabmg:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-pyabmg.svelte-pyabmg::selection{color:black;background-color:white;text-shadow:none}\n.switch-cont.svelte-pyabmg.svelte-pyabmg{position:absolute;right:1rem;bottom:-0.618rem}\n.switch-cont.svelte-pyabmg.svelte-pyabmg:hover:after{content:"Auto-play";width:4.236rem;position:absolute;right:1.618rem;top:-1.618rem;background-color:white;border-radius:0.618rem;font-size:0.618rem;line-height:17.7777777778px}\n.switch.svelte-pyabmg.svelte-pyabmg{position:relative;display:inline-block;width:4.236rem;height:35px}\n.switch.svelte-pyabmg input.svelte-pyabmg{opacity:0;width:0;height:0}\n.slider.svelte-pyabmg.svelte-pyabmg{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#e5e5e5;transition:0.4s}\n.slider.svelte-pyabmg.svelte-pyabmg:before{position:absolute;content:"";height:1.618rem;width:1.618rem;left:4px;bottom:4px;background-color:rgba(255, 255, 255, 0.85);transition:0.4s}\ninput.svelte-pyabmg:checked+.slider.svelte-pyabmg{background-color:#e8b28a}\ninput.svelte-pyabmg:checked+.slider.svelte-pyabmg:before{transform:translateX(26px)}\n.slider.round.svelte-pyabmg.svelte-pyabmg{border-radius:1rem}\n.slider.round.svelte-pyabmg.svelte-pyabmg:before{border-radius:50%}';
const css$m = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");.svelte-pyabmg.svelte-pyabmg,.svelte-pyabmg.svelte-pyabmg:before,.svelte-pyabmg.svelte-pyabmg:after{box-sizing:border-box}div.svelte-pyabmg.svelte-pyabmg,span.svelte-pyabmg.svelte-pyabmg,label.svelte-pyabmg.svelte-pyabmg{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}input.svelte-pyabmg.svelte-pyabmg{-webkit-appearance:none;border-radius:0}@media(min-width: 769px){}@media(min-width: 1023px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 769px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}input.svelte-pyabmg.svelte-pyabmg{border:none;font-family:inherit;font-size:1rem;line-height:28.8px;font-weight:inherit;color:#414141}@keyframes svelte-pyabmg-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-pyabmg-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-pyabmg-loading{50%{transform:scale(1.2);opacity:0.7}}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-pyabmg.svelte-pyabmg:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-pyabmg.svelte-pyabmg::selection{color:black;background-color:white;text-shadow:none}.switch-cont.svelte-pyabmg.svelte-pyabmg{position:absolute;right:1rem;bottom:-0.618rem}.switch-cont.svelte-pyabmg.svelte-pyabmg:hover:after{content:"Auto-play";width:4.236rem;position:absolute;right:1.618rem;top:-1.618rem;background-color:white;border-radius:0.618rem;font-size:0.618rem;line-height:17.7777777778px}.switch.svelte-pyabmg.svelte-pyabmg{position:relative;display:inline-block;width:4.236rem;height:35px}.switch.svelte-pyabmg input.svelte-pyabmg{opacity:0;width:0;height:0}.slider.svelte-pyabmg.svelte-pyabmg{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#e5e5e5;transition:0.4s}.slider.svelte-pyabmg.svelte-pyabmg:before{position:absolute;content:"";height:1.618rem;width:1.618rem;left:4px;bottom:4px;background-color:rgba(255, 255, 255, 0.85);transition:0.4s}input.svelte-pyabmg:checked+.slider.svelte-pyabmg{background-color:#e8b28a}input.svelte-pyabmg:checked+.slider.svelte-pyabmg:before{transform:translateX(26px)}.slider.round.svelte-pyabmg.svelte-pyabmg{border-radius:1rem}.slider.round.svelte-pyabmg.svelte-pyabmg:before{border-radius:50%}',
  map: '{"version":3,"file":"AutoPlayBtn.svelte","sources":["AutoPlayBtn.svelte"],"sourcesContent":["<script>\\n    export let switchOn;\\n</script>\\n\\n<div class=\\"switch-cont\\" id=\\"auto-play-cont\\">\\n    <!-- Rounded switch -->\\n    <label class=\\"switch\\">\\n        <input type=\\"checkbox\\" bind:checked={switchOn} on:change>\\n        <span class=\\"slider round\\"></span>\\n    </label>\\n</div>\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nsvg {\\n  max-height: 90vh;\\n}\\n\\nbody,\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Montserrat\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nul {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  display: flex;\\n  flex-direction: column;\\n  margin-top: 11.089rem;\\n  background-color: blue;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 40.896px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 86.4px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 144px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 144px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 57.6px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 28.8px;\\n  }\\n}\\n\\nsmall,\\np {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n\\nhgroup {\\n  margin-bottom: 1.618rem;\\n}\\n\\n@media (min-width: 769px) {\\n  p,\\nh4 {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #d3b39c;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: blue;\\n}\\n\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: blue;\\n  border: 1px solid blue;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\nbody {\\n  background-color: #414141;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\nimg {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.tachado {\\n  text-decoration: line-through;\\n}\\n\\n.not-clickable {\\n  pointer-events: none;\\n}\\n\\nvideo {\\n  width: 100%;\\n  object-fit: cover;\\n  /* mix-blend-mode: luminosity; */\\n  /* border-radius: $h2; */\\n}\\n\\n.switch-cont {\\n  position: absolute;\\n  right: 1rem;\\n  bottom: -0.618rem;\\n}\\n.switch-cont:hover:after {\\n  content: \\"Auto-play\\";\\n  width: 4.236rem;\\n  position: absolute;\\n  right: 1.618rem;\\n  top: -1.618rem;\\n  background-color: white;\\n  /* padding: 5px 0; */\\n  border-radius: 0.618rem;\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n\\n/* The switch - the box around the slider */\\n.switch {\\n  position: relative;\\n  display: inline-block;\\n  width: 4.236rem;\\n  height: 35px;\\n}\\n\\n/* Hide default HTML checkbox */\\n.switch input {\\n  opacity: 0;\\n  width: 0;\\n  height: 0;\\n}\\n\\n/* The slider */\\n.slider {\\n  position: absolute;\\n  cursor: pointer;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  bottom: 0;\\n  background-color: #e5e5e5;\\n  transition: 0.4s;\\n}\\n\\n.slider:before {\\n  position: absolute;\\n  content: \\"\\";\\n  height: 1.618rem;\\n  width: 1.618rem;\\n  left: 4px;\\n  bottom: 4px;\\n  background-color: rgba(255, 255, 255, 0.85);\\n  transition: 0.4s;\\n}\\n\\ninput:checked + .slider {\\n  background-color: #e8b28a;\\n}\\n\\n/* input:focus+.slider {\\n    box-shadow: 0 0 1px $grey_4;\\n} */\\ninput:checked + .slider:before {\\n  transform: translateX(26px);\\n}\\n\\n/* Rounded sliders */\\n.slider.round {\\n  border-radius: 1rem;\\n}\\n\\n.slider.round:before {\\n  border-radius: 50%;\\n}</style>"],"names":[],"mappings":"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"}'
};
const AutoPlayBtn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {switchOn} = $$props;
  if ($$props.switchOn === void 0 && $$bindings.switchOn && switchOn !== void 0)
    $$bindings.switchOn(switchOn);
  $$result.css.add(css$m);
  return `<div class="${"switch-cont svelte-pyabmg"}" id="${"auto-play-cont"}">
    <label class="${"switch svelte-pyabmg"}"><input type="${"checkbox"}" class="${"svelte-pyabmg"}"${add_attribute("checked", switchOn, 1)}>
        <span class="${"slider round svelte-pyabmg"}"></span></label>
</div>`;
});
var QuoteRotator_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-4iyd70,.svelte-4iyd70:before,.svelte-4iyd70:after{box-sizing:border-box}\ndiv.svelte-4iyd70,span.svelte-4iyd70{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@keyframes svelte-4iyd70-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-4iyd70-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-4iyd70-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-4iyd70:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-4iyd70::selection{color:black;background-color:white;text-shadow:none}\n.not-clickable.svelte-4iyd70{pointer-events:none}\n.slideshow-container.svelte-4iyd70{position:relative;height:50vh}\n@media(min-width: 1023px){.slideshow-container.svelte-4iyd70{height:70vh}}\n.dot-container.svelte-4iyd70{position:absolute;bottom:-10px;right:0;width:75%}\n@media(min-width: 769px){.dot-container.svelte-4iyd70{width:30%}}\n.prev.svelte-4iyd70,.next.svelte-4iyd70{cursor:pointer;position:absolute;top:50%;width:auto;margin-top:-1.618rem;padding:1.618rem;color:#e5e5e5;font-weight:bold;font-size:1.618rem;line-height:40.896px;border-radius:0 3px 3px 0;user-select:none}\n.prev.svelte-4iyd70{left:0}\n.next.svelte-4iyd70{position:absolute;right:0;border-radius:3px 0 0 3px}\n.prev.svelte-4iyd70:hover,.next.svelte-4iyd70:hover{background-color:rgba(0, 0, 0, 0.8);color:white;text-decoration:none}';
const css$l = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");.svelte-4iyd70,.svelte-4iyd70:before,.svelte-4iyd70:after{box-sizing:border-box}div.svelte-4iyd70,span.svelte-4iyd70{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}@media(min-width: 769px){}@media(min-width: 1023px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 769px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}@keyframes svelte-4iyd70-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-4iyd70-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-4iyd70-loading{50%{transform:scale(1.2);opacity:0.7}}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-4iyd70:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-4iyd70::selection{color:black;background-color:white;text-shadow:none}.not-clickable.svelte-4iyd70{pointer-events:none}.slideshow-container.svelte-4iyd70{position:relative;height:50vh}@media(min-width: 1023px){.slideshow-container.svelte-4iyd70{height:70vh}}.dot-container.svelte-4iyd70{position:absolute;bottom:-10px;right:0;width:75%}@media(min-width: 769px){.dot-container.svelte-4iyd70{width:30%}}.prev.svelte-4iyd70,.next.svelte-4iyd70{cursor:pointer;position:absolute;top:50%;width:auto;margin-top:-1.618rem;padding:1.618rem;color:#e5e5e5;font-weight:bold;font-size:1.618rem;line-height:40.896px;border-radius:0 3px 3px 0;user-select:none}.prev.svelte-4iyd70{left:0}.next.svelte-4iyd70{position:absolute;right:0;border-radius:3px 0 0 3px}.prev.svelte-4iyd70:hover,.next.svelte-4iyd70:hover{background-color:rgba(0, 0, 0, 0.8);color:white;text-decoration:none}',
  map: `{"version":3,"file":"QuoteRotator.svelte","sources":["QuoteRotator.svelte"],"sourcesContent":["<script>\\n\\timport {\\n\\t\\tquotes\\n\\t} from '$lib/data/quoteData.js';\\n\\timport Quote from './Quote.svelte';\\n\\timport Dot from './Dot.svelte';\\n\\timport AutoPlayBtn from './AutoPlayBtn.svelte';\\n\\n\\t/* ADVANCE QUOTE */\\n\\tlet quoteIndex = 0;\\n\\t$: quote = quotes[quoteIndex].quote;\\n\\t$: author = quotes[quoteIndex].author;\\n\\t$: image = quotes[quoteIndex].image;\\n\\n\\tconst nextQuote = () => {\\n\\t\\tif (quoteIndex === quotes.length - 1) {\\n\\t\\t\\tquoteIndex = 0;\\n\\t\\t} else {\\n\\t\\t\\tquoteIndex += 1;\\n\\t\\t}\\n\\t}\\n\\n\\tconst prevQuote = () => {\\n\\t\\tif (quoteIndex === 0) {\\n\\t\\t\\tquoteIndex = quotes.length - 1;\\n\\t\\t} else {\\n\\t\\t\\tquoteIndex -= 1;\\n\\t\\t}\\n\\t}\\n\\n\\t/* AUTO PLAY */\\n\\tlet switchOn = false;\\n\\tlet autoAdvance;\\n\\tlet autoPlaying = false;\\n\\n\\tconst handleAutoAdv = () => {\\n\\t\\tif (switchOn) {\\n\\t\\t\\tautoAdvance = setInterval(nextQuote, 5000);\\n\\t\\t\\tautoPlaying = true;\\n\\t\\t} else {\\n\\t\\t\\tclearInterval(autoAdvance);\\n\\t\\t\\tautoPlaying = false;\\n\\t\\t}\\n\\t}\\n</script>\\n\\n<div class=\\"slideshow-container\\">\\n\\n\\t\\t<!-- THE QUOTE -->\\n\\t\\t{#key quote}\\n\\t\\t\\t<Quote {quote} {author} {image}/>\\n\\t\\t{/key}\\n\\t\\t\\n\\t\\t<!-- Next/prev buttons -->\\n\\t\\t<span href=\\"#prev\\" \\n\\t\\t\\t\\tclass=\\"prev\\" \\n\\t\\t\\t\\tclass:not-clickable={autoPlaying}\\n\\t\\t\\t\\ttitle=\\"previous quote\\" \\n\\t\\t\\t\\ton:click={prevQuote}>&#10094;</span>\\n\\t\\t\\n\\t\\t<span href=\\"#next\\" \\n\\t\\t\\t\\tclass=\\"next\\" \\n\\t\\t\\t\\tclass:not-clickable={autoPlaying}\\n\\t\\t\\t\\ttitle=\\"next quote\\" \\n\\t\\t\\t\\ton:click={nextQuote}>&#10095;</span>\\n\\t\\t\\t\\t\\n\\t\\t\\t\\t<!-- Dots/bullets/indicators -->\\n\\t\\t\\t\\t<div class=\\"dot-container\\">\\n\\t\\t\\t\\t\\t{#each quotes as quote, i}\\n\\t\\t\\t\\t\\t\\t<Dot counter={i} \\n\\t\\t\\t\\t\\t\\t\\t{quoteIndex}\\n\\t\\t\\t\\t\\t\\t\\t{autoPlaying}\\n\\t\\t\\t\\t\\t\\t\\tattribution={quote.author}\\n\\t\\t\\t\\t\\t\\t\\ton:click={() => quoteIndex = i}/>\\n\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t\\n\\t\\t\\t\\t\\t<AutoPlayBtn bind:switchOn on:change={handleAutoAdv} />\\n\\t\\t\\t\\t</div>\\n\\t</div>\\n\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nsvg {\\n  max-height: 90vh;\\n}\\n\\nbody,\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Montserrat\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nul {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  display: flex;\\n  flex-direction: column;\\n  margin-top: 11.089rem;\\n  background-color: blue;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 40.896px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 86.4px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 144px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 144px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 57.6px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 28.8px;\\n  }\\n}\\n\\nsmall,\\np {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n\\nhgroup {\\n  margin-bottom: 1.618rem;\\n}\\n\\n@media (min-width: 769px) {\\n  p,\\nh4 {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #d3b39c;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: blue;\\n}\\n\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: blue;\\n  border: 1px solid blue;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\nbody {\\n  background-color: #414141;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\nimg {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.tachado {\\n  text-decoration: line-through;\\n}\\n\\n.not-clickable {\\n  pointer-events: none;\\n}\\n\\nvideo {\\n  width: 100%;\\n  object-fit: cover;\\n  /* mix-blend-mode: luminosity; */\\n  /* border-radius: $h2; */\\n}\\n\\n/* Slideshow container */\\n.slideshow-container {\\n  position: relative;\\n  height: 50vh;\\n  /* margin-bottom: $h1; */\\n}\\n@media (min-width: 1023px) {\\n  .slideshow-container {\\n    height: 70vh;\\n  }\\n}\\n\\n/* The dot/bullet/indicator container */\\n.dot-container {\\n  position: absolute;\\n  bottom: -10px;\\n  right: 0;\\n  width: 75%;\\n}\\n@media (min-width: 769px) {\\n  .dot-container {\\n    width: 30%;\\n  }\\n}\\n\\n/* Next & previous buttons */\\n.prev, .next {\\n  cursor: pointer;\\n  position: absolute;\\n  top: 50%;\\n  width: auto;\\n  margin-top: -1.618rem;\\n  padding: 1.618rem;\\n  color: #e5e5e5;\\n  font-weight: bold;\\n  font-size: 1.618rem;\\n  line-height: 40.896px;\\n  border-radius: 0 3px 3px 0;\\n  user-select: none;\\n}\\n\\n.prev {\\n  left: 0;\\n}\\n\\n.next {\\n  position: absolute;\\n  right: 0;\\n  border-radius: 3px 0 0 3px;\\n}\\n\\n.prev:hover, .next:hover {\\n  background-color: rgba(0, 0, 0, 0.8);\\n  color: white;\\n  text-decoration: none;\\n}</style>"],"names":[],"mappings":"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"}`
};
const QuoteRotator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let quote;
  let author;
  let image;
  let quoteIndex = 0;
  let switchOn = false;
  let autoPlaying = false;
  $$result.css.add(css$l);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    quote = quotes[quoteIndex].quote;
    author = quotes[quoteIndex].author;
    image = quotes[quoteIndex].image;
    $$rendered = `<div class="${"slideshow-container svelte-4iyd70"}">
		${validate_component(Quote, "Quote").$$render($$result, {quote, author, image}, {}, {})}
		
		
		<span href="${"#prev"}" class="${["prev svelte-4iyd70", ""].join(" ").trim()}" title="${"previous quote"}">\u276E</span>
		
		<span href="${"#next"}" class="${["next svelte-4iyd70", ""].join(" ").trim()}" title="${"next quote"}">\u276F</span>
				
				
				<div class="${"dot-container svelte-4iyd70"}">${each(quotes, (quote2, i) => `${validate_component(Dot, "Dot").$$render($$result, {
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
    }, {})}</div>
	</div>`;
  } while (!$$settled);
  return $$rendered;
});
var Img_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-9ry4za.svelte-9ry4za,.svelte-9ry4za.svelte-9ry4za:before,.svelte-9ry4za.svelte-9ry4za:after{box-sizing:border-box}\ndiv.svelte-9ry4za.svelte-9ry4za,figure.svelte-9ry4za.svelte-9ry4za,img.svelte-9ry4za.svelte-9ry4za{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\nfigcaption.svelte-9ry4za.svelte-9ry4za{text-align:left}\n@keyframes svelte-9ry4za-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-9ry4za-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-9ry4za-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-9ry4za.svelte-9ry4za:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-9ry4za.svelte-9ry4za::selection{color:black;background-color:white;text-shadow:none}\nimg.svelte-9ry4za.svelte-9ry4za{max-width:100%;height:auto}\n.tachado.svelte-9ry4za.svelte-9ry4za{text-decoration:line-through}\n.not-clickable.svelte-9ry4za.svelte-9ry4za{pointer-events:none}\n.Img_0.svelte-9ry4za.svelte-9ry4za{background-repeat:no-repeat;background-size:cover;background-position:center;max-width:100%;min-height:50vh}\n.Img_1.svelte-9ry4za.svelte-9ry4za{min-height:50vh;object-fit:fill}\n@media(min-width: 1023px){.Img_1.svelte-9ry4za.svelte-9ry4za{border-top:2.618rem solid #b4b4b4}}\n.Img_2.svelte-9ry4za.svelte-9ry4za{min-height:50vh;position:relative}\n.Img_2.svelte-9ry4za figcaption.svelte-9ry4za{font-size:0.618rem;line-height:17.7777777778px;position:absolute;left:1.618rem;bottom:1.618rem}\n.Img_3.svelte-9ry4za.svelte-9ry4za{background-repeat:no-repeat;background-size:cover;background-position:center;max-width:100%;min-height:50vh;border-left:2.618rem solid #b4b4b4;border-top:2.618rem solid #414141}\n.Img_4.svelte-9ry4za.svelte-9ry4za{background-repeat:no-repeat;background-size:cover;background-position:center;max-width:100%;min-height:50vh}\n@media(min-width: 769px){.Img_4.svelte-9ry4za.svelte-9ry4za{border-bottom:2.618rem solid #2a2929}}\n.Img_5.svelte-9ry4za.svelte-9ry4za{border-bottom:2.618rem solid #2a2929;background-size:cover;min-height:50vh}';
const css$k = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");.svelte-9ry4za.svelte-9ry4za,.svelte-9ry4za.svelte-9ry4za:before,.svelte-9ry4za.svelte-9ry4za:after{box-sizing:border-box}div.svelte-9ry4za.svelte-9ry4za,figure.svelte-9ry4za.svelte-9ry4za,img.svelte-9ry4za.svelte-9ry4za{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}@media(min-width: 769px){}@media(min-width: 1023px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 769px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}figcaption.svelte-9ry4za.svelte-9ry4za{text-align:left}@keyframes svelte-9ry4za-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-9ry4za-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-9ry4za-loading{50%{transform:scale(1.2);opacity:0.7}}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-9ry4za.svelte-9ry4za:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-9ry4za.svelte-9ry4za::selection{color:black;background-color:white;text-shadow:none}img.svelte-9ry4za.svelte-9ry4za{max-width:100%;height:auto}.tachado.svelte-9ry4za.svelte-9ry4za{text-decoration:line-through}.not-clickable.svelte-9ry4za.svelte-9ry4za{pointer-events:none}.Img_0.svelte-9ry4za.svelte-9ry4za{background-repeat:no-repeat;background-size:cover;background-position:center;max-width:100%;min-height:50vh}.Img_1.svelte-9ry4za.svelte-9ry4za{min-height:50vh;object-fit:fill}@media(min-width: 1023px){.Img_1.svelte-9ry4za.svelte-9ry4za{border-top:2.618rem solid #b4b4b4}}.Img_2.svelte-9ry4za.svelte-9ry4za{min-height:50vh;position:relative}.Img_2.svelte-9ry4za figcaption.svelte-9ry4za{font-size:0.618rem;line-height:17.7777777778px;position:absolute;left:1.618rem;bottom:1.618rem}.Img_3.svelte-9ry4za.svelte-9ry4za{background-repeat:no-repeat;background-size:cover;background-position:center;max-width:100%;min-height:50vh;border-left:2.618rem solid #b4b4b4;border-top:2.618rem solid #414141}.Img_4.svelte-9ry4za.svelte-9ry4za{background-repeat:no-repeat;background-size:cover;background-position:center;max-width:100%;min-height:50vh}@media(min-width: 769px){.Img_4.svelte-9ry4za.svelte-9ry4za{border-bottom:2.618rem solid #2a2929}}.Img_5.svelte-9ry4za.svelte-9ry4za{border-bottom:2.618rem solid #2a2929;background-size:cover;min-height:50vh}',
  map: '{"version":3,"file":"Img.svelte","sources":["Img.svelte"],"sourcesContent":["<script>\\n    export let src;\\n    export let alt = \\"Imagen\\";\\n    export let href = undefined;\\n    export let variante = 0;\\n    const modificadores = [\\n        \\"Img_0\\",\\n        \\"Img_1\\",\\n        \\"Img_2\\",\\n        \\"Img_3\\",\\n        \\"Img_4\\",\\n        \\"Img_5\\"\\n    ];\\n</script>\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nsvg {\\n  max-height: 90vh;\\n}\\n\\nbody,\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Montserrat\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nul {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  display: flex;\\n  flex-direction: column;\\n  margin-top: 11.089rem;\\n  background-color: blue;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 40.896px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 86.4px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 144px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 144px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 57.6px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 28.8px;\\n  }\\n}\\n\\nsmall,\\np {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n\\nhgroup {\\n  margin-bottom: 1.618rem;\\n}\\n\\n@media (min-width: 769px) {\\n  p,\\nh4 {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #d3b39c;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: blue;\\n}\\n\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: blue;\\n  border: 1px solid blue;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\nbody {\\n  background-color: #414141;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\nimg {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.tachado {\\n  text-decoration: line-through;\\n}\\n\\n.not-clickable {\\n  pointer-events: none;\\n}\\n\\nvideo {\\n  width: 100%;\\n  object-fit: cover;\\n  /* mix-blend-mode: luminosity; */\\n  /* border-radius: $h2; */\\n}\\n\\n.Img_0 {\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n  background-position: center;\\n  max-width: 100%;\\n  min-height: 50vh;\\n}\\n\\n.Img_1 {\\n  min-height: 50vh;\\n  object-fit: fill;\\n}\\n@media (min-width: 1023px) {\\n  .Img_1 {\\n    border-top: 2.618rem solid #b4b4b4;\\n  }\\n}\\n\\n.Img_2 {\\n  min-height: 50vh;\\n  position: relative;\\n}\\n.Img_2 figcaption {\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n  position: absolute;\\n  left: 1.618rem;\\n  bottom: 1.618rem;\\n}\\n\\n.Img_3 {\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n  background-position: center;\\n  max-width: 100%;\\n  min-height: 50vh;\\n  border-left: 2.618rem solid #b4b4b4;\\n  border-top: 2.618rem solid #414141;\\n}\\n\\n.Img_4 {\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n  background-position: center;\\n  max-width: 100%;\\n  min-height: 50vh;\\n}\\n@media (min-width: 769px) {\\n  .Img_4 {\\n    border-bottom: 2.618rem solid #2a2929;\\n  }\\n}\\n\\n.Img_5 {\\n  border-bottom: 2.618rem solid #2a2929;\\n  background-size: cover;\\n  min-height: 50vh;\\n}</style>\\n\\n\\n{#if (variante === 0 || variante === 3 || variante === 4)}\\n\\n    <div \\n        class={modificadores[variante]}\\n        style=\\"background-image:url({src});\\"\\n    ></div>\\n\\n{:else if (variante === 1 || variante === 5)}\\n\\n    <img {src} {alt} {href} \\n        class={modificadores[variante]} />\\n\\n{:else}\\n\\n    <figure class={modificadores[variante]}>\\n        <img {src} {alt} {href} />\\n        <figcaption class=\\"alt\\">{alt}</figcaption>\\n    </figure>\\n\\n{/if}"],"names":[],"mappings":"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"}'
};
const Img = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {src: src2} = $$props;
  let {alt = "Imagen"} = $$props;
  let {href = void 0} = $$props;
  let {variante = 0} = $$props;
  const modificadores = ["Img_0", "Img_1", "Img_2", "Img_3", "Img_4", "Img_5"];
  if ($$props.src === void 0 && $$bindings.src && src2 !== void 0)
    $$bindings.src(src2);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.variante === void 0 && $$bindings.variante && variante !== void 0)
    $$bindings.variante(variante);
  $$result.css.add(css$k);
  return `${variante === 0 || variante === 3 || variante === 4 ? `<div class="${escape(null_to_empty(modificadores[variante])) + " svelte-9ry4za"}" style="${"background-image:url(" + escape(src2) + ");"}"></div>` : `${variante === 1 || variante === 5 ? `<img${add_attribute("src", src2, 0)}${add_attribute("alt", alt, 0)}${add_attribute("href", href, 0)} class="${escape(null_to_empty(modificadores[variante])) + " svelte-9ry4za"}">` : `<figure class="${escape(null_to_empty(modificadores[variante])) + " svelte-9ry4za"}"><img${add_attribute("src", src2, 0)}${add_attribute("alt", alt, 0)}${add_attribute("href", href, 0)} class="${"svelte-9ry4za"}">
        <figcaption class="${"alt svelte-9ry4za"}">${escape(alt)}</figcaption></figure>`}`}`;
});
var Button_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-1bp600d,.svelte-1bp600d:before,.svelte-1bp600d:after{box-sizing:border-box}\na.svelte-1bp600d{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\na[target=_blank].svelte-1bp600d:after{content:" \u2924"}\n@keyframes svelte-1bp600d-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-1bp600d-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-1bp600d-loading{50%{transform:scale(1.2);opacity:0.7}}\na.svelte-1bp600d:hover{animation-name:svelte-1bp600d-fade;animation-duration:0.3s}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-1bp600d:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-1bp600d::selection{color:black;background-color:white;text-shadow:none}\n.tachado.svelte-1bp600d{text-decoration:line-through}\n.not-clickable.svelte-1bp600d{pointer-events:none}\nbutton,.button.svelte-1bp600d{background-color:transparent;padding:1rem 1.618rem;font-size:inherit;display:flex;align-items:center;justify-content:center;text-align:center;text-decoration:none;border-width:1px;border-style:dotted;position:relative}\nbutton:focus,.button.svelte-1bp600d:focus{border:none}\nbutton:after,.button.svelte-1bp600d:after{font-size:1.618rem;padding-left:0.618rem}\nbutton:hover,.button.svelte-1bp600d:hover{cursor:pointer}\n.Button_0.svelte-1bp600d{color:#b4b4b4;border-color:#b4b4b4;margin:0}\n.Button_0.svelte-1bp600d:hover{color:#110e08;background-color:#b4b4b4;border-color:#b4b4b4}\n.Button_1.svelte-1bp600d{color:#110e08;border-color:#110e08}\n.Button_2.svelte-1bp600d{color:#b4b4b4;border-color:#6c6c6c;margin-bottom:0;margin-top:0}\n.Button_2.svelte-1bp600d:hover{color:#110e08;background-color:#e5e5e5;border-color:#e5e5e5}\n.Button_3.svelte-1bp600d{color:#b4b4b4;border-color:#b4b4b4}\n.Button_3.svelte-1bp600d:hover{color:#110e08;background-color:#e5e5e5;border-color:#e5e5e5}\n.Button_4.svelte-1bp600d{color:#414141;border:1px double #110e08;margin:0;background-color:#ebba97;font-size:1rem;line-height:28.8px;border-radius:50%;width:11.089rem;height:11.089rem}\n@media(min-width: 769px){.Button_4.svelte-1bp600d{font-size:1.618rem;line-height:40.896px;width:17.942rem;height:17.942rem}}\n.Button_4.svelte-1bp600d:hover{color:#ebba97;background-color:#2a2929}\n.Button_5.svelte-1bp600d{color:black;border:none;text-align:center;margin:0;font-size:2.618rem;line-height:57.6px;display:block;background-color:transparent}\n.Button_5.svelte-1bp600d:hover{color:#e5e5e5}\n.Button_6.svelte-1bp600d{display:block;border:none;text-align:center;margin:0;font-size:1.618rem;line-height:40.896px;color:#b4b4b4;background-color:#2a2929;width:100%}\n@media(min-width: 1023px){.Button_6.svelte-1bp600d{border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:1.618rem;border-bottom-right-radius:1.618rem}}\n.Button_6.svelte-1bp600d:hover{background-color:#ebba97;color:#110e08}\n.Button_7.svelte-1bp600d{color:#b4b4b4;background-color:#2a2929;border:none;padding:1.618rem 2.618rem}\n.Button_7.svelte-1bp600d:hover{color:#e5e5e5;background-color:black}';
const css$j = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");.svelte-1bp600d,.svelte-1bp600d:before,.svelte-1bp600d:after{box-sizing:border-box}a.svelte-1bp600d{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}@media(min-width: 769px){}@media(min-width: 1023px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 769px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}a[target=_blank].svelte-1bp600d:after{content:" \u2924"}@keyframes svelte-1bp600d-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-1bp600d-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-1bp600d-loading{50%{transform:scale(1.2);opacity:0.7}}a.svelte-1bp600d:hover{animation-name:svelte-1bp600d-fade;animation-duration:0.3s}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-1bp600d:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-1bp600d::selection{color:black;background-color:white;text-shadow:none}.tachado.svelte-1bp600d{text-decoration:line-through}.not-clickable.svelte-1bp600d{pointer-events:none}button,.button.svelte-1bp600d{background-color:transparent;padding:1rem 1.618rem;font-size:inherit;display:flex;align-items:center;justify-content:center;text-align:center;text-decoration:none;border-width:1px;border-style:dotted;position:relative}button:focus,.button.svelte-1bp600d:focus{border:none}button:after,.button.svelte-1bp600d:after{font-size:1.618rem;padding-left:0.618rem}button:hover,.button.svelte-1bp600d:hover{cursor:pointer}.Button_0.svelte-1bp600d{color:#b4b4b4;border-color:#b4b4b4;margin:0}.Button_0.svelte-1bp600d:hover{color:#110e08;background-color:#b4b4b4;border-color:#b4b4b4}.Button_1.svelte-1bp600d{color:#110e08;border-color:#110e08}.Button_2.svelte-1bp600d{color:#b4b4b4;border-color:#6c6c6c;margin-bottom:0;margin-top:0}.Button_2.svelte-1bp600d:hover{color:#110e08;background-color:#e5e5e5;border-color:#e5e5e5}.Button_3.svelte-1bp600d{color:#b4b4b4;border-color:#b4b4b4}.Button_3.svelte-1bp600d:hover{color:#110e08;background-color:#e5e5e5;border-color:#e5e5e5}.Button_4.svelte-1bp600d{color:#414141;border:1px double #110e08;margin:0;background-color:#ebba97;font-size:1rem;line-height:28.8px;border-radius:50%;width:11.089rem;height:11.089rem}@media(min-width: 769px){.Button_4.svelte-1bp600d{font-size:1.618rem;line-height:40.896px;width:17.942rem;height:17.942rem}}.Button_4.svelte-1bp600d:hover{color:#ebba97;background-color:#2a2929}.Button_5.svelte-1bp600d{color:black;border:none;text-align:center;margin:0;font-size:2.618rem;line-height:57.6px;display:block;background-color:transparent}.Button_5.svelte-1bp600d:hover{color:#e5e5e5}.Button_6.svelte-1bp600d{display:block;border:none;text-align:center;margin:0;font-size:1.618rem;line-height:40.896px;color:#b4b4b4;background-color:#2a2929;width:100%}@media(min-width: 1023px){.Button_6.svelte-1bp600d{border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:1.618rem;border-bottom-right-radius:1.618rem}}.Button_6.svelte-1bp600d:hover{background-color:#ebba97;color:#110e08}.Button_7.svelte-1bp600d{color:#b4b4b4;background-color:#2a2929;border:none;padding:1.618rem 2.618rem}.Button_7.svelte-1bp600d:hover{color:#e5e5e5;background-color:black}',
  map: '{"version":3,"file":"Button.svelte","sources":["Button.svelte"],"sourcesContent":["<script>\\n    export let text = \\"\\";\\n    export let url = \\"\\";\\n    export let is_submit = false;\\n    export let target = false;\\n    export let variante = 0;\\n    export let valorinput = \\"input\\";\\n\\n    $: modificador = [\\n        \\"Button_0\\",\\n        \\"Button_1\\",\\n        \\"Button_2\\",\\n        \\"Button_3\\",\\n        \\"Button_4\\",\\n        \\"Button_5\\",\\n        \\"Button_6\\",\\n        \\"Button_7\\"\\n    ];\\n</script>\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nsvg {\\n  max-height: 90vh;\\n}\\n\\nbody,\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Montserrat\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nul {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  display: flex;\\n  flex-direction: column;\\n  margin-top: 11.089rem;\\n  background-color: blue;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 40.896px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 86.4px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 144px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 144px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 57.6px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 28.8px;\\n  }\\n}\\n\\nsmall,\\np {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n\\nhgroup {\\n  margin-bottom: 1.618rem;\\n}\\n\\n@media (min-width: 769px) {\\n  p,\\nh4 {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #d3b39c;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: blue;\\n}\\n\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: blue;\\n  border: 1px solid blue;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\nbody {\\n  background-color: #414141;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\nimg {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.tachado {\\n  text-decoration: line-through;\\n}\\n\\n.not-clickable {\\n  pointer-events: none;\\n}\\n\\nvideo {\\n  width: 100%;\\n  object-fit: cover;\\n  /* mix-blend-mode: luminosity; */\\n  /* border-radius: $h2; */\\n}\\n\\n:global(button),\\n.button {\\n  background-color: transparent;\\n  /* user-select: none; */\\n  padding: 1rem 1.618rem;\\n  font-size: inherit;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  text-align: center;\\n  text-decoration: none;\\n  border-width: 1px;\\n  border-style: dotted;\\n  /* margin-right: auto;\\n  margin-left: auto; */\\n  position: relative;\\n}\\n:global(button):focus,\\n.button:focus {\\n  border: none;\\n}\\n:global(button):after,\\n.button:after {\\n  font-size: 1.618rem;\\n  padding-left: 0.618rem;\\n}\\n:global(button):hover,\\n.button:hover {\\n  cursor: pointer;\\n}\\n\\n.Button_0 {\\n  color: #b4b4b4;\\n  border-color: #b4b4b4;\\n  margin: 0;\\n}\\n.Button_0:hover {\\n  color: #110e08;\\n  background-color: #b4b4b4;\\n  border-color: #b4b4b4;\\n}\\n\\n.Button_1 {\\n  color: #110e08;\\n  border-color: #110e08;\\n}\\n.Button_1:hover a {\\n  color: #e5e5e5;\\n  background-color: #110e08;\\n  border-color: #110e08;\\n}\\n\\n.Button_2 {\\n  color: #b4b4b4;\\n  border-color: #6c6c6c;\\n  margin-bottom: 0;\\n  margin-top: 0;\\n}\\n.Button_2:hover {\\n  color: #110e08;\\n  background-color: #e5e5e5;\\n  border-color: #e5e5e5;\\n}\\n\\n.Button_3 {\\n  color: #b4b4b4;\\n  border-color: #b4b4b4;\\n}\\n.Button_3:hover {\\n  color: #110e08;\\n  background-color: #e5e5e5;\\n  border-color: #e5e5e5;\\n}\\n\\n.Button_4 {\\n  color: #414141;\\n  border: 1px double #110e08;\\n  margin: 0;\\n  /* padding: $button_4; */\\n  background-color: #ebba97;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  border-radius: 50%;\\n  width: 11.089rem;\\n  height: 11.089rem;\\n  /* align-self: center; */\\n}\\n@media (min-width: 769px) {\\n  .Button_4 {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n    width: 17.942rem;\\n    height: 17.942rem;\\n    /* @include type-setting(1); */\\n  }\\n}\\n.Button_4:hover {\\n  color: #ebba97;\\n  background-color: #2a2929;\\n}\\n\\n.Button_5 {\\n  color: black;\\n  border: none;\\n  text-align: center;\\n  margin: 0;\\n  font-size: 2.618rem;\\n  line-height: 57.6px;\\n  display: block;\\n  background-color: transparent;\\n}\\n.Button_5:hover {\\n  color: #e5e5e5;\\n}\\n\\n.Button_6 {\\n  display: block;\\n  border: none;\\n  text-align: center;\\n  margin: 0;\\n  font-size: 1.618rem;\\n  line-height: 40.896px;\\n  color: #b4b4b4;\\n  background-color: #2a2929;\\n  width: 100%;\\n}\\n@media (min-width: 1023px) {\\n  .Button_6 {\\n    border-top-left-radius: 0;\\n    border-bottom-left-radius: 0;\\n    border-top-right-radius: 1.618rem;\\n    border-bottom-right-radius: 1.618rem;\\n  }\\n}\\n.Button_6:hover {\\n  background-color: #ebba97;\\n  color: #110e08;\\n}\\n\\n.Button_7 {\\n  color: #b4b4b4;\\n  background-color: #2a2929;\\n  border: none;\\n  padding: 1.618rem 2.618rem;\\n}\\n.Button_7:hover {\\n  color: #e5e5e5;\\n  background-color: black;\\n}</style>\\n\\n{#if target}\\n    <a \\n        class=\\"button {modificador[variante]}\\"\\n        href=\\"{url}\\" \\n        target=\\"{target}\\">\\n        {text}\\n    </a>\\n{:else if !target && url}\\n    <a \\n        class=\\"button {modificador[variante]}\\"\\n        href=\\"{url}\\">\\n        {text}\\n    </a>\\n{:else if is_submit}\\n    <button on:click type=\\"submit\\" \\n            class=\\"{modificador[variante]}\\">\\n        {text}\\n    </button>\\n{:else}\\n    <button on:click \\n            class=\\"{modificador[variante]}\\"\\n            class:not-clickable={valorinput==\\"\\"}>\\n        {text}\\n    </button>\\n{/if}\\n"],"names":[],"mappings":"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"}'
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let modificador;
  let {text = ""} = $$props;
  let {url = ""} = $$props;
  let {is_submit = false} = $$props;
  let {target = false} = $$props;
  let {variante = 0} = $$props;
  let {valorinput = "input"} = $$props;
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
  $$result.css.add(css$j);
  modificador = [
    "Button_0",
    "Button_1",
    "Button_2",
    "Button_3",
    "Button_4",
    "Button_5",
    "Button_6",
    "Button_7"
  ];
  return `${target ? `<a class="${"button " + escape(modificador[variante]) + " svelte-1bp600d"}"${add_attribute("href", url, 0)}${add_attribute("target", target, 0)}>${escape(text)}</a>` : `${!target && url ? `<a class="${"button " + escape(modificador[variante]) + " svelte-1bp600d"}"${add_attribute("href", url, 0)}>${escape(text)}</a>` : `${is_submit ? `<button type="${"submit"}" class="${escape(null_to_empty(modificador[variante])) + " svelte-1bp600d"}">${escape(text)}</button>` : `<button class="${[
    escape(null_to_empty(modificador[variante])) + " svelte-1bp600d",
    valorinput == "" ? "not-clickable" : ""
  ].join(" ").trim()}">${escape(text)}</button>`}`}`}`;
});
var Cover_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-dbdih0.svelte-dbdih0,.svelte-dbdih0.svelte-dbdih0:before,.svelte-dbdih0.svelte-dbdih0:after{box-sizing:border-box}\ndiv.svelte-dbdih0.svelte-dbdih0,span.svelte-dbdih0.svelte-dbdih0,h1.svelte-dbdih0.svelte-dbdih0,h2.svelte-dbdih0.svelte-dbdih0,p.svelte-dbdih0.svelte-dbdih0,header.svelte-dbdih0.svelte-dbdih0{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\nheader.svelte-dbdih0.svelte-dbdih0{display:block}\nheader.svelte-dbdih0.svelte-dbdih0{font-family:"Montserrat", sans-serif;letter-spacing:0;font-weight:500;color:#b4b4b4}\nh1.svelte-dbdih0.svelte-dbdih0{font-size:1.618rem;line-height:40.896px;font-weight:bold}\n@media(min-width: 769px){h1.svelte-dbdih0.svelte-dbdih0{font-size:4.236rem;line-height:86.4px}}\n@media(min-width: 1023px){h1.svelte-dbdih0.svelte-dbdih0{font-size:6.854rem;line-height:144px}}\n@media(min-width: 2140px){h1.svelte-dbdih0.svelte-dbdih0{font-size:11.089rem;line-height:144px}}\nh2.svelte-dbdih0.svelte-dbdih0{font-weight:500;font-size:1rem;line-height:28.8px}\n@media(min-width: 374px){h2.svelte-dbdih0.svelte-dbdih0{font-size:1.618rem;line-height:40.896px}}\n@media(min-width: 2140px){h2.svelte-dbdih0.svelte-dbdih0{font-size:2.618rem;line-height:57.6px;margin-left:6.854rem;margin-right:6.854rem}}\n@media(min-width: 374px){}\np.svelte-dbdih0.svelte-dbdih0{font-size:1rem;line-height:28.8px}\n@media(min-width: 769px){p.svelte-dbdih0.svelte-dbdih0{max-width:769px;margin-left:auto;margin-right:auto}}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@keyframes svelte-dbdih0-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-dbdih0-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-dbdih0-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-dbdih0.svelte-dbdih0:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-dbdih0.svelte-dbdih0::selection{color:black;background-color:white;text-shadow:none}\n.tachado.svelte-dbdih0.svelte-dbdih0{text-decoration:line-through}\n.not-clickable.svelte-dbdih0.svelte-dbdih0{pointer-events:none}\n.is_home.svelte-dbdih0.svelte-dbdih0{height:27vh}\n@media(min-width: 769px){.is_home.svelte-dbdih0.svelte-dbdih0{height:100vh}}\n.Cover_0.svelte-dbdih0.svelte-dbdih0{display:grid;place-content:center;min-height:50vh;background-color:#2a2929;text-align:center;padding:0 1.618rem;color:#b4b4b4}\n@media(min-width: 769px){.Cover_0.svelte-dbdih0.svelte-dbdih0{color:#e5e5e5;grid-template-areas:"title" "text";background-size:cover;background-position:top center;background-attachment:fixed;height:100vh;background-position:center}}\n.Cover_1.svelte-dbdih0.svelte-dbdih0{display:grid;place-content:center;min-height:50vh;color:#2a2929;background-color:#e8b28a;text-align:left;padding:0 1.618rem}\n@media(min-width: 769px){.Cover_1.svelte-dbdih0.svelte-dbdih0{text-align:center}}\n.Cover_1.svelte-dbdih0 .CoverTitle.svelte-dbdih0{color:blue}\n.Cover_1.svelte-dbdih0 .CoverTitle span.svelte-dbdih0{color:#2a2929}\n.Cover_2.svelte-dbdih0.svelte-dbdih0{display:grid;place-content:center;min-height:50vh;color:#110e08;background-color:#b4b4b4;text-align:center}\n@media(min-width: 769px){.Cover_2.svelte-dbdih0.svelte-dbdih0{min-height:100vh;background-position:center;background-repeat:no-repeat;background-size:cover}}';
const css$i = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");.svelte-dbdih0.svelte-dbdih0,.svelte-dbdih0.svelte-dbdih0:before,.svelte-dbdih0.svelte-dbdih0:after{box-sizing:border-box}div.svelte-dbdih0.svelte-dbdih0,span.svelte-dbdih0.svelte-dbdih0,h1.svelte-dbdih0.svelte-dbdih0,h2.svelte-dbdih0.svelte-dbdih0,p.svelte-dbdih0.svelte-dbdih0,header.svelte-dbdih0.svelte-dbdih0{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}header.svelte-dbdih0.svelte-dbdih0{display:block}header.svelte-dbdih0.svelte-dbdih0{font-family:"Montserrat", sans-serif;letter-spacing:0;font-weight:500;color:#b4b4b4}h1.svelte-dbdih0.svelte-dbdih0{font-size:1.618rem;line-height:40.896px;font-weight:bold}@media(min-width: 769px){h1.svelte-dbdih0.svelte-dbdih0{font-size:4.236rem;line-height:86.4px}}@media(min-width: 1023px){h1.svelte-dbdih0.svelte-dbdih0{font-size:6.854rem;line-height:144px}}@media(min-width: 2140px){h1.svelte-dbdih0.svelte-dbdih0{font-size:11.089rem;line-height:144px}}h2.svelte-dbdih0.svelte-dbdih0{font-weight:500;font-size:1rem;line-height:28.8px}@media(min-width: 374px){h2.svelte-dbdih0.svelte-dbdih0{font-size:1.618rem;line-height:40.896px}}@media(min-width: 2140px){h2.svelte-dbdih0.svelte-dbdih0{font-size:2.618rem;line-height:57.6px;margin-left:6.854rem;margin-right:6.854rem}}@media(min-width: 374px){}p.svelte-dbdih0.svelte-dbdih0{font-size:1rem;line-height:28.8px}@media(min-width: 769px){p.svelte-dbdih0.svelte-dbdih0{max-width:769px;margin-left:auto;margin-right:auto}}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}@keyframes svelte-dbdih0-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-dbdih0-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-dbdih0-loading{50%{transform:scale(1.2);opacity:0.7}}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-dbdih0.svelte-dbdih0:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-dbdih0.svelte-dbdih0::selection{color:black;background-color:white;text-shadow:none}.tachado.svelte-dbdih0.svelte-dbdih0{text-decoration:line-through}.not-clickable.svelte-dbdih0.svelte-dbdih0{pointer-events:none}.is_home.svelte-dbdih0.svelte-dbdih0{height:27vh}@media(min-width: 769px){.is_home.svelte-dbdih0.svelte-dbdih0{height:100vh}}.Cover_0.svelte-dbdih0.svelte-dbdih0{display:grid;place-content:center;min-height:50vh;background-color:#2a2929;text-align:center;padding:0 1.618rem;color:#b4b4b4}@media(min-width: 769px){.Cover_0.svelte-dbdih0.svelte-dbdih0{color:#e5e5e5;grid-template-areas:"title" "text";background-size:cover;background-position:top center;background-attachment:fixed;height:100vh;background-position:center}}.Cover_1.svelte-dbdih0.svelte-dbdih0{display:grid;place-content:center;min-height:50vh;color:#2a2929;background-color:#e8b28a;text-align:left;padding:0 1.618rem}@media(min-width: 769px){.Cover_1.svelte-dbdih0.svelte-dbdih0{text-align:center}}.Cover_1.svelte-dbdih0 .CoverTitle.svelte-dbdih0{color:blue}.Cover_1.svelte-dbdih0 .CoverTitle span.svelte-dbdih0{color:#2a2929}.Cover_2.svelte-dbdih0.svelte-dbdih0{display:grid;place-content:center;min-height:50vh;color:#110e08;background-color:#b4b4b4;text-align:center}@media(min-width: 769px){.Cover_2.svelte-dbdih0.svelte-dbdih0{min-height:100vh;background-position:center;background-repeat:no-repeat;background-size:cover}}',
  map: `{"version":3,"file":"Cover.svelte","sources":["Cover.svelte"],"sourcesContent":["<script>\\n    import Button from '$lib/Button.svelte';\\n\\n    export let title = \\"\\"\\n    export let subtitle = \\"\\"\\n    export let text = \\"\\"\\n    export let img = \\"\\"\\n    export let is_home = false\\n    export let is_products_page = false\\n\\n    export let variante = 0\\n    const modificador = [\\n        \\"Cover_0\\",\\n        \\"Cover_1\\",\\n        \\"Cover_2\\"\\n    ]\\n\\n    let innerWidth, innerHeight, y;\\n</script>\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nsvg {\\n  max-height: 90vh;\\n}\\n\\nbody,\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Montserrat\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nul {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  display: flex;\\n  flex-direction: column;\\n  margin-top: 11.089rem;\\n  background-color: blue;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 40.896px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 86.4px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 144px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 144px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 57.6px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 28.8px;\\n  }\\n}\\n\\nsmall,\\np {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n\\nhgroup {\\n  margin-bottom: 1.618rem;\\n}\\n\\n@media (min-width: 769px) {\\n  p,\\nh4 {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #d3b39c;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: blue;\\n}\\n\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: blue;\\n  border: 1px solid blue;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\nbody {\\n  background-color: #414141;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\nimg {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.tachado {\\n  text-decoration: line-through;\\n}\\n\\n.not-clickable {\\n  pointer-events: none;\\n}\\n\\nvideo {\\n  width: 100%;\\n  object-fit: cover;\\n  /* mix-blend-mode: luminosity; */\\n  /* border-radius: $h2; */\\n}\\n\\n.is_home {\\n  height: 27vh;\\n}\\n@media (min-width: 769px) {\\n  .is_home {\\n    height: 100vh;\\n  }\\n}\\n\\n.Cover_0 {\\n  display: grid;\\n  place-content: center;\\n  min-height: 50vh;\\n  background-color: #2a2929;\\n  text-align: center;\\n  padding: 0 1.618rem;\\n  color: #b4b4b4;\\n}\\n@media (min-width: 769px) {\\n  .Cover_0 {\\n    color: #e5e5e5;\\n    grid-template-areas: \\"title\\" \\"text\\";\\n    background-size: cover;\\n    background-position: top center;\\n    background-attachment: fixed;\\n    height: 100vh;\\n    background-position: center;\\n  }\\n}\\n\\n.Cover_1 {\\n  display: grid;\\n  place-content: center;\\n  min-height: 50vh;\\n  color: #2a2929;\\n  background-color: #e8b28a;\\n  text-align: left;\\n  padding: 0 1.618rem;\\n}\\n@media (min-width: 769px) {\\n  .Cover_1 {\\n    text-align: center;\\n  }\\n}\\n.Cover_1 .CoverTitle {\\n  color: blue;\\n}\\n.Cover_1 .CoverTitle span {\\n  color: #2a2929;\\n}\\n\\n.Cover_2 {\\n  display: grid;\\n  place-content: center;\\n  min-height: 50vh;\\n  color: #110e08;\\n  background-color: #b4b4b4;\\n  text-align: center;\\n}\\n@media (min-width: 769px) {\\n  .Cover_2 {\\n    min-height: 100vh;\\n    background-position: center;\\n    background-repeat: no-repeat;\\n    background-size: cover;\\n  }\\n}</style>\\n\\n<svelte:window bind:innerWidth bind:innerHeight bind:scrollY={y} />\\n\\n<header \\n    class={modificador[variante]}\\n    class:is_home\\n    style=\\" \\n    opacity: { 1 - Math.max(0, y / (innerHeight/1.5))};\\n    background-image: url( { innerWidth > 769 || is_home ? img : ''})\\n    \\">\\n\\n    <h1 class=\\"CoverTitle\\">\\n        {title} <br>\\n        <span>\\n            <h2 class=\\"CoverSubTitle\\"> {@html subtitle} </h2>\\n        </span>\\n    </h1>\\n    \\n    <div class=\\"CoverText\\">\\n        <p>{text}</p>\\n    \\n        {#if is_products_page}\\n            <Button variante={5} text=\\"\u142F\\"/>\\n        {/if}\\n    </div>\\n</header>"],"names":[],"mappings":"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"}`
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
  $$result.css.add(css$i);
  return `

<header class="${[
    escape(null_to_empty(modificador[variante])) + " svelte-dbdih0",
    is_home ? "is_home" : ""
  ].join(" ").trim()}" style="${" \n    opacity: " + escape(1 - Math.max(0, y2 / (innerHeight / 1.5))) + ";\n    background-image: url( " + escape(is_home ? img : "") + ")\n    "}"><h1 class="${"CoverTitle svelte-dbdih0"}">${escape(title)} <br class="${"svelte-dbdih0"}">
        <span class="${"svelte-dbdih0"}"><h2 class="${"CoverSubTitle svelte-dbdih0"}">${subtitle}</h2></span></h1>
    
    <div class="${"CoverText svelte-dbdih0"}"><p class="${"svelte-dbdih0"}">${escape(text)}</p>
    
        ${is_products_page ? `${validate_component(Button, "Button").$$render($$result, {variante: 5, text: "\u142F"}, {}, {})}` : ``}</div></header>`;
});
const pages = [
  {name: "Landing Page", url: "/"},
  {name: "3D printed Artwork", url: "/artworks"},
  {name: "+0+1234 Project", url: "/philosophy"},
  {name: "Holistic Prototype", url: "/prototype"},
  {name: "Code Laboratory", url: "/lab"},
  {name: "About me", url: "/about"}
];
const secondaryNav = [
  {name: "artwork", url: "/artworks"},
  {name: "+0+1234", url: "/philosophy"},
  {name: "Holistic Prototype", url: "/prototype"},
  {name: "lab", url: "/lab"}
];
var NavSecondary_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-1dmdgyy,.svelte-1dmdgyy:before,.svelte-1dmdgyy:after{box-sizing:border-box}\nnav.svelte-1dmdgyy{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\nnav.svelte-1dmdgyy{display:block}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@keyframes svelte-1dmdgyy-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-1dmdgyy-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-1dmdgyy-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-1dmdgyy:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-1dmdgyy::selection{color:black;background-color:white;text-shadow:none}\nnav.svelte-1dmdgyy{display:grid;gap:2.618rem;min-height:50vh;padding:2.618rem;grid-template-columns:repeat(auto-fit, 260px);place-content:center;place-items:center}\n@media(min-width: 1023px){nav.svelte-1dmdgyy{grid-template-columns:repeat(3, 1fr);gap:2.618rem;place-items:center}}';
const css$h = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");.svelte-1dmdgyy,.svelte-1dmdgyy:before,.svelte-1dmdgyy:after{box-sizing:border-box}nav.svelte-1dmdgyy{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}nav.svelte-1dmdgyy{display:block}@media(min-width: 769px){}@media(min-width: 1023px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 769px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}@keyframes svelte-1dmdgyy-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-1dmdgyy-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-1dmdgyy-loading{50%{transform:scale(1.2);opacity:0.7}}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-1dmdgyy:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-1dmdgyy::selection{color:black;background-color:white;text-shadow:none}nav.svelte-1dmdgyy{display:grid;gap:2.618rem;min-height:50vh;padding:2.618rem;grid-template-columns:repeat(auto-fit, 260px);place-content:center;place-items:center}@media(min-width: 1023px){nav.svelte-1dmdgyy{grid-template-columns:repeat(3, 1fr);gap:2.618rem;place-items:center}}',
  map: '{"version":3,"file":"NavSecondary.svelte","sources":["NavSecondary.svelte"],"sourcesContent":["<script>\\n    import { secondaryNav } from \\"$lib/data/pages.js\\";\\n    import Button from \\"$lib/Button.svelte\\";\\n</script>\\n\\n<nav>\\n    {#each secondaryNav as {url, name}}\\n        <Button \\n            variante={4}\\n            {url}\\n            text={name}\\n        />\\n    {/each}\\n</nav>\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nsvg {\\n  max-height: 90vh;\\n}\\n\\nbody,\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Montserrat\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nul {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  display: flex;\\n  flex-direction: column;\\n  margin-top: 11.089rem;\\n  background-color: blue;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 40.896px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 86.4px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 144px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 144px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 57.6px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 28.8px;\\n  }\\n}\\n\\nsmall,\\np {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n\\nhgroup {\\n  margin-bottom: 1.618rem;\\n}\\n\\n@media (min-width: 769px) {\\n  p,\\nh4 {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #d3b39c;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: blue;\\n}\\n\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: blue;\\n  border: 1px solid blue;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\nbody {\\n  background-color: #414141;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\nimg {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.tachado {\\n  text-decoration: line-through;\\n}\\n\\n.not-clickable {\\n  pointer-events: none;\\n}\\n\\nvideo {\\n  width: 100%;\\n  object-fit: cover;\\n  /* mix-blend-mode: luminosity; */\\n  /* border-radius: $h2; */\\n}\\n\\nnav {\\n  display: grid;\\n  gap: 2.618rem;\\n  min-height: 50vh;\\n  padding: 2.618rem;\\n  grid-template-columns: repeat(auto-fit, 260px);\\n  place-content: center;\\n  place-items: center;\\n}\\n@media (min-width: 1023px) {\\n  nav {\\n    grid-template-columns: repeat(3, 1fr);\\n    gap: 2.618rem;\\n    place-items: center;\\n  }\\n}\\na nav:nth-child(2) {\\n  background-color: red;\\n}</style>"],"names":[],"mappings":"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"}'
};
const NavSecondary = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$h);
  return `<nav class="${"svelte-1dmdgyy"}">${each(secondaryNav, ({url, name}) => `${validate_component(Button, "Button").$$render($$result, {variante: 4, url, text: name}, {}, {})}`)}
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

${validate_component(Section, "Section").$$render($$result, {variante: 3}, {}, {
    default: () => `${validate_component(GridBase, "GridBase").$$render($$result, {variante: 5}, {}, {
      subarea1: () => `<div slot="${"subarea1"}"></div>`,
      subarea2: () => `<div slot="${"subarea2"}"><h2>Mas info</h2>
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, exercitationem repudiandae iusto impedit sint magnam totam earum neque, corporis, dolores pariatur. Maiores, perspiciatis praesentium? Totam sint libero hic laborum veniam.</p></div>`,
      default: () => `${validate_component(Img, "Img").$$render($$result, {
        variante: 1,
        src: "./img/02234-14.jpg",
        alt: "Presentation"
      }, {}, {})}`
    })}`
  })}

${validate_component(Section, "Section").$$render($$result, {variante: 3}, {}, {
    default: () => `${validate_component(GridBase, "GridBase").$$render($$result, {variante: 4}, {}, {
      subarea2: () => `<div slot="${"subarea2"}"></div>`,
      subarea1: () => `<div slot="${"subarea1"}"><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, exercitationem repudiandae iusto impedit sint magnam totam earum neque, corporis, dolores pariatur. Maiores, perspiciatis praesentium? Totam sint libero hic laborum veniam.</p></div>`,
      default: () => `${validate_component(Img, "Img").$$render($$result, {
        variante: 4,
        src: "./img/cover4.jpg",
        alt: "Presentation"
      }, {}, {})}`
    })}`
  })}`;
});
var index$5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: Routes
});
var Svg_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-jk589s,.svelte-jk589s:before,.svelte-jk589s:after{box-sizing:border-box}\nsvg.svelte-jk589s{max-height:90vh}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@keyframes svelte-jk589s-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-jk589s-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-jk589s-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-jk589s:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-jk589s::selection{color:black;background-color:white;text-shadow:none}\n.tachado.svelte-jk589s{text-decoration:line-through}\n.not-clickable.svelte-jk589s{pointer-events:none}\n.Svg_0.svelte-jk589s{fill:none;stroke:black}\n.Svg_1.svelte-jk589s{fill:blue}';
var Article_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-1evtbv4,.svelte-1evtbv4:before,.svelte-1evtbv4:after{box-sizing:border-box}\nsection.svelte-1evtbv4{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\nsection.svelte-1evtbv4{display:block}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@keyframes svelte-1evtbv4-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-1evtbv4-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-1evtbv4-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-1evtbv4:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-1evtbv4::selection{color:black;background-color:white;text-shadow:none}\n.tachado.svelte-1evtbv4{text-decoration:line-through}\n.not-clickable.svelte-1evtbv4{pointer-events:none}\n.Section_0.svelte-1evtbv4{padding:2.618rem;min-height:50vh;color:#110e08;background-color:#e5e5e5}\n.Section_1.svelte-1evtbv4{padding:2.618rem;min-height:50vh;color:white;background-color:#414141}\n.Section_2.svelte-1evtbv4{display:grid;place-content:center;color:#e5e5e5;background-color:#2a2929}\n.Section_3.svelte-1evtbv4{color:black;background-color:#b4b4b4;padding:0}\n.Section_4.svelte-1evtbv4{color:#110e08;background-color:#b4b4b4;padding:2.618rem}\n.Section_5.svelte-1evtbv4{min-height:50vh;color:#110e08;background-color:white}\n.Section_6.svelte-1evtbv4{padding:2.618rem;min-height:50vh;color:#110e08;background-color:white}';
const css$g = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");.svelte-1evtbv4,.svelte-1evtbv4:before,.svelte-1evtbv4:after{box-sizing:border-box}section.svelte-1evtbv4{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}section.svelte-1evtbv4{display:block}@media(min-width: 769px){}@media(min-width: 1023px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 769px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}@keyframes svelte-1evtbv4-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-1evtbv4-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-1evtbv4-loading{50%{transform:scale(1.2);opacity:0.7}}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-1evtbv4:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-1evtbv4::selection{color:black;background-color:white;text-shadow:none}.tachado.svelte-1evtbv4{text-decoration:line-through}.not-clickable.svelte-1evtbv4{pointer-events:none}.Section_0.svelte-1evtbv4{padding:2.618rem;min-height:50vh;color:#110e08;background-color:#e5e5e5}.Section_1.svelte-1evtbv4{padding:2.618rem;min-height:50vh;color:white;background-color:#414141}.Section_2.svelte-1evtbv4{display:grid;place-content:center;color:#e5e5e5;background-color:#2a2929}.Section_3.svelte-1evtbv4{color:black;background-color:#b4b4b4;padding:0}.Section_4.svelte-1evtbv4{color:#110e08;background-color:#b4b4b4;padding:2.618rem}.Section_5.svelte-1evtbv4{min-height:50vh;color:#110e08;background-color:white}.Section_6.svelte-1evtbv4{padding:2.618rem;min-height:50vh;color:#110e08;background-color:white}',
  map: '{"version":3,"file":"Article.svelte","sources":["Article.svelte"],"sourcesContent":["<script>\\n    export let variante = 0;\\n    export let id = \\"\\";\\n    let modificador = [\\n        \\"Section_0\\",\\n        \\"Section_1\\",\\n        \\"Section_2\\",\\n        \\"Section_3\\",\\n        \\"Section_4\\",\\n        \\"Section_5\\",\\n        \\"Section_6\\"\\n    ];\\n</script>\\n\\n<section    {id}\\n            class={modificador[variante]}\\n>\\n    <slot />\\n</section>\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nsvg {\\n  max-height: 90vh;\\n}\\n\\nbody,\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Montserrat\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nul {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  display: flex;\\n  flex-direction: column;\\n  margin-top: 11.089rem;\\n  background-color: blue;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 40.896px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 86.4px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 144px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 144px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 57.6px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 28.8px;\\n  }\\n}\\n\\nsmall,\\np {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n\\nhgroup {\\n  margin-bottom: 1.618rem;\\n}\\n\\n@media (min-width: 769px) {\\n  p,\\nh4 {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #d3b39c;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: blue;\\n}\\n\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: blue;\\n  border: 1px solid blue;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\nbody {\\n  background-color: #414141;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\nimg {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.tachado {\\n  text-decoration: line-through;\\n}\\n\\n.not-clickable {\\n  pointer-events: none;\\n}\\n\\nvideo {\\n  width: 100%;\\n  object-fit: cover;\\n  /* mix-blend-mode: luminosity; */\\n  /* border-radius: $h2; */\\n}\\n\\n.Section_0 {\\n  padding: 2.618rem;\\n  min-height: 50vh;\\n  color: #110e08;\\n  background-color: #e5e5e5;\\n}\\n\\n.Section_1 {\\n  padding: 2.618rem;\\n  min-height: 50vh;\\n  color: white;\\n  background-color: #414141;\\n}\\n\\n.Section_2 {\\n  display: grid;\\n  place-content: center;\\n  color: #e5e5e5;\\n  background-color: #2a2929;\\n}\\n\\n.Section_3 {\\n  color: black;\\n  background-color: #b4b4b4;\\n  padding: 0;\\n}\\n\\n.Section_4 {\\n  color: #110e08;\\n  background-color: #b4b4b4;\\n  padding: 2.618rem;\\n}\\n\\n.Section_5 {\\n  min-height: 50vh;\\n  color: #110e08;\\n  background-color: white;\\n}\\n\\n.Section_6 {\\n  padding: 2.618rem;\\n  min-height: 50vh;\\n  color: #110e08;\\n  background-color: white;\\n}</style>"],"names":[],"mappings":"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"}'
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
  $$result.css.add(css$g);
  return `<section${add_attribute("id", id, 0)} class="${escape(null_to_empty(modificador[variante])) + " svelte-1evtbv4"}">${slots.default ? slots.default({}) : ``}
</section>`;
});
var Tabs_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-m98opa.svelte-m98opa,.svelte-m98opa.svelte-m98opa:before,.svelte-m98opa.svelte-m98opa:after{box-sizing:border-box}\nfigure.svelte-m98opa.svelte-m98opa,p.svelte-m98opa.svelte-m98opa,img.svelte-m98opa.svelte-m98opa,small.svelte-m98opa.svelte-m98opa,nav.svelte-m98opa.svelte-m98opa{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\nnav.svelte-m98opa.svelte-m98opa{display:block}\nsmall.svelte-m98opa.svelte-m98opa{font-family:"Montserrat", sans-serif;letter-spacing:0;font-weight:500;color:#b4b4b4}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\nsmall.svelte-m98opa.svelte-m98opa,p.svelte-m98opa.svelte-m98opa{font-size:1rem;line-height:28.8px}\n@media(min-width: 769px){p.svelte-m98opa.svelte-m98opa{max-width:769px;margin-left:auto;margin-right:auto}}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\nfigcaption.svelte-m98opa.svelte-m98opa{text-align:left}\n@keyframes svelte-m98opa-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-m98opa-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-m98opa-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-m98opa.svelte-m98opa:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-m98opa.svelte-m98opa::selection{color:black;background-color:white;text-shadow:none}\nimg.svelte-m98opa.svelte-m98opa{max-width:100%;height:auto}\nnav.svelte-m98opa.svelte-m98opa{display:grid;grid-auto-flow:column}\n@media(min-width: 769px){nav.svelte-m98opa.svelte-m98opa{justify-content:center;background-color:#b4b4b4}}\nnav.svelte-m98opa button.svelte-m98opa{border:none;color:#2a2929;font-size:inherit;background-color:#e5e5e5}\nnav.svelte-m98opa button.svelte-m98opa:hover{background-color:white;color:#110e08;cursor:pointer}\nfigcaption.svelte-m98opa.svelte-m98opa{padding:1rem;text-align:center}\n.active.svelte-m98opa.svelte-m98opa{color:black;background-color:white}';
const css$f = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");.svelte-m98opa.svelte-m98opa,.svelte-m98opa.svelte-m98opa:before,.svelte-m98opa.svelte-m98opa:after{box-sizing:border-box}figure.svelte-m98opa.svelte-m98opa,p.svelte-m98opa.svelte-m98opa,img.svelte-m98opa.svelte-m98opa,small.svelte-m98opa.svelte-m98opa,nav.svelte-m98opa.svelte-m98opa{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}nav.svelte-m98opa.svelte-m98opa{display:block}small.svelte-m98opa.svelte-m98opa{font-family:"Montserrat", sans-serif;letter-spacing:0;font-weight:500;color:#b4b4b4}@media(min-width: 769px){}@media(min-width: 1023px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 2140px){}@media(min-width: 374px){}small.svelte-m98opa.svelte-m98opa,p.svelte-m98opa.svelte-m98opa{font-size:1rem;line-height:28.8px}@media(min-width: 769px){p.svelte-m98opa.svelte-m98opa{max-width:769px;margin-left:auto;margin-right:auto}}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}figcaption.svelte-m98opa.svelte-m98opa{text-align:left}@keyframes svelte-m98opa-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-m98opa-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-m98opa-loading{50%{transform:scale(1.2);opacity:0.7}}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-m98opa.svelte-m98opa:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-m98opa.svelte-m98opa::selection{color:black;background-color:white;text-shadow:none}img.svelte-m98opa.svelte-m98opa{max-width:100%;height:auto}nav.svelte-m98opa.svelte-m98opa{display:grid;grid-auto-flow:column}@media(min-width: 769px){nav.svelte-m98opa.svelte-m98opa{justify-content:center;background-color:#b4b4b4}}nav.svelte-m98opa button.svelte-m98opa{border:none;color:#2a2929;font-size:inherit;background-color:#e5e5e5}nav.svelte-m98opa button.svelte-m98opa:hover{background-color:white;color:#110e08;cursor:pointer}figcaption.svelte-m98opa.svelte-m98opa{padding:1rem;text-align:center}.active.svelte-m98opa.svelte-m98opa{color:black;background-color:white}',
  map: `{"version":3,"file":"Tabs.svelte","sources":["Tabs.svelte"],"sourcesContent":["<script>\\n    import GridBase from \\"$lib/GridBase.svelte\\"\\n    import Section from \\"$lib/Section.svelte\\"\\n    import Article from \\"$lib/Article.svelte\\"\\n    // import Button from \\"$lib/Button.svelte\\"\\n\\texport let tabsContent = [];\\n\\texport let activeTabValue = 1;\\n\\n\\tconst handleClick = (tabValue) => () => (activeTabValue = tabValue);\\n</script>\\n\\n<nav>\\n\\t{#each tabsContent as item}\\n        <button \\n        class={activeTabValue === item.id ? 'active' : ''}\\n        on:click={ handleClick(item.id) }>{item.title}</button>\\n\\t{/each}\\n</nav>\\n\\n{#each tabsContent as item}\\n    {#if activeTabValue == item.id}\\n    <Article variante={6}>\\n        <GridBase variante={3}>\\n            <figure slot=\\"subarea1\\">\\n                <img src={item.img} alt={item.subtitle}>\\n                <figcaption>{item.subtitle}</figcaption>\\n            </figure>\\n            <p>{@html item.content}</p>\\n            <small slot=\\"subarea2\\">{item.tags}</small>\\n        </GridBase>\\n    </Article>\\n    {/if}\\n{/each}\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nsvg {\\n  max-height: 90vh;\\n}\\n\\nbody,\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Montserrat\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nul {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  display: flex;\\n  flex-direction: column;\\n  margin-top: 11.089rem;\\n  background-color: blue;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 40.896px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 86.4px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 144px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 144px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 57.6px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 28.8px;\\n  }\\n}\\n\\nsmall,\\np {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n\\nhgroup {\\n  margin-bottom: 1.618rem;\\n}\\n\\n@media (min-width: 769px) {\\n  p,\\nh4 {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #d3b39c;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: blue;\\n}\\n\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: blue;\\n  border: 1px solid blue;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\nbody {\\n  background-color: #414141;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\nimg {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.tachado {\\n  text-decoration: line-through;\\n}\\n\\n.not-clickable {\\n  pointer-events: none;\\n}\\n\\nvideo {\\n  width: 100%;\\n  object-fit: cover;\\n  /* mix-blend-mode: luminosity; */\\n  /* border-radius: $h2; */\\n}\\n\\nnav {\\n  display: grid;\\n  grid-auto-flow: column;\\n}\\n@media (min-width: 769px) {\\n  nav {\\n    justify-content: center;\\n    background-color: #b4b4b4;\\n  }\\n}\\nnav button {\\n  border: none;\\n  color: #2a2929;\\n  font-size: inherit;\\n  background-color: #e5e5e5;\\n}\\nnav button:hover {\\n  background-color: white;\\n  color: #110e08;\\n  cursor: pointer;\\n}\\n\\nfigcaption {\\n  padding: 1rem;\\n  text-align: center;\\n}\\n\\n.active {\\n  color: black;\\n  background-color: white;\\n}</style>\\n"],"names":[],"mappings":"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"}`
};
const Tabs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {tabsContent: tabsContent2 = []} = $$props;
  let {activeTabValue = 1} = $$props;
  if ($$props.tabsContent === void 0 && $$bindings.tabsContent && tabsContent2 !== void 0)
    $$bindings.tabsContent(tabsContent2);
  if ($$props.activeTabValue === void 0 && $$bindings.activeTabValue && activeTabValue !== void 0)
    $$bindings.activeTabValue(activeTabValue);
  $$result.css.add(css$f);
  return `<nav class="${"svelte-m98opa"}">${each(tabsContent2, (item) => `<button class="${escape(null_to_empty(activeTabValue === item.id ? "active" : "")) + " svelte-m98opa"}">${escape(item.title)}</button>`)}</nav>

${each(tabsContent2, (item) => `${activeTabValue == item.id ? `${validate_component(Article, "Article").$$render($$result, {variante: 6}, {}, {
    default: () => `${validate_component(GridBase, "GridBase").$$render($$result, {variante: 3}, {}, {
      subarea2: () => `<small slot="${"subarea2"}" class="${"svelte-m98opa"}">${escape(item.tags)}</small>`,
      subarea1: () => `<figure slot="${"subarea1"}" class="${"svelte-m98opa"}"><img${add_attribute("src", item.img, 0)}${add_attribute("alt", item.subtitle, 0)} class="${"svelte-m98opa"}">
                <figcaption class="${"svelte-m98opa"}">${escape(item.subtitle)}</figcaption>
            </figure>`,
      default: () => `<p class="${"svelte-m98opa"}">${item.content}</p>
            
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
var index$4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: Philosophy
});
var List_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-j157ue,.svelte-j157ue:before,.svelte-j157ue:after{box-sizing:border-box}\nol.svelte-j157ue{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\nol.svelte-j157ue,ul.svelte-j157ue{list-style:none}\nul.svelte-j157ue{font-size:1rem;line-height:28.8px;display:flex;flex-direction:column;margin-top:11.089rem;background-color:blue}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@keyframes svelte-j157ue-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-j157ue-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-j157ue-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-j157ue:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-j157ue::selection{color:black;background-color:white;text-shadow:none}\n.tachado.svelte-j157ue{text-decoration:line-through}\n.not-clickable.svelte-j157ue{pointer-events:none}\nol,dl{margin-top:1rem;font-size:1rem;line-height:28.8px}\n@media(min-width: 769px){ol,dl{max-width:769px;margin-left:auto;margin-right:auto}}\nli{font-size:1rem;line-height:28.8px}\ndt{font-weight:bold;margin-top:1rem;margin-bottom:1rem}\ndd{margin-bottom:0.618rem;margin-left:1.618rem}\n.List_0.svelte-j157ue{list-style:inherit;text-align:left}';
const css$e = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");.svelte-j157ue,.svelte-j157ue:before,.svelte-j157ue:after{box-sizing:border-box}ol.svelte-j157ue{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}ol.svelte-j157ue,ul.svelte-j157ue{list-style:none}ul.svelte-j157ue{font-size:1rem;line-height:28.8px;display:flex;flex-direction:column;margin-top:11.089rem;background-color:blue}@media(min-width: 769px){}@media(min-width: 1023px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 769px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}@keyframes svelte-j157ue-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-j157ue-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-j157ue-loading{50%{transform:scale(1.2);opacity:0.7}}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-j157ue:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-j157ue::selection{color:black;background-color:white;text-shadow:none}.tachado.svelte-j157ue{text-decoration:line-through}.not-clickable.svelte-j157ue{pointer-events:none}ol,dl{margin-top:1rem;font-size:1rem;line-height:28.8px}@media(min-width: 769px){ol,dl{max-width:769px;margin-left:auto;margin-right:auto}}li{font-size:1rem;line-height:28.8px}dt{font-weight:bold;margin-top:1rem;margin-bottom:1rem}dd{margin-bottom:0.618rem;margin-left:1.618rem}.List_0.svelte-j157ue{list-style:inherit;text-align:left}',
  map: `{"version":3,"file":"List.svelte","sources":["List.svelte"],"sourcesContent":["<script>\\n\\texport let tipo = 'dl';\\n\\texport let variante = 0;\\n\\tconst clase = ['List_0', 'List_1', 'List_2'];\\n</script>\\n\\n{#if tipo === 0}\\n\\t<ul class={clase[variante]}>\\n\\t\\t<slot />\\n\\t</ul>\\n{:else if tipo === 1}\\n\\t<dl class={clase[variante]}>\\n\\t\\t<slot />\\n\\t</dl>\\n{:else}\\n\\t<ol class={clase[variante]}>\\n\\t\\t<slot />\\n\\t</ol>\\n{/if}\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nsvg {\\n  max-height: 90vh;\\n}\\n\\nbody,\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Montserrat\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nul {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  display: flex;\\n  flex-direction: column;\\n  margin-top: 11.089rem;\\n  background-color: blue;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 40.896px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 86.4px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 144px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 144px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 57.6px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 28.8px;\\n  }\\n}\\n\\nsmall,\\np {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n\\nhgroup {\\n  margin-bottom: 1.618rem;\\n}\\n\\n@media (min-width: 769px) {\\n  p,\\nh4 {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #d3b39c;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: blue;\\n}\\n\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: blue;\\n  border: 1px solid blue;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\nbody {\\n  background-color: #414141;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\nimg {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.tachado {\\n  text-decoration: line-through;\\n}\\n\\n.not-clickable {\\n  pointer-events: none;\\n}\\n\\nvideo {\\n  width: 100%;\\n  object-fit: cover;\\n  /* mix-blend-mode: luminosity; */\\n  /* border-radius: $h2; */\\n}\\n\\n:global(ol),\\n:global(dl) {\\n  margin-top: 1rem;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 769px) {\\n  :global(ol),\\n:global(dl) {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\n:global(li) {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n\\n:global(dt) {\\n  font-weight: bold;\\n  margin-top: 1rem;\\n  margin-bottom: 1rem;\\n}\\n\\n:global(dd) {\\n  /* margin-top: $h0; */\\n  margin-bottom: 0.618rem;\\n  margin-left: 1.618rem;\\n}\\n\\n.List_0 {\\n  list-style: inherit;\\n  text-align: left;\\n}\\n\\n.List_1 {\\n  /* color: blue; */\\n}\\n\\n.List_2 {\\n  /* color: green; */\\n}</style>\\n"],"names":[],"mappings":"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"}`
};
const List = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {tipo = "dl"} = $$props;
  let {variante = 0} = $$props;
  const clase = ["List_0", "List_1", "List_2"];
  if ($$props.tipo === void 0 && $$bindings.tipo && tipo !== void 0)
    $$bindings.tipo(tipo);
  if ($$props.variante === void 0 && $$bindings.variante && variante !== void 0)
    $$bindings.variante(variante);
  $$result.css.add(css$e);
  return `${tipo === 0 ? `<ul class="${escape(null_to_empty(clase[variante])) + " svelte-j157ue"}">${slots.default ? slots.default({}) : ``}</ul>` : `${tipo === 1 ? `<dl class="${escape(null_to_empty(clase[variante])) + " svelte-j157ue"}">${slots.default ? slots.default({}) : ``}</dl>` : `<ol class="${escape(null_to_empty(clase[variante])) + " svelte-j157ue"}">${slots.default ? slots.default({}) : ``}</ol>`}`}`;
});
const Prototype = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
${validate_component(Section, "Section").$$render($$result, {id: "cover", variante: 3}, {}, {
    default: () => `${validate_component(Cover, "Cover").$$render($$result, {
      variante: 1,
      title: coverData[4].title,
      subtitle: coverData[4].subtitle,
      text: coverData[4].text
    }, {}, {})}`
  })}

${validate_component(Section, "Section").$$render($$result, {variante: 0}, {}, {
    default: () => `${validate_component(GridBase, "GridBase").$$render($$result, {variante: 1}, {}, {
      subarea2: () => `<nav slot="${"subarea2"}"><a href="${"https://github.com/t0t/sveltekit"}" target="${"_blank"}">Repositorio en Github</a></nav>`,
      subarea1: () => `<hgroup slot="${"subarea1"}"><h2>El prototipo de mis sue\xF1os</h2>

			${validate_component(List, "List").$$render($$result, {tipo: 0, variante: 0}, {}, {
        default: () => `<li>Simple, ligero, limpio y claro.</li>
    			<li>Completo, funcional, vers\xE1til y ordenado.</li>
				<li>etc...</li>`
      })}</hgroup>`,
      default: () => `<svg fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" viewBox="${"0 0 193 169"}"><path fill="${"none"}" stroke="${"#000"}" stroke-width="${".7"}" d="${"M4 165l31-53 30 53H4zm62 0l30-53 31 53H66zm61 0l31-53 30 53h-61zm-92-54l31-53 30 53H35zm61 0l31-53 31 53H96zM66 58L96 5l31 53H66z"}"></path><circle cx="${"168.3"}" cy="${"18.1"}" r="${"6"}" transform="${"translate(-17 -8) scale(.67024)"}"></circle><circle cx="${"214.1"}" cy="${"98.5"}" r="${"6"}" transform="${"translate(-17 -8) scale(.67024)"}"></circle><circle cx="${"259.9"}" cy="${"178.2"}" r="${"6"}" transform="${"translate(-17 -8) scale(.67024)"}"></circle><circle cx="${"305.7"}" cy="${"257.8"}" r="${"6"}" transform="${"translate(-17 -8) scale(.67024)"}"></circle><circle cx="${"214.1"}" cy="${"257.8"}" r="${"6"}" transform="${"translate(-17 -8) scale(.67024)"}"></circle><circle cx="${"123.2"}" cy="${"257.8"}" r="${"6"}" transform="${"translate(-17 -8) scale(.67024)"}"></circle><circle cx="${"30.8"}" cy="${"257.8"}" r="${"6"}" transform="${"translate(-17 -8) scale(.67024)"}"></circle><circle cx="${"76.9"}" cy="${"178.2"}" r="${"6"}" transform="${"translate(-17 -8) scale(.67024)"}"></circle><circle cx="${"168.3"}" cy="${"178.2"}" r="${"6"}" transform="${"translate(-17 -8) scale(.67024)"}"></circle><circle cx="${"123.2"}" cy="${"98.5"}" r="${"6"}" transform="${"translate(-17 -8) scale(.67024)"}"></circle></svg>`
    })}`
  })}

${validate_component(Section, "Section").$$render($$result, {variante: 0}, {}, {
    default: () => `${validate_component(GridBase, "GridBase").$$render($$result, {variante: 0}, {}, {
      subarea2: () => `<div slot="${"subarea2"}"></div>`,
      subarea1: () => `<div slot="${"subarea1"}"><h2>+0+124</h2>
			${validate_component(List, "List").$$render($$result, {tipo: 1, variante: 0}, {}, {
        default: () => `<dt>Control de versiones</dt>
				<dd>Gracias a Git tenemos diferentes ramas temporales de nuestro prototipo. Literalmente nuestro prototipo vive en diferentes universos.</dd>
				<dd>sdfsd</dd>
				<dt>Encapsulamiento hol\xEDstico</dt>
				<dd>Estoy trabajando en un sistema de componentes embebidos o anidados unos dentro de otros. Se trata de economizar recursos al igual que sucede en la naturaleza.</dd>`
      })}</div>`,
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
  default: Prototype
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
var Slide_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-168sdzy,.svelte-168sdzy:before,.svelte-168sdzy:after{box-sizing:border-box}\ndiv.svelte-168sdzy,img.svelte-168sdzy{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@keyframes svelte-168sdzy-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-168sdzy-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-168sdzy-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-168sdzy:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-168sdzy::selection{color:black;background-color:white;text-shadow:none}\nimg.svelte-168sdzy{max-width:100%;height:auto}\n.Slide.svelte-168sdzy{position:relative;text-align:center;grid-area:slide;padding-top:1.618rem;overflow-y:auto}\n.numbertext.svelte-168sdzy{color:#6c6c6c;position:absolute;top:1.618rem;left:1.618rem}\nimg.svelte-168sdzy{width:90%;border-radius:50%}\n@media(min-width: 769px){img.svelte-168sdzy{width:auto;max-height:90vh}}';
var Thumbnail_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-14jorua,.svelte-14jorua:before,.svelte-14jorua:after{box-sizing:border-box}\nimg.svelte-14jorua{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@keyframes svelte-14jorua-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-14jorua-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-14jorua-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-14jorua:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-14jorua::selection{color:black;background-color:white;text-shadow:none}\nimg.svelte-14jorua{max-width:100%;height:auto}\n.sample.svelte-14jorua{opacity:0.4}\n.sample.svelte-14jorua:hover{opacity:1}\nimg.svelte-14jorua{padding:0.618rem;border-radius:50%;transition:all 0.1s ease-in-out}\n.cursor.svelte-14jorua{cursor:pointer}\n.active.svelte-14jorua{opacity:1;border:1px dotted #2a2929}';
var Caption_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-1kngayd,.svelte-1kngayd:before,.svelte-1kngayd:after{box-sizing:border-box}\ndiv.svelte-1kngayd,p.svelte-1kngayd,a.svelte-1kngayd{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\np.svelte-1kngayd{font-size:1rem;line-height:28.8px}\n@media(min-width: 769px){p.svelte-1kngayd{max-width:769px;margin-left:auto;margin-right:auto}}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@keyframes svelte-1kngayd-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-1kngayd-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-1kngayd-loading{50%{transform:scale(1.2);opacity:0.7}}\na.svelte-1kngayd:hover{animation-name:svelte-1kngayd-fade;animation-duration:0.3s}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-1kngayd:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-1kngayd::selection{color:black;background-color:white;text-shadow:none}\n.caption-container.svelte-1kngayd{grid-area:captio;display:flex;align-items:center;justify-content:space-between;text-align:center;color:#b4b4b4;background-color:#2a2929;align-self:start}\n.prev.svelte-1kngayd,.next.svelte-1kngayd{cursor:pointer;width:auto;padding:1rem;margin-top:0px;color:#6c6c6c;font-size:1.618rem;line-height:40.896px;user-select:none;text-decoration:none}\n.prev.svelte-1kngayd:hover,.next.svelte-1kngayd:hover{color:#e5e5e5}\n.prev.svelte-1kngayd:active,.next.svelte-1kngayd:active{color:#e8b28a}\np.svelte-1kngayd{margin-bottom:0}';
var Lightbox_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-r15ul5,.svelte-r15ul5:before,.svelte-r15ul5:after{box-sizing:border-box}\ndiv.svelte-r15ul5,span.svelte-r15ul5{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@keyframes svelte-r15ul5-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-r15ul5-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-r15ul5-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-r15ul5:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-r15ul5::selection{color:black;background-color:white;text-shadow:none}\n.lightbox.svelte-r15ul5{position:fixed;z-index:9999;left:0;top:0;display:grid;grid-template-areas:"slide thumb" "slide thumb" "captio thumb";width:100%;height:100vh;overflow:hidden;background-color:#110e08}\n@media(min-width: 1023px){.lightbox.svelte-r15ul5{overflow:auto;grid-template-areas:"captio slide thumb"}}\n.Thumbnails.svelte-r15ul5{grid-area:thumb;width:4.236rem;margin-top:4.236rem;overflow-y:auto}\n@media(min-width: 769px){.Thumbnails.svelte-r15ul5{width:6.854rem;gap:1.618rem;overflow-y:auto}}\n.close.svelte-r15ul5{padding:1rem;color:#e8b28a;position:absolute;z-index:1000;top:0.618rem;right:1rem;font-size:1.618rem;line-height:40.896px}\n.close.svelte-r15ul5:hover,.close.svelte-r15ul5:focus{color:#e5e5e5;cursor:pointer}';
var ImageDisplay_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-1cj8jz7,.svelte-1cj8jz7:before,.svelte-1cj8jz7:after{box-sizing:border-box}\ndiv.svelte-1cj8jz7,img.svelte-1cj8jz7{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@keyframes svelte-1cj8jz7-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-1cj8jz7-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-1cj8jz7-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-1cj8jz7:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-1cj8jz7::selection{color:black;background-color:white;text-shadow:none}\nimg.svelte-1cj8jz7{max-width:100%;height:auto}\n.DemoGallery.svelte-1cj8jz7{padding-bottom:2.618rem;text-align:center;display:grid;grid-template-columns:repeat(2, 1fr);gap:1.618rem}\n@media(min-width: 769px){.DemoGallery.svelte-1cj8jz7{grid-template-columns:repeat(auto-fill, minmax(133px, 20%));place-content:center;gap:1.618rem}}\nimg.svelte-1cj8jz7{border-radius:50%;transition:0.2s;cursor:pointer;place-self:center}\n@media(min-width: 769px){img.svelte-1cj8jz7{margin:1.618rem}}\n@media(min-width: 769px){img.svelte-1cj8jz7:hover{box-shadow:0 1rem 1.618rem rgba(17, 14, 8, 0.5);transform:scale(1.05)}}';
const css$d = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");.svelte-1cj8jz7,.svelte-1cj8jz7:before,.svelte-1cj8jz7:after{box-sizing:border-box}div.svelte-1cj8jz7,img.svelte-1cj8jz7{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}@media(min-width: 769px){}@media(min-width: 1023px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 769px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}@keyframes svelte-1cj8jz7-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-1cj8jz7-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-1cj8jz7-loading{50%{transform:scale(1.2);opacity:0.7}}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-1cj8jz7:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-1cj8jz7::selection{color:black;background-color:white;text-shadow:none}img.svelte-1cj8jz7{max-width:100%;height:auto}.DemoGallery.svelte-1cj8jz7{padding-bottom:2.618rem;text-align:center;display:grid;grid-template-columns:repeat(2, 1fr);gap:1.618rem}@media(min-width: 769px){.DemoGallery.svelte-1cj8jz7{grid-template-columns:repeat(auto-fill, minmax(133px, 20%));place-content:center;gap:1.618rem}}img.svelte-1cj8jz7{border-radius:50%;transition:0.2s;cursor:pointer;place-self:center}@media(min-width: 769px){img.svelte-1cj8jz7{margin:1.618rem}}@media(min-width: 769px){img.svelte-1cj8jz7:hover{box-shadow:0 1rem 1.618rem rgba(17, 14, 8, 0.5);transform:scale(1.05)}}',
  map: `{"version":3,"file":"ImageDisplay.svelte","sources":["ImageDisplay.svelte"],"sourcesContent":["<script>\\n\\timport { fade, fly } from 'svelte/transition';\\n\\timport { images } from '$lib/data/imageData.js';\\n</script>\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nsvg {\\n  max-height: 90vh;\\n}\\n\\nbody,\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Montserrat\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nul {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  display: flex;\\n  flex-direction: column;\\n  margin-top: 11.089rem;\\n  background-color: blue;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 40.896px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 86.4px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 144px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 144px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 57.6px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 28.8px;\\n  }\\n}\\n\\nsmall,\\np {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n\\nhgroup {\\n  margin-bottom: 1.618rem;\\n}\\n\\n@media (min-width: 769px) {\\n  p,\\nh4 {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #d3b39c;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: blue;\\n}\\n\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: blue;\\n  border: 1px solid blue;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\nbody {\\n  background-color: #414141;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\nimg {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.tachado {\\n  text-decoration: line-through;\\n}\\n\\n.not-clickable {\\n  pointer-events: none;\\n}\\n\\nvideo {\\n  width: 100%;\\n  object-fit: cover;\\n  /* mix-blend-mode: luminosity; */\\n  /* border-radius: $h2; */\\n}\\n\\n.DemoGallery {\\n  padding-bottom: 2.618rem;\\n  text-align: center;\\n  display: grid;\\n  grid-template-columns: repeat(2, 1fr);\\n  gap: 1.618rem;\\n}\\n@media (min-width: 769px) {\\n  .DemoGallery {\\n    grid-template-columns: repeat(auto-fill, minmax(133px, 20%));\\n    place-content: center;\\n    gap: 1.618rem;\\n  }\\n}\\n\\nimg {\\n  border-radius: 50%;\\n  transition: 0.2s;\\n  cursor: pointer;\\n  place-self: center;\\n}\\n@media (min-width: 769px) {\\n  img {\\n    margin: 1.618rem;\\n    /* max-width: 50vw; */\\n  }\\n}\\n\\n@media (min-width: 769px) {\\n  img:hover {\\n    box-shadow: 0 1rem 1.618rem rgba(17, 14, 8, 0.5);\\n    transform: scale(1.05);\\n  }\\n}</style>\\n\\n\\n<!-- Image Row -->\\n<div class=\\"DemoGallery\\">\\n\\t{#each images as {id, imgurl, name}}\\n\\t\\t<img {id} src={imgurl} alt={name} on:click />\\n\\t{/each}\\n</div>\\n"],"names":[],"mappings":"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"}`
};
const ImageDisplay = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$d);
  return `
<div class="${"DemoGallery svelte-1cj8jz7"}">${each(images, ({id, imgurl, name}) => `<img${add_attribute("id", id, 0)}${add_attribute("src", imgurl, 0)}${add_attribute("alt", name, 0)} class="${"svelte-1cj8jz7"}">`)}</div>`;
});
var LightboxGallery_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-i6qeye,.svelte-i6qeye:before,.svelte-i6qeye:after{box-sizing:border-box}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@keyframes svelte-i6qeye-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-i6qeye-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-i6qeye-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-i6qeye:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-i6qeye::selection{color:black;background-color:white;text-shadow:none}\naside.svelte-i6qeye{display:grid;place-items:center;padding-bottom:2.618rem}';
const css$c = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");.svelte-i6qeye,.svelte-i6qeye:before,.svelte-i6qeye:after{box-sizing:border-box}@media(min-width: 769px){}@media(min-width: 1023px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 769px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}@keyframes svelte-i6qeye-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-i6qeye-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-i6qeye-loading{50%{transform:scale(1.2);opacity:0.7}}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-i6qeye:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-i6qeye::selection{color:black;background-color:white;text-shadow:none}aside.svelte-i6qeye{display:grid;place-items:center;padding-bottom:2.618rem}',
  map: `{"version":3,"file":"LightboxGallery.svelte","sources":["LightboxGallery.svelte"],"sourcesContent":["<script>\\n\\timport Lightbox from './Lightbox.svelte';\\n\\timport Button from '$lib/Button.svelte';\\n\\timport ImageDisplay from './ImageDisplay.svelte';\\n\\n\\tlet modalOpen = false;\\n\\n\\tlet imageShowingIndex = 0;\\n\\n\\tconst handleImgClick = (e) => {\\n\\t\\timageShowingIndex = Number(e.target.id);\\n\\t\\tmodalOpen = true;\\n\\t};\\n</script>\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nsvg {\\n  max-height: 90vh;\\n}\\n\\nbody,\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Montserrat\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nul {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  display: flex;\\n  flex-direction: column;\\n  margin-top: 11.089rem;\\n  background-color: blue;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 40.896px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 86.4px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 144px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 144px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 57.6px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 28.8px;\\n  }\\n}\\n\\nsmall,\\np {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n\\nhgroup {\\n  margin-bottom: 1.618rem;\\n}\\n\\n@media (min-width: 769px) {\\n  p,\\nh4 {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #d3b39c;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: blue;\\n}\\n\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: blue;\\n  border: 1px solid blue;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\nbody {\\n  background-color: #414141;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\nimg {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.tachado {\\n  text-decoration: line-through;\\n}\\n\\n.not-clickable {\\n  pointer-events: none;\\n}\\n\\nvideo {\\n  width: 100%;\\n  object-fit: cover;\\n  /* mix-blend-mode: luminosity; */\\n  /* border-radius: $h2; */\\n}\\n\\naside {\\n  display: grid;\\n  place-items: center;\\n  padding-bottom: 2.618rem;\\n}\\n\\n/* .container {\\n\\tposition: relative;\\n} */</style>\\n\\n<!-- The Modal/Lightbox -->\\n{#if modalOpen}\\n\\t<Lightbox on:click={() => (modalOpen = false)} {imageShowingIndex} />\\n{:else}\\n\\t<ImageDisplay on:click={handleImgClick} />\\n{/if}\\n\\n<!-- Button to open Lightbox -->\\n<aside>\\n\\t<Button variante={7} text=\\"View gallery\\" on:click={() => (modalOpen = true)} />\\n</aside>\\n\\n"],"names":[],"mappings":"AAemB,SAAS,OAAO,CAAC,AAQpC,QAAQ,IAAI,gHAAgH,CAAC,CAAC,AAC9H,cAAC,CAAE,cAAC,OAAO,CAAE,cAAC,MAAM,AAAC,CAAC,AACpB,UAAU,CAAE,UAAU,AACxB,CAAC,AAsFD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAK3B,CAAC,AACD,MAAM,AAAC,YAAY,MAAM,CAAC,AAAC,CAAC,AAK5B,CAAC,AACD,MAAM,AAAC,YAAY,MAAM,CAAC,AAAC,CAAC,AAK5B,CAAC,AAOD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAK3B,CAAC,AACD,MAAM,AAAC,YAAY,MAAM,CAAC,AAAC,CAAC,AAO5B,CAAC,AAOD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAM3B,CAAC,AAYD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAO3B,CAAC,AAMD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAK3B,CAAC,AACD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAK3B,CAAC,AACD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAM3B,CAAC,AAgFD,WAAW,kBAAK,CAAC,AACf,EAAE,AAAC,CAAC,AACF,OAAO,CAAE,GAAG,AACd,CAAC,AACD,IAAI,AAAC,CAAC,AACJ,OAAO,CAAE,CAAC,AACZ,CAAC,AACH,CAAC,AACD,WAAW,mBAAM,CAAC,AAChB,EAAE,AAAC,CAAC,AACF,SAAS,CAAE,WAAW,KAAK,CAAC,CAC5B,OAAO,CAAE,GAAG,AACd,CAAC,AACD,GAAG,AAAC,CAAC,AACH,SAAS,CAAE,WAAW,GAAG,CAAC,CAC1B,OAAO,CAAE,CAAC,AACZ,CAAC,AACD,IAAI,AAAC,CAAC,AACJ,SAAS,CAAE,WAAW,CAAC,CAAC,CACxB,OAAO,CAAE,CAAC,AACZ,CAAC,AACH,CAAC,AACD,WAAW,qBAAQ,CAAC,AAClB,GAAG,AAAC,CAAC,AACH,SAAS,CAAE,MAAM,GAAG,CAAC,CACrB,OAAO,CAAE,GAAG,AACd,CAAC,AACH,CAAC,AAMD,KAAK,AAAC,CAAC,AACL,WAAW,CAAE,aAAa,CAAC,CAAC,kBAAkB,CAAC,CAAC,UAAU,CAAC,CAAC,MAAM,CAAC,CAAC,MAAM,CAAC,CAAC,MAAM,CAAC,CAAC,SAAS,CAAC,CAAC,WAAW,CAAC,CAAC,gBAAgB,CAAC,CAAC,UAAU,AAC1I,CAAC,AAED,cAAC,MAAM,AAAC,CAAC,AACP,aAAa,CAAE,OAAO,CACtB,aAAa,CAAE,MAAM,CACrB,aAAa,CAAE,GAAG,CAClB,aAAa,CAAE,MAAM,AACvB,CAAC,cAMD,WAAW,AAAC,CAAC,AACX,KAAK,CAAE,KAAK,CACZ,gBAAgB,CAAE,KAAK,CACvB,WAAW,CAAE,IAAI,AACnB,CAAC,AAsBD,KAAK,cAAC,CAAC,AACL,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,cAAc,CAAE,QAAQ,AAC1B,CAAC"}`
};
const LightboxGallery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$c);
  return `
${`${validate_component(ImageDisplay, "ImageDisplay").$$render($$result, {}, {}, {})}`}


<aside class="${"svelte-i6qeye"}">${validate_component(Button, "Button").$$render($$result, {variante: 7, text: "View gallery"}, {}, {})}</aside>`;
});
const VideoBanner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(GridBase, "GridBase").$$render($$result, {variante: 4}, {}, {
    subarea2: () => `<div slot="${"subarea2"}"><p>Todo son formas de arte simb\xF3licas en si mismas y, como tales, cumplen una funci\xF3n mediadora capaz de abrirle lo real a la conciencia.</p></div>`,
    subarea1: () => `<div slot="${"subarea1"}"><p>Desde la poes\xEDa de la materia</p></div>`,
    default: () => `<video poster="${"/img/cover3.jpg"}" loop playsinline controls="${"controls"}"><source src="${"/img/desdelapoesiadelamateria.webm"}" type="${"video/webm"}"><source src="${"/img/desdelapoesiadelamateria.mp4"}" type="${"video/mp4"}"><p>Ups! Su navegador no soporta v\xEDdeos HTML5.</p></video>`
  })}`;
});
const Artworks = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Section, "Section").$$render($$result, {id: "cover", variante: 3}, {}, {
    default: () => `${validate_component(Cover, "Cover").$$render($$result, {
      variante: 1,
      title: coverData[1].title,
      subtitle: coverData[1].subtitle,
      text: coverData[1].text
    }, {}, {})}`
  })}



${validate_component(Section, "Section").$$render($$result, {variante: 1, id: "video"}, {}, {
    default: () => `${validate_component(VideoBanner, "VideoBanner").$$render($$result, {}, {}, {})}`
  })}

${validate_component(Section, "Section").$$render($$result, {id: "lightboxgallery", variante: 0}, {}, {
    default: () => `${validate_component(LightboxGallery, "LightboxGallery").$$render($$result, {}, {}, {})}`
  })}

${validate_component(Section, "Section").$$render($$result, {variante: 4}, {}, {
    default: () => `${validate_component(GridBase, "GridBase").$$render($$result, {variante: 2}, {}, {
      subarea2: () => `<div slot="${"subarea2"}"><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex.</p>
			
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex.</p></div>`,
      subarea1: () => `<div slot="${"subarea1"}"><p><strong>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum porro id debitis ullam sequi natus, et distinctio impedit reprehenderit quas in nihil, maxime consequuntur iste ut nesciunt sed laboriosam ex.</strong></p></div>`,
      default: () => `<img src="${"./img/grafico-8.svg"}" alt="${""}">`
    })}`
  })}

${validate_component(Section, "Section").$$render($$result, {variante: 3}, {}, {
    default: () => `${validate_component(GridBase, "GridBase").$$render($$result, {variante: 5}, {}, {
      subarea1: () => `<div slot="${"subarea1"}">${validate_component(Button, "Button").$$render($$result, {
        variante: 1,
        text: "Chat-Whatsapp",
        url: "https://api.whatsapp.com/send?phone=+34619549032"
      }, {}, {})}</div>`,
      subarea2: () => `<div slot="${"subarea2"}"><h2>Mas info</h2>
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, exercitationem repudiandae iusto impedit sint magnam totam earum neque, corporis, dolores pariatur. Maiores, perspiciatis praesentium? Totam sint libero hic laborum veniam.</p></div>`,
      default: () => `${validate_component(Img, "Img").$$render($$result, {
        variante: 4,
        src: "./img/cover4.jpg",
        alt: "Presentation"
      }, {}, {})}`
    })}`
  })}

`;
});
var index$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: Artworks
});
var AboutMe_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-1uu4iz9.svelte-1uu4iz9,.svelte-1uu4iz9.svelte-1uu4iz9:before,.svelte-1uu4iz9.svelte-1uu4iz9:after{box-sizing:border-box}\ndiv.svelte-1uu4iz9.svelte-1uu4iz9,span.svelte-1uu4iz9.svelte-1uu4iz9,h2.svelte-1uu4iz9.svelte-1uu4iz9,img.svelte-1uu4iz9.svelte-1uu4iz9,section.svelte-1uu4iz9.svelte-1uu4iz9{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\nsection.svelte-1uu4iz9.svelte-1uu4iz9{display:block}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\nh2.svelte-1uu4iz9.svelte-1uu4iz9{font-weight:500;font-size:1rem;line-height:28.8px}\n@media(min-width: 374px){h2.svelte-1uu4iz9.svelte-1uu4iz9{font-size:1.618rem;line-height:40.896px}}\n@media(min-width: 2140px){h2.svelte-1uu4iz9.svelte-1uu4iz9{font-size:2.618rem;line-height:57.6px;margin-left:6.854rem;margin-right:6.854rem}}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@keyframes svelte-1uu4iz9-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-1uu4iz9-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-1uu4iz9-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-1uu4iz9.svelte-1uu4iz9:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-1uu4iz9.svelte-1uu4iz9::selection{color:black;background-color:white;text-shadow:none}\nimg.svelte-1uu4iz9.svelte-1uu4iz9{max-width:100%;height:auto}\n.AboutMe.svelte-1uu4iz9.svelte-1uu4iz9{position:relative;background-color:white;display:grid;align-items:center;text-align:center;padding:2.618rem}\n.AboutMe.svelte-1uu4iz9 .AboutMeHeader.svelte-1uu4iz9{max-width:46.971rem;margin-top:1.618rem;margin-bottom:1.618rem;color:rgba(255, 255, 255, 0.85);margin-left:auto;margin-right:auto}\n.AboutMe.svelte-1uu4iz9 .AboutMeText.svelte-1uu4iz9{color:#2a2929}\n.Avatar.svelte-1uu4iz9.svelte-1uu4iz9{justify-self:center;max-width:11.089rem;height:11.089rem;border-radius:50%}\n.idioma_switch.svelte-1uu4iz9.svelte-1uu4iz9{position:relative;margin-bottom:1rem;display:flex;justify-items:flex-end}\n.idioma_switch.svelte-1uu4iz9 button.svelte-1uu4iz9:nth-child(1){position:absolute;right:0;top:0;border:none;background-color:transparent;color:#e8b28a}\n.idioma_switch.svelte-1uu4iz9 button.svelte-1uu4iz9:nth-child(1):hover{color:#6c6c6c;cursor:pointer}\n.timeline.svelte-1uu4iz9.svelte-1uu4iz9{text-align:left}';
const css$b = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");.svelte-1uu4iz9.svelte-1uu4iz9,.svelte-1uu4iz9.svelte-1uu4iz9:before,.svelte-1uu4iz9.svelte-1uu4iz9:after{box-sizing:border-box}div.svelte-1uu4iz9.svelte-1uu4iz9,span.svelte-1uu4iz9.svelte-1uu4iz9,h2.svelte-1uu4iz9.svelte-1uu4iz9,img.svelte-1uu4iz9.svelte-1uu4iz9,section.svelte-1uu4iz9.svelte-1uu4iz9{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}section.svelte-1uu4iz9.svelte-1uu4iz9{display:block}@media(min-width: 769px){}@media(min-width: 1023px){}@media(min-width: 2140px){}h2.svelte-1uu4iz9.svelte-1uu4iz9{font-weight:500;font-size:1rem;line-height:28.8px}@media(min-width: 374px){h2.svelte-1uu4iz9.svelte-1uu4iz9{font-size:1.618rem;line-height:40.896px}}@media(min-width: 2140px){h2.svelte-1uu4iz9.svelte-1uu4iz9{font-size:2.618rem;line-height:57.6px;margin-left:6.854rem;margin-right:6.854rem}}@media(min-width: 374px){}@media(min-width: 769px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}@keyframes svelte-1uu4iz9-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-1uu4iz9-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-1uu4iz9-loading{50%{transform:scale(1.2);opacity:0.7}}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-1uu4iz9.svelte-1uu4iz9:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-1uu4iz9.svelte-1uu4iz9::selection{color:black;background-color:white;text-shadow:none}img.svelte-1uu4iz9.svelte-1uu4iz9{max-width:100%;height:auto}.AboutMe.svelte-1uu4iz9.svelte-1uu4iz9{position:relative;background-color:white;display:grid;align-items:center;text-align:center;padding:2.618rem}.AboutMe.svelte-1uu4iz9 .AboutMeHeader.svelte-1uu4iz9{max-width:46.971rem;margin-top:1.618rem;margin-bottom:1.618rem;color:rgba(255, 255, 255, 0.85);margin-left:auto;margin-right:auto}.AboutMe.svelte-1uu4iz9 .AboutMeText.svelte-1uu4iz9{color:#2a2929}.Avatar.svelte-1uu4iz9.svelte-1uu4iz9{justify-self:center;max-width:11.089rem;height:11.089rem;border-radius:50%}.idioma_switch.svelte-1uu4iz9.svelte-1uu4iz9{position:relative;margin-bottom:1rem;display:flex;justify-items:flex-end}.idioma_switch.svelte-1uu4iz9 button.svelte-1uu4iz9:nth-child(1){position:absolute;right:0;top:0;border:none;background-color:transparent;color:#e8b28a}.idioma_switch.svelte-1uu4iz9 button.svelte-1uu4iz9:nth-child(1):hover{color:#6c6c6c;cursor:pointer}.timeline.svelte-1uu4iz9.svelte-1uu4iz9{text-align:left}',
  map: '{"version":3,"file":"AboutMe.svelte","sources":["AboutMe.svelte"],"sourcesContent":["<script>\\n    export let title = \\"\\"\\n    export let subtitle = \\"\\"\\n    export let text = \\"\\"\\n    export let textingles = \\"\\"\\n    export let img = \\"\\"\\n    let idioma_switch = true;\\n</script>\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nsvg {\\n  max-height: 90vh;\\n}\\n\\nbody,\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Montserrat\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nul {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  display: flex;\\n  flex-direction: column;\\n  margin-top: 11.089rem;\\n  background-color: blue;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 40.896px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 86.4px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 144px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 144px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 57.6px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 28.8px;\\n  }\\n}\\n\\nsmall,\\np {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n\\nhgroup {\\n  margin-bottom: 1.618rem;\\n}\\n\\n@media (min-width: 769px) {\\n  p,\\nh4 {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #d3b39c;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: blue;\\n}\\n\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: blue;\\n  border: 1px solid blue;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\nbody {\\n  background-color: #414141;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\nimg {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.tachado {\\n  text-decoration: line-through;\\n}\\n\\n.not-clickable {\\n  pointer-events: none;\\n}\\n\\nvideo {\\n  width: 100%;\\n  object-fit: cover;\\n  /* mix-blend-mode: luminosity; */\\n  /* border-radius: $h2; */\\n}\\n\\n.AboutMe {\\n  position: relative;\\n  background-color: white;\\n  display: grid;\\n  align-items: center;\\n  text-align: center;\\n  padding: 2.618rem;\\n}\\n.AboutMe .AboutMeHeader {\\n  max-width: 46.971rem;\\n  margin-top: 1.618rem;\\n  margin-bottom: 1.618rem;\\n  color: rgba(255, 255, 255, 0.85);\\n  margin-left: auto;\\n  margin-right: auto;\\n}\\n.AboutMe .AboutMeText {\\n  color: #2a2929;\\n}\\n.AboutMe p {\\n  color: #6c6c6c;\\n}\\n\\n.Avatar {\\n  justify-self: center;\\n  max-width: 11.089rem;\\n  height: 11.089rem;\\n  border-radius: 50%;\\n}\\n\\n.idioma_switch {\\n  position: relative;\\n  margin-bottom: 1rem;\\n  display: flex;\\n  justify-items: flex-end;\\n}\\n.idioma_switch button:nth-child(1) {\\n  position: absolute;\\n  right: 0;\\n  top: 0;\\n  border: none;\\n  background-color: transparent;\\n  color: #e8b28a;\\n}\\n.idioma_switch button:nth-child(1):hover {\\n  color: #6c6c6c;\\n  cursor: pointer;\\n}\\n\\n.timeline {\\n  text-align: left;\\n}</style>\\n\\n<section class=\\"AboutMe\\">\\n\\n    <img class=\\"Avatar\\" src={img} alt={title}>\\n\\n    <h2 class=\\"AboutMeHeader\\">\\n        {title} <br>\\n        <span class=\\"AboutMeText\\">{@html subtitle}</span>\\n    </h2>\\n\\n    <div class=\\"idioma_switch\\">\\n        <button on:click={()=>{\\n            idioma_switch = !idioma_switch;\\n        }}>{#if idioma_switch}English{:else}Espa\xF1ol{/if}</button>\\n    </div>\\n\\n    <dl class=\\"timeline\\">\\n    {#if idioma_switch}\\n        {@html text}\\n    {:else}\\n        {@html textingles}\\n    {/if}\\n    </dl>\\n</section>"],"names":[],"mappings":"AASmB,SAAS,OAAO,CAAC,AAQpC,QAAQ,IAAI,gHAAgH,CAAC,CAAC,AAC9H,8BAAC,CAAE,8BAAC,OAAO,CAAE,8BAAC,MAAM,AAAC,CAAC,AACpB,UAAU,CAAE,UAAU,AACxB,CAAC,AAEW,iCAAG,CAAE,kCAAI,CAA8B,gCAAE,CAAmD,iCAAG,CAA0K,OAAO,8BAAQ,CAAC,AACnS,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CAAC,CACT,SAAS,CAAE,IAAI,CACf,IAAI,CAAE,OAAO,CACb,cAAc,CAAE,QAAQ,CACxB,cAAc,CAAE,kBAAkB,CAClC,sBAAsB,CAAE,WAAW,CACnC,gBAAgB,CAAE,IAAI,AACxB,CAAC,AAEoB,OAAO,8BAAO,CAAC,AAClC,OAAO,CAAE,KAAK,AAChB,CAAC,AAsED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAK3B,CAAC,AACD,MAAM,AAAC,YAAY,MAAM,CAAC,AAAC,CAAC,AAK5B,CAAC,AACD,MAAM,AAAC,YAAY,MAAM,CAAC,AAAC,CAAC,AAK5B,CAAC,AAED,EAAE,8BAAC,CAAC,AACF,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,MAAM,AACrB,CAAC,AACD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,EAAE,8BAAC,CAAC,AACF,SAAS,CAAE,QAAQ,CACnB,WAAW,CAAE,QAAQ,AACvB,CAAC,AACH,CAAC,AACD,MAAM,AAAC,YAAY,MAAM,CAAC,AAAC,CAAC,AAC1B,EAAE,8BAAC,CAAC,AACF,SAAS,CAAE,QAAQ,CACnB,WAAW,CAAE,MAAM,CACnB,WAAW,CAAE,QAAQ,CACrB,YAAY,CAAE,QAAQ,AACxB,CAAC,AACH,CAAC,AAOD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAM3B,CAAC,AAYD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAO3B,CAAC,AAMD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAK3B,CAAC,AACD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAK3B,CAAC,AACD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAM3B,CAAC,AAgFD,WAAW,mBAAK,CAAC,AACf,EAAE,AAAC,CAAC,AACF,OAAO,CAAE,GAAG,AACd,CAAC,AACD,IAAI,AAAC,CAAC,AACJ,OAAO,CAAE,CAAC,AACZ,CAAC,AACH,CAAC,AACD,WAAW,oBAAM,CAAC,AAChB,EAAE,AAAC,CAAC,AACF,SAAS,CAAE,WAAW,KAAK,CAAC,CAC5B,OAAO,CAAE,GAAG,AACd,CAAC,AACD,GAAG,AAAC,CAAC,AACH,SAAS,CAAE,WAAW,GAAG,CAAC,CAC1B,OAAO,CAAE,CAAC,AACZ,CAAC,AACD,IAAI,AAAC,CAAC,AACJ,SAAS,CAAE,WAAW,CAAC,CAAC,CACxB,OAAO,CAAE,CAAC,AACZ,CAAC,AACH,CAAC,AACD,WAAW,sBAAQ,CAAC,AAClB,GAAG,AAAC,CAAC,AACH,SAAS,CAAE,MAAM,GAAG,CAAC,CACrB,OAAO,CAAE,GAAG,AACd,CAAC,AACH,CAAC,AAMD,KAAK,AAAC,CAAC,AACL,WAAW,CAAE,aAAa,CAAC,CAAC,kBAAkB,CAAC,CAAC,UAAU,CAAC,CAAC,MAAM,CAAC,CAAC,MAAM,CAAC,CAAC,MAAM,CAAC,CAAC,SAAS,CAAC,CAAC,WAAW,CAAC,CAAC,gBAAgB,CAAC,CAAC,UAAU,AAC1I,CAAC,AAED,8BAAC,MAAM,AAAC,CAAC,AACP,aAAa,CAAE,OAAO,CACtB,aAAa,CAAE,MAAM,CACrB,aAAa,CAAE,GAAG,CAClB,aAAa,CAAE,MAAM,AACvB,CAAC,8BAMD,WAAW,AAAC,CAAC,AACX,KAAK,CAAE,KAAK,CACZ,gBAAgB,CAAE,KAAK,CACvB,WAAW,CAAE,IAAI,AACnB,CAAC,AAED,GAAG,8BAAC,CAAC,AACH,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,IAAI,AACd,CAAC,AAiBD,QAAQ,8BAAC,CAAC,AACR,QAAQ,CAAE,QAAQ,CAClB,gBAAgB,CAAE,KAAK,CACvB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,QAAQ,AACnB,CAAC,AACD,uBAAQ,CAAC,cAAc,eAAC,CAAC,AACvB,SAAS,CAAE,SAAS,CACpB,UAAU,CAAE,QAAQ,CACpB,aAAa,CAAE,QAAQ,CACvB,KAAK,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CAChC,WAAW,CAAE,IAAI,CACjB,YAAY,CAAE,IAAI,AACpB,CAAC,AACD,uBAAQ,CAAC,YAAY,eAAC,CAAC,AACrB,KAAK,CAAE,OAAO,AAChB,CAAC,AAKD,OAAO,8BAAC,CAAC,AACP,YAAY,CAAE,MAAM,CACpB,SAAS,CAAE,SAAS,CACpB,MAAM,CAAE,SAAS,CACjB,aAAa,CAAE,GAAG,AACpB,CAAC,AAED,cAAc,8BAAC,CAAC,AACd,QAAQ,CAAE,QAAQ,CAClB,aAAa,CAAE,IAAI,CACnB,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,QAAQ,AACzB,CAAC,AACD,6BAAc,CAAC,qBAAM,WAAW,CAAC,CAAC,AAAC,CAAC,AAClC,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,CAAC,CACR,GAAG,CAAE,CAAC,CACN,MAAM,CAAE,IAAI,CACZ,gBAAgB,CAAE,WAAW,CAC7B,KAAK,CAAE,OAAO,AAChB,CAAC,AACD,6BAAc,CAAC,qBAAM,WAAW,CAAC,CAAC,MAAM,AAAC,CAAC,AACxC,KAAK,CAAE,OAAO,CACd,MAAM,CAAE,OAAO,AACjB,CAAC,AAED,IAAI,KAAK,8BAAC,CAAC,AACT,UAAU,CAAE,IAAI,AAClB,CAAC"}'
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
  return `<section class="${"AboutMe svelte-1uu4iz9"}"><img class="${"Avatar svelte-1uu4iz9"}"${add_attribute("src", img, 0)}${add_attribute("alt", title, 0)}>

    <h2 class="${"AboutMeHeader svelte-1uu4iz9"}">${escape(title)} <br class="${"svelte-1uu4iz9"}">
        <span class="${"AboutMeText svelte-1uu4iz9"}">${subtitle}</span></h2>

    <div class="${"idioma_switch svelte-1uu4iz9"}"><button class="${"svelte-1uu4iz9"}">${`English`}</button></div>

    <dl class="${"timeline svelte-1uu4iz9"}">${`${text}`}</dl></section>`;
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
var Skillbar_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-2q51do,.svelte-2q51do:before,.svelte-2q51do:after{box-sizing:border-box}\ndiv.svelte-2q51do,span.svelte-2q51do{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@keyframes svelte-2q51do-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-2q51do-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-2q51do-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-2q51do:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-2q51do::selection{color:black;background-color:white;text-shadow:none}\n.container.svelte-2q51do{width:100%;margin-top:0.618rem;position:relative}\nspan.svelte-2q51do{position:absolute;top:32%;left:8px;color:white}\n.skills.svelte-2q51do{text-align:right;padding:0.618rem 0.618rem 0.618rem 0;color:white;transition:0.5s ease-out}';
const css$a = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");.svelte-2q51do,.svelte-2q51do:before,.svelte-2q51do:after{box-sizing:border-box}div.svelte-2q51do,span.svelte-2q51do{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}@media(min-width: 769px){}@media(min-width: 1023px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 769px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}@keyframes svelte-2q51do-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-2q51do-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-2q51do-loading{50%{transform:scale(1.2);opacity:0.7}}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-2q51do:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-2q51do::selection{color:black;background-color:white;text-shadow:none}.container.svelte-2q51do{width:100%;margin-top:0.618rem;position:relative}span.svelte-2q51do{position:absolute;top:32%;left:8px;color:white}.skills.svelte-2q51do{text-align:right;padding:0.618rem 0.618rem 0.618rem 0;color:white;transition:0.5s ease-out}',
  map: `{"version":3,"file":"Skillbar.svelte","sources":["Skillbar.svelte"],"sourcesContent":["<script>\\n\\t// https://svelte.dev/docs#tweened\\n\\timport {\\n\\t\\ttweened\\n\\t} from 'svelte/motion';\\n\\t// https://svelte.dev/docs#svelte_easing\\n\\timport {\\n\\t\\tbackInOut\\n\\t} from 'svelte/easing';\\n\\n\\texport let skill;\\n\\texport let percent;\\n\\texport let color;\\n\\texport let delTime;\\n\\n\\tconst progress = tweened(30, {\\n\\t\\tdelay: delTime,\\n\\t\\tduration: 2000,\\n\\t\\teasing: backInOut\\n\\t});\\n\\n\\t// Changes the initial value of 30 to percent value in skillLevels array\\n\\tprogress.set(percent)\\n</script>\\n\\n<div class=\\"container\\">\\n\\t<span class=\\"skill\\">{skill}</span>\\n\\t<div class=\\"skills\\" style=\\"width: {$progress}%; background-color: {color}\\">\\n\\t\\t{percent}%\\n\\t</div>\\n</div>\\n\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nsvg {\\n  max-height: 90vh;\\n}\\n\\nbody,\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Montserrat\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nul {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  display: flex;\\n  flex-direction: column;\\n  margin-top: 11.089rem;\\n  background-color: blue;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 40.896px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 86.4px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 144px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 144px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 57.6px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 28.8px;\\n  }\\n}\\n\\nsmall,\\np {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n\\nhgroup {\\n  margin-bottom: 1.618rem;\\n}\\n\\n@media (min-width: 769px) {\\n  p,\\nh4 {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #d3b39c;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: blue;\\n}\\n\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: blue;\\n  border: 1px solid blue;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\nbody {\\n  background-color: #414141;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\nimg {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.tachado {\\n  text-decoration: line-through;\\n}\\n\\n.not-clickable {\\n  pointer-events: none;\\n}\\n\\nvideo {\\n  width: 100%;\\n  object-fit: cover;\\n  /* mix-blend-mode: luminosity; */\\n  /* border-radius: $h2; */\\n}\\n\\n.container {\\n  width: 100%;\\n  /* background-color: $grey_2; */\\n  margin-top: 0.618rem;\\n  position: relative;\\n}\\n\\nspan {\\n  position: absolute;\\n  top: 32%;\\n  left: 8px;\\n  color: white;\\n}\\n\\n.skills {\\n  text-align: right;\\n  padding: 0.618rem 0.618rem 0.618rem 0;\\n  /* font-weight: 300; */\\n  color: white;\\n  transition: 0.5s ease-out;\\n}</style>"],"names":[],"mappings":"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"}`
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
  return `<div class="${"container svelte-2q51do"}"><span class="${"skill svelte-2q51do"}">${escape(skill)}</span>
	<div class="${"skills svelte-2q51do"}" style="${"width: " + escape($progress) + "%; background-color: " + escape(color)}">${escape(percent)}%
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
var PhiSvg_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-xa2qay.svelte-xa2qay,.svelte-xa2qay.svelte-xa2qay:before,.svelte-xa2qay.svelte-xa2qay:after{box-sizing:border-box}\ndiv.svelte-xa2qay.svelte-xa2qay,h2.svelte-xa2qay.svelte-xa2qay,p.svelte-xa2qay.svelte-xa2qay,main.svelte-xa2qay.svelte-xa2qay{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\nmain.svelte-xa2qay.svelte-xa2qay{display:block}\ninput.svelte-xa2qay.svelte-xa2qay{-webkit-appearance:none;border-radius:0}\nsvg.svelte-xa2qay.svelte-xa2qay{max-height:90vh}\nmain.svelte-xa2qay.svelte-xa2qay{font-family:"Montserrat", sans-serif;letter-spacing:0;font-weight:500;color:#b4b4b4}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\nh2.svelte-xa2qay.svelte-xa2qay{font-weight:500;font-size:1rem;line-height:28.8px}\n@media(min-width: 374px){h2.svelte-xa2qay.svelte-xa2qay{font-size:1.618rem;line-height:40.896px}}\n@media(min-width: 2140px){h2.svelte-xa2qay.svelte-xa2qay{font-size:2.618rem;line-height:57.6px;margin-left:6.854rem;margin-right:6.854rem}}\n@media(min-width: 374px){}\np.svelte-xa2qay.svelte-xa2qay{font-size:1rem;line-height:28.8px}\n@media(min-width: 769px){p.svelte-xa2qay.svelte-xa2qay{max-width:769px;margin-left:auto;margin-right:auto}}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\ninput.svelte-xa2qay.svelte-xa2qay{border:none;font-family:inherit;font-size:1rem;line-height:28.8px;font-weight:inherit;color:#414141}\ninput[type=number].svelte-xa2qay.svelte-xa2qay{color:#d3b39c;background-color:#110e08;padding:0.618rem}\ninput[type=number].svelte-xa2qay.svelte-xa2qay:focus{outline:none}\ninput[type=range].svelte-xa2qay.svelte-xa2qay{-webkit-appearance:none;width:100%}\ninput[type=range].svelte-xa2qay.svelte-xa2qay:focus{outline:none}\ninput[type=range].svelte-xa2qay.svelte-xa2qay::-webkit-slider-runnable-track{width:100%;height:1px;cursor:pointer;background:#b4b4b4;border-radius:0px}\ninput[type=range].svelte-xa2qay.svelte-xa2qay::-webkit-slider-thumb{height:30px;width:30px;border-radius:50px;background:#b4b4b4;cursor:grab;-webkit-appearance:none;margin-top:-14.5px}\ninput[type=range].svelte-xa2qay.svelte-xa2qay:focus::-webkit-slider-runnable-track{background:blue}\n@keyframes svelte-xa2qay-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-xa2qay-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-xa2qay-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-xa2qay.svelte-xa2qay:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-xa2qay.svelte-xa2qay::selection{color:black;background-color:white;text-shadow:none}\nsvg.svelte-xa2qay circle.svelte-xa2qay{fill:#6c6c6c}\nsvg.svelte-xa2qay g.svelte-xa2qay{transform:translate(50%, 50%)}\n.PhiSvg.svelte-xa2qay.svelte-xa2qay{display:grid;grid-template-columns:1fr;grid-template-areas:"media" "texto";padding-top:0;padding-right:2.618rem;padding-left:2.618rem;padding-bottom:1.618rem}\n@media(min-width: 769px){.PhiSvg.svelte-xa2qay.svelte-xa2qay{padding-bottom:0;padding-right:0;grid-template-columns:1fr 1.62fr;grid-template-areas:"texto media"}}\n.PhiSvg.svelte-xa2qay .BannerMedia.svelte-xa2qay{grid-area:media}\n.PhiSvg.svelte-xa2qay .controls.svelte-xa2qay{margin-bottom:1.618rem;width:100%;display:grid;gap:2.618rem}\n.PhiSvg.svelte-xa2qay .PhiSvgText.svelte-xa2qay{display:grid;justify-items:start;align-self:center;grid-area:texto}';
const css$9 = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");.svelte-xa2qay.svelte-xa2qay,.svelte-xa2qay.svelte-xa2qay:before,.svelte-xa2qay.svelte-xa2qay:after{box-sizing:border-box}div.svelte-xa2qay.svelte-xa2qay,h2.svelte-xa2qay.svelte-xa2qay,p.svelte-xa2qay.svelte-xa2qay,main.svelte-xa2qay.svelte-xa2qay{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}main.svelte-xa2qay.svelte-xa2qay{display:block}input.svelte-xa2qay.svelte-xa2qay{-webkit-appearance:none;border-radius:0}svg.svelte-xa2qay.svelte-xa2qay{max-height:90vh}main.svelte-xa2qay.svelte-xa2qay{font-family:"Montserrat", sans-serif;letter-spacing:0;font-weight:500;color:#b4b4b4}@media(min-width: 769px){}@media(min-width: 1023px){}@media(min-width: 2140px){}h2.svelte-xa2qay.svelte-xa2qay{font-weight:500;font-size:1rem;line-height:28.8px}@media(min-width: 374px){h2.svelte-xa2qay.svelte-xa2qay{font-size:1.618rem;line-height:40.896px}}@media(min-width: 2140px){h2.svelte-xa2qay.svelte-xa2qay{font-size:2.618rem;line-height:57.6px;margin-left:6.854rem;margin-right:6.854rem}}@media(min-width: 374px){}p.svelte-xa2qay.svelte-xa2qay{font-size:1rem;line-height:28.8px}@media(min-width: 769px){p.svelte-xa2qay.svelte-xa2qay{max-width:769px;margin-left:auto;margin-right:auto}}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}input.svelte-xa2qay.svelte-xa2qay{border:none;font-family:inherit;font-size:1rem;line-height:28.8px;font-weight:inherit;color:#414141}input[type=number].svelte-xa2qay.svelte-xa2qay{color:#d3b39c;background-color:#110e08;padding:0.618rem}input[type=number].svelte-xa2qay.svelte-xa2qay:focus{outline:none}input[type=range].svelte-xa2qay.svelte-xa2qay{-webkit-appearance:none;width:100%}input[type=range].svelte-xa2qay.svelte-xa2qay:focus{outline:none}input[type=range].svelte-xa2qay.svelte-xa2qay::-webkit-slider-runnable-track{width:100%;height:1px;cursor:pointer;background:#b4b4b4;border-radius:0px}input[type=range].svelte-xa2qay.svelte-xa2qay::-webkit-slider-thumb{height:30px;width:30px;border-radius:50px;background:#b4b4b4;cursor:grab;-webkit-appearance:none;margin-top:-14.5px}input[type=range].svelte-xa2qay.svelte-xa2qay:focus::-webkit-slider-runnable-track{background:blue}@keyframes svelte-xa2qay-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-xa2qay-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-xa2qay-loading{50%{transform:scale(1.2);opacity:0.7}}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-xa2qay.svelte-xa2qay:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-xa2qay.svelte-xa2qay::selection{color:black;background-color:white;text-shadow:none}svg.svelte-xa2qay circle.svelte-xa2qay{fill:#6c6c6c}svg.svelte-xa2qay g.svelte-xa2qay{transform:translate(50%, 50%)}.PhiSvg.svelte-xa2qay.svelte-xa2qay{display:grid;grid-template-columns:1fr;grid-template-areas:"media" "texto";padding-top:0;padding-right:2.618rem;padding-left:2.618rem;padding-bottom:1.618rem}@media(min-width: 769px){.PhiSvg.svelte-xa2qay.svelte-xa2qay{padding-bottom:0;padding-right:0;grid-template-columns:1fr 1.62fr;grid-template-areas:"texto media"}}.PhiSvg.svelte-xa2qay .BannerMedia.svelte-xa2qay{grid-area:media}.PhiSvg.svelte-xa2qay .controls.svelte-xa2qay{margin-bottom:1.618rem;width:100%;display:grid;gap:2.618rem}.PhiSvg.svelte-xa2qay .PhiSvgText.svelte-xa2qay{display:grid;justify-items:start;align-self:center;grid-area:texto}',
  map: `{"version":3,"file":"PhiSvg.svelte","sources":["PhiSvg.svelte"],"sourcesContent":["<script>\\n\\timport Button from '$lib/Button.svelte';\\n\\timport { tweened } from 'svelte/motion';\\n\\texport let title = '';\\n\\texport let text = '';\\n\\tlet angle = 0.618033988749;\\n\\tlet numDots = 360;\\n\\tlet dotsize = 1.62 * 1.62;\\n\\tlet tweenedCount = tweened(0, {\\n\\t\\tduration: 500,\\n\\t\\tinterpolate: (a, b) => (t) => Math.round((b - a) * t + a)\\n\\t});\\n\\tlet innerWidth, innerHeight, svgWidth;\\n\\texport let variante = 0;\\n\\tlet modificador = ['Light', 'Dark', 'Colored', 'Light2'];\\n\\n\\t$: $tweenedCount = numDots;\\n</script>\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nsvg {\\n  max-height: 90vh;\\n}\\n\\nbody,\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Montserrat\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nul {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  display: flex;\\n  flex-direction: column;\\n  margin-top: 11.089rem;\\n  background-color: blue;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 40.896px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 86.4px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 144px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 144px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 57.6px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 28.8px;\\n  }\\n}\\n\\nsmall,\\np {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n\\nhgroup {\\n  margin-bottom: 1.618rem;\\n}\\n\\n@media (min-width: 769px) {\\n  p,\\nh4 {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #d3b39c;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: blue;\\n}\\n\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: blue;\\n  border: 1px solid blue;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\nbody {\\n  background-color: #414141;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\nimg {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.tachado {\\n  text-decoration: line-through;\\n}\\n\\n.not-clickable {\\n  pointer-events: none;\\n}\\n\\nvideo {\\n  width: 100%;\\n  object-fit: cover;\\n  /* mix-blend-mode: luminosity; */\\n  /* border-radius: $h2; */\\n}\\n\\nsvg circle {\\n  fill: #6c6c6c;\\n}\\nsvg g {\\n  transform: translate(50%, 50%);\\n}\\n\\n.PhiSvg {\\n  display: grid;\\n  grid-template-columns: 1fr;\\n  grid-template-areas: \\"media\\" \\"texto\\";\\n  padding-top: 0;\\n  padding-right: 2.618rem;\\n  padding-left: 2.618rem;\\n  padding-bottom: 1.618rem;\\n}\\n@media (min-width: 769px) {\\n  .PhiSvg {\\n    padding-bottom: 0;\\n    padding-right: 0;\\n    grid-template-columns: 1fr 1.62fr;\\n    grid-template-areas: \\"texto media\\";\\n  }\\n}\\n.PhiSvg .BannerMedia {\\n  grid-area: media;\\n}\\n.PhiSvg .controls {\\n  margin-bottom: 1.618rem;\\n  width: 100%;\\n  display: grid;\\n  gap: 2.618rem;\\n}\\n.PhiSvg .PhiSvgText {\\n  display: grid;\\n  justify-items: start;\\n  align-self: center;\\n  grid-area: texto;\\n}</style>\\n\\n<svelte:window bind:innerWidth bind:innerHeight />\\n\\n<main class=\\"PhiSvg\\">\\n\\n\\t<div class=\\"BannerMedia\\">\\n\\n\\t\\t<slot name=\\"hasvideo\\">\\n\\t\\t\\t<svg viewBox=\\"0 0 200 200\\" xmlns=\\"http://www.w3.org/2000/svg\\">\\n\\t\\t\\t\\t<g>\\n\\t\\t\\t\\t\\t{#each { length: $tweenedCount } as _, index (index)}\\n\\t\\t\\t\\t\\t\\t<circle\\n\\t\\t\\t\\t\\t\\t\\tr={dotsize}\\n\\t\\t\\t\\t\\t\\t\\tcx={Math.cos(index * angle * 2 * Math.PI) * index * 0.2}\\n\\t\\t\\t\\t\\t\\t\\tcy={Math.sin(index * angle * 2 * Math.PI) * index * 0.2} />\\n\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t</g>\\n\\t\\t\\t</svg>\\n\\t\\t</slot>\\n\\t</div>\\n\\n\\t<div class=\\"PhiSvgText\\">\\n\\t\\t\\t<h2>{title}</h2>\\n\\t\\t\\t<p>{@html text}</p>\\n\\t\\t<div class=\\"controls\\">\\n\\t\\t\\t<input type=\\"number\\" bind:value={angle} step=\\"0.001\\" />\\n\\t\\t\\t<input type=\\"range\\" bind:value={$tweenedCount} min={0} max={numDots} />\\n\\t\\t</div>\\n\\t\\t<Button\\n\\t\\t\\tvariante={0}\\n\\t\\t\\ttext=\\"Play\\"\\n\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t$tweenedCount = $tweenedCount > 0 ? 0 : numDots;\\n\\t\\t\\t}} />\\n\\t</div>\\n\\n</main>\\n"],"names":[],"mappings":"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"}`
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

<main class="${"PhiSvg svelte-xa2qay"}"><div class="${"BannerMedia svelte-xa2qay"}">${slots.hasvideo ? slots.hasvideo({}) : `
			<svg viewBox="${"0 0 200 200"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"svelte-xa2qay"}"><g class="${"svelte-xa2qay"}">${each({length: $tweenedCount}, (_, index2) => `<circle${add_attribute("r", dotsize, 0)}${add_attribute("cx", Math.cos(index2 * angle * 2 * Math.PI) * index2 * 0.2, 0)}${add_attribute("cy", Math.sin(index2 * angle * 2 * Math.PI) * index2 * 0.2, 0)} class="${"svelte-xa2qay"}"></circle>`)}</g></svg>
		`}</div>

	<div class="${"PhiSvgText svelte-xa2qay"}"><h2 class="${"svelte-xa2qay"}">${escape(title)}</h2>
			<p class="${"svelte-xa2qay"}">${text}</p>
		<div class="${"controls svelte-xa2qay"}"><input type="${"number"}" step="${"0.001"}" class="${"svelte-xa2qay"}"${add_attribute("value", angle, 1)}>
			<input type="${"range"}"${add_attribute("min", 0, 0)}${add_attribute("max", numDots, 0)} class="${"svelte-xa2qay"}"${add_attribute("value", $tweenedCount, 1)}></div>
		${validate_component(Button, "Button").$$render($$result, {variante: 0, text: "Play"}, {}, {})}</div></main>`;
});
var Draggable_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-ztvkln,.svelte-ztvkln:before,.svelte-ztvkln:after{box-sizing:border-box}\ndiv.svelte-ztvkln{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@keyframes svelte-ztvkln-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-ztvkln-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-ztvkln-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-ztvkln:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-ztvkln::selection{color:black;background-color:white;text-shadow:none}\n.draggable.svelte-ztvkln{user-select:none;cursor:move;z-index:1000;font-size:4.236rem;line-height:86.4px}';
const css$8 = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");.svelte-ztvkln,.svelte-ztvkln:before,.svelte-ztvkln:after{box-sizing:border-box}div.svelte-ztvkln{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}@media(min-width: 769px){}@media(min-width: 1023px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 769px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}@keyframes svelte-ztvkln-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-ztvkln-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-ztvkln-loading{50%{transform:scale(1.2);opacity:0.7}}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-ztvkln:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-ztvkln::selection{color:black;background-color:white;text-shadow:none}.draggable.svelte-ztvkln{user-select:none;cursor:move;z-index:1000;font-size:4.236rem;line-height:86.4px}',
  map: `{"version":3,"file":"Draggable.svelte","sources":["Draggable.svelte"],"sourcesContent":["<script>\\n    import {fade} from 'svelte/transition';\\n    export let x = 0\\n    export let y = 0\\n    let moving = false\\n\\n    const start = () => {\\n        moving = true\\n    }\\n    function stop() {\\n        moving = false\\n    }\\n\\n    function move(e) {\\n        if (moving) {\\n            x += e.movementX * 2.5\\n            y += e.movementY * 2.5\\n        }\\n    }\\n</script>\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nsvg {\\n  max-height: 90vh;\\n}\\n\\nbody,\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Montserrat\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nul {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  display: flex;\\n  flex-direction: column;\\n  margin-top: 11.089rem;\\n  background-color: blue;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 40.896px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 86.4px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 144px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 144px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 57.6px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 28.8px;\\n  }\\n}\\n\\nsmall,\\np {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n\\nhgroup {\\n  margin-bottom: 1.618rem;\\n}\\n\\n@media (min-width: 769px) {\\n  p,\\nh4 {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #d3b39c;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: blue;\\n}\\n\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: blue;\\n  border: 1px solid blue;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\nbody {\\n  background-color: #414141;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\nimg {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.tachado {\\n  text-decoration: line-through;\\n}\\n\\n.not-clickable {\\n  pointer-events: none;\\n}\\n\\nvideo {\\n  width: 100%;\\n  object-fit: cover;\\n  /* mix-blend-mode: luminosity; */\\n  /* border-radius: $h2; */\\n}\\n\\n.draggable {\\n  user-select: none;\\n  cursor: move;\\n  z-index: 1000;\\n  font-size: 4.236rem;\\n  line-height: 86.4px;\\n}</style>\\n\\n<svelte:window on:mouseup={stop} />\\n<text x={x} y={y} \\n    font-size=\\"55\\"\\n    on:mousedown={start}\\n    on:mousemove={move}\\n    class=\\"draggable\\"\\n>\\n{#if moving}\\n    <div transition:fade>xxx</div>\\n{/if}\\n<slot></slot>\\n</text>"],"names":[],"mappings":"AAqBmB,SAAS,OAAO,CAAC,AAQpC,QAAQ,IAAI,gHAAgH,CAAC,CAAC,AAC9H,cAAC,CAAE,cAAC,OAAO,CAAE,cAAC,MAAM,AAAC,CAAC,AACpB,UAAU,CAAE,UAAU,AACxB,CAAC,AAEW,GAAG,cAAqR,CAAC,AACnS,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CAAC,CACT,SAAS,CAAE,IAAI,CACf,IAAI,CAAE,OAAO,CACb,cAAc,CAAE,QAAQ,CACxB,cAAc,CAAE,kBAAkB,CAClC,sBAAsB,CAAE,WAAW,CACnC,gBAAgB,CAAE,IAAI,AACxB,CAAC,AA0ED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAK3B,CAAC,AACD,MAAM,AAAC,YAAY,MAAM,CAAC,AAAC,CAAC,AAK5B,CAAC,AACD,MAAM,AAAC,YAAY,MAAM,CAAC,AAAC,CAAC,AAK5B,CAAC,AAOD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAK3B,CAAC,AACD,MAAM,AAAC,YAAY,MAAM,CAAC,AAAC,CAAC,AAO5B,CAAC,AAOD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAM3B,CAAC,AAYD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAO3B,CAAC,AAMD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAK3B,CAAC,AACD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAK3B,CAAC,AACD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAM3B,CAAC,AAgFD,WAAW,kBAAK,CAAC,AACf,EAAE,AAAC,CAAC,AACF,OAAO,CAAE,GAAG,AACd,CAAC,AACD,IAAI,AAAC,CAAC,AACJ,OAAO,CAAE,CAAC,AACZ,CAAC,AACH,CAAC,AACD,WAAW,mBAAM,CAAC,AAChB,EAAE,AAAC,CAAC,AACF,SAAS,CAAE,WAAW,KAAK,CAAC,CAC5B,OAAO,CAAE,GAAG,AACd,CAAC,AACD,GAAG,AAAC,CAAC,AACH,SAAS,CAAE,WAAW,GAAG,CAAC,CAC1B,OAAO,CAAE,CAAC,AACZ,CAAC,AACD,IAAI,AAAC,CAAC,AACJ,SAAS,CAAE,WAAW,CAAC,CAAC,CACxB,OAAO,CAAE,CAAC,AACZ,CAAC,AACH,CAAC,AACD,WAAW,qBAAQ,CAAC,AAClB,GAAG,AAAC,CAAC,AACH,SAAS,CAAE,MAAM,GAAG,CAAC,CACrB,OAAO,CAAE,GAAG,AACd,CAAC,AACH,CAAC,AAMD,KAAK,AAAC,CAAC,AACL,WAAW,CAAE,aAAa,CAAC,CAAC,kBAAkB,CAAC,CAAC,UAAU,CAAC,CAAC,MAAM,CAAC,CAAC,MAAM,CAAC,CAAC,MAAM,CAAC,CAAC,SAAS,CAAC,CAAC,WAAW,CAAC,CAAC,gBAAgB,CAAC,CAAC,UAAU,AAC1I,CAAC,AAED,cAAC,MAAM,AAAC,CAAC,AACP,aAAa,CAAE,OAAO,CACtB,aAAa,CAAE,MAAM,CACrB,aAAa,CAAE,GAAG,CAClB,aAAa,CAAE,MAAM,AACvB,CAAC,cAMD,WAAW,AAAC,CAAC,AACX,KAAK,CAAE,KAAK,CACZ,gBAAgB,CAAE,KAAK,CACvB,WAAW,CAAE,IAAI,AACnB,CAAC,AAsBD,UAAU,cAAC,CAAC,AACV,WAAW,CAAE,IAAI,CACjB,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,QAAQ,CACnB,WAAW,CAAE,MAAM,AACrB,CAAC"}`
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
<text${add_attribute("x", x2, 0)}${add_attribute("y", y2, 0)} font-size="${"55"}" class="${"draggable svelte-ztvkln"}">${``}${slots.default ? slots.default({}) : ``}</text>`;
});
var Form_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-z449we,.svelte-z449we:before,.svelte-z449we:after{box-sizing:border-box}\nform.svelte-z449we{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@keyframes svelte-z449we-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-z449we-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-z449we-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-z449we:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-z449we::selection{color:black;background-color:white;text-shadow:none}\n.tachado.svelte-z449we{text-decoration:line-through}\n.not-clickable.svelte-z449we{pointer-events:none}\n.Form_0.svelte-z449we{display:flex;flex-direction:row}\n@media(min-width: 769px){.Form_1.svelte-z449we{margin-inline:auto;display:grid;grid-template-areas:"input button"}}\n.Form_1.svelte-z449we:nth-child(1){grid-area:input}\n.Form_1.svelte-z449we:nth-child(2){grid-area:button}\n@media(min-width: 1023px){.Form_1.svelte-z449we:nth-child(2){width:fit-content}}';
const css$7 = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");.svelte-z449we,.svelte-z449we:before,.svelte-z449we:after{box-sizing:border-box}form.svelte-z449we{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}@media(min-width: 769px){}@media(min-width: 1023px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 769px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}@keyframes svelte-z449we-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-z449we-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-z449we-loading{50%{transform:scale(1.2);opacity:0.7}}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-z449we:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-z449we::selection{color:black;background-color:white;text-shadow:none}.tachado.svelte-z449we{text-decoration:line-through}.not-clickable.svelte-z449we{pointer-events:none}.Form_0.svelte-z449we{display:flex;flex-direction:row}@media(min-width: 769px){.Form_1.svelte-z449we{margin-inline:auto;display:grid;grid-template-areas:"input button"}}.Form_1.svelte-z449we:nth-child(1){grid-area:input}.Form_1.svelte-z449we:nth-child(2){grid-area:button}@media(min-width: 1023px){.Form_1.svelte-z449we:nth-child(2){width:fit-content}}',
  map: '{"version":3,"file":"Form.svelte","sources":["Form.svelte"],"sourcesContent":["<script>\\n    export let name = \\"My form group\\";\\n    export let variante = 0;\\n    const modificador = [\\n        \\"Form_0\\",\\n        \\"Form_1\\"\\n    ]\\n</script>\\n\\n<form \\n    {name} \\n    on:submit|preventDefault\\n    class={modificador[variante]}\\n>\\n    <slot />\\n</form>\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nsvg {\\n  max-height: 90vh;\\n}\\n\\nbody,\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Montserrat\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nul {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  display: flex;\\n  flex-direction: column;\\n  margin-top: 11.089rem;\\n  background-color: blue;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 40.896px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 86.4px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 144px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 144px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 57.6px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 28.8px;\\n  }\\n}\\n\\nsmall,\\np {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n\\nhgroup {\\n  margin-bottom: 1.618rem;\\n}\\n\\n@media (min-width: 769px) {\\n  p,\\nh4 {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #d3b39c;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: blue;\\n}\\n\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: blue;\\n  border: 1px solid blue;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\nbody {\\n  background-color: #414141;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\nimg {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.tachado {\\n  text-decoration: line-through;\\n}\\n\\n.not-clickable {\\n  pointer-events: none;\\n}\\n\\nvideo {\\n  width: 100%;\\n  object-fit: cover;\\n  /* mix-blend-mode: luminosity; */\\n  /* border-radius: $h2; */\\n}\\n\\n.Form_0 {\\n  display: flex;\\n  flex-direction: row;\\n}\\n\\n@media (min-width: 769px) {\\n  .Form_1 {\\n    margin-inline: auto;\\n    display: grid;\\n    grid-template-areas: \\"input button\\";\\n  }\\n}\\n.Form_1:nth-child(1) {\\n  grid-area: input;\\n}\\n.Form_1:nth-child(2) {\\n  grid-area: button;\\n}\\n@media (min-width: 1023px) {\\n  .Form_1:nth-child(2) {\\n    width: fit-content;\\n  }\\n}</style>"],"names":[],"mappings":"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"}'
};
const Form = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {name = "My form group"} = $$props;
  let {variante = 0} = $$props;
  const modificador = ["Form_0", "Form_1"];
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.variante === void 0 && $$bindings.variante && variante !== void 0)
    $$bindings.variante(variante);
  $$result.css.add(css$7);
  return `<form${add_attribute("name", name, 0)} class="${escape(null_to_empty(modificador[variante])) + " svelte-z449we"}">${slots.default ? slots.default({}) : ``}
</form>`;
});
var Input_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-11h7hq1,.svelte-11h7hq1:before,.svelte-11h7hq1:after{box-sizing:border-box}\ninput.svelte-11h7hq1{-webkit-appearance:none;border-radius:0}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\ninput.svelte-11h7hq1{border:none;font-family:inherit;font-size:1rem;line-height:28.8px;font-weight:inherit;color:#414141}\n@keyframes svelte-11h7hq1-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-11h7hq1-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-11h7hq1-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-11h7hq1:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-11h7hq1::selection{color:black;background-color:white;text-shadow:none}\n.svelte-11h7hq1:focus{outline:none}\ninput.svelte-11h7hq1{font-size:1.618rem;line-height:40.896px;padding:1rem;border:none;background-color:white}\n@media(min-width: 1023px){input.svelte-11h7hq1{border-top-left-radius:1.618rem;border-bottom-left-radius:1.618rem}}\ninput.svelte-11h7hq1:focus-within{background-color:#e8b28a;color:#110e08}\ninput.svelte-11h7hq1:focus-within::placeholder{color:transparent}\ninput.svelte-11h7hq1::placeholder{color:#2a2929}';
const css$6 = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");.svelte-11h7hq1,.svelte-11h7hq1:before,.svelte-11h7hq1:after{box-sizing:border-box}input.svelte-11h7hq1{-webkit-appearance:none;border-radius:0}@media(min-width: 769px){}@media(min-width: 1023px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 769px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}input.svelte-11h7hq1{border:none;font-family:inherit;font-size:1rem;line-height:28.8px;font-weight:inherit;color:#414141}@keyframes svelte-11h7hq1-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-11h7hq1-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-11h7hq1-loading{50%{transform:scale(1.2);opacity:0.7}}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-11h7hq1:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-11h7hq1::selection{color:black;background-color:white;text-shadow:none}.svelte-11h7hq1:focus{outline:none}input.svelte-11h7hq1{font-size:1.618rem;line-height:40.896px;padding:1rem;border:none;background-color:white}@media(min-width: 1023px){input.svelte-11h7hq1{border-top-left-radius:1.618rem;border-bottom-left-radius:1.618rem}}input.svelte-11h7hq1:focus-within{background-color:#e8b28a;color:#110e08}input.svelte-11h7hq1:focus-within::placeholder{color:transparent}input.svelte-11h7hq1::placeholder{color:#2a2929}',
  map: `{"version":3,"file":"Input.svelte","sources":["Input.svelte"],"sourcesContent":["<script>\\n\\texport let value = '';\\n\\texport let placeholder = '\\"...\u05D1\u05E8\u05D0\u05E9\u05D9\u05EA \u05D1\u05E8\u05D0 \u05D0\u05DC\u05D4\u05D9\u05DD\\"';\\n\\tconst onInput = (e) => (value = e.target.value);\\n</script>\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nsvg {\\n  max-height: 90vh;\\n}\\n\\nbody,\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Montserrat\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nul {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  display: flex;\\n  flex-direction: column;\\n  margin-top: 11.089rem;\\n  background-color: blue;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 40.896px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 86.4px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 144px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 144px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 57.6px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 28.8px;\\n  }\\n}\\n\\nsmall,\\np {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n\\nhgroup {\\n  margin-bottom: 1.618rem;\\n}\\n\\n@media (min-width: 769px) {\\n  p,\\nh4 {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #d3b39c;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: blue;\\n}\\n\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: blue;\\n  border: 1px solid blue;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\nbody {\\n  background-color: #414141;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\nimg {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.tachado {\\n  text-decoration: line-through;\\n}\\n\\n.not-clickable {\\n  pointer-events: none;\\n}\\n\\nvideo {\\n  width: 100%;\\n  object-fit: cover;\\n  /* mix-blend-mode: luminosity; */\\n  /* border-radius: $h2; */\\n}\\n\\n*:focus {\\n  outline: none;\\n}\\n\\ninput {\\n  font-size: 1.618rem;\\n  line-height: 40.896px;\\n  padding: 1rem;\\n  border: none;\\n  background-color: white;\\n}\\n@media (min-width: 1023px) {\\n  input {\\n    border-top-left-radius: 1.618rem;\\n    border-bottom-left-radius: 1.618rem;\\n  }\\n}\\ninput:focus-within {\\n  background-color: #e8b28a;\\n  color: #110e08;\\n}\\ninput:focus-within::placeholder {\\n  color: transparent;\\n}\\ninput::placeholder {\\n  color: #2a2929;\\n}</style>\\n\\n<input {value} {placeholder} type=\\"\\" name=\\"\\" on:input={onInput} />\\n"],"names":[],"mappings":"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"}`
};
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {value = ""} = $$props;
  let {placeholder = '"...\u05D1\u05E8\u05D0\u05E9\u05D9\u05EA \u05D1\u05E8\u05D0 \u05D0\u05DC\u05D4\u05D9\u05DD"'} = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  $$result.css.add(css$6);
  return `<input${add_attribute("value", value, 0)}${add_attribute("placeholder", placeholder, 0)} type="${""}" name="${""}" class="${"svelte-11h7hq1"}">`;
});
var T0T_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-1xybfkt,.svelte-1xybfkt:before,.svelte-1xybfkt:after{box-sizing:border-box}\ndiv.svelte-1xybfkt,h2.svelte-1xybfkt,p.svelte-1xybfkt{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\nsvg.svelte-1xybfkt{max-height:90vh}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\nh2.svelte-1xybfkt{font-weight:500;font-size:1rem;line-height:28.8px}\n@media(min-width: 374px){h2.svelte-1xybfkt{font-size:1.618rem;line-height:40.896px}}\n@media(min-width: 2140px){h2.svelte-1xybfkt{font-size:2.618rem;line-height:57.6px;margin-left:6.854rem;margin-right:6.854rem}}\n@media(min-width: 374px){}\np.svelte-1xybfkt{font-size:1rem;line-height:28.8px}\nhgroup.svelte-1xybfkt{margin-bottom:1.618rem}\n@media(min-width: 769px){p.svelte-1xybfkt{max-width:769px;margin-left:auto;margin-right:auto}}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@keyframes svelte-1xybfkt-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-1xybfkt-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-1xybfkt-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-1xybfkt:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-1xybfkt::selection{color:black;background-color:white;text-shadow:none}\ncircle.svelte-1xybfkt{fill:none;stroke:#b4b4b4;stroke-width:4}\nhgroup.svelte-1xybfkt,p.svelte-1xybfkt{text-align:center}';
const css$5 = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");.svelte-1xybfkt,.svelte-1xybfkt:before,.svelte-1xybfkt:after{box-sizing:border-box}div.svelte-1xybfkt,h2.svelte-1xybfkt,p.svelte-1xybfkt{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}svg.svelte-1xybfkt{max-height:90vh}@media(min-width: 769px){}@media(min-width: 1023px){}@media(min-width: 2140px){}h2.svelte-1xybfkt{font-weight:500;font-size:1rem;line-height:28.8px}@media(min-width: 374px){h2.svelte-1xybfkt{font-size:1.618rem;line-height:40.896px}}@media(min-width: 2140px){h2.svelte-1xybfkt{font-size:2.618rem;line-height:57.6px;margin-left:6.854rem;margin-right:6.854rem}}@media(min-width: 374px){}p.svelte-1xybfkt{font-size:1rem;line-height:28.8px}hgroup.svelte-1xybfkt{margin-bottom:1.618rem}@media(min-width: 769px){p.svelte-1xybfkt{max-width:769px;margin-left:auto;margin-right:auto}}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}@keyframes svelte-1xybfkt-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-1xybfkt-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-1xybfkt-loading{50%{transform:scale(1.2);opacity:0.7}}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-1xybfkt:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-1xybfkt::selection{color:black;background-color:white;text-shadow:none}circle.svelte-1xybfkt{fill:none;stroke:#b4b4b4;stroke-width:4}hgroup.svelte-1xybfkt,p.svelte-1xybfkt{text-align:center}',
  map: `{"version":3,"file":"T0T.svelte","sources":["T0T.svelte"],"sourcesContent":["<script>\\n\\t// import {fade} from 'svelte/transition';\\n\\timport GridBase from '$lib/GridBase.svelte';\\n\\timport Draggable from './Draggable.svelte';\\n\\timport Form from '$lib/Form.svelte';\\n\\timport Input from '$lib/Input.svelte';\\n\\timport Button from '$lib/Button.svelte';\\n\\n\\tlet x = 0;\\n\\tlet y = 0;\\n\\tlet new_items = [];\\n\\tlet value = '';\\n\\tlet base_unit = 1000;\\n\\tlet canvas = { width: base_unit, height: base_unit };\\n\\tlet radio_peque = canvas.width / 4;\\n\\tlet radio_grande = canvas.width / 2;\\n\\tlet circles = [\\n\\t\\t{ id: 'circulogrande', cx: radio_grande, cy: radio_grande, r: radio_grande },\\n\\t\\t{ id: 'circuloizda', cx: radio_peque, cy: radio_grande, r: radio_peque },\\n\\t\\t{ id: 'circulodcha', cx: radio_peque * 3, cy: radio_grande, r: radio_peque }\\n\\t];\\n\\tlet items = [\\n\\t\\t{ id: 0, xpos: 0, ypos: 500 },\\n\\t\\t{ id: 1, xpos: 500, ypos: 500 },\\n\\t\\t{ id: 2, xpos: 750, ypos: 750 },\\n\\t\\t{ id: 3, xpos: 750, ypos: 250 },\\n\\t\\t{ id: 4, xpos: 1000, ypos: 500 }\\n\\t];\\n\\tconst addItem = () => {\\n\\t\\t// Anade al array el texto del input\\n\\t\\tnew_items = [...new_items, value];\\n\\t};\\n\\n\\tlet svg = null;\\n\\tconst save = (svg, name = 'your-01234-map.svg') => {\\n\\t\\tsvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');\\n\\t\\tlet svgData = svg.outerHTML;\\n\\t\\tlet preface = '<?xml version=\\"1.0\\" standalone=\\"no\\"?>\\\\r\\\\n';\\n\\t\\tlet svgBlob = new Blob([preface, svgData], { type: 'image/svg+xml;charset=utf-8' });\\n\\t\\tlet svgUrl = URL.createObjectURL(svgBlob);\\n\\t\\tlet downloadLink = document.createElement('a');\\n\\t\\tdownloadLink.href = svgUrl;\\n\\t\\tdownloadLink.download = name;\\n\\t\\tdocument.body.appendChild(downloadLink);\\n\\t\\tdownloadLink.click();\\n\\t\\tdocument.body.removeChild(downloadLink);\\n\\t};\\n</script>\\n\\n<GridBase variante={0}>\\n\\t<svg bind:this={svg} viewBox=\\"-1 -1 {canvas.width} {canvas.height}\\">\\n\\t\\t<g transform=\\"translate(150,150) scale(0.7)\\">\\n\\t\\t\\t{#each circles as circle}\\n\\t\\t\\t\\t<circle\\n\\t\\t\\t\\t\\tcx={circle.cx}\\n\\t\\t\\t\\t\\tcy={circle.cy}\\n\\t\\t\\t\\t\\tr={circle.r}\\n\\t\\t\\t\\t\\tid={circle.id}\\n\\t\\t\\t\\t\\tfill=\\"none\\"\\n\\t\\t\\t\\t\\tstroke=\\"black\\"\\n\\t\\t\\t\\t/>\\n\\t\\t\\t{/each}\\n\\t\\t\\t{#each items as item}\\n\\t\\t\\t\\t<Draggable x={item.xpos} y={item.ypos}>{item.id}</Draggable>\\n\\t\\t\\t{/each}\\n\\t\\t\\t{#each new_items as new_i}\\n\\t\\t\\t\\t<Draggable {x} {y}>{new_i}</Draggable>\\n\\t\\t\\t{/each}\\n\\t\\t</g>\\n\\t</svg>\\n\\n\\t<div slot=\\"subarea1\\">\\n\\t\\t<hgroup>\\n\\t\\t\\t<h2>Meta-Mapa +0+1234</h2>\\n\\t\\t\\t<p>Cualquier palabra que escribas se ordena naturalmente en una de estas zonas.</p>\\n\\t\\t</hgroup>\\n\\t\\t<Form on:submit={addItem} variante={1}>\\n\\t\\t\\t<Input bind:value placeholder=\\"Your word\\" />\\n\\t\\t\\t<Button variante={6} text=\\"Add\\" />\\n\\t\\t</Form>\\n\\t</div>\\n\\t<div slot=\\"subarea2\\">\\n\\t\\t<Button on:click={() => save(svg)} variante={1} text=\\"Download svg\\" />\\n\\t</div>\\n</GridBase>\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nsvg {\\n  max-height: 90vh;\\n}\\n\\nbody,\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Montserrat\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nul {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  display: flex;\\n  flex-direction: column;\\n  margin-top: 11.089rem;\\n  background-color: blue;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 40.896px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 86.4px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 144px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 144px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 57.6px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 28.8px;\\n  }\\n}\\n\\nsmall,\\np {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n\\nhgroup {\\n  margin-bottom: 1.618rem;\\n}\\n\\n@media (min-width: 769px) {\\n  p,\\nh4 {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #d3b39c;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: blue;\\n}\\n\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: blue;\\n  border: 1px solid blue;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\nbody {\\n  background-color: #414141;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\nimg {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.tachado {\\n  text-decoration: line-through;\\n}\\n\\n.not-clickable {\\n  pointer-events: none;\\n}\\n\\nvideo {\\n  width: 100%;\\n  object-fit: cover;\\n  /* mix-blend-mode: luminosity; */\\n  /* border-radius: $h2; */\\n}\\n\\ntext {\\n  fill: black;\\n  font-family: \\"Montserrat\\", sans-serif;\\n  font-weight: bold;\\n}\\n\\ncircle {\\n  fill: none;\\n  stroke: #b4b4b4;\\n  stroke-width: 4;\\n}\\n\\nhgroup,\\np {\\n  text-align: center;\\n}</style>\\n"],"names":[],"mappings":"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"}`
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
    $$rendered = `${validate_component(GridBase, "GridBase").$$render($$result, {variante: 0}, {}, {
      subarea2: () => `<div slot="${"subarea2"}" class="${"svelte-1xybfkt"}">${validate_component(Button, "Button").$$render($$result, {variante: 1, text: "Download svg"}, {}, {})}</div>`,
      subarea1: () => `<div slot="${"subarea1"}" class="${"svelte-1xybfkt"}"><hgroup class="${"svelte-1xybfkt"}"><h2 class="${"svelte-1xybfkt"}">Meta-Mapa +0+1234</h2>
			<p class="${"svelte-1xybfkt"}">Cualquier palabra que escribas se ordena naturalmente en una de estas zonas.</p></hgroup>
		${validate_component(Form, "Form").$$render($$result, {variante: 1}, {}, {
        default: () => `${validate_component(Input, "Input").$$render($$result, {placeholder: "Your word", value}, {
          value: ($$value) => {
            value = $$value;
            $$settled = false;
          }
        }, {})}
			${validate_component(Button, "Button").$$render($$result, {variante: 6, text: "Add"}, {}, {})}`
      })}</div>`,
      default: () => `<svg viewBox="${"-1 -1 " + escape(canvas.width) + " " + escape(canvas.height)}" class="${"svelte-1xybfkt"}"${add_attribute("this", svg, 1)}><g transform="${"translate(150,150) scale(0.7)"}" class="${"svelte-1xybfkt"}">${each(circles, (circle) => `<circle${add_attribute("cx", circle.cx, 0)}${add_attribute("cy", circle.cy, 0)}${add_attribute("r", circle.r, 0)}${add_attribute("id", circle.id, 0)} fill="${"none"}" stroke="${"black"}" class="${"svelte-1xybfkt"}"></circle>`)}${each(items, (item) => `${validate_component(Draggable, "Draggable").$$render($$result, {x: item.xpos, y: item.ypos}, {}, {default: () => `${escape(item.id)}`})}`)}${each(new_items, (new_i) => `${validate_component(Draggable, "Draggable").$$render($$result, {x, y}, {}, {default: () => `${escape(new_i)}`})}`)}</g></svg>`
    })}`;
  } while (!$$settled);
  return $$rendered;
});
var Alert_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-1f2caq9,.svelte-1f2caq9:before,.svelte-1f2caq9:after{box-sizing:border-box}\ndiv.svelte-1f2caq9{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@keyframes svelte-1f2caq9-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-1f2caq9-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-1f2caq9-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-1f2caq9:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-1f2caq9::selection{color:black;background-color:white;text-shadow:none}\n.Alert.svelte-1f2caq9{color:black;padding:1rem;display:none;position:relative;background-color:#e8b28a}\n.haserror.svelte-1f2caq9{margin-top:1rem;display:block;border-top-width:2px;border-bottom-width:2px;border-top-style:dashed;border-top-style:dashed;border-bottom-style:dashed;border-top-color:#414141;border-bottom-color:#414141;animation-name:svelte-1f2caq9-show_error;animation-duration:0.3s;animation-fill-mode:backwards;animation-iteration-count:1}\n@keyframes svelte-1f2caq9-show_error{0%{transform:translateY(0px);opacity:0}50%{transform:translateY(10px);opacity:1}}';
var Gematria_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-1wkbovc.svelte-1wkbovc,.svelte-1wkbovc.svelte-1wkbovc:before,.svelte-1wkbovc.svelte-1wkbovc:after{box-sizing:border-box}\ndiv.svelte-1wkbovc.svelte-1wkbovc,h2.svelte-1wkbovc.svelte-1wkbovc,p.svelte-1wkbovc.svelte-1wkbovc,a.svelte-1wkbovc.svelte-1wkbovc,small.svelte-1wkbovc.svelte-1wkbovc,main.svelte-1wkbovc.svelte-1wkbovc,footer.svelte-1wkbovc.svelte-1wkbovc,header.svelte-1wkbovc.svelte-1wkbovc{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\nfooter.svelte-1wkbovc.svelte-1wkbovc,header.svelte-1wkbovc.svelte-1wkbovc,main.svelte-1wkbovc.svelte-1wkbovc{display:block}\nmain.svelte-1wkbovc.svelte-1wkbovc,header.svelte-1wkbovc.svelte-1wkbovc,small.svelte-1wkbovc.svelte-1wkbovc{font-family:"Montserrat", sans-serif;letter-spacing:0;font-weight:500;color:#b4b4b4}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\nh2.svelte-1wkbovc.svelte-1wkbovc{font-weight:500;font-size:1rem;line-height:28.8px}\n@media(min-width: 374px){h2.svelte-1wkbovc.svelte-1wkbovc{font-size:1.618rem;line-height:40.896px}}\n@media(min-width: 2140px){h2.svelte-1wkbovc.svelte-1wkbovc{font-size:2.618rem;line-height:57.6px;margin-left:6.854rem;margin-right:6.854rem}}\n@media(min-width: 374px){}\nsmall.svelte-1wkbovc.svelte-1wkbovc,p.svelte-1wkbovc.svelte-1wkbovc{font-size:1rem;line-height:28.8px}\n@media(min-width: 769px){p.svelte-1wkbovc.svelte-1wkbovc{max-width:769px;margin-left:auto;margin-right:auto}}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\na[target=_blank].svelte-1wkbovc.svelte-1wkbovc:after{content:" \u2924"}\n@keyframes svelte-1wkbovc-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-1wkbovc-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-1wkbovc-loading{50%{transform:scale(1.2);opacity:0.7}}\na.svelte-1wkbovc.svelte-1wkbovc:hover{animation-name:svelte-1wkbovc-fade;animation-duration:0.3s}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-1wkbovc.svelte-1wkbovc:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-1wkbovc.svelte-1wkbovc::selection{color:black;background-color:white;text-shadow:none}\nheader.svelte-1wkbovc.svelte-1wkbovc{text-align:center;color:inherit}\nmain.svelte-1wkbovc.svelte-1wkbovc{margin-bottom:1.618rem;text-align:center;display:grid;place-content:center;grid-template-areas:"resultado" "form";color:inherit}\n.position-form.svelte-1wkbovc.svelte-1wkbovc{grid-area:form}\n.result.svelte-1wkbovc.svelte-1wkbovc{grid-area:resultado;font-weight:bold;font-size:6.854rem;line-height:144px}\np.svelte-1wkbovc.svelte-1wkbovc,small.svelte-1wkbovc.svelte-1wkbovc{text-align:center;color:inherit}\nsmall.svelte-1wkbovc.svelte-1wkbovc{display:block}\nsmall.svelte-1wkbovc a.svelte-1wkbovc{color:#e8b28a;text-decoration:none}';
const css$4 = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");.svelte-1wkbovc.svelte-1wkbovc,.svelte-1wkbovc.svelte-1wkbovc:before,.svelte-1wkbovc.svelte-1wkbovc:after{box-sizing:border-box}div.svelte-1wkbovc.svelte-1wkbovc,h2.svelte-1wkbovc.svelte-1wkbovc,p.svelte-1wkbovc.svelte-1wkbovc,a.svelte-1wkbovc.svelte-1wkbovc,small.svelte-1wkbovc.svelte-1wkbovc,main.svelte-1wkbovc.svelte-1wkbovc,footer.svelte-1wkbovc.svelte-1wkbovc,header.svelte-1wkbovc.svelte-1wkbovc{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}footer.svelte-1wkbovc.svelte-1wkbovc,header.svelte-1wkbovc.svelte-1wkbovc,main.svelte-1wkbovc.svelte-1wkbovc{display:block}main.svelte-1wkbovc.svelte-1wkbovc,header.svelte-1wkbovc.svelte-1wkbovc,small.svelte-1wkbovc.svelte-1wkbovc{font-family:"Montserrat", sans-serif;letter-spacing:0;font-weight:500;color:#b4b4b4}@media(min-width: 769px){}@media(min-width: 1023px){}@media(min-width: 2140px){}h2.svelte-1wkbovc.svelte-1wkbovc{font-weight:500;font-size:1rem;line-height:28.8px}@media(min-width: 374px){h2.svelte-1wkbovc.svelte-1wkbovc{font-size:1.618rem;line-height:40.896px}}@media(min-width: 2140px){h2.svelte-1wkbovc.svelte-1wkbovc{font-size:2.618rem;line-height:57.6px;margin-left:6.854rem;margin-right:6.854rem}}@media(min-width: 374px){}small.svelte-1wkbovc.svelte-1wkbovc,p.svelte-1wkbovc.svelte-1wkbovc{font-size:1rem;line-height:28.8px}@media(min-width: 769px){p.svelte-1wkbovc.svelte-1wkbovc{max-width:769px;margin-left:auto;margin-right:auto}}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}a[target=_blank].svelte-1wkbovc.svelte-1wkbovc:after{content:" \u2924"}@keyframes svelte-1wkbovc-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-1wkbovc-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-1wkbovc-loading{50%{transform:scale(1.2);opacity:0.7}}a.svelte-1wkbovc.svelte-1wkbovc:hover{animation-name:svelte-1wkbovc-fade;animation-duration:0.3s}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-1wkbovc.svelte-1wkbovc:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-1wkbovc.svelte-1wkbovc::selection{color:black;background-color:white;text-shadow:none}header.svelte-1wkbovc.svelte-1wkbovc{text-align:center;color:inherit}main.svelte-1wkbovc.svelte-1wkbovc{margin-bottom:1.618rem;text-align:center;display:grid;place-content:center;grid-template-areas:"resultado" "form";color:inherit}.position-form.svelte-1wkbovc.svelte-1wkbovc{grid-area:form}.result.svelte-1wkbovc.svelte-1wkbovc{grid-area:resultado;font-weight:bold;font-size:6.854rem;line-height:144px}p.svelte-1wkbovc.svelte-1wkbovc,small.svelte-1wkbovc.svelte-1wkbovc{text-align:center;color:inherit}small.svelte-1wkbovc.svelte-1wkbovc{display:block}small.svelte-1wkbovc a.svelte-1wkbovc{color:#e8b28a;text-decoration:none}',
  map: `{"version":3,"file":"Gematria.svelte","sources":["Gematria.svelte"],"sourcesContent":["<script>\\n\\timport Form from '$lib/Form.svelte';\\n\\timport Button from '$lib/Button.svelte';\\n\\timport Input from '$lib/Input.svelte';\\n\\timport Alert from '$lib/Alert.svelte';\\n\\n\\tlet gematria = new Map([\\n\\t\\t['\\\\u05D0', 1], //'alef', '\u200E\u05D0'\\n\\t\\t['\\\\u05D1', 2], //'bet', '\u05D1\u200E'\\n\\t\\t['\\\\u05D2', 3], //'guimel', '\u05D2\u200E'\\n\\t\\t['\\\\u05D3', 4], //'dalet', '\u05D3\u200E'\\n\\t\\t['\\\\u05D4', 5], //'he', '\u05D4\u200E'\\n\\t\\t['\\\\u05D5', 6], //'vav', '\u05D5\u200E'\\n\\t\\t['\\\\u05D6', 7], //'tzain', '\u05D6\u200E'\\n\\t\\t['\\\\u05D7', 8], //'jet', '\u05D7\u200E'\\n\\t\\t['\\\\u05D8', 9], //'tet', '\u05D8\u200E'\\n\\t\\t['\\\\u05D9', 10], //'yod', '\u05D9\u200E'\\n\\t\\t['\\\\u05DB', 20], //'kaf', '\u05DB'\\n\\t\\t['\\\\u05DC', 30], //'lamed', '\u05DC\u200E'\\n\\t\\t['\\\\u05DE', 40], //'mem', '\u05DE'\\n\\t\\t['\\\\u05DF', 50], //'nun', '\u05E0'\\n\\t\\t['\\\\u05E1', 60], //'samej', '\u05E1\u200E'\\n\\t\\t['\\\\u05E2', 70], //'ayin', '\u05E2\u200E'\\n\\t\\t['\\\\u05E4', 80], //'pe', '\u05E4'\\n\\t\\t['\\\\u05E6', 90], //'tzadic', '\u05E6'\\n\\t\\t['\\\\u05E7', 100], //'kof', '\u05E7\u200E'\\n\\t\\t['\\\\u05E8', 200], //'resh', '\u05E8\u200E'\\n\\t\\t['\\\\u05E9', 300], //'shin', '\u05E9\u200E'\\n\\t\\t['\\\\u05EA', 400], //'tav', '\u05EA\u200E'\\n\\t\\t['\\\\u05DA', 500], //'kaf_sofit', '\u05DA\u200E'\\n\\t\\t['\\\\u05DD', 600], //'mem_sofit', '\u05DD\u200E'\\n\\t\\t['\\\\u05DF', 700], //'nun_sofit', '\u05DF\u200E'\\n\\t\\t['\\\\u05E3', 800], //'pe_sofit', '\u05E3\u200E'\\n\\t\\t['\\\\u05E5', 900] //'tzadi_sofit', '\u05E5\u200E'\\n\\t]);\\n\\tlet valorinput = '';\\n\\tlet haserror = false;\\n\\tlet errormessage = '';\\n\\t$: counter = 0;\\n\\tlet arrayASumar = [];\\n\\tlet splited = [];\\n\\n\\tfunction handleSubmit() {\\n\\t\\thaserror = false;\\n\\t\\tcounter = 0;\\n\\t\\tvalorinput = valorinput;\\n\\t\\tsplited = valorinput.split('');\\n\\t\\terrormessage = '';\\n\\t\\tfor (const s of splited) {\\n\\t\\t\\tif (s == '\\\\u05D0') {\\n\\t\\t\\t\\tcounter += 1;\\n\\t\\t\\t} else if (s == '\\\\u05D1') {\\n\\t\\t\\t\\tcounter += 2;\\n\\t\\t\\t} else if (s == '\\\\u05D2') {\\n\\t\\t\\t\\tcounter += 3;\\n\\t\\t\\t} else if (s == '\\\\u05D3') {\\n\\t\\t\\t\\tcounter += 4;\\n\\t\\t\\t} else if (s == '\\\\u05D4') {\\n\\t\\t\\t\\tcounter += 5;\\n\\t\\t\\t} else if (s == '\\\\u05D5') {\\n\\t\\t\\t\\tcounter += 6;\\n\\t\\t\\t} else if (s == '\\\\u05D6') {\\n\\t\\t\\t\\tcounter += 7;\\n\\t\\t\\t} else if (s == '\\\\u05D7') {\\n\\t\\t\\t\\tcounter += 8;\\n\\t\\t\\t} else if (s == '\\\\u05D8') {\\n\\t\\t\\t\\tcounter += 9;\\n\\t\\t\\t} else if (s == '\\\\u05D9') {\\n\\t\\t\\t\\tcounter += 10;\\n\\t\\t\\t} else if (s == '\\\\u05DB') {\\n\\t\\t\\t\\tcounter += 20;\\n\\t\\t\\t} else if (s == '\\\\u05DC') {\\n\\t\\t\\t\\tcounter += 30;\\n\\t\\t\\t} else if (s == '\\\\u05DE') {\\n\\t\\t\\t\\tcounter += 40;\\n\\t\\t\\t} else if (s == '\\\\u05DF') {\\n\\t\\t\\t\\tcounter += 50;\\n\\t\\t\\t} else if (s == '\\\\u05E1') {\\n\\t\\t\\t\\tcounter += 60;\\n\\t\\t\\t} else if (s == '\\\\u05E2') {\\n\\t\\t\\t\\tcounter += 70;\\n\\t\\t\\t} else if (s == '\\\\u05E4') {\\n\\t\\t\\t\\tcounter += 80;\\n\\t\\t\\t} else if (s == '\\\\u05E6') {\\n\\t\\t\\t\\tcounter += 90;\\n\\t\\t\\t} else if (s == '\\\\u05E7') {\\n\\t\\t\\t\\tcounter += 100;\\n\\t\\t\\t} else if (s == '\\\\u05E8') {\\n\\t\\t\\t\\tcounter += 200;\\n\\t\\t\\t} else if (s == '\\\\u05E9') {\\n\\t\\t\\t\\tcounter += 300;\\n\\t\\t\\t} else if (s == '\\\\u05EA') {\\n\\t\\t\\t\\tcounter += 400;\\n\\t\\t\\t} else if (s == '\\\\u05DA') {\\n\\t\\t\\t\\tcounter += 500;\\n\\t\\t\\t} else if (s == '\\\\u05DD') {\\n\\t\\t\\t\\tcounter += 600;\\n\\t\\t\\t} else if (s == '\\\\u05DF') {\\n\\t\\t\\t\\tcounter += 700;\\n\\t\\t\\t} else if (s == '\\\\u05E3') {\\n\\t\\t\\t\\tcounter += 800;\\n\\t\\t\\t} else if (s == '\\\\u05E5') {\\n\\t\\t\\t\\tcounter += 900;\\n\\t\\t\\t} else if (s == ' ') {\\n\\t\\t\\t\\tcounter += 0;\\n\\t\\t\\t} else {\\n\\t\\t\\t\\thaserror = true;\\n\\t\\t\\t\\tif ((haserror = true)) {\\n\\t\\t\\t\\t\\terrormessage = 'S\xF3lo contabilizan las consonantes hebreas.';\\n\\t\\t\\t\\t} else {\\n\\t\\t\\t\\t\\thaserror = false;\\n\\t\\t\\t\\t\\terrormessage = '';\\n\\t\\t\\t\\t}\\n\\t\\t\\t}\\n\\t\\t}\\n\\t\\treturn counter;\\n\\t}\\n</script>\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nsvg {\\n  max-height: 90vh;\\n}\\n\\nbody,\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Montserrat\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nul {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  display: flex;\\n  flex-direction: column;\\n  margin-top: 11.089rem;\\n  background-color: blue;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 40.896px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 86.4px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 144px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 144px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 57.6px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 28.8px;\\n  }\\n}\\n\\nsmall,\\np {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n\\nhgroup {\\n  margin-bottom: 1.618rem;\\n}\\n\\n@media (min-width: 769px) {\\n  p,\\nh4 {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #d3b39c;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: blue;\\n}\\n\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: blue;\\n  border: 1px solid blue;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\nbody {\\n  background-color: #414141;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\nimg {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.tachado {\\n  text-decoration: line-through;\\n}\\n\\n.not-clickable {\\n  pointer-events: none;\\n}\\n\\nvideo {\\n  width: 100%;\\n  object-fit: cover;\\n  /* mix-blend-mode: luminosity; */\\n  /* border-radius: $h2; */\\n}\\n\\nheader {\\n  text-align: center;\\n  color: inherit;\\n}\\n\\nmain {\\n  margin-bottom: 1.618rem;\\n  text-align: center;\\n  display: grid;\\n  place-content: center;\\n  grid-template-areas: \\"resultado\\" \\"form\\";\\n  color: inherit;\\n}\\n\\n.position-form {\\n  grid-area: form;\\n}\\n\\n.result {\\n  grid-area: resultado;\\n  font-weight: bold;\\n  font-size: 6.854rem;\\n  line-height: 144px;\\n}\\n\\np,\\nsmall {\\n  text-align: center;\\n  color: inherit;\\n}\\n\\nsmall {\\n  display: block;\\n  /* margin-top: $h1; */\\n}\\nsmall a {\\n  color: #e8b28a;\\n  text-decoration: none;\\n}</style>\\n\\n<header>\\n\\t<h2>Gematria App</h2>\\n\\t<p>Lo que valen las palabras hebreas</p>\\n</header>\\n\\n<main>\\n\\t<h2 class=\\"result\\">{counter}</h2>\\n\\n\\t<div class=\\"position-form\\">\\n\\t\\t<Form on:submit={handleSubmit} variante={1}>\\n\\t\\t\\t<Input bind:value={valorinput} />\\n\\t\\t\\t<Button variante={6} text=\\"Go!\\" {valorinput} />\\n\\t\\t</Form>\\n\\t</div>\\n\\n\\t{#if haserror == true}\\n\\t\\t<Alert>{errormessage}</Alert>\\n\\t{/if}\\n</main>\\n\\n<footer>\\n\\t<small>\u05D1\u05E8\u05D0\u05E9\u05D9\u05EA \u05D1\u05E8\u05D0 \u05D0\u05DC\u05D4\u05D9\u05DD \u05D0\u05EA \u05D4\u05E9\u05DE\u05D9\u05DD \u05D5\u05D0\u05EA \u05D4\u05D0\u05E8\u05E5 (G\xE9nesis, 1)</small>\\n\\t<small>\\n\\t\\t<a href=\\"https://tanach.us/Server.txt?Genesis*&content=Consonants\\" target=\\"_blank\\"> \\n\\t\\t\\tCodex de Leningrado\\n\\t\\t</a>\\n\\t</small>\\n</footer>\\n"],"names":[],"mappings":"AAuHmB,SAAS,OAAO,CAAC,AAQpC,QAAQ,IAAI,gHAAgH,CAAC,CAAC,AAC9H,8BAAC,CAAE,8BAAC,OAAO,CAAE,8BAAC,MAAM,AAAC,CAAC,AACpB,UAAU,CAAE,UAAU,AACxB,CAAC,AAEW,iCAAG,CAAoC,gCAAE,CAAkB,+BAAC,CAAmB,+BAAC,CAAiB,mCAAK,CAAyH,kCAAI,CAAiB,oCAAM,CAAE,MAAM,8BAAsB,CAAC,AACnS,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CAAC,CACT,SAAS,CAAE,IAAI,CACf,IAAI,CAAE,OAAO,CACb,cAAc,CAAE,QAAQ,CACxB,cAAc,CAAE,kBAAkB,CAClC,sBAAsB,CAAE,WAAW,CACnC,gBAAgB,CAAE,IAAI,AACxB,CAAC,AAED,oCAAM,CAAE,oCAAM,CAAgB,IAAI,8BAAC,CAAC,AAClC,OAAO,CAAE,KAAK,AAChB,CAAC,AAkCD,kCAAI,CACJ,oCAAM,CACN,KAAK,8BAAC,CAAC,AACL,WAAW,CAAE,YAAY,CAAC,CAAC,UAAU,CACrC,cAAc,CAAE,CAAC,CACjB,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,OAAO,AAChB,CAAC,AA6BD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAK3B,CAAC,AACD,MAAM,AAAC,YAAY,MAAM,CAAC,AAAC,CAAC,AAK5B,CAAC,AACD,MAAM,AAAC,YAAY,MAAM,CAAC,AAAC,CAAC,AAK5B,CAAC,AAED,EAAE,8BAAC,CAAC,AACF,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,MAAM,AACrB,CAAC,AACD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,EAAE,8BAAC,CAAC,AACF,SAAS,CAAE,QAAQ,CACnB,WAAW,CAAE,QAAQ,AACvB,CAAC,AACH,CAAC,AACD,MAAM,AAAC,YAAY,MAAM,CAAC,AAAC,CAAC,AAC1B,EAAE,8BAAC,CAAC,AACF,SAAS,CAAE,QAAQ,CACnB,WAAW,CAAE,MAAM,CACnB,WAAW,CAAE,QAAQ,CACrB,YAAY,CAAE,QAAQ,AACxB,CAAC,AACH,CAAC,AAOD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAM3B,CAAC,AAED,mCAAK,CACL,CAAC,8BAAC,CAAC,AACD,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,MAAM,AACrB,CAAC,AAMD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,CAAC,8BACA,CAAC,AACA,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,IAAI,CACjB,YAAY,CAAE,IAAI,AACpB,CAAC,AACH,CAAC,AAMD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAK3B,CAAC,AACD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAK3B,CAAC,AACD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAM3B,CAAC,AA4ED,CAAC,CAAC,MAAM,CAAC,MAAM,+BAAC,MAAM,AAAC,CAAC,AACtB,OAAO,CAAE,IAAI,AACf,CAAC,AAED,WAAW,mBAAK,CAAC,AACf,EAAE,AAAC,CAAC,AACF,OAAO,CAAE,GAAG,AACd,CAAC,AACD,IAAI,AAAC,CAAC,AACJ,OAAO,CAAE,CAAC,AACZ,CAAC,AACH,CAAC,AACD,WAAW,oBAAM,CAAC,AAChB,EAAE,AAAC,CAAC,AACF,SAAS,CAAE,WAAW,KAAK,CAAC,CAC5B,OAAO,CAAE,GAAG,AACd,CAAC,AACD,GAAG,AAAC,CAAC,AACH,SAAS,CAAE,WAAW,GAAG,CAAC,CAC1B,OAAO,CAAE,CAAC,AACZ,CAAC,AACD,IAAI,AAAC,CAAC,AACJ,SAAS,CAAE,WAAW,CAAC,CAAC,CACxB,OAAO,CAAE,CAAC,AACZ,CAAC,AACH,CAAC,AACD,WAAW,sBAAQ,CAAC,AAClB,GAAG,AAAC,CAAC,AACH,SAAS,CAAE,MAAM,GAAG,CAAC,CACrB,OAAO,CAAE,GAAG,AACd,CAAC,AACH,CAAC,AACD,+BAAC,MAAM,AAAC,CAAC,AACP,cAAc,CAAE,mBAAI,CACpB,kBAAkB,CAAE,IAAI,AAC1B,CAAC,AAED,KAAK,AAAC,CAAC,AACL,WAAW,CAAE,aAAa,CAAC,CAAC,kBAAkB,CAAC,CAAC,UAAU,CAAC,CAAC,MAAM,CAAC,CAAC,MAAM,CAAC,CAAC,MAAM,CAAC,CAAC,SAAS,CAAC,CAAC,WAAW,CAAC,CAAC,gBAAgB,CAAC,CAAC,UAAU,AAC1I,CAAC,AAED,8BAAC,MAAM,AAAC,CAAC,AACP,aAAa,CAAE,OAAO,CACtB,aAAa,CAAE,MAAM,CACrB,aAAa,CAAE,GAAG,CAClB,aAAa,CAAE,MAAM,AACvB,CAAC,8BAMD,WAAW,AAAC,CAAC,AACX,KAAK,CAAE,KAAK,CACZ,gBAAgB,CAAE,KAAK,CACvB,WAAW,CAAE,IAAI,AACnB,CAAC,AAsBD,MAAM,8BAAC,CAAC,AACN,UAAU,CAAE,MAAM,CAClB,KAAK,CAAE,OAAO,AAChB,CAAC,AAED,IAAI,8BAAC,CAAC,AACJ,aAAa,CAAE,QAAQ,CACvB,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,MAAM,CACrB,mBAAmB,CAAE,WAAW,CAAC,MAAM,CACvC,KAAK,CAAE,OAAO,AAChB,CAAC,AAED,cAAc,8BAAC,CAAC,AACd,SAAS,CAAE,IAAI,AACjB,CAAC,AAED,OAAO,8BAAC,CAAC,AACP,SAAS,CAAE,SAAS,CACpB,WAAW,CAAE,IAAI,CACjB,SAAS,CAAE,QAAQ,CACnB,WAAW,CAAE,KAAK,AACpB,CAAC,AAED,+BAAC,CACD,KAAK,8BAAC,CAAC,AACL,UAAU,CAAE,MAAM,CAClB,KAAK,CAAE,OAAO,AAChB,CAAC,AAED,KAAK,8BAAC,CAAC,AACL,OAAO,CAAE,KAAK,AAEhB,CAAC,AACD,oBAAK,CAAC,CAAC,eAAC,CAAC,AACP,KAAK,CAAE,OAAO,CACd,eAAe,CAAE,IAAI,AACvB,CAAC"}`
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
    $$rendered = `<header class="${"svelte-1wkbovc"}"><h2 class="${"svelte-1wkbovc"}">Gematria App</h2>
	<p class="${"svelte-1wkbovc"}">Lo que valen las palabras hebreas</p></header>

<main class="${"svelte-1wkbovc"}"><h2 class="${"result svelte-1wkbovc"}">${escape(counter)}</h2>

	<div class="${"position-form svelte-1wkbovc"}">${validate_component(Form, "Form").$$render($$result, {variante: 1}, {}, {
      default: () => `${validate_component(Input, "Input").$$render($$result, {value: valorinput}, {
        value: ($$value) => {
          valorinput = $$value;
          $$settled = false;
        }
      }, {})}
			${validate_component(Button, "Button").$$render($$result, {variante: 6, text: "Go!", valorinput}, {}, {})}`
    })}</div>

	${``}</main>

<footer class="${"svelte-1wkbovc"}"><small class="${"svelte-1wkbovc"}">\u05D1\u05E8\u05D0\u05E9\u05D9\u05EA \u05D1\u05E8\u05D0 \u05D0\u05DC\u05D4\u05D9\u05DD \u05D0\u05EA \u05D4\u05E9\u05DE\u05D9\u05DD \u05D5\u05D0\u05EA \u05D4\u05D0\u05E8\u05E5 (G\xE9nesis, 1)</small>
	<small class="${"svelte-1wkbovc"}"><a href="${"https://tanach.us/Server.txt?Genesis*&content=Consonants"}" target="${"_blank"}" class="${"svelte-1wkbovc"}">Codex de Leningrado
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


${validate_component(Section, "Section").$$render($$result, {id: "gematria", variante: 4}, {}, {
    default: () => `${validate_component(Gematria, "Gematria").$$render($$result, {}, {}, {})}`
  })}`;
});
var index = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: Lab
});
var app = '\n@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n/* Uso:\n@include media( s + scaling factor ) {\n  property: value;\n}\n*/\n/* GRADIENT LISTS\n============================================= */\n*, *:before, *:after {\n  box-sizing: border-box;\n}\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  text-size-adjust: none;\n}\nfooter, header, nav, section, main {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after, q:before, q:after {\n  content: "";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ninput {\n  -webkit-appearance: none;\n  border-radius: 0;\n}\nsvg {\n  max-height: 90vh;\n}\nbody,\nmain,\nheader,\nsmall {\n  font-family: "Montserrat", sans-serif;\n  letter-spacing: 0;\n  font-weight: 500;\n  color: #b4b4b4;\n}\ni {\n  font-style: italic;\n}\nem {\n  color: #6c6c6c;\n  font-weight: 500;\n}\nstrong {\n  font-weight: 600;\n}\nul {\n  font-size: 1rem;\n  line-height: 28.8px;\n  display: flex;\n  flex-direction: column;\n  margin-top: 11.089rem;\n  background-color: blue;\n}\nh1 {\n  font-size: 1.618rem;\n  line-height: 40.896px;\n  font-weight: bold;\n}\n@media (min-width: 769px) {\n  h1 {\n    font-size: 4.236rem;\n    line-height: 86.4px;\n  }\n}\n@media (min-width: 1023px) {\n  h1 {\n    font-size: 6.854rem;\n    line-height: 144px;\n  }\n}\n@media (min-width: 2140px) {\n  h1 {\n    font-size: 11.089rem;\n    line-height: 144px;\n  }\n}\nh2 {\n  font-weight: 500;\n  font-size: 1rem;\n  line-height: 28.8px;\n}\n@media (min-width: 374px) {\n  h2 {\n    font-size: 1.618rem;\n    line-height: 40.896px;\n  }\n}\n@media (min-width: 2140px) {\n  h2 {\n    font-size: 2.618rem;\n    line-height: 57.6px;\n    margin-left: 6.854rem;\n    margin-right: 6.854rem;\n  }\n}\nh3,\nh4 {\n  font-size: 0.618rem;\n  line-height: 17.7777777778px;\n}\n@media (min-width: 374px) {\n  h3,\nh4 {\n    font-size: 1rem;\n    line-height: 28.8px;\n  }\n}\nsmall,\np {\n  font-size: 1rem;\n  line-height: 28.8px;\n}\nhgroup {\n  margin-bottom: 1.618rem;\n}\n@media (min-width: 769px) {\n  p,\nh4 {\n    max-width: 769px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\nblockquote {\n  font-size: 1rem;\n  line-height: 28.8px;\n}\n@media (min-width: 374px) {\n  blockquote {\n    font-size: 1.618rem;\n    line-height: 40.896px;\n  }\n}\n@media (min-width: 374px) {\n  blockquote {\n    margin-left: 2.618rem;\n    margin-right: 2.618rem;\n  }\n}\n@media (min-width: 769px) {\n  blockquote {\n    max-width: 374px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\nsub {\n  color: #110e08;\n  font-weight: 500;\n  padding-left: 2px;\n  padding-top: 0px;\n  font-size: 0.618rem;\n  line-height: 17.7777777778px;\n}\nfigcaption {\n  text-align: left;\n}\ninput {\n  border: none;\n  font-family: inherit;\n  font-size: 1rem;\n  line-height: 28.8px;\n  font-weight: inherit;\n  color: #414141;\n}\ninput[type=text] {\n  padding: 0.618rem;\n  background-color: #e5e5e5;\n}\ninput[type=number] {\n  color: #d3b39c;\n  background-color: #110e08;\n  padding: 0.618rem;\n}\ninput[type=number]:focus {\n  outline: none;\n}\ninput[type=range] {\n  -webkit-appearance: none;\n  width: 100%;\n}\ninput[type=range]:focus {\n  outline: none;\n}\ninput[type=range]::-webkit-slider-runnable-track {\n  width: 100%;\n  height: 1px;\n  cursor: pointer;\n  background: #b4b4b4;\n  border-radius: 0px;\n}\ninput[type=range]::-webkit-slider-thumb {\n  height: 30px;\n  width: 30px;\n  border-radius: 50px;\n  background: #b4b4b4;\n  cursor: grab;\n  -webkit-appearance: none;\n  margin-top: -14.5px;\n}\ninput[type=range]:focus::-webkit-slider-runnable-track {\n  background: blue;\n}\nnav a {\n  padding: 0.618rem;\n  text-decoration: none;\n  color: blue;\n  border: 1px solid blue;\n}\na[target=_blank]:after {\n  content: " \u2924";\n}\n@keyframes fade {\n  0% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes slide {\n  0% {\n    transform: translateY(-70px);\n    opacity: 0.5;\n  }\n  90% {\n    transform: translateY(5px);\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@keyframes loading {\n  50% {\n    transform: scale(1.2);\n    opacity: 0.7;\n  }\n}\na:hover {\n  animation-name: fade;\n  animation-duration: 0.3s;\n}\n:root {\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;\n}\n*:focus {\n  outline-color: #6c6c6c;\n  outline-style: dashed;\n  outline-width: 1px;\n  outline-style: dotted;\n}\nbody {\n  background-color: #414141;\n}\n::selection {\n  color: black;\n  background-color: white;\n  text-shadow: none;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\n.tachado {\n  text-decoration: line-through;\n}\n.not-clickable {\n  pointer-events: none;\n}\nvideo {\n  width: 100%;\n  object-fit: cover;\n  /* mix-blend-mode: luminosity; */\n  /* border-radius: $h2; */\n}';
var SiteLogo_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-11eprzu.svelte-11eprzu,.svelte-11eprzu.svelte-11eprzu:before,.svelte-11eprzu.svelte-11eprzu:after{box-sizing:border-box}\nsvg.svelte-11eprzu.svelte-11eprzu{max-height:90vh}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@keyframes svelte-11eprzu-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-11eprzu-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-11eprzu-loading{50%{transform:scale(1.2);opacity:0.7}}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-11eprzu.svelte-11eprzu:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-11eprzu.svelte-11eprzu::selection{color:black;background-color:white;text-shadow:none}\nsvg.svelte-11eprzu.svelte-11eprzu{fill:black}\nsvg.svelte-11eprzu.svelte-11eprzu:hover{fill:white}\nsvg.svelte-11eprzu:hover circle.svelte-11eprzu{stroke:black}\ncircle.svelte-11eprzu.svelte-11eprzu{stroke:#b4b4b4}';
const css$3 = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");.svelte-11eprzu.svelte-11eprzu,.svelte-11eprzu.svelte-11eprzu:before,.svelte-11eprzu.svelte-11eprzu:after{box-sizing:border-box}svg.svelte-11eprzu.svelte-11eprzu{max-height:90vh}@media(min-width: 769px){}@media(min-width: 1023px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 769px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}@keyframes svelte-11eprzu-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-11eprzu-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-11eprzu-loading{50%{transform:scale(1.2);opacity:0.7}}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-11eprzu.svelte-11eprzu:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-11eprzu.svelte-11eprzu::selection{color:black;background-color:white;text-shadow:none}svg.svelte-11eprzu.svelte-11eprzu{fill:black}svg.svelte-11eprzu.svelte-11eprzu:hover{fill:white}svg.svelte-11eprzu:hover circle.svelte-11eprzu{stroke:black}circle.svelte-11eprzu.svelte-11eprzu{stroke:#b4b4b4}',
  map: '{"version":3,"file":"SiteLogo.svelte","sources":["SiteLogo.svelte"],"sourcesContent":["<script>\\n</script>\\n\\n<svg class=\\"logo\\" width=\\"51\\" height=\\"51\\">\\n\\t<g>\\n\\t\\t<circle cx=\\"25\\" cy=\\"25\\" r=\\"25\\" />\\n\\t\\t<g>\\n\\t\\t\\t<circle cx=\\"12.5\\" cy=\\"25\\" r=\\"12.5\\" />\\n\\t\\t\\t<circle cx=\\"38\\" cy=\\"25\\" r=\\"12.5\\" />\\n\\t\\t</g>\\n\\t\\t<g>\\n\\t\\t\\t<circle cx=\\"6.5\\" cy=\\"25\\" r=\\"6.25\\" />\\n\\t\\t\\t<circle cx=\\"19\\" cy=\\"25\\" r=\\"6.25\\" />\\n\\t\\t\\t<circle cx=\\"31.5\\" cy=\\"25\\" r=\\"6.25\\" />\\n\\t\\t\\t<circle cx=\\"44\\" cy=\\"25\\" r=\\"6.25\\" />\\n\\t\\t</g>\\n\\t</g>\\n</svg>\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nsvg {\\n  max-height: 90vh;\\n}\\n\\nbody,\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Montserrat\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nul {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  display: flex;\\n  flex-direction: column;\\n  margin-top: 11.089rem;\\n  background-color: blue;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 40.896px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 86.4px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 144px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 144px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 57.6px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 28.8px;\\n  }\\n}\\n\\nsmall,\\np {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n\\nhgroup {\\n  margin-bottom: 1.618rem;\\n}\\n\\n@media (min-width: 769px) {\\n  p,\\nh4 {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #d3b39c;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: blue;\\n}\\n\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: blue;\\n  border: 1px solid blue;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\nbody {\\n  background-color: #414141;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\nimg {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.tachado {\\n  text-decoration: line-through;\\n}\\n\\n.not-clickable {\\n  pointer-events: none;\\n}\\n\\nvideo {\\n  width: 100%;\\n  object-fit: cover;\\n  /* mix-blend-mode: luminosity; */\\n  /* border-radius: $h2; */\\n}\\n\\nsvg {\\n  fill: black;\\n}\\nsvg:hover {\\n  fill: white;\\n}\\nsvg:hover circle {\\n  stroke: black;\\n}\\n\\ncircle {\\n  stroke: #b4b4b4;\\n}</style>\\n"],"names":[],"mappings":"AAmBmB,SAAS,OAAO,CAAC,AAQpC,QAAQ,IAAI,gHAAgH,CAAC,CAAC,AAC9H,8BAAC,CAAE,8BAAC,OAAO,CAAE,8BAAC,MAAM,AAAC,CAAC,AACpB,UAAU,CAAE,UAAU,AACxB,CAAC,AA6CD,GAAG,8BAAC,CAAC,AACH,UAAU,CAAE,IAAI,AAClB,CAAC,AAuCD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAK3B,CAAC,AACD,MAAM,AAAC,YAAY,MAAM,CAAC,AAAC,CAAC,AAK5B,CAAC,AACD,MAAM,AAAC,YAAY,MAAM,CAAC,AAAC,CAAC,AAK5B,CAAC,AAOD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAK3B,CAAC,AACD,MAAM,AAAC,YAAY,MAAM,CAAC,AAAC,CAAC,AAO5B,CAAC,AAOD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAM3B,CAAC,AAYD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAO3B,CAAC,AAMD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAK3B,CAAC,AACD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAK3B,CAAC,AACD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAM3B,CAAC,AAgFD,WAAW,mBAAK,CAAC,AACf,EAAE,AAAC,CAAC,AACF,OAAO,CAAE,GAAG,AACd,CAAC,AACD,IAAI,AAAC,CAAC,AACJ,OAAO,CAAE,CAAC,AACZ,CAAC,AACH,CAAC,AACD,WAAW,oBAAM,CAAC,AAChB,EAAE,AAAC,CAAC,AACF,SAAS,CAAE,WAAW,KAAK,CAAC,CAC5B,OAAO,CAAE,GAAG,AACd,CAAC,AACD,GAAG,AAAC,CAAC,AACH,SAAS,CAAE,WAAW,GAAG,CAAC,CAC1B,OAAO,CAAE,CAAC,AACZ,CAAC,AACD,IAAI,AAAC,CAAC,AACJ,SAAS,CAAE,WAAW,CAAC,CAAC,CACxB,OAAO,CAAE,CAAC,AACZ,CAAC,AACH,CAAC,AACD,WAAW,sBAAQ,CAAC,AAClB,GAAG,AAAC,CAAC,AACH,SAAS,CAAE,MAAM,GAAG,CAAC,CACrB,OAAO,CAAE,GAAG,AACd,CAAC,AACH,CAAC,AAMD,KAAK,AAAC,CAAC,AACL,WAAW,CAAE,aAAa,CAAC,CAAC,kBAAkB,CAAC,CAAC,UAAU,CAAC,CAAC,MAAM,CAAC,CAAC,MAAM,CAAC,CAAC,MAAM,CAAC,CAAC,SAAS,CAAC,CAAC,WAAW,CAAC,CAAC,gBAAgB,CAAC,CAAC,UAAU,AAC1I,CAAC,AAED,8BAAC,MAAM,AAAC,CAAC,AACP,aAAa,CAAE,OAAO,CACtB,aAAa,CAAE,MAAM,CACrB,aAAa,CAAE,GAAG,CAClB,aAAa,CAAE,MAAM,AACvB,CAAC,8BAMD,WAAW,AAAC,CAAC,AACX,KAAK,CAAE,KAAK,CACZ,gBAAgB,CAAE,KAAK,CACvB,WAAW,CAAE,IAAI,AACnB,CAAC,AAsBD,GAAG,8BAAC,CAAC,AACH,IAAI,CAAE,KAAK,AACb,CAAC,AACD,iCAAG,MAAM,AAAC,CAAC,AACT,IAAI,CAAE,KAAK,AACb,CAAC,AACD,kBAAG,MAAM,CAAC,MAAM,eAAC,CAAC,AAChB,MAAM,CAAE,KAAK,AACf,CAAC,AAED,MAAM,8BAAC,CAAC,AACN,MAAM,CAAE,OAAO,AACjB,CAAC"}'
};
const SiteLogo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<svg class="${"logo svelte-11eprzu"}" width="${"51"}" height="${"51"}"><g class="${"svelte-11eprzu"}"><circle cx="${"25"}" cy="${"25"}" r="${"25"}" class="${"svelte-11eprzu"}"></circle><g class="${"svelte-11eprzu"}"><circle cx="${"12.5"}" cy="${"25"}" r="${"12.5"}" class="${"svelte-11eprzu"}"></circle><circle cx="${"38"}" cy="${"25"}" r="${"12.5"}" class="${"svelte-11eprzu"}"></circle></g><g class="${"svelte-11eprzu"}"><circle cx="${"6.5"}" cy="${"25"}" r="${"6.25"}" class="${"svelte-11eprzu"}"></circle><circle cx="${"19"}" cy="${"25"}" r="${"6.25"}" class="${"svelte-11eprzu"}"></circle><circle cx="${"31.5"}" cy="${"25"}" r="${"6.25"}" class="${"svelte-11eprzu"}"></circle><circle cx="${"44"}" cy="${"25"}" r="${"6.25"}" class="${"svelte-11eprzu"}"></circle></g></g></svg>`;
});
var Nav_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-1o749kp.svelte-1o749kp,.svelte-1o749kp.svelte-1o749kp:before,.svelte-1o749kp.svelte-1o749kp:after{box-sizing:border-box}\ndiv.svelte-1o749kp.svelte-1o749kp,a.svelte-1o749kp.svelte-1o749kp,nav.svelte-1o749kp.svelte-1o749kp{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\nnav.svelte-1o749kp.svelte-1o749kp{display:block}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\nnav.svelte-1o749kp a.svelte-1o749kp{padding:0.618rem;text-decoration:none;color:blue;border:1px solid blue}\n@keyframes svelte-1o749kp-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-1o749kp-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-1o749kp-loading{50%{transform:scale(1.2);opacity:0.7}}\na.svelte-1o749kp.svelte-1o749kp:hover{animation-name:svelte-1o749kp-fade;animation-duration:0.3s}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-1o749kp.svelte-1o749kp:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-1o749kp.svelte-1o749kp::selection{color:black;background-color:white;text-shadow:none}\n.tachado.svelte-1o749kp.svelte-1o749kp{text-decoration:line-through}\n.not-clickable.svelte-1o749kp.svelte-1o749kp{pointer-events:none}\n.Variante_0.svelte-1o749kp.svelte-1o749kp{padding:2.618rem;text-align:center}\n.Variante_0.svelte-1o749kp a.svelte-1o749kp:hover{color:black}\n.Variante_0.svelte-1o749kp .active.svelte-1o749kp{background-color:#e5e5e5}\n.Variante_1.svelte-1o749kp .active.svelte-1o749kp{background-color:transparent;color:white;font-weight:bold}\n.Variante_1.svelte-1o749kp .MainNav.svelte-1o749kp{display:none;position:fixed;top:5.236rem;left:0;z-index:500;list-style:none;padding-top:1rem;padding-bottom:0.618rem;font-size:1.618rem;line-height:40.896px;background-color:black;border-top-right-radius:1rem;border-bottom-right-radius:1rem}\n@media(min-width: 769px){.Variante_1.svelte-1o749kp .MainNav.svelte-1o749kp{font-size:1rem;line-height:28.8px}}\n.Variante_1.svelte-1o749kp .NavItem.svelte-1o749kp{text-decoration:none;user-select:none;padding:0.618rem 1.618rem;display:block;border:none}\n.Variante_1.svelte-1o749kp .NavItem.svelte-1o749kp:hover{color:white}\n.Variante_1.svelte-1o749kp .MainNavVisible.svelte-1o749kp{display:flex;flex-wrap:wrap;justify-content:space-between;flex-direction:column;animation-name:svelte-1o749kp-slide;animation-duration:0.3s}\n.Variante_1.svelte-1o749kp .ButtonNav.svelte-1o749kp{position:fixed;z-index:1000;top:1.618rem;left:1.618rem}\n.Variante_1.svelte-1o749kp .ButtonNav.svelte-1o749kp:hover{cursor:pointer}';
const css$2 = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");.svelte-1o749kp.svelte-1o749kp,.svelte-1o749kp.svelte-1o749kp:before,.svelte-1o749kp.svelte-1o749kp:after{box-sizing:border-box}div.svelte-1o749kp.svelte-1o749kp,a.svelte-1o749kp.svelte-1o749kp,nav.svelte-1o749kp.svelte-1o749kp{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}nav.svelte-1o749kp.svelte-1o749kp{display:block}@media(min-width: 769px){}@media(min-width: 1023px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 769px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}nav.svelte-1o749kp a.svelte-1o749kp{padding:0.618rem;text-decoration:none;color:blue;border:1px solid blue}@keyframes svelte-1o749kp-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-1o749kp-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-1o749kp-loading{50%{transform:scale(1.2);opacity:0.7}}a.svelte-1o749kp.svelte-1o749kp:hover{animation-name:svelte-1o749kp-fade;animation-duration:0.3s}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-1o749kp.svelte-1o749kp:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-1o749kp.svelte-1o749kp::selection{color:black;background-color:white;text-shadow:none}.tachado.svelte-1o749kp.svelte-1o749kp{text-decoration:line-through}.not-clickable.svelte-1o749kp.svelte-1o749kp{pointer-events:none}.Variante_0.svelte-1o749kp.svelte-1o749kp{padding:2.618rem;text-align:center}.Variante_0.svelte-1o749kp a.svelte-1o749kp:hover{color:black}.Variante_0.svelte-1o749kp .active.svelte-1o749kp{background-color:#e5e5e5}.Variante_1.svelte-1o749kp .active.svelte-1o749kp{background-color:transparent;color:white;font-weight:bold}.Variante_1.svelte-1o749kp .MainNav.svelte-1o749kp{display:none;position:fixed;top:5.236rem;left:0;z-index:500;list-style:none;padding-top:1rem;padding-bottom:0.618rem;font-size:1.618rem;line-height:40.896px;background-color:black;border-top-right-radius:1rem;border-bottom-right-radius:1rem}@media(min-width: 769px){.Variante_1.svelte-1o749kp .MainNav.svelte-1o749kp{font-size:1rem;line-height:28.8px}}.Variante_1.svelte-1o749kp .NavItem.svelte-1o749kp{text-decoration:none;user-select:none;padding:0.618rem 1.618rem;display:block;border:none}.Variante_1.svelte-1o749kp .NavItem.svelte-1o749kp:hover{color:white}.Variante_1.svelte-1o749kp .MainNavVisible.svelte-1o749kp{display:flex;flex-wrap:wrap;justify-content:space-between;flex-direction:column;animation-name:svelte-1o749kp-slide;animation-duration:0.3s}.Variante_1.svelte-1o749kp .ButtonNav.svelte-1o749kp{position:fixed;z-index:1000;top:1.618rem;left:1.618rem}.Variante_1.svelte-1o749kp .ButtonNav.svelte-1o749kp:hover{cursor:pointer}',
  map: `{"version":3,"file":"Nav.svelte","sources":["Nav.svelte"],"sourcesContent":["<script>\\n    import { pages } from \\"$lib/data/pages.js\\";\\n    export let current_page;\\n\\n    import { clickOutside } from '$lib/clickOutside.js';\\n    import SiteLogo from '$lib/SiteLogo.svelte'\\n\\n    let activemenu = false;\\n    function cuandoClick(event) {\\n        currentitem = event.path[0].hash\\n    }\\n    function contraeMainMenu() {\\n\\t\\tactivemenu = false\\n\\t}\\n    let active;\\n\\n    export let variante = 0;\\n    let modificador = [\\n        \\"Variante_0\\",\\n        \\"Variante_1\\",\\n        \\"Variante_2\\"\\n    ];\\n</script>\\n\\n{#if variante === 1}\\n    <div class=\\"Variante_1\\" use:clickOutside on:click_outside={contraeMainMenu}>\\n        <div class=\\"ButtonNav\\" on:click={() => { activemenu = !activemenu}}> <SiteLogo /> </div>\\n\\n        <nav class={ activemenu ? \\"MainNav MainNavVisible\\" : \\"MainNav\\" }>\\n        {#each pages as {url, name}}\\n            <a \\n                href=\\"{url}\\"\\n                on:click\\n                class=\\"NavItem\\"\\n                class:active={name === current_page}\\n                on:click={contraeMainMenu}\\n                role=\\"navigation\\" \\n            >\\n                {name}\\n            </a>\\n        {/each}\\n        </nav>\\n\\n    </div>\\n{:else}\\n    <nav class={ modificador[ variante ] }>\\n        {#each pages as {url, name}}\\n            <a href=\\"{url}\\"\\n            on:click\\n            class:active={name === current_page}\\n            >\\n                {name}\\n            </a>\\n        {/each}\\n    </nav>\\n{/if}\\n\\n<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nsvg {\\n  max-height: 90vh;\\n}\\n\\nbody,\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Montserrat\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nul {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  display: flex;\\n  flex-direction: column;\\n  margin-top: 11.089rem;\\n  background-color: blue;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 40.896px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 86.4px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 144px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 144px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 57.6px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 28.8px;\\n  }\\n}\\n\\nsmall,\\np {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n\\nhgroup {\\n  margin-bottom: 1.618rem;\\n}\\n\\n@media (min-width: 769px) {\\n  p,\\nh4 {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #d3b39c;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: blue;\\n}\\n\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: blue;\\n  border: 1px solid blue;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\nbody {\\n  background-color: #414141;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\nimg {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.tachado {\\n  text-decoration: line-through;\\n}\\n\\n.not-clickable {\\n  pointer-events: none;\\n}\\n\\nvideo {\\n  width: 100%;\\n  object-fit: cover;\\n  /* mix-blend-mode: luminosity; */\\n  /* border-radius: $h2; */\\n}\\n\\n.Variante_0 {\\n  padding: 2.618rem;\\n  text-align: center;\\n}\\n.Variante_0 a:hover {\\n  color: black;\\n}\\n.Variante_0 .active {\\n  background-color: #e5e5e5;\\n}\\n\\n.Variante_1 .active {\\n  background-color: transparent;\\n  color: white;\\n  font-weight: bold;\\n}\\n.Variante_1 .MainNav {\\n  display: none;\\n  position: fixed;\\n  top: 5.236rem;\\n  left: 0;\\n  z-index: 500;\\n  list-style: none;\\n  padding-top: 1rem;\\n  padding-bottom: 0.618rem;\\n  font-size: 1.618rem;\\n  line-height: 40.896px;\\n  background-color: black;\\n  border-top-right-radius: 1rem;\\n  border-bottom-right-radius: 1rem;\\n}\\n@media (min-width: 769px) {\\n  .Variante_1 .MainNav {\\n    font-size: 1rem;\\n    line-height: 28.8px;\\n  }\\n}\\n.Variante_1 .NavItem {\\n  text-decoration: none;\\n  user-select: none;\\n  padding: 0.618rem 1.618rem;\\n  display: block;\\n  border: none;\\n}\\n.Variante_1 .NavItem:hover {\\n  color: white;\\n}\\n.Variante_1 .MainNavVisible {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: space-between;\\n  flex-direction: column;\\n  animation-name: slide;\\n  animation-duration: 0.3s;\\n}\\n.Variante_1 .ButtonNav {\\n  position: fixed;\\n  z-index: 1000;\\n  top: 1.618rem;\\n  left: 1.618rem;\\n}\\n.Variante_1 .ButtonNav:hover {\\n  cursor: pointer;\\n}</style>"],"names":[],"mappings":"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"}`
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
  return `${variante === 1 ? `<div class="${"Variante_1 svelte-1o749kp"}"><div class="${"ButtonNav svelte-1o749kp"}">${validate_component(SiteLogo, "SiteLogo").$$render($$result, {}, {}, {})}</div>

        <nav class="${escape(null_to_empty("MainNav")) + " svelte-1o749kp"}">${each(pages, ({url, name}) => `<a${add_attribute("href", url, 0)} class="${["NavItem svelte-1o749kp", name === current_page ? "active" : ""].join(" ").trim()}" role="${"navigation"}">${escape(name)}
            </a>`)}</nav></div>` : `<nav class="${escape(null_to_empty(modificador[variante])) + " svelte-1o749kp"}">${each(pages, ({url, name}) => `<a${add_attribute("href", url, 0)} class="${["svelte-1o749kp", name === current_page ? "active" : ""].join(" ").trim()}">${escape(name)}
            </a>`)}</nav>`}`;
});
var Links_svelte = '@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");\n@charset "UTF-8";\n.svelte-1vhz544.svelte-1vhz544,.svelte-1vhz544.svelte-1vhz544:before,.svelte-1vhz544.svelte-1vhz544:after{box-sizing:border-box}\na.svelte-1vhz544.svelte-1vhz544,small.svelte-1vhz544.svelte-1vhz544,li.svelte-1vhz544.svelte-1vhz544{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}\nul.svelte-1vhz544.svelte-1vhz544{list-style:none}\nsvg.svelte-1vhz544.svelte-1vhz544{max-height:90vh}\nsmall.svelte-1vhz544.svelte-1vhz544{font-family:"Montserrat", sans-serif;letter-spacing:0;font-weight:500;color:#b4b4b4}\nul.svelte-1vhz544.svelte-1vhz544{font-size:1rem;line-height:28.8px;display:flex;flex-direction:column;margin-top:11.089rem;background-color:blue}\n@media(min-width: 769px){}\n@media(min-width: 1023px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\n@media(min-width: 2140px){}\n@media(min-width: 374px){}\nsmall.svelte-1vhz544.svelte-1vhz544{font-size:1rem;line-height:28.8px}\n@media(min-width: 769px){}\n@media(min-width: 374px){}\n@media(min-width: 374px){}\n@media(min-width: 769px){}\na[target=_blank].svelte-1vhz544.svelte-1vhz544:after{content:" \u2924"}\n@keyframes svelte-1vhz544-fade{0%{opacity:0.5}100%{opacity:1}}\n@keyframes svelte-1vhz544-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}\n@keyframes svelte-1vhz544-loading{50%{transform:scale(1.2);opacity:0.7}}\na.svelte-1vhz544.svelte-1vhz544:hover{animation-name:svelte-1vhz544-fade;animation-duration:0.3s}\n:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}\n.svelte-1vhz544.svelte-1vhz544:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}\n.svelte-1vhz544.svelte-1vhz544::selection{color:black;background-color:white;text-shadow:none}\n.Links.svelte-1vhz544.svelte-1vhz544{padding-top:2.618rem;padding-bottom:2.618rem;background-color:#2a2929;display:grid;justify-items:center;align-content:center}\n@media(min-width: 769px){.Links.svelte-1vhz544.svelte-1vhz544{padding-top:6.854rem;padding-bottom:6.854rem}}\n.Links.svelte-1vhz544 ul.svelte-1vhz544{width:100%;text-align:center}\n.Links.svelte-1vhz544 a[target=_blank].svelte-1vhz544:after{content:""}\n.Links.svelte-1vhz544 svg.svelte-1vhz544{max-width:1.618rem;padding-top:1rem;margin-left:0.382rem;margin-right:0.382rem;fill:#b4b4b4}\n.Links.svelte-1vhz544 svg.svelte-1vhz544:hover{fill:#e8b28a}\n@media(min-width: 769px){.Links.svelte-1vhz544 svg.svelte-1vhz544{margin-left:1rem;margin-right:1rem}}\n.Links.svelte-1vhz544 small.svelte-1vhz544{color:#b4b4b4}';
const css$1 = {
  code: '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");.svelte-1vhz544.svelte-1vhz544,.svelte-1vhz544.svelte-1vhz544:before,.svelte-1vhz544.svelte-1vhz544:after{box-sizing:border-box}a.svelte-1vhz544.svelte-1vhz544,small.svelte-1vhz544.svelte-1vhz544,li.svelte-1vhz544.svelte-1vhz544{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;text-size-adjust:none}ul.svelte-1vhz544.svelte-1vhz544{list-style:none}svg.svelte-1vhz544.svelte-1vhz544{max-height:90vh}small.svelte-1vhz544.svelte-1vhz544{font-family:"Montserrat", sans-serif;letter-spacing:0;font-weight:500;color:#b4b4b4}ul.svelte-1vhz544.svelte-1vhz544{font-size:1rem;line-height:28.8px;display:flex;flex-direction:column;margin-top:11.089rem;background-color:blue}@media(min-width: 769px){}@media(min-width: 1023px){}@media(min-width: 2140px){}@media(min-width: 374px){}@media(min-width: 2140px){}@media(min-width: 374px){}small.svelte-1vhz544.svelte-1vhz544{font-size:1rem;line-height:28.8px}@media(min-width: 769px){}@media(min-width: 374px){}@media(min-width: 374px){}@media(min-width: 769px){}a[target=_blank].svelte-1vhz544.svelte-1vhz544:after{content:" \u2924"}@keyframes svelte-1vhz544-fade{0%{opacity:0.5}100%{opacity:1}}@keyframes svelte-1vhz544-slide{0%{transform:translateY(-70px);opacity:0.5}90%{transform:translateY(5px);opacity:1}100%{transform:translateY(0);opacity:1}}@keyframes svelte-1vhz544-loading{50%{transform:scale(1.2);opacity:0.7}}a.svelte-1vhz544.svelte-1vhz544:hover{animation-name:svelte-1vhz544-fade;animation-duration:0.3s}:root{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.svelte-1vhz544.svelte-1vhz544:focus{outline-color:#6c6c6c;outline-style:dashed;outline-width:1px;outline-style:dotted}.svelte-1vhz544.svelte-1vhz544::selection{color:black;background-color:white;text-shadow:none}.Links.svelte-1vhz544.svelte-1vhz544{padding-top:2.618rem;padding-bottom:2.618rem;background-color:#2a2929;display:grid;justify-items:center;align-content:center}@media(min-width: 769px){.Links.svelte-1vhz544.svelte-1vhz544{padding-top:6.854rem;padding-bottom:6.854rem}}.Links.svelte-1vhz544 ul.svelte-1vhz544{width:100%;text-align:center}.Links.svelte-1vhz544 a[target=_blank].svelte-1vhz544:after{content:""}.Links.svelte-1vhz544 svg.svelte-1vhz544{max-width:1.618rem;padding-top:1rem;margin-left:0.382rem;margin-right:0.382rem;fill:#b4b4b4}.Links.svelte-1vhz544 svg.svelte-1vhz544:hover{fill:#e8b28a}@media(min-width: 769px){.Links.svelte-1vhz544 svg.svelte-1vhz544{margin-left:1rem;margin-right:1rem}}.Links.svelte-1vhz544 small.svelte-1vhz544{color:#b4b4b4}',
  map: '{"version":3,"file":"Links.svelte","sources":["Links.svelte"],"sourcesContent":["<style lang=\\"scss\\">@charset \\"UTF-8\\";\\n/* Uso:\\n@include media( s + scaling factor ) {\\n  property: value;\\n}\\n*/\\n/* GRADIENT LISTS\\n============================================= */\\n@import url(\\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap\\");\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  text-rendering: optimizeLegibility;\\n  -webkit-font-smoothing: antialiased;\\n  text-size-adjust: none;\\n}\\n\\nfooter, header, nav, section, main {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after, q:before, q:after {\\n  content: \\"\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\ninput {\\n  -webkit-appearance: none;\\n  border-radius: 0;\\n}\\n\\nsvg {\\n  max-height: 90vh;\\n}\\n\\nbody,\\nmain,\\nheader,\\nsmall {\\n  font-family: \\"Montserrat\\", sans-serif;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  color: #b4b4b4;\\n}\\n\\ni {\\n  font-style: italic;\\n}\\n\\nem {\\n  color: #6c6c6c;\\n  font-weight: 500;\\n}\\n\\nstrong {\\n  font-weight: 600;\\n}\\n\\nul {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  display: flex;\\n  flex-direction: column;\\n  margin-top: 11.089rem;\\n  background-color: blue;\\n}\\n\\nh1 {\\n  font-size: 1.618rem;\\n  line-height: 40.896px;\\n  font-weight: bold;\\n}\\n@media (min-width: 769px) {\\n  h1 {\\n    font-size: 4.236rem;\\n    line-height: 86.4px;\\n  }\\n}\\n@media (min-width: 1023px) {\\n  h1 {\\n    font-size: 6.854rem;\\n    line-height: 144px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h1 {\\n    font-size: 11.089rem;\\n    line-height: 144px;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  h2 {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 2140px) {\\n  h2 {\\n    font-size: 2.618rem;\\n    line-height: 57.6px;\\n    margin-left: 6.854rem;\\n    margin-right: 6.854rem;\\n  }\\n}\\n\\nh3,\\nh4 {\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n@media (min-width: 374px) {\\n  h3,\\nh4 {\\n    font-size: 1rem;\\n    line-height: 28.8px;\\n  }\\n}\\n\\nsmall,\\np {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n\\nhgroup {\\n  margin-bottom: 1.618rem;\\n}\\n\\n@media (min-width: 769px) {\\n  p,\\nh4 {\\n    max-width: 769px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nblockquote {\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    font-size: 1.618rem;\\n    line-height: 40.896px;\\n  }\\n}\\n@media (min-width: 374px) {\\n  blockquote {\\n    margin-left: 2.618rem;\\n    margin-right: 2.618rem;\\n  }\\n}\\n@media (min-width: 769px) {\\n  blockquote {\\n    max-width: 374px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n\\nsub {\\n  color: #110e08;\\n  font-weight: 500;\\n  padding-left: 2px;\\n  padding-top: 0px;\\n  font-size: 0.618rem;\\n  line-height: 17.7777777778px;\\n}\\n\\nfigcaption {\\n  text-align: left;\\n}\\n\\ninput {\\n  border: none;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  line-height: 28.8px;\\n  font-weight: inherit;\\n  color: #414141;\\n}\\n\\ninput[type=text] {\\n  padding: 0.618rem;\\n  background-color: #e5e5e5;\\n}\\n\\ninput[type=number] {\\n  color: #d3b39c;\\n  background-color: #110e08;\\n  padding: 0.618rem;\\n}\\ninput[type=number]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range] {\\n  -webkit-appearance: none;\\n  width: 100%;\\n}\\n\\ninput[type=range]:focus {\\n  outline: none;\\n}\\n\\ninput[type=range]::-webkit-slider-runnable-track {\\n  width: 100%;\\n  height: 1px;\\n  cursor: pointer;\\n  background: #b4b4b4;\\n  border-radius: 0px;\\n}\\n\\ninput[type=range]::-webkit-slider-thumb {\\n  height: 30px;\\n  width: 30px;\\n  border-radius: 50px;\\n  background: #b4b4b4;\\n  cursor: grab;\\n  -webkit-appearance: none;\\n  margin-top: -14.5px;\\n}\\n\\ninput[type=range]:focus::-webkit-slider-runnable-track {\\n  background: blue;\\n}\\n\\nnav a {\\n  padding: 0.618rem;\\n  text-decoration: none;\\n  color: blue;\\n  border: 1px solid blue;\\n}\\n\\na[target=_blank]:after {\\n  content: \\" \u2924\\";\\n}\\n\\n@keyframes fade {\\n  0% {\\n    opacity: 0.5;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n@keyframes slide {\\n  0% {\\n    transform: translateY(-70px);\\n    opacity: 0.5;\\n  }\\n  90% {\\n    transform: translateY(5px);\\n    opacity: 1;\\n  }\\n  100% {\\n    transform: translateY(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes loading {\\n  50% {\\n    transform: scale(1.2);\\n    opacity: 0.7;\\n  }\\n}\\na:hover {\\n  animation-name: fade;\\n  animation-duration: 0.3s;\\n}\\n\\n:root {\\n  font-family: -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, Oxygen, Ubuntu, Cantarell, \\"Open Sans\\", \\"Helvetica Neue\\", sans-serif;\\n}\\n\\n*:focus {\\n  outline-color: #6c6c6c;\\n  outline-style: dashed;\\n  outline-width: 1px;\\n  outline-style: dotted;\\n}\\n\\nbody {\\n  background-color: #414141;\\n}\\n\\n::selection {\\n  color: black;\\n  background-color: white;\\n  text-shadow: none;\\n}\\n\\nimg {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.tachado {\\n  text-decoration: line-through;\\n}\\n\\n.not-clickable {\\n  pointer-events: none;\\n}\\n\\nvideo {\\n  width: 100%;\\n  object-fit: cover;\\n  /* mix-blend-mode: luminosity; */\\n  /* border-radius: $h2; */\\n}\\n\\n.Links {\\n  padding-top: 2.618rem;\\n  padding-bottom: 2.618rem;\\n  background-color: #2a2929;\\n  display: grid;\\n  justify-items: center;\\n  align-content: center;\\n}\\n@media (min-width: 769px) {\\n  .Links {\\n    padding-top: 6.854rem;\\n    padding-bottom: 6.854rem;\\n  }\\n}\\n.Links ul {\\n  width: 100%;\\n  text-align: center;\\n}\\n.Links a[target=_blank]:after {\\n  content: \\"\\";\\n}\\n.Links svg {\\n  max-width: 1.618rem;\\n  padding-top: 1rem;\\n  margin-left: 0.382rem;\\n  margin-right: 0.382rem;\\n  fill: #b4b4b4;\\n}\\n.Links svg:hover {\\n  fill: #e8b28a;\\n}\\n@media (min-width: 769px) {\\n  .Links svg {\\n    margin-left: 1rem;\\n    margin-right: 1rem;\\n  }\\n}\\n.Links small {\\n  color: #b4b4b4;\\n}</style>\\n\\n<aside class=\\"Links\\">\\n  <small>Follow me at:</small>\\n  <ul>\\n    <li>\\n      <a href=\\"https://www.instagram.com/t.o.d.h/\\" target=\\"_blank\\" rel=\\"noopener\\">\\n        <svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 16 16\\">\\n          <title>Instagram</title>\\n          <circle cx=\\"12.145\\" cy=\\"3.892\\" r=\\"0.96\\" />\\n          <path d=\\"M8,12c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S10.206,12,8,12zM8,6C6.897,6,6,6.897,6,8s0.897,2,2,2s2-0.897,2-2S9.103,6,8,6z\\" />\\n          <path d=\\"M12,16H4c-2.056,0-4-1.944-4-4V4c0-2.056,1.944-4,4-4h8c2.056,0,4,1.944,4,4v8C16,14.056,14.056,16,12,16zM4,2C3.065,2,2,3.065,2,4v8c0,0.953,1.047,2,2,2h8c0.935,0,2-1.065,2-2V4c0-0.935-1.065-2-2-2H4z\\" />\\n        </svg>\\n      </a>\\n      <a href=\\"https://www.linkedin.com/in/sergiofores/\\" target=\\"_blank\\" rel=\\"noopener\\">\\n        <svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 16 16\\">\\n          <title>Linkedin</title>\\n          <path d=\\"M15.3,0H0.7C0.3,0,0,0.3,0,0.7v14.7C0,15.7,0.3,16,0.7,16h14.7c0.4,0,0.7-0.3,0.7-0.7V0.7C16,0.3,15.7,0,15.3,0z M4.7,13.6H2.4V6h2.4V13.6zM3.6,5C2.8,5,2.2,4.3,2.2,3.6c0-0.8,0.6-1.4,1.4-1.4c0.8,0,1.4,0.6,1.4,1.4C4.9,4.3,4.3,5,3.6,5zM13.6,13.6h-2.4V9.9c0-0.9,0-2-1.2-2c-1.2,0-1.4,1-1.4,2v3.8H6.2V6h2.3v1h0c0.3-0.6,1.1-1.2,2.2-1.2c2.4,0,2.8,1.6,2.8,3.6V13.6z\\" />\\n        </svg>\\n      </a>\\n      <a href=\\"https://medium.com/@todh\\" target=\\"_blank\\" rel=\\"noopener\\">\\n        <svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 16 16\\">\\n          <title>Algunos art\xEDculos en Medium</title>\\n          <path d=\\"M15,0H1A1,1,0,0,0,0,1V15a1,1,0,0,0,1,1H15a1,1,0,0,0,1-1V1A1,1,0,0,0,15,0ZM13.292,3.791l-.858.823a.251.251,0,0,0-.1.241V10.9a.251.251,0,0,0,.1.241l.838.823v.181H9.057v-.181l.868-.843c.085-.085.085-.11.085-.241V5.993L7.6,12.124H7.271l-2.81-6.13V10.1a.567.567,0,0,0,.156.472l1.129,1.37v.181h-3.2v-.181l1.129-1.37a.547.547,0,0,0,.146-.472V5.351A.416.416,0,0,0,3.683,5l-1-1.209V3.61H5.8L8.2,8.893,10.322,3.61h2.971Z\\" />\\n        </svg>\\n      </a>\\n      <a href=\\"https://twitter.com/t0tinspire\\" target=\\"_blank\\" rel=\\"noopener\\">\\n        <svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 16 16\\">\\n          <title>Twitter</title>\\n          <path d=\\"M16,3c-0.6,0.3-1.2,0.4-1.9,0.5c0.7-0.4,1.2-1,1.4-1.8c-0.6,0.4-1.3,0.6-2.1,0.8c-0.6-0.6-1.5-1-2.4-1C9.3,1.5,7.8,3,7.8,4.8c0,0.3,0,0.5,0.1,0.7C5.2,5.4,2.7,4.1,1.1,2.1c-0.3,0.5-0.4,1-0.4,1.7c0,1.1,0.6,2.1,1.5,2.7c-0.5,0-1-0.2-1.5-0.4c0,0,0,0,0,0c0,1.6,1.1,2.9,2.6,3.2C3,9.4,2.7,9.4,2.4,9.4c-0.2,0-0.4,0-0.6-0.1c0.4,1.3,1.6,2.3,3.1,2.3c-1.1,0.9-2.5,1.4-4.1,1.4c-0.3,0-0.5,0-0.8,0c1.5,0.9,3.2,1.5,5,1.5c6,0,9.3-5,9.3-9.3c0-0.1,0-0.3,0-0.4C15,4.3,15.6,3.7,16,3z\\" />\\n        </svg>\\n      </a>\\n      <a href=\\"https://github.com/t0t\\" target=\\"_blank\\" rel=\\"noopener\\">\\n        <svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 16 16\\">\\n          <title>Mi repositorio en Github</title>\\n          <path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M8,0.2c-4.4,0-8,3.6-8,8c0,3.5,2.3,6.5,5.5,7.6C5.9,15.9,6,15.6,6,15.4c0-0.2,0-0.7,0-1.4C3.8,14.5,3.3,13,3.3,13c-0.4-0.9-0.9-1.2-0.9-1.2c-0.7-0.5,0.1-0.5,0.1-0.5c0.8,0.1,1.2,0.8,1.2,0.8C4.4,13.4,5.6,13,6,12.8c0.1-0.5,0.3-0.9,0.5-1.1c-1.8-0.2-3.6-0.9-3.6-4c0-0.9,0.3-1.6,0.8-2.1c-0.1-0.2-0.4-1,0.1-2.1c0,0,0.7-0.2,2.2,0.8c0.6-0.2,1.3-0.3,2-0.3c0.7,0,1.4,0.1,2,0.3c1.5-1,2.2-0.8,2.2-0.8c0.4,1.1,0.2,1.9,0.1,2.1c0.5,0.6,0.8,1.3,0.8,2.1c0,3.1-1.9,3.7-3.7,3.9C9.7,12,10,12.5,10,13.2c0,1.1,0,1.9,0,2.2c0,0.2,0.1,0.5,0.6,0.4c3.2-1.1,5.5-4.1,5.5-7.6C16,3.8,12.4,0.2,8,0.2z\\" />\\n        </svg>\\n      </a>\\n      <a href=\\"https://www.facebook.com/TODH-2139705836275088\\" target=\\"_blank\\" rel=\\"noopener\\">\\n        <svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 16 16\\">\\n          <title>Facebook</title>\\n          <path d=\\"M15.3,0H0.7C0.3,0,0,0.3,0,0.7v14.7C0,15.7,0.3,16,0.7,16H8v-5H6V8h2V6c0-2.1,1.2-3,3-3 c0.9,0,1.8,0,2,0v3h-1c-0.6,0-1,0.4-1,1v1h2.6L13,11h-2v5h4.3c0.4,0,0.7-0.3,0.7-0.7V0.7C16,0.3,15.7,0,15.3,0z\\" />\\n        </svg>\\n      </a>\\n    </li>\\n  </ul>\\n</aside>"],"names":[],"mappings":"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"}'
};
const Links = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<aside class="${"Links svelte-1vhz544"}"><small class="${"svelte-1vhz544"}">Follow me at:</small>
  <ul class="${"svelte-1vhz544"}"><li class="${"svelte-1vhz544"}"><a href="${"https://www.instagram.com/t.o.d.h/"}" target="${"_blank"}" rel="${"noopener"}" class="${"svelte-1vhz544"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 16 16"}" class="${"svelte-1vhz544"}"><title class="${"svelte-1vhz544"}">Instagram</title><circle cx="${"12.145"}" cy="${"3.892"}" r="${"0.96"}" class="${"svelte-1vhz544"}"></circle><path d="${"M8,12c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S10.206,12,8,12zM8,6C6.897,6,6,6.897,6,8s0.897,2,2,2s2-0.897,2-2S9.103,6,8,6z"}" class="${"svelte-1vhz544"}"></path><path d="${"M12,16H4c-2.056,0-4-1.944-4-4V4c0-2.056,1.944-4,4-4h8c2.056,0,4,1.944,4,4v8C16,14.056,14.056,16,12,16zM4,2C3.065,2,2,3.065,2,4v8c0,0.953,1.047,2,2,2h8c0.935,0,2-1.065,2-2V4c0-0.935-1.065-2-2-2H4z"}" class="${"svelte-1vhz544"}"></path></svg></a>
      <a href="${"https://www.linkedin.com/in/sergiofores/"}" target="${"_blank"}" rel="${"noopener"}" class="${"svelte-1vhz544"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 16 16"}" class="${"svelte-1vhz544"}"><title class="${"svelte-1vhz544"}">Linkedin</title><path d="${"M15.3,0H0.7C0.3,0,0,0.3,0,0.7v14.7C0,15.7,0.3,16,0.7,16h14.7c0.4,0,0.7-0.3,0.7-0.7V0.7C16,0.3,15.7,0,15.3,0z M4.7,13.6H2.4V6h2.4V13.6zM3.6,5C2.8,5,2.2,4.3,2.2,3.6c0-0.8,0.6-1.4,1.4-1.4c0.8,0,1.4,0.6,1.4,1.4C4.9,4.3,4.3,5,3.6,5zM13.6,13.6h-2.4V9.9c0-0.9,0-2-1.2-2c-1.2,0-1.4,1-1.4,2v3.8H6.2V6h2.3v1h0c0.3-0.6,1.1-1.2,2.2-1.2c2.4,0,2.8,1.6,2.8,3.6V13.6z"}" class="${"svelte-1vhz544"}"></path></svg></a>
      <a href="${"https://medium.com/@todh"}" target="${"_blank"}" rel="${"noopener"}" class="${"svelte-1vhz544"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 16 16"}" class="${"svelte-1vhz544"}"><title class="${"svelte-1vhz544"}">Algunos art\xEDculos en Medium</title><path d="${"M15,0H1A1,1,0,0,0,0,1V15a1,1,0,0,0,1,1H15a1,1,0,0,0,1-1V1A1,1,0,0,0,15,0ZM13.292,3.791l-.858.823a.251.251,0,0,0-.1.241V10.9a.251.251,0,0,0,.1.241l.838.823v.181H9.057v-.181l.868-.843c.085-.085.085-.11.085-.241V5.993L7.6,12.124H7.271l-2.81-6.13V10.1a.567.567,0,0,0,.156.472l1.129,1.37v.181h-3.2v-.181l1.129-1.37a.547.547,0,0,0,.146-.472V5.351A.416.416,0,0,0,3.683,5l-1-1.209V3.61H5.8L8.2,8.893,10.322,3.61h2.971Z"}" class="${"svelte-1vhz544"}"></path></svg></a>
      <a href="${"https://twitter.com/t0tinspire"}" target="${"_blank"}" rel="${"noopener"}" class="${"svelte-1vhz544"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 16 16"}" class="${"svelte-1vhz544"}"><title class="${"svelte-1vhz544"}">Twitter</title><path d="${"M16,3c-0.6,0.3-1.2,0.4-1.9,0.5c0.7-0.4,1.2-1,1.4-1.8c-0.6,0.4-1.3,0.6-2.1,0.8c-0.6-0.6-1.5-1-2.4-1C9.3,1.5,7.8,3,7.8,4.8c0,0.3,0,0.5,0.1,0.7C5.2,5.4,2.7,4.1,1.1,2.1c-0.3,0.5-0.4,1-0.4,1.7c0,1.1,0.6,2.1,1.5,2.7c-0.5,0-1-0.2-1.5-0.4c0,0,0,0,0,0c0,1.6,1.1,2.9,2.6,3.2C3,9.4,2.7,9.4,2.4,9.4c-0.2,0-0.4,0-0.6-0.1c0.4,1.3,1.6,2.3,3.1,2.3c-1.1,0.9-2.5,1.4-4.1,1.4c-0.3,0-0.5,0-0.8,0c1.5,0.9,3.2,1.5,5,1.5c6,0,9.3-5,9.3-9.3c0-0.1,0-0.3,0-0.4C15,4.3,15.6,3.7,16,3z"}" class="${"svelte-1vhz544"}"></path></svg></a>
      <a href="${"https://github.com/t0t"}" target="${"_blank"}" rel="${"noopener"}" class="${"svelte-1vhz544"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 16 16"}" class="${"svelte-1vhz544"}"><title class="${"svelte-1vhz544"}">Mi repositorio en Github</title><path fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M8,0.2c-4.4,0-8,3.6-8,8c0,3.5,2.3,6.5,5.5,7.6C5.9,15.9,6,15.6,6,15.4c0-0.2,0-0.7,0-1.4C3.8,14.5,3.3,13,3.3,13c-0.4-0.9-0.9-1.2-0.9-1.2c-0.7-0.5,0.1-0.5,0.1-0.5c0.8,0.1,1.2,0.8,1.2,0.8C4.4,13.4,5.6,13,6,12.8c0.1-0.5,0.3-0.9,0.5-1.1c-1.8-0.2-3.6-0.9-3.6-4c0-0.9,0.3-1.6,0.8-2.1c-0.1-0.2-0.4-1,0.1-2.1c0,0,0.7-0.2,2.2,0.8c0.6-0.2,1.3-0.3,2-0.3c0.7,0,1.4,0.1,2,0.3c1.5-1,2.2-0.8,2.2-0.8c0.4,1.1,0.2,1.9,0.1,2.1c0.5,0.6,0.8,1.3,0.8,2.1c0,3.1-1.9,3.7-3.7,3.9C9.7,12,10,12.5,10,13.2c0,1.1,0,1.9,0,2.2c0,0.2,0.1,0.5,0.6,0.4c3.2-1.1,5.5-4.1,5.5-7.6C16,3.8,12.4,0.2,8,0.2z"}" class="${"svelte-1vhz544"}"></path></svg></a>
      <a href="${"https://www.facebook.com/TODH-2139705836275088"}" target="${"_blank"}" rel="${"noopener"}" class="${"svelte-1vhz544"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 16 16"}" class="${"svelte-1vhz544"}"><title class="${"svelte-1vhz544"}">Facebook</title><path d="${"M15.3,0H0.7C0.3,0,0,0.3,0,0.7v14.7C0,15.7,0.3,16,0.7,16H8v-5H6V8h2V6c0-2.1,1.2-3,3-3 c0.9,0,1.8,0,2,0v3h-1c-0.6,0-1,0.4-1,1v1h2.6L13,11h-2v5h4.3c0.4,0,0.7-0.3,0.7-0.7V0.7C16,0.3,15.7,0,15.3,0z"}" class="${"svelte-1vhz544"}"></path></svg></a></li></ul></aside>`;
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
	
	${slots.default ? slots.default({}) : ``}

	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</main>

`;
});
var $layout$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: $layout
});
export {init, render};
