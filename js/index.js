var priceCalculator = document.getElementById('quote-calc');
priceCalculator.onchange = calculatesubtotal;
priceCalculator.onchange();
function calculatesubtotal() {
	var pages = Number(document.getElementById('pages').value) || 0;
	var hostingpackage = Number(document.getElementById('hostingpackage').value) || 0;
	var login = Number(document.getElementById('login').value) || 0;
	var ecommerce = Number(document.getElementById('ecommerce').value) || 0;
	var social = Number(document.getElementById('social').value) || 0;
	var newsletter = Number(document.getElementById('newsletter').value) || 0;
	var seo = Number(document.getElementById('seo').value) || 0;
	var cms = Number(document.getElementById('cms').value) || 0;
	var extras = 0;
	var move = 0;
	var fridge = 0;
	var oven = 0;
	var dishes = 0;
	var laundry = 0;
	var calendar = 0;
		if ( $( "#move-col" ).hasClass( "on" ) ) {  move = 99; }
		if ( $( "#fridge-col" ).hasClass( "on" ) ) { fridge = 29; }
		if ( $( "#oven-col" ).hasClass( "on" ) ) { oven = 39; }
		if ( $( "#dish-col" ).hasClass( "on" ) ) { dishes = 29; }
		if ( $( "#laundry-col" ).hasClass( "on" ) ) { laundry = 29; }
		if ( $( "#calendar-col" ).hasClass( "on" ) ) { calendar = 29; }
	extras = move + fridge + oven + dishes + laundry + calendar;
	var discount = 1;
		if ( $( "#col-once-off" ).hasClass( "on" ) ) {
			discount = 1;
		} else if ( $( "#col-weekly" ).hasClass( "on" ) ) {
			discount = 0.5;
		} else if ( $( "#col-fortnightly" ).hasClass( "on" ) ) {
			discount = 0.55;
		} else if ( $( "#col-monthly" ).hasClass( "on" ) ) {
			discount = 0.6;
		}
	var subtotal = (pages + hostingpackage + login + ecommerce + social + newsletter + seo + cms + extras) * discount;
	document.getElementById("total").innerHTML = "$" + subtotal.toFixed(2);
}

$('#move-col').on('click', function() {
	var $$ = $(this)
	if (!$$.is('.on')) {
		$$.addClass('on');
		
		document.getElementById("move").src = "https://www.moplovers.com.au/wp-content/uploads/2017/02/move-on.png";
	} else {
		$$.removeClass('on');
		document.getElementById("move").src = "https://www.moplovers.com.au/wp-content/uploads/2017/02/move-off.png";
	}
	calculatesubtotal();
})
$('#fridge-col').on('click', function() {
	var $$ = $(this)
	if (!$$.is('.on')) {
		$$.addClass('on');
		
		document.getElementById("fridge").src = "https://www.moplovers.com.au/wp-content/uploads/2017/02/fridge-on.png";
	} else {
		$$.removeClass('on');
		document.getElementById("fridge").src = "https://www.moplovers.com.au/wp-content/uploads/2017/02/fridge-off.png";
	}
	calculatesubtotal();
})
$('#oven-col').on('click', function() {
	var $$ = $(this)
	if (!$$.is('.on')) {
		$$.addClass('on');
		
		document.getElementById("oven").src = "https://www.moplovers.com.au/wp-content/uploads/2017/02/oven-on.png";
	} else {
		$$.removeClass('on');
		document.getElementById("oven").src = "https://www.moplovers.com.au/wp-content/uploads/2017/02/oven-off.png";
	}
	calculatesubtotal();
})
$('#dish-col').on('click', function() {
	var $$ = $(this)
	if (!$$.is('.on')) {
		$$.addClass('on');
		
		document.getElementById("dish").src = "https://www.moplovers.com.au/wp-content/uploads/2017/02/dish-on.png";
	} else {
		$$.removeClass('on');
		document.getElementById("dish").src = "https://www.moplovers.com.au/wp-content/uploads/2017/02/dish-off.png";
	}
	calculatesubtotal();
})
$('#calendar-col').on('click', function() {
	var $$ = $(this)
	if (!$$.is('.on')) {
		$$.addClass('on');
		
		document.getElementById("calendar").src = "https://www.moplovers.com.au/wp-content/uploads/2017/02/dish-on.png";
	} else {
		$$.removeClass('on');
		document.getElementById("calendar").src = "https://www.moplovers.com.au/wp-content/uploads/2017/02/dish-off.png";
	}
	calculatesubtotal();
})
$('#laundry-col').on('click', function() {
	var $$ = $(this)
	if (!$$.is('.on')) {
		$$.addClass('on');
	
		document.getElementById("laundry").src = "https://www.moplovers.com.au/wp-content/uploads/2017/02/laundry-on.png";
	} else {
		$$.removeClass('on');
		document.getElementById("laundry").src = "https://www.moplovers.com.au/wp-content/uploads/2017/02/laundry-off.png";
	}
	calculatesubtotal();
})

