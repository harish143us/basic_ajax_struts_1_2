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
	<jsp:include page="update.jsp"></jsp:include>
	
	<script src="jquery/external/jquery/jquery.js"></script>
	<script src="jquery/jquery-ui.js"></script>
	<script src="form/ajaxFilterScript.js"></script>
	
	
	<input type="hidden" id="eventSource"></input>
	<html:form action="/ajaxFilter" styleId="ajaxFilterForm" method="post">
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

		
		<button id="update" form="ajaxFilterForm">Update</button>
		<html:submit styleId="submit" />
		
	</html:form>

	<button id="load">Load</button>
	<button id="loadJSON">Load JSON</button>

	<button id="delete">Delete</button>

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


