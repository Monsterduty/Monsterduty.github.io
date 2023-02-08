let lastInfoOpened = ""

let logosSvgArray =
[
	"cppLogo.svg",
	"QtLogo.svg",
	"QtCreatorLogo.svg",
	"BashLogo.svg",
	"GitLogo.svg",
	"LinuxLogo.svg",
	"FigmaLogo.svg",
	"CMakeLogo.svg",
	"Sdl2Logo.svg",
	"TranslatorLogo.svg"
]

let descriptionsArray =
[
	"The first language i learned, also my most powerful tool, in a world where the technology evolves faster, c++ keep alive more than never and it’s in every place you can imagine.",
	"In the world of desktop graphical user interfaces there’s an unbeaten king known as The Qt Framework that allow me to build not only desktop applications but cross platform apps for all kind of devices!",
	"A huge Framework like Qt, provide some extra tools for help with the development and Qt Creator is an entire c++ IDE to build desktop and mobile applications with Qt.",
	"When you realize that the best tool for a project is already build into the system, you have to use it, in my case, bash scripting was something kinda great of learn and use.",
	"Keep the order of a project working in group can be a complicated task, but with the system control version git, we finally can work without compromise the project and even make mistakes without consecuences!",
	"A'm a huge fan of the linux kernel and the GNU Operating System, reading code from open source project made me learn a lot about programing and also i made some software too for the comunity!.",
	"A'm not just a programer, i also have knowledge of UI/UX design with tools like figma, i design all the user interfaces for all my applications.",
	"As a c++ programer, i know a couple of thing about build system, specially GNU Make and CMake for generate Makefiles.",
	"Only just for have Qt available, doesn't mean that is the best tool for everithing! i love to learn new things every day an when i did found SDL i found a new tool for expand my knowledge of applications development!.",
	"I have a passion for language learning, i speak two languages!, English and native Spanish, i'm also learning some japanese to add another language to the list and i make some extra work translating documents from English to Spanish!."
]

let titlesOfProjects =
[
	"Vanilla c++ code  Full c++ application",
	"ANBrowser-qt",
	"QCreator",
	"Shellpkg - a package manager",
	"Using Git on this portofolio",
	"I3AutoLayout",
	"Designing this portofolio",
	"CMake example",
	"Simple FlappyBird SDL2",
	"from English to Spanish"
]
let projectsImages =
[
	"mktestCodeReview.gif  mktestLinuxReview.gif",
	"ANBrowser.png",
	"QtCreator.png",
	"shellpkgExample.gif",
	"gitUsage.gif",
	"i3AutoLayout.gif",
	"figmaCapture.png",
	"cmakeExample.gif",
	"flappyBirdSDL2.gif",
	"millionaireSonInLaw.png  elYernoMillonarioMosterdutyTranslation.png",
]

let links =
[
	"https://github.com/Monsterduty/mktest",
	"beta coming soon",
	"available in the Qt website",
	"https://github.com/Monsterduty/shellpkg",
	"available in the Git website",
	"https://github.com/Monsterduty/i3AutoLayout",
	"https://www.figma.com",
	"Most simplest CMakeLists.txt file",
	"https://github.com/Monsterduty/simple-flappy-sdl2",
	"Chaper one of The MIllionaire Son-in-law",
]

function loadIMG()
{
	let element = document.getElementById("Images")
	element.innerHTML = ""

	if ( projectsImages[currentIconSelected].search("  ") != -1 )
	{
		let image = document.createElement("img")
		image.setAttribute("class", "pairImg")
		image.setAttribute("src", "resources/projectsImages/" + projectsImages[currentIconSelected].substr(0,projectsImages[currentIconSelected].search("  ")))
		image.style.gridColumnStart = "1"
		image.style.gridColumnEnd = "1"
		element.appendChild(image)

		image = document.createElement("img")
		image.setAttribute("class", "pairImg")
		image.setAttribute("src", "resources/projectsImages/" + projectsImages[currentIconSelected].substr(projectsImages[currentIconSelected].search("  ") + 2))
		image.style.gridColumnStart = "2"
		image.style.gridColumnEnd = "2"
		element.appendChild(image)

		//to add the magnifying Glass
		let targets = document.getElementsByClassName("pairImg")
		for ( let i = 0; i < targets.length; i++ )
		{
			targets[i].addEventListener("mouseenter", (e) => { glass(targets[i]) } )
			targets[i].addEventListener("mouseout", (e) => {
				let aux = document.getElementById("magnifyGlass")
				if ( aux != undefined )
					aux.remove()
			} )
		}
	}
	else
	{
		let image = document.createElement("img")
		image.setAttribute("class", "aloneImg")
		image.setAttribute("src", "resources/projectsImages/" + projectsImages[currentIconSelected])
		image.style.gridColumnStart = "1"
		image.style.gridColumnEnd = "2"
		element.appendChild(image)

		//to add the magnifying Glass
		image.addEventListener("mouseenter", (e) => {glass(image)})
		image.addEventListener("mouseout", (e) => {
			let aux = document.getElementById("magnifyGlass")
			if (aux != undefined)
				aux.remove()
		} )
	}
}

