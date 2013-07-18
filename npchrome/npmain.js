
function checkMenu() {
  if($(".side_menu").length > 0 && $(".side_menu").css("left")=="0px") {
    if($('#expandMenu').length == 0) {
      $(".side_menu").after(function(){
        newdiv = document.createElement('div');
        $(newdiv).addClass('col_accent')
          .addClass('toExpand')
          .html('>')
          .attr("id","expandMenu");
        $(newdiv).css({
          "position": "fixed",
          "left": "170px",
          "border-bottom-right-radius": "5px",
          "border-top-right-radius": "5px",
          "padding": "5px",
          "cursor": "pointer"
        });


        $(newdiv).on("click",function() {
          if($(this).hasClass('toExpand')) {
            expandMenu(this);
          } else {
            contractMenu(this);
          }
        });

        return newdiv;
      });

      contractMenu('#expandMenu');
    }
  } else {
    //$('#expandMenu').append(".");
    //if($("#expandMenu").css("left") == "20px") {
    //  if($(".side_menu").css("left") != "145px") {
    //    $(".side_menu").css("left","145px");
    //  }
    //}
  }

  if($('.minh72').length > 0) {
    $('.minh72').each(function(e){
      $(e).append('HELLO WORLD');
    });
  }
  t=setTimeout(checkMenu,1000);
}
function expandMenu(e) {
  $(".side_menu").animate({left:"0px"});
  $(e).animate({left:"170px"});
  $(e).removeClass('toExpand');
  $(e).html('<');
  $('.side_menu_item > .txt_center').animate({left:"0px"});
}
function contractMenu(e) {
  $(".side_menu").animate({left:"-145px"});
  $(e).animate({left:"20px"});
  $(e).addClass('toExpand');
  $(e).html('>');
  $('.side_menu_item > .txt_center').animate({left:"134px"});
}
t=setTimeout(checkMenu,1000);
//$.post("http://triton.ironhelmet.com/grequest/order",{"type":"order","order":"full_universe_report","game_number":6677440415924224,"version":NeptunesPride.version},function(e){},"json");

