$(function(){
    $(".nav-center ul li").click(function(){
        $(this).addClass("bottom-line").siblings().removeClass("bottom-line");
    });
    $(".firstary-font").click(function(){
        $(this).children(".secondary-menu").toggleClass("displaynone");
        $(this).siblings(".firstary-font").children(".secondary-menu").addClass("displaynone")
    });
    $(".species-topic .tab-item").eq(0).click(function(){
        $(this).siblings(".blue-line").animate({"left":"20px"});
        // $(tabcont:not(eq(_index))).css("display","none");
    });
    $(".species-topic .tab-item").eq(1).click(function(){
        $(this).siblings(".blue-line").animate({"left":"212px"});
    });
    $(".species-topic .tab-item").click(function(){
        var _index = $(this).index(".tab-item");
        // console.log(_index);
        // var tabcont = $(this).parents(".tab").children(".tab-cont");
        $(this).parents(".tab").children(".select-tab .tab-cont").eq(_index).css("display","block");
    });
})
