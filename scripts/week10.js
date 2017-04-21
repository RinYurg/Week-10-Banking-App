$(document).ready(function(){
	$('#clientBtn').click(function(){
		// alert();
		$.getJSON("scripts/customers.json",function(data){
			// $('#output').html(data.customer);

			for (var i=0; i<data.customer.length; i++){
				document.getElementById("output").innerHTML += "<h3>" + String(data.customer[i].first) + " " + String(data.customer[i].last) + "</h3>" ;
			}
		});

	});
});

$(document).ready(function(){
	$('#accntBtn').click(function(){
		$.getJSON("scripts/customers.json",function(data){

			for (var i=0; i<data.customer.length; i++){
				document.getElementById("output").innerHTML += "<h3>" + String(data.customer[i].balance) + "</h3>" ;
			}
		});

	});
});


$(document).ready(function(){
	$('#amountBtn').click(function(){
		$.getJSON("scripts/customers.json",function(data){

			for (var i=0; i<data.customer.length; i++){
				document.getElementById("output").innerHTML += "<h3>" + String(data.customer[i].apr) + "</h3>" ;
			}
		});

	});
});