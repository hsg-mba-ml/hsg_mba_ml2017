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
