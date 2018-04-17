/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

$(document).ready(function(){
    $(".work-square").onmouseover(function(){
        $("img").fadeOut(1000, function(){
            alert("fadeOut() method is finished!");
        });
    });
    $(".work-square").onmouseout.function(){
        $("img").fadeIn(1000, function(){
            alert("fadeIn() method is finished!");
        });
    });
});
