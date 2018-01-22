import Timer from './Timer.js';

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
* Количество помидоров во времени, которое задал пользователь.
*/

let USER_NUMBER_OF_TOMATOES = localStorage.getItem('userNumberOfTomatoes');

/**
* Количество короких перерывов во времени, которое задал пользователь.
*/

let USER_NUMBER_OF_SHORT_BREAKS = localStorage.getItem('userNumberOfShortBreaks');

/**
* Количество длинных перерывов во времени, которое задал пользователь.
*/

let USER_NUMBER_OF_LONG_BREAKS = localStorage.getItem('userNumberOfLongBreaks');

/**
* Последовательность таймера.
*/

class Process
{
	/**
	 * Последовательность таймера.
	 * 
	 * @param {Timer} timer Таймер.
	 */
	constructor ( timer )
	{
		/** @type {Timer} */
        this.timer = timer;
        this.sequence();
    }

    async sequence()
    {
        let totalCount  = USER_NUMBER_OF_TOMATOES + USER_NUMBER_OF_SHORT_BREAKS + USER_NUMBER_OF_LONG_BREAKS;
        console.log(totalCount);
        let i;
        for(i=0; i < totalCount; i++)
        {   
            console.log(i);
            if( i % 2 == 0)
            {
                console.log('Tomato!');
                USER_NUMBER_OF_TOMATOES--;
                if(USER_NUMBER_OF_TOMATOES >= 0)
                {
                   let t = await this.timer.setMinutes(TOMATO_TIME);    
                }
            }
            else if((i % 2) && (i % 7))
            {
                console.log('Short break!');
                USER_NUMBER_OF_SHORT_BREAKS--;
                if(USER_NUMBER_OF_SHORT_BREAKS >= 0)
                {
                    let t = await this.timer.setMinutes(SHORT_BREAK);
                }
            }
            else{
                console.log('Long break!');
                USER_NUMBER_OF_LONG_BREAKS--;
                if(USER_NUMBER_OF_LONG_BREAKS >= 0)
                {
                    let t = await this.timer.setMinutes(LONG_BREAK);
                }
            }
        }
    }
}

export {
	Process as default,
};