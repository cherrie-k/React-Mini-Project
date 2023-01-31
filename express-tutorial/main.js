var express = require("express");
var app = express();
var user = require("./routes/user");

/* 함수를 만들어서 app.use에 넣어준다. 
request가 들어 왔을 때 다른걸 실행하기 전에 myLogger가 실행되어 처리할 작업을 하고(console.log어쩌구), 
거기서 받은 next를 실행하면 다른 미들웨어를 실행하거나, 아니면 라우팅 작업 실행...*/
var myLogger = function (req, res, next) {
  console.log(req.url);
  next();
};

app.use(myLogger);

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
