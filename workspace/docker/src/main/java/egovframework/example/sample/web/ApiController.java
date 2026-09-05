package egovframework.example.sample.web;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class ApiController {
	@RequestMapping("/api/selectApi01.do")
	public ModelAndView selectApi01() {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("jsonView");
		
		Map<String, Object> modelMap = new HashMap<String, Object>();
		modelMap.put("1", "a");
		modelMap.put("2", "b");
		modelMap.put("3", "c");
		modelMap.put("4", "d");
		modelMap.put("5", "e");
		
		mv.addAllObjects(modelMap);
		
		return mv;
	}

}
