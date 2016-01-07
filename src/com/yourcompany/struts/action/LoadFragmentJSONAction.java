package com.yourcompany.struts.action;

import java.io.PrintWriter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts.action.Action;
import org.apache.struts.action.ActionForm;
import org.apache.struts.action.ActionForward;
import org.apache.struts.action.ActionMapping;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.google.common.net.MediaType;
import com.yourcompany.struts.form.AjaxFilterForm;

public class LoadFragmentJSONAction extends Action {

	//
	// com.fasterxml.jackson.databind.JsonMappingException: No serializer found for class org.apache.struts.action.ActionServletWrapper 
	// and no properties discovered to create BeanSerializer (to avoid exception, disable SerializationFeature.FAIL_ON_EMPTY_BEANS) ) 
	// (through reference chain: com.yourcompany.struts.form.AjaxFilterForm["servletWrappesr"])
	private static final ObjectMapper OM = new ObjectMapper();
	
	static {
		OM.disable(SerializationFeature.FAIL_ON_EMPTY_BEANS);
		
	}
	
	@Override
	public ActionForward execute(ActionMapping mapping, ActionForm form,
			HttpServletRequest request, HttpServletResponse response)
			throws Exception {

		response.setContentType(MediaType.JSON_UTF_8.toString());
		PrintWriter out = response.getWriter();
		
		// {"id":"1","name":"name","date":"date"}
		// out.write(OM.writeValueAsString((AjaxFilterForm) form));
		out.write("{\"id\":\"1\",\"name\":\"name\",\"date\":\"date\"}");
		
		return null;
	}

}
