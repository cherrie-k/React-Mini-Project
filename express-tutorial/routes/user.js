var express = require("express");
var router = express.Router();

// :id -> 라우팅에서 파라미터를 설정하는 것. 동적인 값을 여기서 받아서 함수를 실행하고, 정해진 작업을 함.
router.get("/:id", function (req, res) {
  res.send("Received a GET request, param:" + req.params.id);
});

//json 형태의 응답을 할 수 있음
router.post("/", function (req, res) {
  res.json({ success: true });
});

// http status code 설치. 그 후 send나 json 등 이용해서 응답.
router.put("/", function (req, res) {
  res.status(400).json({ message: "Hey, you. Bad Request!" });
});

// delete 수행
router.delete("/", function (req, res) {
  res.send("Received a DELETE request");
});

module.exports = router;
