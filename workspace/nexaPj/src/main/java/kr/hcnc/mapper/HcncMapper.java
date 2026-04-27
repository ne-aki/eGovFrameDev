package kr.hcnc.mapper;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("hcncMapper")
public interface HcncMapper {
	String selectTest();
	
	int insertTestData(HashMap<String, Object> param);
	
	List<Map<String, Object>> selectBoard(HashMap<String, Object> param);
	List<Map<String, Object>> selectBoardDetail(HashMap<String, Object> param);

	void insertBoard(Map<String, Object> param);


	void updateBoard(Map<String, Object> param);

	List<Map<String, Object>> selectBoardList(Map<String, Object> param);

	void deleteBoard(HashMap<String, Object> param);
}
