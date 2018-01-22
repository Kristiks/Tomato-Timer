import Display from './Display.js';

/**
* Количество миллисекунд в минуте.
*/
const MS = 60000;

/**
* Количество минут в одном помидоре.
*/
const TOMATO_TIME = 25;

/**
* Количество минут в маленьком перерыве.
*/

const SHORT_BREAK = 5;

/**
* Количество минут в длинном перерыве.
*/

const LONG_BREAK = 20;

/**
* Количество помидоров в одном цикле.
*/

const NUMBER_OF_TOMATOES = 4;

/**
* Количество коротких перерывов в одном цикле.
*/

const NUMBER_OF_SHORT_BREAKS = 3;

/**
* Количество длинных перерывов в одном цикле.
*/

const NUMBER_OF_LONG_BREAKS = 1;

/**
 * Конвертер миллисекунд в цикл помидоров.
 */

class Converter
{
	/**
	 * Конвертер.
	 * 
	 * @param {Display} display Экран для отображения результата.
	 */
	constructor ( display )
	{
		/** @type {Display} */
        this.display = display;
        this.converterMinToTomatos();
    }

    /**
    * Миллисекунды в минуты.
    */
    converterMsToMin( userTime )
    {
        return userTime / MS;
    }

    /**
    * Миллисекунды в помидоры.
    */
    converterMinToTomatos()
    {
        const userTime = localStorage.getItem('startTime');
        let userTimeAsMin = this.converterMsToMin(userTime);
        let fullCycleTime = TOMATO_TIME * NUMBER_OF_TOMATOES + SHORT_BREAK * NUMBER_OF_SHORT_BREAKS + LONG_BREAK * NUMBER_OF_LONG_BREAKS;
        let numberOfCycles = Math.floor( userTimeAsMin / fullCycleTime);
        let timeRemainder = userTimeAsMin - numberOfCycles * fullCycleTime;

        let tomatoesRemained=0;
        while (timeRemainder >= TOMATO_TIME)
        {
            if(tomatoesRemained >= 1){
                timeRemainder -= (TOMATO_TIME + SHORT_BREAK);
                tomatoesRemained++;
            }
            else{
                timeRemainder -= TOMATO_TIME;
                tomatoesRemained++;
            }
        }

        let userNumberOfTomatoes = NUMBER_OF_TOMATOES * numberOfCycles + tomatoesRemained;
        let userNumberOfShortBreaks;
        let userNumberOfLongBreaks;

        if(tomatoesRemained == 0){
            userNumberOfShortBreaks = NUMBER_OF_SHORT_BREAKS * numberOfCycles;
            userNumberOfLongBreaks = numberOfCycles - 1;
        }
        else{
            userNumberOfShortBreaks = NUMBER_OF_SHORT_BREAKS * numberOfCycles + tomatoesRemained-1;
            userNumberOfLongBreaks = numberOfCycles;
        }

        if(userNumberOfTomatoes != 0){
            this.display.setTomatoes( userNumberOfTomatoes );
        }

        if(userNumberOfShortBreaks !=0){
            this.display.setShortBreaks( userNumberOfShortBreaks );
        }

        if(userNumberOfLongBreaks !=0){
            this.display.setLongBreaks( userNumberOfLongBreaks );
        }

        localStorage.setItem('userNumberOfTomatoes', userNumberOfTomatoes);
        localStorage.setItem('userNumberOfShortBreaks', userNumberOfShortBreaks);
        localStorage.setItem('userNumberOfLongBreaks', userNumberOfLongBreaks);
    }
}

export {
	Converter as default,
};


