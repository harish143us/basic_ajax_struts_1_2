<%@ page
	language="java"
	pageEncoding="ISO-8859-1"%>
<%@ taglib
	uri="http://jakarta.apache.org/struts/tags-bean"
	prefix="bean"%>
<%@ taglib
	uri="http://jakarta.apache.org/struts/tags-html"
	prefix="html"%>


<html>
<head>
<title>JSP for AjaxFilterForm form</title>
<link
	href="jquery/jquery-ui.css"
	rel="stylesheet">
</head>
<body>

	<script src="jquery/external/jquery/jquery.js"></script>
	<script src="jquery/jquery-ui.js"></script>
	<script>
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
				$.getJSON("loadJSON.do", function(data) {
					$.each(data, function(key, val) {
						// $('#' + key).val(val);
						
						$form.find("[name=" + key +"]").val(val);
						// $("[name=" + key +"]").val(val);
					});
				});

			});// click

		});
	</script>
	<html:form action="/ajaxFilter">
			id : <html:text
			property="id"
			styleId="id" />
		<html:errors property="id" />
		<br />
			name : <html:text
			property="name"
			styleId="name" />
		<html:errors property="name" />
		<br />
			date : <html:text
			property="date"
			styleId="date" />
		<html:errors property="date" />
		<br />
		<html:submit styleId="submit" />
	</html:form>

	<button id="load">Load</button>
	<button id="loadJSON">Load JSON</button>

	<div class="ui-widget">
		<div
			class="ui-state-highlight ui-corner-all"
			style="margin-top: 20px; padding: 0 .7em;">
			<p>
				<span
					class="ui-icon ui-icon-info"
					style="float: left; margin-right: .3em;"> </span>
			<div id="returnedValue">Sample ui-state-highlight style.</div>
			</p>
		</div>
	</div>
	<br>
</body>
</html>


