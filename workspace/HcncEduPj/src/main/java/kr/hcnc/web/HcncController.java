package kr.hcnc.web;

import java.util.HashMap;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import kr.hcnc.VO.HcncVO;
import kr.hcnc.service.HcncService;

@Controller
public class HcncController {
	
	@Resource(name="hcncService")
	public HcncService hcncService;
	
	@RequestMapping(value="/test01.do")
	public String test01(HttpServletRequest request, HttpServletResponse response, HcncVO vo) {
		System.out.println("HcncController > test01()");
		
		String result = hcncService.selectTest();
		// GET / POST
		// request.getQueryString() //GET
		// request.getAttribute(name) //GET / POST
		// request.getParameter(name)
		
		System.out.println(request.getQueryString());
		System.out.println(request.getParameter("A"));
		
		System.out.println("P1" + request.getParameter("P1"));
		System.out.println("P2" + request.getParameter("P2"));
		System.out.println("P3" + request.getParameter("P3"));
		
		request.setAttribute("A", "ABC");
		System.out.println(request.getAttribute("A"));
		
		System.out.println("result = " + result);
		return "test01";
	}
	
	@RequestMapping(value="/insertTestData.do")
	public void insertTestData(HttpServletRequest request, HttpServletResponse response, HcncVO vo) {
		HashMap<String, Object> param = new HashMap<String, Object> ();
		param.put("p1", request.getParameter("p1"));
		param.put("p2", request.getParameter("p2"));
		param.put("p3", request.getParameter("p3"));
		System.out.println("param" + param);
		int result = hcncService.insertTestData(param);
		System.out.println(vo.toString());
		System.out.println("result = " + result);
		try {
			response.sendRedirect("test01.do");
		} catch(Exception ee) {
			System.out.println(ee);
		}
		
	}
	
	//////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////
	
	
	
	
	
	
	
	
	
	
	// selectBoardList.do=
	// selectBoardDetail.do
	// insertBoard.do > selectBoardDetail.do
	// updateBoard.do > selectBoardDetail.do
	// deleteBoard.do > selectBoardList.do
	
	@RequestMapping(value="/selectBoardList.do")
	public String selectBoardList(HttpServletRequest request) {
		HashMap<String, Object> param = new HashMap<String, Object>();
		request.setAttribute("list", hcncService.selectBoardList(param));
		return "selectBoardList";
	}
	
	@RequestMapping(value="/selectBoardDetail.do")
	public String selectBoardDetail(HttpServletRequest request) {
		HashMap<String, Object> param = new HashMap<String, Object>();
		param.put("boardNo", request.getParameter("BOARD_NO"));
		request.setAttribute("board", hcncService.selectBoardList(param));
		return "selectBoardDetail";
	}
	
	//게시글 작성 페이지 이동용
	@RequestMapping(value="/insertBoardPage.do")
	public String insertBoardPage() {
		return "insertBoard";
	}
	
	@RequestMapping(value="/insertBoard.do")
	public String insertBoard(HttpServletRequest request, HttpServletResponse response, HcncVO vo) {
		HashMap<String, Object> param = new HashMap<String, Object>();
		param.put("TITLE", request.getParameter("TITLE"));
		param.put("CONT", request.getParameter("CONT"));
		param.put("WRITER", request.getParameter("WRITER"));
		param.put("MODIFIER", request.getParameter("WRITER"));
		
		hcncService.insertBoard(param);
		return "redirect:/selectBoardList.do";
	}
	
	@RequestMapping(value = "/updateBoardPage.do")
	public String updateBoardPage(HttpServletRequest request) {
	    HashMap<String, Object> param = new HashMap<String, Object>();
	    param.put("boardNo", request.getParameter("BOARD_NO"));
	    request.setAttribute("board", hcncService.selectBoardList(param));
	    return "updateBoard";
	}
	
	@RequestMapping(value = "/updateBoard.do")
	public String updateBoard(HttpServletRequest request) {
	    HashMap<String, Object> param = new HashMap<String, Object>();
	    param.put("BOARD_NO", request.getParameter("BOARD_NO"));  // ← 대문자로 변경
	    param.put("TITLE", request.getParameter("TITLE"));
	    param.put("CONT", request.getParameter("CONT"));
	    param.put("MODIFIER", request.getParameter("MODIFIER"));
	    hcncService.updateBoard(param);
	    return "redirect:/selectBoardDetail.do?BOARD_NO=" + request.getParameter("BOARD_NO");
	}
	
	@RequestMapping(value = "/deleteBoard.do")
	public String deleteBoard(HttpServletRequest request) {
	    HashMap<String, Object> param = new HashMap<String, Object>();
	    param.put("BOARD_NO", request.getParameter("BOARD_NO"));
	    hcncService.deleteBoard(param);
	    return "redirect:/selectBoardList.do";
	}
	
	
	
}
