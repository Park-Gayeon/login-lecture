"use strict"

const UserStorage = require("../../models/UserStorage");

const output = {
    home : (req, res) =>{
        //루트경로로 들어오면 나는 ~한 기능을 해주겠다.
        res.render("home/index"); //아예 홈폴더를 views로 지정해 주었기 때문에 이렇게 써도 됨
        //ejs의 파일로 응답을 해 주겠다 render
        //어떤 요청인지는 모르겠지만 이렇게 응답을 해주겠다
    },
    login : (req, res) => {
        res.render("home/login");
    },//로그인 경로로 들어가면 그 클라이언트(페이지)에 서버가 전송하는 값을 받음
    
};

const process = {
    login:(req, res) => {
        const id = req.body.id,
        psword = req.body.psword;

        const users = UserStorage.getUsers("id","psword");
        const response = {};
        if (users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.psword[idx] === psword){
                response.success = true;
                return res.json(response);
            }
        }
        response.success = false;
        response.msg = "로그인에 실패하셨습니다."
        return res.json(response);
    },
};

module.exports = {
    output,
    process
};//object형식으로 외부로 보내줌
//object = { key : value}/ key를 하나만 넣어주면 key와 같은 value로 넘겨줌
