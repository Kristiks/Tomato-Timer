import Display from './Display.js';
import Converter from './Converter.js';

main();

function main()
{
    const outputElements = document.querySelectorAll( 'span.display' );
    const display = new Display( outputElements );
    new Converter( display );
}