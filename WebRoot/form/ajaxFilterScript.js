/**
 * 
 */

$().ready(function() {
	$("#submit").button();

	$("#load").button();
	$("#load").click(function() {
		$("#returnedValue").load('loadFragment.do');
	});// click

	// loadJSON
	$("#loadJSON").button();
	$("#loadJSON").click(function() {
		// $("#returnedValue").load('loadJSON.do');

		// 1. Return JSON;
		// 2. Parse JSON;
		// 3. Iterate through JSON;
		// 	3a. Assign JSON to Fields;

		//
		// Caching selector for better performance.
		var $form = $('form[name="ajaxFilterForm"]');
		$.getJSON("loadJSON.do").done(function(data) {
			$.each(data, function(key, val) {
				// $('#' + key).val(val);

				$form.find("[name=" + key + "]").val(val);
				// $("[name=" + key +"]").val(val);
			});
		});

	});// click

});
