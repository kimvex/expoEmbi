$(document).ready(function(){
	var tiempo = 100000,
		actual = $("#menu"),
		t,
		uno = $('#menuUno'),
		dos = $('#menuDos'),
		tres = $('#menuTres'),
		cuatro = $('#menuCuatro'),
		cinco = $('#menuCinco'),
		seis = $('#menuSeis'),
		siete = $('#menuSiete');
	$('#fondo') 
	.before('<div id="nav">') 
	.cycle({ 
	    fx:     'tileBlind,shuffle,scrollDown,scrollUp,zoom,curtainX', 
	    speed:  '400', 
	    timeout: tiempo, 
	    pager:  '#nav' 
	});

	function intervalo1(){
		actual = $(uno);
		t = setTimeout(function(){
			$(uno).slideToggle(function(){
				console.log($(dos).slideToggle())
				intervalo2();
			});
		},tiempo);
	}

	function intervalo2(){
		actual = $(dos);
		t = setTimeout(function(){
			$(dos).slideToggle(function(){
				$(tres).slideToggle();
				intervalo3();
			});
		},tiempo);
	}	
	
	function intervalo3(){
		actual = $(tres);
		t = setTimeout(function(){
			$(tres).slideToggle(function(){
				$(cuatro).slideToggle();
				intervalo4();
			});
		},tiempo);
	}	

	function intervalo4(){
		actual = $(cuatro);
		t = setTimeout(function(){
			$(cuatro).slideToggle(function(){
				$(cinco).slideToggle();
				intervalo5();
			});
		},tiempo);
	}

	function intervalo5(){
		actual = $(cinco);
		t = setTimeout(function(){
			$(cinco).slideToggle(function(){
				$(seis).slideToggle();
				intervalo6();
			});
		},tiempo);
	}
	function intervalo6(){
		actual = $(seis);
		t = setTimeout(function(){
			$(seis).slideToggle(function(){
				$(siete).slideToggle();
				intervalo7();
			});
		},tiempo);
	}

	function intervalo7(){
		actual = $(siete);
		t = setTimeout(function(){
			$(siete).slideToggle(function(){
				$(uno).slideToggle();
				intervalo1();
			});
		},tiempo);
	}

	intervalo1();
	function intervaloS1(){
		clearTimeout(t);
		actual.slideToggle();
		$(uno).slideToggle();
		intervalo1();
		console.log(actual);
	}
	function intervaloS2(){
		clearTimeout(t);
		actual.slideToggle();
		$(dos).slideToggle();
		intervalo2();
		console.log(actual);
	}	
	function intervaloS3(){
		clearTimeout(t);
		actual.slideToggle();
		$(tres).slideToggle();
		intervalo3();
		console.log(actual);
	}
	function intervaloS4(){
		clearTimeout(t);
		actual.slideToggle();
		$(cuatro).slideToggle();
		intervalo4();
		console.log(actual);
	}	
	function intervaloS5(){
		clearTimeout(t);
		actual.slideToggle();
		$(cinco).slideToggle();
		intervalo5();
		console.log(actual);
	}	
	function intervaloS6(){
		clearTimeout(t);
		actual.slideToggle();
		$(seis).slideToggle();
		intervalo6();
		console.log(actual);
	}	
	function intervaloS7(){
		clearTimeout(t);
		actual.slideToggle();
		$(siete).slideToggle();
		intervalo7();
		console.log(actual);
	}
	$(".0").click(intervaloS1);
	$(".1").click(intervaloS2);
	$(".2").click(intervaloS3);
	$(".3").click(intervaloS4);
	$(".4").click(intervaloS5);
	$(".5").click(intervaloS6);
	$(".6").click(intervaloS7);

});