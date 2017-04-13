
(function($) {
    $(document).ready(function() {

	    var bildergruppe = ["element1", "element2"];
		for(i = 0; i<= 29; i++)
		{
			bildergruppe[i] = "Images/1-perceptron/eta=0.01-st=true-data=iris/JPEG" + "/Rplot" + (i+1) +".jpg";

		}
			
		$.fn.scianimator.defaults.theme = 'dark';
		$('#Rplot').scianimator({
		    'images': bildergruppe,
		    'width': 1200,
		    'delay': 1000,
		    'loopMode': 'loop'
	});
	$('#Rplot').scianimator('play');
    });
})(jQuery);



function buttonClicked(){
	//eta=0.01-st=true-data=iris
	//format:  eta=0.01-
	var eta = "eta=" + document.getElementById("eta1").value + "-";
	//format: st-false- / st-true-
	var standardize = "st=" + document.getElementById("standardize1").value + "-";
	//format: data=cancer / data=iris
	var data = "data=" + document.getElementById("data1").value;

	var zwischen = "Images/1-perceptron/" + eta + standardize + data;

	var bildergruppe = ["element1", "element2"];
	for(i = 0; i<= 29; i++)
	{
		bildergruppe[i] = zwischen + "/JPEG/Rplot" + (i+1) +".jpg";
	}

	document.getElementById("Rplot").innerHTML = "";
	document.getElementById("subheading").style.display="none";

	$.fn.scianimator.defaults.theme = 'dark';
	$('#Rplot').scianimator({
	    'images': bildergruppe,
	    'width': 1200,
	    'delay': 1000,
	    'loopMode': 'loop'
	});
	$('#Rplot').scianimator('play');
}


$(function() {
    // Stick the #nav to the top of the window
    var nav = $('#nav');
    var navHomeY = nav.offset().top;
    var isFixed = false;
    var $w = $(window);
    $w.scroll(function() {
        var scrollTop = $w.scrollTop();
        var shouldBeFixed = scrollTop > navHomeY;
        if (shouldBeFixed && !isFixed) {
            nav.css({
                position: 'fixed',
                top: 0,
                left: nav.offset().left,
                width: nav.width()
            });
            isFixed = true;
        }
        else if (!shouldBeFixed && isFixed)
        {
            nav.css({
                position: 'static'
            });
            isFixed = false;
        }
    });
});
