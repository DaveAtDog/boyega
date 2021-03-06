var Dog = Dog ||
{};

Dog.Boyega = (function()
{
	var positionIn;
	var positionOut;
  var audio = new Audio('https://dl.dropboxusercontent.com/u/6490005/awakening.mp3');

	var container = document.createElement('div');

	container.style.position = 'absolute';
	container.style.left = 0;
	container.style.top = 0;
	container.style.overflow = 'hidden';
	container.style.zIndex = 100000;

	var trooper = document.createElement('img');

	trooper.src = "https://dl.dropboxusercontent.com/u/6490005/boyega.png";
	trooper.height = 687;
	trooper.width = 989;

	updateProperties();

	trooper.style.position = 'absolute';
	trooper.style.top = positionOut + 'px';
	trooper.style.left = Math.round((window.innerWidth - trooper.width) / 2) + 'px';
	trooper.style.display = 'inline';
	trooper.style.transition = 'top 0.25s';


	container.appendChild(trooper);

	document.body.appendChild(container);

	show();

	function show()
	{
		setTimeout(animateIn, Math.random() * 5000 + 2000);
	}

	function hide()
	{
		setTimeout(animateOut, Math.random() * 3000 + 2000);
	}


	function animateIn()
	{
		trooper.style.top = positionOut + 'px';

		hide();
	}

	function animateOut()
	{
		trooper.style.top = positionIn + 'px';
    audio.play();
		show();
	}

	window.onresize = updateProperties;

	function updateProperties()
	{
		positionIn = window.innerHeight - trooper.height;
		positionOut = window.innerHeight;
		container.style.width = window.innerWidth + 'px';
		container.style.height = window.innerHeight + 'px';
	}
})();
