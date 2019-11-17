$( function()
{
	
	$('#chan').mouseover( function()
	{
		if($('.content').hasClass('active'))
		{
			$('.content').removeClass('active').hide();
		}
		$('#4chanList').addClass('active').show('300');
	});

	$('#music').mouseover( function()
	{
		if($('.content').hasClass('active'))
		{
			$('.content').removeClass('active').hide();
		}
		$('#musicList').addClass('active').show('300');
	});

	$('#games').mouseover( function()
	{
		if($('.content').hasClass('active'))
		{
			$('.content').removeClass('active').hide();
		}
		$('#gamesList').addClass('active').show('300');
	});

	$('#work').mouseover( function()
	{
		if($('.content').hasClass('active'))
		{
			$('.content').removeClass('active').hide();
		}
		$('#workList').addClass('active').show('300');
	});

	$('#resources').mouseover( function()
	{
		if($('.content').hasClass('active'))
		{
			$('.content').removeClass('active').hide();
		}
		$('#resourceList').addClass('active').show('300');
	});

});
