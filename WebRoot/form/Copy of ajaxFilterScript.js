/**
 * 
 */

$().ready(function() {
	$("#submit").button();
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
		// event.preventDefault();
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
			form: "ajaxFilterForm",
			click : function(event) {
				// alert(event);
				event.preventDefault();
				//
				// Call function to server;			
//				$.getJSON("updateFilter.do").done(function() {
//					//
//					// Call to server.
//					alert("Done.");
//				}).fail(function() {
//					
//					//
//					// Display message to failure.
//					alert("Failure.");
//				});
				
				// $("submit").click();
				
				//
				// Submit form.
				// $('form[name="ajaxFilterForm"]').submit();
				// var $form = $('form[name="ajaxFilterForm"]');
				// alert($form);
				// var x = document.forms.length;
				// $(document.forms.length[0]).submit();
				
				$('form[name="ajaxFilterForm"]').unbind('submit').submit();
				$(document).find("ajaxFilterForm").submit();
				$("#form").submit();
				
			
				
				// $('form[name="ajaxFilterForm"]').submit();
				// $('#update').submit();
				
				// event.preventDefault();
				
				// form.submit();
				
				 $(document)
		            .on( "click", "[form]", function( event ) {
		            	// event.preventDefault();
		                // event.preventDefault();
		                // var formId = $( this ).attr( "form" ),
		                // $form = $( "#" + formId ).submit();
		            	// alert("AAA");
		            	
		            	// $('form[name="ajaxFilterForm"]').submit();
		            	
		            	$('form[name="ajaxFilterForm"]').unbind('submit').submit();
		            	
		            	var $mf = $('form[name="ajaxFilterForm"]');
		            	$mf.submit();
		            	
		            });
				
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
