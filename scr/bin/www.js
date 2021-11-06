//서버를 띄워주는 코드
"use strict"

const app = require("../app");
const PORT = 3000;

app.listen(PORT, () =>{
    console.log("서버가동")
}); //listen이라는 명령어로 서버를 띄운다, 두번째 파라미터로 콜백함수르 띄운다