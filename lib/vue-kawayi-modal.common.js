module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "9c56":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export css */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return injectGlobal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return keyframes; });
/* unused harmony export ThemeProvider */
var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

/* Some high number, usually 9-digit base-10. Map it to base-😎 */
var generateAlphabeticName = function generateAlphabeticName(code) {
  var lastDigit = chars[code % chars.length];
  return code > chars.length ? '' + generateAlphabeticName(Math.floor(code / chars.length)) + lastDigit : lastDigit;
};

var interleave = (function (strings, interpolations) {
  return interpolations.reduce(function (array, interp, i) {
    return array.concat(interp, strings[i + 1]);
  }, [strings[0]]);
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
}

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || objectToString.call(value) != objectTag || isHostObject(value)) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}

var lodash_isplainobject = isPlainObject;

var _uppercasePattern = /([A-Z])/g;
var msPattern = /^ms-/;

function hyphenate(string) {
  return string.replace(_uppercasePattern, '-$1').toLowerCase();
}

function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, '-ms-');
}

var hyphenateStyleName_1 = hyphenateStyleName;

var objToCss = function objToCss(obj, prevKey) {
  var css = Object.keys(obj).map(function (key) {
    if (lodash_isplainobject(obj[key])) return objToCss(obj[key], key);
    return hyphenateStyleName_1(key) + ': ' + obj[key] + ';';
  }).join(' ');
  return prevKey ? prevKey + ' {\n  ' + css + '\n}' : css;
};

var flatten = function flatten(chunks, executionContext) {
  return chunks.reduce(function (ruleSet, chunk) {
    /* Remove falsey values */
    if (chunk === undefined || chunk === null || chunk === false || chunk === '') return ruleSet;
    /* Flatten ruleSet */
    if (Array.isArray(chunk)) return [].concat(toConsumableArray(ruleSet), toConsumableArray(flatten(chunk, executionContext)));
    /* Either execute or defer the function */
    if (typeof chunk === 'function') {
      return executionContext ? ruleSet.concat.apply(ruleSet, toConsumableArray(flatten([chunk(executionContext)], executionContext))) : ruleSet.concat(chunk);
    }

    /* Handle objects */
    // $FlowFixMe have to add %checks somehow to isPlainObject
    return ruleSet.concat(lodash_isplainobject(chunk) ? objToCss(chunk) : chunk.toString());
  }, []);
};

var css = (function (rules) {
  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  return flatten(interleave(rules, interpolations));
});

/*

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance
- 'polyfills' on server side


// usage

import StyleSheet from 'glamor/lib/sheet'
let styleSheet = new StyleSheet()

styleSheet.inject()
- 'injects' the stylesheet into the page (or into memory if on server)

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents


*/

function last(arr) {
  return arr[arr.length - 1];
}

function sheetForTag(tag) {
  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      return document.styleSheets[i];
    }
  }
}

var isDev = function (x) {
  return x === 'development' || !x;
}("development");
var isTest = "development" === 'test';
var isBrowser = typeof document !== 'undefined' && !isTest;

var oldIE = function () {
  if (isBrowser) {
    var div = document.createElement('div');
    div.innerHTML = '<!--[if lt IE 10]><i></i><![endif]-->';
    return div.getElementsByTagName('i').length === 1;
  }
}();

function makeStyleTag() {
  var tag = document.createElement('style');
  tag.type = 'text/css';
  tag.appendChild(document.createTextNode(''));
  (document.head || document.getElementsByTagName('head')[0]).appendChild(tag);
  return tag;
}

var StyleSheet = function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$speedy = _ref.speedy,
        speedy = _ref$speedy === undefined ? !isDev && !isTest : _ref$speedy,
        _ref$maxLength = _ref.maxLength,
        maxLength = _ref$maxLength === undefined ? isBrowser && oldIE ? 4000 : 65000 : _ref$maxLength;

    classCallCheck(this, StyleSheet);

    this.isSpeedy = speedy; // the big drawback here is that the css won't be editable in devtools
    this.sheet = undefined;
    this.tags = [];
    this.maxLength = maxLength;
    this.ctr = 0;
  }

  createClass(StyleSheet, [{
    key: 'inject',
    value: function inject() {
      var _this = this;

      if (this.injected) {
        throw new Error('already injected stylesheet!');
      }
      if (isBrowser) {
        // this section is just weird alchemy I found online off many sources
        this.tags[0] = makeStyleTag();
        // this weirdness brought to you by firefox
        this.sheet = sheetForTag(this.tags[0]);
      } else {
        // server side 'polyfill'. just enough behavior to be useful.
        this.sheet = {
          cssRules: [],
          insertRule: function insertRule(rule) {
            // enough 'spec compliance' to be able to extract the rules later
            // in other words, just the cssText field
            var serverRule = { cssText: rule };
            _this.sheet.cssRules.push(serverRule);
            return { serverRule: serverRule, appendRule: function appendRule(newCss) {
                return serverRule.cssText += newCss;
              } };
          }
        };
      }
      this.injected = true;
    }
  }, {
    key: 'speedy',
    value: function speedy(bool) {
      if (this.ctr !== 0) {
        throw new Error('cannot change speedy mode after inserting any rule to sheet. Either call speedy(' + bool + ') earlier in your app, or call flush() before speedy(' + bool + ')');
      }
      this.isSpeedy = !!bool;
    }
  }, {
    key: '_insert',
    value: function _insert(rule) {
      // this weirdness for perf, and chrome's weird bug
      // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
      try {
        this.sheet.insertRule(rule, this.sheet.cssRules.length); // todo - correct index here
      } catch (e) {
        if (isDev) {
          // might need beter dx for this
          console.warn('whoops, illegal rule inserted', rule); //eslint-disable-line no-console
        }
      }
    }
  }, {
    key: 'insert',
    value: function insert(rule) {
      var insertedRule = void 0;

      if (isBrowser) {
        // this is the ultrafast version, works across browsers
        if (this.isSpeedy && this.sheet.insertRule) {
          this._insert(rule);
        } else {
          var textNode = document.createTextNode(rule);
          last(this.tags).appendChild(textNode);
          insertedRule = { textNode: textNode, appendRule: function appendRule(newCss) {
              return textNode.appendData(newCss);
            } };

          if (!this.isSpeedy) {
            // sighhh
            this.sheet = sheetForTag(last(this.tags));
          }
        }
      } else {
        // server side is pretty simple
        insertedRule = this.sheet.insertRule(rule);
      }

      this.ctr++;
      if (isBrowser && this.ctr % this.maxLength === 0) {
        this.tags.push(makeStyleTag());
        this.sheet = sheetForTag(last(this.tags));
      }
      return insertedRule;
    }
  }, {
    key: 'flush',
    value: function flush() {
      if (isBrowser) {
        this.tags.forEach(function (tag) {
          return tag.parentNode.removeChild(tag);
        });
        this.tags = [];
        this.sheet = null;
        this.ctr = 0;
        // todo - look for remnants in document.styleSheets
      } else {
        // simpler on server
        this.sheet.cssRules = [];
      }
      this.injected = false;
    }
  }, {
    key: 'rules',
    value: function rules() {
      if (!isBrowser) {
        return this.sheet.cssRules;
      }
      var arr = [];
      this.tags.forEach(function (tag) {
        return arr.splice.apply(arr, [arr.length, 0].concat(toConsumableArray(Array.from(sheetForTag(tag).cssRules))));
      });
      return arr;
    }
  }]);
  return StyleSheet;
}();

