/**
 * Created by 良敏 on 2017/2/6.
 */
$(document).ready(function () {
    $(".main>a").click(function () {
        var ulNode = $(this).next("ul");
        /*if(ulNode.css("display")=="none"){
            ulNode.css("display","block");
        }else {
            ulNode.css("display","none");
        }*/

        // ulNode.hide();
        // ulNode.show();
        // ulNode.toggle("normal");//参数：数字、slow、fast、normal
        // ulNode.slideDown();
        // ulNode.slideUp;
        ulNode.slideToggle();
        changeIcon($(this));
    });

    $(".hmain").hover(function () {
        $(this).children("ul").slideDown();
        changeIcon($(this).children());
    },function () {
        $(this).children("ul").slideUp();
        changeIcon($(this).children());
    })

});

function changeIcon(mainNode) {
    if(mainNode){
        if(mainNode.css("background-image").indexOf("3.png")>=0){
            mainNode.css("background-image","url('image/2.png')");
        }else{
            mainNode.css("background-image","url('image/3.png')");
        }
    }
}