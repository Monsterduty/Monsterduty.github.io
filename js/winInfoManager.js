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
	"The first language I learned is also my most powerful tool. In a world where technology evolves faster, C++ remains alive more than ever and is present in every place you can imagine.",
	"In the world of desktop graphical user interfaces, there is an unbeatable king known as the Qt Framework. It allows me to build not only desktop applications, but also cross-platform applications for all kinds of devices!.",
	"A massive framework like Qt provides extra tools to help with development, and Qt Creator is a complete C++ IDE for building desktop and mobile applications with Qt.",
	"When you realize that the best tool for a project is already built into the system, you have to use it. In my case, bash scripting was something great to learn and use.",
	"Keeping the order of a project when working in a group can be a complicated task, but with the version control system Git, we can finally work without compromising the project and even make mistakes without consequences!",
	"I am a huge fan of the Linux kernel and the GNU operating system. Reading code from open-source projects has taught me a lot about programming, and I have also contributed some software to the community.",
	"I'm not just a programmer, I also have knowledge of UI/UX design with tools like Figma. I design all the user interfaces for all my applications.",
	"As a C++ programmer, I am familiar with building systems, particularly GNU Make and CMake for generating makefiles.",
	"Just because I have Qt available doesn't mean it's the best tool for everything! I love to learn new things every day, and when I discovered SDL, I found a new tool for expanding my knowledge of application development.",
	"I have a passion for language learning and speak two languages, English and Spanish (native). I am also learning Japanese to add another language to the list, and I do some extra work translating documents from English to Spanish."
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
	"https://github.com/Monsterduty/ANBrowser-qt",
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

	for ( let i = 1; i < winInfo.childNodes.length; i+= 2 )winInfo.childNodes[i].style.opacity = 0.0

	winInfo.style.visibility = "visible"

	let animation =
	[
		{width: "0%", height: "0%"},
		{width: "95%", height: "100%"},
	]
	let options = { duration: 500, easing: "ease", iterations: 1 }

	winInfo.animate(animation, options)


//animation to reveal the content of the winInfo when it's animation get done.
//also another trick for performance.
	setTimeout( () => {
		let contentAnimation = 
		[
			{opacity: 0.0},
			{opacity: 1.0},
		]
		options = { duration: 200, easing: "ease", iterations: 1 }

		for ( let i = 1; i < winInfo.childNodes.length; i+= 2 )
			winInfo.childNodes[i].animate(contentAnimation, options)
		for ( let i = 1; i < winInfo.childNodes.length; i+= 2 )winInfo.childNodes[i].style.opacity = '1.0'
	}, 400)
	
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

//close animation for elements in winInfo.
//also another trick for performance.
	let contentAnimation = 
	[
		{opacity: 1.0},
		{opacity: 0.0},
	]
	options = { duration: 200, easing: "ease", iterations: 1 }
	
	for ( let i = 1; i < winInfo.childNodes.length; i+= 2 )
		winInfo.childNodes[i].animate(contentAnimation, options)
	for ( let i = 1; i < winInfo.childNodes.length; i+= 2 )winInfo.childNodes[i].style.opacity = '0.0'

//close animation for winInfo
	let closeAnimation =
	[
		{
			width: "95%", height: "100%"
		},
		{
			width: "0%", height: "0%"
		}
	]
	options = { duration: 500, easing: "ease", iterations: 1 }

	//wait untill the elements inside winInfo end their close animation
	setTimeout( () => {winInfo.animate(closeAnimation, options)}, 200)

	//wait untill the animation ends to perform the hide style.
	setTimeout( () => {winInfo.style.visibility = "hidden"} , 450)
}
