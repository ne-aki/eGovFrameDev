package kr.hcnc.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource; 

import org.springframework.stereotype.Service;

import com.mysql.fabric.xmlrpc.base.Param;
import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;

import kr.hcnc.mapper.HcncMapper;

@Service("hcncService")
public class HcncService{

	@Resource(name = "hcncMapper")
	public HcncMapper hcncMapper;

	public List<Map<String, Object>> selectBoardList(Map<String, Object> param) {
		List<Map<String, Object>> result = hcncMapper.selectBoardList(param);
		
		System.out.println("===========");
		
		System.out.println(result.toString());
		
		return result;
	}

	public void insertBoard(Map<String, Object> param) {
		
	
		
		hcncMapper.insertBoard(param);
	}

	public void deleteBoard(HashMap<String, Object> param) {
		hcncMapper.deleteBoard(param);
	}

	public void updateBoard(Map<String, Object> param) {
		
		System.out.println("----------------------------------");
		
		System.out.println("service" + param);
		
		hcncMapper.updateBoard(param);
	}
	
	
	
}
