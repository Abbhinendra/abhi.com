
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

function contacForm() {
    let names = document.getElementById('name');
    let number = document.getElementById('number');
    
    // Validate name does not contain numbers and is at least 3 characters long
    if (/[\d]/.test(names.value)) {
        Swal.fire({
            title: 'Error!',
            text: 'Name should not contain numeric values!',
            icon: 'error',
            confirmButtonText: 'Try Again'
        });
        return false;
    }
    
    if (names.value.trim().length < 3) {
        Swal.fire({
            title: 'Error!',
            text: 'Name must be at least 3 characters long!',
            icon: 'error',
            confirmButtonText: 'Try Again'
        });
        return false;
    }
    
    // Validate phone number contains only digits and is exactly 10 characters long
    if (!/^\d{10}$/.test(number.value)) {
        Swal.fire({
            title: 'Error!',
            text: 'Phone number must contain exactly 10 digits!',
            icon: 'error',
            confirmButtonText: 'Try Again'
        });
        return false;
    }

    Swal.fire({
        title: 'Success!',
        text: ' Your message submited successfully!',
        icon: 'success',
        confirmButtonText: 'Ok'
    });
    return true;
}