function loadName()
{
	let element = document.getElementById("Name")
	element.innerHTML = ""

	if ( titlesOfProjects[currentIconSelected].search("  ") != -1 )
	{
		let name = document.createElement("div")
		let text = document.createTextNode(titlesOfProjects[currentIconSelected].substr(0, titlesOfProjects[currentIconSelected].search("  ")))
		name.appendChild(text)
		name.setAttribute("class", "nameTextPair")
		element.appendChild(name)

		name = document.createElement("div")
		text = document.createTextNode(titlesOfProjects[currentIconSelected].substr(titlesOfProjects[currentIconSelected].search("  ") + 2))
		name.appendChild(text)
		name.setAttribute("class", "nameTextPair")
		element.appendChild(name)
	}
	else
	{
		let text = document.createTextNode(titlesOfProjects[currentIconSelected])
		let name = document.createElement("div")
		name.appendChild(text)
		name.setAttribute("class", "nameTextAlone")
		element.appendChild(name)
	}
}

function loadLink()
{
	element = document.getElementById("Link")
	element.innerHTML = ""

	let container;

	if ( links[currentIconSelected].search("https") != -1 )
	{
		container = document.createElement("a")
		container.setAttribute("href", links[currentIconSelected])
		container.setAttribute("target", "_blank")
	}
	else
		container = document.createElement("p")

	text = document.createTextNode(links[currentIconSelected])
	container.appendChild(text)

	element.appendChild(container)

}

function openWinInfo()
{
	//check if there's a magnifyng glass without clossing to close it.
	let mGlass = document.getElementById("magnifyGlass")
	if ( mGlass != undefined )
		mGlass.remove()

	//close the menuButton if it's opened.
	closeBottomMenu()

	let winInfo = document.getElementById("winInfo")

	winInfo.setAttribute("name", logosSvgArray[currentIconSelected])

	//this add the response to close if the user press the same option a seccond time.
	if ( winInfo.getAttribute("name") == lastInfoOpened )
	{
		closeWinInfo()
		lastInfoOpened = ""
		return;
	}
	lastInfoOpened = logosSvgArray[currentIconSelected]

	let element = document.getElementById("Logo")
	element.setAttribute("src", "resources/logos/winInfo/" + logosSvgArray[currentIconSelected] )

	element = document.getElementById("Description")
	element.innerHTML = ""
	let text = document.createTextNode(descriptionsArray[currentIconSelected])
	element.appendChild(text)


	loadName()

	loadIMG()

	loadLink()

	winInfo.style.visibility = "visible"

	let animation =
	[
		{width: "0%", height: "0%"},
		{width: "95%", height: "100%"},
	]
	let options = { duration: 500, easing: "ease", iterations: 1 }

	winInfo.animate(animation, options)

}

function closeWinInfo()
{
	//check if there's a magnifyng glass without clossing to close it.
	let mGlass = document.getElementById("magnifyGlass")
	if ( mGlass != undefined )
		mGlass.remove()

	//check if there's a winInfo element to close
	let winInfo = document.getElementById("winInfo")
	if (winInfo == undefined) return;

	//check if it's already hidden.
	if ( winInfo.style.visibility == "hidden" ) return

	let closeAnimation =
	[
		{
			width: "95%", height: "100%"
		},
		{
			width: "0%", height: "0%"
		}
	]
	let options = { duration: 500, easing: "ease", iterations: 1 }

	winInfo.animate(closeAnimation, options)

	//wait untill the animation ends to perform the hide style.
	setTimeout( () => {winInfo.style.visibility = "hidden"} , 450)
}