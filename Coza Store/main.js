$(".img-box").mouseover(function () {
    $(this).children().find(".sekilalti").css("top","83%")
})
$(".img-box").mouseleave(function () {
    $(this).children().find(".sekilalti").css("top","100%")
})
$(".fltbtn").click(function (e) { 
    e.preventDefault();
    if($(".filtersec").css("visibility")=="hidden"){
        $(".filtersec").css({"visibility":"visible","height":"194px"});

    }else{
        $(".filtersec").css({"visibility":"hidden","height":"0px"});

    }
});