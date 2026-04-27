package kr.hcnc.web;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import kr.hcnc.service.CodeService;

@Controller
public class CodeController {
	@Resource(name="codeService")
	public CodeService codeService;
	
	@RequestMapping("/selectMstCode.do")
	public NexacroResult selectMstCode(
			
			) {
		
		
		
		NexacroResult result = new NexacroResult();
		
		HashMap<String, Object> param = new HashMap<String, Object>();
		
		result.addDataSet("dsMstCode", codeService.selectMstCode(param));
		
		//System.out.println("코드 코드 테스트");
		//System.out.println(codeService.selectMstCode(param));
		
		return result;
	}
	
	@RequestMapping("/insertMstCode.do")
	public NexacroResult insertMstCode(@ParamDataSet(name = "dsMstCode") Map<String, Object> dsMstCode) {
		
		NexacroResult result = new NexacroResult();
		
		HashMap<String, Object> param = new HashMap<String, Object>();
		
		//System.out.println("dsMstCode :: " + dsMstCode);
		
		param.put("code", dsMstCode.get("code"));
		param.put("codeNm", dsMstCode.get("codeNm"));
		//System.out.println(dsMstCode.get("code"));
		//System.out.println(dsMstCode.get("codeNm"));
		
		codeService.insertMstCode(param);
		
		return result;
	}
	
	@RequestMapping("/deleteMstCode.do")
	public NexacroResult deleteMstCode(@ParamVariable(name="code") String code) {
		NexacroResult result = new NexacroResult();
		
		HashMap<String, Object> param = new HashMap<String, Object>();
		
		param.put("code", code);
		
		//System.out.println("code : " + code);
		
		codeService.deleteMstCode(param);
		
		return result;
	}
	
	@RequestMapping("/updateMstCode.do")
	public NexacroResult updateMstCode(@ParamDataSet(name="dsMstCode") Map<String, Object> dsMstCode) {
		System.out.println("update 실행");
		NexacroResult result = new NexacroResult();
		System.out.println(dsMstCode);
		
		HashMap<String, Object> param = new HashMap<String, Object>();
		
		param.put("code", dsMstCode.get("code"));
		param.put("codeNm", dsMstCode.get("codeNm"));
		System.out.println(dsMstCode);
		
		codeService.updateMstCode(param);
		return result;
	}
	
}
