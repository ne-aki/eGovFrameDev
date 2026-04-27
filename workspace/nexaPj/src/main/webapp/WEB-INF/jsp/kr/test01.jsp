<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<script src="https://code.jquery.com/jquery-4.0.0.min.js" ></script>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<script type="text/javascript">
/*
$("tag") > tag를 가진 모든 DOM
$(".tag") > tag라는 class를 카진 모든 DOM
$("#tag") > tag라는 id를 가진 DOM
*/
	function chkValidation(){
		$("#form01").submit();
	}
</script>
<form id="form01" action="insertTestData.do" method="POST">
P1(10자) = <input id="P1" name="TITLE" maxlength="10" /><br />
P2(20자) = <input id="P2" name="WRITER" maxlength="20" /><br />
p3(30자) = <input id="P3" name="CONT" maxlength="30" /><br />
<input type="button" value="제출" onclick="chkValidation()" />
</form>
<br />
</body>
</html>