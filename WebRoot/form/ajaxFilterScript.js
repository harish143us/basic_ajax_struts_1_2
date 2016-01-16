/**
 * 
 */

$().ready(function() {


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
		//
		// Open dialog when click.
		event.preventDefault();
		$("#dialog").dialog("open");
	});

	$("#dialog").dialog({

		//
		// Options
		autoOpen : false,
		width : 400,
		modal : true,
		draggable : false,

		//
		// Methods

		//
		// Events

		//
		// Operations on buttons.
		buttons : [ {
			text : "Yes",
			click : function() {
				document.ajaxFilterForm.submit();
				$(this).dialog("close");
			}
		}, {
			text : "No",
			click : function() {
				$(this).dialog("close");
			}
		} ]
	});
});
