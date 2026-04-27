package kr;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class WebController {
	@RequestMapping(value="home.do", method=RequestMethod.GET)
	public String homeGet() {
		System.out.println("GET 요청");
		return "home_get";
	}
	@RequestMapping(value="home.do", method=RequestMethod.POST)
	public String homePost() {
		System.out.println("GET 요청");
		return "home_get";
	}
	
}
