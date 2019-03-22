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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 121);
/******/ })
/************************************************************************/
/******/ ({

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(122);
module.exports = __webpack_require__(124);


/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sweet_scroll__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sweet_scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sweet_scroll__);


document.addEventListener('DOMContentLoaded', function () {
  var sweetScroll = new __WEBPACK_IMPORTED_MODULE_0_sweet_scroll___default.a({
    trigger: "a[href^='#']"
  });
}, false);

/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

/*! @preserve sweet-scroll v4.0.0 - tsuyoshiwada | MIT License */
(function (global, factory) {
     true ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.SweetScroll = factory());
}(this, function () { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    // @link https://github.com/JedWatson/exenv/blob/master/index.js
    var canUseDOM = !!(typeof window !== 'undefined' &&
        window.document &&
        window.document.createElement);
    var canUseHistory = !canUseDOM
        ? false
        : window.history && 'pushState' in window.history && window.location.protocol !== 'file:';
    var canUsePassiveOption = (function () {
        var support = false;
        if (!canUseDOM) {
            return support;
        }
        /* tslint:disable:no-empty */
        try {
            var win = window;
            var opts = Object.defineProperty({}, 'passive', {
                get: function () {
                    support = true;
                },
            });
            win.addEventListener('test', null, opts);
            win.removeEventListener('test', null, opts);
        }
        catch (e) { }
        /* tslint:enable */
        return support;
    })();

    var isString = function (obj) { return typeof obj === 'string'; };
    var isFunction = function (obj) { return typeof obj === 'function'; };
    var isArray = function (obj) { return Array.isArray(obj); };
    var isNumeric = function (obj) { return !isArray(obj) && obj - parseFloat(obj) + 1 >= 0; };
    var hasProp = function (obj, key) { return obj && obj.hasOwnProperty(key); };

    var raf = canUseDOM
        ? window.requestAnimationFrame.bind(window)
        : null;
    var caf = canUseDOM
        ? window.cancelAnimationFrame.bind(window)
        : null;

    /* tslint:disable:curly */
    /* tslint:disable:no-conditional-assignment */
    var cos = Math.cos, sin = Math.sin, pow = Math.pow, sqrt = Math.sqrt, PI = Math.PI;
    var easings = {
        linear: function (p) { return p; },
        easeInQuad: function (_, t, b, c, d) { return c * (t /= d) * t + b; },
        easeOutQuad: function (_, t, b, c, d) { return -c * (t /= d) * (t - 2) + b; },
        easeInOutQuad: function (_, t, b, c, d) {
            return (t /= d / 2) < 1 ? (c / 2) * t * t + b : (-c / 2) * (--t * (t - 2) - 1) + b;
        },
        easeInCubic: function (_, t, b, c, d) { return c * (t /= d) * t * t + b; },
        easeOutCubic: function (_, t, b, c, d) { return c * ((t = t / d - 1) * t * t + 1) + b; },
        easeInOutCubic: function (_, t, b, c, d) {
            return (t /= d / 2) < 1 ? (c / 2) * t * t * t + b : (c / 2) * ((t -= 2) * t * t + 2) + b;
        },
        easeInQuart: function (_, t, b, c, d) { return c * (t /= d) * t * t * t + b; },
        easeOutQuart: function (_, t, b, c, d) { return -c * ((t = t / d - 1) * t * t * t - 1) + b; },
        easeInOutQuart: function (_, t, b, c, d) {
            return (t /= d / 2) < 1 ? (c / 2) * t * t * t * t + b : (-c / 2) * ((t -= 2) * t * t * t - 2) + b;
        },
        easeInQuint: function (_, t, b, c, d) { return c * (t /= d) * t * t * t * t + b; },
        easeOutQuint: function (_, t, b, c, d) { return c * ((t = t / d - 1) * t * t * t * t + 1) + b; },
        easeInOutQuint: function (_, t, b, c, d) {
            return (t /= d / 2) < 1
                ? (c / 2) * t * t * t * t * t + b
                : (c / 2) * ((t -= 2) * t * t * t * t + 2) + b;
        },
        easeInSine: function (_, t, b, c, d) { return -c * cos((t / d) * (PI / 2)) + c + b; },
        easeOutSine: function (_, t, b, c, d) { return c * sin((t / d) * (PI / 2)) + b; },
        easeInOutSine: function (_, t, b, c, d) { return (-c / 2) * (cos((PI * t) / d) - 1) + b; },
        easeInExpo: function (_, t, b, c, d) { return (t === 0 ? b : c * pow(2, 10 * (t / d - 1)) + b); },
        easeOutExpo: function (_, t, b, c, d) { return (t === d ? b + c : c * (-pow(2, (-10 * t) / d) + 1) + b); },
        easeInOutExpo: function (_, t, b, c, d) {
            if (t === 0)
                return b;
            if (t === d)
                return b + c;
            if ((t /= d / 2) < 1)
                return (c / 2) * pow(2, 10 * (t - 1)) + b;
            return (c / 2) * (-pow(2, -10 * --t) + 2) + b;
        },
        easeInCirc: function (_, t, b, c, d) { return -c * (sqrt(1 - (t /= d) * t) - 1) + b; },
        easeOutCirc: function (_, t, b, c, d) { return c * sqrt(1 - (t = t / d - 1) * t) + b; },
        easeInOutCirc: function (_, t, b, c, d) {
            return (t /= d / 2) < 1
                ? (-c / 2) * (sqrt(1 - t * t) - 1) + b
                : (c / 2) * (sqrt(1 - (t -= 2) * t) + 1) + b;
        },
    };

    var $$ = function (selector) {
        return Array.prototype.slice.call((!selector ? [] : document.querySelectorAll(selector)));
    };
    var $ = function (selector) { return $$(selector).shift() || null; };
    var isElement = function (obj) { return obj instanceof Element; };
    var isWindow = function ($el) { return $el === window; };
    var isRootContainer = function ($el) {
        return $el === document.documentElement || $el === document.body;
    };
    var matches = function ($el, selector) {
        if (isElement(selector)) {
            return $el === selector;
        }
        var results = $$(selector);
        var i = results.length;
        // tslint:disable-next-line no-empty
        while (--i >= 0 && results[i] !== $el) { }
        return i > -1;
    };

    var getHeight = function ($el) {
        return Math.max($el.scrollHeight, $el.clientHeight, $el.offsetHeight);
    };
    var getWidth = function ($el) {
        return Math.max($el.scrollWidth, $el.clientWidth, $el.offsetWidth);
    };
    var getSize = function ($el) { return ({
        width: getWidth($el),
        height: getHeight($el),
    }); };
    var getViewportAndElementSizes = function ($el) {
        var isRoot = isWindow($el) || isRootContainer($el);
        return {
            viewport: {
                width: isRoot
                    ? Math.min(window.innerWidth, document.documentElement.clientWidth)
                    : $el.clientWidth,
                height: isRoot ? window.innerHeight : $el.clientHeight,
            },
            size: isRoot
                ? {
                    width: Math.max(getWidth(document.body), getWidth(document.documentElement)),
                    height: Math.max(getHeight(document.body), getHeight(document.documentElement)),
                }
                : getSize($el),
        };
    };

    var directionMethodMap = {
        y: 'scrollTop',
        x: 'scrollLeft',
    };
    var directionPropMap = {
        y: 'pageYOffset',
        x: 'pageXOffset',
    };
    var getScroll = function ($el, direction) {
        return isWindow($el) ? $el[directionPropMap[direction]] : $el[directionMethodMap[direction]];
    };
    var setScroll = function ($el, offset, direction) {
        if (isWindow($el)) {
            var top_1 = direction === 'y';
            $el.scrollTo(!top_1 ? offset : $el.pageXOffset, top_1 ? offset : $el.pageYOffset);
        }
        else {
            $el[directionMethodMap[direction]] = offset;
        }
    };
    var getOffset = function ($el, $context) {
        var rect = $el.getBoundingClientRect();
        if (rect.width || rect.height) {
            var scroll_1 = { top: 0, left: 0 };
            var $ctx = void 0;
            if (isWindow($context) || isRootContainer($context)) {
                $ctx = document.documentElement;
                scroll_1.top = window[directionPropMap.y];
                scroll_1.left = window[directionPropMap.x];
            }
            else {
                $ctx = $context;
                var cRect = $ctx.getBoundingClientRect();
                scroll_1.top = cRect.top * -1 + $ctx[directionMethodMap.y];
                scroll_1.left = cRect.left * -1 + $ctx[directionMethodMap.x];
            }
            return {
                top: rect.top + scroll_1.top - $ctx.clientTop,
                left: rect.left + scroll_1.left - $ctx.clientLeft,
            };
        }
        return rect;
    };

    var wheelEventName = (function () {
        if (!canUseDOM) {
            return 'wheel';
        }
        return 'onwheel' in document ? 'wheel' : 'mousewheel';
    })();
    var eventName = function (name) { return (name === 'wheel' ? wheelEventName : name); };
    var apply = function ($el, method, event, listener, passive) {
        event.split(' ').forEach(function (name) {
            $el[method](eventName(name), listener, canUsePassiveOption ? { passive: passive } : false);
        });
    };
    var addEvent = function ($el, event, listener, passive) { return apply($el, 'addEventListener', event, listener, passive); };
    var removeEvent = function ($el, event, listener, passive) { return apply($el, 'removeEventListener', event, listener, passive); };

    var reRelativeToken = /^(\+|-)=(\d+(?:\.\d+)?)$/;
    var parseCoordinate = function (coordinate, enableVertical) {
        var res = { top: 0, left: 0, relative: false };
        // Object ({ top: {n}, left: {n} })
        if (hasProp(coordinate, 'top') || hasProp(coordinate, 'left')) {
            res = __assign({}, res, coordinate);
            // Array ([{n}, [{n}])
        }
        else if (isArray(coordinate)) {
            if (coordinate.length > 1) {
                res.top = coordinate[0];
                res.left = coordinate[1];
            }
            else if (coordinate.length === 1) {
                res.top = enableVertical ? coordinate[0] : 0;
                res.left = !enableVertical ? coordinate[0] : 0;
            }
            else {
                return null;
            }
            // Number
        }
        else if (isNumeric(coordinate)) {
            if (enableVertical) {
                res.top = coordinate;
            }
            else {
                res.left = coordinate;
            }
            // String ('+={n}', '-={n}')
        }
        else if (isString(coordinate)) {
            var m = coordinate.trim().match(reRelativeToken);
            if (!m) {
                return null;
            }
            var op = m[1];
            var val = parseInt(m[2], 10);
            if (op === '+') {
                res.top = enableVertical ? val : 0;
                res.left = !enableVertical ? val : 0;
            }
            else {
                res.top = enableVertical ? -val : 0;
                res.left = !enableVertical ? -val : 0;
            }
            res.relative = true;
        }
        else {
            return null;
        }
        return res;
    };

    var defaultOptions = {
        trigger: '[data-scroll]',
        header: '[data-scroll-header]',
        duration: 1000,
        easing: 'easeOutQuint',
        offset: 0,
        vertical: true,
        horizontal: false,
        cancellable: true,
        updateURL: false,
        preventDefault: true,
        stopPropagation: true,
        // Callbacks
        before: null,
        after: null,
        cancel: null,
        complete: null,
        step: null,
    };

    var CONTAINER_CLICK_EVENT = 'click';
    var CONTAINER_STOP_EVENT = 'wheel touchstart touchmove';
    var SweetScroll = /** @class */ (function () {
        /**
         * Constructor
         */
        function SweetScroll(options, container) {
            var _this = this;
            this.$el = null;
            this.ctx = {
                $trigger: null,
                opts: null,
                progress: false,
                pos: null,
                startPos: null,
                easing: null,
                start: 0,
                id: 0,
                cancel: false,
                hash: null,
            };
            /**
             * Handle each frame of the animation.
             */
            this.loop = function (time) {
                var _a = _this, $el = _a.$el, ctx = _a.ctx;
                if (!ctx.start) {
                    ctx.start = time;
                }
                if (!ctx.progress || !$el) {
                    _this.stop();
                    return;
                }
                var options = ctx.opts;
                var offset = ctx.pos;
                var start = ctx.start;
                var startOffset = ctx.startPos;
                var easing = ctx.easing;
                var duration = options.duration;
                var directionMap = { top: 'y', left: 'x' };
                var timeElapsed = time - start;
                var t = Math.min(1, Math.max(timeElapsed / duration, 0));
                Object.keys(offset).forEach(function (key) {
                    var value = offset[key];
                    var initial = startOffset[key];
                    var delta = value - initial;
                    if (delta !== 0) {
                        var val = easing(t, duration * t, 0, 1, duration);
                        setScroll($el, Math.round(initial + delta * val), directionMap[key]);
                    }
                });
                if (timeElapsed <= duration) {
                    _this.hook(options, 'step', t);
                    ctx.id = SweetScroll.raf(_this.loop);
                }
                else {
                    _this.stop(true);
                }
            };
            /**
             * Handling of container click event.
             */
            this.handleClick = function (e) {
                var opts = _this.opts;
                var $el = e.target;
                for (; $el && $el !== document; $el = $el.parentNode) {
                    if (!matches($el, opts.trigger)) {
                        continue;
                    }
                    var dataOptions = JSON.parse($el.getAttribute('data-scroll-options') || '{}');
                    var data = $el.getAttribute('data-scroll');
                    var to = data || $el.getAttribute('href');
                    var options = __assign({}, opts, dataOptions);
                    var preventDefault = options.preventDefault, stopPropagation = options.stopPropagation, vertical = options.vertical, horizontal = options.horizontal;
                    if (preventDefault) {
                        e.preventDefault();
                    }
                    if (stopPropagation) {
                        e.stopPropagation();
                    }
                    // Passes the trigger element to callback
                    _this.ctx.$trigger = $el;
                    if (horizontal && vertical) {
                        _this.to(to, options);
                    }
                    else if (vertical) {
                        _this.toTop(to, options);
                    }
                    else if (horizontal) {
                        _this.toLeft(to, options);
                    }
                    break;
                }
            };
            /**
             * Handling of container stop events.
             */
            this.handleStop = function (e) {
                var ctx = _this.ctx;
                var opts = ctx.opts;
                if (opts && opts.cancellable) {
                    ctx.cancel = true;
                    _this.stop();
                }
                else {
                    e.preventDefault();
                }
            };
            this.opts = __assign({}, defaultOptions, (options || {}));
            var $container = null;
            if (canUseDOM) {
                if (typeof container === 'string') {
                    $container = $(container);
                }
                else if (container != null) {
                    $container = container;
                }
                else {
                    $container = window;
                }
            }
            this.$el = $container;
            if ($container) {
                this.bind(true, false);
            }
        }
        /**
         * SweetScroll instance factory.
         */
        SweetScroll.create = function (options, container) {
            return new SweetScroll(options, container);
        };
        /**
         * Scroll animation to the specified position.
         */
        SweetScroll.prototype.to = function (distance, options) {
            if (!canUseDOM) {
                return;
            }
            var _a = this, $el = _a.$el, ctx = _a.ctx, currentOptions = _a.opts;
            var $trigger = ctx.$trigger;
            var opts = __assign({}, currentOptions, (options || {}));
            var optOffset = opts.offset, vertical = opts.vertical, horizontal = opts.horizontal;
            var $header = isElement(opts.header) ? opts.header : $(opts.header);
            var reg = /^#/;
            var hash = isString(distance) && reg.test(distance) ? distance : null;
            ctx.opts = opts; // Temporary options
            ctx.cancel = false; // Disable the call flag of `cancel`
            ctx.hash = hash;
            // Stop current animation
            this.stop();
            // Does not move if the container is not found
            if (!$el) {
                return;
            }
            // Get scroll offset
            var offset = parseCoordinate(optOffset, vertical);
            var coordinate = parseCoordinate(distance, vertical);
            var scroll = { top: 0, left: 0 };
            if (coordinate) {
                if (coordinate.relative) {
                    var current = getScroll($el, vertical ? 'y' : 'x');
                    scroll.top = vertical ? current + coordinate.top : coordinate.top;
                    scroll.left = !vertical ? current + coordinate.left : coordinate.left;
                }
                else {
                    scroll = coordinate;
                }
            }
            else if (isString(distance) && distance !== '#') {
                var $target = $(distance);
                if (!$target) {
                    return;
                }
                scroll = getOffset($target, $el);
            }
            if (offset) {
                scroll.top += offset.top;
                scroll.left += offset.left;
            }
            if ($header) {
                scroll.top = Math.max(0, scroll.top - getSize($header).height);
            }
            // Normalize scroll offset
            var _b = getViewportAndElementSizes($el), viewport = _b.viewport, size = _b.size;
            scroll.top = vertical
                ? Math.max(0, Math.min(size.height - viewport.height, scroll.top))
                : getScroll($el, 'y');
            scroll.left = horizontal
                ? Math.max(0, Math.min(size.width - viewport.width, scroll.left))
                : getScroll($el, 'x');
            // Call `before`
            // Stop scrolling when it returns false
            if (this.hook(opts, 'before', scroll, $trigger) === false) {
                ctx.opts = null;
                return;
            }
            // Set offset
            ctx.pos = scroll;
            // Run animation!!
            this.start(opts);
            // Bind stop events
            this.bind(false, true);
        };
        /**
         * Scroll animation to specified left position.
         */
        SweetScroll.prototype.toTop = function (distance, options) {
            this.to(distance, __assign({}, (options || {}), { vertical: true, horizontal: false }));
        };
        /**
         * Scroll animation to specified top position.
         */
        SweetScroll.prototype.toLeft = function (distance, options) {
            this.to(distance, __assign({}, (options || {}), { vertical: false, horizontal: true }));
        };
        /**
         * Scroll animation to specified element.
         */
        SweetScroll.prototype.toElement = function ($element, options) {
            var $el = this.$el;
            if (!canUseDOM || !$el) {
                return;
            }
            this.to(getOffset($element, $el), options || {});
        };
        /**
         * Stop the current scroll animation.
         */
        SweetScroll.prototype.stop = function (gotoEnd) {
            if (gotoEnd === void 0) { gotoEnd = false; }
            var _a = this, $el = _a.$el, ctx = _a.ctx;
            var pos = ctx.pos;
            if (!$el || !ctx.progress) {
                return;
            }
            SweetScroll.caf(ctx.id);
            ctx.progress = false;
            ctx.start = 0;
            ctx.id = 0;
            if (gotoEnd && pos) {
                setScroll($el, pos.left, 'x');
                setScroll($el, pos.top, 'y');
            }
            this.complete();
        };
        /**
         * Update options.
         */
        SweetScroll.prototype.update = function (options) {
            if (this.$el) {
                var opts = __assign({}, this.opts, options);
                this.stop();
                this.unbind(true, true);
                this.opts = opts;
                this.bind(true, false);
            }
        };
        /**
         * Destroy instance.
         */
        SweetScroll.prototype.destroy = function () {
            if (this.$el) {
                this.stop();
                this.unbind(true, true);
                this.$el = null;
            }
        };
        /**
         * Callback methods.
         */
        /* tslint:disable:no-empty */
        SweetScroll.prototype.onBefore = function (_, __) {
            return true;
        };
        SweetScroll.prototype.onStep = function (_) { };
        SweetScroll.prototype.onAfter = function (_, __) { };
        SweetScroll.prototype.onCancel = function () { };
        SweetScroll.prototype.onComplete = function (_) { };
        /* tslint:enable */
        /**
         * Start scrolling animation.
         */
        SweetScroll.prototype.start = function (opts) {
            var ctx = this.ctx;
            ctx.opts = opts;
            ctx.progress = true;
            ctx.easing = isFunction(opts.easing)
                ? opts.easing
                : easings[opts.easing];
            // Update start offset.
            var $container = this.$el;
            var start = {
                top: getScroll($container, 'y'),
                left: getScroll($container, 'x'),
            };
            ctx.startPos = start;
            // Loop
            ctx.id = SweetScroll.raf(this.loop);
        };
        /**
         * Handle the completion of scrolling animation.
         */
        SweetScroll.prototype.complete = function () {
            var _a = this, $el = _a.$el, ctx = _a.ctx;
            var hash = ctx.hash, cancel = ctx.cancel, opts = ctx.opts, pos = ctx.pos, $trigger = ctx.$trigger;
            if (!$el || !opts) {
                return;
            }
            if (hash != null && hash !== window.location.hash) {
                var updateURL = opts.updateURL;
                if (canUseDOM && canUseHistory && updateURL !== false) {
                    window.history[updateURL === 'replace' ? 'replaceState' : 'pushState'](null, '', hash);
                }
            }
            this.unbind(false, true);
            ctx.opts = null;
            ctx.$trigger = null;
            if (cancel) {
                this.hook(opts, 'cancel');
            }
            else {
                this.hook(opts, 'after', pos, $trigger);
            }
            this.hook(opts, 'complete', cancel);
        };
        /**
         * Callback function and method call.
         */
        SweetScroll.prototype.hook = function (options, type) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            var _a;
            var callback = options[type];
            var callbackResult;
            var methodResult;
            // callback
            if (isFunction(callback)) {
                callbackResult = callback.apply(this, args.concat([this]));
            }
            // method
            methodResult = (_a = this)["on" + (type[0].toUpperCase() + type.slice(1))].apply(_a, args);
            return callbackResult !== undefined ? callbackResult : methodResult;
        };
        /**
         * Bind events of container element.
         */
        SweetScroll.prototype.bind = function (click, stop) {
            var _a = this, $el = _a.$el, opts = _a.ctx.opts;
            if ($el) {
                if (click) {
                    addEvent($el, CONTAINER_CLICK_EVENT, this.handleClick, false);
                }
                if (stop) {
                    addEvent($el, CONTAINER_STOP_EVENT, this.handleStop, opts ? opts.cancellable : true);
                }
            }
        };
        /**
         * Unbind events of container element.
         */
        SweetScroll.prototype.unbind = function (click, stop) {
            var _a = this, $el = _a.$el, opts = _a.ctx.opts;
            if ($el) {
                if (click) {
                    removeEvent($el, CONTAINER_CLICK_EVENT, this.handleClick, false);
                }
                if (stop) {
                    removeEvent($el, CONTAINER_STOP_EVENT, this.handleStop, opts ? opts.cancellable : true);
                }
            }
        };
        /**
         * You can set Polyfill (or Ponyfill) for browsers that do not support requestAnimationFrame.
         */
        SweetScroll.raf = raf;
        SweetScroll.caf = caf;
        return SweetScroll;
    }());

    return SweetScroll;

}));


