//Funkcja, ktora sie wywola sie po otwarciu strony
$(function() {
  //Nasluchiwanie elementow w liscie
  $("li").click(function(){
    //this ubieramy w jQuery i togglujemy go
    $(this).toggleClass("przekreslenie")
    // Powyzsze rowna sie ponizszemu
    /*
    if ($(this).hasClass("przekreslenie")) {
      $(this).removeClass("przekreslenie")
    } else {
      $(this).addClass("przekreslenie")
    }
    */
  })

})
