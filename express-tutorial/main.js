var express = require("express");
var app = express();
var user = require("./routes/user");

// 루트 경로에 get 요청이 들어오면 콜백 함수 실행. 파라미터는 request, response.
app.get("/", function (req, res) {
  res.send("Hello World");
});

// ㄴ '/user'로 연결 요청이 들어온다면 user로 연결해줌
app.use("/user", user);

app.listen(3000, function () {
  // 포트번호 추후 리액트랑 맞춰줘야할듯? 실행 할 때 directory 확인하기
  console.log("Example App is listening on port 3000");
});

// 나중에 nodemon 사용법 알아보기. 일단 설치는해둠
