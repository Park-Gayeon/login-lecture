"use strict";

//app이라는 것을 사용할 수 있도록 해야함
const express = require("express");
//라우터를 사용하기 위해서는 express에서 Router기능을 불러와야한다
const router = express.Router();
//home.ctrl에서 보내준 모듈 받아오기 위해 선언
const ctrl = require("./home.ctrl")

router.get("/", ctrl.output.home);//루트 경로를 만드는 것. 파라미터로 콜백함수를 넣어줌

router.get("/login", ctrl.output.login)
//라우트의 기능을 하는 것들을 몽땅 가지고 옴
//app.js는 아직 index.js를 알지 못하기 때문에 외부에서 사용할수 있도록 던져주어야함
router.get("/register", ctrl.output.register);
router.post("/login", ctrl.process.login)

module.exports = router;