/***/ }),

/***/ 124:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGIwM2Y5Y2MwMDBkNTQ3MjNjNDAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N3ZWV0LXNjcm9sbC9zd2VldC1zY3JvbGwuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9zY3NzL3N0eWxlLnNjc3M/OTAzYiJdLCJuYW1lcyI6WyJkb2N1bWVudCIsInN3ZWV0U2Nyb2xsIiwidHJpZ2dlciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REE7QUFBQTtBQUFBO0FBQUE7O0FBRUFBLDhDQUE4QyxZQUFNO0FBQ2xELE1BQU1DLGNBQWMseURBQWdCO0FBQ2hDQyxhQUFTO0FBRHVCLEdBQWhCLENBQXBCO0FBREZGLFU7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0EsSUFBSSxLQUE0RDtBQUNoRTtBQUNBO0FBQ0EsQ0FBQyxvQkFBb0I7O0FBRXJCO0FBQ0E7QUFDQSxtRUFBbUU7QUFDbkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9EQUFvRCxPQUFPO0FBQzNEO0FBQ0E7QUFDQTtBQUNB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QUNBO0FBQ0EscURBQXFEO0FBQ3JELDBEQUEwRDtBQUMxRCxzREFBc0Q7QUFDdEQseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHVCQUF1QjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBLENBQUM7Ozs7Ozs7O0FDanJCRCx5QyIsImZpbGUiOiIvcHVibGljL2NvbW1vbi9qcy9zY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTIxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwYjAzZjljYzAwMGQ1NDcyM2M0MCIsImltcG9ydCBTd2VldFNjcm9sbCBmcm9tICdzd2VldC1zY3JvbGwnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zdCBzd2VldFNjcm9sbCA9IG5ldyBTd2VldFNjcm9sbCh7XG4gICAgICB0cmlnZ2VyOiBcImFbaHJlZl49JyMnXVwiXG4gIH0pO1xufSwgZmFsc2UpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc2NyaXB0LmpzIiwiLyohIEBwcmVzZXJ2ZSBzd2VldC1zY3JvbGwgdjQuMC4wIC0gdHN1eW9zaGl3YWRhIHwgTUlUIExpY2Vuc2UgKi9cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuICAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG4gICAgKGdsb2JhbCA9IGdsb2JhbCB8fCBzZWxmLCBnbG9iYWwuU3dlZXRTY3JvbGwgPSBmYWN0b3J5KCkpO1xufSh0aGlzLCBmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuICAgIC8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAgICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxuICAgIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbiAgICBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuICAgIFRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuICAgIEtJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuICAgIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbiAgICBNRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuICAgIFNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG4gICAgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuXHJcbiAgICB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICB9O1xuXG4gICAgLy8gQGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL0plZFdhdHNvbi9leGVudi9ibG9iL21hc3Rlci9pbmRleC5qc1xyXG4gICAgdmFyIGNhblVzZURPTSA9ICEhKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXHJcbiAgICAgICAgd2luZG93LmRvY3VtZW50ICYmXHJcbiAgICAgICAgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xyXG4gICAgdmFyIGNhblVzZUhpc3RvcnkgPSAhY2FuVXNlRE9NXHJcbiAgICAgICAgPyBmYWxzZVxyXG4gICAgICAgIDogd2luZG93Lmhpc3RvcnkgJiYgJ3B1c2hTdGF0ZScgaW4gd2luZG93Lmhpc3RvcnkgJiYgd2luZG93LmxvY2F0aW9uLnByb3RvY29sICE9PSAnZmlsZTonO1xyXG4gICAgdmFyIGNhblVzZVBhc3NpdmVPcHRpb24gPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBzdXBwb3J0ID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKCFjYW5Vc2VET00pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN1cHBvcnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIHRzbGludDpkaXNhYmxlOm5vLWVtcHR5ICovXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdmFyIHdpbiA9IHdpbmRvdztcclxuICAgICAgICAgICAgdmFyIG9wdHMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdwYXNzaXZlJywge1xyXG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VwcG9ydCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgd2luLmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBudWxsLCBvcHRzKTtcclxuICAgICAgICAgICAgd2luLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBudWxsLCBvcHRzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHsgfVxyXG4gICAgICAgIC8qIHRzbGludDplbmFibGUgKi9cclxuICAgICAgICByZXR1cm4gc3VwcG9ydDtcclxuICAgIH0pKCk7XG5cbiAgICB2YXIgaXNTdHJpbmcgPSBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqID09PSAnc3RyaW5nJzsgfTtcclxuICAgIHZhciBpc0Z1bmN0aW9uID0gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJzsgfTtcclxuICAgIHZhciBpc0FycmF5ID0gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gQXJyYXkuaXNBcnJheShvYmopOyB9O1xyXG4gICAgdmFyIGlzTnVtZXJpYyA9IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuICFpc0FycmF5KG9iaikgJiYgb2JqIC0gcGFyc2VGbG9hdChvYmopICsgMSA+PSAwOyB9O1xyXG4gICAgdmFyIGhhc1Byb3AgPSBmdW5jdGlvbiAob2JqLCBrZXkpIHsgcmV0dXJuIG9iaiAmJiBvYmouaGFzT3duUHJvcGVydHkoa2V5KTsgfTtcblxuICAgIHZhciByYWYgPSBjYW5Vc2VET01cclxuICAgICAgICA/IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUuYmluZCh3aW5kb3cpXHJcbiAgICAgICAgOiBudWxsO1xyXG4gICAgdmFyIGNhZiA9IGNhblVzZURPTVxyXG4gICAgICAgID8gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lLmJpbmQod2luZG93KVxyXG4gICAgICAgIDogbnVsbDtcblxuICAgIC8qIHRzbGludDpkaXNhYmxlOmN1cmx5ICovXHJcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZTpuby1jb25kaXRpb25hbC1hc3NpZ25tZW50ICovXHJcbiAgICB2YXIgY29zID0gTWF0aC5jb3MsIHNpbiA9IE1hdGguc2luLCBwb3cgPSBNYXRoLnBvdywgc3FydCA9IE1hdGguc3FydCwgUEkgPSBNYXRoLlBJO1xyXG4gICAgdmFyIGVhc2luZ3MgPSB7XHJcbiAgICAgICAgbGluZWFyOiBmdW5jdGlvbiAocCkgeyByZXR1cm4gcDsgfSxcclxuICAgICAgICBlYXNlSW5RdWFkOiBmdW5jdGlvbiAoXywgdCwgYiwgYywgZCkgeyByZXR1cm4gYyAqICh0IC89IGQpICogdCArIGI7IH0sXHJcbiAgICAgICAgZWFzZU91dFF1YWQ6IGZ1bmN0aW9uIChfLCB0LCBiLCBjLCBkKSB7IHJldHVybiAtYyAqICh0IC89IGQpICogKHQgLSAyKSArIGI7IH0sXHJcbiAgICAgICAgZWFzZUluT3V0UXVhZDogZnVuY3Rpb24gKF8sIHQsIGIsIGMsIGQpIHtcclxuICAgICAgICAgICAgcmV0dXJuICh0IC89IGQgLyAyKSA8IDEgPyAoYyAvIDIpICogdCAqIHQgKyBiIDogKC1jIC8gMikgKiAoLS10ICogKHQgLSAyKSAtIDEpICsgYjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVhc2VJbkN1YmljOiBmdW5jdGlvbiAoXywgdCwgYiwgYywgZCkgeyByZXR1cm4gYyAqICh0IC89IGQpICogdCAqIHQgKyBiOyB9LFxyXG4gICAgICAgIGVhc2VPdXRDdWJpYzogZnVuY3Rpb24gKF8sIHQsIGIsIGMsIGQpIHsgcmV0dXJuIGMgKiAoKHQgPSB0IC8gZCAtIDEpICogdCAqIHQgKyAxKSArIGI7IH0sXHJcbiAgICAgICAgZWFzZUluT3V0Q3ViaWM6IGZ1bmN0aW9uIChfLCB0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAodCAvPSBkIC8gMikgPCAxID8gKGMgLyAyKSAqIHQgKiB0ICogdCArIGIgOiAoYyAvIDIpICogKCh0IC09IDIpICogdCAqIHQgKyAyKSArIGI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlYXNlSW5RdWFydDogZnVuY3Rpb24gKF8sIHQsIGIsIGMsIGQpIHsgcmV0dXJuIGMgKiAodCAvPSBkKSAqIHQgKiB0ICogdCArIGI7IH0sXHJcbiAgICAgICAgZWFzZU91dFF1YXJ0OiBmdW5jdGlvbiAoXywgdCwgYiwgYywgZCkgeyByZXR1cm4gLWMgKiAoKHQgPSB0IC8gZCAtIDEpICogdCAqIHQgKiB0IC0gMSkgKyBiOyB9LFxyXG4gICAgICAgIGVhc2VJbk91dFF1YXJ0OiBmdW5jdGlvbiAoXywgdCwgYiwgYywgZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKHQgLz0gZCAvIDIpIDwgMSA/IChjIC8gMikgKiB0ICogdCAqIHQgKiB0ICsgYiA6ICgtYyAvIDIpICogKCh0IC09IDIpICogdCAqIHQgKiB0IC0gMikgKyBiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZWFzZUluUXVpbnQ6IGZ1bmN0aW9uIChfLCB0LCBiLCBjLCBkKSB7IHJldHVybiBjICogKHQgLz0gZCkgKiB0ICogdCAqIHQgKiB0ICsgYjsgfSxcclxuICAgICAgICBlYXNlT3V0UXVpbnQ6IGZ1bmN0aW9uIChfLCB0LCBiLCBjLCBkKSB7IHJldHVybiBjICogKCh0ID0gdCAvIGQgLSAxKSAqIHQgKiB0ICogdCAqIHQgKyAxKSArIGI7IH0sXHJcbiAgICAgICAgZWFzZUluT3V0UXVpbnQ6IGZ1bmN0aW9uIChfLCB0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAodCAvPSBkIC8gMikgPCAxXHJcbiAgICAgICAgICAgICAgICA/IChjIC8gMikgKiB0ICogdCAqIHQgKiB0ICogdCArIGJcclxuICAgICAgICAgICAgICAgIDogKGMgLyAyKSAqICgodCAtPSAyKSAqIHQgKiB0ICogdCAqIHQgKyAyKSArIGI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlYXNlSW5TaW5lOiBmdW5jdGlvbiAoXywgdCwgYiwgYywgZCkgeyByZXR1cm4gLWMgKiBjb3MoKHQgLyBkKSAqIChQSSAvIDIpKSArIGMgKyBiOyB9LFxyXG4gICAgICAgIGVhc2VPdXRTaW5lOiBmdW5jdGlvbiAoXywgdCwgYiwgYywgZCkgeyByZXR1cm4gYyAqIHNpbigodCAvIGQpICogKFBJIC8gMikpICsgYjsgfSxcclxuICAgICAgICBlYXNlSW5PdXRTaW5lOiBmdW5jdGlvbiAoXywgdCwgYiwgYywgZCkgeyByZXR1cm4gKC1jIC8gMikgKiAoY29zKChQSSAqIHQpIC8gZCkgLSAxKSArIGI7IH0sXHJcbiAgICAgICAgZWFzZUluRXhwbzogZnVuY3Rpb24gKF8sIHQsIGIsIGMsIGQpIHsgcmV0dXJuICh0ID09PSAwID8gYiA6IGMgKiBwb3coMiwgMTAgKiAodCAvIGQgLSAxKSkgKyBiKTsgfSxcclxuICAgICAgICBlYXNlT3V0RXhwbzogZnVuY3Rpb24gKF8sIHQsIGIsIGMsIGQpIHsgcmV0dXJuICh0ID09PSBkID8gYiArIGMgOiBjICogKC1wb3coMiwgKC0xMCAqIHQpIC8gZCkgKyAxKSArIGIpOyB9LFxyXG4gICAgICAgIGVhc2VJbk91dEV4cG86IGZ1bmN0aW9uIChfLCB0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIGlmICh0ID09PSAwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGI7XHJcbiAgICAgICAgICAgIGlmICh0ID09PSBkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGIgKyBjO1xyXG4gICAgICAgICAgICBpZiAoKHQgLz0gZCAvIDIpIDwgMSlcclxuICAgICAgICAgICAgICAgIHJldHVybiAoYyAvIDIpICogcG93KDIsIDEwICogKHQgLSAxKSkgKyBiO1xyXG4gICAgICAgICAgICByZXR1cm4gKGMgLyAyKSAqICgtcG93KDIsIC0xMCAqIC0tdCkgKyAyKSArIGI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlYXNlSW5DaXJjOiBmdW5jdGlvbiAoXywgdCwgYiwgYywgZCkgeyByZXR1cm4gLWMgKiAoc3FydCgxIC0gKHQgLz0gZCkgKiB0KSAtIDEpICsgYjsgfSxcclxuICAgICAgICBlYXNlT3V0Q2lyYzogZnVuY3Rpb24gKF8sIHQsIGIsIGMsIGQpIHsgcmV0dXJuIGMgKiBzcXJ0KDEgLSAodCA9IHQgLyBkIC0gMSkgKiB0KSArIGI7IH0sXHJcbiAgICAgICAgZWFzZUluT3V0Q2lyYzogZnVuY3Rpb24gKF8sIHQsIGIsIGMsIGQpIHtcclxuICAgICAgICAgICAgcmV0dXJuICh0IC89IGQgLyAyKSA8IDFcclxuICAgICAgICAgICAgICAgID8gKC1jIC8gMikgKiAoc3FydCgxIC0gdCAqIHQpIC0gMSkgKyBiXHJcbiAgICAgICAgICAgICAgICA6IChjIC8gMikgKiAoc3FydCgxIC0gKHQgLT0gMikgKiB0KSArIDEpICsgYjtcclxuICAgICAgICB9LFxyXG4gICAgfTtcblxuICAgIHZhciAkJCA9IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCgoIXNlbGVjdG9yID8gW10gOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSkpO1xyXG4gICAgfTtcclxuICAgIHZhciAkID0gZnVuY3Rpb24gKHNlbGVjdG9yKSB7IHJldHVybiAkJChzZWxlY3Rvcikuc2hpZnQoKSB8fCBudWxsOyB9O1xyXG4gICAgdmFyIGlzRWxlbWVudCA9IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIEVsZW1lbnQ7IH07XHJcbiAgICB2YXIgaXNXaW5kb3cgPSBmdW5jdGlvbiAoJGVsKSB7IHJldHVybiAkZWwgPT09IHdpbmRvdzsgfTtcclxuICAgIHZhciBpc1Jvb3RDb250YWluZXIgPSBmdW5jdGlvbiAoJGVsKSB7XHJcbiAgICAgICAgcmV0dXJuICRlbCA9PT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8ICRlbCA9PT0gZG9jdW1lbnQuYm9keTtcclxuICAgIH07XHJcbiAgICB2YXIgbWF0Y2hlcyA9IGZ1bmN0aW9uICgkZWwsIHNlbGVjdG9yKSB7XHJcbiAgICAgICAgaWYgKGlzRWxlbWVudChzZWxlY3RvcikpIHtcclxuICAgICAgICAgICAgcmV0dXJuICRlbCA9PT0gc2VsZWN0b3I7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciByZXN1bHRzID0gJCQoc2VsZWN0b3IpO1xyXG4gICAgICAgIHZhciBpID0gcmVzdWx0cy5sZW5ndGg7XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWVtcHR5XHJcbiAgICAgICAgd2hpbGUgKC0taSA+PSAwICYmIHJlc3VsdHNbaV0gIT09ICRlbCkgeyB9XHJcbiAgICAgICAgcmV0dXJuIGkgPiAtMTtcclxuICAgIH07XG5cbiAgICB2YXIgZ2V0SGVpZ2h0ID0gZnVuY3Rpb24gKCRlbCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLm1heCgkZWwuc2Nyb2xsSGVpZ2h0LCAkZWwuY2xpZW50SGVpZ2h0LCAkZWwub2Zmc2V0SGVpZ2h0KTtcclxuICAgIH07XHJcbiAgICB2YXIgZ2V0V2lkdGggPSBmdW5jdGlvbiAoJGVsKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KCRlbC5zY3JvbGxXaWR0aCwgJGVsLmNsaWVudFdpZHRoLCAkZWwub2Zmc2V0V2lkdGgpO1xyXG4gICAgfTtcclxuICAgIHZhciBnZXRTaXplID0gZnVuY3Rpb24gKCRlbCkgeyByZXR1cm4gKHtcclxuICAgICAgICB3aWR0aDogZ2V0V2lkdGgoJGVsKSxcclxuICAgICAgICBoZWlnaHQ6IGdldEhlaWdodCgkZWwpLFxyXG4gICAgfSk7IH07XHJcbiAgICB2YXIgZ2V0Vmlld3BvcnRBbmRFbGVtZW50U2l6ZXMgPSBmdW5jdGlvbiAoJGVsKSB7XHJcbiAgICAgICAgdmFyIGlzUm9vdCA9IGlzV2luZG93KCRlbCkgfHwgaXNSb290Q29udGFpbmVyKCRlbCk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdmlld3BvcnQ6IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBpc1Jvb3RcclxuICAgICAgICAgICAgICAgICAgICA/IE1hdGgubWluKHdpbmRvdy5pbm5lcldpZHRoLCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpXHJcbiAgICAgICAgICAgICAgICAgICAgOiAkZWwuY2xpZW50V2lkdGgsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGlzUm9vdCA/IHdpbmRvdy5pbm5lckhlaWdodCA6ICRlbC5jbGllbnRIZWlnaHQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNpemU6IGlzUm9vdFxyXG4gICAgICAgICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IE1hdGgubWF4KGdldFdpZHRoKGRvY3VtZW50LmJvZHkpLCBnZXRXaWR0aChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpKSxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IE1hdGgubWF4KGdldEhlaWdodChkb2N1bWVudC5ib2R5KSwgZ2V0SGVpZ2h0KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkpLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgOiBnZXRTaXplKCRlbCksXHJcbiAgICAgICAgfTtcclxuICAgIH07XG5cbiAgICB2YXIgZGlyZWN0aW9uTWV0aG9kTWFwID0ge1xyXG4gICAgICAgIHk6ICdzY3JvbGxUb3AnLFxyXG4gICAgICAgIHg6ICdzY3JvbGxMZWZ0JyxcclxuICAgIH07XHJcbiAgICB2YXIgZGlyZWN0aW9uUHJvcE1hcCA9IHtcclxuICAgICAgICB5OiAncGFnZVlPZmZzZXQnLFxyXG4gICAgICAgIHg6ICdwYWdlWE9mZnNldCcsXHJcbiAgICB9O1xyXG4gICAgdmFyIGdldFNjcm9sbCA9IGZ1bmN0aW9uICgkZWwsIGRpcmVjdGlvbikge1xyXG4gICAgICAgIHJldHVybiBpc1dpbmRvdygkZWwpID8gJGVsW2RpcmVjdGlvblByb3BNYXBbZGlyZWN0aW9uXV0gOiAkZWxbZGlyZWN0aW9uTWV0aG9kTWFwW2RpcmVjdGlvbl1dO1xyXG4gICAgfTtcclxuICAgIHZhciBzZXRTY3JvbGwgPSBmdW5jdGlvbiAoJGVsLCBvZmZzZXQsIGRpcmVjdGlvbikge1xyXG4gICAgICAgIGlmIChpc1dpbmRvdygkZWwpKSB7XHJcbiAgICAgICAgICAgIHZhciB0b3BfMSA9IGRpcmVjdGlvbiA9PT0gJ3knO1xyXG4gICAgICAgICAgICAkZWwuc2Nyb2xsVG8oIXRvcF8xID8gb2Zmc2V0IDogJGVsLnBhZ2VYT2Zmc2V0LCB0b3BfMSA/IG9mZnNldCA6ICRlbC5wYWdlWU9mZnNldCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAkZWxbZGlyZWN0aW9uTWV0aG9kTWFwW2RpcmVjdGlvbl1dID0gb2Zmc2V0O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB2YXIgZ2V0T2Zmc2V0ID0gZnVuY3Rpb24gKCRlbCwgJGNvbnRleHQpIHtcclxuICAgICAgICB2YXIgcmVjdCA9ICRlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBpZiAocmVjdC53aWR0aCB8fCByZWN0LmhlaWdodCkge1xyXG4gICAgICAgICAgICB2YXIgc2Nyb2xsXzEgPSB7IHRvcDogMCwgbGVmdDogMCB9O1xyXG4gICAgICAgICAgICB2YXIgJGN0eCA9IHZvaWQgMDtcclxuICAgICAgICAgICAgaWYgKGlzV2luZG93KCRjb250ZXh0KSB8fCBpc1Jvb3RDb250YWluZXIoJGNvbnRleHQpKSB7XHJcbiAgICAgICAgICAgICAgICAkY3R4ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsXzEudG9wID0gd2luZG93W2RpcmVjdGlvblByb3BNYXAueV07XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxfMS5sZWZ0ID0gd2luZG93W2RpcmVjdGlvblByb3BNYXAueF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkY3R4ID0gJGNvbnRleHQ7XHJcbiAgICAgICAgICAgICAgICB2YXIgY1JlY3QgPSAkY3R4LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsXzEudG9wID0gY1JlY3QudG9wICogLTEgKyAkY3R4W2RpcmVjdGlvbk1ldGhvZE1hcC55XTtcclxuICAgICAgICAgICAgICAgIHNjcm9sbF8xLmxlZnQgPSBjUmVjdC5sZWZ0ICogLTEgKyAkY3R4W2RpcmVjdGlvbk1ldGhvZE1hcC54XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdG9wOiByZWN0LnRvcCArIHNjcm9sbF8xLnRvcCAtICRjdHguY2xpZW50VG9wLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogcmVjdC5sZWZ0ICsgc2Nyb2xsXzEubGVmdCAtICRjdHguY2xpZW50TGVmdCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlY3Q7XHJcbiAgICB9O1xuXG4gICAgdmFyIHdoZWVsRXZlbnROYW1lID0gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIWNhblVzZURPTSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ3doZWVsJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICdvbndoZWVsJyBpbiBkb2N1bWVudCA/ICd3aGVlbCcgOiAnbW91c2V3aGVlbCc7XHJcbiAgICB9KSgpO1xyXG4gICAgdmFyIGV2ZW50TmFtZSA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiAobmFtZSA9PT0gJ3doZWVsJyA/IHdoZWVsRXZlbnROYW1lIDogbmFtZSk7IH07XHJcbiAgICB2YXIgYXBwbHkgPSBmdW5jdGlvbiAoJGVsLCBtZXRob2QsIGV2ZW50LCBsaXN0ZW5lciwgcGFzc2l2ZSkge1xyXG4gICAgICAgIGV2ZW50LnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgICAgICAgICAkZWxbbWV0aG9kXShldmVudE5hbWUobmFtZSksIGxpc3RlbmVyLCBjYW5Vc2VQYXNzaXZlT3B0aW9uID8geyBwYXNzaXZlOiBwYXNzaXZlIH0gOiBmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgdmFyIGFkZEV2ZW50ID0gZnVuY3Rpb24gKCRlbCwgZXZlbnQsIGxpc3RlbmVyLCBwYXNzaXZlKSB7IHJldHVybiBhcHBseSgkZWwsICdhZGRFdmVudExpc3RlbmVyJywgZXZlbnQsIGxpc3RlbmVyLCBwYXNzaXZlKTsgfTtcclxuICAgIHZhciByZW1vdmVFdmVudCA9IGZ1bmN0aW9uICgkZWwsIGV2ZW50LCBsaXN0ZW5lciwgcGFzc2l2ZSkgeyByZXR1cm4gYXBwbHkoJGVsLCAncmVtb3ZlRXZlbnRMaXN0ZW5lcicsIGV2ZW50LCBsaXN0ZW5lciwgcGFzc2l2ZSk7IH07XG5cbiAgICB2YXIgcmVSZWxhdGl2ZVRva2VuID0gL14oXFwrfC0pPShcXGQrKD86XFwuXFxkKyk/KSQvO1xyXG4gICAgdmFyIHBhcnNlQ29vcmRpbmF0ZSA9IGZ1bmN0aW9uIChjb29yZGluYXRlLCBlbmFibGVWZXJ0aWNhbCkge1xyXG4gICAgICAgIHZhciByZXMgPSB7IHRvcDogMCwgbGVmdDogMCwgcmVsYXRpdmU6IGZhbHNlIH07XHJcbiAgICAgICAgLy8gT2JqZWN0ICh7IHRvcDoge259LCBsZWZ0OiB7bn0gfSlcclxuICAgICAgICBpZiAoaGFzUHJvcChjb29yZGluYXRlLCAndG9wJykgfHwgaGFzUHJvcChjb29yZGluYXRlLCAnbGVmdCcpKSB7XHJcbiAgICAgICAgICAgIHJlcyA9IF9fYXNzaWduKHt9LCByZXMsIGNvb3JkaW5hdGUpO1xyXG4gICAgICAgICAgICAvLyBBcnJheSAoW3tufSwgW3tufV0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGlzQXJyYXkoY29vcmRpbmF0ZSkpIHtcclxuICAgICAgICAgICAgaWYgKGNvb3JkaW5hdGUubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgcmVzLnRvcCA9IGNvb3JkaW5hdGVbMF07XHJcbiAgICAgICAgICAgICAgICByZXMubGVmdCA9IGNvb3JkaW5hdGVbMV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY29vcmRpbmF0ZS5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHJlcy50b3AgPSBlbmFibGVWZXJ0aWNhbCA/IGNvb3JkaW5hdGVbMF0gOiAwO1xyXG4gICAgICAgICAgICAgICAgcmVzLmxlZnQgPSAhZW5hYmxlVmVydGljYWwgPyBjb29yZGluYXRlWzBdIDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIE51bWJlclxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpc051bWVyaWMoY29vcmRpbmF0ZSkpIHtcclxuICAgICAgICAgICAgaWYgKGVuYWJsZVZlcnRpY2FsKSB7XHJcbiAgICAgICAgICAgICAgICByZXMudG9wID0gY29vcmRpbmF0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlcy5sZWZ0ID0gY29vcmRpbmF0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBTdHJpbmcgKCcrPXtufScsICctPXtufScpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGlzU3RyaW5nKGNvb3JkaW5hdGUpKSB7XHJcbiAgICAgICAgICAgIHZhciBtID0gY29vcmRpbmF0ZS50cmltKCkubWF0Y2gocmVSZWxhdGl2ZVRva2VuKTtcclxuICAgICAgICAgICAgaWYgKCFtKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgb3AgPSBtWzFdO1xyXG4gICAgICAgICAgICB2YXIgdmFsID0gcGFyc2VJbnQobVsyXSwgMTApO1xyXG4gICAgICAgICAgICBpZiAob3AgPT09ICcrJykge1xyXG4gICAgICAgICAgICAgICAgcmVzLnRvcCA9IGVuYWJsZVZlcnRpY2FsID8gdmFsIDogMDtcclxuICAgICAgICAgICAgICAgIHJlcy5sZWZ0ID0gIWVuYWJsZVZlcnRpY2FsID8gdmFsIDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlcy50b3AgPSBlbmFibGVWZXJ0aWNhbCA/IC12YWwgOiAwO1xyXG4gICAgICAgICAgICAgICAgcmVzLmxlZnQgPSAhZW5hYmxlVmVydGljYWwgPyAtdmFsIDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXMucmVsYXRpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9O1xuXG4gICAgdmFyIGRlZmF1bHRPcHRpb25zID0ge1xyXG4gICAgICAgIHRyaWdnZXI6ICdbZGF0YS1zY3JvbGxdJyxcclxuICAgICAgICBoZWFkZXI6ICdbZGF0YS1zY3JvbGwtaGVhZGVyXScsXHJcbiAgICAgICAgZHVyYXRpb246IDEwMDAsXHJcbiAgICAgICAgZWFzaW5nOiAnZWFzZU91dFF1aW50JyxcclxuICAgICAgICBvZmZzZXQ6IDAsXHJcbiAgICAgICAgdmVydGljYWw6IHRydWUsXHJcbiAgICAgICAgaG9yaXpvbnRhbDogZmFsc2UsXHJcbiAgICAgICAgY2FuY2VsbGFibGU6IHRydWUsXHJcbiAgICAgICAgdXBkYXRlVVJMOiBmYWxzZSxcclxuICAgICAgICBwcmV2ZW50RGVmYXVsdDogdHJ1ZSxcclxuICAgICAgICBzdG9wUHJvcGFnYXRpb246IHRydWUsXHJcbiAgICAgICAgLy8gQ2FsbGJhY2tzXHJcbiAgICAgICAgYmVmb3JlOiBudWxsLFxyXG4gICAgICAgIGFmdGVyOiBudWxsLFxyXG4gICAgICAgIGNhbmNlbDogbnVsbCxcclxuICAgICAgICBjb21wbGV0ZTogbnVsbCxcclxuICAgICAgICBzdGVwOiBudWxsLFxyXG4gICAgfTtcblxuICAgIHZhciBDT05UQUlORVJfQ0xJQ0tfRVZFTlQgPSAnY2xpY2snO1xyXG4gICAgdmFyIENPTlRBSU5FUl9TVE9QX0VWRU5UID0gJ3doZWVsIHRvdWNoc3RhcnQgdG91Y2htb3ZlJztcclxuICAgIHZhciBTd2VldFNjcm9sbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDb25zdHJ1Y3RvclxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIFN3ZWV0U2Nyb2xsKG9wdGlvbnMsIGNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICB0aGlzLiRlbCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4ID0ge1xyXG4gICAgICAgICAgICAgICAgJHRyaWdnZXI6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBvcHRzOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgcG9zOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgc3RhcnRQb3M6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBlYXNpbmc6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBzdGFydDogMCxcclxuICAgICAgICAgICAgICAgIGlkOiAwLFxyXG4gICAgICAgICAgICAgICAgY2FuY2VsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGhhc2g6IG51bGwsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBIYW5kbGUgZWFjaCBmcmFtZSBvZiB0aGUgYW5pbWF0aW9uLlxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgdGhpcy5sb29wID0gZnVuY3Rpb24gKHRpbWUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBfYSA9IF90aGlzLCAkZWwgPSBfYS4kZWwsIGN0eCA9IF9hLmN0eDtcclxuICAgICAgICAgICAgICAgIGlmICghY3R4LnN0YXJ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LnN0YXJ0ID0gdGltZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghY3R4LnByb2dyZXNzIHx8ICEkZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSBjdHgub3B0cztcclxuICAgICAgICAgICAgICAgIHZhciBvZmZzZXQgPSBjdHgucG9zO1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0YXJ0ID0gY3R4LnN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0YXJ0T2Zmc2V0ID0gY3R4LnN0YXJ0UG9zO1xyXG4gICAgICAgICAgICAgICAgdmFyIGVhc2luZyA9IGN0eC5lYXNpbmc7XHJcbiAgICAgICAgICAgICAgICB2YXIgZHVyYXRpb24gPSBvcHRpb25zLmR1cmF0aW9uO1xyXG4gICAgICAgICAgICAgICAgdmFyIGRpcmVjdGlvbk1hcCA9IHsgdG9wOiAneScsIGxlZnQ6ICd4JyB9O1xyXG4gICAgICAgICAgICAgICAgdmFyIHRpbWVFbGFwc2VkID0gdGltZSAtIHN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgdmFyIHQgPSBNYXRoLm1pbigxLCBNYXRoLm1heCh0aW1lRWxhcHNlZCAvIGR1cmF0aW9uLCAwKSk7XHJcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhvZmZzZXQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IG9mZnNldFtrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbml0aWFsID0gc3RhcnRPZmZzZXRba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGVsdGEgPSB2YWx1ZSAtIGluaXRpYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlbHRhICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSBlYXNpbmcodCwgZHVyYXRpb24gKiB0LCAwLCAxLCBkdXJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNjcm9sbCgkZWwsIE1hdGgucm91bmQoaW5pdGlhbCArIGRlbHRhICogdmFsKSwgZGlyZWN0aW9uTWFwW2tleV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRpbWVFbGFwc2VkIDw9IGR1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuaG9vayhvcHRpb25zLCAnc3RlcCcsIHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5pZCA9IFN3ZWV0U2Nyb2xsLnJhZihfdGhpcy5sb29wKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnN0b3AodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBIYW5kbGluZyBvZiBjb250YWluZXIgY2xpY2sgZXZlbnQuXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUNsaWNrID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBvcHRzID0gX3RoaXMub3B0cztcclxuICAgICAgICAgICAgICAgIHZhciAkZWwgPSBlLnRhcmdldDtcclxuICAgICAgICAgICAgICAgIGZvciAoOyAkZWwgJiYgJGVsICE9PSBkb2N1bWVudDsgJGVsID0gJGVsLnBhcmVudE5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIW1hdGNoZXMoJGVsLCBvcHRzLnRyaWdnZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YU9wdGlvbnMgPSBKU09OLnBhcnNlKCRlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2Nyb2xsLW9wdGlvbnMnKSB8fCAne30nKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9ICRlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2Nyb2xsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRvID0gZGF0YSB8fCAkZWwuZ2V0QXR0cmlidXRlKCdocmVmJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSBfX2Fzc2lnbih7fSwgb3B0cywgZGF0YU9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwcmV2ZW50RGVmYXVsdCA9IG9wdGlvbnMucHJldmVudERlZmF1bHQsIHN0b3BQcm9wYWdhdGlvbiA9IG9wdGlvbnMuc3RvcFByb3BhZ2F0aW9uLCB2ZXJ0aWNhbCA9IG9wdGlvbnMudmVydGljYWwsIGhvcml6b250YWwgPSBvcHRpb25zLmhvcml6b250YWw7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZXZlbnREZWZhdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0b3BQcm9wYWdhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBQYXNzZXMgdGhlIHRyaWdnZXIgZWxlbWVudCB0byBjYWxsYmFja1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmN0eC4kdHJpZ2dlciA9ICRlbDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaG9yaXpvbnRhbCAmJiB2ZXJ0aWNhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy50byh0bywgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHZlcnRpY2FsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnRvVG9wKHRvLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoaG9yaXpvbnRhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy50b0xlZnQodG8sIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEhhbmRsaW5nIG9mIGNvbnRhaW5lciBzdG9wIGV2ZW50cy5cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlU3RvcCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY3R4ID0gX3RoaXMuY3R4O1xyXG4gICAgICAgICAgICAgICAgdmFyIG9wdHMgPSBjdHgub3B0cztcclxuICAgICAgICAgICAgICAgIGlmIChvcHRzICYmIG9wdHMuY2FuY2VsbGFibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdHguY2FuY2VsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMub3B0cyA9IF9fYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgKG9wdGlvbnMgfHwge30pKTtcclxuICAgICAgICAgICAgdmFyICRjb250YWluZXIgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAoY2FuVXNlRE9NKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRhaW5lciA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgICAgICAkY29udGFpbmVyID0gJChjb250YWluZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY29udGFpbmVyICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAkY29udGFpbmVyID0gY29udGFpbmVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGNvbnRhaW5lciA9IHdpbmRvdztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLiRlbCA9ICRjb250YWluZXI7XHJcbiAgICAgICAgICAgIGlmICgkY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJpbmQodHJ1ZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFN3ZWV0U2Nyb2xsIGluc3RhbmNlIGZhY3RvcnkuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgU3dlZXRTY3JvbGwuY3JlYXRlID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFN3ZWV0U2Nyb2xsKG9wdGlvbnMsIGNvbnRhaW5lcik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTY3JvbGwgYW5pbWF0aW9uIHRvIHRoZSBzcGVjaWZpZWQgcG9zaXRpb24uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgU3dlZXRTY3JvbGwucHJvdG90eXBlLnRvID0gZnVuY3Rpb24gKGRpc3RhbmNlLCBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIGlmICghY2FuVXNlRE9NKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIF9hID0gdGhpcywgJGVsID0gX2EuJGVsLCBjdHggPSBfYS5jdHgsIGN1cnJlbnRPcHRpb25zID0gX2Eub3B0cztcclxuICAgICAgICAgICAgdmFyICR0cmlnZ2VyID0gY3R4LiR0cmlnZ2VyO1xyXG4gICAgICAgICAgICB2YXIgb3B0cyA9IF9fYXNzaWduKHt9LCBjdXJyZW50T3B0aW9ucywgKG9wdGlvbnMgfHwge30pKTtcclxuICAgICAgICAgICAgdmFyIG9wdE9mZnNldCA9IG9wdHMub2Zmc2V0LCB2ZXJ0aWNhbCA9IG9wdHMudmVydGljYWwsIGhvcml6b250YWwgPSBvcHRzLmhvcml6b250YWw7XHJcbiAgICAgICAgICAgIHZhciAkaGVhZGVyID0gaXNFbGVtZW50KG9wdHMuaGVhZGVyKSA/IG9wdHMuaGVhZGVyIDogJChvcHRzLmhlYWRlcik7XHJcbiAgICAgICAgICAgIHZhciByZWcgPSAvXiMvO1xyXG4gICAgICAgICAgICB2YXIgaGFzaCA9IGlzU3RyaW5nKGRpc3RhbmNlKSAmJiByZWcudGVzdChkaXN0YW5jZSkgPyBkaXN0YW5jZSA6IG51bGw7XHJcbiAgICAgICAgICAgIGN0eC5vcHRzID0gb3B0czsgLy8gVGVtcG9yYXJ5IG9wdGlvbnNcclxuICAgICAgICAgICAgY3R4LmNhbmNlbCA9IGZhbHNlOyAvLyBEaXNhYmxlIHRoZSBjYWxsIGZsYWcgb2YgYGNhbmNlbGBcclxuICAgICAgICAgICAgY3R4Lmhhc2ggPSBoYXNoO1xyXG4gICAgICAgICAgICAvLyBTdG9wIGN1cnJlbnQgYW5pbWF0aW9uXHJcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgICAgICAgICAvLyBEb2VzIG5vdCBtb3ZlIGlmIHRoZSBjb250YWluZXIgaXMgbm90IGZvdW5kXHJcbiAgICAgICAgICAgIGlmICghJGVsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gR2V0IHNjcm9sbCBvZmZzZXRcclxuICAgICAgICAgICAgdmFyIG9mZnNldCA9IHBhcnNlQ29vcmRpbmF0ZShvcHRPZmZzZXQsIHZlcnRpY2FsKTtcclxuICAgICAgICAgICAgdmFyIGNvb3JkaW5hdGUgPSBwYXJzZUNvb3JkaW5hdGUoZGlzdGFuY2UsIHZlcnRpY2FsKTtcclxuICAgICAgICAgICAgdmFyIHNjcm9sbCA9IHsgdG9wOiAwLCBsZWZ0OiAwIH07XHJcbiAgICAgICAgICAgIGlmIChjb29yZGluYXRlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29vcmRpbmF0ZS5yZWxhdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50ID0gZ2V0U2Nyb2xsKCRlbCwgdmVydGljYWwgPyAneScgOiAneCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbC50b3AgPSB2ZXJ0aWNhbCA/IGN1cnJlbnQgKyBjb29yZGluYXRlLnRvcCA6IGNvb3JkaW5hdGUudG9wO1xyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbC5sZWZ0ID0gIXZlcnRpY2FsID8gY3VycmVudCArIGNvb3JkaW5hdGUubGVmdCA6IGNvb3JkaW5hdGUubGVmdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbCA9IGNvb3JkaW5hdGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoaXNTdHJpbmcoZGlzdGFuY2UpICYmIGRpc3RhbmNlICE9PSAnIycpIHtcclxuICAgICAgICAgICAgICAgIHZhciAkdGFyZ2V0ID0gJChkaXN0YW5jZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoISR0YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzY3JvbGwgPSBnZXRPZmZzZXQoJHRhcmdldCwgJGVsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAob2Zmc2V0KSB7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGwudG9wICs9IG9mZnNldC50b3A7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGwubGVmdCArPSBvZmZzZXQubGVmdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoJGhlYWRlcikge1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsLnRvcCA9IE1hdGgubWF4KDAsIHNjcm9sbC50b3AgLSBnZXRTaXplKCRoZWFkZXIpLmhlaWdodCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gTm9ybWFsaXplIHNjcm9sbCBvZmZzZXRcclxuICAgICAgICAgICAgdmFyIF9iID0gZ2V0Vmlld3BvcnRBbmRFbGVtZW50U2l6ZXMoJGVsKSwgdmlld3BvcnQgPSBfYi52aWV3cG9ydCwgc2l6ZSA9IF9iLnNpemU7XHJcbiAgICAgICAgICAgIHNjcm9sbC50b3AgPSB2ZXJ0aWNhbFxyXG4gICAgICAgICAgICAgICAgPyBNYXRoLm1heCgwLCBNYXRoLm1pbihzaXplLmhlaWdodCAtIHZpZXdwb3J0LmhlaWdodCwgc2Nyb2xsLnRvcCkpXHJcbiAgICAgICAgICAgICAgICA6IGdldFNjcm9sbCgkZWwsICd5Jyk7XHJcbiAgICAgICAgICAgIHNjcm9sbC5sZWZ0ID0gaG9yaXpvbnRhbFxyXG4gICAgICAgICAgICAgICAgPyBNYXRoLm1heCgwLCBNYXRoLm1pbihzaXplLndpZHRoIC0gdmlld3BvcnQud2lkdGgsIHNjcm9sbC5sZWZ0KSlcclxuICAgICAgICAgICAgICAgIDogZ2V0U2Nyb2xsKCRlbCwgJ3gnKTtcclxuICAgICAgICAgICAgLy8gQ2FsbCBgYmVmb3JlYFxyXG4gICAgICAgICAgICAvLyBTdG9wIHNjcm9sbGluZyB3aGVuIGl0IHJldHVybnMgZmFsc2VcclxuICAgICAgICAgICAgaWYgKHRoaXMuaG9vayhvcHRzLCAnYmVmb3JlJywgc2Nyb2xsLCAkdHJpZ2dlcikgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBjdHgub3B0cyA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gU2V0IG9mZnNldFxyXG4gICAgICAgICAgICBjdHgucG9zID0gc2Nyb2xsO1xyXG4gICAgICAgICAgICAvLyBSdW4gYW5pbWF0aW9uISFcclxuICAgICAgICAgICAgdGhpcy5zdGFydChvcHRzKTtcclxuICAgICAgICAgICAgLy8gQmluZCBzdG9wIGV2ZW50c1xyXG4gICAgICAgICAgICB0aGlzLmJpbmQoZmFsc2UsIHRydWUpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU2Nyb2xsIGFuaW1hdGlvbiB0byBzcGVjaWZpZWQgbGVmdCBwb3NpdGlvbi5cclxuICAgICAgICAgKi9cclxuICAgICAgICBTd2VldFNjcm9sbC5wcm90b3R5cGUudG9Ub3AgPSBmdW5jdGlvbiAoZGlzdGFuY2UsIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgdGhpcy50byhkaXN0YW5jZSwgX19hc3NpZ24oe30sIChvcHRpb25zIHx8IHt9KSwgeyB2ZXJ0aWNhbDogdHJ1ZSwgaG9yaXpvbnRhbDogZmFsc2UgfSkpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU2Nyb2xsIGFuaW1hdGlvbiB0byBzcGVjaWZpZWQgdG9wIHBvc2l0aW9uLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIFN3ZWV0U2Nyb2xsLnByb3RvdHlwZS50b0xlZnQgPSBmdW5jdGlvbiAoZGlzdGFuY2UsIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgdGhpcy50byhkaXN0YW5jZSwgX19hc3NpZ24oe30sIChvcHRpb25zIHx8IHt9KSwgeyB2ZXJ0aWNhbDogZmFsc2UsIGhvcml6b250YWw6IHRydWUgfSkpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU2Nyb2xsIGFuaW1hdGlvbiB0byBzcGVjaWZpZWQgZWxlbWVudC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBTd2VldFNjcm9sbC5wcm90b3R5cGUudG9FbGVtZW50ID0gZnVuY3Rpb24gKCRlbGVtZW50LCBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHZhciAkZWwgPSB0aGlzLiRlbDtcclxuICAgICAgICAgICAgaWYgKCFjYW5Vc2VET00gfHwgISRlbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudG8oZ2V0T2Zmc2V0KCRlbGVtZW50LCAkZWwpLCBvcHRpb25zIHx8IHt9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFN0b3AgdGhlIGN1cnJlbnQgc2Nyb2xsIGFuaW1hdGlvbi5cclxuICAgICAgICAgKi9cclxuICAgICAgICBTd2VldFNjcm9sbC5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uIChnb3RvRW5kKSB7XHJcbiAgICAgICAgICAgIGlmIChnb3RvRW5kID09PSB2b2lkIDApIHsgZ290b0VuZCA9IGZhbHNlOyB9XHJcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMsICRlbCA9IF9hLiRlbCwgY3R4ID0gX2EuY3R4O1xyXG4gICAgICAgICAgICB2YXIgcG9zID0gY3R4LnBvcztcclxuICAgICAgICAgICAgaWYgKCEkZWwgfHwgIWN0eC5wcm9ncmVzcykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFN3ZWV0U2Nyb2xsLmNhZihjdHguaWQpO1xyXG4gICAgICAgICAgICBjdHgucHJvZ3Jlc3MgPSBmYWxzZTtcclxuICAgICAgICAgICAgY3R4LnN0YXJ0ID0gMDtcclxuICAgICAgICAgICAgY3R4LmlkID0gMDtcclxuICAgICAgICAgICAgaWYgKGdvdG9FbmQgJiYgcG9zKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRTY3JvbGwoJGVsLCBwb3MubGVmdCwgJ3gnKTtcclxuICAgICAgICAgICAgICAgIHNldFNjcm9sbCgkZWwsIHBvcy50b3AsICd5Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jb21wbGV0ZSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVXBkYXRlIG9wdGlvbnMuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgU3dlZXRTY3JvbGwucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLiRlbCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG9wdHMgPSBfX2Fzc2lnbih7fSwgdGhpcy5vcHRzLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51bmJpbmQodHJ1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wdHMgPSBvcHRzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iaW5kKHRydWUsIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRGVzdHJveSBpbnN0YW5jZS5cclxuICAgICAgICAgKi9cclxuICAgICAgICBTd2VldFNjcm9sbC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuJGVsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudW5iaW5kKHRydWUsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kZWwgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDYWxsYmFjayBtZXRob2RzLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIC8qIHRzbGludDpkaXNhYmxlOm5vLWVtcHR5ICovXHJcbiAgICAgICAgU3dlZXRTY3JvbGwucHJvdG90eXBlLm9uQmVmb3JlID0gZnVuY3Rpb24gKF8sIF9fKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgU3dlZXRTY3JvbGwucHJvdG90eXBlLm9uU3RlcCA9IGZ1bmN0aW9uIChfKSB7IH07XHJcbiAgICAgICAgU3dlZXRTY3JvbGwucHJvdG90eXBlLm9uQWZ0ZXIgPSBmdW5jdGlvbiAoXywgX18pIHsgfTtcclxuICAgICAgICBTd2VldFNjcm9sbC5wcm90b3R5cGUub25DYW5jZWwgPSBmdW5jdGlvbiAoKSB7IH07XHJcbiAgICAgICAgU3dlZXRTY3JvbGwucHJvdG90eXBlLm9uQ29tcGxldGUgPSBmdW5jdGlvbiAoXykgeyB9O1xyXG4gICAgICAgIC8qIHRzbGludDplbmFibGUgKi9cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTdGFydCBzY3JvbGxpbmcgYW5pbWF0aW9uLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIFN3ZWV0U2Nyb2xsLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIChvcHRzKSB7XHJcbiAgICAgICAgICAgIHZhciBjdHggPSB0aGlzLmN0eDtcclxuICAgICAgICAgICAgY3R4Lm9wdHMgPSBvcHRzO1xyXG4gICAgICAgICAgICBjdHgucHJvZ3Jlc3MgPSB0cnVlO1xyXG4gICAgICAgICAgICBjdHguZWFzaW5nID0gaXNGdW5jdGlvbihvcHRzLmVhc2luZylcclxuICAgICAgICAgICAgICAgID8gb3B0cy5lYXNpbmdcclxuICAgICAgICAgICAgICAgIDogZWFzaW5nc1tvcHRzLmVhc2luZ107XHJcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBzdGFydCBvZmZzZXQuXHJcbiAgICAgICAgICAgIHZhciAkY29udGFpbmVyID0gdGhpcy4kZWw7XHJcbiAgICAgICAgICAgIHZhciBzdGFydCA9IHtcclxuICAgICAgICAgICAgICAgIHRvcDogZ2V0U2Nyb2xsKCRjb250YWluZXIsICd5JyksXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBnZXRTY3JvbGwoJGNvbnRhaW5lciwgJ3gnKSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY3R4LnN0YXJ0UG9zID0gc3RhcnQ7XHJcbiAgICAgICAgICAgIC8vIExvb3BcclxuICAgICAgICAgICAgY3R4LmlkID0gU3dlZXRTY3JvbGwucmFmKHRoaXMubG9vcCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBIYW5kbGUgdGhlIGNvbXBsZXRpb24gb2Ygc2Nyb2xsaW5nIGFuaW1hdGlvbi5cclxuICAgICAgICAgKi9cclxuICAgICAgICBTd2VldFNjcm9sbC5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMsICRlbCA9IF9hLiRlbCwgY3R4ID0gX2EuY3R4O1xyXG4gICAgICAgICAgICB2YXIgaGFzaCA9IGN0eC5oYXNoLCBjYW5jZWwgPSBjdHguY2FuY2VsLCBvcHRzID0gY3R4Lm9wdHMsIHBvcyA9IGN0eC5wb3MsICR0cmlnZ2VyID0gY3R4LiR0cmlnZ2VyO1xyXG4gICAgICAgICAgICBpZiAoISRlbCB8fCAhb3B0cykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChoYXNoICE9IG51bGwgJiYgaGFzaCAhPT0gd2luZG93LmxvY2F0aW9uLmhhc2gpIHtcclxuICAgICAgICAgICAgICAgIHZhciB1cGRhdGVVUkwgPSBvcHRzLnVwZGF0ZVVSTDtcclxuICAgICAgICAgICAgICAgIGlmIChjYW5Vc2VET00gJiYgY2FuVXNlSGlzdG9yeSAmJiB1cGRhdGVVUkwgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lmhpc3RvcnlbdXBkYXRlVVJMID09PSAncmVwbGFjZScgPyAncmVwbGFjZVN0YXRlJyA6ICdwdXNoU3RhdGUnXShudWxsLCAnJywgaGFzaCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy51bmJpbmQoZmFsc2UsIHRydWUpO1xyXG4gICAgICAgICAgICBjdHgub3B0cyA9IG51bGw7XHJcbiAgICAgICAgICAgIGN0eC4kdHJpZ2dlciA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmIChjYW5jZWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaG9vayhvcHRzLCAnY2FuY2VsJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvb2sob3B0cywgJ2FmdGVyJywgcG9zLCAkdHJpZ2dlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5ob29rKG9wdHMsICdjb21wbGV0ZScsIGNhbmNlbCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDYWxsYmFjayBmdW5jdGlvbiBhbmQgbWV0aG9kIGNhbGwuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgU3dlZXRTY3JvbGwucHJvdG90eXBlLmhvb2sgPSBmdW5jdGlvbiAob3B0aW9ucywgdHlwZSkge1xyXG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDI7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgYXJnc1tfaSAtIDJdID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IG9wdGlvbnNbdHlwZV07XHJcbiAgICAgICAgICAgIHZhciBjYWxsYmFja1Jlc3VsdDtcclxuICAgICAgICAgICAgdmFyIG1ldGhvZFJlc3VsdDtcclxuICAgICAgICAgICAgLy8gY2FsbGJhY2tcclxuICAgICAgICAgICAgaWYgKGlzRnVuY3Rpb24oY2FsbGJhY2spKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFja1Jlc3VsdCA9IGNhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3MuY29uY2F0KFt0aGlzXSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIG1ldGhvZFxyXG4gICAgICAgICAgICBtZXRob2RSZXN1bHQgPSAoX2EgPSB0aGlzKVtcIm9uXCIgKyAodHlwZVswXS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKSldLmFwcGx5KF9hLCBhcmdzKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrUmVzdWx0ICE9PSB1bmRlZmluZWQgPyBjYWxsYmFja1Jlc3VsdCA6IG1ldGhvZFJlc3VsdDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEJpbmQgZXZlbnRzIG9mIGNvbnRhaW5lciBlbGVtZW50LlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIFN3ZWV0U2Nyb2xsLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKGNsaWNrLCBzdG9wKSB7XHJcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMsICRlbCA9IF9hLiRlbCwgb3B0cyA9IF9hLmN0eC5vcHRzO1xyXG4gICAgICAgICAgICBpZiAoJGVsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2xpY2spIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRFdmVudCgkZWwsIENPTlRBSU5FUl9DTElDS19FVkVOVCwgdGhpcy5oYW5kbGVDbGljaywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHN0b3ApIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRFdmVudCgkZWwsIENPTlRBSU5FUl9TVE9QX0VWRU5ULCB0aGlzLmhhbmRsZVN0b3AsIG9wdHMgPyBvcHRzLmNhbmNlbGxhYmxlIDogdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFVuYmluZCBldmVudHMgb2YgY29udGFpbmVyIGVsZW1lbnQuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgU3dlZXRTY3JvbGwucHJvdG90eXBlLnVuYmluZCA9IGZ1bmN0aW9uIChjbGljaywgc3RvcCkge1xyXG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLCAkZWwgPSBfYS4kZWwsIG9wdHMgPSBfYS5jdHgub3B0cztcclxuICAgICAgICAgICAgaWYgKCRlbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNsaWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRXZlbnQoJGVsLCBDT05UQUlORVJfQ0xJQ0tfRVZFTlQsIHRoaXMuaGFuZGxlQ2xpY2ssIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChzdG9wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRXZlbnQoJGVsLCBDT05UQUlORVJfU1RPUF9FVkVOVCwgdGhpcy5oYW5kbGVTdG9wLCBvcHRzID8gb3B0cy5jYW5jZWxsYWJsZSA6IHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBZb3UgY2FuIHNldCBQb2x5ZmlsbCAob3IgUG9ueWZpbGwpIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IHJlcXVlc3RBbmltYXRpb25GcmFtZS5cclxuICAgICAgICAgKi9cclxuICAgICAgICBTd2VldFNjcm9sbC5yYWYgPSByYWY7XHJcbiAgICAgICAgU3dlZXRTY3JvbGwuY2FmID0gY2FmO1xyXG4gICAgICAgIHJldHVybiBTd2VldFNjcm9sbDtcclxuICAgIH0oKSk7XG5cbiAgICByZXR1cm4gU3dlZXRTY3JvbGw7XG5cbn0pKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N3ZWV0LXNjcm9sbC9zd2VldC1zY3JvbGwuanNcbi8vIG1vZHVsZSBpZCA9IDEyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9zY3NzL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDEyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwic291cmNlUm9vdCI6IiJ9