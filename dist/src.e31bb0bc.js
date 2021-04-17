// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"app/vendor/materialize-src/sass/materialize.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"app/vendor/fontello/css/facebook.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\font\\facebook.woff2":[["facebook.5a9ee458.woff2","app/vendor/fontello/font/facebook.woff2"],"app/vendor/fontello/font/facebook.woff2"],"_css_loader":"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"app/scss/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"../vendor/fontello/css/facebook.css":"app/vendor/fontello/css/facebook.css","_css_loader":"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../node_modules/materialize-css/js/cash.js":[function(require,module,exports) {
/*! cash-dom 1.3.5, https://github.com/kenwheeler/cash @license MIT */
(function (factory) {
  window.cash = factory();
})(function () {
  var doc = document, win = window, ArrayProto = Array.prototype, slice = ArrayProto.slice, filter = ArrayProto.filter, push = ArrayProto.push;

  var noop = function () {}, isFunction = function (item) {
    // @see https://crbug.com/568448
    return typeof item === typeof noop && item.call;
  }, isString = function (item) {
    return typeof item === typeof "";
  };

  var idMatch = /^#[\w-]*$/, classMatch = /^\.[\w-]*$/, htmlMatch = /<.+>/, singlet = /^\w+$/;

  function find(selector, context) {
    context = context || doc;
    var elems = (classMatch.test(selector) ? context.getElementsByClassName(selector.slice(1)) : singlet.test(selector) ? context.getElementsByTagName(selector) : context.querySelectorAll(selector));
    return elems;
  }

  var frag;
  function parseHTML(str) {
    if (!frag) {
      frag = doc.implementation.createHTMLDocument(null);
      var base = frag.createElement("base");
      base.href = doc.location.href;
      frag.head.appendChild(base);
    }

    frag.body.innerHTML = str;

    return frag.body.childNodes;
  }

  function onReady(fn) {
    if (doc.readyState !== "loading") {
      fn();
    } else {
      doc.addEventListener("DOMContentLoaded", fn);
    }
  }

  function Init(selector, context) {
    if (!selector) {
      return this;
    }

    // If already a cash collection, don't do any further processing
    if (selector.cash && selector !== win) {
      return selector;
    }

    var elems = selector, i = 0, length;

    if (isString(selector)) {
      elems = (idMatch.test(selector) ?
      // If an ID use the faster getElementById check
      doc.getElementById(selector.slice(1)) : htmlMatch.test(selector) ?
      // If HTML, parse it into real elements
      parseHTML(selector) :
      // else use `find`
      find(selector, context));

      // If function, use as shortcut for DOM ready
    } else if (isFunction(selector)) {
      onReady(selector);return this;
    }

    if (!elems) {
      return this;
    }

    // If a single DOM element is passed in or received via ID, return the single element
    if (elems.nodeType || elems === win) {
      this[0] = elems;
      this.length = 1;
    } else {
      // Treat like an array and loop through each item.
      length = this.length = elems.length;
      for (; i < length; i++) {
        this[i] = elems[i];
      }
    }

    return this;
  }

  function cash(selector, context) {
    return new Init(selector, context);
  }

  var fn = cash.fn = cash.prototype = Init.prototype = { // jshint ignore:line
    cash: true,
    length: 0,
    push: push,
    splice: ArrayProto.splice,
    map: ArrayProto.map,
    init: Init
  };

  Object.defineProperty(fn, "constructor", { value: cash });

  cash.parseHTML = parseHTML;
  cash.noop = noop;
  cash.isFunction = isFunction;
  cash.isString = isString;

  cash.extend = fn.extend = function (target) {
    target = target || {};

    var args = slice.call(arguments), length = args.length, i = 1;

    if (args.length === 1) {
      target = this;
      i = 0;
    }

    for (; i < length; i++) {
      if (!args[i]) {
        continue;
      }
      for (var key in args[i]) {
        if (args[i].hasOwnProperty(key)) {
          target[key] = args[i][key];
        }
      }
    }

    return target;
  };

  function each(collection, callback) {
    var l = collection.length, i = 0;

    for (; i < l; i++) {
      if (callback.call(collection[i], collection[i], i, collection) === false) {
        break;
      }
    }
  }

  function matches(el, selector) {
    var m = el && (el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector || el.oMatchesSelector);
    return !!m && m.call(el, selector);
  }

  function getCompareFunction(selector) {
    return (
    /* Use browser's `matches` function if string */
    isString(selector) ? matches :
    /* Match a cash element */
    selector.cash ? function (el) {
      return selector.is(el);
    } :
    /* Direct comparison */
    function (el, selector) {
      return el === selector;
    });
  }

  function unique(collection) {
    return cash(slice.call(collection).filter(function (item, index, self) {
      return self.indexOf(item) === index;
    }));
  }

  cash.extend({
    merge: function (first, second) {
      var len = +second.length, i = first.length, j = 0;

      for (; j < len; i++, j++) {
        first[i] = second[j];
      }

      first.length = i;
      return first;
    },

    each: each,
    matches: matches,
    unique: unique,
    isArray: Array.isArray,
    isNumeric: function (n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    }

  });

  var uid = cash.uid = "_cash" + Date.now();

  function getDataCache(node) {
    return (node[uid] = node[uid] || {});
  }

  function setData(node, key, value) {
    return (getDataCache(node)[key] = value);
  }

  function getData(node, key) {
    var c = getDataCache(node);
    if (c[key] === undefined) {
      c[key] = node.dataset ? node.dataset[key] : cash(node).attr("data-" + key);
    }
    return c[key];
  }

  function removeData(node, key) {
    var c = getDataCache(node);
    if (c) {
      delete c[key];
    } else if (node.dataset) {
      delete node.dataset[key];
    } else {
      cash(node).removeAttr("data-" + name);
    }
  }

  fn.extend({
    data: function (name, value) {
      if (isString(name)) {
        return (value === undefined ? getData(this[0], name) : this.each(function (v) {
          return setData(v, name, value);
        }));
      }

      for (var key in name) {
        this.data(key, name[key]);
      }

      return this;
    },

    removeData: function (key) {
      return this.each(function (v) {
        return removeData(v, key);
      });
    }

  });

  var notWhiteMatch = /\S+/g;

  function getClasses(c) {
    return isString(c) && c.match(notWhiteMatch);
  }

  function hasClass(v, c) {
    return (v.classList ? v.classList.contains(c) : new RegExp("(^| )" + c + "( |$)", "gi").test(v.className));
  }

  function addClass(v, c, spacedName) {
    if (v.classList) {
      v.classList.add(c);
    } else if (spacedName.indexOf(" " + c + " ")) {
      v.className += " " + c;
    }
  }

  function removeClass(v, c) {
    if (v.classList) {
      v.classList.remove(c);
    } else {
      v.className = v.className.replace(c, "");
    }
  }

  fn.extend({
    addClass: function (c) {
      var classes = getClasses(c);

      return (classes ? this.each(function (v) {
        var spacedName = " " + v.className + " ";
        each(classes, function (c) {
          addClass(v, c, spacedName);
        });
      }) : this);
    },

    attr: function (name, value) {
      if (!name) {
        return undefined;
      }

      if (isString(name)) {
        if (value === undefined) {
          return this[0] ? this[0].getAttribute ? this[0].getAttribute(name) : this[0][name] : undefined;
        }

        return this.each(function (v) {
          if (v.setAttribute) {
            v.setAttribute(name, value);
          } else {
            v[name] = value;
          }
        });
      }

      for (var key in name) {
        this.attr(key, name[key]);
      }

      return this;
    },

    hasClass: function (c) {
      var check = false, classes = getClasses(c);
      if (classes && classes.length) {
        this.each(function (v) {
          check = hasClass(v, classes[0]);
          return !check;
        });
      }
      return check;
    },

    prop: function (name, value) {
      if (isString(name)) {
        return (value === undefined ? this[0][name] : this.each(function (v) {
          v[name] = value;
        }));
      }

      for (var key in name) {
        this.prop(key, name[key]);
      }

      return this;
    },

    removeAttr: function (name) {
      return this.each(function (v) {
        if (v.removeAttribute) {
          v.removeAttribute(name);
        } else {
          delete v[name];
        }
      });
    },

    removeClass: function (c) {
      if (!arguments.length) {
        return this.attr("class", "");
      }
      var classes = getClasses(c);
      return (classes ? this.each(function (v) {
        each(classes, function (c) {
          removeClass(v, c);
        });
      }) : this);
    },

    removeProp: function (name) {
      return this.each(function (v) {
        delete v[name];
      });
    },

    toggleClass: function (c, state) {
      if (state !== undefined) {
        return this[state ? "addClass" : "removeClass"](c);
      }
      var classes = getClasses(c);
      return (classes ? this.each(function (v) {
        var spacedName = " " + v.className + " ";
        each(classes, function (c) {
          if (hasClass(v, c)) {
            removeClass(v, c);
          } else {
            addClass(v, c, spacedName);
          }
        });
      }) : this);
    } });

  fn.extend({
    add: function (selector, context) {
      return unique(cash.merge(this, cash(selector, context)));
    },

    each: function (callback) {
      each(this, callback);
      return this;
    },

    eq: function (index) {
      return cash(this.get(index));
    },

    filter: function (selector) {
      if (!selector) {
        return this;
      }

      var comparator = (isFunction(selector) ? selector : getCompareFunction(selector));

      return cash(filter.call(this, function (e) {
        return comparator(e, selector);
      }));
    },

    first: function () {
      return this.eq(0);
    },

    get: function (index) {
      if (index === undefined) {
        return slice.call(this);
      }
      return (index < 0 ? this[index + this.length] : this[index]);
    },

    index: function (elem) {
      var child = elem ? cash(elem)[0] : this[0], collection = elem ? this : cash(child).parent().children();
      return slice.call(collection).indexOf(child);
    },

    last: function () {
      return this.eq(-1);
    }

  });

  var camelCase = (function () {
    var camelRegex = /(?:^\w|[A-Z]|\b\w)/g, whiteSpace = /[\s-_]+/g;
    return function (str) {
      return str.replace(camelRegex, function (letter, index) {
        return letter[index === 0 ? "toLowerCase" : "toUpperCase"]();
      }).replace(whiteSpace, "");
    };
  }());

  var getPrefixedProp = (function () {
    var cache = {}, doc = document, div = doc.createElement("div"), style = div.style;

    return function (prop) {
      prop = camelCase(prop);
      if (cache[prop]) {
        return cache[prop];
      }

      var ucProp = prop.charAt(0).toUpperCase() + prop.slice(1), prefixes = ["webkit", "moz", "ms", "o"], props = (prop + " " + (prefixes).join(ucProp + " ") + ucProp).split(" ");

      each(props, function (p) {
        if (p in style) {
          cache[p] = prop = cache[prop] = p;
          return false;
        }
      });

      return cache[prop];
    };
  }());

  cash.prefixedProp = getPrefixedProp;
  cash.camelCase = camelCase;

  fn.extend({
    css: function (prop, value) {
      if (isString(prop)) {
        prop = getPrefixedProp(prop);
        return (arguments.length > 1 ? this.each(function (v) {
          return v.style[prop] = value;
        }) : win.getComputedStyle(this[0])[prop]);
      }

      for (var key in prop) {
        this.css(key, prop[key]);
      }

      return this;
    }

  });

  function compute(el, prop) {
    return parseInt(win.getComputedStyle(el[0], null)[prop], 10) || 0;
  }

  each(["Width", "Height"], function (v) {
    var lower = v.toLowerCase();

    fn[lower] = function () {
      return this[0].getBoundingClientRect()[lower];
    };

    fn["inner" + v] = function () {
      return this[0]["client" + v];
    };

    fn["outer" + v] = function (margins) {
      return this[0]["offset" + v] + (margins ? compute(this, "margin" + (v === "Width" ? "Left" : "Top")) + compute(this, "margin" + (v === "Width" ? "Right" : "Bottom")) : 0);
    };
  });

  function registerEvent(node, eventName, callback) {
    var eventCache = getData(node, "_cashEvents") || setData(node, "_cashEvents", {});
    eventCache[eventName] = eventCache[eventName] || [];
    eventCache[eventName].push(callback);
    node.addEventListener(eventName, callback);
  }

  function removeEvent(node, eventName, callback) {
    var events = getData(node, "_cashEvents"), eventCache = (events && events[eventName]), index;

    if (!eventCache) {
      return;
    }

    if (callback) {
      node.removeEventListener(eventName, callback);
      index = eventCache.indexOf(callback);
      if (index >= 0) {
        eventCache.splice(index, 1);
      }
    } else {
      each(eventCache, function (event) {
        node.removeEventListener(eventName, event);
      });
      eventCache = [];
    }
  }

  fn.extend({
    off: function (eventName, callback) {
      return this.each(function (v) {
        return removeEvent(v, eventName, callback);
      });
    },

    on: function (eventName, delegate, callback, runOnce) {
      // jshint ignore:line
      var originalCallback;
      if (!isString(eventName)) {
        for (var key in eventName) {
          this.on(key, delegate, eventName[key]);
        }
        return this;
      }

      if (isFunction(delegate)) {
        callback = delegate;
        delegate = null;
      }

      if (eventName === "ready") {
        onReady(callback);
        return this;
      }

      if (delegate) {
        originalCallback = callback;
        callback = function (e) {
          var t = e.target;
          while (!matches(t, delegate)) {
            if (t === this || t === null) {
              return (t = false);
            }

            t = t.parentNode;
          }

          if (t) {
            originalCallback.call(t, e);
          }
        };
      }

      return this.each(function (v) {
        var finalCallback = callback;
        if (runOnce) {
          finalCallback = function () {
            callback.apply(this, arguments);
            removeEvent(v, eventName, finalCallback);
          };
        }
        registerEvent(v, eventName, finalCallback);
      });
    },

    one: function (eventName, delegate, callback) {
      return this.on(eventName, delegate, callback, true);
    },

    ready: onReady,

    /**
     * Modified
     * Triggers browser event
     * @param String eventName
     * @param Object data - Add properties to event object
     */
    trigger: function (eventName, data) {
      if (document.createEvent) {
        let evt = document.createEvent('HTMLEvents');
        evt.initEvent(eventName, true, false);
        evt = this.extend(evt, data);
        return this.each(function (v) {
          return v.dispatchEvent(evt);
        });
      }
    }

  });

  function encode(name, value) {
    return "&" + encodeURIComponent(name) + "=" + encodeURIComponent(value).replace(/%20/g, "+");
  }

  function getSelectMultiple_(el) {
    var values = [];
    each(el.options, function (o) {
      if (o.selected) {
        values.push(o.value);
      }
    });
    return values.length ? values : null;
  }

  function getSelectSingle_(el) {
    var selectedIndex = el.selectedIndex;
    return selectedIndex >= 0 ? el.options[selectedIndex].value : null;
  }

  function getValue(el) {
    var type = el.type;
    if (!type) {
      return null;
    }
    switch (type.toLowerCase()) {
      case "select-one":
        return getSelectSingle_(el);
      case "select-multiple":
        return getSelectMultiple_(el);
      case "radio":
        return (el.checked) ? el.value : null;
      case "checkbox":
        return (el.checked) ? el.value : null;
      default:
        return el.value ? el.value : null;
    }
  }

  fn.extend({
    serialize: function () {
      var query = "";

      each(this[0].elements || this, function (el) {
        if (el.disabled || el.tagName === "FIELDSET") {
          return;
        }
        var name = el.name;
        switch (el.type.toLowerCase()) {
          case "file":
          case "reset":
          case "submit":
          case "button":
            break;
          case "select-multiple":
            var values = getValue(el);
            if (values !== null) {
              each(values, function (value) {
                query += encode(name, value);
              });
            }
            break;
          default:
            var value = getValue(el);
            if (value !== null) {
              query += encode(name, value);
            }
        }
      });

      return query.substr(1);
    },

    val: function (value) {
      if (value === undefined) {
        return getValue(this[0]);
      }

      return this.each(function (v) {
        return v.value = value;
      });
    }

  });

  function insertElement(el, child, prepend) {
    if (prepend) {
      var first = el.childNodes[0];
      el.insertBefore(child, first);
    } else {
      el.appendChild(child);
    }
  }

  function insertContent(parent, child, prepend) {
    var str = isString(child);

    if (!str && child.length) {
      each(child, function (v) {
        return insertContent(parent, v, prepend);
      });
      return;
    }

    each(parent, str ? function (v) {
      return v.insertAdjacentHTML(prepend ? "afterbegin" : "beforeend", child);
    } : function (v, i) {
      return insertElement(v, (i === 0 ? child : child.cloneNode(true)), prepend);
    });
  }

  fn.extend({
    after: function (selector) {
      cash(selector).insertAfter(this);
      return this;
    },

    append: function (content) {
      insertContent(this, content);
      return this;
    },

    appendTo: function (parent) {
      insertContent(cash(parent), this);
      return this;
    },

    before: function (selector) {
      cash(selector).insertBefore(this);
      return this;
    },

    clone: function () {
      return cash(this.map(function (v) {
        return v.cloneNode(true);
      }));
    },

    empty: function () {
      this.html("");
      return this;
    },

    html: function (content) {
      if (content === undefined) {
        return this[0].innerHTML;
      }
      var source = (content.nodeType ? content[0].outerHTML : content);
      return this.each(function (v) {
        return v.innerHTML = source;
      });
    },

    insertAfter: function (selector) {
      var _this = this;


      cash(selector).each(function (el, i) {
        var parent = el.parentNode, sibling = el.nextSibling;
        _this.each(function (v) {
          parent.insertBefore((i === 0 ? v : v.cloneNode(true)), sibling);
        });
      });

      return this;
    },

    insertBefore: function (selector) {
      var _this2 = this;
      cash(selector).each(function (el, i) {
        var parent = el.parentNode;
        _this2.each(function (v) {
          parent.insertBefore((i === 0 ? v : v.cloneNode(true)), el);
        });
      });
      return this;
    },

    prepend: function (content) {
      insertContent(this, content, true);
      return this;
    },

    prependTo: function (parent) {
      insertContent(cash(parent), this, true);
      return this;
    },

    remove: function () {
      return this.each(function (v) {
        if (!!v.parentNode) {
          return v.parentNode.removeChild(v);
        }
      });
    },

    text: function (content) {
      if (content === undefined) {
        return this[0].textContent;
      }
      return this.each(function (v) {
        return v.textContent = content;
      });
    }

  });

  var docEl = doc.documentElement;

  fn.extend({
    position: function () {
      var el = this[0];
      return {
        left: el.offsetLeft,
        top: el.offsetTop
      };
    },

    offset: function () {
      var rect = this[0].getBoundingClientRect();
      return {
        top: rect.top + win.pageYOffset - docEl.clientTop,
        left: rect.left + win.pageXOffset - docEl.clientLeft
      };
    },

    offsetParent: function () {
      return cash(this[0].offsetParent);
    }

  });

  fn.extend({
    children: function (selector) {
      var elems = [];
      this.each(function (el) {
        push.apply(elems, el.children);
      });
      elems = unique(elems);

      return (!selector ? elems : elems.filter(function (v) {
        return matches(v, selector);
      }));
    },

    closest: function (selector) {
      if (!selector || this.length < 1) {
        return cash();
      }
      if (this.is(selector)) {
        return this.filter(selector);
      }
      return this.parent().closest(selector);
    },

    is: function (selector) {
      if (!selector) {
        return false;
      }

      var match = false, comparator = getCompareFunction(selector);

      this.each(function (el) {
        match = comparator(el, selector);
        return !match;
      });

      return match;
    },

    find: function (selector) {
      if (!selector || selector.nodeType) {
        return cash(selector && this.has(selector).length ? selector : null);
      }

      var elems = [];
      this.each(function (el) {
        push.apply(elems, find(selector, el));
      });

      return unique(elems);
    },

    has: function (selector) {
      var comparator = (isString(selector) ? function (el) {
        return find(selector, el).length !== 0;
      } : function (el) {
        return el.contains(selector);
      });

      return this.filter(comparator);
    },

    next: function () {
      return cash(this[0].nextElementSibling);
    },

    not: function (selector) {
      if (!selector) {
        return this;
      }

      var comparator = getCompareFunction(selector);

      return this.filter(function (el) {
        return !comparator(el, selector);
      });
    },

    parent: function () {
      var result = [];

      this.each(function (item) {
        if (item && item.parentNode) {
          result.push(item.parentNode);
        }
      });

      return unique(result);
    },

    parents: function (selector) {
      var last, result = [];

      this.each(function (item) {
        last = item;

        while (last && last.parentNode && last !== doc.body.parentNode) {
          last = last.parentNode;

          if (!selector || (selector && matches(last, selector))) {
            result.push(last);
          }
        }
      });

      return unique(result);
    },

    prev: function () {
      return cash(this[0].previousElementSibling);
    },

    siblings: function (selector) {
      var collection = this.parent().children(selector), el = this[0];

      return collection.filter(function (i) {
        return i !== el;
      });
    }

  });


  return cash;
});

},{}],"../node_modules/materialize-css/js/global.js":[function(require,module,exports) {
var define;
// Required for Meteor package, the use of window prevents export by Meteor
(function(window) {
  if (window.Package) {
    M = {};
  } else {
    window.M = {};
  }

  // Check for jQuery
  M.jQueryLoaded = !!window.jQuery;
})(window);

// AMD
if (typeof define === 'function' && define.amd) {
  define('M', [], function() {
    return M;
  });

  // Common JS
} else if (typeof exports !== 'undefined' && !exports.nodeType) {
  if (typeof module !== 'undefined' && !module.nodeType && module.exports) {
    exports = module.exports = M;
  }
  exports.default = M;
}

M.keys = {
  TAB: 9,
  ENTER: 13,
  ESC: 27,
  ARROW_UP: 38,
  ARROW_DOWN: 40
};

/**
 * TabPress Keydown handler
 */
M.tabPressed = false;
M.keyDown = false;
let docHandleKeydown = function(e) {
  M.keyDown = true;
  if (e.which === M.keys.TAB || e.which === M.keys.ARROW_DOWN || e.which === M.keys.ARROW_UP) {
    M.tabPressed = true;
  }
};
let docHandleKeyup = function(e) {
  M.keyDown = false;
  if (e.which === M.keys.TAB || e.which === M.keys.ARROW_DOWN || e.which === M.keys.ARROW_UP) {
    M.tabPressed = false;
  }
};
let docHandleFocus = function(e) {
  if (M.keyDown) {
    document.body.classList.add('keyboard-focused');
  }
};
let docHandleBlur = function(e) {
  document.body.classList.remove('keyboard-focused');
};
document.addEventListener('keydown', docHandleKeydown, true);
document.addEventListener('keyup', docHandleKeyup, true);
document.addEventListener('focus', docHandleFocus, true);
document.addEventListener('blur', docHandleBlur, true);

/**
 * Initialize jQuery wrapper for plugin
 * @param {Class} plugin  javascript class
 * @param {string} pluginName  jQuery plugin name
 * @param {string} classRef  Class reference name
 */
M.initializeJqueryWrapper = function(plugin, pluginName, classRef) {
  jQuery.fn[pluginName] = function(methodOrOptions) {
    // Call plugin method if valid method name is passed in
    if (plugin.prototype[methodOrOptions]) {
      let params = Array.prototype.slice.call(arguments, 1);

      // Getter methods
      if (methodOrOptions.slice(0, 3) === 'get') {
        let instance = this.first()[0][classRef];
        return instance[methodOrOptions].apply(instance, params);
      }

      // Void methods
      return this.each(function() {
        let instance = this[classRef];
        instance[methodOrOptions].apply(instance, params);
      });

      // Initialize plugin if options or no argument is passed in
    } else if (typeof methodOrOptions === 'object' || !methodOrOptions) {
      plugin.init(this, arguments[0]);
      return this;
    }

    // Return error if an unrecognized  method name is passed in
    jQuery.error(`Method ${methodOrOptions} does not exist on jQuery.${pluginName}`);
  };
};

/**
 * Automatically initialize components
 * @param {Element} context  DOM Element to search within for components
 */
M.AutoInit = function(context) {
  // Use document.body if no context is given
  let root = !!context ? context : document.body;

  let registry = {
    Autocomplete: root.querySelectorAll('.autocomplete:not(.no-autoinit)'),
    Carousel: root.querySelectorAll('.carousel:not(.no-autoinit)'),
    Chips: root.querySelectorAll('.chips:not(.no-autoinit)'),
    Collapsible: root.querySelectorAll('.collapsible:not(.no-autoinit)'),
    Datepicker: root.querySelectorAll('.datepicker:not(.no-autoinit)'),
    Dropdown: root.querySelectorAll('.dropdown-trigger:not(.no-autoinit)'),
    Materialbox: root.querySelectorAll('.materialboxed:not(.no-autoinit)'),
    Modal: root.querySelectorAll('.modal:not(.no-autoinit)'),
    Parallax: root.querySelectorAll('.parallax:not(.no-autoinit)'),
    Pushpin: root.querySelectorAll('.pushpin:not(.no-autoinit)'),
    ScrollSpy: root.querySelectorAll('.scrollspy:not(.no-autoinit)'),
    FormSelect: root.querySelectorAll('select:not(.no-autoinit)'),
    Sidenav: root.querySelectorAll('.sidenav:not(.no-autoinit)'),
    Tabs: root.querySelectorAll('.tabs:not(.no-autoinit)'),
    TapTarget: root.querySelectorAll('.tap-target:not(.no-autoinit)'),
    Timepicker: root.querySelectorAll('.timepicker:not(.no-autoinit)'),
    Tooltip: root.querySelectorAll('.tooltipped:not(.no-autoinit)'),
    FloatingActionButton: root.querySelectorAll('.fixed-action-btn:not(.no-autoinit)')
  };

  for (let pluginName in registry) {
    let plugin = M[pluginName];
    plugin.init(registry[pluginName]);
  }
};

/**
 * Generate approximated selector string for a jQuery object
 * @param {jQuery} obj  jQuery object to be parsed
 * @returns {string}
 */
M.objectSelectorString = function(obj) {
  let tagStr = obj.prop('tagName') || '';
  let idStr = obj.attr('id') || '';
  let classStr = obj.attr('class') || '';
  return (tagStr + idStr + classStr).replace(/\s/g, '');
};

// Unique Random ID
M.guid = (function() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return function() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  };
})();

