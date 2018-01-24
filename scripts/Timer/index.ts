/**
 * Модуль инициализации таймера
 */
;

import initFormButton from './InitFormButton';
//import initButton from './InitEveryButton';
import Display from './Display';
import Converter from './Converter';
import Timer from './Timer';
import Process from './Process';

console.log ('Hello!');

function main(): void
{
    SaveTime();
}

function SaveTime (): void
{
    const form = document.forms[0];
    const onSave = ( event: Event ): void => 
	{	
        if (event == undefined) {
            return;
        }
        const s = (<HTMLInputElement>form.elements[0]).valueAsNumber;
        const m = document.getElementById('Page1') as HTMLButtonElement;
        const m2 = document.getElementById('Page2') as HTMLButtonElement;
        m.style.display = 'none';
        m2.style.display = 'block';
        setConverter(s);
    };
    initButtonNext (form, onSave);
}

function initButtonNext (form: HTMLFormElement, action: (event: Event) => void ): void
{
	const onAct = (event: Event): void =>
	{
		action(event);
        event.preventDefault();
	};
	if(form){
        form.addEventListener( 'submit', onAct );
    }
}

function setConverter(time:number){
    const display = new Display();
    const converter = new Converter(display, time);
    initButtonBack ();
    initButtonStart (converter, time);
}

function initButtonBack (): void
{
    const button = document.getElementById('main') as HTMLButtonElement;
    const onBack = ( event: Event ): void => 
	{	
        if (event == undefined) {
            return;
        }
        location.reload();
    };
	initFormButton (button, onBack);
}

function initButtonStart (converter:Converter, time:number): void
{
    const button = document.getElementById('start') as HTMLButtonElement;
    const onStart = ( event: Event ): void => 
	{	
        if (event == undefined) {
            return;
        }
        const m2 = document.getElementById('Page2') as HTMLButtonElement;
        const m3 = document.getElementById('Page3') as HTMLButtonElement;
        m2.style.display = 'none';
        m3.style.display = 'block';
        setTimer(converter, time);
    };
	initFormButton (button, onStart);
}

function setTimer(converter:Converter, time:number){
    const res  = converter.converterMinToTomatos(time);
    const outputElement = document.getElementById( 'timer' ) as HTMLOutputElement;    
    const timer = new Timer( outputElement );
    new Process( timer, res );
}

/**
 * Модуль
 */
export {
	main as default,
};