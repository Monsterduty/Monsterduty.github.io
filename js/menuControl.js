let cursor = document.getElementById("menuCursor")
let bar = document.getElementById("menuItems")
let icons = document.getElementsByClassName("itemMenuIcons")
let currentIconSelected
let cursorPos = -1;
let lastXPosition = 0

function setPos( iconPos )
{
	cursor.style.filter = "opacity(100%) blur(13px)"
	let initial = icons[0].getBoundingClientRect().x
	let iconArea = icons[iconPos].getBoundingClientRect()
	let cursorArea = cursor.getBoundingClientRect()

	let keyFrames = [ {transform: "translateX(" + lastXPosition + "px)",}, {transform: "translateX(" + (iconArea.x - initial) + "px)"} ]
	let options = { duration: 500, easing: "ease", iterations: 1 }

	cursor.style.transform = "translateX(" + (iconArea.x - initial) + "px)"
	//cursor.style.marginLeft = (-initial + iconArea.x) + "px"
	cursor.animate(keyFrames, options)
	lastXPosition = iconArea.x - initial
}

function keyDeal( key )
{
	let last = cursorPos
	switch (key)
	{
		case "ArrowRight":
			cursorPos++
			if ( cursorPos > icons.length -1 ) cursorPos = icons.length -1;
			break;

		case "ArrowLeft":
			cursorPos--
			if ( cursorPos < 0 ) cursorPos = 0;
			break

		case "Enter":
			if ( cursorPos == -1 ) return;
			currentIconSelected = cursorPos
			openWinInfo()
			break;

		case "Escape":
			cursorPos = -1
			cursor.style.filter = "opacity(0%)"
			cursor.style.marginLeft = "0px"
			closeWinInfo()
			closeBottomMenu()
			document.getElementById("bottomMenu").setAttribute("class", "bottomMenu inactiveMenuButton")
			return;
			break;

		default:
			return;
			break;
	}

	if ( cursorPos != last )
		setPos( cursorPos )
}

cursor.style.marginLeft = "0px"
cursor.style.filter = "opacity(0%)"

for ( let i = 0; i < icons.length; i++ )
{
	icons[i].addEventListener("mouseover", (e) => { cursorPos = i; setPos(i) } )
	icons[i].addEventListener("click", (e) => { currentIconSelected = i; openWinInfo() } )
}

window.addEventListener("keydown", (e) => { keyDeal(e.key) } )
window.addEventListener("resize", (e) => {
	if ( cursor.style.filter == "opacity(100%) blur(13px)" ) setPos(cursorPos)
} )