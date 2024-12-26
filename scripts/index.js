import { navlink } from "./nav.js";
console.log(navlink)
let cont=document.getElementById("nav")
cont.innerHTML=navlink

let form=document.getElementById("form")
let email=form.email.value;
let pass=form.pass.value;
let log=form.login
log.addEventListener("click",function(){
    console.log("click")
})
// loginbtn.addEventListener("click",function(){
    // let email=document.getElementById("email");
    // let pass=document.getElementById("pass");
    // console.log("clicked")
    
    // if (email && pass){
    //     alert("Login Success, you are redirecting to quiz page")
    // }else{
    //     alert("please enter valid credentials")
    // })

