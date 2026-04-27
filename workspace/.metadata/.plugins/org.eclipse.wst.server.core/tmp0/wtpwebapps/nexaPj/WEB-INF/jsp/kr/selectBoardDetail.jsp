<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<script src="https://code.jquery.com/jquery-4.0.0.min.js" ></script>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
Title = <c:out value="${board[0].TITLE }" /><br />
Cont = <c:out value="${board[0].CONT  }" /><br />
Writer = <c:out value="${board[0].WRITER  }" /><br />
Modifier = <c:out value="${board[0].MODIFIER  }" /><br />
Reg_Dt = <c:out value="${board[0].REG_DT  }" /><br />
Mod_Dt = <c:out value="${board[0].MOD_DT  }" />
</body>
</html>