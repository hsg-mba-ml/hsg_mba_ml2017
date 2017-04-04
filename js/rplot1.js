function buttonClicked() {

	/*
	werte welche selektiert wurden in den dropdown menus werden als variablen gespeichert
	damit wir sie nicht mit dem langen befehl selektiert werden müssen
	*/
    
	var eta = document.getElementById("eta1").value;
	var standardize = document.getElementById("standardize1").value;
	var data = document.getElementById("data1").value;
	var person = document.getElementById("person").value;

	//document.getElementById("tag1").innerHTML = eta + standardize + data ;

	//diese zeile löscht den bisherigen inhalt
	document.getElementById("Rplot").innerHTML = "";

	//Switch verzweigung erkennt anhand der selektieren werte, welche bilder angezeigt werden sollen und erstellt eine neue bilderanimation
	switch(person)
	{
		case "Trump test": 
		$.fn.scianimator.defaults.theme = 'dark';
		$('#Rplot').scianimator({
		    'images': ["ImgGroup1/1.jpg","ImgGroup1/2.jpg","ImgGroup1/3.jpg"],
		    'width': 1500,
		    'delay': 1000,
		    'loopMode': 'loop'
		});
		$('#Rplot').scianimator('play');
		break;

		case "Federer": 
		$.fn.scianimator.defaults.theme = 'dark';
		$('#Rplot').scianimator({
		    'images': ["ImgGroup2/1.jpg","ImgGroup2/2.jpg","ImgGroup2/3.jpg"],
		    'width': 1500,
		    'delay': 1000,
		    'loopMode': 'loop'
		});
		$('#Rplot').scianimator('play');
		break;

		case "Landscapes": 
		$.fn.scianimator.defaults.theme = 'dark';
		$('#Rplot').scianimator({
		    'images': ["ImgGroup3/1.jpg","ImgGroup3/2.jpg","ImgGroup3/3.jpg"],
		    'width': 1500,
		    'delay': 1000,
		    'loopMode': 'loop'
		});
		$('#Rplot').scianimator('play');
		break;

	}
}
