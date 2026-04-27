package kr.hcnc.mapper;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("hcncMapper")
public interface HcncMapper {
	List<Map<String, Object>> selectBoardList(HashMap<String, Object> param);
	void insertBoard(HashMap<String, Object> param);
	void updateBoard(HashMap<String, Object> param);
	void deleteBoard(HashMap<String, Object> param);
	List<Map<String, Object>> selectCode(HashMap<String, Object> param);
}
