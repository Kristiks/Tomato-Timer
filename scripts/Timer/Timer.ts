// выставляем секунды
let allsec=0;
// ID интервала
let intervalID:number;

/**
 * Таймер обратного отсчета.
 * 
 * @module
 */
;

class Timer
{
    private output:HTMLOutputElement;
	constructor( output:HTMLOutputElement )
	{
        this.output = output;
    }
    
    setMinutes( newmin:number ){
        allsec = newmin * 60;
        this.output.textContent = '00:00';
        intervalID = window.setInterval(this.refresh, 1000);
        return new Promise(resolve => {
        setTimeout(() => {
        resolve(newmin);
            }, newmin * 60000);
        });
    }

    refresh()
    {   
        let res = document.getElementById( 'timer' ) as HTMLOutputElement;
        allsec--;
        let min = Math.floor (allsec/60 );
        let sec = allsec % 60;
        let time = (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec;
        res.textContent = time;
        if(allsec == 0){
            window.clearInterval(intervalID);
            let myAudio = new Audio; // создание экземпляра класса Audio
            myAudio.src = "../sounds/sound.mp3"; // назначение звукового файла
            myAudio.play(); // воспроизвести звук
            // всплывающее уведомление
            if (!("Notification" in window)) {
                alert("This browser does not support desktop notification");
              }
              Notification.requestPermission(function (permission) {
                 // Если пользователь разрешил, то создаем уведомление
                  if (permission === "granted") {
                      new Notification("Tmato-Timer", {
                      tag : "Messege",
                      body : "Изменение сотояния!",
                      icon : "img/logo.png"
                  });
                  }
              });
        }
    }
}




export {
	Timer as default,
};