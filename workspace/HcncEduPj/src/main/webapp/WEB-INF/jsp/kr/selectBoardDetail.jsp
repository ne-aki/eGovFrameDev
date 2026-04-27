<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<script src="https://code.jquery.com/jquery-4.0.0.min.js"></script>
<script>
    $(document).ready(function() {

        $("#btnList").on("click", function(){
            location.href = "<c:url value='/selectBoardList.do' />"
        });

        $("#btnUpdatePage").on("click", function(){
            location.href = "<c:url value='/updateBoardPage.do' />?BOARD_NO=<c:out value='${board[0].BOARD_NO}'/>"
        });

        $("#btnDelete").on("click", function(){
            if(confirm("정말 삭제하시겠습니까?")) {
                location.href = "<c:url value='/deleteBoard.do' />?BOARD_NO=<c:out value='${board[0].BOARD_NO}'/>"
            }
        });

    });
</script>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h2>제목:<c:out value="${board[0].TITLE }" /></h2>
	<p>내용:<c:out value="${board[0].CONT }" /></p>
	<p>작성자:<c:out value="${board[0].WRITER }" /></p>
	<p>수정자:<c:out value="${board[0].MODIFIER }" /></p>
	<p>작성일:<c:out value="${board[0].REG_DT }" /></p>
	<p>수정일:<c:out value="${board[0].MOD_DT }" /></p>
</body> 
<input id="btnList" type="button" value="목록" />
<input id="btnUpdatePage" type="button" value="수정" />
<input id="btnDelete" type="button" value="삭제" />
</html>