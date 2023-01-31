var express = require("express");
var app = express();

// 루트 경로에 get 요청이 들어오면 콜백 함수 실행. 파라미터는 request, response.
app.get("/", function (req, res) {
  res.send("Hello World");
});

// :id -> 라우팅에서 파라미터를 설정하는 것. 동적인 값을 여기서 받아서 함수를 실행하고, 정해진 작업을 함.
app.get("/user/:id", function (req, res) {
  res.send("Received a GET request, param:" + req.params.id);
});

//json 형태의 응답을 할 수 있음
app.post("/user", function (req, res) {
  res.json({ success: true });
});

// http status code 설치. 그 후 send나 json 등 이용해서 응답.
app.put("/user", function (req, res) {
  res.status(400).json({ message: "Hey, you. Bad Request!" });
});

// delete 수행
app.delete("/user", function (req, res) {
  res.send("Received a DELETE request");
});

app.listen(3000, function () {
  // 포트번호 추후 리액트랑 맞춰줘야할듯? 실행 할 때 directory 확인하기
  console.log("Example App is listening on port 3000");
});

// 나중에 nodemon 사용법 알아보기. 일단 설치는해둠
