package kr.board.mapper;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;
import kr.board.vo.BoardVO;

@Mapper("boardMapper")
public interface BoardMapper {
	List<HashMap<String, Object>> getBoardList(HashMap<String, Object> param);
}
