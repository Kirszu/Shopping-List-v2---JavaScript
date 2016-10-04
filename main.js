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

  // Pętla tworzaca elementy z powyższej tablicy i wyświetlajaca
  // je na stronie
  for (var i = 0; i < listaZakupow.length; i++) {
    $listaZakupow.append(
      $('<li />', {
        text: listaZakupow[i].nazwa,
        class: listaZakupow[i].kupiony ? 'kupiony' : ''
      })
    )
  }

  // Po wysłaniu formularza...
  $formularz.on('submit', function (e) {
    // Zapobiegnij domyślnej akcji
    e.preventDefault()
    // Pobierz wartość formularza
    var wartoscFormularza = $poleInput.val()
    // Utwórz nowy elemnt <li />
    var $nowyProdukt = $('<li />', { text: wartoscFormularza })
    // Dodaj go do list-style
    $listaZakupow.append($nowyProdukt)
    // Wyczyść pole input
    $poleInput.val('')
  })
})
