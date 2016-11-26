/* START VIDEO PLAYER */

var current_episode = 1;
var episode_max = 6;

function getEpisodeVideoID(episode)
{
	//Example: https://www.youtube.com/watch?v=XXXXXXXXXX
	//Where XXXXXXXXXX is the Video ID
	switch (episode)
	{
		case 1:
			return "QMeX_muXchk";
			
		case 2:
			return "CfYl6_f2Mdg";
			
		case 3:
			return "WF34N4gJAKE";
			
		case 4:
			return "lCylb7E0EXY";
			
		case 5:
			return "-U70dLy5des";
			
		case 6:
			return "3lluAzdWeuE";
	}
}

function getEpisodeTitle(episode)
{
	switch (episode)
	{
		case 1:
			return "The Tooth Fairies: Episode 1";
			
		case 2:
			return "The Tooth Fairies: Episode 2";
			
		case 3:
			return "The Tooth Fairies: Episode 3";
			
		case 4:
			return "The Tooth Fairies: Episode 4";
			
		case 5:
			return "The Tooth Fairies: Episode 5";
			
		case 6:
			return "The Tooth Fairies: Episode 6";
	}
}

function getEpisodeDesc(episode)
{
	switch (episode)
	{
		case 1:
			return "This is an episode description. Though and highly the enough county for man. Of it up he still court alone widow seems. Suspected he remainder rapturous my sweetness. All vanity regard sudden nor simple can. World and vexed china since after often. Ecstatic advanced and procured civility not absolute put continue. Overcame breeding or my concerns removing desirous so absolute. My melancholy unpleasing imprudence considered in advantages so impression. Almost unable put piqued talked likely houses her met. Met any nor may through resolve entered. A cause tried oh do shade happy.";
			
		case 2:
			return "This is an episode description. Full he none no side. Uncommonly surrounded considered for him are its. It we is read good soon. My to considered delightful invitation announcing of no decisively boisterous. Did add dashwoods deficient man concluded additions resources. Or landlord packages overcame distance smallest in recurred. Wrong maids or be asked no on enjoy. Household few sometimes out attending described. Lain just fact four of am meet high.";
			
		case 3:
			return "This is an episode description. Sociable on as carriage my position weddings raillery consider. Peculiar trifling absolute and wandered vicinity property yet. The and collecting motionless difficulty son. His hearing staying ten colonel met. Sex drew six easy four dear cold deny. Moderate children at of outweigh it. Unsatiable it considered invitation he travelling insensible. Consulted admitting oh mr up as described acuteness propriety moonlight.";
			
		case 4:
			return "This is an episode description. Do to be agreeable conveying oh assurance. Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the. Abode stuff noisy manor blush yet the far. Up colonel so between removed so do. Years use place decay sex worth drift age. Men lasting out end article express fortune demands own charmed. About are are money ask how seven.";
			
		case 5:
			return "This is an episode description. Full he none no side. Uncommonly surrounded considered for him are its. It we is read good soon. My to considered delightful invitation announcing of no decisively boisterous. Did add dashwoods deficient man concluded additions resources. Or landlord packages overcame distance smallest in recurred. Wrong maids or be asked no on enjoy. Household few sometimes out attending described. Lain just fact four of am meet high.";
			
		case 6:
			return "This is an episode description. Effects present letters inquiry no an removed or friends. Desire behind latter me though in. Supposing shameless am he engrossed up additions. My possible peculiar together to. Desire so better am cannot he up before points. Remember mistaken opinions it pleasure of debating. Court front maids forty if aware their at. Chicken use are pressed removed.";
	}
}

function mobileToggleMenu()
{
	var isVisible = $(".header_mobile").css("visibility");
	
	if (isVisible == "hidden")
	{
		$(".header_mobile").css("visibility", "visible");
		$(".header_mobile").css("width", "100%");
		$(".header_mobile").css("height", "12vw");
		$(".header_mobile").css("padding-top", "1vw");
		$(".header_mobile").css("padding-bottom", "1vw");
	}
	else
	{
		$(".header_mobile").css("visibility", "hidden");
		$(".header_mobile").css("width", "0vw");
		$(".header_mobile").css("height", "0vw");
		$(".header_mobile").css("padding-top", "0vw");
		$(".header_mobile").css("padding-bottom", "0vw");
	}
}

function switchEpisode(direction)
{
	if (direction == -1)
	{
		current_episode -= 1;
		if (current_episode == 0)
			current_episode = episode_max;
	}
	else
	{
		current_episode += 1;
		if (current_episode == episode_max + 1)
			current_episode = 1;
	}
	
	document.getElementById("episode_title").innerHTML = getEpisodeTitle(current_episode);
	document.getElementById("episode_desc").innerHTML = getEpisodeDesc(current_episode);
	
	$(".youtube_player embed").remove();
	$('<embed class="youtube_player" width="100%" height="100%" wmode="window" allowfullscreen="true" type="application/x-shockwave-flash">')
		.attr("src", "https://www.youtube.com/v/" + getEpisodeVideoID(current_episode) + "?rel=0&amp;showinfo=0&showsearch=0&fs=1&rel=0&autoplay=0&amp;ap=%2526fmt%3D18")
		.appendTo(".youtube_player");
	
	//Backup if embed does not work
	/*
	$(".youtube_player param").remove();
	$('<param class="youtube_player" name="movie" />')
		.attr("value", "https://www.youtube.com/v/" + getEpisodeVideoID(current_episode) + "?rel=0&amp;showinfo=0&showsearch=0&fs=1&rel=0&autoplay=0&amp;ap=%2526fmt%3D18")
		.appendTo(".youtube_player");
	*/
}

/* END VIDEO PLAYER */


/* START COOKIES */

function setCookie(cname, cvalue, exdays)
{
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires="+d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname)
{
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

/* END COOKIES */


/* START GALLERY */

/* END GALLERY */