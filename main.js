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
    // Iteracja po elementach tablicy
  for (var indekz = 0; indekz < listaZSerwera.length; indekz++) {
    $("ul") // 1. Pobierz element <ul> z DOMu
      .append( // 2. Dodaj do niego...
        $("<li>") // 3. Element <li> i...
          .text(listaZSerwera[indekz].nazwa) // 4. Nadaj mu nazwę bedącą parametrem z obiektu
      )
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

  $('.formularz').submit(function(e) {
    e.preventDefault();
  })

})