$('#col-once-off').on('click', function() {
	var $$ = $(this)
	if (!$$.is('.on')) {
		$$.addClass('on');
		onlyOne('onceOff');
		
		document.getElementById("once-off").src = "https://www.moplovers.com.au/wp-content/uploads/2017/02/Onceoff-on.png";
	}
	calculatesubtotal();
})
$('#col-weekly').on('click', function() {
	var $$ = $(this)
	if (!$$.is('.on')) {
		$$.addClass('on');
		onlyOne('weekly');
		document.getElementById("weekly").src = "https://www.moplovers.com.au/wp-content/uploads/2017/02/Weekly-on.png";
	}
	calculatesubtotal();
})
$('#col-fortnightly').on('click', function() {
	var $$ = $(this)
	if (!$$.is('.on')) {
		$$.addClass('on');
		onlyOne('fortnightly');
		document.getElementById("fortnightly").src = "https://www.moplovers.com.au/wp-content/uploads/2017/02/Fortnightly-on.png";
	} 
	calculatesubtotal();
})
$('#col-monthly').on('click', function() {
	var $$ = $(this)
	if (!$$.is('.on')) {
		$$.addClass('on');
		onlyOne('monthly');
		document.getElementById("monthly").src = "https://www.moplovers.com.au/wp-content/uploads/2017/02/Monthly-on.png";
	} 
	calculatesubtotal();
})

function onlyOne(id) {
	switch (id) {
case 'onceOff':

			if ( $( "#col-weekly" ).hasClass( "on" ) ) {
				$( "#col-weekly" ).removeClass( "on" );
				document.getElementById("weekly").src = "https://www.moplovers.com.au/wp-content/uploads/2017/02/Weekly-off.png";
			}
			
			if ( $( "#col-fortnightly" ).hasClass( "on" ) ) {
				$( "#col-fortnightly" ).removeClass( "on" );
				document.getElementById("fortnightly").src = "https://www.moplovers.com.au/wp-content/uploads/2017/02/Fortnightly-off.png";
			}
			
			if ( $( "#col-monthly" ).hasClass( "on" ) ) {
				$( "#col-monthly" ).removeClass( "on" );
				document.getElementById("monthly").src = "https://www.moplovers.com.au/wp-content/uploads/2017/02/Monthly-off.png";
			}
			
break;
case 'weekly':
			
			if ( $( "#col-once-off" ).hasClass( "on" ) ) {
					$( "#col-once-off" ).removeClass( "on" );
					document.getElementById("once-off").src = "https://www.moplovers.com.au/wp-content/uploads/2017/02/Onceoff-off.png";
				}	
			
			if ( $( "#col-fortnightly" ).hasClass( "on" ) ) {
					$( "#col-fortnightly" ).removeClass( "on" );
					document.getElementById("fortnightly").src = "https://www.moplovers.com.au/wp-content/uploads/2017/02/Fortnightly-off.png";
				}
			
			if ( $( "#col-monthly" ).hasClass( "on" ) ) {
					$( "#col-monthly" ).removeClass( "on" );
					document.getElementById("monthly").src = "https://www.moplovers.com.au/wp-content/uploads/2017/02/Monthly-off.png";
				}
break;
case 'fortnightly':
			
			if ( $( "#col-once-off" ).hasClass( "on" ) ) {
				$( "#col-once-off" ).removeClass( "on" );
				document.getElementById("once-off").src = "https://www.moplovers.com.au/wp-content/uploads/2017/02/Onceoff-off.png";
			}
			
			if ( $( "#col-weekly" ).hasClass( "on" ) ) {
				$( "#col-weekly" ).removeClass( "on" );
				document.getElementById("weekly").src = "https://www.moplovers.com.au/wp-content/uploads/2017/02/Weekly-off.png";
			}
			
			if ( $( "#col-monthly" ).hasClass( "on" ) ) {
				$( "#col-monthly" ).removeClass( "on" );
				document.getElementById("monthly").src = "https://www.moplovers.com.au/wp-content/uploads/2017/02/Monthly-off.png";
			}
break;
case 'monthly':
			
			if ( $( "#col-once-off" ).hasClass( "on" ) ) {
				$( "#col-once-off" ).removeClass( "on" );
				document.getElementById("once-off").src = "https://www.moplovers.com.au/wp-content/uploads/2017/02/Onceoff-off.png";
			}
			
			if ( $( "#col-weekly" ).hasClass( "on" ) ) {
				$( "#col-weekly" ).removeClass( "on" );
				document.getElementById("weekly").src = "https://www.moplovers.com.au/wp-content/uploads/2017/02/Weekly-off.png";
			}
			
			if ( $( "#col-fortnightly" ).hasClass( "on" ) ) {
				$( "#col-fortnightly" ).removeClass( "on" );
				document.getElementById("fortnightly").src = "https://www.moplovers.com.au/wp-content/uploads/2017/02/Fortnightly-off.png";
			}
break;
	}
}