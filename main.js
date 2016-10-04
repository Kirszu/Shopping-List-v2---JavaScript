$(function() {
  // Lista zakupów niby z serwera
  var listaZakupow = [
    {
      id: 0,
      nazwa: 'Jajka',
      kupiony: false
    },
    {
      id: 1,
      nazwa: 'Mleko',
      kupiony: true
    },
    {
      id: 2,
      nazwa: 'Makaron',
      kupiony: false
    }
  ]

  // Elementy ze strony
  var $listaZakupow = $('ul')
  var $formularz = $('form')
  var $poleInput = $('input')
  var $button = $('button')

  // Pętla tworzaca elementy z powyższej tablicy i wyświetlajaca
  // je na stronie
  for (var i = 0; i < listaZakupow.length; i++) {
    var $przedmiot = $('<li />', {
      text: listaZakupow[i].nazwa,
      class: listaZakupow[i].kupiony ? 'kupiony' : ''
    })
    var $button = $('<button />', { text: 'X' })

    $przedmiot.append($button)
    $listaZakupow.append($przedmiot)
  }

  // Po wysłaniu formularza...
  $formularz.on('submit', function (e) {
    // Zapobiegnij domyślnej akcji
    e.preventDefault()
    // Pobierz wartość formularza
    var wartoscFormularza = $poleInput.val()
    // Sprawdzamy czy wartośc formularza jest pusta
    // ! to to samo co np. wartoscFormularza == ''
    if (!wartoscFormularza) return
    // Utwórz nowy elemnt <li />
    var $nowyProdukt = $('<li />', { text: wartoscFormularza })
    // Dodaj go do list-style
    $listaZakupow.append($nowyProdukt)
    // Wyczyść pole input
    $poleInput.val('')
  })

  // Po kliknięciu zmień status przedmiotu
  $listaZakupow.on('click', 'li', function() {
    $(this).toggleClass('kupiony')
  })
  // nasłuchuj ul kliknięcia na buttonie i odpal funkcję ktora pobierze z buttona rodzica i go usunie
  $listaZakupow.on('click', 'button', function() {
    $(this).parent().remove()
  })

})
