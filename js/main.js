// scroll img


// scrollY up
let span = document.querySelector(".up");

window.onscroll = function (){
    // scroll up
    if(this.scrollY >= 300){

        span.classList.add("show");
    }else{
        span.classList.remove("show");
    }
};

span.onclick = function (){
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
}




function revealFunction (){
    window.sr = ScrollReveal({duration:1350, distance:'250px',
    easing:'ease-out'});
    sr.reveal('.reveal-left',{origin:'left', reset:false});
    sr.reveal('.reveal-right',{origin:'right', reset:false});
    sr.reveal('.reveal-left',{origin:'left', reset:false});
    sr.reveal('.reveal-reset-true',{origin:'top', reset:true});
    sr.reveal('.reveal-reset-bottom',{origin:'bottom', reset:true});
    sr.reveal('.reveal-rotate',{origin:'bottom', rotate:{x:1000, z:1000},
    reset:true
});

}

window.addEventListener('load',()=>{
    revealFunction();
})



