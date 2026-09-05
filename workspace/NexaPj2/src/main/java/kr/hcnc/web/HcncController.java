package kr.hcnc.web;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import kr.hcnc.service.HcncService;

@Controller
public class HcncController {
	
	@Resource(name = "hcncService")
	private HcncService hcncService;
	
	@RequestMapping(value = "/selectBoardList.do")
	public NexacroResult selectBoardList() {
		NexacroResult result = new NexacroResult();
		HashMap<String, Object> param = new HashMap<String, Object>();
		result.addDataSet("dsBoardList", hcncService.selectBoardList(param));
		return result;
	}
	
	@RequestMapping(value = "/insertBoard.do")
	public NexacroResult insertBoard(@ParamDataSet(name = "dsBoard") Map<String, Object> dsBoard) {
		NexacroResult result = new NexacroResult();
		HashMap<String, Object> param = new HashMap<String, Object>();
		param.put("title", dsBoard.get("title"));
		param.put("cont", dsBoard.get("cont"));
		param.put("writer", dsBoard.get("writer"));
		param.put("modifier", dsBoard.get("modifier"));
		param.put("boardType", dsBoard.get("boardType"));
		param.put("category", dsBoard.get("category"));
		hcncService.insertBoard(param);
		return result;
	}
	
	@RequestMapping(value = "/updateBoard.do")
	public NexacroResult updateBoard(@ParamDataSet(name = "dsBoard") Map<String, Object> dsBoard) {
		NexacroResult result = new NexacroResult();
		HashMap<String, Object> param = new HashMap<String, Object>();
		param.put("boardNo", dsBoard.get("boardNo"));
		param.put("title", dsBoard.get("title"));
		param.put("cont", dsBoard.get("cont"));
		param.put("writer", dsBoard.get("writer"));
		param.put("modifier", dsBoard.get("modifier"));
		param.put("boardType", dsBoard.get("boardType"));
		param.put("category", dsBoard.get("category"));
		hcncService.updateBoard(param);
		return result;
	}
	
	@RequestMapping(value = "/deleteBoard.do")
	public NexacroResult deleteBoard(@ParamDataSet(name = "dsBoard") List<HashMap<String, Object>> dsBoard) {
		NexacroResult result = new NexacroResult();
//		int rowCount = dsBoard.getRowCount();
//		for(HashMap<String, Object> row : dsBoard) {
//			String chk = (String) row.get("chk");
//			if ("1".equals(chk)) {
//				HashMap<String, Object> param = new HashMap<String, Object>();
//				param.put("boardNo", dsBoard.get("boardNo"));
//				hcncService.deleteBoard(param);
//			}
//		}
		
		return result;
	}
	
	@RequestMapping(value = "/selectCode.do")
	public NexacroResult selectCode(@ParamVariable(name = "ptCode", required = false) String ptCode) {
		NexacroResult result = new NexacroResult();
		HashMap<String, Object> param = new HashMap<String, Object>();
		param.put("ptCode", ptCode);
		result.addDataSet("dsCode", hcncService.selectCode(param));
		return result;
	}
	
	@RequestMapping(value = "/selectList.do")
	public NexacroResult selectList(@ParamVariable(name = "boardNo") String boardNo) {
		NexacroResult result = new NexacroResult();
		HashMap<String, Object> param = new HashMap<String, Object>();
		param.put("boardNo", boardNo);
		result.addDataSet("dsBoard", hcncService.selectList(param));
		return result;
	}

}
