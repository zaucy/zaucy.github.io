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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "85964dfe5e51d5d2a1456ec310ac37e2.mp3";

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "99c8caeb32232161650b0f31e6ef33cc.wav";

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(6);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(8)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./style.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {let activeInputs = {};
let inputHandlers = {};

window.addEventListener("keydown", function(e) {
	if(e.repeat) {
		return;
	}

	const key = e.which;
	const startTime = global.performance.now();
	let lastTime = startTime;

	function callInputHandler() {
		let currentTime = global.performance.now();
		let deltaTime = currentTime - lastTime;
		lastTime = currentTime;

		if(inputHandlers[key]) {
			inputHandlers[key](deltaTime);
		}

		activeInputs[key] = requestAnimationFrame(callInputHandler);
	}

	activeInputs[key] = requestAnimationFrame(callInputHandler);
});

window.addEventListener("keyup", function(e) {
	const key = e.which;

	if(activeInputs[key]) {
		cancelAnimationFrame(activeInputs[key]);
	}
});

exports.registerHandler = function(key, handler) {
	inputHandlers[key] = handler;
};

exports.registerHandlers = function(keys, handler) {
	for(let key of keys) {
		exports.registerHandler(key, handler);
	}
};

exports.unregisterHandler = function(key) {
	inputHandlers[key] = undefined;
	delete inputHandlers[key];
};

exports.unregisterHandlers = function(keys) {
	for(let key of keys) {
		exports.unregisterHandlers(key, handler);
	}
};

exports.KB_SPACE  = 32;
exports.KB_LEFT   = 37;
exports.KB_RIGHT  = 39;
exports.KB_UP     = 38;
exports.KB_DOWN   = 40;
exports.KB_A      = 65;
exports.KB_D      = 68;
exports.KB_S      = 83;
exports.KB_W      = 87;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {let lastTickerId = 0;
let tickers = {};

exports.startTicker = function(cb) {
	const startTime = global.performance.now();
	let lastTime = startTime;
	let thisTickerId = ++lastTickerId;

	function callTicker() {
		let currentTime = global.performance.now();
		let deltaTime = currentTime - lastTime;
		lastTime = currentTime;

		cb(deltaTime);

		tickers[thisTickerId] = requestAnimationFrame(callTicker);
	}

	tickers[thisTickerId] = requestAnimationFrame(callTicker);
};

exports.stopTicker = function(tickerId) {
	if(!tickers[tickerId]) {
		return;
	}

	cancelAnimationFrame(tickers[tickerId]);

	tickers[tickerId] = undefined;
	delete tickers[tickerId];
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(undefined);
// imports


// module
exports.push([module.i, "html, body {\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tmax-width: 100%;\r\n\tmax-height: 100%;\r\n\toverflow: hidden;\r\n}\r\n\r\nbody {\r\n\tmargin: auto;\r\n\tbackground-color: black;\r\n\tcursor: url(" + __webpack_require__(13) + "), auto;\r\n}\r\n\r\n* {\r\n\tuser-select: none;\r\n}\r\n\r\n.player-container {\r\n\r\n}\r\n\r\n.player-container > .player {\r\n\tposition: absolute;\r\n\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position: bottom;\r\n\tbackground-size: contain;\r\n\timage-rendering: pixelated;\r\n}\r\n\r\n.player-container > .player[data-facing=left] {\r\n\tbackground-image: url(" + __webpack_require__(11) + ");\r\n}\r\n\r\n.player-container > .player[data-facing=right] {\r\n\tbackground-image: url(" + __webpack_require__(12) + ");\r\n}\r\n\r\n.player-container > .player[data-facing=forward] {\r\n\tbackground-image: url(" + __webpack_require__(10) + ");\r\n}\r\n\r\n\r\n.crate {\r\n\tbackground-image: url(" + __webpack_require__(14) + ");\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position: bottom;\r\n\tbackground-size: contain;\r\n\timage-rendering: pixelated;\r\n\r\n\twidth: 5vh;\r\n\theight: 5vh;\r\n\tposition: absolute;\r\n\tbottom: 0px;\r\n\topacity: 0.1;\r\n\ttransform: translateZ(1px);\r\n\tz-index: 1;\r\n\tbackground-color: black;\r\n}\r\n", ""]);

// exports


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(9);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaCAYAAAC+aNwHAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QYIBggjNQs4AAAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAA4ElEQVQ4y2NkwALuTUr4j01cKW8BI7oYI7GacRnCxEAhGDUASyxQHI0wkBwZiWLI3OXLGYlyQXJk1H9+Xl6shn78/Jlh7vJluNNBXV3df0J+RlczCKMRl/9xyQ28F1iQOQkijxhab/9iYGBgYLB6exdF4TFhZQYGBgaGHJ2fDE340sGxYIf/DAwMDNc/f2fQ5OVkQGdbrT3AiNMFDAwMDAUPPzMwMDAwpAuxMFz//B1DHK8XGBgYGN68e8/AwMDA0PqOjDBAyVD37qE4VUlJ6T9RJuJTiE1uGJRIRJdGuOQAMSNHpOPtaC0AAAAASUVORK5CYII="

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaCAYAAAC+aNwHAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QYIBggootnhiAAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAA5klEQVQ4y2NkQAL3JiX8Z8AClPIWMDLgAIyENBMyhImBQjBqAJIB+KKq9fgvnAawYIuq5MgolCjl5+VlIJgOYKAoLR1revj4+TODtKoKQ1NTEyNFYVBXV/cfpwHoklSPhae37+APRHwAV0BSnA5YsIU2sbZjGJAg8ohh9f5rDCKc7HCxY8LKKIbm6PxkaMKXDtZ6mP+X5OZkYGBgYLj++TuDJi8nirzV2gOMeL1w5+tPhjtffzIwMDAwiHCyMxQ8/ExaGMx8+omyQIQXcffuYXhPSUnpP1HRiE3zMC6RMP2Pp37AJgcAmElIHwpKgnYAAAAASUVORK5CYII="

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaCAYAAAC+aNwHAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QYIBggcg20VPQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAA50lEQVQ4y2NkwAPuTUr4j01cKW8BI4zNSKpmdEOYGCgEowbgMaD1+E+CMcDAwMDAgksRPy8fQ+vxTyhic5cvx4h2DIG6urr/T2/fYeDn5cVqcN+smYw4vVBXV/ef5oGIbgmGAU9v3yHJQBbMwOOlbzpgwSf58fNnDDEeCXHcBiSIPGJovf0LRYHV27tw9pvvPxlCLdkYmvClg2PBDiihfP3zdwZNXk4GBgYGhudfvzME7zjJiNcLBQ9RnR3M+Zfh8PefxIfBm3fvUfgzyQnEe/fuYXhNSUnpP0XRiM3QYVIikVQfYJMDAKUXS2HtewmdAAAAAElFTkSuQmCC"

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7CAAAOwgEVKEqAAAAAB3RJTUUH4QYIBjMonmsOsAAAAIVJREFUOMu91DEOwyAMheHfVQZOwOqN+5+HjZEjMICzFKmporYk0LfZC59sC/HeG0DOWbiQBzcjXdAzKrkt2JxzAKSUAFBVe9byH8F7Y1QyXzAqWSf4VbJe0Fr7KFknUNVDHWM8lcwTlFIACCFwNu3+4st2Js+g1vrtHtZcopjZpX9gmmAHLPNJ+MOAInMAAAAASUVORK5CYII="

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAbCAYAAABvCO8sAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QYIBjYlna2GSAAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAABmElEQVRIx73Wy07CQBQG4H9O2oJA5W7igmBj4s4VCY/g1ufxzYw+Axvc4QJMF5hwEQISEQIuoHVop+3MNGE2wNDOn28uJ8Oenx73OGMzAKA3nPkdd9cl4YMvb65WwE3NPhnb8H5UCllMlz/oDWcYjBfCly8vLBBj2O33Up+NSgGmQWEhHwoAdtaCO10KB5JtwbCafRibAGAwXmCz3fl/mgahUSlor1OzaodkXvN73ekyFNqs2sphomns9EfhQAD4mKSTimSd/giMQRyYRholY+yw2SIDdaRxslIuI15DXamsLDFQRqoikwqMk4qmOE4mHRiUbrY7mAb5Mq8/SaYUyEv5KfS+y8hej7WYVA40L+K1LaeOpKpXPMpJ5UDz0xjUtpw65qvfxLEIAB7uG5it1lIH2jQIXXeCrjsJPdty6vj6XuuvYdy2L+czJzVSVkppSlUxZ0WGRkkpbalSlVLaUqUqJV1ZsMlKib/sqMp0pJGbRlamIvUD+WuijkxWenJr825svEzllta+vRL2v3/OUc7/zxI79837D4qq+XlRVYCNAAAAAElFTkSuQmCC"

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

const input = __webpack_require__(4);
const tick = __webpack_require__(5);

__webpack_require__(3);

const PLAYER_SPEED = 0.001;
const PLAYER_MAX_HEIGHT = 100;
const PLAYER_WIDTH = 6;
const PLAYER_HEIGHT = 8;

let meta = document.createElement("meta");
meta.name = "viewport";
meta.content = "initial-scale = 1.0,maximum-scale = 1.0";
document.head.appendChild(meta);

let music = new Audio(__webpack_require__(1));
music.loop = true;
music.play();
music.volume = 0;

let jumpSound = new Audio(__webpack_require__(2));
jumpSound.volume = 0;

let doJumpSound = function() {
	jumpSound.volume = music.volume;
	jumpSound.currentTime = 0;
	jumpSound.play();
};

let crate = document.createElement("div");
crate.classList.add("crate");

let playerContainer = document.createElement("div");
playerContainer.classList.add("player-container");

let canDoubleJump = true;
let player = document.createElement("div");
let playerPosX = 0;
let playerPosY = 0;
let playerVelocityX = 0;
let playerVelocityY = 0;
let updatePlayerPosition = function(deltaTime) {

	playerPosX += playerVelocityX * deltaTime;
	playerPosY += playerVelocityY * deltaTime;

	playerVelocityX /= 1.05;
	playerVelocityY /= 1.05;

	if(playerPosX < 0) {
		playerPosX = 0;
		playerVelocityX = 0;
	} else
	if(playerPosX > 100) {
		playerPosX = 100;
		playerVelocityX = 0;
	}

	if(playerPosY < 0) {
		playerPosY = 0;
		playerVelocityY = 0;
	}

	player.style.transform = `translate3d(
		${playerPosX}vw,
		${-playerPosY}vh,
		0
	)`;

	updatePlayerImage();
};
let incMusicVolume = function(deltaTime) {
	music.volume = Math.min(1, music.volume + (0.001 * deltaTime));
};
let updatePlayerImage = function() {
	if(playerVelocityX < -0.001) {
		player.setAttribute("data-facing", "left");
	} else
	if(playerVelocityX > 0.001) {
		player.setAttribute("data-facing", "right");
	} else {
		player.setAttribute("data-facing", "forward");
	}
};

let calcPlayerSpeed = function() {
	return PLAYER_SPEED * music.volume;
};

player.classList.add("player");
player.style.width = PLAYER_WIDTH + "vh";
player.style.height = PLAYER_HEIGHT + "vh";
player.style.bottom = "0px";
player.style.transformOrigin = "center";

updatePlayerImage();

input.registerHandlers([input.KB_A, input.KB_LEFT], function(deltaTime) {
	playerVelocityX -= deltaTime * calcPlayerSpeed();
	incMusicVolume(deltaTime);
});

input.registerHandlers([input.KB_D, input.KB_RIGHT], function(deltaTime) {
	playerVelocityX += deltaTime * calcPlayerSpeed();
	incMusicVolume(deltaTime);
});

input.registerHandler(input.KB_SPACE, function(deltaTime) {
	if(playerPosY === 0 && music.volume > 0.5) {
		canDoubleJump = playerPosY === 0;
		playerVelocityY += 0.25 * music.volume;
		doJumpSound();
	}

	if(playerVelocityY > 0.1 * music.volume) {
		playerVelocityY += (deltaTime / 1000) * music.volume;
	}

	incMusicVolume(deltaTime);
});

tick.startTicker(function(deltaTime) {
	playerVelocityY -= 10 * (deltaTime/10000);
	updatePlayerPosition(deltaTime);

	music.volume = Math.max(0.05, music.volume - (0.0005 * deltaTime));

	let grayScale = Math.abs(music.volume - 1);
	player.style.filter = `grayscale(${grayScale})`;
});

playerContainer.appendChild(player);
document.body.appendChild(playerContainer);
document.body.appendChild(crate);


/***/ })
/******/ ]);