"use strict"

const home = (req, res) =>{
    //루트경로로 들어오면 나는 ~한 기능을 해주겠다.
    res.render("home/index"); //아예 홈폴더를 views로 지정해 주었기 때문에 이렇게 써도 됨
    //ejs의 파일로 응답을 해 주겠다 render
    //어떤 요청인지는 모르겠지만 이렇게 응답을 해주겠다
};
const login = (req, res) => {
    res.render("home/login");
};//로그인 경로로 들어가면 그 클라이언트(페이지)에 서버가 전송하는 값을 받음

module.exports = {
    home, 
    login
};//object형식으로 외부로 보내줌
//object = { key : value}/ key를 하나만 넣어주면 key와 같은 value로 넘겨줌