/**
 * Escapes hash from special characters
 * @param {string} hash  String returned from this.hash
 * @returns {string}
 */
M.escapeHash = function(hash) {
  return hash.replace(/(:|\.|\[|\]|,|=|\/)/g, '\\$1');
};

M.elementOrParentIsFixed = function(element) {
  let $element = $(element);
  let $checkElements = $element.add($element.parents());
  let isFixed = false;
  $checkElements.each(function() {
    if ($(this).css('position') === 'fixed') {
      isFixed = true;
      return false;
    }
  });
  return isFixed;
};

/**
 * @typedef {Object} Edges
 * @property {Boolean} top  If the top edge was exceeded
 * @property {Boolean} right  If the right edge was exceeded
 * @property {Boolean} bottom  If the bottom edge was exceeded
 * @property {Boolean} left  If the left edge was exceeded
 */

/**
 * @typedef {Object} Bounding
 * @property {Number} left  left offset coordinate
 * @property {Number} top  top offset coordinate
 * @property {Number} width
 * @property {Number} height
 */

/**
 * Escapes hash from special characters
 * @param {Element} container  Container element that acts as the boundary
 * @param {Bounding} bounding  element bounding that is being checked
 * @param {Number} offset  offset from edge that counts as exceeding
 * @returns {Edges}
 */
M.checkWithinContainer = function(container, bounding, offset) {
  let edges = {
    top: false,
    right: false,
    bottom: false,
    left: false
  };

  let containerRect = container.getBoundingClientRect();
  // If body element is smaller than viewport, use viewport height instead.
  let containerBottom =
    container === document.body
      ? Math.max(containerRect.bottom, window.innerHeight)
      : containerRect.bottom;

  let scrollLeft = container.scrollLeft;
  let scrollTop = container.scrollTop;

  let scrolledX = bounding.left - scrollLeft;
  let scrolledY = bounding.top - scrollTop;

  // Check for container and viewport for each edge
  if (scrolledX < containerRect.left + offset || scrolledX < offset) {
    edges.left = true;
  }

  if (
    scrolledX + bounding.width > containerRect.right - offset ||
    scrolledX + bounding.width > window.innerWidth - offset
  ) {
    edges.right = true;
  }

  if (scrolledY < containerRect.top + offset || scrolledY < offset) {
    edges.top = true;
  }

  if (
    scrolledY + bounding.height > containerBottom - offset ||
    scrolledY + bounding.height > window.innerHeight - offset
  ) {
    edges.bottom = true;
  }

  return edges;
};

M.checkPossibleAlignments = function(el, container, bounding, offset) {
  let canAlign = {
    top: true,
    right: true,
    bottom: true,
    left: true,
    spaceOnTop: null,
    spaceOnRight: null,
    spaceOnBottom: null,
    spaceOnLeft: null
  };

  let containerAllowsOverflow = getComputedStyle(container).overflow === 'visible';
  let containerRect = container.getBoundingClientRect();
  let containerHeight = Math.min(containerRect.height, window.innerHeight);
  let containerWidth = Math.min(containerRect.width, window.innerWidth);
  let elOffsetRect = el.getBoundingClientRect();

  let scrollLeft = container.scrollLeft;
  let scrollTop = container.scrollTop;

  let scrolledX = bounding.left - scrollLeft;
  let scrolledYTopEdge = bounding.top - scrollTop;
  let scrolledYBottomEdge = bounding.top + elOffsetRect.height - scrollTop;

  // Check for container and viewport for left
  canAlign.spaceOnRight = !containerAllowsOverflow
    ? containerWidth - (scrolledX + bounding.width)
    : window.innerWidth - (elOffsetRect.left + bounding.width);
  if (canAlign.spaceOnRight < 0) {
    canAlign.left = false;
  }

  // Check for container and viewport for Right
  canAlign.spaceOnLeft = !containerAllowsOverflow
    ? scrolledX - bounding.width + elOffsetRect.width
    : elOffsetRect.right - bounding.width;
  if (canAlign.spaceOnLeft < 0) {
    canAlign.right = false;
  }

  // Check for container and viewport for Top
  canAlign.spaceOnBottom = !containerAllowsOverflow
    ? containerHeight - (scrolledYTopEdge + bounding.height + offset)
    : window.innerHeight - (elOffsetRect.top + bounding.height + offset);
  if (canAlign.spaceOnBottom < 0) {
    canAlign.top = false;
  }

  // Check for container and viewport for Bottom
  canAlign.spaceOnTop = !containerAllowsOverflow
    ? scrolledYBottomEdge - (bounding.height - offset)
    : elOffsetRect.bottom - (bounding.height + offset);
  if (canAlign.spaceOnTop < 0) {
    canAlign.bottom = false;
  }

  return canAlign;
};

M.getOverflowParent = function(element) {
  if (element == null) {
    return null;
  }

  if (element === document.body || getComputedStyle(element).overflow !== 'visible') {
    return element;
  }

  return M.getOverflowParent(element.parentElement);
};

/**
 * Gets id of component from a trigger
 * @param {Element} trigger  trigger
 * @returns {string}
 */
M.getIdFromTrigger = function(trigger) {
  let id = trigger.getAttribute('data-target');
  if (!id) {
    id = trigger.getAttribute('href');
    if (id) {
      id = id.slice(1);
    } else {
      id = '';
    }
  }
  return id;
};

/**
 * Multi browser support for document scroll top
 * @returns {Number}
 */
M.getDocumentScrollTop = function() {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
};

/**
 * Multi browser support for document scroll left
 * @returns {Number}
 */
M.getDocumentScrollLeft = function() {
  return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
};

/**
 * @typedef {Object} Edges
 * @property {Boolean} top  If the top edge was exceeded
 * @property {Boolean} right  If the right edge was exceeded
 * @property {Boolean} bottom  If the bottom edge was exceeded
 * @property {Boolean} left  If the left edge was exceeded
 */

/**
 * @typedef {Object} Bounding
 * @property {Number} left  left offset coordinate
 * @property {Number} top  top offset coordinate
 * @property {Number} width
 * @property {Number} height
 */

/**
 * Get time in ms
 * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
 * @type {function}
 * @return {number}
 */
let getTime =
  Date.now ||
  function() {
    return new Date().getTime();
  };

/**
 * Returns a function, that, when invoked, will only be triggered at most once
 * during a given window of time. Normally, the throttled function will run
 * as much as it can, without ever going more than once per `wait` duration;
 * but if you'd like to disable the execution on the leading edge, pass
 * `{leading: false}`. To disable execution on the trailing edge, ditto.
 * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
 * @param {function} func
 * @param {number} wait
 * @param {Object=} options
 * @returns {Function}
 */
