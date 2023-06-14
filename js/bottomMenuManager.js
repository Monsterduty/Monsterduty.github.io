let button = document.getElementById("bottomMenu")

function openBottomMenu()
{
	//close winInfo if it's open.
	closeWinInfo()
	resetWinInfo()

	//reset the position of the applications menu.
	resetMenu()

	let menu = document.getElementById("contactMeContent")
	
	if ( menu.style.visibility == "visible" ) return;

	let pos = menu.getBoundingClientRect()

	let openAnimation =
	[
		{
			width: "0px",
			height: "0px"
		},
		{
			width: pos.width + "px",
			height: pos.height + "px"
		}
	]

	menu.style.visibility = 'visible'
	menu.animate(openAnimation, 200)

	//animation for content.
	openAnimation =
	[
		{
			opacity: 0.0
		},
		{
			opacity: 1.0
		}
	]

	let description = document.getElementById("myDescription")
	let redirections = document.getElementById("redirections")
	let photoAndName = document.getElementById("photoAndName")

	setTimeout( () => {
		description.animate(openAnimation, 200)
		redirections.animate(openAnimation, 200)
		photoAndName.animate(openAnimation, 200)
		description.style.visibility = "visible"
		redirections.style.visibility = "visible"
		photoAndName.style.visibility = "visible"
	}, 200 );
	
}

function closeBottomMenu()
{

	let menu = document.getElementById("contactMeContent")
	
	if ( menu.style.visibility == "hidden" ) return;

	let description = document.getElementById("myDescription")
	let redirections = document.getElementById("redirections")
	let photoAndName = document.getElementById("photoAndName")
	let contactForm = document.getElementById("gmailFormContact")

	let closeAnimation =
	[
		{ opacity: 1.0 },
		{ opacity: 0.0 }
	]

	description.animate(closeAnimation, 200)
	redirections.animate(closeAnimation, 200)
	photoAndName.animate(closeAnimation, 200)
	contactForm.animate(closeAnimation, 200)

	let pos = menu.getBoundingClientRect()
	closeAnimation =
	[
		{
			width: pos.width + "px",
			height: pos.height + "px"
		},
		{
			width: "0px",
			height: "0px"
		}
	]

	setTimeout(() => {
		menu.animate(closeAnimation, 200)
		description.style.visibility = "hidden"
		redirections.style.visibility = "hidden"
		photoAndName.style.visibility = "hidden"
		for ( let i = 0; i < contactForm.length; i++ )
			contactForm[i].style.visibility = "hidden"
		contactForm.style.visibility = "hidden"
		setTimeout( () => { menu.style.visibility = "hidden" }, 200)
	},200)
}

function changeToContactForm()
{
	let description = document.getElementById("myDescription")
	description.style.visibility = "hidden"

	let redirections = document.getElementById("redirections")
	redirections.style.visibility = "hidden"

	let photoAndName = document.getElementById("photoAndName")
	photoAndName.style.visibility = "hidden"

	let contactForm = document.getElementById("gmailFormContact")

	for ( let i = 0; i < contactForm.length; i++ )
		contactForm[i].style.visibility = "visible"
	contactForm.style.visibility = "visible"
}

function changeState()
{
	let currentClass = button.getAttribute("class")

	if ( currentClass.search("inactive") != -1 )
	{	
		currentClass = "bottomMenu activeMenuButton"
		openBottomMenu()
	}
	else
	{
		currentClass = "bottomMenu inactiveMenuButton"
		closeBottomMenu()
	}
	
	button.setAttribute("class", currentClass)
}

function resetBottomMenu()
{
	button.setAttribute("class", "bottomMenu inactiveMenuButton")
}

button.addEventListener("click", (e) => {changeState()})
document.getElementById("gmailLink").addEventListener("click", (e) => { changeToContactForm() })
