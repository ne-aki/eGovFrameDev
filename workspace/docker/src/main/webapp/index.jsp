<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<html>
<head>
<script src="https://code.jquery.com/jquery-4.0.0.min.js"></script>

<script type="text/javascript">
	function callApi01() {
		var obj = {};
		$.ajax({
			type: "POST",					// 요청 METHOD
			url: "http://localhost.com/api/selectApi01.do",		//API호출URL
			//url: "http://localhost:8080/docker/api/selectApi01.do",
			data: obj,						// 전달 매개변수
			dataType: "json",				//RETURN 타입
			// async: false,				// 동기/비동기
			beforeSend: function(xhr){
				//xhc.setRequestHeader("","");		// request header 추가
			},
			success: function(response) {
				console.log(response);
			},
			error: function(response){
				console.log("error");
				console.log(response);
			}
		});
	}
</script>

</head>
<body>
<input type="button" onclick="callApi01()" value="API호출01">
</body>
</html>
