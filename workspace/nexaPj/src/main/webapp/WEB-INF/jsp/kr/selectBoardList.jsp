<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<script src="https://code.jquery.com/jquery-4.0.0.min.js" ></script>
<script type="text/javascript">
	$(document).ready(function(){
		$("#btnInsertPage").on("click", function(){
			location.href = "<c:url value="/insertBoard.do" />";
		});
	});
</script>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<c:out value='${list }' />

<table border="1">
	<tr>
		<td>TITLE</td>
		<td>WRITER</td>
	</tr>
	<c:forEach var="board" items="${list }">
		<tr>
			<td>
				<a href="selectBoardDetail.do?BOARD_NO=<c:out value="${board.BOARD_NO }" />">
					<c:out value="${board.TITLE }" />
				</a>
			</td>
			<td><c:out value="${board.WRITER }" /></td>
		</tr>
	</c:forEach>
</table>
<input id="btnInsertPage" type="button" value="신규등록" />
</body>
</html>