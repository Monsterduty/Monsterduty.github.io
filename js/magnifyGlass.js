function mouseHandler( event, frame, pos )
{
	let x = -pos.x + event.clientX
	let y = -pos.y + event.clientY
	let zoom = 8
	frame.style.backgroundSize = (pos.width * zoom) + "px " + (pos.height * zoom) + "px"
	
	frame.style.backgroundPosition = "-" + ((x * zoom) - frame.offsetWidth / 2 )+ "px -" + ((y * zoom) - frame.offsetHeight / 2) + "px"
}

function glass( item )
{
	let frame = document.createElement("div")
	frame.style.backgroundImage = "url(" + item.src + ")"
	frame.setAttribute("id", "magnifyGlass")
	item.addEventListener("mousemove", (e) => mouseHandler(e, frame, item.getBoundingClientRect() ) )
	document.getElementById("winInfo").appendChild(frame)
}