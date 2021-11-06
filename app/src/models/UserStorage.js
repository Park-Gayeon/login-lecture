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
    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKey = Object.keys(users); // => [id, psword, name]
        const userInfo = usersKey.reduce((newUser, info)=>{
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }
    static save(userInfo){
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        return { success : true};
    }
}

module.exports = UserStorage;