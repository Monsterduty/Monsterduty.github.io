let backgroundImage = document.getElementById("backgroundImage")

function parallaxControler( mouse )
{
	let x = -mouse.clientX + (window.innerWidth / 2)
	let y = -mouse.clientY + (window.innerHeight / 2)
	//console.log(x, y)
	backgroundImage.style.transform = "translate(" + x*0.02 + "px," + y*0.02 + "px)"
}

function containsPointer( clickEvent, element )
{
	let X = clickEvent.clientX
	let Y = clickEvent.clientY

	if ( X >= element.offsetLeft && X <= element.offsetLeft + element.offsetWidth )
		if ( Y >= element.offsetTop && Y <= element.offsetTop + element.offsetHeight )
			return true
	return false;
}

//let eventsNames = [ "mousemove", "touchmove" ]

//for ( let i = 0; i < 2; i++ )
window.addEventListener( "mousemove", (e) => {

	//this statements are critical for mobile performance, since moving the background while performing
	//animations of elements, is a too heavy task for most devices!.
	if ( containsPointer( e, document.getElementById("bottomMenu") ) )
		return false;

	parallaxControler(e)
} )

window.addEventListener( "touchmove", (e) =>{
	if ( containsPointer( e.touches[0], document.getElementById("bottomMenu") ) )
		return false

	parallaxControler(e.touches[0])
} )
