function mouseHandler( event, frame, pos )
{
	let zoom = 5
	let x = (((-pos.x + event.clientX) * zoom) - frame.offsetWidth / 2 )
	let y = (((-pos.y + event.clientY) * zoom) - frame.offsetHeight / 2)

	if ( x < 0 ) x = 0;
	if ( x > (pos.width * zoom) - pos.width ) x = (pos.width * zoom) - pos.width
	if ( y < 0 ) y = 0;
	if ( y > (pos.height * zoom) - pos.height ) y = (pos.height * zoom) - pos.height

	frame.style.backgroundSize = (pos.width * zoom) + "px " + (pos.height * zoom) + "px"
	
	frame.style.backgroundPosition = "-" + x + "px -" + y + "px"
}

function glass( item )
{
	let frame = document.createElement("div")
	frame.style.backgroundImage = "url(" + item.src + ")"
	frame.setAttribute("id", "magnifyGlass")
	item.addEventListener("mousemove", (e) => mouseHandler(e, frame, item.getBoundingClientRect() ) )
	document.getElementById("winInfo").appendChild(frame)
}