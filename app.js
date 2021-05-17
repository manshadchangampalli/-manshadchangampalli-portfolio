

$(document).ready(function(){
$(window).scroll(function(){
    if(this.scrollY>150){
        $('.navbar').addClass("sticky");
    }else{
        $('.navbar').removeClass("sticky");
    }
})
})
$(document).ready(function(){
$(window).scroll(function(){
    if(this.scrollY>30){
        $('.navbar').addClass("mobile");
    }else{
        $('.navbar').removeClass("mobile");
    }
})
})
   
const email=document.querySelector("#email");
const icon1=document.querySelector(".icon1");
const icon2=document.querySelector(".icon2");
const error=document.querySelector(".error-text");
const btn=document.querySelector(".submit-btn");



let regexp =/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

function check(){
    if(email.value.match(regexp)){
        icon1.style.display="none" ;  
        icon2.style.display='block';
        error.style.display='none'; 
        
    }else{
         
        icon1.style.display="block" ;  
        icon2.style.display='none';
        error.style.display='block';  
    }
}