M.throttle = function(func, wait, options) {
  let context, args, result;
  let timeout = null;
  let previous = 0;
  options || (options = {});
  let later = function() {
    previous = options.leading === false ? 0 : getTime();
    timeout = null;
    result = func.apply(context, args);
    context = args = null;
  };
  return function() {
    let now = getTime();
    if (!previous && options.leading === false) previous = now;
    let remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0) {
      clearTimeout(timeout);
      timeout = null;
      previous = now;
      result = func.apply(context, args);
      context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
};

},{}],"../node_modules/materialize-css/js/anime.min.js":[function(require,module,exports) {
var global = arguments[3];
/*
 v2.2.0
 2017 Julian Garnier
 Released under the MIT license
*/
var $jscomp={scope:{}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(e,r,p){if(p.get||p.set)throw new TypeError("ES3 does not support getters and setters.");e!=Array.prototype&&e!=Object.prototype&&(e[r]=p.value)};$jscomp.getGlobal=function(e){return"undefined"!=typeof window&&window===e?e:"undefined"!=typeof global&&null!=global?global:e};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.symbolCounter_=0;$jscomp.Symbol=function(e){return $jscomp.SYMBOL_PREFIX+(e||"")+$jscomp.symbolCounter_++};
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var e=$jscomp.global.Symbol.iterator;e||(e=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[e]&&$jscomp.defineProperty(Array.prototype,e,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){}};$jscomp.arrayIterator=function(e){var r=0;return $jscomp.iteratorPrototype(function(){return r<e.length?{done:!1,value:e[r++]}:{done:!0}})};
$jscomp.iteratorPrototype=function(e){$jscomp.initSymbolIterator();e={next:e};e[$jscomp.global.Symbol.iterator]=function(){return this};return e};$jscomp.array=$jscomp.array||{};$jscomp.iteratorFromArray=function(e,r){$jscomp.initSymbolIterator();e instanceof String&&(e+="");var p=0,m={next:function(){if(p<e.length){var u=p++;return{value:r(u,e[u]),done:!1}}m.next=function(){return{done:!0,value:void 0}};return m.next()}};m[Symbol.iterator]=function(){return m};return m};
$jscomp.polyfill=function(e,r,p,m){if(r){p=$jscomp.global;e=e.split(".");for(m=0;m<e.length-1;m++){var u=e[m];u in p||(p[u]={});p=p[u]}e=e[e.length-1];m=p[e];r=r(m);r!=m&&null!=r&&$jscomp.defineProperty(p,e,{configurable:!0,writable:!0,value:r})}};$jscomp.polyfill("Array.prototype.keys",function(e){return e?e:function(){return $jscomp.iteratorFromArray(this,function(e){return e})}},"es6-impl","es3");var $jscomp$this=this;
(function(r){M.anime=r()})(function(){function e(a){if(!h.col(a))try{return document.querySelectorAll(a)}catch(c){}}function r(a,c){for(var d=a.length,b=2<=arguments.length?arguments[1]:void 0,f=[],n=0;n<d;n++)if(n in a){var k=a[n];c.call(b,k,n,a)&&f.push(k)}return f}function p(a){return a.reduce(function(a,d){return a.concat(h.arr(d)?p(d):d)},[])}function m(a){if(h.arr(a))return a;
h.str(a)&&(a=e(a)||a);return a instanceof NodeList||a instanceof HTMLCollection?[].slice.call(a):[a]}function u(a,c){return a.some(function(a){return a===c})}function C(a){var c={},d;for(d in a)c[d]=a[d];return c}function D(a,c){var d=C(a),b;for(b in a)d[b]=c.hasOwnProperty(b)?c[b]:a[b];return d}function z(a,c){var d=C(a),b;for(b in c)d[b]=h.und(a[b])?c[b]:a[b];return d}function T(a){a=a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(a,c,d,k){return c+c+d+d+k+k});var c=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
a=parseInt(c[1],16);var d=parseInt(c[2],16),c=parseInt(c[3],16);return"rgba("+a+","+d+","+c+",1)"}function U(a){function c(a,c,b){0>b&&(b+=1);1<b&&--b;return b<1/6?a+6*(c-a)*b:.5>b?c:b<2/3?a+(c-a)*(2/3-b)*6:a}var d=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(a)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(a);a=parseInt(d[1])/360;var b=parseInt(d[2])/100,f=parseInt(d[3])/100,d=d[4]||1;if(0==b)f=b=a=f;else{var n=.5>f?f*(1+b):f+b-f*b,k=2*f-n,f=c(k,n,a+1/3),b=c(k,n,a);a=c(k,n,a-1/3)}return"rgba("+
255*f+","+255*b+","+255*a+","+d+")"}function y(a){if(a=/([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(a))return a[2]}function V(a){if(-1<a.indexOf("translate")||"perspective"===a)return"px";if(-1<a.indexOf("rotate")||-1<a.indexOf("skew"))return"deg"}function I(a,c){return h.fnc(a)?a(c.target,c.id,c.total):a}function E(a,c){if(c in a.style)return getComputedStyle(a).getPropertyValue(c.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())||"0"}function J(a,c){if(h.dom(a)&&
u(W,c))return"transform";if(h.dom(a)&&(a.getAttribute(c)||h.svg(a)&&a[c]))return"attribute";if(h.dom(a)&&"transform"!==c&&E(a,c))return"css";if(null!=a[c])return"object"}function X(a,c){var d=V(c),d=-1<c.indexOf("scale")?1:0+d;a=a.style.transform;if(!a)return d;for(var b=[],f=[],n=[],k=/(\w+)\((.+?)\)/g;b=k.exec(a);)f.push(b[1]),n.push(b[2]);a=r(n,function(a,b){return f[b]===c});return a.length?a[0]:d}function K(a,c){switch(J(a,c)){case "transform":return X(a,c);case "css":return E(a,c);case "attribute":return a.getAttribute(c)}return a[c]||
0}function L(a,c){var d=/^(\*=|\+=|-=)/.exec(a);if(!d)return a;var b=y(a)||0;c=parseFloat(c);a=parseFloat(a.replace(d[0],""));switch(d[0][0]){case "+":return c+a+b;case "-":return c-a+b;case "*":return c*a+b}}function F(a,c){return Math.sqrt(Math.pow(c.x-a.x,2)+Math.pow(c.y-a.y,2))}function M(a){a=a.points;for(var c=0,d,b=0;b<a.numberOfItems;b++){var f=a.getItem(b);0<b&&(c+=F(d,f));d=f}return c}function N(a){if(a.getTotalLength)return a.getTotalLength();switch(a.tagName.toLowerCase()){case "circle":return 2*
Math.PI*a.getAttribute("r");case "rect":return 2*a.getAttribute("width")+2*a.getAttribute("height");case "line":return F({x:a.getAttribute("x1"),y:a.getAttribute("y1")},{x:a.getAttribute("x2"),y:a.getAttribute("y2")});case "polyline":return M(a);case "polygon":var c=a.points;return M(a)+F(c.getItem(c.numberOfItems-1),c.getItem(0))}}function Y(a,c){function d(b){b=void 0===b?0:b;return a.el.getPointAtLength(1<=c+b?c+b:0)}var b=d(),f=d(-1),n=d(1);switch(a.property){case "x":return b.x;case "y":return b.y;
case "angle":return 180*Math.atan2(n.y-f.y,n.x-f.x)/Math.PI}}function O(a,c){var d=/-?\d*\.?\d+/g,b;b=h.pth(a)?a.totalLength:a;if(h.col(b))if(h.rgb(b)){var f=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(b);b=f?"rgba("+f[1]+",1)":b}else b=h.hex(b)?T(b):h.hsl(b)?U(b):void 0;else f=(f=y(b))?b.substr(0,b.length-f.length):b,b=c&&!/\s/g.test(b)?f+c:f;b+="";return{original:b,numbers:b.match(d)?b.match(d).map(Number):[0],strings:h.str(a)||c?b.split(d):[]}}function P(a){a=a?p(h.arr(a)?a.map(m):m(a)):[];return r(a,
function(a,d,b){return b.indexOf(a)===d})}function Z(a){var c=P(a);return c.map(function(a,b){return{target:a,id:b,total:c.length}})}function aa(a,c){var d=C(c);if(h.arr(a)){var b=a.length;2!==b||h.obj(a[0])?h.fnc(c.duration)||(d.duration=c.duration/b):a={value:a}}return m(a).map(function(a,b){b=b?0:c.delay;a=h.obj(a)&&!h.pth(a)?a:{value:a};h.und(a.delay)&&(a.delay=b);return a}).map(function(a){return z(a,d)})}function ba(a,c){var d={},b;for(b in a){var f=I(a[b],c);h.arr(f)&&(f=f.map(function(a){return I(a,
c)}),1===f.length&&(f=f[0]));d[b]=f}d.duration=parseFloat(d.duration);d.delay=parseFloat(d.delay);return d}function ca(a){return h.arr(a)?A.apply(this,a):Q[a]}function da(a,c){var d;return a.tweens.map(function(b){b=ba(b,c);var f=b.value,e=K(c.target,a.name),k=d?d.to.original:e,k=h.arr(f)?f[0]:k,w=L(h.arr(f)?f[1]:f,k),e=y(w)||y(k)||y(e);b.from=O(k,e);b.to=O(w,e);b.start=d?d.end:a.offset;b.end=b.start+b.delay+b.duration;b.easing=ca(b.easing);b.elasticity=(1E3-Math.min(Math.max(b.elasticity,1),999))/
1E3;b.isPath=h.pth(f);b.isColor=h.col(b.from.original);b.isColor&&(b.round=1);return d=b})}function ea(a,c){return r(p(a.map(function(a){return c.map(function(b){var c=J(a.target,b.name);if(c){var d=da(b,a);b={type:c,property:b.name,animatable:a,tweens:d,duration:d[d.length-1].end,delay:d[0].delay}}else b=void 0;return b})})),function(a){return!h.und(a)})}function R(a,c,d,b){var f="delay"===a;return c.length?(f?Math.min:Math.max).apply(Math,c.map(function(b){return b[a]})):f?b.delay:d.offset+b.delay+
b.duration}function fa(a){var c=D(ga,a),d=D(S,a),b=Z(a.targets),f=[],e=z(c,d),k;for(k in a)e.hasOwnProperty(k)||"targets"===k||f.push({name:k,offset:e.offset,tweens:aa(a[k],d)});a=ea(b,f);return z(c,{children:[],animatables:b,animations:a,duration:R("duration",a,c,d),delay:R("delay",a,c,d)})}function q(a){function c(){return window.Promise&&new Promise(function(a){return p=a})}function d(a){return g.reversed?g.duration-a:a}function b(a){for(var b=0,c={},d=g.animations,f=d.length;b<f;){var e=d[b],
k=e.animatable,h=e.tweens,n=h.length-1,l=h[n];n&&(l=r(h,function(b){return a<b.end})[0]||l);for(var h=Math.min(Math.max(a-l.start-l.delay,0),l.duration)/l.duration,w=isNaN(h)?1:l.easing(h,l.elasticity),h=l.to.strings,p=l.round,n=[],m=void 0,m=l.to.numbers.length,t=0;t<m;t++){var x=void 0,x=l.to.numbers[t],q=l.from.numbers[t],x=l.isPath?Y(l.value,w*x):q+w*(x-q);p&&(l.isColor&&2<t||(x=Math.round(x*p)/p));n.push(x)}if(l=h.length)for(m=h[0],w=0;w<l;w++)p=h[w+1],t=n[w],isNaN(t)||(m=p?m+(t+p):m+(t+" "));
else m=n[0];ha[e.type](k.target,e.property,m,c,k.id);e.currentValue=m;b++}if(b=Object.keys(c).length)for(d=0;d<b;d++)H||(H=E(document.body,"transform")?"transform":"-webkit-transform"),g.animatables[d].target.style[H]=c[d].join(" ");g.currentTime=a;g.progress=a/g.duration*100}function f(a){if(g[a])g[a](g)}function e(){g.remaining&&!0!==g.remaining&&g.remaining--}function k(a){var k=g.duration,n=g.offset,w=n+g.delay,r=g.currentTime,x=g.reversed,q=d(a);if(g.children.length){var u=g.children,v=u.length;
if(q>=g.currentTime)for(var G=0;G<v;G++)u[G].seek(q);else for(;v--;)u[v].seek(q)}if(q>=w||!k)g.began||(g.began=!0,f("begin")),f("run");if(q>n&&q<k)b(q);else if(q<=n&&0!==r&&(b(0),x&&e()),q>=k&&r!==k||!k)b(k),x||e();f("update");a>=k&&(g.remaining?(t=h,"alternate"===g.direction&&(g.reversed=!g.reversed)):(g.pause(),g.completed||(g.completed=!0,f("complete"),"Promise"in window&&(p(),m=c()))),l=0)}a=void 0===a?{}:a;var h,t,l=0,p=null,m=c(),g=fa(a);g.reset=function(){var a=g.direction,c=g.loop;g.currentTime=
0;g.progress=0;g.paused=!0;g.began=!1;g.completed=!1;g.reversed="reverse"===a;g.remaining="alternate"===a&&1===c?2:c;b(0);for(a=g.children.length;a--;)g.children[a].reset()};g.tick=function(a){h=a;t||(t=h);k((l+h-t)*q.speed)};g.seek=function(a){k(d(a))};g.pause=function(){var a=v.indexOf(g);-1<a&&v.splice(a,1);g.paused=!0};g.play=function(){g.paused&&(g.paused=!1,t=0,l=d(g.currentTime),v.push(g),B||ia())};g.reverse=function(){g.reversed=!g.reversed;t=0;l=d(g.currentTime)};g.restart=function(){g.pause();
g.reset();g.play()};g.finished=m;g.reset();g.autoplay&&g.play();return g}var ga={update:void 0,begin:void 0,run:void 0,complete:void 0,loop:1,direction:"normal",autoplay:!0,offset:0},S={duration:1E3,delay:0,easing:"easeOutElastic",elasticity:500,round:0},W="translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "),H,h={arr:function(a){return Array.isArray(a)},obj:function(a){return-1<Object.prototype.toString.call(a).indexOf("Object")},
pth:function(a){return h.obj(a)&&a.hasOwnProperty("totalLength")},svg:function(a){return a instanceof SVGElement},dom:function(a){return a.nodeType||h.svg(a)},str:function(a){return"string"===typeof a},fnc:function(a){return"function"===typeof a},und:function(a){return"undefined"===typeof a},hex:function(a){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a)},rgb:function(a){return/^rgb/.test(a)},hsl:function(a){return/^hsl/.test(a)},col:function(a){return h.hex(a)||h.rgb(a)||h.hsl(a)}},A=function(){function a(a,
d,b){return(((1-3*b+3*d)*a+(3*b-6*d))*a+3*d)*a}return function(c,d,b,f){if(0<=c&&1>=c&&0<=b&&1>=b){var e=new Float32Array(11);if(c!==d||b!==f)for(var k=0;11>k;++k)e[k]=a(.1*k,c,b);return function(k){if(c===d&&b===f)return k;if(0===k)return 0;if(1===k)return 1;for(var h=0,l=1;10!==l&&e[l]<=k;++l)h+=.1;--l;var l=h+(k-e[l])/(e[l+1]-e[l])*.1,n=3*(1-3*b+3*c)*l*l+2*(3*b-6*c)*l+3*c;if(.001<=n){for(h=0;4>h;++h){n=3*(1-3*b+3*c)*l*l+2*(3*b-6*c)*l+3*c;if(0===n)break;var m=a(l,c,b)-k,l=l-m/n}k=l}else if(0===
n)k=l;else{var l=h,h=h+.1,g=0;do m=l+(h-l)/2,n=a(m,c,b)-k,0<n?h=m:l=m;while(1e-7<Math.abs(n)&&10>++g);k=m}return a(k,d,f)}}}}(),Q=function(){function a(a,b){return 0===a||1===a?a:-Math.pow(2,10*(a-1))*Math.sin(2*(a-1-b/(2*Math.PI)*Math.asin(1))*Math.PI/b)}var c="Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),d={In:[[.55,.085,.68,.53],[.55,.055,.675,.19],[.895,.03,.685,.22],[.755,.05,.855,.06],[.47,0,.745,.715],[.95,.05,.795,.035],[.6,.04,.98,.335],[.6,-.28,.735,.045],a],Out:[[.25,
.46,.45,.94],[.215,.61,.355,1],[.165,.84,.44,1],[.23,1,.32,1],[.39,.575,.565,1],[.19,1,.22,1],[.075,.82,.165,1],[.175,.885,.32,1.275],function(b,c){return 1-a(1-b,c)}],InOut:[[.455,.03,.515,.955],[.645,.045,.355,1],[.77,0,.175,1],[.86,0,.07,1],[.445,.05,.55,.95],[1,0,0,1],[.785,.135,.15,.86],[.68,-.55,.265,1.55],function(b,c){return.5>b?a(2*b,c)/2:1-a(-2*b+2,c)/2}]},b={linear:A(.25,.25,.75,.75)},f={},e;for(e in d)f.type=e,d[f.type].forEach(function(a){return function(d,f){b["ease"+a.type+c[f]]=h.fnc(d)?
d:A.apply($jscomp$this,d)}}(f)),f={type:f.type};return b}(),ha={css:function(a,c,d){return a.style[c]=d},attribute:function(a,c,d){return a.setAttribute(c,d)},object:function(a,c,d){return a[c]=d},transform:function(a,c,d,b,f){b[f]||(b[f]=[]);b[f].push(c+"("+d+")")}},v=[],B=0,ia=function(){function a(){B=requestAnimationFrame(c)}function c(c){var b=v.length;if(b){for(var d=0;d<b;)v[d]&&v[d].tick(c),d++;a()}else cancelAnimationFrame(B),B=0}return a}();q.version="2.2.0";q.speed=1;q.running=v;q.remove=
function(a){a=P(a);for(var c=v.length;c--;)for(var d=v[c],b=d.animations,f=b.length;f--;)u(a,b[f].animatable.target)&&(b.splice(f,1),b.length||d.pause())};q.getValue=K;q.path=function(a,c){var d=h.str(a)?e(a)[0]:a,b=c||100;return function(a){return{el:d,property:a,totalLength:N(d)*(b/100)}}};q.setDashoffset=function(a){var c=N(a);a.setAttribute("stroke-dasharray",c);return c};q.bezier=A;q.easings=Q;q.timeline=function(a){var c=q(a);c.pause();c.duration=0;c.add=function(d){c.children.forEach(function(a){a.began=
!0;a.completed=!0});m(d).forEach(function(b){var d=z(b,D(S,a||{}));d.targets=d.targets||a.targets;b=c.duration;var e=d.offset;d.autoplay=!1;d.direction=c.direction;d.offset=h.und(e)?b:L(e,b);c.began=!0;c.completed=!0;c.seek(d.offset);d=q(d);d.began=!0;d.completed=!0;d.duration>b&&(c.duration=d.duration);c.children.push(d)});c.seek(0);c.reset();c.autoplay&&c.restart();return c};return c};q.random=function(a,c){return Math.floor(Math.random()*(c-a+1))+a};return q});

},{}],"../node_modules/@babel/runtime/helpers/typeof.js":[function(require,module,exports) {
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
},{}],"app/vendor/ScrollReveal/scrollreveal.js":[function(require,module,exports) {
var define;
var global = arguments[3];
"use strict";

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*! @license ScrollReveal v4.0.9

	Copyright 2021 Fisssion LLC.

	Licensed under the GNU General Public License 3.0 for
	compatible open source projects and non-commercial use.

	For commercial sites, themes, projects, and applications,
	keep your source code private/proprietary by purchasing
	a commercial license from https://scrollrevealjs.org/
*/
(function (global, factory) {
  (typeof exports === "undefined" ? "undefined" : (0, _typeof2.default)(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global = global || self, global.ScrollReveal = factory());
})(void 0, function () {
  'use strict';

  var defaults = {
    delay: 0,
    distance: '0',
    duration: 600,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    interval: 0,
    opacity: 0,
    origin: 'bottom',
    rotate: {
      x: 0,
      y: 0,
      z: 0
    },
    scale: 1,
    cleanup: false,
    container: document.documentElement,
    desktop: true,
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.0,
    viewOffset: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    afterReset: function afterReset() {},
    afterReveal: function afterReveal() {},
    beforeReset: function beforeReset() {},
    beforeReveal: function beforeReveal() {}
  };

  function failure() {
    document.documentElement.classList.remove('sr');
    return {
      clean: function clean() {},
      destroy: function destroy() {},
      reveal: function reveal() {},
      sync: function sync() {},

      get noop() {
        return true;
      }

    };
  }

  function success() {
    document.documentElement.classList.add('sr');

    if (document.body) {
      document.body.style.height = '100%';
    } else {
      document.addEventListener('DOMContentLoaded', function () {
        document.body.style.height = '100%';
      });
    }
  }

  var mount = {
    success: success,
    failure: failure
  };
  /*! @license is-dom-node v1.0.4
  		Copyright 2018 Fisssion LLC.
  		Permission is hereby granted, free of charge, to any person obtaining a copy
  	of this software and associated documentation files (the "Software"), to deal
  	in the Software without restriction, including without limitation the rights
  	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  	copies of the Software, and to permit persons to whom the Software is
  	furnished to do so, subject to the following conditions:
  		The above copyright notice and this permission notice shall be included in all
  	copies or substantial portions of the Software.
  		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  	SOFTWARE.
  	*/

  function isDomNode(x) {
    return (0, _typeof2.default)(window.Node) === 'object' ? x instanceof window.Node : x !== null && (0, _typeof2.default)(x) === 'object' && typeof x.nodeType === 'number' && typeof x.nodeName === 'string';
  }
  /*! @license is-dom-node-list v1.2.1
  		Copyright 2018 Fisssion LLC.
  		Permission is hereby granted, free of charge, to any person obtaining a copy
  	of this software and associated documentation files (the "Software"), to deal
  	in the Software without restriction, including without limitation the rights
  	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  	copies of the Software, and to permit persons to whom the Software is
  	furnished to do so, subject to the following conditions:
  		The above copyright notice and this permission notice shall be included in all
  	copies or substantial portions of the Software.
  		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  	SOFTWARE.
  	*/


  function isDomNodeList(x) {
    var prototypeToString = Object.prototype.toString.call(x);
    var regex = /^\[object (HTMLCollection|NodeList|Object)\]$/;
    return (0, _typeof2.default)(window.NodeList) === 'object' ? x instanceof window.NodeList : x !== null && (0, _typeof2.default)(x) === 'object' && typeof x.length === 'number' && regex.test(prototypeToString) && (x.length === 0 || isDomNode(x[0]));
  }
  /*! @license Tealight v0.3.6
  		Copyright 2018 Fisssion LLC.
  		Permission is hereby granted, free of charge, to any person obtaining a copy
  	of this software and associated documentation files (the "Software"), to deal
  	in the Software without restriction, including without limitation the rights
  	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  	copies of the Software, and to permit persons to whom the Software is
  	furnished to do so, subject to the following conditions:
  		The above copyright notice and this permission notice shall be included in all
  	copies or substantial portions of the Software.
  		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  	SOFTWARE.
  	*/


  function tealight(target, context) {
    if (context === void 0) {
      context = document;
    }

    if (target instanceof Array) {
      return target.filter(isDomNode);
    }

    if (isDomNode(target)) {
      return [target];
    }

    if (isDomNodeList(target)) {
      return Array.prototype.slice.call(target);
    }

    if (typeof target === "string") {
      try {
        var query = context.querySelectorAll(target);
        return Array.prototype.slice.call(query);
      } catch (err) {
        return [];
      }
    }

    return [];
  }

  function isObject(x) {
    return x !== null && x instanceof Object && (x.constructor === Object || Object.prototype.toString.call(x) === '[object Object]');
  }

  function each(collection, callback) {
    if (isObject(collection)) {
      var keys = Object.keys(collection);
      return keys.forEach(function (key) {
        return callback(collection[key], key, collection);
      });
    }

    if (collection instanceof Array) {
      return collection.forEach(function (item, i) {
        return callback(item, i, collection);
      });
    }

    throw new TypeError('Expected either an array or object literal.');
  }

  function logger(message) {
    var details = [],
        len = arguments.length - 1;

    while (len-- > 0) {
      details[len] = arguments[len + 1];
    }

    if (this.constructor.debug && console) {
      var report = "%cScrollReveal: " + message;
      details.forEach(function (detail) {
        return report += "\n — " + detail;
      });
      console.log(report, 'color: #ea654b;'); // eslint-disable-line no-console
    }
  }

  function rinse() {
    var this$1 = this;

    var struct = function struct() {
      return {
        active: [],
        stale: []
      };
    };

    var elementIds = struct();
    var sequenceIds = struct();
    var containerIds = struct();
    /**
     * Take stock of active element IDs.
     */

    try {
      each(tealight('[data-sr-id]'), function (node) {
        var id = parseInt(node.getAttribute('data-sr-id'));
        elementIds.active.push(id);
      });
    } catch (e) {
      throw e;
    }
    /**
     * Destroy stale elements.
     */


    each(this.store.elements, function (element) {
      if (elementIds.active.indexOf(element.id) === -1) {
        elementIds.stale.push(element.id);
      }
    });
    each(elementIds.stale, function (staleId) {
      return delete this$1.store.elements[staleId];
    });
    /**
     * Take stock of active container and sequence IDs.
     */

    each(this.store.elements, function (element) {
      if (containerIds.active.indexOf(element.containerId) === -1) {
        containerIds.active.push(element.containerId);
      }

      if (element.hasOwnProperty('sequence')) {
        if (sequenceIds.active.indexOf(element.sequence.id) === -1) {
          sequenceIds.active.push(element.sequence.id);
        }
      }
    });
    /**
     * Destroy stale containers.
     */

    each(this.store.containers, function (container) {
      if (containerIds.active.indexOf(container.id) === -1) {
        containerIds.stale.push(container.id);
      }
    });
    each(containerIds.stale, function (staleId) {
      var stale = this$1.store.containers[staleId].node;
      stale.removeEventListener('scroll', this$1.delegate);
      stale.removeEventListener('resize', this$1.delegate);
      delete this$1.store.containers[staleId];
    });
    /**
     * Destroy stale sequences.
     */

    each(this.store.sequences, function (sequence) {
      if (sequenceIds.active.indexOf(sequence.id) === -1) {
        sequenceIds.stale.push(sequence.id);
      }
    });
    each(sequenceIds.stale, function (staleId) {
      return delete this$1.store.sequences[staleId];
    });
  }
  /*! @license Rematrix v0.3.0
  		Copyright 2018 Julian Lloyd.
  		Permission is hereby granted, free of charge, to any person obtaining a copy
  	of this software and associated documentation files (the "Software"), to deal
  	in the Software without restriction, including without limitation the rights
  	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  	copies of the Software, and to permit persons to whom the Software is
  	furnished to do so, subject to the following conditions:
  		The above copyright notice and this permission notice shall be included in
  	all copies or substantial portions of the Software.
  		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  	THE SOFTWARE.
  */

  /**
   * @module Rematrix
   */

  /**
   * Transformation matrices in the browser come in two flavors:
   *
   *  - `matrix` using 6 values (short)
   *  - `matrix3d` using 16 values (long)
   *
   * This utility follows this [conversion guide](https://goo.gl/EJlUQ1)
   * to expand short form matrices to their equivalent long form.
   *
   * @param  {array} source - Accepts both short and long form matrices.
   * @return {array}
   */


  function format(source) {
    if (source.constructor !== Array) {
      throw new TypeError('Expected array.');
    }

    if (source.length === 16) {
      return source;
    }

    if (source.length === 6) {
      var matrix = identity();
      matrix[0] = source[0];
      matrix[1] = source[1];
      matrix[4] = source[2];
      matrix[5] = source[3];
      matrix[12] = source[4];
      matrix[13] = source[5];
      return matrix;
    }

    throw new RangeError('Expected array with either 6 or 16 values.');
  }
  /**
   * Returns a matrix representing no transformation. The product of any matrix
   * multiplied by the identity matrix will be the original matrix.
   *
   * > **Tip:** Similar to how `5 * 1 === 5`, where `1` is the identity.
   *
   * @return {array}
   */


  function identity() {
    var matrix = [];

    for (var i = 0; i < 16; i++) {
      i % 5 == 0 ? matrix.push(1) : matrix.push(0);
    }

    return matrix;
  }
  /**
   * Returns a 4x4 matrix describing the combined transformations
   * of both arguments.
   *
   * > **Note:** Order is very important. For example, rotating 45°
   * along the Z-axis, followed by translating 500 pixels along the
   * Y-axis... is not the same as translating 500 pixels along the
   * Y-axis, followed by rotating 45° along on the Z-axis.
   *
   * @param  {array} m - Accepts both short and long form matrices.
   * @param  {array} x - Accepts both short and long form matrices.
   * @return {array}
   */


  function multiply(m, x) {
    var fm = format(m);
    var fx = format(x);
    var product = [];

    for (var i = 0; i < 4; i++) {
      var row = [fm[i], fm[i + 4], fm[i + 8], fm[i + 12]];

      for (var j = 0; j < 4; j++) {
        var k = j * 4;
        var col = [fx[k], fx[k + 1], fx[k + 2], fx[k + 3]];
        var result = row[0] * col[0] + row[1] * col[1] + row[2] * col[2] + row[3] * col[3];
        product[i + k] = result;
      }
    }

    return product;
  }
  /**
   * Attempts to return a 4x4 matrix describing the CSS transform
   * matrix passed in, but will return the identity matrix as a
   * fallback.
   *
   * > **Tip:** This method is used to convert a CSS matrix (retrieved as a
   * `string` from computed styles) to its equivalent array format.
   *
   * @param  {string} source - `matrix` or `matrix3d` CSS Transform value.
   * @return {array}
   */


  function parse(source) {
    if (typeof source === 'string') {
      var match = source.match(/matrix(3d)?\(([^)]+)\)/);

      if (match) {
        var raw = match[2].split(', ').map(parseFloat);
        return format(raw);
      }
    }

    return identity();
  }
  /**
   * Returns a 4x4 matrix describing X-axis rotation.
   *
   * @param  {number} angle - Measured in degrees.
   * @return {array}
   */


  function rotateX(angle) {
    var theta = Math.PI / 180 * angle;
    var matrix = identity();
    matrix[5] = matrix[10] = Math.cos(theta);
    matrix[6] = matrix[9] = Math.sin(theta);
    matrix[9] *= -1;
    return matrix;
  }
  /**
   * Returns a 4x4 matrix describing Y-axis rotation.
   *
   * @param  {number} angle - Measured in degrees.
   * @return {array}
   */


  function rotateY(angle) {
    var theta = Math.PI / 180 * angle;
    var matrix = identity();
    matrix[0] = matrix[10] = Math.cos(theta);
    matrix[2] = matrix[8] = Math.sin(theta);
    matrix[2] *= -1;
    return matrix;
  }
  /**
   * Returns a 4x4 matrix describing Z-axis rotation.
   *
   * @param  {number} angle - Measured in degrees.
   * @return {array}
   */


  function rotateZ(angle) {
    var theta = Math.PI / 180 * angle;
    var matrix = identity();
    matrix[0] = matrix[5] = Math.cos(theta);
    matrix[1] = matrix[4] = Math.sin(theta);
    matrix[4] *= -1;
    return matrix;
  }
  /**
   * Returns a 4x4 matrix describing 2D scaling. The first argument
   * is used for both X and Y-axis scaling, unless an optional
   * second argument is provided to explicitly define Y-axis scaling.
   *
   * @param  {number} scalar    - Decimal multiplier.
   * @param  {number} [scalarY] - Decimal multiplier.
   * @return {array}
   */


  function scale(scalar, scalarY) {
    var matrix = identity();
    matrix[0] = scalar;
    matrix[5] = typeof scalarY === 'number' ? scalarY : scalar;
    return matrix;
  }
  /**
   * Returns a 4x4 matrix describing X-axis translation.
   *
   * @param  {number} distance - Measured in pixels.
   * @return {array}
   */


  function translateX(distance) {
    var matrix = identity();
    matrix[12] = distance;
    return matrix;
  }
  /**
   * Returns a 4x4 matrix describing Y-axis translation.
   *
   * @param  {number} distance - Measured in pixels.
   * @return {array}
   */


  function translateY(distance) {
    var matrix = identity();
    matrix[13] = distance;
    return matrix;
  }

  var getPrefixedCssProp = function () {
    var properties = {};
    var style = document.documentElement.style;

    function getPrefixedCssProperty(name, source) {
      if (source === void 0) source = style;

      if (name && typeof name === 'string') {
        if (properties[name]) {
          return properties[name];
        }

        if (typeof source[name] === 'string') {
          return properties[name] = name;
        }

        if (typeof source["-webkit-" + name] === 'string') {
          return properties[name] = "-webkit-" + name;
        }

        throw new RangeError("Unable to find \"" + name + "\" style property.");
      }

      throw new TypeError('Expected a string.');
    }

    getPrefixedCssProperty.clearCache = function () {
      return properties = {};
    };

    return getPrefixedCssProperty;
  }();

  function style(element) {
    var computed = window.getComputedStyle(element.node);
    var position = computed.position;
    var config = element.config;
    /**
     * Generate inline styles
     */

    var inline = {};
    var inlineStyle = element.node.getAttribute('style') || '';
    var inlineMatch = inlineStyle.match(/[\w-]+\s*:\s*[^;]+\s*/gi) || [];
    inline.computed = inlineMatch ? inlineMatch.map(function (m) {
      return m.trim();
    }).join('; ') + ';' : '';
    inline.generated = inlineMatch.some(function (m) {
      return m.match(/visibility\s?:\s?visible/i);
    }) ? inline.computed : inlineMatch.concat(['visibility: visible']).map(function (m) {
      return m.trim();
    }).join('; ') + ';';
    /**
     * Generate opacity styles
     */

    var computedOpacity = parseFloat(computed.opacity);
    var configOpacity = !isNaN(parseFloat(config.opacity)) ? parseFloat(config.opacity) : parseFloat(computed.opacity);
    var opacity = {
      computed: computedOpacity !== configOpacity ? "opacity: " + computedOpacity + ";" : '',
      generated: computedOpacity !== configOpacity ? "opacity: " + configOpacity + ";" : ''
    };
    /**
     * Generate transformation styles
     */

    var transformations = [];

    if (parseFloat(config.distance)) {
      var axis = config.origin === 'top' || config.origin === 'bottom' ? 'Y' : 'X';
      /**
       * Let’s make sure our our pixel distances are negative for top and left.
       * e.g. { origin: 'top', distance: '25px' } starts at `top: -25px` in CSS.
       */

      var distance = config.distance;

      if (config.origin === 'top' || config.origin === 'left') {
        distance = /^-/.test(distance) ? distance.substr(1) : "-" + distance;
      }

      var ref = distance.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g);
      var value = ref[0];
      var unit = ref[1];

      switch (unit) {
        case 'em':
          distance = parseInt(computed.fontSize) * value;
          break;

        case 'px':
          distance = value;
          break;

        case '%':
          /**
           * Here we use `getBoundingClientRect` instead of
           * the existing data attached to `element.geometry`
           * because only the former includes any transformations
           * current applied to the element.
           *
           * If that behavior ends up being unintuitive, this
           * logic could instead utilize `element.geometry.height`
           * and `element.geoemetry.width` for the distance calculation
           */
          distance = axis === 'Y' ? element.node.getBoundingClientRect().height * value / 100 : element.node.getBoundingClientRect().width * value / 100;
          break;

        default:
          throw new RangeError('Unrecognized or missing distance unit.');
      }

      if (axis === 'Y') {
        transformations.push(translateY(distance));
      } else {
        transformations.push(translateX(distance));
      }
    }

    if (config.rotate.x) {
      transformations.push(rotateX(config.rotate.x));
    }

    if (config.rotate.y) {
      transformations.push(rotateY(config.rotate.y));
    }

    if (config.rotate.z) {
      transformations.push(rotateZ(config.rotate.z));
    }

    if (config.scale !== 1) {
      if (config.scale === 0) {
        /**
         * The CSS Transforms matrix interpolation specification
         * basically disallows transitions of non-invertible
         * matrixes, which means browsers won't transition
         * elements with zero scale.
         *
         * That’s inconvenient for the API and developer
         * experience, so we simply nudge their value
         * slightly above zero; this allows browsers
         * to transition our element as expected.
         *
         * `0.0002` was the smallest number
         * that performed across browsers.
         */
        transformations.push(scale(0.0002));
      } else {
        transformations.push(scale(config.scale));
      }
    }

    var transform = {};

    if (transformations.length) {
      transform.property = getPrefixedCssProp('transform');
      /**
       * The default computed transform value should be one of:
       * undefined || 'none' || 'matrix()' || 'matrix3d()'
       */

      transform.computed = {
        raw: computed[transform.property],
        matrix: parse(computed[transform.property])
      };
      transformations.unshift(transform.computed.matrix);
      var product = transformations.reduce(multiply);
      transform.generated = {
        initial: transform.property + ": matrix3d(" + product.join(', ') + ");",
        final: transform.property + ": matrix3d(" + transform.computed.matrix.join(', ') + ");"
      };
    } else {
      transform.generated = {
        initial: '',
        final: ''
      };
    }
    /**
     * Generate transition styles
     */


    var transition = {};

    if (opacity.generated || transform.generated.initial) {
      transition.property = getPrefixedCssProp('transition');
      transition.computed = computed[transition.property];
      transition.fragments = [];
      var delay = config.delay;
      var duration = config.duration;
      var easing = config.easing;

      if (opacity.generated) {
        transition.fragments.push({
          delayed: "opacity " + duration / 1000 + "s " + easing + " " + delay / 1000 + "s",
          instant: "opacity " + duration / 1000 + "s " + easing + " 0s"
        });
      }

      if (transform.generated.initial) {
        transition.fragments.push({
          delayed: transform.property + " " + duration / 1000 + "s " + easing + " " + delay / 1000 + "s",
          instant: transform.property + " " + duration / 1000 + "s " + easing + " 0s"
        });
      }
      /**
       * The default computed transition property should be undefined, or one of:
       * '' || 'none 0s ease 0s' || 'all 0s ease 0s' || 'all 0s 0s cubic-bezier()'
       */


      var hasCustomTransition = transition.computed && !transition.computed.match(/all 0s|none 0s/);

      if (hasCustomTransition) {
        transition.fragments.unshift({
          delayed: transition.computed,
          instant: transition.computed
        });
      }

      var composed = transition.fragments.reduce(function (composition, fragment, i) {
        composition.delayed += i === 0 ? fragment.delayed : ", " + fragment.delayed;
        composition.instant += i === 0 ? fragment.instant : ", " + fragment.instant;
        return composition;
      }, {
        delayed: '',
        instant: ''
      });
      transition.generated = {
        delayed: transition.property + ": " + composed.delayed + ";",
        instant: transition.property + ": " + composed.instant + ";"
      };
    } else {
      transition.generated = {
        delayed: '',
        instant: ''
      };
    }

    return {
      inline: inline,
      opacity: opacity,
      position: position,
      transform: transform,
      transition: transition
    };
  }
  /**
   * apply a CSS string to an element using the CSSOM (element.style) rather
   * than setAttribute, which may violate the content security policy.
   *
   * @param {Node}   [el]  Element to receive styles.
   * @param {string} [declaration] Styles to apply.
   */


  function applyStyle(el, declaration) {
    declaration.split(';').forEach(function (pair) {
      var ref = pair.split(':');
      var property = ref[0];
      var value = ref.slice(1);

      if (property && value) {
        el.style[property.trim()] = value.join(':');
      }
    });
  }

  function clean(target) {
    var this$1 = this;
    var dirty;

    try {
      each(tealight(target), function (node) {
        var id = node.getAttribute('data-sr-id');

        if (id !== null) {
          dirty = true;
          var element = this$1.store.elements[id];

          if (element.callbackTimer) {
            window.clearTimeout(element.callbackTimer.clock);
          }

          applyStyle(element.node, element.styles.inline.generated);
          node.removeAttribute('data-sr-id');
          delete this$1.store.elements[id];
        }
      });
    } catch (e) {
      return logger.call(this, 'Clean failed.', e.message);
    }

    if (dirty) {
      try {
        rinse.call(this);
      } catch (e) {
        return logger.call(this, 'Clean failed.', e.message);
      }
    }
  }

  function destroy() {
    var this$1 = this;
    /**
     * Remove all generated styles and element ids
     */

    each(this.store.elements, function (element) {
      applyStyle(element.node, element.styles.inline.generated);
      element.node.removeAttribute('data-sr-id');
    });
    /**
     * Remove all event listeners.
     */

    each(this.store.containers, function (container) {
      var target = container.node === document.documentElement ? window : container.node;
      target.removeEventListener('scroll', this$1.delegate);
      target.removeEventListener('resize', this$1.delegate);
    });
    /**
     * Clear all data from the store
     */

    this.store = {
      containers: {},
      elements: {},
      history: [],
      sequences: {}
    };
  }

  function deepAssign(target) {
    var sources = [],
        len = arguments.length - 1;

    while (len-- > 0) {
      sources[len] = arguments[len + 1];
    }

    if (isObject(target)) {
      each(sources, function (source) {
        each(source, function (data, key) {
          if (isObject(data)) {
            if (!target[key] || !isObject(target[key])) {
              target[key] = {};
            }

            deepAssign(target[key], data);
          } else {
            target[key] = data;
          }
        });
      });
      return target;
    } else {
      throw new TypeError('Target must be an object literal.');
    }
  }

  function isMobile(agent) {
    if (agent === void 0) agent = navigator.userAgent;
    return /Android|iPhone|iPad|iPod/i.test(agent);
  }

  var nextUniqueId = function () {
    var uid = 0;
    return function () {
      return uid++;
    };
  }();

  function initialize() {
    var this$1 = this;
    rinse.call(this);
    each(this.store.elements, function (element) {
      var styles = [element.styles.inline.generated];

      if (element.visible) {
        styles.push(element.styles.opacity.computed);
        styles.push(element.styles.transform.generated.final);
        element.revealed = true;
      } else {
        styles.push(element.styles.opacity.generated);
        styles.push(element.styles.transform.generated.initial);
        element.revealed = false;
      }

      applyStyle(element.node, styles.filter(function (s) {
        return s !== '';
      }).join(' '));
    });
    each(this.store.containers, function (container) {
      var target = container.node === document.documentElement ? window : container.node;
      target.addEventListener('scroll', this$1.delegate);
      target.addEventListener('resize', this$1.delegate);
    });
    /**
     * Manually invoke delegate once to capture
     * element and container dimensions, container
     * scroll position, and trigger any valid reveals
     */

    this.delegate();
    /**
     * Wipe any existing `setTimeout` now
     * that initialization has completed.
     */

    this.initTimeout = null;
  }

  function animate(element, force) {
    if (force === void 0) force = {};
    var pristine = force.pristine || this.pristine;
    var delayed = element.config.useDelay === 'always' || element.config.useDelay === 'onload' && pristine || element.config.useDelay === 'once' && !element.seen;
    var shouldReveal = element.visible && !element.revealed;
    var shouldReset = !element.visible && element.revealed && element.config.reset;

    if (force.reveal || shouldReveal) {
      return triggerReveal.call(this, element, delayed);
    }

    if (force.reset || shouldReset) {
      return triggerReset.call(this, element);
    }
  }

  function triggerReveal(element, delayed) {
    var styles = [element.styles.inline.generated, element.styles.opacity.computed, element.styles.transform.generated.final];

    if (delayed) {
      styles.push(element.styles.transition.generated.delayed);
    } else {
      styles.push(element.styles.transition.generated.instant);
    }

    element.revealed = element.seen = true;
    applyStyle(element.node, styles.filter(function (s) {
      return s !== '';
    }).join(' '));
    registerCallbacks.call(this, element, delayed);
  }

  function triggerReset(element) {
    var styles = [element.styles.inline.generated, element.styles.opacity.generated, element.styles.transform.generated.initial, element.styles.transition.generated.instant];
    element.revealed = false;
    applyStyle(element.node, styles.filter(function (s) {
      return s !== '';
    }).join(' '));
    registerCallbacks.call(this, element);
  }

  function registerCallbacks(element, isDelayed) {
    var this$1 = this;
    var duration = isDelayed ? element.config.duration + element.config.delay : element.config.duration;
    var beforeCallback = element.revealed ? element.config.beforeReveal : element.config.beforeReset;
    var afterCallback = element.revealed ? element.config.afterReveal : element.config.afterReset;
    var elapsed = 0;

    if (element.callbackTimer) {
      elapsed = Date.now() - element.callbackTimer.start;
      window.clearTimeout(element.callbackTimer.clock);
    }

    beforeCallback(element.node);
    element.callbackTimer = {
      start: Date.now(),
      clock: window.setTimeout(function () {
        afterCallback(element.node);
        element.callbackTimer = null;

        if (element.revealed && !element.config.reset && element.config.cleanup) {
          clean.call(this$1, element.node);
        }
      }, duration - elapsed)
    };
  }

  function sequence(element, pristine) {
    if (pristine === void 0) pristine = this.pristine;
    /**
     * We first check if the element should reset.
     */

    if (!element.visible && element.revealed && element.config.reset) {
      return animate.call(this, element, {
        reset: true
      });
    }

    var seq = this.store.sequences[element.sequence.id];
    var i = element.sequence.index;

    if (seq) {
      var visible = new SequenceModel(seq, 'visible', this.store);
      var revealed = new SequenceModel(seq, 'revealed', this.store);
      seq.models = {
        visible: visible,
        revealed: revealed
      };
      /**
       * If the sequence has no revealed members,
       * then we reveal the first visible element
       * within that sequence.
       *
       * The sequence then cues a recursive call
       * in both directions.
       */

      if (!revealed.body.length) {
        var nextId = seq.members[visible.body[0]];
        var nextElement = this.store.elements[nextId];

        if (nextElement) {
          cue.call(this, seq, visible.body[0], -1, pristine);
          cue.call(this, seq, visible.body[0], +1, pristine);
          return animate.call(this, nextElement, {
            reveal: true,
            pristine: pristine
          });
        }
      }
      /**
       * If our element isn’t resetting, we check the
       * element sequence index against the head, and
       * then the foot of the sequence.
       */


      if (!seq.blocked.head && i === [].concat(revealed.head).pop() && i >= [].concat(visible.body).shift()) {
        cue.call(this, seq, i, -1, pristine);
        return animate.call(this, element, {
          reveal: true,
          pristine: pristine
        });
      }

      if (!seq.blocked.foot && i === [].concat(revealed.foot).shift() && i <= [].concat(visible.body).pop()) {
        cue.call(this, seq, i, +1, pristine);
        return animate.call(this, element, {
          reveal: true,
          pristine: pristine
        });
      }
    }
  }

  function Sequence(interval) {
    var i = Math.abs(interval);

    if (!isNaN(i)) {
      this.id = nextUniqueId();
      this.interval = Math.max(i, 16);
      this.members = [];
      this.models = {};
      this.blocked = {
        head: false,
        foot: false
      };
    } else {
      throw new RangeError('Invalid sequence interval.');
    }
  }

  function SequenceModel(seq, prop, store) {
    var this$1 = this;
    this.head = [];
    this.body = [];
    this.foot = [];
    each(seq.members, function (id, index) {
      var element = store.elements[id];

      if (element && element[prop]) {
        this$1.body.push(index);
      }
    });

    if (this.body.length) {
      each(seq.members, function (id, index) {
        var element = store.elements[id];

        if (element && !element[prop]) {
          if (index < this$1.body[0]) {
            this$1.head.push(index);
          } else {
            this$1.foot.push(index);
          }
        }
      });
    }
  }

  function cue(seq, i, direction, pristine) {
    var this$1 = this;
    var blocked = ['head', null, 'foot'][1 + direction];
    var nextId = seq.members[i + direction];
    var nextElement = this.store.elements[nextId];
    seq.blocked[blocked] = true;
    setTimeout(function () {
      seq.blocked[blocked] = false;

      if (nextElement) {
        sequence.call(this$1, nextElement, pristine);
      }
    }, seq.interval);
  }

  function reveal(target, options, syncing) {
    var this$1 = this;
    if (options === void 0) options = {};
    if (syncing === void 0) syncing = false;
    var containerBuffer = [];
    var sequence$$1;
    var interval = options.interval || defaults.interval;

    try {
      if (interval) {
        sequence$$1 = new Sequence(interval);
      }

      var nodes = tealight(target);

      if (!nodes.length) {
        throw new Error('Invalid reveal target.');
      }

      var elements = nodes.reduce(function (elementBuffer, elementNode) {
        var element = {};
        var existingId = elementNode.getAttribute('data-sr-id');

        if (existingId) {
          deepAssign(element, this$1.store.elements[existingId]);
          /**
           * In order to prevent previously generated styles
           * from throwing off the new styles, the style tag
           * has to be reverted to its pre-reveal state.
           */

          applyStyle(element.node, element.styles.inline.computed);
        } else {
          element.id = nextUniqueId();
          element.node = elementNode;
          element.seen = false;
          element.revealed = false;
          element.visible = false;
        }

        var config = deepAssign({}, element.config || this$1.defaults, options);

        if (!config.mobile && isMobile() || !config.desktop && !isMobile()) {
          if (existingId) {
            clean.call(this$1, element);
          }

          return elementBuffer; // skip elements that are disabled
        }

        var containerNode = tealight(config.container)[0];

        if (!containerNode) {
          throw new Error('Invalid container.');
        }

        if (!containerNode.contains(elementNode)) {
          return elementBuffer; // skip elements found outside the container
        }

        var containerId;
        {
          containerId = getContainerId(containerNode, containerBuffer, this$1.store.containers);

          if (containerId === null) {
            containerId = nextUniqueId();
            containerBuffer.push({
              id: containerId,
              node: containerNode
            });
          }
        }
        element.config = config;
        element.containerId = containerId;
        element.styles = style(element);

        if (sequence$$1) {
          element.sequence = {
            id: sequence$$1.id,
            index: sequence$$1.members.length
          };
          sequence$$1.members.push(element.id);
        }

        elementBuffer.push(element);
        return elementBuffer;
      }, []);
      /**
       * Modifying the DOM via setAttribute needs to be handled
       * separately from reading computed styles in the map above
       * for the browser to batch DOM changes (limiting reflows)
       */

      each(elements, function (element) {
        this$1.store.elements[element.id] = element;
        element.node.setAttribute('data-sr-id', element.id);
      });
    } catch (e) {
      return logger.call(this, 'Reveal failed.', e.message);
    }
    /**
     * Now that element set-up is complete...
     * Let’s commit any container and sequence data we have to the store.
     */


    each(containerBuffer, function (container) {
      this$1.store.containers[container.id] = {
        id: container.id,
        node: container.node
      };
    });

    if (sequence$$1) {
      this.store.sequences[sequence$$1.id] = sequence$$1;
    }
    /**
     * If reveal wasn't invoked by sync, we want to
     * make sure to add this call to the history.
     */


    if (syncing !== true) {
      this.store.history.push({
        target: target,
        options: options
      });
      /**
       * Push initialization to the event queue, giving
       * multiple reveal calls time to be interpreted.
       */

      if (this.initTimeout) {
        window.clearTimeout(this.initTimeout);
      }

      this.initTimeout = window.setTimeout(initialize.bind(this), 0);
    }
  }

  function getContainerId(node) {
    var collections = [],
        len = arguments.length - 1;

    while (len-- > 0) {
      collections[len] = arguments[len + 1];
    }

    var id = null;
    each(collections, function (collection) {
      each(collection, function (container) {
        if (id === null && container.node === node) {
          id = container.id;
        }
      });
    });
    return id;
  }
  /**
   * Re-runs the reveal method for each record stored in history,
   * for capturing new content asynchronously loaded into the DOM.
   */


  function sync() {
    var this$1 = this;
    each(this.store.history, function (record) {
      reveal.call(this$1, record.target, record.options, true);
    });
    initialize.call(this);
  }

  var polyfill = function polyfill(x) {
    return (x > 0) - (x < 0) || +x;
  };

  var mathSign = Math.sign || polyfill;
  /*! @license miniraf v1.0.1
  		Copyright 2018 Fisssion LLC.
  		Permission is hereby granted, free of charge, to any person obtaining a copy
  	of this software and associated documentation files (the "Software"), to deal
  	in the Software without restriction, including without limitation the rights
  	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  	copies of the Software, and to permit persons to whom the Software is
  	furnished to do so, subject to the following conditions:
  		The above copyright notice and this permission notice shall be included in all
  	copies or substantial portions of the Software.
  		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  	SOFTWARE.
  	*/

  var polyfill$1 = function () {
    var clock = Date.now();
    return function (callback) {
      var currentTime = Date.now();

      if (currentTime - clock > 16) {
        clock = currentTime;
        callback(currentTime);
      } else {
        setTimeout(function () {
          return polyfill$1(callback);
        }, 0);
      }
    };
  }();

  var miniraf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || polyfill$1;

  function getGeometry(target, isContainer) {
    /**
     * We want to ignore padding and scrollbars for container elements.
     * More information here: https://goo.gl/vOZpbz
     */
    var height = isContainer ? target.node.clientHeight : target.node.offsetHeight;
    var width = isContainer ? target.node.clientWidth : target.node.offsetWidth;
    var offsetTop = 0;
    var offsetLeft = 0;
    var node = target.node;

    do {
      if (!isNaN(node.offsetTop)) {
        offsetTop += node.offsetTop;
      }

      if (!isNaN(node.offsetLeft)) {
        offsetLeft += node.offsetLeft;
      }

      node = node.offsetParent;
    } while (node);

    return {
      bounds: {
        top: offsetTop,
        right: offsetLeft + width,
        bottom: offsetTop + height,
        left: offsetLeft
      },
      height: height,
      width: width
    };
  }

  function getScrolled(container) {
    var top, left;

    if (container.node === document.documentElement) {
      top = window.pageYOffset;
      left = window.pageXOffset;
    } else {
      top = container.node.scrollTop;
      left = container.node.scrollLeft;
    }

    return {
      top: top,
      left: left
    };
  }

  function isElementVisible(element) {
    if (element === void 0) element = {};
    var container = this.store.containers[element.containerId];

    if (!container) {
      return;
    }

    var viewFactor = Math.max(0, Math.min(1, element.config.viewFactor));
    var viewOffset = element.config.viewOffset;
    var elementBounds = {
      top: element.geometry.bounds.top + element.geometry.height * viewFactor,
      right: element.geometry.bounds.right - element.geometry.width * viewFactor,
      bottom: element.geometry.bounds.bottom - element.geometry.height * viewFactor,
      left: element.geometry.bounds.left + element.geometry.width * viewFactor
    };
    var containerBounds = {
      top: container.geometry.bounds.top + container.scroll.top + viewOffset.top,
      right: container.geometry.bounds.right + container.scroll.left - viewOffset.right,
      bottom: container.geometry.bounds.bottom + container.scroll.top - viewOffset.bottom,
      left: container.geometry.bounds.left + container.scroll.left + viewOffset.left
    };
    return elementBounds.top < containerBounds.bottom && elementBounds.right > containerBounds.left && elementBounds.bottom > containerBounds.top && elementBounds.left < containerBounds.right || element.styles.position === 'fixed';
  }

  function delegate(event, elements) {
    var this$1 = this;
    if (event === void 0) event = {
      type: 'init'
    };
    if (elements === void 0) elements = this.store.elements;
    miniraf(function () {
      var stale = event.type === 'init' || event.type === 'resize';
      each(this$1.store.containers, function (container) {
        if (stale) {
          container.geometry = getGeometry.call(this$1, container, true);
        }

        var scroll = getScrolled.call(this$1, container);

        if (container.scroll) {
          container.direction = {
            x: mathSign(scroll.left - container.scroll.left),
            y: mathSign(scroll.top - container.scroll.top)
          };
        }

        container.scroll = scroll;
      });
      /**
       * Due to how the sequencer is implemented, it’s
       * important that we update the state of all
       * elements, before any animation logic is
       * evaluated (in the second loop below).
       */

      each(elements, function (element) {
        if (stale || element.geometry === undefined) {
          element.geometry = getGeometry.call(this$1, element);
        }

        element.visible = isElementVisible.call(this$1, element);
      });
      each(elements, function (element) {
        if (element.sequence) {
          sequence.call(this$1, element);
        } else {
          animate.call(this$1, element);
        }
      });
      this$1.pristine = false;
    });
  }

  function isTransformSupported() {
    var style = document.documentElement.style;
    return 'transform' in style || 'WebkitTransform' in style;
  }

  function isTransitionSupported() {
    var style = document.documentElement.style;
    return 'transition' in style || 'WebkitTransition' in style;
  }

  var version = "4.0.9";
  var boundDelegate;
  var boundDestroy;
  var boundReveal;
  var boundClean;
  var boundSync;
  var config;
  var debug;
  var instance;

  function ScrollReveal(options) {
    if (options === void 0) options = {};
    var invokedWithoutNew = typeof this === 'undefined' || Object.getPrototypeOf(this) !== ScrollReveal.prototype;

    if (invokedWithoutNew) {
      return new ScrollReveal(options);
    }

    if (!ScrollReveal.isSupported()) {
      logger.call(this, 'Instantiation failed.', 'This browser is not supported.');
      return mount.failure();
    }

    var buffer;

    try {
      buffer = config ? deepAssign({}, config, options) : deepAssign({}, defaults, options);
    } catch (e) {
      logger.call(this, 'Invalid configuration.', e.message);
      return mount.failure();
    }

    try {
      var container = tealight(buffer.container)[0];

      if (!container) {
        throw new Error('Invalid container.');
      }
    } catch (e) {
      logger.call(this, e.message);
      return mount.failure();
    }

    config = buffer;

    if (!config.mobile && isMobile() || !config.desktop && !isMobile()) {
      logger.call(this, 'This device is disabled.', "desktop: " + config.desktop, "mobile: " + config.mobile);
      return mount.failure();
    }

    mount.success();
    this.store = {
      containers: {},
      elements: {},
      history: [],
      sequences: {}
    };
    this.pristine = true;
    boundDelegate = boundDelegate || delegate.bind(this);
    boundDestroy = boundDestroy || destroy.bind(this);
    boundReveal = boundReveal || reveal.bind(this);
    boundClean = boundClean || clean.bind(this);
    boundSync = boundSync || sync.bind(this);
    Object.defineProperty(this, 'delegate', {
      get: function get() {
        return boundDelegate;
      }
    });
    Object.defineProperty(this, 'destroy', {
      get: function get() {
        return boundDestroy;
      }
    });
    Object.defineProperty(this, 'reveal', {
      get: function get() {
        return boundReveal;
      }
    });
    Object.defineProperty(this, 'clean', {
      get: function get() {
        return boundClean;
      }
    });
    Object.defineProperty(this, 'sync', {
      get: function get() {
        return boundSync;
      }
    });
    Object.defineProperty(this, 'defaults', {
      get: function get() {
        return config;
      }
    });
    Object.defineProperty(this, 'version', {
      get: function get() {
        return version;
      }
    });
    Object.defineProperty(this, 'noop', {
      get: function get() {
        return false;
      }
    });
    return instance ? instance : instance = this;
  }

  ScrollReveal.isSupported = function () {
    return isTransformSupported() && isTransitionSupported();
  };

  Object.defineProperty(ScrollReveal, 'debug', {
    get: function get() {
      return debug || false;
    },
    set: function set(value) {
      return debug = typeof value === 'boolean' ? value : debug;
    }
  });
  ScrollReveal();
  return ScrollReveal;
});
},{"@babel/runtime/helpers/typeof":"../node_modules/@babel/runtime/helpers/typeof.js"}],"app/js/vendor/scrollreveal-config.js":[function(require,module,exports) {
"use strict";

var _scrollreveal = _interopRequireDefault(require("../../vendor/ScrollReveal/scrollreveal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sr = (0, _scrollreveal.default)({
  duration: 1300,
  reset: true,
  easing: 'cubic-bezier(0.5, 0, 0.15, 1)'
}); // Header ---
// Logo
// sr.reveal('.brand-logo', {
//     opacity: 0,
//     distance: '50%',
//     origin: 'left',
//     duration: 2000,
//     delay: 800,
//     reset: false,
// })
// // navbar__menu
// sr.reveal('.navbar__menu li', {
//     opacity: 0,
//     distance: '20%',
//     interval: 150,
//     // duration: 2000
//     delay: 1500,
//     reset: false,
// })
// Hero ---

sr.reveal('.caption > *', {
  opacity: 0,
  distance: '20%',
  interval: 150 // duration: 2000
  // delay: 800

}); // section-icons ---

sr.reveal('.section-icons article', {
  opacity: 0,
  distance: '30%',
  interval: 200,
  origin: 'left'
}); // section-popular ---

sr.reveal('.section-popular article', {
  opacity: 0,
  distance: '20%',
  interval: 200,
  origin: 'right'
}); // section-gallery ---

sr.reveal('.section-gallery .row img', {
  opacity: 0,
  distance: '20%',
  interval: 150,
  origin: 'left',
  viewFactor: 0.4
}); // form ---

sr.reveal('.section-contact .input-field', {
  opacity: 0,
  distance: '50%',
  origin: 'bottom',
  duration: 1200,
  interval: 100
});
},{"../../vendor/ScrollReveal/scrollreveal":"app/vendor/ScrollReveal/scrollreveal.js"}],"../node_modules/materialize-css/js/component.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class Component {
  /**
   * Generic constructor for all components
   * @constructor
   * @param {Element} el
   * @param {Object} options
   */
  constructor(classDef, el, options) {
    // Display error if el is valid HTML Element
    if (!(el instanceof Element)) {
      console.error(Error(el + ' is not an HTML Element'));
    } // If exists, destroy and reinitialize in child


    let ins = classDef.getInstance(el);

    if (!!ins) {
      ins.destroy();
    }

    this.el = el;
    this.$el = cash(el);
  }
  /**
   * Initializes components
   * @param {class} classDef
   * @param {Element | NodeList | jQuery} els
   * @param {Object} options
   */


  static init(classDef, els, options) {
    let instances = null;

    if (els instanceof Element) {
      instances = new classDef(els, options);
    } else if (!!els && (els.jquery || els.cash || els instanceof NodeList)) {
      let instancesArr = [];

      for (let i = 0; i < els.length; i++) {
        instancesArr.push(new classDef(els[i], options));
      }

      instances = instancesArr;
    }

    return instances;
  }

}

