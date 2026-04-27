package kr.hcnc.service;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import kr.hcnc.mapper.CodeMapper;

@Service
public class CodeService {
	
	@Resource(name="codeMapper")
	public CodeMapper codeMapper;
	
	public List<Map<String, Object>> selectMstCode(Map<String, Object> param) {
		List<Map<String, Object>> result = codeMapper.selectMstCode(param);
		return result;
	}
	
	public void insertMstCode(Map<String, Object> param) {
		codeMapper.insertMstCode(param);
	}
	
	public void deleteMstCode(Map<String, Object> param) {
		codeMapper.deleteMstCode(param);
	}
	
	public void updateMstCode(Map<String, Object> param) {
		System.out.println("서비스 실행");
		codeMapper.updateMstCode(param);
		System.out.println("서비스 실행 후");
	}
}
