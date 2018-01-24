/**
 * Экран для отображения результата.
 * 
 * @module
 */
;

class Display
{
    /**
	 * Вывод помидоров
	 */
    private t:HTMLOutputElement;
    /**
	 * Вывод коротких перерывов
	 */
    private s:HTMLOutputElement;
    /**
	 * Вывод длинных перерывов
	 */
    private l:HTMLOutputElement;
	/**
	 * Элемент вывода
	 */
	constructor()
	{
        this.t = document.getElementById ('number-tomatos') as HTMLOutputElement;
        this.s = document.getElementById ('number-short-breaks') as HTMLOutputElement;
        this.l = document.getElementById ('number-breaks') as HTMLOutputElement;
        
	}

	declOfNum( number:number, titles:string[] ) 
	{ 
		if(number===0) return ''; 
		let cases = [2, 0, 1, 1, 1, 2]; 
		return titles[ (number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5] ]; 
	} 

	/**
	 * Устанавливает значение.
	 * 
	 * @param {number} value Новое значение.
	 */
	setTomatoes( value:number )
	{
		const tomatoTitle = this.declOfNum(value, ['помидор','помидора','помидоров']);
        this.t.textContent = value + " " + tomatoTitle;
	}

	setShortBreaks( value:number )
	{
		const breaksTitle = this.declOfNum(value, ['перерыв','перерыва','перерывов']);  
        this.s.textContent = value + " " + breaksTitle;
	}

	setLongBreaks( value:number )
	{
		const breaksTitle = this.declOfNum(value, ['перерыв','перерыва','перерывов']);  
        this.l.textContent = value + " " + breaksTitle;
	}
}

export {
	Display as default,
};