exports.default = Component;
},{}],"../node_modules/materialize-css/js/sidenav.js":[function(require,module,exports) {
"use strict";

var _component = _interopRequireDefault(require("./component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function ($, anim) {
  'use strict';

  let _defaults = {
    edge: 'left',
    draggable: true,
    inDuration: 250,
    outDuration: 200,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null,
    preventScrolling: true
  };
  /**
   * @class
   */

  class Sidenav extends _component.default {
    /**
     * Construct Sidenav instance and set up overlay
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */
    constructor(el, options) {
      super(Sidenav, el, options);
      this.el.M_Sidenav = this;
      this.id = this.$el.attr('id');
      /**
       * Options for the Sidenav
       * @member Sidenav#options
       * @prop {String} [edge='left'] - Side of screen on which Sidenav appears
       * @prop {Boolean} [draggable=true] - Allow swipe gestures to open/close Sidenav
       * @prop {Number} [inDuration=250] - Length in ms of enter transition
       * @prop {Number} [outDuration=200] - Length in ms of exit transition
       * @prop {Function} onOpenStart - Function called when sidenav starts entering
       * @prop {Function} onOpenEnd - Function called when sidenav finishes entering
       * @prop {Function} onCloseStart - Function called when sidenav starts exiting
       * @prop {Function} onCloseEnd - Function called when sidenav finishes exiting
       */

      this.options = $.extend({}, Sidenav.defaults, options);
      /**
       * Describes open/close state of Sidenav
       * @type {Boolean}
       */

      this.isOpen = false;
      /**
       * Describes if Sidenav is fixed
       * @type {Boolean}
       */

      this.isFixed = this.el.classList.contains('sidenav-fixed');
      /**
       * Describes if Sidenav is being draggeed
       * @type {Boolean}
       */

      this.isDragged = false; // Window size variables for window resize checks

      this.lastWindowWidth = window.innerWidth;
      this.lastWindowHeight = window.innerHeight;

      this._createOverlay();

      this._createDragTarget();

      this._setupEventHandlers();

      this._setupClasses();

      this._setupFixed();

      Sidenav._sidenavs.push(this);
    }

    static get defaults() {
      return _defaults;
    }

    static init(els, options) {
      return super.init(this, els, options);
    }
    /**
     * Get Instance
     */


    static getInstance(el) {
      let domElem = !!el.jquery ? el[0] : el;
      return domElem.M_Sidenav;
    }
    /**
     * Teardown component
     */


    destroy() {
      this._removeEventHandlers();

      this._enableBodyScrolling();

      this._overlay.parentNode.removeChild(this._overlay);

      this.dragTarget.parentNode.removeChild(this.dragTarget);
      this.el.M_Sidenav = undefined;
      this.el.style.transform = '';

      let index = Sidenav._sidenavs.indexOf(this);

      if (index >= 0) {
        Sidenav._sidenavs.splice(index, 1);
      }
    }

    _createOverlay() {
      let overlay = document.createElement('div');
      this._closeBound = this.close.bind(this);
      overlay.classList.add('sidenav-overlay');
      overlay.addEventListener('click', this._closeBound);
      document.body.appendChild(overlay);
      this._overlay = overlay;
    }

    _setupEventHandlers() {
      if (Sidenav._sidenavs.length === 0) {
        document.body.addEventListener('click', this._handleTriggerClick);
      }

      this._handleDragTargetDragBound = this._handleDragTargetDrag.bind(this);
      this._handleDragTargetReleaseBound = this._handleDragTargetRelease.bind(this);
      this._handleCloseDragBound = this._handleCloseDrag.bind(this);
      this._handleCloseReleaseBound = this._handleCloseRelease.bind(this);
      this._handleCloseTriggerClickBound = this._handleCloseTriggerClick.bind(this);
      this.dragTarget.addEventListener('touchmove', this._handleDragTargetDragBound);
      this.dragTarget.addEventListener('touchend', this._handleDragTargetReleaseBound);

      this._overlay.addEventListener('touchmove', this._handleCloseDragBound);

      this._overlay.addEventListener('touchend', this._handleCloseReleaseBound);

      this.el.addEventListener('touchmove', this._handleCloseDragBound);
      this.el.addEventListener('touchend', this._handleCloseReleaseBound);
      this.el.addEventListener('click', this._handleCloseTriggerClickBound); // Add resize for side nav fixed

      if (this.isFixed) {
        this._handleWindowResizeBound = this._handleWindowResize.bind(this);
        window.addEventListener('resize', this._handleWindowResizeBound);
      }
    }

    _removeEventHandlers() {
      if (Sidenav._sidenavs.length === 1) {
        document.body.removeEventListener('click', this._handleTriggerClick);
      }

      this.dragTarget.removeEventListener('touchmove', this._handleDragTargetDragBound);
      this.dragTarget.removeEventListener('touchend', this._handleDragTargetReleaseBound);

      this._overlay.removeEventListener('touchmove', this._handleCloseDragBound);

      this._overlay.removeEventListener('touchend', this._handleCloseReleaseBound);

      this.el.removeEventListener('touchmove', this._handleCloseDragBound);
      this.el.removeEventListener('touchend', this._handleCloseReleaseBound);
      this.el.removeEventListener('click', this._handleCloseTriggerClickBound); // Remove resize for side nav fixed

      if (this.isFixed) {
        window.removeEventListener('resize', this._handleWindowResizeBound);
      }
    }
    /**
     * Handle Trigger Click
     * @param {Event} e
     */


    _handleTriggerClick(e) {
      let $trigger = $(e.target).closest('.sidenav-trigger');

      if (e.target && $trigger.length) {
        let sidenavId = M.getIdFromTrigger($trigger[0]);
        let sidenavInstance = document.getElementById(sidenavId).M_Sidenav;

        if (sidenavInstance) {
          sidenavInstance.open($trigger);
        }

        e.preventDefault();
      }
    }
    /**
     * Set variables needed at the beggining of drag
     * and stop any current transition.
     * @param {Event} e
     */


    _startDrag(e) {
      let clientX = e.targetTouches[0].clientX;
      this.isDragged = true;
      this._startingXpos = clientX;
      this._xPos = this._startingXpos;
      this._time = Date.now();
      this._width = this.el.getBoundingClientRect().width;
      this._overlay.style.display = 'block';
      this._initialScrollTop = this.isOpen ? this.el.scrollTop : M.getDocumentScrollTop();
      this._verticallyScrolling = false;
      anim.remove(this.el);
      anim.remove(this._overlay);
    }
    /**
     * Set variables needed at each drag move update tick
     * @param {Event} e
     */


    _dragMoveUpdate(e) {
      let clientX = e.targetTouches[0].clientX;
      let currentScrollTop = this.isOpen ? this.el.scrollTop : M.getDocumentScrollTop();
      this.deltaX = Math.abs(this._xPos - clientX);
      this._xPos = clientX;
      this.velocityX = this.deltaX / (Date.now() - this._time);
      this._time = Date.now();

      if (this._initialScrollTop !== currentScrollTop) {
        this._verticallyScrolling = true;
      }
    }
    /**
     * Handles Dragging of Sidenav
     * @param {Event} e
     */


    _handleDragTargetDrag(e) {
      // Check if draggable
      if (!this.options.draggable || this._isCurrentlyFixed() || this._verticallyScrolling) {
        return;
      } // If not being dragged, set initial drag start variables


      if (!this.isDragged) {
        this._startDrag(e);
      } // Run touchmove updates


      this._dragMoveUpdate(e); // Calculate raw deltaX


      let totalDeltaX = this._xPos - this._startingXpos; // dragDirection is the attempted user drag direction

      let dragDirection = totalDeltaX > 0 ? 'right' : 'left'; // Don't allow totalDeltaX to exceed Sidenav width or be dragged in the opposite direction

      totalDeltaX = Math.min(this._width, Math.abs(totalDeltaX));

      if (this.options.edge === dragDirection) {
        totalDeltaX = 0;
      }
      /**
       * transformX is the drag displacement
       * transformPrefix is the initial transform placement
       * Invert values if Sidenav is right edge
       */


      let transformX = totalDeltaX;
      let transformPrefix = 'translateX(-100%)';

      if (this.options.edge === 'right') {
        transformPrefix = 'translateX(100%)';
        transformX = -transformX;
      } // Calculate open/close percentage of sidenav, with open = 1 and close = 0


      this.percentOpen = Math.min(1, totalDeltaX / this._width); // Set transform and opacity styles

      this.el.style.transform = `${transformPrefix} translateX(${transformX}px)`;
      this._overlay.style.opacity = this.percentOpen;
    }
    /**
     * Handle Drag Target Release
     */


    _handleDragTargetRelease() {
      if (this.isDragged) {
        if (this.percentOpen > 0.2) {
          this.open();
        } else {
          this._animateOut();
        }

        this.isDragged = false;
        this._verticallyScrolling = false;
      }
    }
    /**
     * Handle Close Drag
     * @param {Event} e
     */


    _handleCloseDrag(e) {
      if (this.isOpen) {
        // Check if draggable
        if (!this.options.draggable || this._isCurrentlyFixed() || this._verticallyScrolling) {
          return;
        } // If not being dragged, set initial drag start variables


        if (!this.isDragged) {
          this._startDrag(e);
        } // Run touchmove updates


        this._dragMoveUpdate(e); // Calculate raw deltaX


        let totalDeltaX = this._xPos - this._startingXpos; // dragDirection is the attempted user drag direction

        let dragDirection = totalDeltaX > 0 ? 'right' : 'left'; // Don't allow totalDeltaX to exceed Sidenav width or be dragged in the opposite direction

        totalDeltaX = Math.min(this._width, Math.abs(totalDeltaX));

        if (this.options.edge !== dragDirection) {
          totalDeltaX = 0;
        }

        let transformX = -totalDeltaX;

        if (this.options.edge === 'right') {
          transformX = -transformX;
        } // Calculate open/close percentage of sidenav, with open = 1 and close = 0


        this.percentOpen = Math.min(1, 1 - totalDeltaX / this._width); // Set transform and opacity styles

        this.el.style.transform = `translateX(${transformX}px)`;
        this._overlay.style.opacity = this.percentOpen;
      }
    }
    /**
     * Handle Close Release
     */


    _handleCloseRelease() {
      if (this.isOpen && this.isDragged) {
        if (this.percentOpen > 0.8) {
          this._animateIn();
        } else {
          this.close();
        }

        this.isDragged = false;
        this._verticallyScrolling = false;
      }
    }
    /**
     * Handles closing of Sidenav when element with class .sidenav-close
     */


    _handleCloseTriggerClick(e) {
      let $closeTrigger = $(e.target).closest('.sidenav-close');

      if ($closeTrigger.length && !this._isCurrentlyFixed()) {
        this.close();
      }
    }
    /**
     * Handle Window Resize
     */


    _handleWindowResize() {
      // Only handle horizontal resizes
      if (this.lastWindowWidth !== window.innerWidth) {
        if (window.innerWidth > 992) {
          this.open();
        } else {
          this.close();
        }
      }

      this.lastWindowWidth = window.innerWidth;
      this.lastWindowHeight = window.innerHeight;
    }

    _setupClasses() {
      if (this.options.edge === 'right') {
        this.el.classList.add('right-aligned');
        this.dragTarget.classList.add('right-aligned');
      }
    }

    _removeClasses() {
      this.el.classList.remove('right-aligned');
      this.dragTarget.classList.remove('right-aligned');
    }

    _setupFixed() {
      if (this._isCurrentlyFixed()) {
        this.open();
      }
    }

    _isCurrentlyFixed() {
      return this.isFixed && window.innerWidth > 992;
    }

    _createDragTarget() {
      let dragTarget = document.createElement('div');
      dragTarget.classList.add('drag-target');
      document.body.appendChild(dragTarget);
      this.dragTarget = dragTarget;
    }

    _preventBodyScrolling() {
      let body = document.body;
      body.style.overflow = 'hidden';
    }

    _enableBodyScrolling() {
      let body = document.body;
      body.style.overflow = '';
    }

    open() {
      if (this.isOpen === true) {
        return;
      }

      this.isOpen = true; // Run onOpenStart callback

      if (typeof this.options.onOpenStart === 'function') {
        this.options.onOpenStart.call(this, this.el);
      } // Handle fixed Sidenav


      if (this._isCurrentlyFixed()) {
        anim.remove(this.el);
        anim({
          targets: this.el,
          translateX: 0,
          duration: 0,
          easing: 'easeOutQuad'
        });

        this._enableBodyScrolling();

        this._overlay.style.display = 'none'; // Handle non-fixed Sidenav
      } else {
        if (this.options.preventScrolling) {
          this._preventBodyScrolling();
        }

        if (!this.isDragged || this.percentOpen != 1) {
          this._animateIn();
        }
      }
    }

    close() {
      if (this.isOpen === false) {
        return;
      }

      this.isOpen = false; // Run onCloseStart callback

      if (typeof this.options.onCloseStart === 'function') {
        this.options.onCloseStart.call(this, this.el);
      } // Handle fixed Sidenav


      if (this._isCurrentlyFixed()) {
        let transformX = this.options.edge === 'left' ? '-105%' : '105%';
        this.el.style.transform = `translateX(${transformX})`; // Handle non-fixed Sidenav
      } else {
        this._enableBodyScrolling();

        if (!this.isDragged || this.percentOpen != 0) {
          this._animateOut();
        } else {
          this._overlay.style.display = 'none';
        }
      }
    }

    _animateIn() {
      this._animateSidenavIn();

      this._animateOverlayIn();
    }

    _animateSidenavIn() {
      let slideOutPercent = this.options.edge === 'left' ? -1 : 1;

      if (this.isDragged) {
        slideOutPercent = this.options.edge === 'left' ? slideOutPercent + this.percentOpen : slideOutPercent - this.percentOpen;
      }

      anim.remove(this.el);
      anim({
        targets: this.el,
        translateX: [`${slideOutPercent * 100}%`, 0],
        duration: this.options.inDuration,
        easing: 'easeOutQuad',
        complete: () => {
          // Run onOpenEnd callback
          if (typeof this.options.onOpenEnd === 'function') {
            this.options.onOpenEnd.call(this, this.el);
          }
        }
      });
    }

    _animateOverlayIn() {
      let start = 0;

      if (this.isDragged) {
        start = this.percentOpen;
      } else {
        $(this._overlay).css({
          display: 'block'
        });
      }

      anim.remove(this._overlay);
      anim({
        targets: this._overlay,
        opacity: [start, 1],
        duration: this.options.inDuration,
        easing: 'easeOutQuad'
      });
    }

    _animateOut() {
      this._animateSidenavOut();

      this._animateOverlayOut();
    }

    _animateSidenavOut() {
      let endPercent = this.options.edge === 'left' ? -1 : 1;
      let slideOutPercent = 0;

      if (this.isDragged) {
        slideOutPercent = this.options.edge === 'left' ? endPercent + this.percentOpen : endPercent - this.percentOpen;
      }

      anim.remove(this.el);
      anim({
        targets: this.el,
        translateX: [`${slideOutPercent * 100}%`, `${endPercent * 105}%`],
        duration: this.options.outDuration,
        easing: 'easeOutQuad',
        complete: () => {
          // Run onOpenEnd callback
          if (typeof this.options.onCloseEnd === 'function') {
            this.options.onCloseEnd.call(this, this.el);
          }
        }
      });
    }

    _animateOverlayOut() {
      anim.remove(this._overlay);
      anim({
        targets: this._overlay,
        opacity: 0,
        duration: this.options.outDuration,
        easing: 'easeOutQuad',
        complete: () => {
          $(this._overlay).css('display', 'none');
        }
      });
    }

  }
  /**
   * @static
   * @memberof Sidenav
   * @type {Array.<Sidenav>}
   */


  Sidenav._sidenavs = [];
  window.M.Sidenav = Sidenav;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(Sidenav, 'sidenav', 'M_Sidenav');
  }
})(cash, M.anime);
},{"./component":"../node_modules/materialize-css/js/component.js"}],"../node_modules/materialize-css/js/scrollspy.js":[function(require,module,exports) {
"use strict";

var _component = _interopRequireDefault(require("./component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function ($, anim) {
  'use strict';

  let _defaults = {
    throttle: 100,
    scrollOffset: 200,
    // offset - 200 allows elements near bottom of page to scroll
    activeClass: 'active',
    getActiveElement: function (id) {
      return 'a[href="#' + id + '"]';
    }
  };
  /**
   * @class
   *
   */

  class ScrollSpy extends _component.default {
    /**
     * Construct ScrollSpy instance
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */
    constructor(el, options) {
      super(ScrollSpy, el, options);
      this.el.M_ScrollSpy = this;
      /**
       * Options for the modal
       * @member Modal#options
       * @prop {Number} [throttle=100] - Throttle of scroll handler
       * @prop {Number} [scrollOffset=200] - Offset for centering element when scrolled to
       * @prop {String} [activeClass='active'] - Class applied to active elements
       * @prop {Function} [getActiveElement] - Used to find active element
       */

      this.options = $.extend({}, ScrollSpy.defaults, options); // setup

      ScrollSpy._elements.push(this);

      ScrollSpy._count++;
      ScrollSpy._increment++;
      this.tickId = -1;
      this.id = ScrollSpy._increment;

      this._setupEventHandlers();

      this._handleWindowScroll();
    }

    static get defaults() {
      return _defaults;
    }

    static init(els, options) {
      return super.init(this, els, options);
    }
    /**
     * Get Instance
     */


    static getInstance(el) {
      let domElem = !!el.jquery ? el[0] : el;
      return domElem.M_ScrollSpy;
    }
    /**
     * Teardown component
     */


    destroy() {
      ScrollSpy._elements.splice(ScrollSpy._elements.indexOf(this), 1);

      ScrollSpy._elementsInView.splice(ScrollSpy._elementsInView.indexOf(this), 1);

      ScrollSpy._visibleElements.splice(ScrollSpy._visibleElements.indexOf(this.$el), 1);

      ScrollSpy._count--;

      this._removeEventHandlers();

      $(this.options.getActiveElement(this.$el.attr('id'))).removeClass(this.options.activeClass);
      this.el.M_ScrollSpy = undefined;
    }
    /**
     * Setup Event Handlers
     */


    _setupEventHandlers() {
      let throttledResize = M.throttle(this._handleWindowScroll, 200);
      this._handleThrottledResizeBound = throttledResize.bind(this);
      this._handleWindowScrollBound = this._handleWindowScroll.bind(this);

      if (ScrollSpy._count === 1) {
        window.addEventListener('scroll', this._handleWindowScrollBound);
        window.addEventListener('resize', this._handleThrottledResizeBound);
        document.body.addEventListener('click', this._handleTriggerClick);
      }
    }
    /**
     * Remove Event Handlers
     */


    _removeEventHandlers() {
      if (ScrollSpy._count === 0) {
        window.removeEventListener('scroll', this._handleWindowScrollBound);
        window.removeEventListener('resize', this._handleThrottledResizeBound);
        document.body.removeEventListener('click', this._handleTriggerClick);
      }
    }
    /**
     * Handle Trigger Click
     * @param {Event} e
     */


    _handleTriggerClick(e) {
      let $trigger = $(e.target);

      for (let i = ScrollSpy._elements.length - 1; i >= 0; i--) {
        let scrollspy = ScrollSpy._elements[i];

        if ($trigger.is('a[href="#' + scrollspy.$el.attr('id') + '"]')) {
          e.preventDefault();
          let offset = scrollspy.$el.offset().top + 1;
          anim({
            targets: [document.documentElement, document.body],
            scrollTop: offset - scrollspy.options.scrollOffset,
            duration: 400,
            easing: 'easeOutCubic'
          });
          break;
        }
      }
    }
    /**
     * Handle Window Scroll
     */


    _handleWindowScroll() {
      // unique tick id
      ScrollSpy._ticks++; // viewport rectangle

      let top = M.getDocumentScrollTop(),
          left = M.getDocumentScrollLeft(),
          right = left + window.innerWidth,
          bottom = top + window.innerHeight; // determine which elements are in view

      let intersections = ScrollSpy._findElements(top, right, bottom, left);

      for (let i = 0; i < intersections.length; i++) {
        let scrollspy = intersections[i];
        let lastTick = scrollspy.tickId;

        if (lastTick < 0) {
          // entered into view
          scrollspy._enter();
        } // update tick id


        scrollspy.tickId = ScrollSpy._ticks;
      }

      for (let i = 0; i < ScrollSpy._elementsInView.length; i++) {
        let scrollspy = ScrollSpy._elementsInView[i];
        let lastTick = scrollspy.tickId;

        if (lastTick >= 0 && lastTick !== ScrollSpy._ticks) {
          // exited from view
          scrollspy._exit();

          scrollspy.tickId = -1;
        }
      } // remember elements in view for next tick


      ScrollSpy._elementsInView = intersections;
    }
    /**
     * Find elements that are within the boundary
     * @param {number} top
     * @param {number} right
     * @param {number} bottom
     * @param {number} left
     * @return {Array.<ScrollSpy>}   A collection of elements
     */


    static _findElements(top, right, bottom, left) {
      let hits = [];

      for (let i = 0; i < ScrollSpy._elements.length; i++) {
        let scrollspy = ScrollSpy._elements[i];
        let currTop = top + scrollspy.options.scrollOffset || 200;

        if (scrollspy.$el.height() > 0) {
          let elTop = scrollspy.$el.offset().top,
              elLeft = scrollspy.$el.offset().left,
              elRight = elLeft + scrollspy.$el.width(),
              elBottom = elTop + scrollspy.$el.height();
          let isIntersect = !(elLeft > right || elRight < left || elTop > bottom || elBottom < currTop);

          if (isIntersect) {
            hits.push(scrollspy);
          }
        }
      }

      return hits;
    }

    _enter() {
      ScrollSpy._visibleElements = ScrollSpy._visibleElements.filter(function (value) {
        return value.height() != 0;
      });

      if (ScrollSpy._visibleElements[0]) {
        $(this.options.getActiveElement(ScrollSpy._visibleElements[0].attr('id'))).removeClass(this.options.activeClass);

        if (ScrollSpy._visibleElements[0][0].M_ScrollSpy && this.id < ScrollSpy._visibleElements[0][0].M_ScrollSpy.id) {
          ScrollSpy._visibleElements.unshift(this.$el);
        } else {
          ScrollSpy._visibleElements.push(this.$el);
        }
      } else {
        ScrollSpy._visibleElements.push(this.$el);
      }

      $(this.options.getActiveElement(ScrollSpy._visibleElements[0].attr('id'))).addClass(this.options.activeClass);
    }

    _exit() {
      ScrollSpy._visibleElements = ScrollSpy._visibleElements.filter(function (value) {
        return value.height() != 0;
      });

      if (ScrollSpy._visibleElements[0]) {
        $(this.options.getActiveElement(ScrollSpy._visibleElements[0].attr('id'))).removeClass(this.options.activeClass);
        ScrollSpy._visibleElements = ScrollSpy._visibleElements.filter(el => {
          return el.attr('id') != this.$el.attr('id');
        });

        if (ScrollSpy._visibleElements[0]) {
          // Check if empty
          $(this.options.getActiveElement(ScrollSpy._visibleElements[0].attr('id'))).addClass(this.options.activeClass);
        }
      }
    }

  }
  /**
   * @static
   * @memberof ScrollSpy
   * @type {Array.<ScrollSpy>}
   */


  ScrollSpy._elements = [];
  /**
   * @static
   * @memberof ScrollSpy
   * @type {Array.<ScrollSpy>}
   */

  ScrollSpy._elementsInView = [];
  /**
   * @static
   * @memberof ScrollSpy
   * @type {Array.<cash>}
   */

  ScrollSpy._visibleElements = [];
  /**
   * @static
   * @memberof ScrollSpy
   */

  ScrollSpy._count = 0;
  /**
   * @static
   * @memberof ScrollSpy
   */

  ScrollSpy._increment = 0;
  /**
   * @static
   * @memberof ScrollSpy
   */

  ScrollSpy._ticks = 0;
  M.ScrollSpy = ScrollSpy;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(ScrollSpy, 'scrollSpy', 'M_ScrollSpy');
  }
})(cash, M.anime);
},{"./component":"../node_modules/materialize-css/js/component.js"}],"../node_modules/materialize-css/js/waves.js":[function(require,module,exports) {
/*!
 * Waves v0.6.4
 * http://fian.my.id/Waves
 *
 * Copyright 2014 Alfiana E. Sibuea and other contributors
 * Released under the MIT license
 * https://github.com/fians/Waves/blob/master/LICENSE
 */

;(function(window) {
    'use strict';

    var Waves = Waves || {};
    var $$ = document.querySelectorAll.bind(document);

    // Find exact position of element
    function isWindow(obj) {
        return obj !== null && obj === obj.window;
    }

    function getWindow(elem) {
        return isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
    }

    function offset(elem) {
        var docElem, win,
            box = {top: 0, left: 0},
            doc = elem && elem.ownerDocument;

        docElem = doc.documentElement;

        if (typeof elem.getBoundingClientRect !== typeof undefined) {
            box = elem.getBoundingClientRect();
        }
        win = getWindow(doc);
        return {
            top: box.top + win.pageYOffset - docElem.clientTop,
            left: box.left + win.pageXOffset - docElem.clientLeft
        };
    }

    function convertStyle(obj) {
        var style = '';

        for (var a in obj) {
            if (obj.hasOwnProperty(a)) {
                style += (a + ':' + obj[a] + ';');
            }
        }

        return style;
    }

    var Effect = {

        // Effect delay
        duration: 750,

        show: function(e, element) {

            // Disable right click
            if (e.button === 2) {
                return false;
            }

            var el = element || this;

            // Create ripple
            var ripple = document.createElement('div');
            ripple.className = 'waves-ripple';
            el.appendChild(ripple);

            // Get click coordinate and element witdh
            var pos         = offset(el);
            var relativeY   = (e.pageY - pos.top);
            var relativeX   = (e.pageX - pos.left);
            var scale       = 'scale('+((el.clientWidth / 100) * 10)+')';

            // Support for touch devices
            if ('touches' in e) {
              relativeY   = (e.touches[0].pageY - pos.top);
              relativeX   = (e.touches[0].pageX - pos.left);
            }

            // Attach data to element
            ripple.setAttribute('data-hold', Date.now());
            ripple.setAttribute('data-scale', scale);
            ripple.setAttribute('data-x', relativeX);
            ripple.setAttribute('data-y', relativeY);

            // Set ripple position
            var rippleStyle = {
                'top': relativeY+'px',
                'left': relativeX+'px'
            };

            ripple.className = ripple.className + ' waves-notransition';
            ripple.setAttribute('style', convertStyle(rippleStyle));
            ripple.className = ripple.className.replace('waves-notransition', '');

            // Scale the ripple
            rippleStyle['-webkit-transform'] = scale;
            rippleStyle['-moz-transform'] = scale;
            rippleStyle['-ms-transform'] = scale;
            rippleStyle['-o-transform'] = scale;
            rippleStyle.transform = scale;
            rippleStyle.opacity   = '1';

            rippleStyle['-webkit-transition-duration'] = Effect.duration + 'ms';
            rippleStyle['-moz-transition-duration']    = Effect.duration + 'ms';
            rippleStyle['-o-transition-duration']      = Effect.duration + 'ms';
            rippleStyle['transition-duration']         = Effect.duration + 'ms';

            rippleStyle['-webkit-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
            rippleStyle['-moz-transition-timing-function']    = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
            rippleStyle['-o-transition-timing-function']      = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
            rippleStyle['transition-timing-function']         = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';

            ripple.setAttribute('style', convertStyle(rippleStyle));
        },

        hide: function(e) {
            TouchHandler.touchup(e);

            var el = this;
            var width = el.clientWidth * 1.4;

            // Get first ripple
            var ripple = null;
            var ripples = el.getElementsByClassName('waves-ripple');
            if (ripples.length > 0) {
                ripple = ripples[ripples.length - 1];
            } else {
                return false;
            }

            var relativeX   = ripple.getAttribute('data-x');
            var relativeY   = ripple.getAttribute('data-y');
            var scale       = ripple.getAttribute('data-scale');

            // Get delay beetween mousedown and mouse leave
            var diff = Date.now() - Number(ripple.getAttribute('data-hold'));
            var delay = 350 - diff;

            if (delay < 0) {
                delay = 0;
            }

            // Fade out ripple after delay
            setTimeout(function() {
                var style = {
                    'top': relativeY+'px',
                    'left': relativeX+'px',
                    'opacity': '0',

                    // Duration
                    '-webkit-transition-duration': Effect.duration + 'ms',
                    '-moz-transition-duration': Effect.duration + 'ms',
                    '-o-transition-duration': Effect.duration + 'ms',
                    'transition-duration': Effect.duration + 'ms',
                    '-webkit-transform': scale,
                    '-moz-transform': scale,
                    '-ms-transform': scale,
                    '-o-transform': scale,
                    'transform': scale,
                };

                ripple.setAttribute('style', convertStyle(style));

                setTimeout(function() {
                    try {
                        el.removeChild(ripple);
                    } catch(e) {
                        return false;
                    }
                }, Effect.duration);
            }, delay);
        },

        // Little hack to make <input> can perform waves effect
        wrapInput: function(elements) {
            for (var a = 0; a < elements.length; a++) {
                var el = elements[a];

                if (el.tagName.toLowerCase() === 'input') {
                    var parent = el.parentNode;

                    // If input already have parent just pass through
                    if (parent.tagName.toLowerCase() === 'i' && parent.className.indexOf('waves-effect') !== -1) {
                        continue;
                    }

                    // Put element class and style to the specified parent
                    var wrapper = document.createElement('i');
                    wrapper.className = el.className + ' waves-input-wrapper';

                    var elementStyle = el.getAttribute('style');

                    if (!elementStyle) {
                        elementStyle = '';
                    }

                    wrapper.setAttribute('style', elementStyle);

                    el.className = 'waves-button-input';
                    el.removeAttribute('style');

                    // Put element as child
                    parent.replaceChild(wrapper, el);
                    wrapper.appendChild(el);
                }
            }
        }
    };


    /**
     * Disable mousedown event for 500ms during and after touch
     */
    var TouchHandler = {
        /* uses an integer rather than bool so there's no issues with
         * needing to clear timeouts if another touch event occurred
         * within the 500ms. Cannot mouseup between touchstart and
         * touchend, nor in the 500ms after touchend. */
        touches: 0,
        allowEvent: function(e) {
            var allow = true;

            if (e.type === 'touchstart') {
                TouchHandler.touches += 1; //push
            } else if (e.type === 'touchend' || e.type === 'touchcancel') {
                setTimeout(function() {
                    if (TouchHandler.touches > 0) {
                        TouchHandler.touches -= 1; //pop after 500ms
                    }
                }, 500);
            } else if (e.type === 'mousedown' && TouchHandler.touches > 0) {
                allow = false;
            }

            return allow;
        },
        touchup: function(e) {
            TouchHandler.allowEvent(e);
        }
    };


    /**
     * Delegated click handler for .waves-effect element.
     * returns null when .waves-effect element not in "click tree"
     */
    function getWavesEffectElement(e) {
        if (TouchHandler.allowEvent(e) === false) {
            return null;
        }

        var element = null;
        var target = e.target || e.srcElement;

        while (target.parentNode !== null) {
            if (!(target instanceof SVGElement) && target.className.indexOf('waves-effect') !== -1) {
                element = target;
                break;
            }
            target = target.parentNode;
        }
        return element;
    }

    /**
     * Bubble the click and show effect if .waves-effect elem was found
     */
    function showEffect(e) {
        var element = getWavesEffectElement(e);

        if (element !== null) {
            Effect.show(e, element);

            if ('ontouchstart' in window) {
                element.addEventListener('touchend', Effect.hide, false);
                element.addEventListener('touchcancel', Effect.hide, false);
            }

            element.addEventListener('mouseup', Effect.hide, false);
            element.addEventListener('mouseleave', Effect.hide, false);
            element.addEventListener('dragend', Effect.hide, false);
        }
    }

    Waves.displayEffect = function(options) {
        options = options || {};

        if ('duration' in options) {
            Effect.duration = options.duration;
        }

        //Wrap input inside <i> tag
        Effect.wrapInput($$('.waves-effect'));

        if ('ontouchstart' in window) {
            document.body.addEventListener('touchstart', showEffect, false);
        }

        document.body.addEventListener('mousedown', showEffect, false);
    };

    /**
     * Attach Waves to an input element (or any element which doesn't
     * bubble mouseup/mousedown events).
     *   Intended to be used with dynamically loaded forms/inputs, or
     * where the user doesn't want a delegated click handler.
     */
    Waves.attach = function(element) {
        //FUTURE: automatically add waves classes and allow users
        // to specify them with an options param? Eg. light/classic/button
        if (element.tagName.toLowerCase() === 'input') {
            Effect.wrapInput([element]);
            element = element.parentNode;
        }

        if ('ontouchstart' in window) {
            element.addEventListener('touchstart', showEffect, false);
        }

        element.addEventListener('mousedown', showEffect, false);
    };

    window.Waves = Waves;

    document.addEventListener('DOMContentLoaded', function() {
        Waves.displayEffect();
    }, false);

})(window);

},{}],"../node_modules/materialize-css/js/slider.js":[function(require,module,exports) {
"use strict";

var _component = _interopRequireDefault(require("./component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function ($, anim) {
  'use strict';

  let _defaults = {
    indicators: true,
    height: 400,
    duration: 500,
    interval: 6000
  };
  /**
   * @class
   *
   */

  class Slider extends _component.default {
    /**
     * Construct Slider instance and set up overlay
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */
    constructor(el, options) {
      super(Slider, el, options);
      this.el.M_Slider = this;
      /**
       * Options for the modal
       * @member Slider#options
       * @prop {Boolean} [indicators=true] - Show indicators
       * @prop {Number} [height=400] - height of slider
       * @prop {Number} [duration=500] - Length in ms of slide transition
       * @prop {Number} [interval=6000] - Length in ms of slide interval
       */

      this.options = $.extend({}, Slider.defaults, options); // setup

      this.$slider = this.$el.find('.slides');
      this.$slides = this.$slider.children('li');
      this.activeIndex = this.$slides.filter(function (item) {
        return $(item).hasClass('active');
      }).first().index();

      if (this.activeIndex != -1) {
        this.$active = this.$slides.eq(this.activeIndex);
      }

      this._setSliderHeight(); // Set initial positions of captions


      this.$slides.find('.caption').each(el => {
        this._animateCaptionIn(el, 0);
      }); // Move img src into background-image

      this.$slides.find('img').each(el => {
        let placeholderBase64 = 'data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';

        if ($(el).attr('src') !== placeholderBase64) {
          $(el).css('background-image', 'url("' + $(el).attr('src') + '")');
          $(el).attr('src', placeholderBase64);
        }
      });

      this._setupIndicators(); // Show active slide


      if (this.$active) {
        this.$active.css('display', 'block');
      } else {
        this.$slides.first().addClass('active');
        anim({
          targets: this.$slides.first()[0],
          opacity: 1,
          duration: this.options.duration,
          easing: 'easeOutQuad'
        });
        this.activeIndex = 0;
        this.$active = this.$slides.eq(this.activeIndex); // Update indicators

        if (this.options.indicators) {
          this.$indicators.eq(this.activeIndex).addClass('active');
        }
      } // Adjust height to current slide


      this.$active.find('img').each(el => {
        anim({
          targets: this.$active.find('.caption')[0],
          opacity: 1,
          translateX: 0,
          translateY: 0,
          duration: this.options.duration,
          easing: 'easeOutQuad'
        });
      });

      this._setupEventHandlers(); // auto scroll


      this.start();
    }

    static get defaults() {
      return _defaults;
    }

    static init(els, options) {
      return super.init(this, els, options);
    }
    /**
     * Get Instance
     */


    static getInstance(el) {
      let domElem = !!el.jquery ? el[0] : el;
      return domElem.M_Slider;
    }
    /**
     * Teardown component
     */


    destroy() {
      this.pause();

      this._removeIndicators();

      this._removeEventHandlers();

      this.el.M_Slider = undefined;
    }
    /**
     * Setup Event Handlers
     */


    _setupEventHandlers() {
      this._handleIntervalBound = this._handleInterval.bind(this);
      this._handleIndicatorClickBound = this._handleIndicatorClick.bind(this);

      if (this.options.indicators) {
        this.$indicators.each(el => {
          el.addEventListener('click', this._handleIndicatorClickBound);
        });
      }
    }
    /**
     * Remove Event Handlers
     */


    _removeEventHandlers() {
      if (this.options.indicators) {
        this.$indicators.each(el => {
          el.removeEventListener('click', this._handleIndicatorClickBound);
        });
      }
    }
    /**
     * Handle indicator click
     * @param {Event} e
     */


    _handleIndicatorClick(e) {
      let currIndex = $(e.target).index();
      this.set(currIndex);
    }
    /**
     * Handle Interval
     */


    _handleInterval() {
      let newActiveIndex = this.$slider.find('.active').index();
      if (this.$slides.length === newActiveIndex + 1) newActiveIndex = 0; // loop to start
      else newActiveIndex += 1;
      this.set(newActiveIndex);
    }
    /**
     * Animate in caption
     * @param {Element} caption
     * @param {Number} duration
     */


    _animateCaptionIn(caption, duration) {
      let animOptions = {
        targets: caption,
        opacity: 0,
        duration: duration,
        easing: 'easeOutQuad'
      };

      if ($(caption).hasClass('center-align')) {
        animOptions.translateY = -100;
      } else if ($(caption).hasClass('right-align')) {
        animOptions.translateX = 100;
      } else if ($(caption).hasClass('left-align')) {
        animOptions.translateX = -100;
      }

      anim(animOptions);
    }
    /**
     * Set height of slider
     */


    _setSliderHeight() {
      // If fullscreen, do nothing
      if (!this.$el.hasClass('fullscreen')) {
        if (this.options.indicators) {
          // Add height if indicators are present
          this.$el.css('height', this.options.height + 40 + 'px');
        } else {
          this.$el.css('height', this.options.height + 'px');
        }

        this.$slider.css('height', this.options.height + 'px');
      }
    }
    /**
     * Setup indicators
     */


    _setupIndicators() {
      if (this.options.indicators) {
        this.$indicators = $('<ul class="indicators"></ul>');
        this.$slides.each((el, index) => {
          let $indicator = $('<li class="indicator-item"></li>');
          this.$indicators.append($indicator[0]);
        });
        this.$el.append(this.$indicators[0]);
        this.$indicators = this.$indicators.children('li.indicator-item');
      }
    }
    /**
     * Remove indicators
     */


    _removeIndicators() {
      this.$el.find('ul.indicators').remove();
    }
    /**
     * Cycle to nth item
     * @param {Number} index
     */


    set(index) {
      // Wrap around indices.
      if (index >= this.$slides.length) index = 0;else if (index < 0) index = this.$slides.length - 1; // Only do if index changes

      if (this.activeIndex != index) {
        this.$active = this.$slides.eq(this.activeIndex);
        let $caption = this.$active.find('.caption');
        this.$active.removeClass('active');
        anim({
          targets: this.$active[0],
          opacity: 0,
          duration: this.options.duration,
          easing: 'easeOutQuad',
          complete: () => {
            this.$slides.not('.active').each(el => {
              anim({
                targets: el,
                opacity: 0,
                translateX: 0,
                translateY: 0,
                duration: 0,
                easing: 'easeOutQuad'
              });
            });
          }
        });

        this._animateCaptionIn($caption[0], this.options.duration); // Update indicators


        if (this.options.indicators) {
          this.$indicators.eq(this.activeIndex).removeClass('active');
          this.$indicators.eq(index).addClass('active');
        }

        anim({
          targets: this.$slides.eq(index)[0],
          opacity: 1,
          duration: this.options.duration,
          easing: 'easeOutQuad'
        });
        anim({
          targets: this.$slides.eq(index).find('.caption')[0],
          opacity: 1,
          translateX: 0,
          translateY: 0,
          duration: this.options.duration,
          delay: this.options.duration,
          easing: 'easeOutQuad'
        });
        this.$slides.eq(index).addClass('active');
        this.activeIndex = index; // Reset interval

        this.start();
      }
    }
    /**
     * Pause slider interval
     */


    pause() {
      clearInterval(this.interval);
    }
    /**
     * Start slider interval
     */


    start() {
      clearInterval(this.interval);
      this.interval = setInterval(this._handleIntervalBound, this.options.duration + this.options.interval);
    }
    /**
     * Move to next slide
     */


    next() {
      let newIndex = this.activeIndex + 1; // Wrap around indices.

      if (newIndex >= this.$slides.length) newIndex = 0;else if (newIndex < 0) newIndex = this.$slides.length - 1;
      this.set(newIndex);
    }
    /**
     * Move to previous slide
     */


    prev() {
      let newIndex = this.activeIndex - 1; // Wrap around indices.

      if (newIndex >= this.$slides.length) newIndex = 0;else if (newIndex < 0) newIndex = this.$slides.length - 1;
      this.set(newIndex);
    }

  }

  M.Slider = Slider;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(Slider, 'slider', 'M_Slider');
  }
})(cash, M.anime);
},{"./component":"../node_modules/materialize-css/js/component.js"}],"../node_modules/materialize-css/js/forms.js":[function(require,module,exports) {

(function($) {
  // Function to update labels of text fields
  M.updateTextFields = function() {
    let input_selector =
      'input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], input[type=date], input[type=time], textarea';
    $(input_selector).each(function(element, index) {
      let $this = $(this);
      if (
        element.value.length > 0 ||
        $(element).is(':focus') ||
        element.autofocus ||
        $this.attr('placeholder') !== null
      ) {
        $this.siblings('label').addClass('active');
      } else if (element.validity) {
        $this.siblings('label').toggleClass('active', element.validity.badInput === true);
      } else {
        $this.siblings('label').removeClass('active');
      }
    });
  };

  M.validate_field = function(object) {
    let hasLength = object.attr('data-length') !== null;
    let lenAttr = parseInt(object.attr('data-length'));
    let len = object[0].value.length;

    if (len === 0 && object[0].validity.badInput === false && !object.is(':required')) {
      if (object.hasClass('validate')) {
        object.removeClass('valid');
        object.removeClass('invalid');
      }
    } else {
      if (object.hasClass('validate')) {
        // Check for character counter attributes
        if (
          (object.is(':valid') && hasLength && len <= lenAttr) ||
          (object.is(':valid') && !hasLength)
        ) {
          object.removeClass('invalid');
          object.addClass('valid');
        } else {
          object.removeClass('valid');
          object.addClass('invalid');
        }
      }
    }
  };

  M.textareaAutoResize = function($textarea) {
    // Wrap if native element
    if ($textarea instanceof Element) {
      $textarea = $($textarea);
    }

    if (!$textarea.length) {
      console.error('No textarea element found');
      return;
    }

    // Textarea Auto Resize
    let hiddenDiv = $('.hiddendiv').first();
    if (!hiddenDiv.length) {
      hiddenDiv = $('<div class="hiddendiv common"></div>');
      $('body').append(hiddenDiv);
    }

    // Set font properties of hiddenDiv
    let fontFamily = $textarea.css('font-family');
    let fontSize = $textarea.css('font-size');
    let lineHeight = $textarea.css('line-height');

    // Firefox can't handle padding shorthand.
    let paddingTop = $textarea.css('padding-top');
    let paddingRight = $textarea.css('padding-right');
    let paddingBottom = $textarea.css('padding-bottom');
    let paddingLeft = $textarea.css('padding-left');

    if (fontSize) {
      hiddenDiv.css('font-size', fontSize);
    }
    if (fontFamily) {
      hiddenDiv.css('font-family', fontFamily);
    }
    if (lineHeight) {
      hiddenDiv.css('line-height', lineHeight);
    }
    if (paddingTop) {
      hiddenDiv.css('padding-top', paddingTop);
    }
    if (paddingRight) {
      hiddenDiv.css('padding-right', paddingRight);
    }
    if (paddingBottom) {
      hiddenDiv.css('padding-bottom', paddingBottom);
    }
    if (paddingLeft) {
      hiddenDiv.css('padding-left', paddingLeft);
    }

    // Set original-height, if none
    if (!$textarea.data('original-height')) {
      $textarea.data('original-height', $textarea.height());
    }

    if ($textarea.attr('wrap') === 'off') {
      hiddenDiv.css('overflow-wrap', 'normal').css('white-space', 'pre');
    }

    hiddenDiv.text($textarea[0].value + '\n');
    let content = hiddenDiv.html().replace(/\n/g, '<br>');
    hiddenDiv.html(content);

    // When textarea is hidden, width goes crazy.
    // Approximate with half of window size

    if ($textarea[0].offsetWidth > 0 && $textarea[0].offsetHeight > 0) {
      hiddenDiv.css('width', $textarea.width() + 'px');
    } else {
      hiddenDiv.css('width', window.innerWidth / 2 + 'px');
    }

    /**
     * Resize if the new height is greater than the
     * original height of the textarea
     */
    if ($textarea.data('original-height') <= hiddenDiv.innerHeight()) {
      $textarea.css('height', hiddenDiv.innerHeight() + 'px');
    } else if ($textarea[0].value.length < $textarea.data('previous-length')) {
      /**
       * In case the new height is less than original height, it
       * means the textarea has less text than before
       * So we set the height to the original one
       */
      $textarea.css('height', $textarea.data('original-height') + 'px');
    }
    $textarea.data('previous-length', $textarea[0].value.length);
  };

  $(document).ready(function() {
    // Text based inputs
    let input_selector =
      'input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], input[type=date], input[type=time], textarea';

    // Add active if form auto complete
    $(document).on('change', input_selector, function() {
      if (this.value.length !== 0 || $(this).attr('placeholder') !== null) {
        $(this)
          .siblings('label')
          .addClass('active');
      }
      M.validate_field($(this));
    });

    // Add active if input element has been pre-populated on document ready
    $(document).ready(function() {
      M.updateTextFields();
    });

    // HTML DOM FORM RESET handling
    $(document).on('reset', function(e) {
      let formReset = $(e.target);
      if (formReset.is('form')) {
        formReset
          .find(input_selector)
          .removeClass('valid')
          .removeClass('invalid');
        formReset.find(input_selector).each(function(e) {
          if (this.value.length) {
            $(this)
              .siblings('label')
              .removeClass('active');
          }
        });

        // Reset select (after native reset)
        setTimeout(function() {
          formReset.find('select').each(function() {
            // check if initialized
            if (this.M_FormSelect) {
              $(this).trigger('change');
            }
          });
        }, 0);
      }
    });

    /**
     * Add active when element has focus
     * @param {Event} e
     */
    document.addEventListener(
      'focus',
      function(e) {
        if ($(e.target).is(input_selector)) {
          $(e.target)
            .siblings('label, .prefix')
            .addClass('active');
        }
      },
      true
    );

    /**
     * Remove active when element is blurred
     * @param {Event} e
     */
    document.addEventListener(
      'blur',
      function(e) {
        let $inputElement = $(e.target);
        if ($inputElement.is(input_selector)) {
          let selector = '.prefix';

          if (
            $inputElement[0].value.length === 0 &&
            $inputElement[0].validity.badInput !== true &&
            $inputElement.attr('placeholder') === null
          ) {
            selector += ', label';
          }
          $inputElement.siblings(selector).removeClass('active');
          M.validate_field($inputElement);
        }
      },
      true
    );

    // Radio and Checkbox focus class
    let radio_checkbox = 'input[type=radio], input[type=checkbox]';
    $(document).on('keyup', radio_checkbox, function(e) {
      // TAB, check if tabbing to radio or checkbox.
      if (e.which === M.keys.TAB) {
        $(this).addClass('tabbed');
        let $this = $(this);
        $this.one('blur', function(e) {
          $(this).removeClass('tabbed');
        });
        return;
      }
    });

    let text_area_selector = '.materialize-textarea';
    $(text_area_selector).each(function() {
      let $textarea = $(this);
      /**
       * Resize textarea on document load after storing
       * the original height and the original length
       */
      $textarea.data('original-height', $textarea.height());
      $textarea.data('previous-length', this.value.length);
      M.textareaAutoResize($textarea);
    });

    $(document).on('keyup', text_area_selector, function() {
      M.textareaAutoResize($(this));
    });
    $(document).on('keydown', text_area_selector, function() {
      M.textareaAutoResize($(this));
    });

    // File Input Path
    $(document).on('change', '.file-field input[type="file"]', function() {
      let file_field = $(this).closest('.file-field');
      let path_input = file_field.find('input.file-path');
      let files = $(this)[0].files;
      let file_names = [];
      for (let i = 0; i < files.length; i++) {
        file_names.push(files[i].name);
      }
      path_input[0].value = file_names.join(', ');
      path_input.trigger('change');
    });
  }); // End of $(document).ready
})(cash);

},{}],"../node_modules/materialize-css/js/dropdown.js":[function(require,module,exports) {
"use strict";

var _component = _interopRequireDefault(require("./component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function ($, anim) {
  'use strict';

  let _defaults = {
    alignment: 'left',
    autoFocus: true,
    constrainWidth: true,
    container: null,
    coverTrigger: true,
    closeOnClick: true,
    hover: false,
    inDuration: 150,
    outDuration: 250,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null,
    onItemClick: null
  };
  /**
   * @class
   */

  class Dropdown extends _component.default {
    constructor(el, options) {
      super(Dropdown, el, options);
      this.el.M_Dropdown = this;

      Dropdown._dropdowns.push(this);

      this.id = M.getIdFromTrigger(el);
      this.dropdownEl = document.getElementById(this.id);
      this.$dropdownEl = $(this.dropdownEl);
      /**
       * Options for the dropdown
       * @member Dropdown#options
       * @prop {String} [alignment='left'] - Edge which the dropdown is aligned to
       * @prop {Boolean} [autoFocus=true] - Automatically focus dropdown el for keyboard
       * @prop {Boolean} [constrainWidth=true] - Constrain width to width of the button
       * @prop {Element} container - Container element to attach dropdown to (optional)
       * @prop {Boolean} [coverTrigger=true] - Place dropdown over trigger
       * @prop {Boolean} [closeOnClick=true] - Close on click of dropdown item
       * @prop {Boolean} [hover=false] - Open dropdown on hover
       * @prop {Number} [inDuration=150] - Duration of open animation in ms
       * @prop {Number} [outDuration=250] - Duration of close animation in ms
       * @prop {Function} onOpenStart - Function called when dropdown starts opening
       * @prop {Function} onOpenEnd - Function called when dropdown finishes opening
       * @prop {Function} onCloseStart - Function called when dropdown starts closing
       * @prop {Function} onCloseEnd - Function called when dropdown finishes closing
       */

      this.options = $.extend({}, Dropdown.defaults, options);
      /**
       * Describes open/close state of dropdown
       * @type {Boolean}
       */

      this.isOpen = false;
      /**
       * Describes if dropdown content is scrollable
       * @type {Boolean}
       */

      this.isScrollable = false;
      /**
       * Describes if touch moving on dropdown content
       * @type {Boolean}
       */

      this.isTouchMoving = false;
      this.focusedIndex = -1;
      this.filterQuery = []; // Move dropdown-content after dropdown-trigger

      if (!!this.options.container) {
        $(this.options.container).append(this.dropdownEl);
      } else {
        this.$el.after(this.dropdownEl);
      }

      this._makeDropdownFocusable();

      this._resetFilterQueryBound = this._resetFilterQuery.bind(this);
      this._handleDocumentClickBound = this._handleDocumentClick.bind(this);
      this._handleDocumentTouchmoveBound = this._handleDocumentTouchmove.bind(this);
      this._handleDropdownClickBound = this._handleDropdownClick.bind(this);
      this._handleDropdownKeydownBound = this._handleDropdownKeydown.bind(this);
      this._handleTriggerKeydownBound = this._handleTriggerKeydown.bind(this);

      this._setupEventHandlers();
    }

    static get defaults() {
      return _defaults;
    }

    static init(els, options) {
      return super.init(this, els, options);
    }
    /**
     * Get Instance
     */


    static getInstance(el) {
      let domElem = !!el.jquery ? el[0] : el;
      return domElem.M_Dropdown;
    }
    /**
     * Teardown component
     */


    destroy() {
      this._resetDropdownStyles();

      this._removeEventHandlers();

      Dropdown._dropdowns.splice(Dropdown._dropdowns.indexOf(this), 1);

      this.el.M_Dropdown = undefined;
    }
    /**
     * Setup Event Handlers
     */


    _setupEventHandlers() {
      // Trigger keydown handler
      this.el.addEventListener('keydown', this._handleTriggerKeydownBound); // Item click handler

      this.dropdownEl.addEventListener('click', this._handleDropdownClickBound); // Hover event handlers

      if (this.options.hover) {
        this._handleMouseEnterBound = this._handleMouseEnter.bind(this);
        this.el.addEventListener('mouseenter', this._handleMouseEnterBound);
        this._handleMouseLeaveBound = this._handleMouseLeave.bind(this);
        this.el.addEventListener('mouseleave', this._handleMouseLeaveBound);
        this.dropdownEl.addEventListener('mouseleave', this._handleMouseLeaveBound); // Click event handlers
      } else {
        this._handleClickBound = this._handleClick.bind(this);
        this.el.addEventListener('click', this._handleClickBound);
      }
    }
    /**
     * Remove Event Handlers
     */


    _removeEventHandlers() {
      this.el.removeEventListener('keydown', this._handleTriggerKeydownBound);
      this.dropdownEl.removeEventListener('click', this._handleDropdownClickBound);

      if (this.options.hover) {
        this.el.removeEventListener('mouseenter', this._handleMouseEnterBound);
        this.el.removeEventListener('mouseleave', this._handleMouseLeaveBound);
        this.dropdownEl.removeEventListener('mouseleave', this._handleMouseLeaveBound);
      } else {
        this.el.removeEventListener('click', this._handleClickBound);
      }
    }

    _setupTemporaryEventHandlers() {
      // Use capture phase event handler to prevent click
      document.body.addEventListener('click', this._handleDocumentClickBound, true);
      document.body.addEventListener('touchend', this._handleDocumentClickBound);
      document.body.addEventListener('touchmove', this._handleDocumentTouchmoveBound);
      this.dropdownEl.addEventListener('keydown', this._handleDropdownKeydownBound);
    }

    _removeTemporaryEventHandlers() {
      // Use capture phase event handler to prevent click
      document.body.removeEventListener('click', this._handleDocumentClickBound, true);
      document.body.removeEventListener('touchend', this._handleDocumentClickBound);
      document.body.removeEventListener('touchmove', this._handleDocumentTouchmoveBound);
      this.dropdownEl.removeEventListener('keydown', this._handleDropdownKeydownBound);
    }

    _handleClick(e) {
      e.preventDefault();
      this.open();
    }

    _handleMouseEnter() {
      this.open();
    }

    _handleMouseLeave(e) {
      let toEl = e.toElement || e.relatedTarget;
      let leaveToDropdownContent = !!$(toEl).closest('.dropdown-content').length;
      let leaveToActiveDropdownTrigger = false;
      let $closestTrigger = $(toEl).closest('.dropdown-trigger');

      if ($closestTrigger.length && !!$closestTrigger[0].M_Dropdown && $closestTrigger[0].M_Dropdown.isOpen) {
        leaveToActiveDropdownTrigger = true;
      } // Close hover dropdown if mouse did not leave to either active dropdown-trigger or dropdown-content


      if (!leaveToActiveDropdownTrigger && !leaveToDropdownContent) {
        this.close();
      }
    }

    _handleDocumentClick(e) {
      let $target = $(e.target);

      if (this.options.closeOnClick && $target.closest('.dropdown-content').length && !this.isTouchMoving) {
        // isTouchMoving to check if scrolling on mobile.
        setTimeout(() => {
          this.close();
        }, 0);
      } else if ($target.closest('.dropdown-trigger').length || !$target.closest('.dropdown-content').length) {
        setTimeout(() => {
          this.close();
        }, 0);
      }

      this.isTouchMoving = false;
    }

    _handleTriggerKeydown(e) {
      // ARROW DOWN OR ENTER WHEN SELECT IS CLOSED - open Dropdown
      if ((e.which === M.keys.ARROW_DOWN || e.which === M.keys.ENTER) && !this.isOpen) {
        e.preventDefault();
        this.open();
      }
    }
    /**
     * Handle Document Touchmove
     * @param {Event} e
     */


    _handleDocumentTouchmove(e) {
      let $target = $(e.target);

      if ($target.closest('.dropdown-content').length) {
        this.isTouchMoving = true;
      }
    }
    /**
     * Handle Dropdown Click
     * @param {Event} e
     */


    _handleDropdownClick(e) {
      // onItemClick callback
      if (typeof this.options.onItemClick === 'function') {
        let itemEl = $(e.target).closest('li')[0];
        this.options.onItemClick.call(this, itemEl);
      }
    }
    /**
     * Handle Dropdown Keydown
     * @param {Event} e
     */


    _handleDropdownKeydown(e) {
      if (e.which === M.keys.TAB) {
        e.preventDefault();
        this.close(); // Navigate down dropdown list
      } else if ((e.which === M.keys.ARROW_DOWN || e.which === M.keys.ARROW_UP) && this.isOpen) {
        e.preventDefault();
        let direction = e.which === M.keys.ARROW_DOWN ? 1 : -1;
        let newFocusedIndex = this.focusedIndex;
        let foundNewIndex = false;

        do {
          newFocusedIndex = newFocusedIndex + direction;

          if (!!this.dropdownEl.children[newFocusedIndex] && this.dropdownEl.children[newFocusedIndex].tabIndex !== -1) {
            foundNewIndex = true;
            break;
          }
        } while (newFocusedIndex < this.dropdownEl.children.length && newFocusedIndex >= 0);

        if (foundNewIndex) {
          this.focusedIndex = newFocusedIndex;

          this._focusFocusedItem();
        } // ENTER selects choice on focused item

      } else if (e.which === M.keys.ENTER && this.isOpen) {
        // Search for <a> and <button>
        let focusedElement = this.dropdownEl.children[this.focusedIndex];
        let $activatableElement = $(focusedElement).find('a, button').first(); // Click a or button tag if exists, otherwise click li tag

        !!$activatableElement.length ? $activatableElement[0].click() : focusedElement.click(); // Close dropdown on ESC
      } else if (e.which === M.keys.ESC && this.isOpen) {
        e.preventDefault();
        this.close();
      } // CASE WHEN USER TYPE LETTERS


      let letter = String.fromCharCode(e.which).toLowerCase(),
          nonLetters = [9, 13, 27, 38, 40];

      if (letter && nonLetters.indexOf(e.which) === -1) {
        this.filterQuery.push(letter);
        let string = this.filterQuery.join(''),
            newOptionEl = $(this.dropdownEl).find('li').filter(el => {
          return $(el).text().toLowerCase().indexOf(string) === 0;
        })[0];

        if (newOptionEl) {
          this.focusedIndex = $(newOptionEl).index();

          this._focusFocusedItem();
        }
      }

      this.filterTimeout = setTimeout(this._resetFilterQueryBound, 1000);
    }
    /**
     * Setup dropdown
     */


    _resetFilterQuery() {
      this.filterQuery = [];
    }

    _resetDropdownStyles() {
      this.$dropdownEl.css({
        display: '',
        width: '',
        height: '',
        left: '',
        top: '',
        'transform-origin': '',
        transform: '',
        opacity: ''
      });
    }

    _makeDropdownFocusable() {
      // Needed for arrow key navigation
      this.dropdownEl.tabIndex = 0; // Only set tabindex if it hasn't been set by user

      $(this.dropdownEl).children().each(function (el) {
        if (!el.getAttribute('tabindex')) {
          el.setAttribute('tabindex', 0);
        }
      });
    }

    _focusFocusedItem() {
      if (this.focusedIndex >= 0 && this.focusedIndex < this.dropdownEl.children.length && this.options.autoFocus) {
        this.dropdownEl.children[this.focusedIndex].focus();
      }
    }

    _getDropdownPosition() {
      let offsetParentBRect = this.el.offsetParent.getBoundingClientRect();
      let triggerBRect = this.el.getBoundingClientRect();
      let dropdownBRect = this.dropdownEl.getBoundingClientRect();
      let idealHeight = dropdownBRect.height;
      let idealWidth = dropdownBRect.width;
      let idealXPos = triggerBRect.left - dropdownBRect.left;
      let idealYPos = triggerBRect.top - dropdownBRect.top;
      let dropdownBounds = {
        left: idealXPos,
        top: idealYPos,
        height: idealHeight,
        width: idealWidth
      }; // Countainer here will be closest ancestor with overflow: hidden

      let closestOverflowParent = !!this.dropdownEl.offsetParent ? this.dropdownEl.offsetParent : this.dropdownEl.parentNode;
      let alignments = M.checkPossibleAlignments(this.el, closestOverflowParent, dropdownBounds, this.options.coverTrigger ? 0 : triggerBRect.height);
      let verticalAlignment = 'top';
      let horizontalAlignment = this.options.alignment;
      idealYPos += this.options.coverTrigger ? 0 : triggerBRect.height; // Reset isScrollable

      this.isScrollable = false;

      if (!alignments.top) {
        if (alignments.bottom) {
          verticalAlignment = 'bottom';
        } else {
          this.isScrollable = true; // Determine which side has most space and cutoff at correct height

          if (alignments.spaceOnTop > alignments.spaceOnBottom) {
            verticalAlignment = 'bottom';
            idealHeight += alignments.spaceOnTop;
            idealYPos -= alignments.spaceOnTop;
          } else {
            idealHeight += alignments.spaceOnBottom;
          }
        }
      } // If preferred horizontal alignment is possible


      if (!alignments[horizontalAlignment]) {
        let oppositeAlignment = horizontalAlignment === 'left' ? 'right' : 'left';

        if (alignments[oppositeAlignment]) {
          horizontalAlignment = oppositeAlignment;
        } else {
          // Determine which side has most space and cutoff at correct height
          if (alignments.spaceOnLeft > alignments.spaceOnRight) {
            horizontalAlignment = 'right';
            idealWidth += alignments.spaceOnLeft;
            idealXPos -= alignments.spaceOnLeft;
          } else {
            horizontalAlignment = 'left';
            idealWidth += alignments.spaceOnRight;
          }
        }
      }

      if (verticalAlignment === 'bottom') {
        idealYPos = idealYPos - dropdownBRect.height + (this.options.coverTrigger ? triggerBRect.height : 0);
      }

      if (horizontalAlignment === 'right') {
        idealXPos = idealXPos - dropdownBRect.width + triggerBRect.width;
      }

      return {
        x: idealXPos,
        y: idealYPos,
        verticalAlignment: verticalAlignment,
        horizontalAlignment: horizontalAlignment,
        height: idealHeight,
        width: idealWidth
      };
    }
    /**
     * Animate in dropdown
     */


    _animateIn() {
      anim.remove(this.dropdownEl);
      anim({
        targets: this.dropdownEl,
        opacity: {
          value: [0, 1],
          easing: 'easeOutQuad'
        },
        scaleX: [0.3, 1],
        scaleY: [0.3, 1],
        duration: this.options.inDuration,
        easing: 'easeOutQuint',
        complete: anim => {
          if (this.options.autoFocus) {
            this.dropdownEl.focus();
          } // onOpenEnd callback


          if (typeof this.options.onOpenEnd === 'function') {
            let elem = anim.animatables[0].target;
            this.options.onOpenEnd.call(elem, this.el);
          }
        }
      });
    }
    /**
     * Animate out dropdown
     */


    _animateOut() {
      anim.remove(this.dropdownEl);
      anim({
        targets: this.dropdownEl,
        opacity: {
          value: 0,
          easing: 'easeOutQuint'
        },
        scaleX: 0.3,
        scaleY: 0.3,
        duration: this.options.outDuration,
        easing: 'easeOutQuint',
        complete: anim => {
          this._resetDropdownStyles(); // onCloseEnd callback


          if (typeof this.options.onCloseEnd === 'function') {
            let elem = anim.animatables[0].target;
            this.options.onCloseEnd.call(this, this.el);
          }
        }
      });
    }
    /**
     * Place dropdown
     */


    _placeDropdown() {
      // Set width before calculating positionInfo
      let idealWidth = this.options.constrainWidth ? this.el.getBoundingClientRect().width : this.dropdownEl.getBoundingClientRect().width;
      this.dropdownEl.style.width = idealWidth + 'px';

      let positionInfo = this._getDropdownPosition();

      this.dropdownEl.style.left = positionInfo.x + 'px';
      this.dropdownEl.style.top = positionInfo.y + 'px';
      this.dropdownEl.style.height = positionInfo.height + 'px';
      this.dropdownEl.style.width = positionInfo.width + 'px';
      this.dropdownEl.style.transformOrigin = `${positionInfo.horizontalAlignment === 'left' ? '0' : '100%'} ${positionInfo.verticalAlignment === 'top' ? '0' : '100%'}`;
    }
    /**
     * Open Dropdown
     */


    open() {
      if (this.isOpen) {
        return;
      }

      this.isOpen = true; // onOpenStart callback

      if (typeof this.options.onOpenStart === 'function') {
        this.options.onOpenStart.call(this, this.el);
      } // Reset styles


      this._resetDropdownStyles();

      this.dropdownEl.style.display = 'block';

      this._placeDropdown();

      this._animateIn();

      this._setupTemporaryEventHandlers();
    }
    /**
     * Close Dropdown
     */


    close() {
      if (!this.isOpen) {
        return;
      }

      this.isOpen = false;
      this.focusedIndex = -1; // onCloseStart callback

      if (typeof this.options.onCloseStart === 'function') {
        this.options.onCloseStart.call(this, this.el);
      }

      this._animateOut();

      this._removeTemporaryEventHandlers();

      if (this.options.autoFocus) {
        this.el.focus();
      }
    }
    /**
     * Recalculate dimensions
     */


    recalculateDimensions() {
      if (this.isOpen) {
        this.$dropdownEl.css({
          width: '',
          height: '',
          left: '',
          top: '',
          'transform-origin': ''
        });

        this._placeDropdown();
      }
    }

  }
  /**
   * @static
   * @memberof Dropdown
   */


  Dropdown._dropdowns = [];
  window.M.Dropdown = Dropdown;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(Dropdown, 'dropdown', 'M_Dropdown');
  }
})(cash, M.anime);
},{"./component":"../node_modules/materialize-css/js/component.js"}],"../node_modules/materialize-css/js/autocomplete.js":[function(require,module,exports) {
"use strict";

var _component = _interopRequireDefault(require("./component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function ($) {
  'use strict';

  let _defaults = {
    data: {},
    // Autocomplete data set
    limit: Infinity,
    // Limit of results the autocomplete shows
    onAutocomplete: null,
    // Callback for when autocompleted
    minLength: 1,
    // Min characters before autocomplete starts
    sortFunction: function (a, b, inputString) {
      // Sort function for sorting autocomplete results
      return a.indexOf(inputString) - b.indexOf(inputString);
    }
  };
  /**
   * @class
   *
   */

  class Autocomplete extends _component.default {
    /**
     * Construct Autocomplete instance
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */
    constructor(el, options) {
      super(Autocomplete, el, options);
      this.el.M_Autocomplete = this;
      /**
       * Options for the autocomplete
       * @member Autocomplete#options
       * @prop {Number} duration
       * @prop {Number} dist
       * @prop {number} shift
       * @prop {number} padding
       * @prop {Boolean} fullWidth
       * @prop {Boolean} indicators
       * @prop {Boolean} noWrap
       * @prop {Function} onCycleTo
       */

      this.options = $.extend({}, Autocomplete.defaults, options); // Setup

      this.isOpen = false;
      this.count = 0;
      this.activeIndex = -1;
      this.oldVal;
      this.$inputField = this.$el.closest('.input-field');
      this.$active = $();
      this._mousedown = false;

      this._setupDropdown();

      this._setupEventHandlers();
    }

    static get defaults() {
      return _defaults;
    }

    static init(els, options) {
      return super.init(this, els, options);
    }
    /**
     * Get Instance
     */


    static getInstance(el) {
      let domElem = !!el.jquery ? el[0] : el;
      return domElem.M_Autocomplete;
    }
    /**
     * Teardown component
     */


    destroy() {
      this._removeEventHandlers();

      this._removeDropdown();

      this.el.M_Autocomplete = undefined;
    }
    /**
     * Setup Event Handlers
     */


    _setupEventHandlers() {
      this._handleInputBlurBound = this._handleInputBlur.bind(this);
      this._handleInputKeyupAndFocusBound = this._handleInputKeyupAndFocus.bind(this);
      this._handleInputKeydownBound = this._handleInputKeydown.bind(this);
      this._handleInputClickBound = this._handleInputClick.bind(this);
      this._handleContainerMousedownAndTouchstartBound = this._handleContainerMousedownAndTouchstart.bind(this);
      this._handleContainerMouseupAndTouchendBound = this._handleContainerMouseupAndTouchend.bind(this);
      this.el.addEventListener('blur', this._handleInputBlurBound);
      this.el.addEventListener('keyup', this._handleInputKeyupAndFocusBound);
      this.el.addEventListener('focus', this._handleInputKeyupAndFocusBound);
      this.el.addEventListener('keydown', this._handleInputKeydownBound);
      this.el.addEventListener('click', this._handleInputClickBound);
      this.container.addEventListener('mousedown', this._handleContainerMousedownAndTouchstartBound);
      this.container.addEventListener('mouseup', this._handleContainerMouseupAndTouchendBound);

      if (typeof window.ontouchstart !== 'undefined') {
        this.container.addEventListener('touchstart', this._handleContainerMousedownAndTouchstartBound);
        this.container.addEventListener('touchend', this._handleContainerMouseupAndTouchendBound);
      }
    }
    /**
     * Remove Event Handlers
     */


    _removeEventHandlers() {
      this.el.removeEventListener('blur', this._handleInputBlurBound);
      this.el.removeEventListener('keyup', this._handleInputKeyupAndFocusBound);
      this.el.removeEventListener('focus', this._handleInputKeyupAndFocusBound);
      this.el.removeEventListener('keydown', this._handleInputKeydownBound);
      this.el.removeEventListener('click', this._handleInputClickBound);
      this.container.removeEventListener('mousedown', this._handleContainerMousedownAndTouchstartBound);
      this.container.removeEventListener('mouseup', this._handleContainerMouseupAndTouchendBound);

      if (typeof window.ontouchstart !== 'undefined') {
        this.container.removeEventListener('touchstart', this._handleContainerMousedownAndTouchstartBound);
        this.container.removeEventListener('touchend', this._handleContainerMouseupAndTouchendBound);
      }
    }
    /**
     * Setup dropdown
     */


    _setupDropdown() {
      this.container = document.createElement('ul');
      this.container.id = `autocomplete-options-${M.guid()}`;
      $(this.container).addClass('autocomplete-content dropdown-content');
      this.$inputField.append(this.container);
      this.el.setAttribute('data-target', this.container.id);
      this.dropdown = M.Dropdown.init(this.el, {
        autoFocus: false,
        closeOnClick: false,
        coverTrigger: false,
        onItemClick: itemEl => {
          this.selectOption($(itemEl));
        }
      }); // Sketchy removal of dropdown click handler

      this.el.removeEventListener('click', this.dropdown._handleClickBound);
    }
    /**
     * Remove dropdown
     */


    _removeDropdown() {
      this.container.parentNode.removeChild(this.container);
    }
    /**
     * Handle Input Blur
     */


    _handleInputBlur() {
      if (!this._mousedown) {
        this.close();

        this._resetAutocomplete();
      }
    }
    /**
     * Handle Input Keyup and Focus
     * @param {Event} e
     */


    _handleInputKeyupAndFocus(e) {
      if (e.type === 'keyup') {
        Autocomplete._keydown = false;
      }

      this.count = 0;
      let val = this.el.value.toLowerCase(); // Don't capture enter or arrow key usage.

      if (e.keyCode === 13 || e.keyCode === 38 || e.keyCode === 40) {
        return;
      } // Check if the input isn't empty
      // Check if focus triggered by tab


      if (this.oldVal !== val && (M.tabPressed || e.type !== 'focus')) {
        this.open();
      } // Update oldVal


      this.oldVal = val;
    }
    /**
     * Handle Input Keydown
     * @param {Event} e
     */


    _handleInputKeydown(e) {
      Autocomplete._keydown = true; // Arrow keys and enter key usage

      let keyCode = e.keyCode,
          liElement,
          numItems = $(this.container).children('li').length; // select element on Enter

      if (keyCode === M.keys.ENTER && this.activeIndex >= 0) {
        liElement = $(this.container).children('li').eq(this.activeIndex);

        if (liElement.length) {
          this.selectOption(liElement);
          e.preventDefault();
        }

        return;
      } // Capture up and down key


      if (keyCode === M.keys.ARROW_UP || keyCode === M.keys.ARROW_DOWN) {
        e.preventDefault();

        if (keyCode === M.keys.ARROW_UP && this.activeIndex > 0) {
          this.activeIndex--;
        }

        if (keyCode === M.keys.ARROW_DOWN && this.activeIndex < numItems - 1) {
          this.activeIndex++;
        }

        this.$active.removeClass('active');

        if (this.activeIndex >= 0) {
          this.$active = $(this.container).children('li').eq(this.activeIndex);
          this.$active.addClass('active');
        }
      }
    }
    /**
     * Handle Input Click
     * @param {Event} e
     */


    _handleInputClick(e) {
      this.open();
    }
    /**
     * Handle Container Mousedown and Touchstart
     * @param {Event} e
     */


    _handleContainerMousedownAndTouchstart(e) {
      this._mousedown = true;
    }
    /**
     * Handle Container Mouseup and Touchend
     * @param {Event} e
     */


    _handleContainerMouseupAndTouchend(e) {
      this._mousedown = false;
    }
    /**
     * Highlight partial match
     */


    _highlight(string, $el) {
      let img = $el.find('img');
      let matchStart = $el.text().toLowerCase().indexOf('' + string.toLowerCase() + ''),
          matchEnd = matchStart + string.length - 1,
          beforeMatch = $el.text().slice(0, matchStart),
          matchText = $el.text().slice(matchStart, matchEnd + 1),
          afterMatch = $el.text().slice(matchEnd + 1);
      $el.html(`<span>${beforeMatch}<span class='highlight'>${matchText}</span>${afterMatch}</span>`);

      if (img.length) {
        $el.prepend(img);
      }
    }
    /**
     * Reset current element position
     */


    _resetCurrentElement() {
      this.activeIndex = -1;
      this.$active.removeClass('active');
    }
    /**
     * Reset autocomplete elements
     */


    _resetAutocomplete() {
      $(this.container).empty();

      this._resetCurrentElement();

      this.oldVal = null;
      this.isOpen = false;
      this._mousedown = false;
    }
    /**
     * Select autocomplete option
     * @param {Element} el  Autocomplete option list item element
     */


    selectOption(el) {
      let text = el.text().trim();
      this.el.value = text;
      this.$el.trigger('change');

      this._resetAutocomplete();

      this.close(); // Handle onAutocomplete callback.

      if (typeof this.options.onAutocomplete === 'function') {
        this.options.onAutocomplete.call(this, text);
      }
    }
    /**
     * Render dropdown content
     * @param {Object} data  data set
     * @param {String} val  current input value
     */


    _renderDropdown(data, val) {
      this._resetAutocomplete();

      let matchingData = []; // Gather all matching data

      for (let key in data) {
        if (data.hasOwnProperty(key) && key.toLowerCase().indexOf(val) !== -1) {
          // Break if past limit
          if (this.count >= this.options.limit) {
            break;
          }

          let entry = {
            data: data[key],
            key: key
          };
          matchingData.push(entry);
          this.count++;
        }
      } // Sort


      if (this.options.sortFunction) {
        let sortFunctionBound = (a, b) => {
          return this.options.sortFunction(a.key.toLowerCase(), b.key.toLowerCase(), val.toLowerCase());
        };

        matchingData.sort(sortFunctionBound);
      } // Render


      for (let i = 0; i < matchingData.length; i++) {
        let entry = matchingData[i];
        let $autocompleteOption = $('<li></li>');

        if (!!entry.data) {
          $autocompleteOption.append(`<img src="${entry.data}" class="right circle"><span>${entry.key}</span>`);
        } else {
          $autocompleteOption.append('<span>' + entry.key + '</span>');
        }

        $(this.container).append($autocompleteOption);

        this._highlight(val, $autocompleteOption);
      }
    }
    /**
     * Open Autocomplete Dropdown
     */


    open() {
      let val = this.el.value.toLowerCase();

      this._resetAutocomplete();

      if (val.length >= this.options.minLength) {
        this.isOpen = true;

        this._renderDropdown(this.options.data, val);
      } // Open dropdown


      if (!this.dropdown.isOpen) {
        this.dropdown.open();
      } else {
        // Recalculate dropdown when its already open
        this.dropdown.recalculateDimensions();
      }
    }
    /**
     * Close Autocomplete Dropdown
     */


    close() {
      this.dropdown.close();
    }
    /**
     * Update Data
     * @param {Object} data
     */


    updateData(data) {
      let val = this.el.value.toLowerCase();
      this.options.data = data;

      if (this.isOpen) {
        this._renderDropdown(data, val);
      }
    }

  }
  /**
   * @static
   * @memberof Autocomplete
   */


  Autocomplete._keydown = false;
  M.Autocomplete = Autocomplete;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(Autocomplete, 'autocomplete', 'M_Autocomplete');
  }
})(cash);
},{"./component":"../node_modules/materialize-css/js/component.js"}],"../node_modules/materialize-css/js/materialbox.js":[function(require,module,exports) {
"use strict";

var _component = _interopRequireDefault(require("./component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function ($, anim) {
  'use strict';

  let _defaults = {
    inDuration: 275,
    outDuration: 200,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null
  };
  /**
   * @class
   *
   */

  class Materialbox extends _component.default {
    /**
     * Construct Materialbox instance
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */
    constructor(el, options) {
      super(Materialbox, el, options);
      this.el.M_Materialbox = this;
      /**
       * Options for the modal
       * @member Materialbox#options
       * @prop {Number} [inDuration=275] - Length in ms of enter transition
       * @prop {Number} [outDuration=200] - Length in ms of exit transition
       * @prop {Function} onOpenStart - Callback function called before materialbox is opened
       * @prop {Function} onOpenEnd - Callback function called after materialbox is opened
       * @prop {Function} onCloseStart - Callback function called before materialbox is closed
       * @prop {Function} onCloseEnd - Callback function called after materialbox is closed
       */

      this.options = $.extend({}, Materialbox.defaults, options);
      this.overlayActive = false;
      this.doneAnimating = true;
      this.placeholder = $('<div></div>').addClass('material-placeholder');
      this.originalWidth = 0;
      this.originalHeight = 0;
      this.originInlineStyles = this.$el.attr('style');
      this.caption = this.el.getAttribute('data-caption') || ''; // Wrap

      this.$el.before(this.placeholder);
      this.placeholder.append(this.$el);

      this._setupEventHandlers();
    }

    static get defaults() {
      return _defaults;
    }

    static init(els, options) {
      return super.init(this, els, options);
    }
    /**
     * Get Instance
     */


    static getInstance(el) {
      let domElem = !!el.jquery ? el[0] : el;
      return domElem.M_Materialbox;
    }
    /**
     * Teardown component
     */


    destroy() {
      this._removeEventHandlers();

      this.el.M_Materialbox = undefined; // Unwrap image

      $(this.placeholder).after(this.el).remove();
      this.$el.removeAttr('style');
    }
    /**
     * Setup Event Handlers
     */


    _setupEventHandlers() {
      this._handleMaterialboxClickBound = this._handleMaterialboxClick.bind(this);
      this.el.addEventListener('click', this._handleMaterialboxClickBound);
    }
    /**
     * Remove Event Handlers
     */


    _removeEventHandlers() {
      this.el.removeEventListener('click', this._handleMaterialboxClickBound);
    }
    /**
     * Handle Materialbox Click
     * @param {Event} e
     */


    _handleMaterialboxClick(e) {
      // If already modal, return to original
      if (this.doneAnimating === false || this.overlayActive && this.doneAnimating) {
        this.close();
      } else {
        this.open();
      }
    }
    /**
     * Handle Window Scroll
     */


    _handleWindowScroll() {
      if (this.overlayActive) {
        this.close();
      }
    }
    /**
     * Handle Window Resize
     */


    _handleWindowResize() {
      if (this.overlayActive) {
        this.close();
      }
    }
    /**
     * Handle Window Resize
     * @param {Event} e
     */


    _handleWindowEscape(e) {
      // ESC key
      if (e.keyCode === 27 && this.doneAnimating && this.overlayActive) {
        this.close();
      }
    }
    /**
     * Find ancestors with overflow: hidden; and make visible
     */


    _makeAncestorsOverflowVisible() {
      this.ancestorsChanged = $();
      let ancestor = this.placeholder[0].parentNode;

      while (ancestor !== null && !$(ancestor).is(document)) {
        let curr = $(ancestor);

        if (curr.css('overflow') !== 'visible') {
          curr.css('overflow', 'visible');

          if (this.ancestorsChanged === undefined) {
            this.ancestorsChanged = curr;
          } else {
            this.ancestorsChanged = this.ancestorsChanged.add(curr);
          }
        }

        ancestor = ancestor.parentNode;
      }
    }
    /**
     * Animate image in
     */


    _animateImageIn() {
      let animOptions = {
        targets: this.el,
        height: [this.originalHeight, this.newHeight],
        width: [this.originalWidth, this.newWidth],
        left: M.getDocumentScrollLeft() + this.windowWidth / 2 - this.placeholder.offset().left - this.newWidth / 2,
        top: M.getDocumentScrollTop() + this.windowHeight / 2 - this.placeholder.offset().top - this.newHeight / 2,
        duration: this.options.inDuration,
        easing: 'easeOutQuad',
        complete: () => {
          this.doneAnimating = true; // onOpenEnd callback

          if (typeof this.options.onOpenEnd === 'function') {
            this.options.onOpenEnd.call(this, this.el);
          }
        }
      }; // Override max-width or max-height if needed

      this.maxWidth = this.$el.css('max-width');
      this.maxHeight = this.$el.css('max-height');

      if (this.maxWidth !== 'none') {
        animOptions.maxWidth = this.newWidth;
      }

      if (this.maxHeight !== 'none') {
        animOptions.maxHeight = this.newHeight;
      }

      anim(animOptions);
    }
    /**
     * Animate image out
     */


    _animateImageOut() {
      let animOptions = {
        targets: this.el,
        width: this.originalWidth,
        height: this.originalHeight,
        left: 0,
        top: 0,
        duration: this.options.outDuration,
        easing: 'easeOutQuad',
        complete: () => {
          this.placeholder.css({
            height: '',
            width: '',
            position: '',
            top: '',
            left: ''
          }); // Revert to width or height attribute

          if (this.attrWidth) {
            this.$el.attr('width', this.attrWidth);
          }

          if (this.attrHeight) {
            this.$el.attr('height', this.attrHeight);
          }

          this.$el.removeAttr('style');
          this.originInlineStyles && this.$el.attr('style', this.originInlineStyles); // Remove class

          this.$el.removeClass('active');
          this.doneAnimating = true; // Remove overflow overrides on ancestors

          if (this.ancestorsChanged.length) {
            this.ancestorsChanged.css('overflow', '');
          } // onCloseEnd callback


          if (typeof this.options.onCloseEnd === 'function') {
            this.options.onCloseEnd.call(this, this.el);
          }
        }
      };
      anim(animOptions);
    }
    /**
     * Update open and close vars
     */


    _updateVars() {
      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerHeight;
      this.caption = this.el.getAttribute('data-caption') || '';
    }
    /**
     * Open Materialbox
     */


    open() {
      this._updateVars();

      this.originalWidth = this.el.getBoundingClientRect().width;
      this.originalHeight = this.el.getBoundingClientRect().height; // Set states

      this.doneAnimating = false;
      this.$el.addClass('active');
      this.overlayActive = true; // onOpenStart callback

      if (typeof this.options.onOpenStart === 'function') {
        this.options.onOpenStart.call(this, this.el);
      } // Set positioning for placeholder


      this.placeholder.css({
        width: this.placeholder[0].getBoundingClientRect().width + 'px',
        height: this.placeholder[0].getBoundingClientRect().height + 'px',
        position: 'relative',
        top: 0,
        left: 0
      });

      this._makeAncestorsOverflowVisible(); // Set css on origin


      this.$el.css({
        position: 'absolute',
        'z-index': 1000,
        'will-change': 'left, top, width, height'
      }); // Change from width or height attribute to css

      this.attrWidth = this.$el.attr('width');
      this.attrHeight = this.$el.attr('height');

      if (this.attrWidth) {
        this.$el.css('width', this.attrWidth + 'px');
        this.$el.removeAttr('width');
      }

      if (this.attrHeight) {
        this.$el.css('width', this.attrHeight + 'px');
        this.$el.removeAttr('height');
      } // Add overlay


      this.$overlay = $('<div id="materialbox-overlay"></div>').css({
        opacity: 0
      }).one('click', () => {
        if (this.doneAnimating) {
          this.close();
        }
      }); // Put before in origin image to preserve z-index layering.

      this.$el.before(this.$overlay); // Set dimensions if needed

      let overlayOffset = this.$overlay[0].getBoundingClientRect();
      this.$overlay.css({
        width: this.windowWidth + 'px',
        height: this.windowHeight + 'px',
        left: -1 * overlayOffset.left + 'px',
        top: -1 * overlayOffset.top + 'px'
      });
      anim.remove(this.el);
      anim.remove(this.$overlay[0]); // Animate Overlay

      anim({
        targets: this.$overlay[0],
        opacity: 1,
        duration: this.options.inDuration,
        easing: 'easeOutQuad'
      }); // Add and animate caption if it exists

      if (this.caption !== '') {
        if (this.$photocaption) {
          anim.remove(this.$photoCaption[0]);
        }

        this.$photoCaption = $('<div class="materialbox-caption"></div>');
        this.$photoCaption.text(this.caption);
        $('body').append(this.$photoCaption);
        this.$photoCaption.css({
          display: 'inline'
        });
        anim({
          targets: this.$photoCaption[0],
          opacity: 1,
          duration: this.options.inDuration,
          easing: 'easeOutQuad'
        });
      } // Resize Image


      let ratio = 0;
      let widthPercent = this.originalWidth / this.windowWidth;
      let heightPercent = this.originalHeight / this.windowHeight;
      this.newWidth = 0;
      this.newHeight = 0;

      if (widthPercent > heightPercent) {
        ratio = this.originalHeight / this.originalWidth;
        this.newWidth = this.windowWidth * 0.9;
        this.newHeight = this.windowWidth * 0.9 * ratio;
      } else {
        ratio = this.originalWidth / this.originalHeight;
        this.newWidth = this.windowHeight * 0.9 * ratio;
        this.newHeight = this.windowHeight * 0.9;
      }

      this._animateImageIn(); // Handle Exit triggers


      this._handleWindowScrollBound = this._handleWindowScroll.bind(this);
      this._handleWindowResizeBound = this._handleWindowResize.bind(this);
      this._handleWindowEscapeBound = this._handleWindowEscape.bind(this);
      window.addEventListener('scroll', this._handleWindowScrollBound);
      window.addEventListener('resize', this._handleWindowResizeBound);
      window.addEventListener('keyup', this._handleWindowEscapeBound);
    }
    /**
     * Close Materialbox
     */


    close() {
      this._updateVars();

      this.doneAnimating = false; // onCloseStart callback

      if (typeof this.options.onCloseStart === 'function') {
        this.options.onCloseStart.call(this, this.el);
      }

      anim.remove(this.el);
      anim.remove(this.$overlay[0]);

      if (this.caption !== '') {
        anim.remove(this.$photoCaption[0]);
      } // disable exit handlers


      window.removeEventListener('scroll', this._handleWindowScrollBound);
      window.removeEventListener('resize', this._handleWindowResizeBound);
      window.removeEventListener('keyup', this._handleWindowEscapeBound);
      anim({
        targets: this.$overlay[0],
        opacity: 0,
        duration: this.options.outDuration,
        easing: 'easeOutQuad',
        complete: () => {
          this.overlayActive = false;
          this.$overlay.remove();
        }
      });

      this._animateImageOut(); // Remove Caption + reset css settings on image


      if (this.caption !== '') {
        anim({
          targets: this.$photoCaption[0],
          opacity: 0,
          duration: this.options.outDuration,
          easing: 'easeOutQuad',
          complete: () => {
            this.$photoCaption.remove();
          }
        });
      }
    }

  }

  M.Materialbox = Materialbox;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(Materialbox, 'materialbox', 'M_Materialbox');
  }
})(cash, M.anime);
},{"./component":"../node_modules/materialize-css/js/component.js"}],"app/js/important.js":[function(require,module,exports) {
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

addEventListener('DOMContentLoaded', function () {
  // console.log(document.styleSheets);
  var css; // Comprueba cual es la hoja de estilo principal

  var _iterator = _createForOfIteratorHelper(document.styleSheets),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var i = _step.value;
      console.log(i.href);
      if (i.href !== null && i.href.includes('http://localhost:' || i.href.includes('github'))) css = i;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var importants = []; // Encontrando todos los importants

  var _iterator2 = _createForOfIteratorHelper(css.cssRules),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var el = _step2.value;

      // console.log(el.selectorText);
      if (el.selectorText !== undefined && el.selectorText.includes('important')) {
        console.log(el); // Asignando los !importants a los selectores indicados

        importants.push(el.cssText.replace(/;/g, '!important;'));
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  console.log(importants); // Inserta todos los importants en el DOM

  importants.forEach(function (el) {
    return css.insertRule(el, 0);
  });
});
},{}],"app/js/materialize-config.js":[function(require,module,exports) {
// ScrollSpy
document.addEventListener('DOMContentLoaded', function () {
  var scrollspy = document.querySelectorAll('.scrollspy');
  M.ScrollSpy.init(scrollspy);
}); // Slider

var slider = document.querySelector('.slider');
M.Slider.init(slider, {
  indicators: false,
  height: 510,
  transition: 500,
  interval: 6000
}); // Slider

var sidenav = document.querySelector('.sidenav');
M.Sidenav.init(sidenav); // Autocomplete

var ac = document.querySelectorAll('.autocomplete');
M.Autocomplete.init(ac, {
  data: {
    'Aruba': null,
    'Cancun Mexico': null,
    'Hawaii': null,
    'Florida': null,
    'California': null,
    'Jamaica': null,
    'Islas Las Palmas': null
  }
}); // Lightbox

var materialbox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialbox);
},{}],"index.js":[function(require,module,exports) {
"use strict";

require("./app/vendor/materialize-src/sass/materialize.scss");

require("./app/scss/main.scss");

require("../node_modules/materialize-css/js/cash");

require("../node_modules/materialize-css/js/global");

require("../node_modules/materialize-css/js/anime.min");

require("./app/js/vendor/scrollreveal-config");

require("../node_modules/materialize-css/js/sidenav");

require("../node_modules/materialize-css/js/scrollspy");

require("../node_modules/materialize-css/js/waves");

require("../node_modules/materialize-css/js/slider");

require("../node_modules/materialize-css/js/forms");

require("../node_modules/materialize-css/js/dropdown");

require("../node_modules/materialize-css/js/autocomplete");

require("../node_modules/materialize-css/js/materialbox");

require("./app/js/important");

require("./app/js/materialize-config");
},{"./app/vendor/materialize-src/sass/materialize.scss":"app/vendor/materialize-src/sass/materialize.scss","./app/scss/main.scss":"app/scss/main.scss","../node_modules/materialize-css/js/cash":"../node_modules/materialize-css/js/cash.js","../node_modules/materialize-css/js/global":"../node_modules/materialize-css/js/global.js","../node_modules/materialize-css/js/anime.min":"../node_modules/materialize-css/js/anime.min.js","./app/js/vendor/scrollreveal-config":"app/js/vendor/scrollreveal-config.js","../node_modules/materialize-css/js/sidenav":"../node_modules/materialize-css/js/sidenav.js","../node_modules/materialize-css/js/scrollspy":"../node_modules/materialize-css/js/scrollspy.js","../node_modules/materialize-css/js/waves":"../node_modules/materialize-css/js/waves.js","../node_modules/materialize-css/js/slider":"../node_modules/materialize-css/js/slider.js","../node_modules/materialize-css/js/forms":"../node_modules/materialize-css/js/forms.js","../node_modules/materialize-css/js/dropdown":"../node_modules/materialize-css/js/dropdown.js","../node_modules/materialize-css/js/autocomplete":"../node_modules/materialize-css/js/autocomplete.js","../node_modules/materialize-css/js/materialbox":"../node_modules/materialize-css/js/materialbox.js","./app/js/important":"app/js/important.js","./app/js/materialize-config":"app/js/materialize-config.js"}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62068" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map