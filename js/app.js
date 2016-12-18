uc = $("#uc");
t1 = $("#t1");
uc.ready(function(){
    setTimeout(function(){
            uc.fadeOut(1500);
            console.log("somw");

    },2000);
    setTimeout(function(){
            t1.fadeIn(1000);
            console.log("somw111");
    },4000);
});