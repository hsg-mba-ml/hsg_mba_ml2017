
//daten aus dem dropdown menu werden gespeichtert, hier nur manuell eingestellt damits schneller ist
var eta = "0.01";
var data = "iris";
var standardize = "true";

//var test = "Images/eta=0.01-st=false-data=cancer/Rplot1.png";

(function($) {
    $(document).ready(function() {
	
	var links = [];
	
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
