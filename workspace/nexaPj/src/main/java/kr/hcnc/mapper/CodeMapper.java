package kr.hcnc.mapper;

import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper
public interface CodeMapper {
	List<Map<String, Object>> selectMstCode(Map<String, Object> param);
	void insertMstCode(Map<String, Object> param);
	void deleteMstCode(Map<String, Object> param);
	void updateMstCode(Map<String, Object> param);
}
