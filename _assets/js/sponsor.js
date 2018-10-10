/* Randomize the sponsors and show them with a carousel in the sidebar. */

var sponsors = [
	[
		'Writer\'s Café - a place to be creative',
		'http://www.writerscafe.co.uk/',
		'writerscafe.gif'
	],
	[
		'Try HelpBlocks, a great HTML Help editor',
		'http://www.helpblocks.com/',
		'helpblocks.gif'
	],
	[
		'DialogBlocks - dialogs unlimited',
		'http://www.anthemion.co.uk/dialogblocks/',
		'dialogblocks.gif'
	],
	[
		'wxWidgets Consulting',
		'http://www.tt-solutions.com/',
		'tt.gif'
	],
];

$(document).ready(function(){
	sponsors.sort(function () { return 0.5 - Math.random(); });
	
	$.each(sponsors, function (index, sponsor) {
		var element = $('<div class="carousel-item">'+
			'<a target="_new" href="'+sponsor[1]+'">'+
			'<img class="mx-auto d-block" src="/assets/img/logos/' +
			sponsor[2] + '" alt="' + sponsor[0] + '" />'+
			'</a></div>');

		if (index === 0)
			element.addClass("active");   

		element.appendTo("#carouselSponsorsInner");
	});
	$('#carouselSponsors').carousel({
		interval: 5000
	});

	$('div.logos').show();
});
