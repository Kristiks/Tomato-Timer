import Timer from './Timer.js';
import Process from './Process.js';

main();

function main()
{
    const outputElement = document.getElementById( 'timer' );    
    const timer = new Timer( outputElement );
    new Process( timer );

}