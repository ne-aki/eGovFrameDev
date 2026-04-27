<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<script src="https://code.jquery.com/jquery-4.0.0.min.js"></script>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1>게시글 수정</h1>
	<form action="<c:url value='/updateBoard.do' />" method="POST">
		<input type="hidden" name="BOARD_NO" value="<c:out value='${board[0].BOARD_NO}'/>" />
		<p>
			제목 :
			<input id="TITLE" name="TITLE" maxlength="1000" value="<c:out value='${board[0].TITLE}'/>" />
		</p>
		<p>
			내용 :
			<textarea id="CONT" name="CONT" rows="5" cols="30" style="resize: none;"><c:out value="${board[0].CONT}"/></textarea>
		</p>
		<p>
			수정자 :
			<input id="MODIFIER" name="MODIFIER" maxlength="1000" value="<c:out value='${board[0].WRITER}'/>" />
		</p>
		<input type="submit" value="수정" />
		<input type="button" value="뒤로가기" onclick="history.back()" />
	</form>
</body>
</html>
