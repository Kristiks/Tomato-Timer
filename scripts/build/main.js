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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Timer_index__ = __webpack_require__(1);
;

Object(__WEBPACK_IMPORTED_MODULE_0__Timer_index__["a" /* default */])();


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return main; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__InitFormButton__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Display__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Converter__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Timer__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Process__ = __webpack_require__(6);
;





console.log('Hello!');
function main() {
    SaveTime();
}
function SaveTime() {
    const form = document.forms[0];
    const onSave = (event) => {
        if (event == undefined) {
            return;
        }
        const s = form.elements[0].valueAsNumber;
        const m = document.getElementById('Page1');
        const m2 = document.getElementById('Page2');
        m.style.display = 'none';
        m2.style.display = 'block';
        setConverter(s);
    };
    initButtonNext(form, onSave);
}
function initButtonNext(form, action) {
    const onAct = (event) => {
        action(event);
        event.preventDefault();
    };
    if (form) {
        form.addEventListener('submit', onAct);
    }
}
function setConverter(time) {
    const display = new __WEBPACK_IMPORTED_MODULE_1__Display__["a" /* default */]();
    const converter = new __WEBPACK_IMPORTED_MODULE_2__Converter__["a" /* default */](display, time);
    initButtonBack();
    initButtonStart(converter, time);
}
function initButtonBack() {
    const button = document.getElementById('main');
    const onBack = (event) => {
        if (event == undefined) {
            return;
        }
        location.reload();
    };
    Object(__WEBPACK_IMPORTED_MODULE_0__InitFormButton__["a" /* default */])(button, onBack);
}
function initButtonStart(converter, time) {
    const button = document.getElementById('start');
    const onStart = (event) => {
        if (event == undefined) {
            return;
        }
        const m2 = document.getElementById('Page2');
        const m3 = document.getElementById('Page3');
        m2.style.display = 'none';
        m3.style.display = 'block';
        setTimer(converter, time);
    };
    Object(__WEBPACK_IMPORTED_MODULE_0__InitFormButton__["a" /* default */])(button, onStart);
}
function setTimer(converter, time) {
    const res = converter.converterMinToTomatos(time);
    const outputElement = document.getElementById('timer');
    const timer = new __WEBPACK_IMPORTED_MODULE_3__Timer__["a" /* default */](outputElement);
    new __WEBPACK_IMPORTED_MODULE_4__Process__["a" /* default */](timer, res);
}



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return buttonAction; });
;
function buttonAction(button, action) {
    const onAct = (event) => {
        action(event);
        event.preventDefault();
    };
    if (button) {
        button.addEventListener('click', onAct);
    }
}



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Display; });
;
class Display {
    constructor() {
        this.t = document.getElementById('number-tomatos');
        this.s = document.getElementById('number-short-breaks');
        this.l = document.getElementById('number-breaks');
    }
    declOfNum(number, titles) {
        if (number === 0)
            return '';
        let cases = [2, 0, 1, 1, 1, 2];
        return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
    }
    setTomatoes(value) {
        const tomatoTitle = this.declOfNum(value, ['помидор', 'помидора', 'помидоров']);
        this.t.textContent = value + " " + tomatoTitle;
    }
    setShortBreaks(value) {
        const breaksTitle = this.declOfNum(value, ['перерыв', 'перерыва', 'перерывов']);
        this.s.textContent = value + " " + breaksTitle;
    }
    setLongBreaks(value) {
        const breaksTitle = this.declOfNum(value, ['перерыв', 'перерыва', 'перерывов']);
        this.l.textContent = value + " " + breaksTitle;
    }
}



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Converter; });
const MS = 60000;
const TOMATO_TIME = 25;
const SHORT_BREAK = 5;
const LONG_BREAK = 20;
const NUMBER_OF_TOMATOES = 4;
const NUMBER_OF_SHORT_BREAKS = 3;
const NUMBER_OF_LONG_BREAKS = 1;
class Converter {
    constructor(display, time) {
        this.countAll = {
            t: 0,
            s: 0,
            l: 0,
        };
        this.display = display;
        this.time = time;
        this.converterMinToTomatos(this.time);
    }
    converterMsToMin(userTime) {
        return userTime / MS;
    }
    converterMinToTomatos(time) {
        const userTime = time;
        let userTimeAsMin = this.converterMsToMin(Number(userTime));
        let fullCycleTime = TOMATO_TIME * NUMBER_OF_TOMATOES + SHORT_BREAK * NUMBER_OF_SHORT_BREAKS + LONG_BREAK * NUMBER_OF_LONG_BREAKS;
        let numberOfCycles = Math.floor(userTimeAsMin / fullCycleTime);
        let timeRemainder = userTimeAsMin - numberOfCycles * fullCycleTime;
        let tomatoesRemained = 0;
        while (timeRemainder >= TOMATO_TIME) {
            if (tomatoesRemained >= 1) {
                timeRemainder -= (TOMATO_TIME + SHORT_BREAK);
                tomatoesRemained++;
            }
            else {
                timeRemainder -= TOMATO_TIME;
                tomatoesRemained++;
            }
        }
        let userNumberOfTomatoes = NUMBER_OF_TOMATOES * numberOfCycles + tomatoesRemained;
        let userNumberOfShortBreaks;
        let userNumberOfLongBreaks;
        if (tomatoesRemained == 0) {
            userNumberOfShortBreaks = NUMBER_OF_SHORT_BREAKS * numberOfCycles;
            userNumberOfLongBreaks = numberOfCycles - 1;
        }
        else {
            userNumberOfShortBreaks = NUMBER_OF_SHORT_BREAKS * numberOfCycles + tomatoesRemained - 1;
            userNumberOfLongBreaks = numberOfCycles;
        }
        if (userNumberOfTomatoes != 0) {
            this.display.setTomatoes(userNumberOfTomatoes);
        }
        if (userNumberOfShortBreaks != 0) {
            this.display.setShortBreaks(userNumberOfShortBreaks);
        }
        if (userNumberOfLongBreaks != 0) {
            this.display.setLongBreaks(userNumberOfLongBreaks);
        }
        localStorage.setItem('userNumberOfTomatoes', String(userNumberOfTomatoes));
        localStorage.setItem('userNumberOfShortBreaks', String(userNumberOfShortBreaks));
        localStorage.setItem('userNumberOfLongBreaks', String(userNumberOfLongBreaks));
        this.countAll.t = userNumberOfTomatoes;
        this.countAll.s = userNumberOfShortBreaks;
        this.countAll.l = userNumberOfLongBreaks;
        return this.countAll;
    }
}



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Timer; });
let allsec = 0;
let intervalID;
;
class Timer {
    constructor(output) {
        this.output = output;
    }
    setMinutes(newmin) {
        allsec = newmin * 60;
        this.output.textContent = '00:00';
        intervalID = window.setInterval(this.refresh, 1000);
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(newmin);
            }, newmin * 60000);
        });
    }
    refresh() {
        let res = document.getElementById('timer');
        allsec--;
        let min = Math.floor(allsec / 60);
        let sec = allsec % 60;
        let time = (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec;
        res.textContent = time;
        if (allsec == 0) {
            window.clearInterval(intervalID);
            let myAudio = new Audio;
            myAudio.src = "../sounds/sound.mp3";
            myAudio.play();
            this.notifyMe;
        }
    }
    notifyMe() {
        if (!("Notification" in window)) {
            alert("This browser does not support desktop notification");
        }
        Notification.requestPermission(function (permission) {
            if (permission === "granted") {
                new Notification("Tmato-Timer", {
                    tag: "Messege",
                    body: "Время вышло!",
                    icon: "img/logo.png"
                });
            }
        });
    }
}



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Process; });
const TOMATO_TIME = 1;
const SHORT_BREAK = 5;
const LONG_BREAK = 20;
let USER_NUMBER_OF_TOMATOES;
let USER_NUMBER_OF_SHORT_BREAKS;
let USER_NUMBER_OF_LONG_BREAKS;
class Process {
    constructor(timer, res) {
        this.timer = timer;
        this.setTomatoes(res.t);
        this.setShortBreaks(res.s);
        this.setLongBreaks(res.l);
        this.sequence();
    }
    setTomatoes(value) {
        USER_NUMBER_OF_TOMATOES = value;
    }
    setShortBreaks(value) {
        USER_NUMBER_OF_SHORT_BREAKS = value;
    }
    setLongBreaks(value) {
        USER_NUMBER_OF_LONG_BREAKS = value;
    }
    async sequence() {
        let totalCount = USER_NUMBER_OF_TOMATOES + USER_NUMBER_OF_SHORT_BREAKS + USER_NUMBER_OF_LONG_BREAKS;
        console.log(totalCount);
        let i;
        for (i = 0; i < totalCount; i++) {
            console.log(i);
            if (i % 2 == 0) {
                console.log('Tomato!');
                USER_NUMBER_OF_TOMATOES--;
                if (USER_NUMBER_OF_TOMATOES >= 0) {
                    await this.timer.setMinutes(TOMATO_TIME);
                }
            }
            else if ((i % 2) && (i % 7)) {
                console.log('Short break!');
                USER_NUMBER_OF_SHORT_BREAKS--;
                if (USER_NUMBER_OF_SHORT_BREAKS >= 0) {
                    await this.timer.setMinutes(SHORT_BREAK);
                }
            }
            else {
                console.log('Long break!');
                USER_NUMBER_OF_LONG_BREAKS--;
                if (USER_NUMBER_OF_LONG_BREAKS >= 0) {
                    await this.timer.setMinutes(LONG_BREAK);
                }
            }
        }
    }
}



/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map