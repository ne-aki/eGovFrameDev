<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<script src="https://code.jquery.com/jquery-4.0.0.min.js"></script>
<script>
/* $("tag") > tag를 가진 모든 DOM
$(".tag") > tag라는 class를 가진 모든 DOM
$("#tag") > tag라는 id를 가진 DOM */
	function chkValidation() {
		console.log($("input[name=P1]").val())
		console.log($("input[name=P2]").val())
		console.log($("input[name=P3]").val())
		
		console.log($("#P1").val())
		console.log($("#P2").val())
		console.log($("#P3").val())
		
		console.log($("#P1").val().length)
		console.log($("#P2").val().length)
		console.log($("#P3").val().length)

		if($("#P1").val().length > 10) {
		    alert("P1은 10자를 초과할 수 없습니다!")
		}
		if($("#P2").val().length > 20) {
		    alert("P2는 20자를 초과할 수 없습니다!")
		}
		if($("#P3").val().length > 30) {
		    alert("P3는 30자를 초과할 수 없습니다!")
		}
		if ($("#P4").val().length > 40) {
			alert("P4는 40자를 초과할 수 없습니다!")
		}
		
		
	}
</script>
<form id="form01" action="insertTestData.do" method="POST">
P1(10자) = <input id="P1" name="P1" maxlength="10" /> <br/>
P2(20자) = <input id="P2" name="P2" maxlength="20" /> <br/>
P3(30자) = <input id="P3" name="P3" maxlength="30" /> <br/>
P4(40wk) = <input name="P4" id="P4" maxlength="40" />
<input type="button" value="제출" onclick="chkValidation()" />
	<br />
[요청파라미터값] request.getParameter("A")
<br />
[처리 후 리턴해준 값] request.getAttribute("A")
</form>
<input type="button" value="누르세요">
</body>
</html>