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
	
	public List<Map<String, Object>> selectBoardList(HashMap<String, Object> param) {
		return hcncMapper.selectBoardList(param);
	}
	
	public void insertBoard(HashMap<String, Object> param) {
		hcncMapper.insertBoard(param);
	}
	
	public void updateBoard(HashMap<String, Object> param) {
		hcncMapper.updateBoard(param);
	}
	
	public void deleteBoard(HashMap<String, Object> param) {
		hcncMapper.deleteBoard(param);
	}
	
	public List<Map<String, Object>> selectCode(HashMap<String, Object> param) {
		return hcncMapper.selectCode(param);
	}
}
