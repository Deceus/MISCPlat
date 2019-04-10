$('a').filter(function() {
	return $(this).text()=='[View Image]';
}).each(function() { 
	$(this).empty();
	$(this).append('<img src='+$(this).attr('href')+' style="max-width:100%; max-height:100%; display: block; margin: 0 auto">'); 
});

