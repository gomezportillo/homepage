function removeAllActives()
{
	$('.content').removeClass('active').hide();
	$('.image').removeClass('active');

	$('#gamesIcon').attr("src", "images/icons/gameboy.png");
	$('#workIcon').attr("src", "images/icons/darksouls.png");
}

$( function()
{
	$('#blogs').mouseover( function()
	{
		if (!$('#blogIcon').hasClass('active'))
		{
			removeAllActives();

			$('#blogList').addClass('active').show('300');
			$('#blogIcon').addClass('active');
		}
	});

	$('#music').mouseover( function()
	{
		if (!$('#musicIcon').hasClass('active'))
		{
			removeAllActives();

			$('#musicList').addClass('active').show('300');
			$('#musicIcon').addClass('active');
		}
	});

	$('#games').mouseover( function()
	{
		if (!$('#gamesIcon').hasClass('active'))
		{
			removeAllActives();

			$('#gamesList').addClass('active').show('300');
			$('#gamesIcon').addClass('active');

			$('#gamesIcon').attr("src", "images/icons/gameboy.gif");
		}
	});

	$('#work').mouseover( function()
	{
		if (!$('#workIcon').hasClass('active'))
		{
			removeAllActives();

			$('#workList').addClass('active').show('300');
			$('#workIcon').addClass('active');

			$('#workIcon').attr("src", "images/icons/darksouls.gif");
		}
	});

	$('#resources').mouseover( function()
	{
		if (!$('#resourceIcon').hasClass('active'))
		{
			removeAllActives();

			$('#resourceList').addClass('active').show('300');
			$('#resourceIcon').addClass('active');
		}
	});
});