/* Wraps glamor's stylesheet and exports a singleton for styled components
to use. */

var StyleSheet$1 = function () {
  function StyleSheet$$1() {
    classCallCheck(this, StyleSheet$$1);

    /* Don't specify a maxLength for the global sheet, since these rules
     * are defined at initialization and should remain static after that */
    this.globalStyleSheet = new StyleSheet({ speedy: false });
    this.componentStyleSheet = new StyleSheet({ speedy: false, maxLength: 40 });
  }

  createClass(StyleSheet$$1, [{
    key: 'inject',
    value: function inject() {
      this.globalStyleSheet.inject();
      this.componentStyleSheet.inject();
    }
  }, {
    key: 'flush',
    value: function flush() {
      if (this.globalStyleSheet.sheet) this.globalStyleSheet.flush();
      if (this.componentStyleSheet.sheet) this.componentStyleSheet.flush();
    }
  }, {
    key: 'insert',
    value: function insert(rule) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { global: false };

      var sheet = opts.global ? this.globalStyleSheet : this.componentStyleSheet;
      return sheet.insert(rule);
    }
  }, {
    key: 'rules',
    value: function rules() {
      return this.globalStyleSheet.rules().concat(this.componentStyleSheet.rules());
    }
  }, {
    key: 'injected',
    get: function get$$1() {
      return this.globalStyleSheet.injected && this.componentStyleSheet.injected;
    }
  }]);
  return StyleSheet$$1;
}();

/* Export stylesheet as a singleton class */


var styleSheet = new StyleSheet$1();

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var hash = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = doHash;
  // murmurhash2 via https://gist.github.com/raycmorgan/588423

  function doHash(str, seed) {
    var m = 0x5bd1e995;
    var r = 24;
    var h = seed ^ str.length;
    var length = str.length;
    var currentIndex = 0;

    while (length >= 4) {
      var k = UInt32(str, currentIndex);

      k = Umul32(k, m);
      k ^= k >>> r;
      k = Umul32(k, m);

      h = Umul32(h, m);
      h ^= k;

      currentIndex += 4;
      length -= 4;
    }

    switch (length) {
      case 3:
        h ^= UInt16(str, currentIndex);
        h ^= str.charCodeAt(currentIndex + 2) << 16;
        h = Umul32(h, m);
        break;

      case 2:
        h ^= UInt16(str, currentIndex);
        h = Umul32(h, m);
        break;

      case 1:
        h ^= str.charCodeAt(currentIndex);
        h = Umul32(h, m);
        break;
    }

    h ^= h >>> 13;
    h = Umul32(h, m);
    h ^= h >>> 15;

    return h >>> 0;
  }

  function UInt32(str, pos) {
    return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8) + (str.charCodeAt(pos++) << 16) + (str.charCodeAt(pos) << 24);
  }

  function UInt16(str, pos) {
    return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8);
  }

  function Umul32(n, m) {
    n = n | 0;
    m = m | 0;
    var nlo = n & 0xffff;
    var nhi = n >>> 16;
    var res = nlo * m + ((nhi * m & 0xffff) << 16) | 0;
    return res;
  }
});

var hashStr = unwrapExports(hash);

var replaceWhitespace = function replaceWhitespace(str) {
  return str.replace(/\s|\\n/g, '');
};

var makeAnimation = function makeAnimation(name, css) {
  return '\n@keyframes ' + name + ' {\n   ' + css + '\n}\n';
};

var keyframes = (function (css) {
  var name = generateAlphabeticName(hashStr(replaceWhitespace(JSON.stringify(css))));

  var animation = makeAnimation(name, css);

  styleSheet.insert(animation);

  return name;
});

