<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Home - GET</title>
</head>
<body>
    <h2>GET 요청 페이지</h2>
    <p>home.do 로 GET 방식으로 접근했습니다.</p>

    <!-- POST 요청을 보내는 폼 -->
    <form action="home.do" method="post">
        <input type="submit" value="POST 로 이동" />
    </form>
</body>
</html>
