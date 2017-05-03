
(function($) {
    $(document).ready(function() {

	    var bildergruppe = ["element1", "element2"];
		for(i = 0; i<= 29; i++)
		{
			bildergruppe[i] = "Images/1-adaline/iris_stand/" + "/Rplot" + (i+1) +".jpg";
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

	var data = document.getElementById("data1").value + "_";
	var standardize = document.getElementById("standardize1").value;

	var zwischen = "Images/1-adaline/" + data + standardize;

	var bildergruppe = ["element1", "element2"];
	for(i = 0; i<= 29; i++)
	{
		bildergruppe[i] = zwischen + "/Rplot" + (i+1) +".jpg";
	}

	$('#Rplot').scianimator('stop');
	document.getElementById("Rplot").innerHTML = "";
    document.getElementById("subheading").innerHTML = "For this animation, the value of eta is 0.01";

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


$(function() {
    // Stick the #nav to the top of the window
    var foo = $('#foo');
    var nav = $('#nav');
    var navHomeY = nav.offset().top;
    var isFixed = false;
    var $w = $(window);
    $w.scroll(function() {
        var scrollTop = $w.scrollTop();
        var shouldBeFixed = scrollTop > navHomeY;
        if (shouldBeFixed && !isFixed) {
            foo.css({
                position: 'fixed',
                top: 65,
                left: foo.offset().left,
                width: foo.width()
            });
            isFixed = true;
        }
        // else if (!shouldBeFixed && isFixed)
        // {
        //     foo.css({
        //         position: 'static'
        //     });
        //     isFixed = false;
        // }
    });
});
