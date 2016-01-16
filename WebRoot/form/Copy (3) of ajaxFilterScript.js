/**
 * 
 */

$().ready(function() {
	
	$('form[name="ajaxFilterForm"]').on('submit', function(e) { //use on if jQuery 1.7+
        // e.preventDefault();  //prevent form from submitting
        // var data = $("#login_form :input").serializeArray();
        // console.log("Captued ... "); //use the console for debugging, F12 in Chrome, not alerts
    
        // alert(e.target.id);
		alert($(eventSource).val());
		
		
		// alert("Submit");
		$(this).unbind("submit").submit();
	});
	
	
	
	$("#submitAction").button();
	$("#load").button();
	$("#delete").button();
	
	$("#load").click(function() {
		$("#returnedValue").load('loadFragment.do');
	});// click

	// loadJSON
	$("#loadJSON").button();
	$("#loadJSON").click(function() {
		// $("#returnedValue").load('loadJSON.do');


		//
		// Caching selector for better performance.
		var $form = $('form[name="ajaxFilterForm"]');
		$.getJSON("loadJSON.do").done(function(data) {
			
			// 1. Return JSON;
			// 2. Parse JSON;
			// 3. Iterate through JSON;
			// 	3a. Assign JSON to Fields;
			$.each(data, function(key, val) {
				$form.find("[name=" + key + "]").val(val);
			});
		}).fail(function() {
			//
			// Failure.
			$("#returnedValue").text("Failed");
		});

	});// click
	
	//
	// Update
	// Call confirmation window.

	
	$("#update").button();
	$("#update").click(function(event) {
	
	// event.preventDefault();
	$("#dialog").dialog("open");
		event.preventDefault();
		// event.isDefaultPrevented(); 
		
		
//		$('form[name="ajaxFilterForm"]').submit(function( event ) {
//			  // alert( "Handler for .submit() called." );
//			  event.preventDefault();
//			  
//			  return false;
//			}	);

		
//		var myForm = document.getElementById("ajaxFilterForm");
//		alert(myForm);
//		myForm.submit;
		
		// $('form[name="ajaxFilterForm"]')[0].submit();
		// $('form[name="ajaxFilterForm"]').trigger('submit');
	});
	
	$("#dialog").dialog({
		
		//
		// Options
		autoOpen : false,
		width : 400,
		modal: true,
		draggable: false,
		
		//
		// Methods
		
		//
		// Events
		
		//
		// Operations on buttons.
		buttons : [ {
			text : "Yes",
			click : function() {
				 $(document)
		            .on( "click", "[form]", function( event ) {
		            	// event.preventDefault();
		                // event.preventDefault();
		                // var formId = $( this ).attr( "form" ),
		                // $form = $( "#" + formId ).submit();
		            	// alert("AAA");
		            	
		            	// $('form[name="ajaxFilterForm"]').submit();
		            	
		            	// $('form[name="ajaxFilterForm"]').unbind('submit').submit();
		            	
		            	// var $mf = $('form[name="ajaxFilterForm"]');
		            	// $mf.submit();
		            	
		            	// $('#update').unbind('click');
		            	// $('form[name="ajaxFilterForm"]').unbind("submit");
		            	
		            	// $('form[name="ajaxFilterForm"]').submit();
		            	
		            });
				
				//$(this).unbind('submit').submit();
				$(eventSource).val("dialog");
				$('form[name="ajaxFilterForm"]').submit();
				// $.post("ajaxFilter.do");

				
				$(this).dialog("close");
			}
		}, {
			text : "No",
			click : function() {
				$(this).dialog("close");
			}
		}]
	});


	
});
