$(function() {
	$("#gamesIcon").hover(
		function() {
			$(this).attr("src", "images/icons/gameboy.gif");
		},
		function() {
			$(this).attr("src", "images/icons/gameboy.png");
		}
	);
});

$(function() {
	$("#workIcon").hover(
		function() {
			$(this).attr("src", "images/icons/darksouls.gif");
		},
		function() {
			$(this).attr("src", "images/icons/darksouls.png");
		}
	);
});
