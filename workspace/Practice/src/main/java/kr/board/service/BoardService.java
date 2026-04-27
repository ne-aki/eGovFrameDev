package kr.board.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import kr.board.mapper.BoardMapper;
import kr.board.vo.BoardVO;
import lombok.RequiredArgsConstructor;

@Service("boardService")
public class BoardService {
	
	@Resource(name = "boardMapper")
	public BoardMapper boardMapper;
	
	
	public List<HashMap<String, Object>> getBoardList(HashMap<String, Object> param) {
		return boardMapper.getBoardList(param);
	}
}
