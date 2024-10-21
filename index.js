
let bars=document.getElementById('bars');
let ul=document.querySelector('.ul');
bars.addEventListener('click',()=>{
ul.classList.toggle("add");
ham=bars.firstElementChild;
if(ul.classList.contains('add')){
    ham.classList.replace('fa-bars','fa-xmark');
}
else{
    ham.classList.replace('fa-xmark','fa-bars');
}
})

function db(){
fetch("resume.pdf").then(res=> res.blob()).then(file=>{
 let tem=URL.createObjectURL(file);
 let a=document.createElement("a");
 a.href=tem;
 a.download="resume.pdf";
 document.body.appendChild(a);
 a.click();
 a.remove();
 URL.revokeObjectURL(tem);
})


}

btn.addEventListener('click',()=>{
    db();
})

let contact=document.querySelector('.contact');
let info=document.querySelector('.info');
let close=document.getElementById('close');

info.addEventListener('click',()=>{
    contact.style.top="50%";
})
close.addEventListener('click',()=>{
    contact.style.top="-80%";
})

function fun(){

    
}