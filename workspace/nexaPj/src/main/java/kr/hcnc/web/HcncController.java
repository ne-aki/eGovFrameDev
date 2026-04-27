package kr.hcnc.web;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import kr.hcnc.service.HcncService;

@Controller
public class HcncController {
	
	@Resource(name = "hcncService")
	public HcncService hcncService;

	@RequestMapping(value = "/selectList.do")
	public NexacroResult selectList(
			  @ParamVariable(name="boardNo", required = false) String boardNo
			, @ParamVariable(name="searchCmb", required = false) String searchCmb
			, @ParamVariable(name="searchVal", required = false) String searchVal
			, @ParamDataSet(name="dsSearch", required = false) Map<String, Object> dsSearch
			) {
		
		NexacroResult result = new NexacroResult();
		
		HashMap<String, Object> param = new HashMap<String, Object>();
		
		param.put("searchCmb", searchCmb);
		param.put("searchVal", searchVal);
		param.put("boardNo", boardNo);

		// param.put("searchCmb", dsSearch.get("searchCmb"));
		// param.put("searchVal", dsSearch.get("searchVal"));
		
		System.out.println("111111111111111111111111111111111111111111");
		
		result.addDataSet("dsList", hcncService.selectBoardList(param));
		
		System.out.println("22222222222222222222222222222222222222222222");
		
		return result;
	}
	
	@RequestMapping(value = "/insertBoard.do", method = RequestMethod.POST)
	public NexacroResult insertBoard (
			@ParamDataSet(name = "dsBoard") Map<String, Object> dsBoard
		) {
		
		System.out.println("insertBoard :: ");
		System.out.println("dsBoard ::" + dsBoard);
		
		
		NexacroResult result = new NexacroResult();
		
		HashMap<String, Object> param = new HashMap<String, Object>();
		
		param.put("TITLE", dsBoard.get("TITLE"));
		param.put("CONT", dsBoard.get("CONT"));
		param.put("WRITER", dsBoard.get("WRITER"));
		param.put("MODIFIER", dsBoard.get("MODIFIER"));
		
		System.out.println("");
		
		hcncService.insertBoard(param);	
		
		return result;
	}

	
	
	@RequestMapping(value = "/updateBoard.do")
	public NexacroResult updateBoard (
			@ParamDataSet(name = "dsBoard") Map<String, Object> dsBoard
		) {
		
		NexacroResult result = new NexacroResult();
		
		HashMap<String, Object> param = new HashMap<String, Object>();
		
		param.put("BOARD_NO", dsBoard.get("BOARD_NO"));
		param.put("TITLE", dsBoard.get("TITLE"));
		param.put("CONT", dsBoard.get("CONT"));
		param.put("MODIFIER", dsBoard.get("MODIFIER"));
		
		hcncService.updateBoard(param);	
		
		return result;
	}
	
//	@RequestMapping(value = "/deleteBoard.do")
//	public NexacroResult deleteBoard (
//			@ParamDataSet(name = "dsBoard") Map<String, Object> dsBoard
//		) {
//		
//		System.out.println("deleteBoard :: ");
//		System.out.println("dsBoard ::" + dsBoard);
//		
//		
//		NexacroResult result = new NexacroResult();
//		
//		HashMap<String, Object> param = new HashMap<String, Object>();
//		
//		
//		param.put("BOARD_NO", dsBoard.get("boardNo"));
//		
//		System.out.println("");
//		
//		hcncService.deleteBoard(param);	
//		
//		return result;
//	}
	
	@RequestMapping(value = "/deleteBoard.do", method = RequestMethod.POST)
	public NexacroResult deleteBoard(
	@ParamVariable(name="boardNo", required = false) String boardNo) {

	NexacroResult result = new NexacroResult();
	
	HashMap<String, Object> param = new HashMap<String, Object>();

	param.put("BOARD_NO", boardNo);
	hcncService.deleteBoard(param);
	

	return result;
	}
	
	
	
	
	
	@RequestMapping(value = "/deleteBoardChecked.do")
	public NexacroResult deleteBoardChecked (
			@ParamDataSet(name = "dsDelete") List<Map<String, Object>> dsDelete
		) {
		
		NexacroResult result = new NexacroResult();
	
		HashMap<String, Object> param = new HashMap<String, Object>();
		
		for(Map<String, Object> map : dsDelete) {
			param.put("BOARD_NO", map.get("BOARD_NO"));
			
			System.out.println(map.get("BOARD_NO"));
			
			hcncService.deleteBoard(param);
		}
			
		return result;
	}

	
	
	
	
}
	