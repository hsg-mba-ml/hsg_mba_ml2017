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
var eta = "0.01";
var data = "iris";
var standardize = "true";



//daten werden zusammengeführt zu einem string
//var dateipfad = "Images/eta=" + eta + "-st=" + standardize + "-data=" + data + "/Rplot" + imagenr + ".png"; 
var test = "Images/eta=0.01-st=false-data=cancer/Rplot1.png";


(function($) {
    $(document).ready(function() {
	
	var links = [];
//array wird erstellt, welches die namen der einzelnen dateien enthält, ordner wir so also automatisch ausgewöhlt anhand der inputs aus dem dropdown menu
//vorraussetzung ist so dass die ordner entsprechend benannt werden 
    for (i = 0; i < 29; i++) { 
    var imagenr = i+1;
	var dateipfad = "Images/eta=" + eta + "-st=" + standardize + "-data=" + data + "/Rplot" + imagenr + ".png";
	links[i] = dateipfad;
}
	

	$.fn.scianimator.defaults.theme = 'dark';
		$('#Rplot').scianimator({
			//array elemente werden einzeln ausgewählt zum anzeigen, hier habe ich probiert das zu automatisieren mit einem loop oder so - was uns andere optionen ermöglcihen würde - aber habe es noch nicht hinbekommen
		    'images': [links[0], links[1], links[2], links[3], links[4], links[5], links[6], links[7], links[8], links[9], links[10], links[11], links[12], links[13], links[14], links[15], links[16], links[17], links[18], links[19], links[20], links[21], links[22], links[23], links[24], links[25], links[26], links[27], links[28], links[29]],
		    'width': 1500,
		    'delay': 1000,
		    'loopMode': 'loop'
		});
		$('#Rplot').scianimator('play');

    });
})(jQuery);
