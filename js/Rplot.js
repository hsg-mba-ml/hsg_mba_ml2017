/*

Habe die urspräunglcihe funktion auskommmentiert und in dieser .js datei erstmal gearbeitet, damit der code immer von alleine läuft wenn ich den browser
refresche, passen wir nachher wieder an.

*/


/*
(function($) {
    $(document).ready(function() {
	$.fn.scianimator.defaults.theme = 'dark';
	$('#Rplot').scianimator({
	    'images': ['IMG_perceptron2d_WDBC cancer/Rplot1.png', 'IMG_perceptron2d_WDBC cancer/Rplot2.png', 'IMG_perceptron2d_WDBC cancer/Rplot3.png', 'IMG_perceptron2d_WDBC cancer/Rplot4.png', 'IMG_perceptron2d_WDBC cancer/Rplot5.png', 'IMG_perceptron2d_WDBC cancer/Rplot6.png', 'IMG_perceptron2d_WDBC cancer/Rplot7.png', 'IMG_perceptron2d_WDBC cancer/Rplot8.png', 'IMG_perceptron2d_WDBC cancer/Rplot9.png', 'IMG_perceptron2d_WDBC cancer/Rplot10.png', 'IMG_perceptron2d_WDBC cancer/Rplot11.png', 'IMG_perceptron2d_WDBC cancer/Rplot12.png', 'IMG_perceptron2d_WDBC cancer/Rplot13.png', 'IMG_perceptron2d_WDBC cancer/Rplot14.png', 'IMG_perceptron2d_WDBC cancer/Rplot15.png', 'IMG_perceptron2d_WDBC cancer/Rplot16.png', 'IMG_perceptron2d_WDBC cancer/Rplot17.png', 'IMG_perceptron2d_WDBC cancer/Rplot18.png', 'IMG_perceptron2d_WDBC cancer/Rplot19.png', 'IMG_perceptron2d_WDBC cancer/Rplot20.png', 'IMG_perceptron2d_WDBC cancer/Rplot21.png', 'IMG_perceptron2d_WDBC cancer/Rplot22.png', 'IMG_perceptron2d_WDBC cancer/Rplot23.png', 'IMG_perceptron2d_WDBC cancer/Rplot24.png', 'IMG_perceptron2d_WDBC cancer/Rplot25.png', 'IMG_perceptron2d_WDBC cancer/Rplot26.png', 'IMG_perceptron2d_WDBC cancer/Rplot27.png', 'IMG_perceptron2d_WDBC cancer/Rplot28.png', 'IMG_perceptron2d_WDBC cancer/Rplot29.png', 'IMG_perceptron2d_WDBC cancer/Rplot30.png'],
	    'width': 1500,
	    'delay': 1000,
	    'loopMode': 'loop'
	});
	$('#Rplot').scianimator('play');
    });
})(jQuery);
*/



//daten aus dem dropdown menu werden gespeichtert, hier nur manuell eingestellt damits schneller ist
var eta = "001";
var data = "iris";
var standardize = "t";

//daten werden zusammengeführt zu einem string
var zwischen = eta + data + standardize; 

(function($) {
    $(document).ready(function() {

//array wird erstellt, welches die namen der einzelnen dateien enthält, ordner wir so also automatisch ausgewöhlt anhand der inputs aus dem dropdown menu
//vorraussetzung ist so dass die ordner entsprechend benannt werden 
    var images1 = [zwischen +"/1.jpg",zwischen +"/2.jpg",zwischen +"/3.jpg"];

	$.fn.scianimator.defaults.theme = 'dark';
		$('#Rplot').scianimator({
			//array elemente werden einzeln ausgewählt zum anzeigen, hier habe ich probiert das zu automatisieren mit einem loop oder so - was uns andere optionen ermöglcihen würde - aber habe es noch nicht hinbekommen
		    'images': [images1[0],images1[1],images1[2]],
		    'width': 1500,
		    'delay': 1000,
		    'loopMode': 'loop'
		});
		$('#Rplot').scianimator('play');

    });
})(jQuery);
