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

let USER_NUMBER_OF_TOMATOES:number;

/**
* Количество короких перерывов во времени, которое задал пользователь.
*/

let USER_NUMBER_OF_SHORT_BREAKS:number;

/**
* Количество длинных перерывов во времени, которое задал пользователь.
*/

let USER_NUMBER_OF_LONG_BREAKS:number;

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
    private timer:Timer;
	constructor ( timer:Timer, res:any )
	{
		/** @type {Timer} */
        this.timer = timer;
        this.setTomatoes(res.t);
        this.setShortBreaks(res.s);
        this.setLongBreaks(res.l);
        this.sequence();
    }

    setTomatoes( value:number )
	{
		USER_NUMBER_OF_TOMATOES = value;
	}

	setShortBreaks( value:number )
	{
		USER_NUMBER_OF_SHORT_BREAKS = value;
	}

	setLongBreaks( value:number )
	{
		USER_NUMBER_OF_LONG_BREAKS = value;
	}

    async sequence()
    {
        let totalCount  = USER_NUMBER_OF_TOMATOES + USER_NUMBER_OF_SHORT_BREAKS + USER_NUMBER_OF_LONG_BREAKS;
        let i;
        for(i=0; i < totalCount; i++)
        {   
            if( i % 2 == 0)
            {
                console.log('Tomato!');
                USER_NUMBER_OF_TOMATOES--;
                if(USER_NUMBER_OF_TOMATOES >= 0)
                {
                    let res = document.getElementById( 'message' ) as HTMLOutputElement;
                    res.textContent = "Пора за работу!";
                    await this.timer.setMinutes(TOMATO_TIME);    
                }
            }
            else if((i % 2) && (i % 7))
            {
                console.log('Short break!');
                USER_NUMBER_OF_SHORT_BREAKS--;
                if(USER_NUMBER_OF_SHORT_BREAKS >= 0)
                {
                    let res = document.getElementById( 'message' ) as HTMLOutputElement;
                    res.textContent = "Время отдохнуть!";
                    await this.timer.setMinutes(SHORT_BREAK);
                }
            }
            else{
                console.log('Long break!');
                USER_NUMBER_OF_LONG_BREAKS--;
                if(USER_NUMBER_OF_LONG_BREAKS >= 0)
                {
                    let res = document.getElementById( 'message' ) as HTMLOutputElement;
                    res.textContent = "Время расслабиться!";
                    await this.timer.setMinutes(LONG_BREAK);
                }
            }
        }
        let res = document.getElementById( 'message' ) as HTMLOutputElement;
        res.textContent = "Время вышло!";
    }
}

export {
	Process as default,
};