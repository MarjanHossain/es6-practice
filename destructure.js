const person ={name:"jack william", age : 19, job :"youtuber", gf:'Ema Watson', address:"check-post",phone:01302160177,friends:["tom cruise","jack","tom hanks"]};
const {gf,phone,village}= person;
console.log(gf,phone,village);


const friends =["sharukh","amir","salman sah","riaj"];
const [firstFriend, ...oldfriend ]=friends;
console.log(firstFriend,oldfriend);

const complexObject={
    name:"tansif",
    info:{
        address:"kolabagan",
        leader : "tiger"
    }
}
const {leader}= complexObject.info;
console.log(leader);