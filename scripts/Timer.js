// выставляем секунды
let allsec=0;
// ID интервала
let intervalID;

/**
 * Таймер обратного отсчета.
 */
class Timer
{
	constructor( output )
	{
        this.output = output;
    }
    
    setMinutes( newmin ){
        allsec = newmin * 60;
        document.getElementById('timer').textContent = '00:00';
        intervalID = setInterval(this.refresh, 1000);
        return new Promise(resolve => {
        setTimeout(() => {
        resolve(newmin);
            }, newmin * 60000);
        });
    }

    refresh()
    {
        allsec--;
        let min = Math.floor (allsec/60 );
        let sec = allsec % 60;
        let time = (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec;
        document.getElementById('timer').textContent = time;
        if(allsec == 0){
            clearInterval(intervalID);
            let myAudio = new Audio; // создание экземпляра класса Audio
            myAudio.src = "../sounds/sound.mp3"; // назначение звукового файла
            myAudio.play(); // воспроизвести звук
        }
    }
}


export {
	Timer as default,
};