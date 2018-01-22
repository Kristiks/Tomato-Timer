/**
 * Экран для отображения результата.
 */
class Display
{
	/**
	 * Экран для отображения результата.
	 * 
	 * @param {HTMLElement} output Элемент для вывода результата.
	 */
	constructor( output )
	{
		/** @type {HTMLElement} */
		this.output = output;
	}

	declOfNum( number, titles ) 
	{ 
		if(number===0) return ''; 
		let cases = [2, 0, 1, 1, 1, 2]; 
		return titles[ (number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5] ]; 
	} 

	/**
	 * Устанавливает значение.
	 * 
	 * @param {string} value Новое значение.
	 */
	setTomatoes( value )
	{
		const tomatoTitle = this.declOfNum(value, ['помидор','помидора','помидоров']);
		document.getElementById ('number-tomatos').textContent = value + " " + tomatoTitle;
	}

	setShortBreaks( value )
	{
		const breaksTitle = this.declOfNum(value, ['перерыв','перерыва','перерывов']);  
		document.getElementById ('number-short-breaks').textContent = value + " " + breaksTitle;
	}

	setLongBreaks( value )
	{
		const breaksTitle = this.declOfNum(value, ['перерыв','перерыва','перерывов']);  
		document.getElementById ('number-breaks').textContent = value + " " + breaksTitle;
	}
}

export {
	Display as default,
};