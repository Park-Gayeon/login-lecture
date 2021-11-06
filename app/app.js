"use strict";
//모듈
const express = require("express");
const app = express(); //app이라는 변수에 express를 넣는다
//라우팅
const home = require("./src/routes/home");//home을 명시해줌

//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs"); //view engine을 ejs로
app.use(express.static(`${__dirname}/src/public`));

//index.js에서 사용가능하게 던져준 것들을 받아온다
//use는 미들웨어를 등록해주는 메서드
app.use("/", home);//루트 경로로 들어오면 home으로 보내주겠다.

module.exports = app;
//하지만 root 경로를 찾을 수가 없으니 만들어 주어야 함! 
//서버가 잘연결 되지 않으면 서버에 연결할 수 없다는 페이지가 나옴
//현재까지 서버를 만들었음 localhost:3000접속 했을 때 Cannot Get/ 은 서버가 잘 켜진것,





// const http = require("http");//http는 내장모듈 
// const app = http.createServer((req,res) => {

//     res.writeHead(200, {"Content-type": "text/html; charset=utf-8"});
    
//     //console.log(req.url); //루트경로 이후의 url을 파싱해 와서 터미널 콘솔창에 받아옴
//     if(req.url === "/"){
//         res.end("여기는 루트입니다.")
//     }else if (req.url ==="/login"){
//         res.end("여기는 로그인 화면입니다")
//     }
// });

// app.listen(3001, () =>{
//     console.log("http로 가동된 서버입니다.")
// });

//express를 이용하는 이유!!!!!!!!!!!! 굉장히 불편하다라는 것을 알수 있음