var stylis = createCommonjsModule(function (module, exports) {
	/*
  *          __        ___
  *    _____/ /___  __/ (_)____
  *   / ___/ __/ / / / / / ___/
  *  (__  ) /_/ /_/ / / (__  )
  * /____/\__/\__, /_/_/____/
  *          /____/
  *
  * stylis is a feature-rich css preprocessor
  *
  * @licence MIT
  */
	(function (factory) {
		{
			module.exports = factory(commonjsGlobal);
		}
	})(function (window) {

		// plugins

		var plugins = [];

		// regular expressions
		var andPattern = /&/g;
		var andSpacePattern = / +&/;
		var splitPattern = /,\n/g;
		var globalPattern = /:global\(%?((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g;
		var globalsPattern = /(?:&| ):global\(%?((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g;
		var hostPattern = /:host\((.*)\)/g;
		var hostContextPattern = /:host-context\((.*)\)/g;
		var newLinePattern = /\n/g;
		var placeholderPattern = /::place/g;
		var colonPattern = /: +/g;
		var animationPattern = /[ .#~+><\d]+/g;
		var transformPattern = / *(transform)/g;

		// prefixes
		var moz = '-moz-';
		var ms = '-ms-';
		var webkit = '-webkit-';

		/**
   * css preprocessor
   *
   * @param  {String}   selector   - i.e `.class` or `#id` or `[attr=id]`
   * @param  {String}   styles     - css string
   * @param  {Boolean=} animations - prefix animations and keyframes, true by default
   * @param  {Boolean=} compact    - enable additional shadow dom features(:host, :host-context)
   * @param  {Function|Array} middlewares
   * @return {string}
   */
		function stylis(selector, styles, animations, compact, middlewares) {
			selector += '';

			var middleware = middlewares;
			var prefix = '';
			var namespace = '';
			var char;
			var attr;
			var animns;

			var type = selector.charCodeAt(0);

			// ` selector` -> `selector`
			if (type < 33) {
				type = (selector = selector.trim()).charCodeAt(0);
			}

			switch (type) {
				// `#` `.` id and class selectors
				case 35:
				case 46:
					{
						namespace = (prefix = selector).substring(1);
						break;
					}
				// [ attr selector
				case 91:
					{
						// `[data-id=namespace]` -> ['data-id', 'namespace']
						attr = selector.substring(1, selector.length - 1).split('=');
						char = (namespace = attr[1] || attr[0]).charCodeAt(0);

						// [data-id="namespace"]/[data-id='namespace']
						// --> "namespace"/'namspace' --> namespace
						if (char === 34 || char === 39) {
							namespace = namespace.substring(1, namespace.length - 1);
						}

						prefix = '[' + attr[0] + (attr.length > 1 ? '="' + namespace + '"]' : ']');
						break;
					}
				// element selector
				default:
					{
						namespace = prefix = selector;
					}
			}

			// reset type signature
			type = 0;

			// animation and keyframe namespace
			if (animations === true || animations === undefined || animations === null) {
				animations = true;
				animns = namespace.replace(animationPattern, '-');
			} else {
				animns = '';
				animations = false;
			}

			// middleware
			var has;
			var uses = middleware !== void 0 && middleware !== null;
			var length = plugins.length;

			if (uses === true) {
				has = (typeof middleware === 'undefined' ? 'undefined' : _typeof(middleware)).charCodeAt(0);

				// o, array
				if (has === 111) {
					use(middleware);
				}
				// f, function
				else if (has === 102) {
						plugins[length++] = middleware;
					} else {
						uses = false;
					}
			}

			if (length !== 0) {
				middleware = length === 1 ? plugins[0] : proxy;
				uses = true;
			}

			// declare
			var character;
			var colon;
			var inner;
			var selectors;
			var build;
			var temp;
			var prev;
			var indexOf;
			var first;
			var second;
			var third;
			var sel;
			var blob;
			var nest;
			var str;
			var media;

			// buffers
			var buff = '';
			var blck = '';
			var flat = '';

			// character code
			var code = 0;
			var nextcode;

			// context signatures
			var medias = 0;
			var special = 0;
			var close = 0;
			var closed = 0;
			var nested = 0;
			var func = 0;
			var strings = 0;
			var globs = 0;
			var isplace = 0;
			var join = 0;

			// context(flat) signatures
			var levels = 0;

			// comments
			var comment = 0;
			var comblck = 0;
			var comline = 0;

			// pre-process
			if (uses === true) {
				temp = middleware(0, styles, line, column, prefix, 0);

				if (temp != null) {
					styles = temp;
				}

				str = '';
			}

			// positions
			var caret = 0;
			var depth = 0;
			var column = 0;
			var line = 1;
			var eof = styles.length;

			// compiled output
			var output = '';

			// parse + compile
			while (caret < eof) {
				code = styles.charCodeAt(caret);

				// {, }, ; characters, parse line by line
				if (medias === 1 && caret === eof - 1 || strings === 0 && func === 0 && comment === 0 && (
				// {, }, ;
				code === 123 || code === 125 || code === 59 ||
				// eof buffer
				caret === eof - 1 && buff.length !== 0)) {
					buff += styles.charAt(caret);

					// middleware, selector/property context, }
					if (uses === true && code !== 125) {
						// { pre-processed selector context
						if (code === 123) {
							temp = middleware(1, buff.substring(0, buff.length - 1).trim(), line, column, prefix, output.length);
						}
						// ; property context
						else {
								temp = middleware(2, buff, line, column, prefix, output.length);
							}

						if (temp != null) {
							buff = code === 123 ? temp + ' {' : temp;
						}
					}

					first = buff.charCodeAt(0);

					// only trim when the first character is a space ` `
					if (first === 32) {
						first = (buff = buff.trim()).charCodeAt(0);
					}

					second = buff.charCodeAt(1);
					third = buff.charCodeAt(2);

					// @, special block
					if (first === 64) {
						// push flat css
						if (levels === 1 && flat.length !== 0) {
							levels = 0;
							flat = prefix + ' {' + flat + '}';

							// middleware, flat context
							if (uses === true) {
								temp = middleware(4, flat, line, column, prefix, output.length);

								if (temp != null) {
									flat = temp;
								}
							}

							output += flat;
							flat = '';
						}

						// ;
						if (code !== 59) {
							// @keyframe, `k`
							if (second === 107) {
								blob = buff.substring(1, 11) + animns + buff.substring(11);
								buff = '@' + webkit + blob;
								type = 1;
							}
							// @media `m`, `e` characters,
							// @supports `s` `u` characters,
							// @global `g` character
							else if (second === 109 && third === 101 || second === 115 && third === 117 || second === 103) {
									caret++;
									column++;

									if (media === undefined) {
										media = '';
									}

									inner = '';

									// keep track of opening `{` and `}` occurrences
									closed = 1;

									// travel to the end of the block
									while (caret < eof) {
										char = styles.charCodeAt(caret);

										// {, }, nested blocks may have nested blocks
										if (char === 123) {
											closed++;
										} else if (char === 125) {
											closed--;
										}

										// break when the nested block has ended
										if (closed === 0) {
											caret++;
											break;
										}

										// build content of nested block
										inner += styles.charAt(caret++);

										// move column and line position
										column = char === 13 || char === 10 ? (line++, 0) : column + 1;
									}

									selector = depth === 0 ? prefix : prev.substring(0, prev.length - 1).replace(newLinePattern, '').trim();

									// build block
									media += buff + stylis(selector, inner.trim(), animations, compact, null).trim() + '}';

									// middleware, block context
									if (uses === true) {
										temp = middleware(3, media, line, column, prefix, output.length);

										if (temp != null) {
											media = temp;
										}
									}

									buff = '';
									medias = 1;

									if (caret === eof) {
										eof++;
									}

									continue;
								}
								// unknown
								else {
										type = 6;
									}
						}

						// flag special, i.e @keyframes, @font-face ...
						if (code !== 59 && second !== 105) {
							// k, m
							if (second !== 107 && second !== 109 && second !== 115 && second !== 103) {
								type = 5;
							}

							close = -1;
							special++;
						}
					}
					// property/selector
					else {
							// { character, selector declaration
							if (code === 123) {
								depth++;

								// push flat css
								if (levels === 1 && flat.length !== 0) {
									levels = 0;
									flat = prefix + ' {' + flat + '}';

									// middleware, flat context
									if (uses === true) {
										temp = middleware(4, flat, line, column, prefix, output.length);

										if (temp != null) {
											flat = temp;
										}
									}

									output += flat;
									flat = '';
								}

								// nested selector
								if (depth === 2) {
									// discard first character {
									caret++;
									column++;

									// inner content of block
									inner = '';

									var nestSelector = buff.substring(0, buff.length - 1).split(splitPattern);
									var prevSelector = prev.substring(0, prev.length - 1).split(splitPattern);

									// keep track of opening `{` and `}` occurrences
									closed = 1;

									// travel to the end of the block
									while (caret < eof) {
										char = styles.charCodeAt(caret);

										// {, nested blocks may have nested blocks
										if (char === 123) {
											closed++;
										}
										// },
										else if (char === 125) {
												closed--;
											}

										// break when the nested block has ended
										if (closed === 0) {
											break;
										}

										// build content of nested block
										inner += styles.charAt(caret++);

										// move column and line position
										column = char === 13 || char === 10 ? (line++, 0) : column + 1;
									}

									// handle multiple selectors: h1, h2 { div, h4 {} } should generate
									// -> h1 div, h2 div, h2 h4, h2 div {}
									length = prevSelector.length;

									for (var j = 0; j < length; j++) {
										// extract value, prep index for reuse
										temp = prevSelector[j];
										indexOf = temp.indexOf(prefix);

										prevSelector[j] = '';

										// since there could also be multiple nested selectors
										for (var k = 0, l = nestSelector.length; k < l; k++) {
											if (indexOf > 0) {
												selector = ':global(%)' + temp.trim();
											} else {
												selector = temp.replace(prefix, '&').trim();
											}

											sel = nestSelector[k].trim();

											if (sel.indexOf(' &') > 0) {
												selector = sel.replace('&', '').trim() + ' ' + selector;
											} else if (globalPattern.exec(sel) !== null) {
												selector = sel;
											} else {
												selector = selector + ' ' + sel;
											}

											prevSelector[j] += selector.replace(andSpacePattern, '').trim() + (k === l - 1 ? '' : ',');
										}
									}

									if (nest === undefined) {
										nest = '';
									}

									// concat nest
									nest += '\n' + prevSelector.join(',').replace(globalsPattern, ' $1') + ' {' + inner + '}';

									// signature
									nested = 1;

									// clear current line, to avoid adding nested blocks to the normal flow
									buff = '';

									// decreament depth
									depth--;
								}
								// top-level selector
								else if (special === 0 || type === 2) {
										// register block with placeholder selector
										if (isplace === 0 && buff.indexOf('::place') !== -1) {
											isplace = 1;
										}

										selectors = buff.split(splitPattern);

										// current selector
										build = '';

										// previous selector
										prev = '';

										length = selectors.length;

										// prefix multiple selectors with namesapces
										// @example h1, h2, h3 --> [namespace] h1, [namespace] h1, ....
										for (var j = 0; j < length; j++) {
											char = (selector = selectors[j]).charCodeAt(0);

											// ` `, trim if first character is a space
											if (char === 32) {
												char = (selector = selector.trim()).charCodeAt(0);
											}

											// &
											if (char === 38) {
												// before: & { / &&... {
												selector = prefix + selector.substring(1).replace(andPattern, prefix);
												// after: ${prefix} { / ${prefix}${prefix}...
											} else {
												// default to :global if & exists outside of the first non-space character
												if ((indexOf = selector.indexOf(' &')) > 0) {
													// before: html & {
													selector = selector.replace(andPattern, prefix).trim();
													// after: html ${prefix} {
												}
												// :
												else if (char === 58) {
														nextcode = selector.charCodeAt(1);

														// h, t, :host
														if (compact === true && nextcode === 104 && selector.charCodeAt(4) === 116) {
															nextcode = selector.charCodeAt(5);

															// (, :host(selector)
															if (nextcode === 40) {
																// before: `(selector)`
																selector = prefix + selector.replace(hostPattern, '$1').replace(andPattern, prefix);
																// after: ${prefx} selector {
															}
															// -, :host-context(selector)
															else if (nextcode === 45) {
																	// before: `-context(selector)`
																	selector = selector.replace(hostContextPattern, '$1 ' + prefix).replace(andPattern, prefix);
																	// after: selector ${prefix} {
																}
																// :host
																else {
																		selector = prefix + selector.substring(5);
																	}
														}
														// g, :global(selector)
														else if (nextcode === 103 && (compact === true || (nextcode = selector.charCodeAt(8)) === 37)) {
																globs = 1;

																// before: `:global(selector)`
																selector = selector.replace(globalPattern, '$1').replace(andPattern, prefix).trim();
																// after: selector
															}
															// :hover, :active, :focus, etc...
															else {
																	selector = prefix + selector;
																}
													}
													// non-pseudo selectors
													else if (globs === 0) {
															selector = prefix + ' ' + selector;
														}
											}

											// middleware, post-processed selector context
											if (uses === true) {
												temp = middleware(1.5, j === length - 1 ? selector.substring(0, selector.length - 1).trim() : selector, line, column, prefix, output.length);

												if (temp != null) {
													selector = j === length - 1 ? temp + ' {' : temp;
												}
											}

											// if first selector do not prefix with `,`
											prev += (j !== 0 ? ',\n' : '') + (globs !== 1 ? selector : ':global(%)' + selector);
											build += j !== 0 ? ',' + selector : selector;

											// reset :global flag
											globs = 0;
										}

										buff = build;
									} else {
										prev = buff;
									}
							}
							// not single `}`
							else if ((code === 125 && buff.length === 1) === false) {
									if (join === 1) {
										buff = buff.replace(newLinePattern, '');
									}

									// ;
									if (code !== 59) {
										buff = (code === 125 ? buff.substring(0, buff.length - 1) : buff.trim()) + ';';
									}

									// animation: a, n, i characters
									if (first === 97 && second === 110 && third === 105) {
										// removes ;
										buff = buff.substring(0, buff.length - 1);

										// position of :
										colon = buff.indexOf(':') + 1;

										// left hand side everything before `:`
										build = buff.substring(0, colon);

										// short hand animation syntax
										if (animations === true && buff.charCodeAt(9) !== 45) {
											var anims = buff.substring(colon).trim().split(',');

											length = anims.length;

											// because we can have multiple animations `animation: slide 4s, slideOut 2s`
											for (var j = 0; j < length; j++) {
												var anim = anims[j];
												var props = anim.split(' ');

												// since we can't be sure of the position of the name of the animation we have to find it
												for (var k = 0, l = props.length; k < l; k++) {
													var prop = props[k].trim();
													var frst = prop.charCodeAt(0);
													var thrd = prop.charCodeAt(2);
													var len = prop.length;
													var last = prop.charCodeAt(len - 1);

													// animation name parser
													if (
													// first character
													(
													// letters
													frst > 64 && frst < 90 || frst > 96 && frst < 122 ||
													// the exception `underscores or dashes`
													frst === 45 ||
													// but two dashes at the beginning are forbidden
													frst === 95 && prop.charCodeAt(1) !== 95) &&

													// cubic-bezier()/steps(), )
													last !== 41 && len !== 0 && !(frst === 105 && (
													// infinite, i, f, e
													thrd === 102 && last === 101 && len === 8 ||
													// initial
													thrd === 105 && last === 108 && len === 7 ||
													// inherit
													thrd === 104 && last === 116 && len === 7)) &&

													// unset
													!(frst === 117 && thrd === 115 && last === 116 && len === 5) &&

													// linear, l, n, r
													!(frst === 108 && thrd === 110 && last === 114 && len === 6) &&

													// alternate/alternate-reverse, a, t, e
													!(frst === 97 && thrd === 116 && last === 101 && (len === 9 || len === 17)) &&

													// normal, n, r, l
													!(frst === 110 && thrd === 114 && last === 108 && len === 6) &&

													// backwards, b, c, s
													!(frst === 98 && thrd === 99 && last === 115 && len === 9) &&

													// forwards, f, r, s
													!(frst === 102 && thrd === 114 && last === 115 && len === 8) &&

													// both, b, t, h
													!(frst === 98 && thrd === 116 && last === 104 && len === 4) &&

													// none, n, n, e
													!(frst === 110 && thrd === 110 && last === 101 && len === 4) &&

													// running, r, n, g
													!(frst === 114 && thrd === 110 && last === 103 && len === 7) &&

													// paused, p, u, d
													!(frst === 112 && thrd === 117 && last === 100 && len === 6) &&

													// reversed, r, v, d
													!(frst === 114 && thrd === 118 && last === 100 && len === 8) &&

													// step-start/step-end, s, e, (t/d)
													!(frst === 115 && thrd === 101 && (last === 116 && len === 10 || last === 100 && len === 8)) &&

													// ease/ease-in/ease-out/ease-in-out, e, s, e
													!(frst === 101 && thrd === 115 && (last === 101 && len === 4 || (len === 11 || len === 7 || len === 8) && prop.charCodeAt(4) === 45)) &&

													// durations, 0.4ms, .4s, 400ms ...
													isNaN(parseFloat(prop)) &&

													// handle spaces in cubic-bezier()/steps() functions
													prop.indexOf('(') === -1) {
														props[k] = animns + prop;
													}
												}

												build += (j === 0 ? '' : ',') + props.join(' ').trim();
											}
										}
										// explicit syntax, anims array should have only one element
										else {
												build += (buff.charCodeAt(10) !== 110 ? '' : animns) + buff.substring(colon).trim().trim();
											}

										// vendor prefix
										buff = webkit + build + ';' + build + (code === 125 ? ';}' : ';');
									}
									// appearance: a, p, p
									else if (first === 97 && second === 112 && third === 112) {
											// vendor prefix -webkit- and -moz-
											buff = webkit + buff + moz + buff + buff;
										}
										// display: d, i, s
										else if (first === 100 && second === 105 && third === 115) {
												// flex/inline-flex
												if ((indexOf = buff.indexOf('flex')) !== -1) {
													// e, inline-flex
													temp = buff.charCodeAt(indexOf - 2) === 101 ? 'inline-' : '';
													buff = buff.indexOf(' !important') !== -1 ? ' !important' : '';

													// vendor prefix
													buff = 'display: ' + webkit + temp + 'box' + buff + ';' + 'display: ' + webkit + temp + 'flex' + buff + ';' + 'display: ' + ms + 'flexbox' + buff + ';' + 'display: ' + temp + 'flex' + buff + ';';
												}
											}
											// transforms & transitions: t, r, a
											// text-size-adjust: t, e, x
											else if (first === 116 && (second === 114 && third === 97 || second === 101 && third === 120)) {
													// vendor prefix -webkit- and -ms- if transform
													buff = webkit + buff + (buff.charCodeAt(5) === 102 ? ms + buff : '') + buff;

													if (second + third === 211 && buff.charCodeAt(12) === 115 && buff.indexOf(' transform') > -1) {
														buff = buff.substring(0, buff.indexOf(';') + 1).replace(transformPattern, ' ' + webkit + '$1') + buff;
													}
												}
												// hyphens: h, y, p
												// user-select: u, s, e
												else if (first === 104 && second === 121 && third === 112 || first === 117 && second === 115 && third === 101) {
														// vendor prefix all
														buff = webkit + buff + moz + buff + ms + buff + buff;
													}
													// flex: f, l, e
													else if (first === 102 && second === 108 && third === 101) {
															// vendor prefix all but moz
															buff = webkit + buff + ms + buff + buff;
														}
														// order: o, r, d
														else if (first === 111 && second === 114 && third === 100) {
																// vendor prefix all but moz
																buff = webkit + buff + ms + 'flex-' + buff + buff;
															}
															// align-items, align-center, align-self: a, l, i, -
															else if (first === 97 && second === 108 && third === 105 && buff.charCodeAt(5) === 45) {
																	switch (buff.charCodeAt(6)) {
																		// align-items, i
																		case 105:
																			{
																				temp = buff.replace('-items', '');
																				buff = webkit + buff + webkit + 'box-' + temp + ms + 'flex-' + temp + buff;
																				break;
																			}
																		// align-self, s
																		case 115:
																			{
																				buff = ms + 'flex-item-' + buff.replace('-self', '') + buff;
																				break;
																			}
																		// align-content
																		default:
																			{
																				buff = ms + 'flex-line-pack' + buff.replace('align-content', '') + buff;
																				break;
																			}
																	}
																}
																// justify-content, j, u, s
																else if (first === 106 && second === 117 && third === 115) {
																		colon = buff.indexOf(':');
																		temp = buff.substring(colon).replace('flex-', '');

																		buff = webkit + 'box-pack' + temp + webkit + buff + ms + 'flex-pack' + temp + buff;
																	}
																	// cursor, c, u, r
																	else if (first === 99 && second === 117 && third === 114 && /zoo|gra/.exec(buff) !== null) {
																			buff = buff.replace(colonPattern, ': ' + webkit) + buff.replace(colonPattern, ': ' + moz) + buff;
																		}
																		// width: min-content / width: max-content
																		else if (first === 119 && second === 105 && third === 100 && (indexOf = buff.indexOf('-content')) !== -1) {
																				temp = buff.substring(indexOf - 3);

																				// vendor prefix
																				buff = 'width: ' + webkit + temp + 'width: ' + moz + temp + 'width: ' + temp;
																			}

									if (code !== 59) {
										buff = buff.substring(0, buff.length - 1);

										// }
										if (code === 125) {
											buff += '}';
										}
									}
								}

							// } character
							if (code === 125) {
								if (depth !== 0) {
									depth--;
								}

								// concat nested css
								if (depth === 0 && nested === 1) {
									styles = styles.substring(0, caret + 1) + nest + styles.substring(caret + 1);
									eof += nest.length;
									nest = '';
									nested = 0;
									close++;
								}

								// }, ` ` whitespace
								if (first !== 125 && buff.charCodeAt(buff.length - 2) === 32) {
									buff = buff.substring(0, buff.length - 1).trim() + '}';
								}
							}

							// @keyframes
							if (special !== 0) {
								// }, find closing tag
								if (code === 125) {
									close++;
								}
								// {
								else if (code === 123 && close !== 0) {
										close--;
									}

								// closing tag
								if (close === 0) {
									// @keyframes
									if (type === 1) {
										// vendor prefix
										buff = '}@' + blob + '}';

										// reset
										blob = '';
									}

									// reset signatures
									type = 0;
									close--;
									special--;
								}
								// @keyframes
								else if (type === 1) {
										blob += buff;
									}
							}
							// flat context
							else if (depth === 0 && code !== 125) {
									levels = 1;
									flat = flat === undefined ? buff : flat + buff;
									buff = '';
								}
						}

					// append line to blck buffer
					blck += buff;

					// add blck buffer to output
					if (code === 125 && type === 0) {
						char = blck.charCodeAt(blck.length - 2);

						// {, @
						if (char !== 123) {
							// middleware, block context
							if (uses === true) {
								temp = middleware(3, blck, line, column, prefix, output.length);

								if (temp != null) {
									blck = temp;
								}
							}

							if (isplace === 1) {
								isplace = 0;

								blck = blck.replace(placeholderPattern, '::' + webkit + 'input-place') + blck.replace(placeholderPattern, '::' + moz + 'place') + blck.replace(placeholderPattern, ':' + ms + 'input-place') + blck;
							}

							// append blck buffer
							output += blck;
						}

						// reset blck buffer
						blck = '';
					}

					if (medias === 1) {
						// middleware, block context
						if (uses === true) {
							temp = middleware(3, blck, line, column, prefix, output.length);

							if (temp != null) {
								media = temp;
							}
						}

						output += media;
						medias = 0;
						media = '';
					}

					join = 0;

					// reset line buffer
					buff = '';
				}
				// build line by line
				else {
						// \r, \n, new lines
						if (code === 13 || code === 10) {
							if (comline === 1) {
								comment = comline = 0;
								buff = buff.substring(0, buff.indexOf('//')).trim();
							}
							// /
							else if (uses === true && comment === 0 && (length = (str = str.trim()).length) !== 0 && str.charCodeAt(0) !== 47) {
									if (buff.length !== 0) {
										temp = middleware(7, str, line, column, prefix, output.length);

										if (temp != null) {
											buff = buff.replace(new RegExp(str + '$'), temp).trim();
										}
									}

									str = '';
								}

							column = 0;
							line++;
						} else {
							// not `\t` tab character
							if (code !== 9) {
								character = styles.charAt(caret);

								// build line buffer
								if (uses === true && comment === 0) {
									str += character;
								}

								// build character buffer
								buff += character;

								switch (code) {
									// ,
									case 44:
										{
											if (strings === 0 && comment === 0 && func === 0) {
												join = 1;
												buff += '\n';
											}
											break;
										}
									// " character
									case 34:
										{
											if (comment === 0) {
												// exit string " context / enter string context
												strings = strings === 34 ? 0 : strings === 39 ? 39 : 34;
											}
											break;
										}
									// ' character
									case 39:
										{
											if (comment === 0) {
												// exit string ' context / enter string context
												strings = strings === 39 ? 0 : strings === 34 ? 34 : 39;
											}
											break;
										}
									// ( character
									case 40:
										{
											if (strings === 0 && comment === 0) {
												func = 1;
											}
											break;
										}
									// ) character
									case 41:
										{
											if (strings === 0 && comment === 0) {
												func = 0;
											}
											break;
										}
									// / character
									case 47:
										{
											if (strings === 0 && func === 0) {
												char = styles.charCodeAt(caret - 1);

												// /, begin line comment
												if (comblck === 0 && char === 47) {
													comment = comline = 1;
												}
												// *, end block comment
												else if (char === 42) {
														comment = comblck = 0;
														buff = buff.substring(0, buff.indexOf('/*')).trim();
													}
											}

											break;
										}
									// * character
									case 42:
										{
											if (strings === 0 && func === 0 && comline === 0 && comblck === 0) {
												// /, begin block comment
												if (styles.charCodeAt(caret - 1) === 47) {
													comment = comblck = 1;
												}
											}

											break;
										}
								}
							}

							// move column position
							column++;
						}
					}

				// move caret position
				caret++;
			}

			// trailing flat css
			if (flat !== undefined && flat.length !== 0) {
				flat = prefix + ' {' + flat + '}';

				// middleware, flat context
				if (uses === true) {
					temp = middleware(4, flat, line, column, prefix, output.length);

					if (temp != null) {
						flat = temp;
					}
				}

				// append flat css
				output += flat;
			}

			// middleware, output context
			if (uses === true) {
				temp = middleware(6, output, line, column, prefix, output.length);

				if (temp != null) {
					output = temp;
				}
			}

			return output;
		}

		/**
   * use plugin
   *
   * @param  {string|function|function[]} key
   * @param  {function?} plugin
   * @return {Object} {plugins}
   */
		function use(plugin) {
			var length = plugins.length;

			if (plugin != null) {
				// array of plugins
				if (plugin.constructor === Array) {
					for (var i = 0, l = plugin.length; i < l; i++) {
						plugins[length++] = plugin[i];
					}
				}
				// single un-keyed plugin
				else {
						plugins[length] = plugin;
					}
			}

			return stylis;
		}
		/**
   * Middleware Proxy
   *
   * @param  {Number} ctx
   * @param  {String} str
   * @param  {Number} line
   * @param  {Number} col
   * @param  {String} prefix
   * @param  {Number} length
   * @return {String?}
   */
		function proxy(ctx, str, line, col, prefix, length) {
			var output = str;

			for (var i = 0, l = plugins.length; i < l; i++) {
				output = plugins[i](ctx, output, line, col, prefix, length) || output;
			}

			if (output !== str) {
				return output;
			}
		}

		stylis.use = use;

		/**
   * plugin store
   *
   * @type {Function[]}
   */
		stylis.p = plugins;

		/**
   * regular expresions
   *
   * @type {Object<string, RegExp>}
   */
		stylis.r = {
			a: andPattern,
			s: splitPattern,
			g: globalPattern,
			n: globalsPattern
		};

		return stylis;
	});
});

var ComponentStyle = function () {
  function ComponentStyle(rules, selector) {
    classCallCheck(this, ComponentStyle);

    this.rules = rules;
    this.selector = selector;
  }

  createClass(ComponentStyle, [{
    key: 'generateAndInject',
    value: function generateAndInject() {
      if (!styleSheet.injected) styleSheet.inject();
      var flatCSS = flatten(this.rules).join('');
      var cssString = this.selector ? this.selector + ' { ' + flatCSS + ' }' : flatCSS;
      var css = stylis('', cssString, false, false);
      styleSheet.insert(css, { global: true });
    }
  }]);
  return ComponentStyle;
}();

var injectGlobal = function injectGlobal(strings) {
  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var globalStyle = new ComponentStyle(css.apply(undefined, [strings].concat(interpolations)));
  globalStyle.generateAndInject();
};

var ThemeProvider = {
  name: 'ThemeProvider',
  props: {
    theme: Object
  },
  provide: function provide() {
    return {
      theme: this.theme
    };
  },

  render: function render(createElement) {
    return createElement('div', {}, this.$slots.default);
  }
};

var _styledComponent = (function (ComponentStyle) {
  var createStyledComponent = function createStyledComponent(target, rules, props) {
    var prevProps = target && typeof target !== 'string' ? (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' ? target.props : typeof target === 'function' ? target.options.props : {} : {};
    var mergedProps = Object.assign({}, prevProps, props);

    var componentStyle = new ComponentStyle(rules);

    var StyledComponent = {
      inject: {
        theme: {
          default: {}
        }
      },
      props: mergedProps,
      render: function render(createElement) {
        var _this = this;

        var children = [];
        for (var slot in this.$slots) {
          if (slot === 'default') {
            children.push(this.$slots[slot]);
          } else {
            children.push(createElement('template', { slot: slot }, this.$slots[slot]));
          }
        }

        return createElement(target, {
          class: [this.generatedClassName],
          props: this.$props,
          domProps: {
            value: this.value
          },
          on: {
            input: function input(event) {
              if (event.target) {
                _this.$emit('input', event.target.value);
              }
            },
            click: function click(event) {
              _this.$emit('click', event);
            }
          },
          scopedSlots: this.$scopedSlots
        }, children);
      },
      methods: {
        generateAndInjectStyles: function generateAndInjectStyles(componentProps) {
          return componentStyle.generateAndInjectStyles(componentProps);
        }
      },
      computed: {
        generatedClassName: function generatedClassName() {
          var componentProps = Object.assign({ theme: this.theme }, this.$props);
          return this.generateAndInjectStyles(componentProps);
        }
      },
      extend: function extend(extendedRules) {
        return createStyledComponent(target, rules.slice().concat(extendedRules), props);
      },
      withComponent: function withComponent(newTarget) {
        return createStyledComponent(newTarget, rules, props);
      }
    };

    return StyledComponent;
  };

  return createStyledComponent;
});

var _componentStyle = (function (nameGenerator) {
  var inserted = {};

  var ComponentStyle = function () {
    function ComponentStyle(rules) {
      classCallCheck(this, ComponentStyle);

      this.rules = rules;
      if (!styleSheet.injected) styleSheet.inject();
      this.insertedRule = styleSheet.insert('');
    }

    /*
     * Flattens a rule set into valid CSS
     * Hashes it, wraps the whole chunk in a ._hashName {}
     * Parses that with PostCSS then runs PostCSS-Nested on it
     * Returns the hash to be injected on render()
     * */


    createClass(ComponentStyle, [{
      key: 'generateAndInjectStyles',
      value: function generateAndInjectStyles(executionContext) {
        var flatCSS = flatten(this.rules, executionContext).join('').replace(/^\s*\/\/.*$/gm, ''); // replace JS comments
        var hash$$1 = hashStr(flatCSS);
        if (!inserted[hash$$1]) {
          var selector = nameGenerator(hash$$1);
          inserted[hash$$1] = selector;
          var css = stylis('.' + selector, flatCSS, false, false);
          this.insertedRule.appendRule(css);
        }
        return inserted[hash$$1];
      }
    }]);
    return ComponentStyle;
  }();

  return ComponentStyle;
});

/**
 * Handy list of valid HTML tags
 *
 */

var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr',

// SVG
'circle', 'clipPath', 'defs', 'ellipse', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

var _styled = (function (createStyledComponent) {
  var styled = function styled(tagName) {
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return function (cssRules) {
      for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        interpolations[_key - 1] = arguments[_key];
      }

      return createStyledComponent(tagName, css.apply(undefined, [cssRules].concat(interpolations)), props);
    };
  };

  domElements.forEach(function (domElement) {
    styled[domElement] = styled(domElement);
  });

  return styled;
});

var styled = _styled(_styledComponent(_componentStyle(generateAlphabeticName)));

/* harmony default export */ __webpack_exports__["a"] = (styled);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0694a46a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/Modal/src/modal.vue?vue&type=template&id=7ebeb4c8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.showMask)?_c('Bg',{attrs:{"data-show":_vm.visible}}):_vm._e(),_c('Container',{attrs:{"data-show":_vm.visible}},[_c('Inner',{attrs:{"data-show":_vm.visible}},[(_vm.showMask)?_c('Close',{on:{"click":_vm.handleMask}}):_vm._e(),_c('LineBack',[_c('div'),_c('div')]),_c('Panel',[_c('Header',[_c('Title',[_vm._v(_vm._s(_vm.title))])],1),_c('Body',[_vm._t("default")],2),_c('Footer',[_c('CLoseBtn',{on:{"click":_vm.close}},[_vm._v(_vm._s(_vm.cancelText))])],1)],1),_c('LineFront',[_c('div'),_c('div')])],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/Modal/src/modal.vue?vue&type=template&id=7ebeb4c8&

// EXTERNAL MODULE: ./node_modules/vue-styled-components/dist/vue-styled-components.es.js
var vue_styled_components_es = __webpack_require__("9c56");

// CONCATENATED MODULE: ./packages/Modal/src/layout.js
const pcLayout = (styles) => {
  return `
    @media screen and (min-width: 761px) {
      ${styles}
    }
  `
}

const spLayout = (styles) => {
  return `
    @media screen and (max-width: 760px) {
      ${styles}
    }
  `
}

// CONCATENATED MODULE: ./packages/Modal/src/keyframes.js


vue_styled_components_es["b" /* injectGlobal */]`
  body {
    margin: 0;
  }
`

const fadein = vue_styled_components_es["c" /* keyframes */]`
  from { opacity: 0; }
  to   { opacity: 1; }
`

const slideRight = vue_styled_components_es["c" /* keyframes */]`
  from { transform: translateX(-100%); }
  to   { transform: translateX(0%); }
`

const bound = vue_styled_components_es["c" /* keyframes */]`
  0%   { transform: translateY(-100vh); }
  15%  { transform: translateY(0vh); }
  30%  { transform: translateY(-3vh); }
  45%  { transform: translateY(0vh); }
  60%  { transform: translateY(-1.5vh); }
  75%  { transform: translateY(0vh); }
  90%  { transform: translateY(-0.75vh); }
  100% { transform: translateY(0vh); }
`

const rotate = vue_styled_components_es["c" /* keyframes */]`
  0%   { transform: rotateY(45deg); }
  15%  { transform: rotateY(-5deg); }
  30%  { transform: rotateY(5deg); }
  45%  { transform: rotateY(-2.5deg); }
  60%  { transform: rotateY(2.5deg); }
  75%  { transform: rotateY(-1.25deg); }
  90%  { transform: rotateY(1.25deg); }
  100% { transform: rotateY(0deg); }
`

// CONCATENATED MODULE: ./packages/Modal/src/styles.js




const color1 = '#fbf4f1'
const color2 = '#5d3523'

const Bg = vue_styled_components_es["a" /* default */].div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, .8);
  display: none;
  opacity: 0;
  &[data-show=true] {
    display: block;
    animation: ${fadein} 2s ease 0s forwards;
  }
`
const Container = vue_styled_components_es["a" /* default */].div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  perspective: 600px;
  transform: translateY(-100%);

  &[data-show=true] {
    animation: ${bound} 0.9s ease-out 0s forwards;
  }
`

const Inner = vue_styled_components_es["a" /* default */].div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &[data-show=true] {
    animation: ${rotate} 3s ease-out 0s forwards;
  }
`

const Close = vue_styled_components_es["a" /* default */].div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const LineBack = vue_styled_components_es["a" /* default */].div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  ${pcLayout(`
    width: 600px;
    height: calc(50% - 180px);
  `)}
  ${spLayout(`
    width: 320px;
    height: calc(50% - 130px);
  `)}
  div {
    position: absolute;
    bottom: 0;
    width: 2px;
    height: 150%;
    background-color: ${color2};
  }
  div:nth-child(1) {
    left: 55px;
  }
  div:nth-child(2) {
    right: 55px;
  }
`

const LineFront = vue_styled_components_es["a" /* default */].div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 600px;
  height: calc(50% - 130px);
  transform: translateX(-50%);
  ${pcLayout(`
    width: 600px;
    height: calc(50% - 180px);
  `)}
  ${spLayout(`
    width: 320px;
    height: calc(50% - 130px);
  `)}
  div {
    position: absolute;
    width: 2px;
    height: 150%;
    background-color: ${color2};
    ${pcLayout(`
      bottom: -25px;
    `)}
    ${spLayout(`
      bottom: -20px;
    `)}
  }
  div::after {
    content: '';
    display: block;
    position: absolute;
    bottom: -4.5px;
    left: -4.5px;
    width: 10px;
    height: 10px;
    background-color: ${color2};
    border-radius: 50%;
  }
  div:nth-child(1) {
    left: 25px;
  }
  div:nth-child(2) {
    right: 25px;
  }
`

const Panel = vue_styled_components_es["a" /* default */].div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${pcLayout(`
    width: 600px;
    box-shadow: 0 0 20px rgba(0,0,0,.2);
    border-radius: 12px;
  `)}
  ${spLayout(`
    width: 320px;
    box-shadow: 0 0 10px rgba(0,0,0,.2);
    border-radius: 10px;
  `)}
`

const Header = vue_styled_components_es["a" /* default */].div`
  width: 100%;
  background-color: ${color1};
  border-bottom: 1px solid ${color2};
  box-sizing: border-box;
  ${pcLayout(`
    height: 50px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  `)}
  ${spLayout(`
    height: 40px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  `)}
`

const Title = vue_styled_components_es["a" /* default */].div`
  color: ${color2};
  text-align: center;
  letter-spacing: 0.1em;
  margin: 0 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  ${pcLayout(`
    font-size: 20px;
    line-height: 50px;
    width: 85%;
  `)}
  ${spLayout(`
    font-size: 16px;
    line-height: 40px;
    width: 80%;
  `)}
`
const Body = vue_styled_components_es["a" /* default */].div`
  position: relative;
  width: 100%;
  background-color: #fff;
  padding: 10px 0px;
  overflow-y: auto;
  ${pcLayout(`
    height: 260px;
  `)}
  ${spLayout(`
    height: 180px;
  `)}
`

const Footer = vue_styled_components_es["a" /* default */].div`
  position: relative;
  width: 100%;
  background-color: ${color1};
  border-top: 1px solid ${color2};
  box-sizing: border-box;
  ${pcLayout(`
    height: 50px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  `)}
  ${spLayout(`
    height: 40px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;  
  `)}
`

const CLoseBtn = vue_styled_components_es["a" /* default */].div`
  appearance: none;
  border: none;
  position: absolute;
  bottom: 0;
  left: 50%;
  color: #fff;
  font-weight: bold;
  letter-spacing: 0.2em;
  background-color: #c2617e;
  transform: translate(-50%, 50%);
  cursor: pointer;
  overflow: hidden;
  ${pcLayout(`
    width: 200px;
    height: 50px;
    font-size: 20px;
    line-height: 50px;
    box-shadow: 0 0 10px #c2617e;
    border-radius: 30px;
  `)}
  ${spLayout(`
    width: 140px;
    height: 40px;
    font-size: 16px;
    line-height: 40px;
    box-shadow: 0 0 5px #c2617e;
    border-radius: 20px; 
  `)}
`

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/Modal/src/modal.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var modalvue_type_script_lang_js_ = ({
  name: 'KawayiModal',
  components: {
    Bg: Bg,
    Container: Container,
    Inner: Inner,
    Close: Close,
    LineBack: LineBack,
    LineFront: LineFront,
    Panel: Panel,
    Header: Header,
    Title: Title,
    Body: Body,
    Footer: Footer,
    CLoseBtn: CLoseBtn
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      defalut: '标题'
    },
    cancelText: {
      type: String,
      default: '关闭'
    },
    showMask: {
      type: Boolean,
      default: true
    },
    maskClosable: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      visible: this.value
    }
  },
  watch: {
    value (val) {
      this.visible = val;
    }
  },
  methods: {
    close () {
      this.visible = false;
      this.$emit('input', false);
      this.$emit('on-close');
    },
    handleMask () {
      if (this.maskClosable && this.showMask) {
        this.close();
      }
    }
  }
});

// CONCATENATED MODULE: ./packages/Modal/src/modal.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_modalvue_type_script_lang_js_ = (modalvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/Modal/src/modal.vue





/* normalize component */

var component = normalizeComponent(
  src_modalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "modal.vue"
/* harmony default export */ var modal = (component.exports);
// CONCATENATED MODULE: ./packages/Modal/index.js


modal.install = function (Vue) {
  Vue.component(modal.name, modal)
}

/* harmony default export */ var Modal = (modal);

// CONCATENATED MODULE: ./packages/index.js


const components = [Modal];

const install = function (Vue) {
  if (install.installed) return;
  components.map(component => Vue.component(component.name, component));
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

/* harmony default export */ var packages_0 = ({
  install,
  Modal: Modal
});

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
//# sourceMappingURL=vue-kawayi-modal.common.js.map