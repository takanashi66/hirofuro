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
/******/ 	return __webpack_require__(__webpack_require__.s = 250);
/******/ })
/************************************************************************/
/******/ ({

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(251);
module.exports = __webpack_require__(253);


/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sweet_scroll__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sweet_scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sweet_scroll__);


document.addEventListener('DOMContentLoaded', function () {
  var sweetScroll = new __WEBPACK_IMPORTED_MODULE_0_sweet_scroll___default.a({
    trigger: "a[href^='#']"
  });
}, false);

/***/ }),

/***/ 252:
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

/***/ 253:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmU3MjAwZWJhYTU0Yjc3ODE4MjciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N3ZWV0LXNjcm9sbC9zd2VldC1zY3JvbGwuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9zY3NzL3N0eWxlLnNjc3M/OTAzYiJdLCJuYW1lcyI6WyJkb2N1bWVudCIsInN3ZWV0U2Nyb2xsIiwidHJpZ2dlciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REE7QUFBQTtBQUFBO0FBQUE7O0FBRUFBLDhDQUE4QyxZQUFNO0FBQ2xELE1BQU1DLGNBQWMseURBQWdCO0FBQ2hDQyxhQUFTO0FBRHVCLEdBQWhCLENBQXBCO0FBREZGLFU7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0EsSUFBSSxLQUE0RDtBQUNoRTtBQUNBO0FBQ0EsQ0FBQyxvQkFBb0I7O0FBRXJCO0FBQ0E7QUFDQSxtRUFBbUU7QUFDbkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9EQUFvRCxPQUFPO0FBQzNEO0FBQ0E7QUFDQTtBQUNB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QUNBO0FBQ0EscURBQXFEO0FBQ3JELDBEQUEwRDtBQUMxRCxzREFBc0Q7QUFDdEQseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHVCQUF1QjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBLENBQUM7Ozs7Ozs7O0FDanJCRCx5QyIsImZpbGUiOiIvcHVibGljL2NvbW1vbi9qcy9zY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjUwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyZTcyMDBlYmFhNTRiNzc4MTgyNyIsImltcG9ydCBTd2VldFNjcm9sbCBmcm9tICdzd2VldC1zY3JvbGwnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zdCBzd2VldFNjcm9sbCA9IG5ldyBTd2VldFNjcm9sbCh7XG4gICAgICB0cmlnZ2VyOiBcImFbaHJlZl49JyMnXVwiXG4gIH0pO1xufSwgZmFsc2UpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zY3JpcHQuanMiLCIvKiEgQHByZXNlcnZlIHN3ZWV0LXNjcm9sbCB2NC4wLjAgLSB0c3V5b3NoaXdhZGEgfCBNSVQgTGljZW5zZSAqL1xuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG4gICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcbiAgICAoZ2xvYmFsID0gZ2xvYmFsIHx8IHNlbGYsIGdsb2JhbC5Td2VldFNjcm9sbCA9IGZhY3RvcnkoKSk7XG59KHRoaXMsIGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gICAgLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICAgIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG4gICAgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuICAgIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG4gICAgVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG4gICAgS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG4gICAgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuICAgIE1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG4gICAgU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbiAgICBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG5cclxuICAgIHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgIH07XG5cbiAgICAvLyBAbGluayBodHRwczovL2dpdGh1Yi5jb20vSmVkV2F0c29uL2V4ZW52L2Jsb2IvbWFzdGVyL2luZGV4LmpzXHJcbiAgICB2YXIgY2FuVXNlRE9NID0gISEodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcclxuICAgICAgICB3aW5kb3cuZG9jdW1lbnQgJiZcclxuICAgICAgICB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XHJcbiAgICB2YXIgY2FuVXNlSGlzdG9yeSA9ICFjYW5Vc2VET01cclxuICAgICAgICA/IGZhbHNlXHJcbiAgICAgICAgOiB3aW5kb3cuaGlzdG9yeSAmJiAncHVzaFN0YXRlJyBpbiB3aW5kb3cuaGlzdG9yeSAmJiB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgIT09ICdmaWxlOic7XHJcbiAgICB2YXIgY2FuVXNlUGFzc2l2ZU9wdGlvbiA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHN1cHBvcnQgPSBmYWxzZTtcclxuICAgICAgICBpZiAoIWNhblVzZURPTSkge1xyXG4gICAgICAgICAgICByZXR1cm4gc3VwcG9ydDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogdHNsaW50OmRpc2FibGU6bm8tZW1wdHkgKi9cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB2YXIgd2luID0gd2luZG93O1xyXG4gICAgICAgICAgICB2YXIgb3B0cyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ3Bhc3NpdmUnLCB7XHJcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdXBwb3J0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB3aW4uYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIG51bGwsIG9wdHMpO1xyXG4gICAgICAgICAgICB3aW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdCcsIG51bGwsIG9wdHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkgeyB9XHJcbiAgICAgICAgLyogdHNsaW50OmVuYWJsZSAqL1xyXG4gICAgICAgIHJldHVybiBzdXBwb3J0O1xyXG4gICAgfSkoKTtcblxuICAgIHZhciBpc1N0cmluZyA9IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdzdHJpbmcnOyB9O1xyXG4gICAgdmFyIGlzRnVuY3Rpb24gPSBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqID09PSAnZnVuY3Rpb24nOyB9O1xyXG4gICAgdmFyIGlzQXJyYXkgPSBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBBcnJheS5pc0FycmF5KG9iaik7IH07XHJcbiAgICB2YXIgaXNOdW1lcmljID0gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gIWlzQXJyYXkob2JqKSAmJiBvYmogLSBwYXJzZUZsb2F0KG9iaikgKyAxID49IDA7IH07XHJcbiAgICB2YXIgaGFzUHJvcCA9IGZ1bmN0aW9uIChvYmosIGtleSkgeyByZXR1cm4gb2JqICYmIG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpOyB9O1xuXG4gICAgdmFyIHJhZiA9IGNhblVzZURPTVxyXG4gICAgICAgID8gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZS5iaW5kKHdpbmRvdylcclxuICAgICAgICA6IG51bGw7XHJcbiAgICB2YXIgY2FmID0gY2FuVXNlRE9NXHJcbiAgICAgICAgPyB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUuYmluZCh3aW5kb3cpXHJcbiAgICAgICAgOiBudWxsO1xuXG4gICAgLyogdHNsaW50OmRpc2FibGU6Y3VybHkgKi9cclxuICAgIC8qIHRzbGludDpkaXNhYmxlOm5vLWNvbmRpdGlvbmFsLWFzc2lnbm1lbnQgKi9cclxuICAgIHZhciBjb3MgPSBNYXRoLmNvcywgc2luID0gTWF0aC5zaW4sIHBvdyA9IE1hdGgucG93LCBzcXJ0ID0gTWF0aC5zcXJ0LCBQSSA9IE1hdGguUEk7XHJcbiAgICB2YXIgZWFzaW5ncyA9IHtcclxuICAgICAgICBsaW5lYXI6IGZ1bmN0aW9uIChwKSB7IHJldHVybiBwOyB9LFxyXG4gICAgICAgIGVhc2VJblF1YWQ6IGZ1bmN0aW9uIChfLCB0LCBiLCBjLCBkKSB7IHJldHVybiBjICogKHQgLz0gZCkgKiB0ICsgYjsgfSxcclxuICAgICAgICBlYXNlT3V0UXVhZDogZnVuY3Rpb24gKF8sIHQsIGIsIGMsIGQpIHsgcmV0dXJuIC1jICogKHQgLz0gZCkgKiAodCAtIDIpICsgYjsgfSxcclxuICAgICAgICBlYXNlSW5PdXRRdWFkOiBmdW5jdGlvbiAoXywgdCwgYiwgYywgZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKHQgLz0gZCAvIDIpIDwgMSA/IChjIC8gMikgKiB0ICogdCArIGIgOiAoLWMgLyAyKSAqICgtLXQgKiAodCAtIDIpIC0gMSkgKyBiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZWFzZUluQ3ViaWM6IGZ1bmN0aW9uIChfLCB0LCBiLCBjLCBkKSB7IHJldHVybiBjICogKHQgLz0gZCkgKiB0ICogdCArIGI7IH0sXHJcbiAgICAgICAgZWFzZU91dEN1YmljOiBmdW5jdGlvbiAoXywgdCwgYiwgYywgZCkgeyByZXR1cm4gYyAqICgodCA9IHQgLyBkIC0gMSkgKiB0ICogdCArIDEpICsgYjsgfSxcclxuICAgICAgICBlYXNlSW5PdXRDdWJpYzogZnVuY3Rpb24gKF8sIHQsIGIsIGMsIGQpIHtcclxuICAgICAgICAgICAgcmV0dXJuICh0IC89IGQgLyAyKSA8IDEgPyAoYyAvIDIpICogdCAqIHQgKiB0ICsgYiA6IChjIC8gMikgKiAoKHQgLT0gMikgKiB0ICogdCArIDIpICsgYjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVhc2VJblF1YXJ0OiBmdW5jdGlvbiAoXywgdCwgYiwgYywgZCkgeyByZXR1cm4gYyAqICh0IC89IGQpICogdCAqIHQgKiB0ICsgYjsgfSxcclxuICAgICAgICBlYXNlT3V0UXVhcnQ6IGZ1bmN0aW9uIChfLCB0LCBiLCBjLCBkKSB7IHJldHVybiAtYyAqICgodCA9IHQgLyBkIC0gMSkgKiB0ICogdCAqIHQgLSAxKSArIGI7IH0sXHJcbiAgICAgICAgZWFzZUluT3V0UXVhcnQ6IGZ1bmN0aW9uIChfLCB0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAodCAvPSBkIC8gMikgPCAxID8gKGMgLyAyKSAqIHQgKiB0ICogdCAqIHQgKyBiIDogKC1jIC8gMikgKiAoKHQgLT0gMikgKiB0ICogdCAqIHQgLSAyKSArIGI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlYXNlSW5RdWludDogZnVuY3Rpb24gKF8sIHQsIGIsIGMsIGQpIHsgcmV0dXJuIGMgKiAodCAvPSBkKSAqIHQgKiB0ICogdCAqIHQgKyBiOyB9LFxyXG4gICAgICAgIGVhc2VPdXRRdWludDogZnVuY3Rpb24gKF8sIHQsIGIsIGMsIGQpIHsgcmV0dXJuIGMgKiAoKHQgPSB0IC8gZCAtIDEpICogdCAqIHQgKiB0ICogdCArIDEpICsgYjsgfSxcclxuICAgICAgICBlYXNlSW5PdXRRdWludDogZnVuY3Rpb24gKF8sIHQsIGIsIGMsIGQpIHtcclxuICAgICAgICAgICAgcmV0dXJuICh0IC89IGQgLyAyKSA8IDFcclxuICAgICAgICAgICAgICAgID8gKGMgLyAyKSAqIHQgKiB0ICogdCAqIHQgKiB0ICsgYlxyXG4gICAgICAgICAgICAgICAgOiAoYyAvIDIpICogKCh0IC09IDIpICogdCAqIHQgKiB0ICogdCArIDIpICsgYjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVhc2VJblNpbmU6IGZ1bmN0aW9uIChfLCB0LCBiLCBjLCBkKSB7IHJldHVybiAtYyAqIGNvcygodCAvIGQpICogKFBJIC8gMikpICsgYyArIGI7IH0sXHJcbiAgICAgICAgZWFzZU91dFNpbmU6IGZ1bmN0aW9uIChfLCB0LCBiLCBjLCBkKSB7IHJldHVybiBjICogc2luKCh0IC8gZCkgKiAoUEkgLyAyKSkgKyBiOyB9LFxyXG4gICAgICAgIGVhc2VJbk91dFNpbmU6IGZ1bmN0aW9uIChfLCB0LCBiLCBjLCBkKSB7IHJldHVybiAoLWMgLyAyKSAqIChjb3MoKFBJICogdCkgLyBkKSAtIDEpICsgYjsgfSxcclxuICAgICAgICBlYXNlSW5FeHBvOiBmdW5jdGlvbiAoXywgdCwgYiwgYywgZCkgeyByZXR1cm4gKHQgPT09IDAgPyBiIDogYyAqIHBvdygyLCAxMCAqICh0IC8gZCAtIDEpKSArIGIpOyB9LFxyXG4gICAgICAgIGVhc2VPdXRFeHBvOiBmdW5jdGlvbiAoXywgdCwgYiwgYywgZCkgeyByZXR1cm4gKHQgPT09IGQgPyBiICsgYyA6IGMgKiAoLXBvdygyLCAoLTEwICogdCkgLyBkKSArIDEpICsgYik7IH0sXHJcbiAgICAgICAgZWFzZUluT3V0RXhwbzogZnVuY3Rpb24gKF8sIHQsIGIsIGMsIGQpIHtcclxuICAgICAgICAgICAgaWYgKHQgPT09IDApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYjtcclxuICAgICAgICAgICAgaWYgKHQgPT09IGQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYiArIGM7XHJcbiAgICAgICAgICAgIGlmICgodCAvPSBkIC8gMikgPCAxKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChjIC8gMikgKiBwb3coMiwgMTAgKiAodCAtIDEpKSArIGI7XHJcbiAgICAgICAgICAgIHJldHVybiAoYyAvIDIpICogKC1wb3coMiwgLTEwICogLS10KSArIDIpICsgYjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVhc2VJbkNpcmM6IGZ1bmN0aW9uIChfLCB0LCBiLCBjLCBkKSB7IHJldHVybiAtYyAqIChzcXJ0KDEgLSAodCAvPSBkKSAqIHQpIC0gMSkgKyBiOyB9LFxyXG4gICAgICAgIGVhc2VPdXRDaXJjOiBmdW5jdGlvbiAoXywgdCwgYiwgYywgZCkgeyByZXR1cm4gYyAqIHNxcnQoMSAtICh0ID0gdCAvIGQgLSAxKSAqIHQpICsgYjsgfSxcclxuICAgICAgICBlYXNlSW5PdXRDaXJjOiBmdW5jdGlvbiAoXywgdCwgYiwgYywgZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKHQgLz0gZCAvIDIpIDwgMVxyXG4gICAgICAgICAgICAgICAgPyAoLWMgLyAyKSAqIChzcXJ0KDEgLSB0ICogdCkgLSAxKSArIGJcclxuICAgICAgICAgICAgICAgIDogKGMgLyAyKSAqIChzcXJ0KDEgLSAodCAtPSAyKSAqIHQpICsgMSkgKyBiO1xyXG4gICAgICAgIH0sXHJcbiAgICB9O1xuXG4gICAgdmFyICQkID0gZnVuY3Rpb24gKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKCghc2VsZWN0b3IgPyBbXSA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKSk7XHJcbiAgICB9O1xyXG4gICAgdmFyICQgPSBmdW5jdGlvbiAoc2VsZWN0b3IpIHsgcmV0dXJuICQkKHNlbGVjdG9yKS5zaGlmdCgpIHx8IG51bGw7IH07XHJcbiAgICB2YXIgaXNFbGVtZW50ID0gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqIGluc3RhbmNlb2YgRWxlbWVudDsgfTtcclxuICAgIHZhciBpc1dpbmRvdyA9IGZ1bmN0aW9uICgkZWwpIHsgcmV0dXJuICRlbCA9PT0gd2luZG93OyB9O1xyXG4gICAgdmFyIGlzUm9vdENvbnRhaW5lciA9IGZ1bmN0aW9uICgkZWwpIHtcclxuICAgICAgICByZXR1cm4gJGVsID09PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHwgJGVsID09PSBkb2N1bWVudC5ib2R5O1xyXG4gICAgfTtcclxuICAgIHZhciBtYXRjaGVzID0gZnVuY3Rpb24gKCRlbCwgc2VsZWN0b3IpIHtcclxuICAgICAgICBpZiAoaXNFbGVtZW50KHNlbGVjdG9yKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJGVsID09PSBzZWxlY3RvcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHJlc3VsdHMgPSAkJChzZWxlY3Rvcik7XHJcbiAgICAgICAgdmFyIGkgPSByZXN1bHRzLmxlbmd0aDtcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tZW1wdHlcclxuICAgICAgICB3aGlsZSAoLS1pID49IDAgJiYgcmVzdWx0c1tpXSAhPT0gJGVsKSB7IH1cclxuICAgICAgICByZXR1cm4gaSA+IC0xO1xyXG4gICAgfTtcblxuICAgIHZhciBnZXRIZWlnaHQgPSBmdW5jdGlvbiAoJGVsKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KCRlbC5zY3JvbGxIZWlnaHQsICRlbC5jbGllbnRIZWlnaHQsICRlbC5vZmZzZXRIZWlnaHQpO1xyXG4gICAgfTtcclxuICAgIHZhciBnZXRXaWR0aCA9IGZ1bmN0aW9uICgkZWwpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5tYXgoJGVsLnNjcm9sbFdpZHRoLCAkZWwuY2xpZW50V2lkdGgsICRlbC5vZmZzZXRXaWR0aCk7XHJcbiAgICB9O1xyXG4gICAgdmFyIGdldFNpemUgPSBmdW5jdGlvbiAoJGVsKSB7IHJldHVybiAoe1xyXG4gICAgICAgIHdpZHRoOiBnZXRXaWR0aCgkZWwpLFxyXG4gICAgICAgIGhlaWdodDogZ2V0SGVpZ2h0KCRlbCksXHJcbiAgICB9KTsgfTtcclxuICAgIHZhciBnZXRWaWV3cG9ydEFuZEVsZW1lbnRTaXplcyA9IGZ1bmN0aW9uICgkZWwpIHtcclxuICAgICAgICB2YXIgaXNSb290ID0gaXNXaW5kb3coJGVsKSB8fCBpc1Jvb3RDb250YWluZXIoJGVsKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB2aWV3cG9ydDoge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGlzUm9vdFxyXG4gICAgICAgICAgICAgICAgICAgID8gTWF0aC5taW4od2luZG93LmlubmVyV2lkdGgsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aClcclxuICAgICAgICAgICAgICAgICAgICA6ICRlbC5jbGllbnRXaWR0aCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogaXNSb290ID8gd2luZG93LmlubmVySGVpZ2h0IDogJGVsLmNsaWVudEhlaWdodCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2l6ZTogaXNSb290XHJcbiAgICAgICAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogTWF0aC5tYXgoZ2V0V2lkdGgoZG9jdW1lbnQuYm9keSksIGdldFdpZHRoKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkpLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogTWF0aC5tYXgoZ2V0SGVpZ2h0KGRvY3VtZW50LmJvZHkpLCBnZXRIZWlnaHQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSksXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA6IGdldFNpemUoJGVsKSxcclxuICAgICAgICB9O1xyXG4gICAgfTtcblxuICAgIHZhciBkaXJlY3Rpb25NZXRob2RNYXAgPSB7XHJcbiAgICAgICAgeTogJ3Njcm9sbFRvcCcsXHJcbiAgICAgICAgeDogJ3Njcm9sbExlZnQnLFxyXG4gICAgfTtcclxuICAgIHZhciBkaXJlY3Rpb25Qcm9wTWFwID0ge1xyXG4gICAgICAgIHk6ICdwYWdlWU9mZnNldCcsXHJcbiAgICAgICAgeDogJ3BhZ2VYT2Zmc2V0JyxcclxuICAgIH07XHJcbiAgICB2YXIgZ2V0U2Nyb2xsID0gZnVuY3Rpb24gKCRlbCwgZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzV2luZG93KCRlbCkgPyAkZWxbZGlyZWN0aW9uUHJvcE1hcFtkaXJlY3Rpb25dXSA6ICRlbFtkaXJlY3Rpb25NZXRob2RNYXBbZGlyZWN0aW9uXV07XHJcbiAgICB9O1xyXG4gICAgdmFyIHNldFNjcm9sbCA9IGZ1bmN0aW9uICgkZWwsIG9mZnNldCwgZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgaWYgKGlzV2luZG93KCRlbCkpIHtcclxuICAgICAgICAgICAgdmFyIHRvcF8xID0gZGlyZWN0aW9uID09PSAneSc7XHJcbiAgICAgICAgICAgICRlbC5zY3JvbGxUbyghdG9wXzEgPyBvZmZzZXQgOiAkZWwucGFnZVhPZmZzZXQsIHRvcF8xID8gb2Zmc2V0IDogJGVsLnBhZ2VZT2Zmc2V0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICRlbFtkaXJlY3Rpb25NZXRob2RNYXBbZGlyZWN0aW9uXV0gPSBvZmZzZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHZhciBnZXRPZmZzZXQgPSBmdW5jdGlvbiAoJGVsLCAkY29udGV4dCkge1xyXG4gICAgICAgIHZhciByZWN0ID0gJGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIGlmIChyZWN0LndpZHRoIHx8IHJlY3QuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHZhciBzY3JvbGxfMSA9IHsgdG9wOiAwLCBsZWZ0OiAwIH07XHJcbiAgICAgICAgICAgIHZhciAkY3R4ID0gdm9pZCAwO1xyXG4gICAgICAgICAgICBpZiAoaXNXaW5kb3coJGNvbnRleHQpIHx8IGlzUm9vdENvbnRhaW5lcigkY29udGV4dCkpIHtcclxuICAgICAgICAgICAgICAgICRjdHggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxfMS50b3AgPSB3aW5kb3dbZGlyZWN0aW9uUHJvcE1hcC55XTtcclxuICAgICAgICAgICAgICAgIHNjcm9sbF8xLmxlZnQgPSB3aW5kb3dbZGlyZWN0aW9uUHJvcE1hcC54XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICRjdHggPSAkY29udGV4dDtcclxuICAgICAgICAgICAgICAgIHZhciBjUmVjdCA9ICRjdHguZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxfMS50b3AgPSBjUmVjdC50b3AgKiAtMSArICRjdHhbZGlyZWN0aW9uTWV0aG9kTWFwLnldO1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsXzEubGVmdCA9IGNSZWN0LmxlZnQgKiAtMSArICRjdHhbZGlyZWN0aW9uTWV0aG9kTWFwLnhdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IHJlY3QudG9wICsgc2Nyb2xsXzEudG9wIC0gJGN0eC5jbGllbnRUb3AsXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiByZWN0LmxlZnQgKyBzY3JvbGxfMS5sZWZ0IC0gJGN0eC5jbGllbnRMZWZ0LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVjdDtcclxuICAgIH07XG5cbiAgICB2YXIgd2hlZWxFdmVudE5hbWUgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghY2FuVXNlRE9NKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnd2hlZWwnO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gJ29ud2hlZWwnIGluIGRvY3VtZW50ID8gJ3doZWVsJyA6ICdtb3VzZXdoZWVsJztcclxuICAgIH0pKCk7XHJcbiAgICB2YXIgZXZlbnROYW1lID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIChuYW1lID09PSAnd2hlZWwnID8gd2hlZWxFdmVudE5hbWUgOiBuYW1lKTsgfTtcclxuICAgIHZhciBhcHBseSA9IGZ1bmN0aW9uICgkZWwsIG1ldGhvZCwgZXZlbnQsIGxpc3RlbmVyLCBwYXNzaXZlKSB7XHJcbiAgICAgICAgZXZlbnQuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgICAgICRlbFttZXRob2RdKGV2ZW50TmFtZShuYW1lKSwgbGlzdGVuZXIsIGNhblVzZVBhc3NpdmVPcHRpb24gPyB7IHBhc3NpdmU6IHBhc3NpdmUgfSA6IGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICB2YXIgYWRkRXZlbnQgPSBmdW5jdGlvbiAoJGVsLCBldmVudCwgbGlzdGVuZXIsIHBhc3NpdmUpIHsgcmV0dXJuIGFwcGx5KCRlbCwgJ2FkZEV2ZW50TGlzdGVuZXInLCBldmVudCwgbGlzdGVuZXIsIHBhc3NpdmUpOyB9O1xyXG4gICAgdmFyIHJlbW92ZUV2ZW50ID0gZnVuY3Rpb24gKCRlbCwgZXZlbnQsIGxpc3RlbmVyLCBwYXNzaXZlKSB7IHJldHVybiBhcHBseSgkZWwsICdyZW1vdmVFdmVudExpc3RlbmVyJywgZXZlbnQsIGxpc3RlbmVyLCBwYXNzaXZlKTsgfTtcblxuICAgIHZhciByZVJlbGF0aXZlVG9rZW4gPSAvXihcXCt8LSk9KFxcZCsoPzpcXC5cXGQrKT8pJC87XHJcbiAgICB2YXIgcGFyc2VDb29yZGluYXRlID0gZnVuY3Rpb24gKGNvb3JkaW5hdGUsIGVuYWJsZVZlcnRpY2FsKSB7XHJcbiAgICAgICAgdmFyIHJlcyA9IHsgdG9wOiAwLCBsZWZ0OiAwLCByZWxhdGl2ZTogZmFsc2UgfTtcclxuICAgICAgICAvLyBPYmplY3QgKHsgdG9wOiB7bn0sIGxlZnQ6IHtufSB9KVxyXG4gICAgICAgIGlmIChoYXNQcm9wKGNvb3JkaW5hdGUsICd0b3AnKSB8fCBoYXNQcm9wKGNvb3JkaW5hdGUsICdsZWZ0JykpIHtcclxuICAgICAgICAgICAgcmVzID0gX19hc3NpZ24oe30sIHJlcywgY29vcmRpbmF0ZSk7XHJcbiAgICAgICAgICAgIC8vIEFycmF5IChbe259LCBbe259XSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaXNBcnJheShjb29yZGluYXRlKSkge1xyXG4gICAgICAgICAgICBpZiAoY29vcmRpbmF0ZS5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXMudG9wID0gY29vcmRpbmF0ZVswXTtcclxuICAgICAgICAgICAgICAgIHJlcy5sZWZ0ID0gY29vcmRpbmF0ZVsxXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjb29yZGluYXRlLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgcmVzLnRvcCA9IGVuYWJsZVZlcnRpY2FsID8gY29vcmRpbmF0ZVswXSA6IDA7XHJcbiAgICAgICAgICAgICAgICByZXMubGVmdCA9ICFlbmFibGVWZXJ0aWNhbCA/IGNvb3JkaW5hdGVbMF0gOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gTnVtYmVyXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGlzTnVtZXJpYyhjb29yZGluYXRlKSkge1xyXG4gICAgICAgICAgICBpZiAoZW5hYmxlVmVydGljYWwpIHtcclxuICAgICAgICAgICAgICAgIHJlcy50b3AgPSBjb29yZGluYXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzLmxlZnQgPSBjb29yZGluYXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFN0cmluZyAoJys9e259JywgJy09e259JylcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaXNTdHJpbmcoY29vcmRpbmF0ZSkpIHtcclxuICAgICAgICAgICAgdmFyIG0gPSBjb29yZGluYXRlLnRyaW0oKS5tYXRjaChyZVJlbGF0aXZlVG9rZW4pO1xyXG4gICAgICAgICAgICBpZiAoIW0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBvcCA9IG1bMV07XHJcbiAgICAgICAgICAgIHZhciB2YWwgPSBwYXJzZUludChtWzJdLCAxMCk7XHJcbiAgICAgICAgICAgIGlmIChvcCA9PT0gJysnKSB7XHJcbiAgICAgICAgICAgICAgICByZXMudG9wID0gZW5hYmxlVmVydGljYWwgPyB2YWwgOiAwO1xyXG4gICAgICAgICAgICAgICAgcmVzLmxlZnQgPSAhZW5hYmxlVmVydGljYWwgPyB2YWwgOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzLnRvcCA9IGVuYWJsZVZlcnRpY2FsID8gLXZhbCA6IDA7XHJcbiAgICAgICAgICAgICAgICByZXMubGVmdCA9ICFlbmFibGVWZXJ0aWNhbCA/IC12YWwgOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlcy5yZWxhdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgIH07XG5cbiAgICB2YXIgZGVmYXVsdE9wdGlvbnMgPSB7XHJcbiAgICAgICAgdHJpZ2dlcjogJ1tkYXRhLXNjcm9sbF0nLFxyXG4gICAgICAgIGhlYWRlcjogJ1tkYXRhLXNjcm9sbC1oZWFkZXJdJyxcclxuICAgICAgICBkdXJhdGlvbjogMTAwMCxcclxuICAgICAgICBlYXNpbmc6ICdlYXNlT3V0UXVpbnQnLFxyXG4gICAgICAgIG9mZnNldDogMCxcclxuICAgICAgICB2ZXJ0aWNhbDogdHJ1ZSxcclxuICAgICAgICBob3Jpem9udGFsOiBmYWxzZSxcclxuICAgICAgICBjYW5jZWxsYWJsZTogdHJ1ZSxcclxuICAgICAgICB1cGRhdGVVUkw6IGZhbHNlLFxyXG4gICAgICAgIHByZXZlbnREZWZhdWx0OiB0cnVlLFxyXG4gICAgICAgIHN0b3BQcm9wYWdhdGlvbjogdHJ1ZSxcclxuICAgICAgICAvLyBDYWxsYmFja3NcclxuICAgICAgICBiZWZvcmU6IG51bGwsXHJcbiAgICAgICAgYWZ0ZXI6IG51bGwsXHJcbiAgICAgICAgY2FuY2VsOiBudWxsLFxyXG4gICAgICAgIGNvbXBsZXRlOiBudWxsLFxyXG4gICAgICAgIHN0ZXA6IG51bGwsXHJcbiAgICB9O1xuXG4gICAgdmFyIENPTlRBSU5FUl9DTElDS19FVkVOVCA9ICdjbGljayc7XHJcbiAgICB2YXIgQ09OVEFJTkVSX1NUT1BfRVZFTlQgPSAnd2hlZWwgdG91Y2hzdGFydCB0b3VjaG1vdmUnO1xyXG4gICAgdmFyIFN3ZWV0U2Nyb2xsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENvbnN0cnVjdG9yXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gU3dlZXRTY3JvbGwob3B0aW9ucywgY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIHRoaXMuJGVsID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5jdHggPSB7XHJcbiAgICAgICAgICAgICAgICAkdHJpZ2dlcjogbnVsbCxcclxuICAgICAgICAgICAgICAgIG9wdHM6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzczogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBwb3M6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBzdGFydFBvczogbnVsbCxcclxuICAgICAgICAgICAgICAgIGVhc2luZzogbnVsbCxcclxuICAgICAgICAgICAgICAgIHN0YXJ0OiAwLFxyXG4gICAgICAgICAgICAgICAgaWQ6IDAsXHJcbiAgICAgICAgICAgICAgICBjYW5jZWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaGFzaDogbnVsbCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEhhbmRsZSBlYWNoIGZyYW1lIG9mIHRoZSBhbmltYXRpb24uXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICB0aGlzLmxvb3AgPSBmdW5jdGlvbiAodGltZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIF9hID0gX3RoaXMsICRlbCA9IF9hLiRlbCwgY3R4ID0gX2EuY3R4O1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjdHguc3RhcnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdHguc3RhcnQgPSB0aW1lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFjdHgucHJvZ3Jlc3MgfHwgISRlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9ucyA9IGN0eC5vcHRzO1xyXG4gICAgICAgICAgICAgICAgdmFyIG9mZnNldCA9IGN0eC5wb3M7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RhcnQgPSBjdHguc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RhcnRPZmZzZXQgPSBjdHguc3RhcnRQb3M7XHJcbiAgICAgICAgICAgICAgICB2YXIgZWFzaW5nID0gY3R4LmVhc2luZztcclxuICAgICAgICAgICAgICAgIHZhciBkdXJhdGlvbiA9IG9wdGlvbnMuZHVyYXRpb247XHJcbiAgICAgICAgICAgICAgICB2YXIgZGlyZWN0aW9uTWFwID0geyB0b3A6ICd5JywgbGVmdDogJ3gnIH07XHJcbiAgICAgICAgICAgICAgICB2YXIgdGltZUVsYXBzZWQgPSB0aW1lIC0gc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICB2YXIgdCA9IE1hdGgubWluKDEsIE1hdGgubWF4KHRpbWVFbGFwc2VkIC8gZHVyYXRpb24sIDApKTtcclxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKG9mZnNldCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gb2Zmc2V0W2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGluaXRpYWwgPSBzdGFydE9mZnNldFtrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWx0YSA9IHZhbHVlIC0gaW5pdGlhbDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVsdGEgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9IGVhc2luZyh0LCBkdXJhdGlvbiAqIHQsIDAsIDEsIGR1cmF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2Nyb2xsKCRlbCwgTWF0aC5yb3VuZChpbml0aWFsICsgZGVsdGEgKiB2YWwpLCBkaXJlY3Rpb25NYXBba2V5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGltZUVsYXBzZWQgPD0gZHVyYXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5ob29rKG9wdGlvbnMsICdzdGVwJywgdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LmlkID0gU3dlZXRTY3JvbGwucmFmKF90aGlzLmxvb3ApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc3RvcCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEhhbmRsaW5nIG9mIGNvbnRhaW5lciBjbGljayBldmVudC5cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG9wdHMgPSBfdGhpcy5vcHRzO1xyXG4gICAgICAgICAgICAgICAgdmFyICRlbCA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgZm9yICg7ICRlbCAmJiAkZWwgIT09IGRvY3VtZW50OyAkZWwgPSAkZWwucGFyZW50Tm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghbWF0Y2hlcygkZWwsIG9wdHMudHJpZ2dlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhT3B0aW9ucyA9IEpTT04ucGFyc2UoJGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1zY3JvbGwtb3B0aW9ucycpIHx8ICd7fScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gJGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1zY3JvbGwnKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdG8gPSBkYXRhIHx8ICRlbC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgb3B0aW9ucyA9IF9fYXNzaWduKHt9LCBvcHRzLCBkYXRhT3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByZXZlbnREZWZhdWx0ID0gb3B0aW9ucy5wcmV2ZW50RGVmYXVsdCwgc3RvcFByb3BhZ2F0aW9uID0gb3B0aW9ucy5zdG9wUHJvcGFnYXRpb24sIHZlcnRpY2FsID0gb3B0aW9ucy52ZXJ0aWNhbCwgaG9yaXpvbnRhbCA9IG9wdGlvbnMuaG9yaXpvbnRhbDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocHJldmVudERlZmF1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RvcFByb3BhZ2F0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFBhc3NlcyB0aGUgdHJpZ2dlciBlbGVtZW50IHRvIGNhbGxiYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY3R4LiR0cmlnZ2VyID0gJGVsO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChob3Jpem9udGFsICYmIHZlcnRpY2FsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnRvKHRvLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodmVydGljYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMudG9Ub3AodG8sIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChob3Jpem9udGFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnRvTGVmdCh0bywgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogSGFuZGxpbmcgb2YgY29udGFpbmVyIHN0b3AgZXZlbnRzLlxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVTdG9wID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjdHggPSBfdGhpcy5jdHg7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3B0cyA9IGN0eC5vcHRzO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wdHMgJiYgb3B0cy5jYW5jZWxsYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5jYW5jZWwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5vcHRzID0gX19hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zLCAob3B0aW9ucyB8fCB7fSkpO1xyXG4gICAgICAgICAgICB2YXIgJGNvbnRhaW5lciA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmIChjYW5Vc2VET00pIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGFpbmVyID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgICAgICRjb250YWluZXIgPSAkKGNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjb250YWluZXIgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRjb250YWluZXIgPSBjb250YWluZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkY29udGFpbmVyID0gd2luZG93O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuJGVsID0gJGNvbnRhaW5lcjtcclxuICAgICAgICAgICAgaWYgKCRjb250YWluZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmluZCh0cnVlLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU3dlZXRTY3JvbGwgaW5zdGFuY2UgZmFjdG9yeS5cclxuICAgICAgICAgKi9cclxuICAgICAgICBTd2VldFNjcm9sbC5jcmVhdGUgPSBmdW5jdGlvbiAob3B0aW9ucywgY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgU3dlZXRTY3JvbGwob3B0aW9ucywgY29udGFpbmVyKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNjcm9sbCBhbmltYXRpb24gdG8gdGhlIHNwZWNpZmllZCBwb3NpdGlvbi5cclxuICAgICAgICAgKi9cclxuICAgICAgICBTd2VldFNjcm9sbC5wcm90b3R5cGUudG8gPSBmdW5jdGlvbiAoZGlzdGFuY2UsIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgaWYgKCFjYW5Vc2VET00pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLCAkZWwgPSBfYS4kZWwsIGN0eCA9IF9hLmN0eCwgY3VycmVudE9wdGlvbnMgPSBfYS5vcHRzO1xyXG4gICAgICAgICAgICB2YXIgJHRyaWdnZXIgPSBjdHguJHRyaWdnZXI7XHJcbiAgICAgICAgICAgIHZhciBvcHRzID0gX19hc3NpZ24oe30sIGN1cnJlbnRPcHRpb25zLCAob3B0aW9ucyB8fCB7fSkpO1xyXG4gICAgICAgICAgICB2YXIgb3B0T2Zmc2V0ID0gb3B0cy5vZmZzZXQsIHZlcnRpY2FsID0gb3B0cy52ZXJ0aWNhbCwgaG9yaXpvbnRhbCA9IG9wdHMuaG9yaXpvbnRhbDtcclxuICAgICAgICAgICAgdmFyICRoZWFkZXIgPSBpc0VsZW1lbnQob3B0cy5oZWFkZXIpID8gb3B0cy5oZWFkZXIgOiAkKG9wdHMuaGVhZGVyKTtcclxuICAgICAgICAgICAgdmFyIHJlZyA9IC9eIy87XHJcbiAgICAgICAgICAgIHZhciBoYXNoID0gaXNTdHJpbmcoZGlzdGFuY2UpICYmIHJlZy50ZXN0KGRpc3RhbmNlKSA/IGRpc3RhbmNlIDogbnVsbDtcclxuICAgICAgICAgICAgY3R4Lm9wdHMgPSBvcHRzOyAvLyBUZW1wb3Jhcnkgb3B0aW9uc1xyXG4gICAgICAgICAgICBjdHguY2FuY2VsID0gZmFsc2U7IC8vIERpc2FibGUgdGhlIGNhbGwgZmxhZyBvZiBgY2FuY2VsYFxyXG4gICAgICAgICAgICBjdHguaGFzaCA9IGhhc2g7XHJcbiAgICAgICAgICAgIC8vIFN0b3AgY3VycmVudCBhbmltYXRpb25cclxuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgICAgIC8vIERvZXMgbm90IG1vdmUgaWYgdGhlIGNvbnRhaW5lciBpcyBub3QgZm91bmRcclxuICAgICAgICAgICAgaWYgKCEkZWwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBHZXQgc2Nyb2xsIG9mZnNldFxyXG4gICAgICAgICAgICB2YXIgb2Zmc2V0ID0gcGFyc2VDb29yZGluYXRlKG9wdE9mZnNldCwgdmVydGljYWwpO1xyXG4gICAgICAgICAgICB2YXIgY29vcmRpbmF0ZSA9IHBhcnNlQ29vcmRpbmF0ZShkaXN0YW5jZSwgdmVydGljYWwpO1xyXG4gICAgICAgICAgICB2YXIgc2Nyb2xsID0geyB0b3A6IDAsIGxlZnQ6IDAgfTtcclxuICAgICAgICAgICAgaWYgKGNvb3JkaW5hdGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjb29yZGluYXRlLnJlbGF0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSBnZXRTY3JvbGwoJGVsLCB2ZXJ0aWNhbCA/ICd5JyA6ICd4Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsLnRvcCA9IHZlcnRpY2FsID8gY3VycmVudCArIGNvb3JkaW5hdGUudG9wIDogY29vcmRpbmF0ZS50b3A7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsLmxlZnQgPSAhdmVydGljYWwgPyBjdXJyZW50ICsgY29vcmRpbmF0ZS5sZWZ0IDogY29vcmRpbmF0ZS5sZWZ0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsID0gY29vcmRpbmF0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChpc1N0cmluZyhkaXN0YW5jZSkgJiYgZGlzdGFuY2UgIT09ICcjJykge1xyXG4gICAgICAgICAgICAgICAgdmFyICR0YXJnZXQgPSAkKGRpc3RhbmNlKTtcclxuICAgICAgICAgICAgICAgIGlmICghJHRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNjcm9sbCA9IGdldE9mZnNldCgkdGFyZ2V0LCAkZWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChvZmZzZXQpIHtcclxuICAgICAgICAgICAgICAgIHNjcm9sbC50b3AgKz0gb2Zmc2V0LnRvcDtcclxuICAgICAgICAgICAgICAgIHNjcm9sbC5sZWZ0ICs9IG9mZnNldC5sZWZ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICgkaGVhZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGwudG9wID0gTWF0aC5tYXgoMCwgc2Nyb2xsLnRvcCAtIGdldFNpemUoJGhlYWRlcikuaGVpZ2h0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBOb3JtYWxpemUgc2Nyb2xsIG9mZnNldFxyXG4gICAgICAgICAgICB2YXIgX2IgPSBnZXRWaWV3cG9ydEFuZEVsZW1lbnRTaXplcygkZWwpLCB2aWV3cG9ydCA9IF9iLnZpZXdwb3J0LCBzaXplID0gX2Iuc2l6ZTtcclxuICAgICAgICAgICAgc2Nyb2xsLnRvcCA9IHZlcnRpY2FsXHJcbiAgICAgICAgICAgICAgICA/IE1hdGgubWF4KDAsIE1hdGgubWluKHNpemUuaGVpZ2h0IC0gdmlld3BvcnQuaGVpZ2h0LCBzY3JvbGwudG9wKSlcclxuICAgICAgICAgICAgICAgIDogZ2V0U2Nyb2xsKCRlbCwgJ3knKTtcclxuICAgICAgICAgICAgc2Nyb2xsLmxlZnQgPSBob3Jpem9udGFsXHJcbiAgICAgICAgICAgICAgICA/IE1hdGgubWF4KDAsIE1hdGgubWluKHNpemUud2lkdGggLSB2aWV3cG9ydC53aWR0aCwgc2Nyb2xsLmxlZnQpKVxyXG4gICAgICAgICAgICAgICAgOiBnZXRTY3JvbGwoJGVsLCAneCcpO1xyXG4gICAgICAgICAgICAvLyBDYWxsIGBiZWZvcmVgXHJcbiAgICAgICAgICAgIC8vIFN0b3Agc2Nyb2xsaW5nIHdoZW4gaXQgcmV0dXJucyBmYWxzZVxyXG4gICAgICAgICAgICBpZiAodGhpcy5ob29rKG9wdHMsICdiZWZvcmUnLCBzY3JvbGwsICR0cmlnZ2VyKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIGN0eC5vcHRzID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBTZXQgb2Zmc2V0XHJcbiAgICAgICAgICAgIGN0eC5wb3MgPSBzY3JvbGw7XHJcbiAgICAgICAgICAgIC8vIFJ1biBhbmltYXRpb24hIVxyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0KG9wdHMpO1xyXG4gICAgICAgICAgICAvLyBCaW5kIHN0b3AgZXZlbnRzXHJcbiAgICAgICAgICAgIHRoaXMuYmluZChmYWxzZSwgdHJ1ZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTY3JvbGwgYW5pbWF0aW9uIHRvIHNwZWNpZmllZCBsZWZ0IHBvc2l0aW9uLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIFN3ZWV0U2Nyb2xsLnByb3RvdHlwZS50b1RvcCA9IGZ1bmN0aW9uIChkaXN0YW5jZSwgb3B0aW9ucykge1xyXG4gICAgICAgICAgICB0aGlzLnRvKGRpc3RhbmNlLCBfX2Fzc2lnbih7fSwgKG9wdGlvbnMgfHwge30pLCB7IHZlcnRpY2FsOiB0cnVlLCBob3Jpem9udGFsOiBmYWxzZSB9KSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTY3JvbGwgYW5pbWF0aW9uIHRvIHNwZWNpZmllZCB0b3AgcG9zaXRpb24uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgU3dlZXRTY3JvbGwucHJvdG90eXBlLnRvTGVmdCA9IGZ1bmN0aW9uIChkaXN0YW5jZSwgb3B0aW9ucykge1xyXG4gICAgICAgICAgICB0aGlzLnRvKGRpc3RhbmNlLCBfX2Fzc2lnbih7fSwgKG9wdGlvbnMgfHwge30pLCB7IHZlcnRpY2FsOiBmYWxzZSwgaG9yaXpvbnRhbDogdHJ1ZSB9KSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTY3JvbGwgYW5pbWF0aW9uIHRvIHNwZWNpZmllZCBlbGVtZW50LlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIFN3ZWV0U2Nyb2xsLnByb3RvdHlwZS50b0VsZW1lbnQgPSBmdW5jdGlvbiAoJGVsZW1lbnQsIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgdmFyICRlbCA9IHRoaXMuJGVsO1xyXG4gICAgICAgICAgICBpZiAoIWNhblVzZURPTSB8fCAhJGVsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy50byhnZXRPZmZzZXQoJGVsZW1lbnQsICRlbCksIG9wdGlvbnMgfHwge30pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU3RvcCB0aGUgY3VycmVudCBzY3JvbGwgYW5pbWF0aW9uLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIFN3ZWV0U2Nyb2xsLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKGdvdG9FbmQpIHtcclxuICAgICAgICAgICAgaWYgKGdvdG9FbmQgPT09IHZvaWQgMCkgeyBnb3RvRW5kID0gZmFsc2U7IH1cclxuICAgICAgICAgICAgdmFyIF9hID0gdGhpcywgJGVsID0gX2EuJGVsLCBjdHggPSBfYS5jdHg7XHJcbiAgICAgICAgICAgIHZhciBwb3MgPSBjdHgucG9zO1xyXG4gICAgICAgICAgICBpZiAoISRlbCB8fCAhY3R4LnByb2dyZXNzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgU3dlZXRTY3JvbGwuY2FmKGN0eC5pZCk7XHJcbiAgICAgICAgICAgIGN0eC5wcm9ncmVzcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjdHguc3RhcnQgPSAwO1xyXG4gICAgICAgICAgICBjdHguaWQgPSAwO1xyXG4gICAgICAgICAgICBpZiAoZ290b0VuZCAmJiBwb3MpIHtcclxuICAgICAgICAgICAgICAgIHNldFNjcm9sbCgkZWwsIHBvcy5sZWZ0LCAneCcpO1xyXG4gICAgICAgICAgICAgICAgc2V0U2Nyb2xsKCRlbCwgcG9zLnRvcCwgJ3knKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRlKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBVcGRhdGUgb3B0aW9ucy5cclxuICAgICAgICAgKi9cclxuICAgICAgICBTd2VldFNjcm9sbC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuJGVsKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3B0cyA9IF9fYXNzaWduKHt9LCB0aGlzLm9wdHMsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVuYmluZCh0cnVlLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0cyA9IG9wdHM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJpbmQodHJ1ZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEZXN0cm95IGluc3RhbmNlLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIFN3ZWV0U2Nyb2xsLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy4kZWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51bmJpbmQodHJ1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRlbCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENhbGxiYWNrIG1ldGhvZHMuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgLyogdHNsaW50OmRpc2FibGU6bm8tZW1wdHkgKi9cclxuICAgICAgICBTd2VldFNjcm9sbC5wcm90b3R5cGUub25CZWZvcmUgPSBmdW5jdGlvbiAoXywgX18pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBTd2VldFNjcm9sbC5wcm90b3R5cGUub25TdGVwID0gZnVuY3Rpb24gKF8pIHsgfTtcclxuICAgICAgICBTd2VldFNjcm9sbC5wcm90b3R5cGUub25BZnRlciA9IGZ1bmN0aW9uIChfLCBfXykgeyB9O1xyXG4gICAgICAgIFN3ZWV0U2Nyb2xsLnByb3RvdHlwZS5vbkNhbmNlbCA9IGZ1bmN0aW9uICgpIHsgfTtcclxuICAgICAgICBTd2VldFNjcm9sbC5wcm90b3R5cGUub25Db21wbGV0ZSA9IGZ1bmN0aW9uIChfKSB7IH07XHJcbiAgICAgICAgLyogdHNsaW50OmVuYWJsZSAqL1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFN0YXJ0IHNjcm9sbGluZyBhbmltYXRpb24uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgU3dlZXRTY3JvbGwucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKG9wdHMpIHtcclxuICAgICAgICAgICAgdmFyIGN0eCA9IHRoaXMuY3R4O1xyXG4gICAgICAgICAgICBjdHgub3B0cyA9IG9wdHM7XHJcbiAgICAgICAgICAgIGN0eC5wcm9ncmVzcyA9IHRydWU7XHJcbiAgICAgICAgICAgIGN0eC5lYXNpbmcgPSBpc0Z1bmN0aW9uKG9wdHMuZWFzaW5nKVxyXG4gICAgICAgICAgICAgICAgPyBvcHRzLmVhc2luZ1xyXG4gICAgICAgICAgICAgICAgOiBlYXNpbmdzW29wdHMuZWFzaW5nXTtcclxuICAgICAgICAgICAgLy8gVXBkYXRlIHN0YXJ0IG9mZnNldC5cclxuICAgICAgICAgICAgdmFyICRjb250YWluZXIgPSB0aGlzLiRlbDtcclxuICAgICAgICAgICAgdmFyIHN0YXJ0ID0ge1xyXG4gICAgICAgICAgICAgICAgdG9wOiBnZXRTY3JvbGwoJGNvbnRhaW5lciwgJ3knKSxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IGdldFNjcm9sbCgkY29udGFpbmVyLCAneCcpLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjdHguc3RhcnRQb3MgPSBzdGFydDtcclxuICAgICAgICAgICAgLy8gTG9vcFxyXG4gICAgICAgICAgICBjdHguaWQgPSBTd2VldFNjcm9sbC5yYWYodGhpcy5sb29wKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEhhbmRsZSB0aGUgY29tcGxldGlvbiBvZiBzY3JvbGxpbmcgYW5pbWF0aW9uLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIFN3ZWV0U2Nyb2xsLnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIF9hID0gdGhpcywgJGVsID0gX2EuJGVsLCBjdHggPSBfYS5jdHg7XHJcbiAgICAgICAgICAgIHZhciBoYXNoID0gY3R4Lmhhc2gsIGNhbmNlbCA9IGN0eC5jYW5jZWwsIG9wdHMgPSBjdHgub3B0cywgcG9zID0gY3R4LnBvcywgJHRyaWdnZXIgPSBjdHguJHRyaWdnZXI7XHJcbiAgICAgICAgICAgIGlmICghJGVsIHx8ICFvcHRzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGhhc2ggIT0gbnVsbCAmJiBoYXNoICE9PSB3aW5kb3cubG9jYXRpb24uaGFzaCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHVwZGF0ZVVSTCA9IG9wdHMudXBkYXRlVVJMO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhblVzZURPTSAmJiBjYW5Vc2VIaXN0b3J5ICYmIHVwZGF0ZVVSTCAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeVt1cGRhdGVVUkwgPT09ICdyZXBsYWNlJyA/ICdyZXBsYWNlU3RhdGUnIDogJ3B1c2hTdGF0ZSddKG51bGwsICcnLCBoYXNoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnVuYmluZChmYWxzZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGN0eC5vcHRzID0gbnVsbDtcclxuICAgICAgICAgICAgY3R4LiR0cmlnZ2VyID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKGNhbmNlbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ob29rKG9wdHMsICdjYW5jZWwnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaG9vayhvcHRzLCAnYWZ0ZXInLCBwb3MsICR0cmlnZ2VyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmhvb2sob3B0cywgJ2NvbXBsZXRlJywgY2FuY2VsKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENhbGxiYWNrIGZ1bmN0aW9uIGFuZCBtZXRob2QgY2FsbC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBTd2VldFNjcm9sbC5wcm90b3R5cGUuaG9vayA9IGZ1bmN0aW9uIChvcHRpb25zLCB0eXBlKSB7XHJcbiAgICAgICAgICAgIHZhciBhcmdzID0gW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMjsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzW19pIC0gMl0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBfYTtcclxuICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gb3B0aW9uc1t0eXBlXTtcclxuICAgICAgICAgICAgdmFyIGNhbGxiYWNrUmVzdWx0O1xyXG4gICAgICAgICAgICB2YXIgbWV0aG9kUmVzdWx0O1xyXG4gICAgICAgICAgICAvLyBjYWxsYmFja1xyXG4gICAgICAgICAgICBpZiAoaXNGdW5jdGlvbihjYWxsYmFjaykpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrUmVzdWx0ID0gY2FsbGJhY2suYXBwbHkodGhpcywgYXJncy5jb25jYXQoW3RoaXNdKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gbWV0aG9kXHJcbiAgICAgICAgICAgIG1ldGhvZFJlc3VsdCA9IChfYSA9IHRoaXMpW1wib25cIiArICh0eXBlWzBdLnRvVXBwZXJDYXNlKCkgKyB0eXBlLnNsaWNlKDEpKV0uYXBwbHkoX2EsIGFyZ3MpO1xyXG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2tSZXN1bHQgIT09IHVuZGVmaW5lZCA/IGNhbGxiYWNrUmVzdWx0IDogbWV0aG9kUmVzdWx0O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQmluZCBldmVudHMgb2YgY29udGFpbmVyIGVsZW1lbnQuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgU3dlZXRTY3JvbGwucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoY2xpY2ssIHN0b3ApIHtcclxuICAgICAgICAgICAgdmFyIF9hID0gdGhpcywgJGVsID0gX2EuJGVsLCBvcHRzID0gX2EuY3R4Lm9wdHM7XHJcbiAgICAgICAgICAgIGlmICgkZWwpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjbGljaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZEV2ZW50KCRlbCwgQ09OVEFJTkVSX0NMSUNLX0VWRU5ULCB0aGlzLmhhbmRsZUNsaWNrLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RvcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZEV2ZW50KCRlbCwgQ09OVEFJTkVSX1NUT1BfRVZFTlQsIHRoaXMuaGFuZGxlU3RvcCwgb3B0cyA/IG9wdHMuY2FuY2VsbGFibGUgOiB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVW5iaW5kIGV2ZW50cyBvZiBjb250YWluZXIgZWxlbWVudC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBTd2VldFNjcm9sbC5wcm90b3R5cGUudW5iaW5kID0gZnVuY3Rpb24gKGNsaWNrLCBzdG9wKSB7XHJcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMsICRlbCA9IF9hLiRlbCwgb3B0cyA9IF9hLmN0eC5vcHRzO1xyXG4gICAgICAgICAgICBpZiAoJGVsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2xpY2spIHtcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVFdmVudCgkZWwsIENPTlRBSU5FUl9DTElDS19FVkVOVCwgdGhpcy5oYW5kbGVDbGljaywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHN0b3ApIHtcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVFdmVudCgkZWwsIENPTlRBSU5FUl9TVE9QX0VWRU5ULCB0aGlzLmhhbmRsZVN0b3AsIG9wdHMgPyBvcHRzLmNhbmNlbGxhYmxlIDogdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFlvdSBjYW4gc2V0IFBvbHlmaWxsIChvciBQb255ZmlsbCkgZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgcmVxdWVzdEFuaW1hdGlvbkZyYW1lLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIFN3ZWV0U2Nyb2xsLnJhZiA9IHJhZjtcclxuICAgICAgICBTd2VldFNjcm9sbC5jYWYgPSBjYWY7XHJcbiAgICAgICAgcmV0dXJuIFN3ZWV0U2Nyb2xsO1xyXG4gICAgfSgpKTtcblxuICAgIHJldHVybiBTd2VldFNjcm9sbDtcblxufSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3dlZXQtc2Nyb2xsL3N3ZWV0LXNjcm9sbC5qc1xuLy8gbW9kdWxlIGlkID0gMjUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL3Njc3Mvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMjUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJzb3VyY2VSb290IjoiIn0=