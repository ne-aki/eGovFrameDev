package kr.hcnc.service;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import kr.hcnc.mapper.HcncMapper;

@Service
public class HcncService {
	
	@Resource(name = "hcncMapper")
	private HcncMapper hcncMapper;
	
	public String selectTest() {
		System.out.println("HcncService > selectTest()");
		String result = hcncMapper.selectTest();
		System.out.println("result = " + result);
		return result;
	}

}
