"use strict";

//dom => 일종의 인터페이스 객체 html 존재하는 데이터들을 가져와서 제어할 수 있음
const id = document.querySelector("#id"),
name = document.querySelector("#name"),
psword = document.querySelector("#psword"),
confirmPsword = document.querySelector("#confirm-psword"),
registerBtn = document.querySelector("#btn");

registerBtn.addEventListener("click", register);

function register(){
    if(!id.value) return alert("아이디를 입력해 주십시오.");
    if (psword.value !== confirmPsword.value) return alert("비밀번호가 일치하지 않습니다.");
    

    const req = {
        id : id.value,
        name : name.value,
        psword : psword.value,

    };

    fetch("/register", {
        method: "POST",
        headers:{
            "content-Type":"application/json"
        },
        body: JSON.stringify(req)
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success){
            location.href = "/login";
        }else{
            alert(res.msg);
        }
    })
    .catch((err)=>{
        console.error(new Error("회원가입 중 에러 발생"));
    });
};
