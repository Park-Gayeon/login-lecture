"use strict";

//dom => 일종의 인터페이스 객체 html 존재하는 데이터들을 가져와서 제어할 수 있음
const id = document.querySelector("#id"),
psword = document.querySelector("#psword"),
loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login(){
    const req = {
        id : id.value,
        psword : psword.value,
    };
    fetch("/login", {
        method: "POST",
        headers:{
            "content-Type":"application/json"
        },
        body: JSON.stringify(req)
    })
};
