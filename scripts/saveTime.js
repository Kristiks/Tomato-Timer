const button = document.getElementById( 'next' );

const onButtonClick = ( event ) =>
{
	localStorage.setItem('startTime', document.getElementById( 'UserTime' ).valueAsNumber);
}
button.addEventListener( "click" , onButtonClick);