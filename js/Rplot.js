(function($) {
    $(document).ready(function() {

	    var bildergruppe = ["element1", "element2"];
		for(i = 0; i<= 29; i++)
		{
			bildergruppe[i] = "images/eta=0.01-st=true-data=iris" + "/Rplot" + (i+1) +".png";
		}
			
		$.fn.scianimator.defaults.theme = 'dark';
		$('#Rplot').scianimator({
		    'images': [
		    	bildergruppe[0],
		    	bildergruppe[1],
		    	bildergruppe[2],
		    	bildergruppe[3],
		    	bildergruppe[4],
		    	bildergruppe[5],
		    	bildergruppe[6],
		    	bildergruppe[7],
		    	bildergruppe[8],
		    	bildergruppe[9],
		    	bildergruppe[10],
		    	bildergruppe[11],
		    	bildergruppe[12],
		    	bildergruppe[13],
		    	bildergruppe[14],
		    	bildergruppe[15],
		    	bildergruppe[16],
		    	bildergruppe[17],
		    	bildergruppe[18],
		    	bildergruppe[19],
		    	bildergruppe[20],
		    	bildergruppe[21],
		    	bildergruppe[22],
		    	bildergruppe[23],
		    	bildergruppe[24],
		    	bildergruppe[25],
		    	bildergruppe[26],
		    	bildergruppe[27],
		    	bildergruppe[28],
		    	bildergruppe[29]
		    			],
		    'width': 1500,
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

	var zwischen = "images/" + eta + standardize + data;

	var bildergruppe = ["element1", "element2"];
	for(i = 0; i<= 29; i++)
	{
		bildergruppe[i] = zwischen + "/Rplot" + (i+1) +".png";
	}

	document.getElementById("Rplot").innerHTML = "";

	$.fn.scianimator.defaults.theme = 'dark';
	$('#Rplot').scianimator({
	    'images': [
	    	bildergruppe[0],
	    	bildergruppe[1],
	    	bildergruppe[2],
	    	bildergruppe[3],
	    	bildergruppe[4],
	    	bildergruppe[5],
	    	bildergruppe[6],
	    	bildergruppe[7],
	    	bildergruppe[8],
	    	bildergruppe[9],
	    	bildergruppe[10],
	    	bildergruppe[11],
	    	bildergruppe[12],
	    	bildergruppe[13],
	    	bildergruppe[14],
	    	bildergruppe[15],
	    	bildergruppe[16],
	    	bildergruppe[17],
	    	bildergruppe[18],
	    	bildergruppe[19],
	    	bildergruppe[20],
	    	bildergruppe[21],
	    	bildergruppe[22],
	    	bildergruppe[23],
	    	bildergruppe[24],
	    	bildergruppe[25],
	    	bildergruppe[26],
	    	bildergruppe[27],
	    	bildergruppe[28],
	    	bildergruppe[29]
	    			],
	    'width': 1500,
	    'delay': 1000,
	    'loopMode': 'loop'
	});
	$('#Rplot').scianimator('play');
}






// (function($) {
//     $(document).ready(function() {

// //array wird erstellt, welches die namen der einzelnen dateien enthält, ordner wir so also automatisch ausgewöhlt anhand der inputs aus dem dropdown menu
// //vorraussetzung ist so dass die ordner entsprechend benannt werden 
//     var images1 = [zwischen +"/1.jpg",zwischen +"/2.jpg",zwischen +"/3.jpg"];

// 	$.fn.scianimator.defaults.theme = 'dark';
// 		$('#Rplot').scianimator({
// 			//array elemente werden einzeln ausgewählt zum anzeigen, hier habe ich probiert das zu automatisieren mit einem loop oder so - was uns andere optionen ermöglcihen würde - aber habe es noch nicht hinbekommen
// 		    //'images': [images1[0],images1[1],images1[2]],
// 		   	'images': ['IMG_perceptron2d_WDBC cancer/Rplot1.png', 'IMG_perceptron2d_WDBC cancer/Rplot2.png', 'IMG_perceptron2d_WDBC cancer/Rplot3.png', 'IMG_perceptron2d_WDBC cancer/Rplot4.png', 'IMG_perceptron2d_WDBC cancer/Rplot5.png', 'IMG_perceptron2d_WDBC cancer/Rplot6.png', 'IMG_perceptron2d_WDBC cancer/Rplot7.png', 'IMG_perceptron2d_WDBC cancer/Rplot8.png', 'IMG_perceptron2d_WDBC cancer/Rplot9.png', 'IMG_perceptron2d_WDBC cancer/Rplot10.png', 'IMG_perceptron2d_WDBC cancer/Rplot11.png', 'IMG_perceptron2d_WDBC cancer/Rplot12.png', 'IMG_perceptron2d_WDBC cancer/Rplot13.png', 'IMG_perceptron2d_WDBC cancer/Rplot14.png', 'IMG_perceptron2d_WDBC cancer/Rplot15.png', 'IMG_perceptron2d_WDBC cancer/Rplot16.png', 'IMG_perceptron2d_WDBC cancer/Rplot17.png', 'IMG_perceptron2d_WDBC cancer/Rplot18.png', 'IMG_perceptron2d_WDBC cancer/Rplot19.png', 'IMG_perceptron2d_WDBC cancer/Rplot20.png', 'IMG_perceptron2d_WDBC cancer/Rplot21.png', 'IMG_perceptron2d_WDBC cancer/Rplot22.png', 'IMG_perceptron2d_WDBC cancer/Rplot23.png', 'IMG_perceptron2d_WDBC cancer/Rplot24.png', 'IMG_perceptron2d_WDBC cancer/Rplot25.png', 'IMG_perceptron2d_WDBC cancer/Rplot26.png', 'IMG_perceptron2d_WDBC cancer/Rplot27.png', 'IMG_perceptron2d_WDBC cancer/Rplot28.png', 'IMG_perceptron2d_WDBC cancer/Rplot29.png', 'IMG_perceptron2d_WDBC cancer/Rplot30.png'],

// 		    'width': 1500,
// 		    'delay': 1000,
// 		    'loopMode': 'loop'
// 		});
// 		$('#Rplot').scianimator('play');

//     });
// })(jQuery);


