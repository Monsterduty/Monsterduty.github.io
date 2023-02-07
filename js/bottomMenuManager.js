let button = document.getElementById("bottomMenu")

function openBottomMenu()
{
	let menu = document.getElementById("contactMeContent")
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
	menu.animate(openAnimation, 500)

	let description = document.getElementById("myDescription")
	description.style.visibility = "visible"

	let redirections = document.getElementById("redirections")
	redirections.style.visibility = "visible"

	let photoAndName = document.getElementById("photoAndName")
	photoAndName.style.visibility = "visible"
}

function closeBottomMenu()
{

	let menu = document.getElementById("contactMeContent")
	let pos = menu.getBoundingClientRect()

	let closeAnimation =
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

	menu.animate(closeAnimation, 500)

	setTimeout(() => {
		menu.style.visibility = 'hidden'

		let description = document.getElementById("myDescription")
		description.style.visibility = "hidden"

		let redirections = document.getElementById("redirections")
		redirections.style.visibility = "hidden"

		let photoAndName = document.getElementById("photoAndName")
		photoAndName.style.visibility = "hidden"

		let contactForm = document.getElementById("gmailFormContact")
		for ( let i = 0; i < contactForm.length; i++ )
			contactForm[i].style.visibility = "hidden"
		contactForm.style.visibility = "hidden"
	},500)

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

button.addEventListener("click", (e) => {changeState()})
document.getElementById("gmailLink").addEventListener("click", (e) => { changeToContactForm() })