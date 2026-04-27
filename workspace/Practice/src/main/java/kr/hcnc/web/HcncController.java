package kr.hcnc.web;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import kr.hcnc.service.HcncService;

@Controller
public class HcncController {
	
	@Resource(name = "hcncService")
	public HcncService hcncService;
	
	@RequestMapping(value="/test01.do")
	public String test01() {
		System.out.println("HcncController" + "test01");
		String result = hcncService.selectTest();
		System.out.println("result = " + result);
		return result;
	}
}
