<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<script src="https://code.jquery.com/jquery-4.0.0.min.js"></script>
<script>
	function validate() {
	    // TITLE: 100자 이하
	    if($("#TITLE").val().length == 0) {
	        alert("제목을 입력해주세요!");
	        return false;
	    }
	    if($("#TITLE").val().length > 100) {
	        alert("제목은 100자를 초과할 수 없습니다!");
	        return false;
	    }
	    // CONT: 1000자 이하
	    if($("#CONT").val().length == 0) {
	        alert("내용을 입력해주세요!");
	        return false;
	    }
	    if($("#CONT").val().length > 1000) {
	        alert("내용은 1000자를 초과할 수 없습니다!");
	        return false;
	    }
	    // WRITER: 50자 이하
	    if($("#WRITER").val().length == 0) {
	        alert("작성자를 입력해주세요!");
	        return false;
	    }
	    if($("#WRITER").val().length > 50) {
	        alert("작성자는 50자를 초과할 수 없습니다!");
	        return false;
	    }
	    return true;
	}
</script>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1>게시글 신규 등록</h1>
	<form action="<c:url value='/insertBoard.do' />" method="POST" onsubmit="return validate()">
		<p>
			제목 :
			<input id="TITLE" name="TITLE" maxlength="1000" />
		</p>
		<p>
			내용 :
			<textarea id="CONT" name="CONT" rows="5" cols="30" style="resize: none;"></textarea>
		</p>
		<p>
			작성자 :
			<input id="WRITER" name="WRITER" maxlength="1000" />
		</p>
		<input type="submit" value="작성" />
		<input type="button" value="뒤로가기" onclick="history.back()" />
	</form>
</body>
</html>