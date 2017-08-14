var FACEBOOK_LINK = "https://www.facebook.com/hashtagtoothfairies/"
var INSTAGRAM_LINK = "https://www.instagram.com/hashtagtoothfairies/"
var YOUTUBE_MAIN_LINK = "https://www.youtube.com/channel/UCfD5inyBQB8r8LNasezjBaQ/"

var current_episode = 2;
var episode_max = 7;

var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
var isMobile = navigator.userAgent.toLowerCase().indexOf('mobile') > -1;

function getEpisodeVideoID(episode)
{
	//Example: https://www.youtube.com/watch?v=XXXXXXXXXX
	//Where XXXXXXXXXX is the Video ID
	switch (episode)
	{
		case 1:
			return "1-fXO-H9oHs";
			
		case 2:
			return "F8JUiO8hQuY";
			
		case 3:
			return "GnhANufo5ec";
			
		case 4:
			return "V64p6JJdMPI";
			
		case 5:
			return "4v96xOkRKrk";
			
		case 6:
			return "cguJnvE5DA4";
			
		case 7:
			return "bkFPsCxovBA";
	}
}

function getEpisodeTitle(episode)
{
	return "Unused."
}

function getEpisodeDesc(episode)
{
	return "Unused."
}

function loadPage(page)
{
	window.open(page,'_blank');
}

/* START VIDEO PLAYER */

$( document ).ready(function()
{	
	if (isMobile)
	{
		$('head').append('<link rel="stylesheet" type="text/css" href="http://www.hashtagtoothfairies.com/stylesheet-mobile.css">');
	}

	//Remove episode slider if only one episode
	if (episode_max == 1)
	{
		//Close your eyes and tap your delete key three times.
		$(".tr_css2 div").remove();
		$(".tr_css2 div").remove();
		$(".tr_css2 div").remove();
	}
	
	//Load cookie saved position
	var local_cookie = getCookie("episode")
	if ((parseInt(local_cookie) > 0) && (parseInt(local_cookie) < episode_max + 1))
	{
		current_episode = parseInt(local_cookie);
		switchEpisode(0);
	}
	else
	{
		//This cookie is invalid
		clearCookies();
	}
	
	//Override current episode with link
	//Example example.com/episode_XX
	//UNTESTED (should work correctly)
	var local_url = window.location.hash.substr(1);
	var num_url = parseInt(local_url.substring(8, 10));
	if ((num_url > 0) && (num_url < episode_max + 1))
	{
		current_episode = num_url;
		switchEpisode(0);
	}
	
	//Reload on Firefox to alternate YT player
	var isDesktop = ($(".header_mobile").css("cursor") == "default");
	if (isFirefox && isDesktop)
	{
		switchEpisode(0);
		$("object").css("width", "0vw");
		$("object").css("height", "0vw");
	}
});

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
	else if (direction == 1)
	{
		current_episode += 1;
		if (current_episode == episode_max + 1)
			current_episode = 1;
	}
	
	//document.getElementById("episode_title").innerHTML = getEpisodeTitle(current_episode);
	//document.getElementById("episode_desc").innerHTML = getEpisodeDesc(current_episode);
	
	if (isFirefox)
	{
		$(".main_video object").remove();
		$(".youtube_player iframe").remove();
		$('<iframe class="youtube_player" frameborder="0" allowfullscreen></iframe>')
			.attr("src", "https://www.youtube.com/embed/" + getEpisodeVideoID(current_episode) + "?rel=0&amp;showinfo=1")
			.appendTo(".youtube_player");
	}
	else
	{
		$(".youtube_player embed").remove();
		$('<embed class="youtube_player" width="100%" height="100%" wmode="window" allowfullscreen="true" type="application/x-shockwave-flash">')
			.attr("src", "https://www.youtube.com/v/" + getEpisodeVideoID(current_episode) + "?rel=0&amp;showinfo=1&showsearch=0&fs=1&rel=0&autoplay=0&amp;ap=%2526fmt%3D18")
			.appendTo(".youtube_player");
	}
	
	clearCookies()
	setCookie("episode", "" + current_episode, 365)
	
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
	for (var i = 0; i < ca.length; i++)
	{
		var c = ca[i];
		while (c.charAt(0) == ' ')
		{
			c = c.substring(1);
		}
		
		if (c.indexOf(name) == 0)
		{
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function clearCookies()
{
	setCookie("episode", "", -1)
}

/* END COOKIES */