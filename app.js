

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
   
