let backgroundImage = document.getElementById("backgroundImage")

function parallaxControler( mouse )
{
	let x = -mouse.clientX + (window.innerWidth / 2)
	let y = -mouse.clientY + (window.innerHeight / 2)
	//console.log(x, y)
	backgroundImage.style.transform = "translate(" + x*0.02 + "px," + y*0.02 + "px)"
}

window.addEventListener("mousemove", (e) => { parallaxControler(e) } )