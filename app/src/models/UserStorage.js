"use strict"

class UserStorage {
    static #users = { //static을 붙이면 userstorage 클래스 자체에서 users에 자체적으로 접근 가능
    id : ["gay0830", "나개발", "김팀장"],
    psword : ["1234", "1234","12345"],
    name : ["우리밋","나개발","김팀장"]
};

    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) =>{
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;