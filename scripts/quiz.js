import { navlink } from "./nav.js";
console.log(navlink)
let cont=document.getElementById("nav")
cont.innerHTML=navlink;

let addbtn=document.getElementById("add")

function postdata(){
    let form=document.getElementById('form')
    let ques=form.ques.value;
    let opt1=form.opt1.value;
    let opt2=form.opt2.value;
    let opt3=form.opt3.value;
    let opt4=form.opt4.value;
    let correct=form.correct.value;
    let newques={ques,opt1,opt2,opt3,opt4,correct}
    let addbtn=document.getElementById("add")
    let res= fetch("localhost:3000/newquestions",{
        method:"PATCH",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({newques})               
    })
    



}
addbtn.addEventListener("click",function(){
     let data=postdata()
     console.log(data)
})

