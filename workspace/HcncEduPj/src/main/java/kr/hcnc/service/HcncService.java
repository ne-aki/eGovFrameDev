package kr.hcnc.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;
import kr.hcnc.mapper.HcncMapper;

@Service("hcncService")
public class HcncService extends EgovAbstractServiceImpl {
	
	@Resource(name = "hcncMapper")
	private HcncMapper hcncMapper;
	
	public String selectTest() {
		System.out.println("hcncService > selectTest()");
		String result = hcncMapper.selectTest();
		System.out.println("result = " + result);
		return result;
	}
	public int insertTestData(HashMap<String, Object> param) {
		System.out.println("HcncService > insertTestdata(Hashmap<string,object> param))");
		System.out.println("param" + param);
		int result = hcncMapper.insertTestData(param);
		return result;
	}
	
	public List<Map<String, Object>> selectBoardList(HashMap<String, Object> param) {
		List<Map<String, Object>> list = hcncMapper.selectBoard(param);
		return list;
	}
	
	public void insertBoard(HashMap<String, Object> param) {
		hcncMapper.insertBoard(param);
		return;
	}
	
	public void updateBoard(HashMap<String, Object> param) {
		hcncMapper.updateBoard(param);
		return;
	}
	
	public void deleteBoard(HashMap<String, Object> param) {
	    hcncMapper.deleteBoard(param);
	    return;
	}
	
	
	/*
	 * public Object selectBoard(HashMap<String, Object> param) { // TODO
	 * Auto-generated method stub return null; }
	 */
	
}
