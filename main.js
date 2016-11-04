//Funkcja, ktora sie wywola sie po otwarciu strony
$(function() {

  var listaZSerwera = [
    {
      id: 0,
      nazwa: 'Masło',
      kupiony: true
    },
    {
      id: 1,
      nazwa: 'Piwo',
      kupiony: false
    },
    {
      id: 2,
      nazwa: 'Makaron',
      kupiony: false
    }
  ]

  for (var indekz = 0; indekz < listaZSerwera.length; indekz++) {
    $("ul").append($("<li>").text(listaZSerwera[indekz].nazwa))
  }

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
