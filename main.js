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
  var $zakupy = $('li')
  
  
  var $przyciskiKasacji = $('.delete-section')
  var $usunCalosc = $('.delete-section__button-all')
  var $usunZaznaczone = $('.delete-section__button-checked')

  // Pętla tworzaca elementy z powyższej tablicy i wyświetlajaca
  // je na stronie
  for (var i = 0; i < listaZakupow.length; i++) {
    $listaZakupow.append(dodawaniePrzedmiotu(listaZakupow[i].nazwa, listaZakupow[i].kupiony))
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
    // Dodaj go do listy
    // Dodanie animacji do dodania przedmiotu do listy. Do ostatniego dziecka listy zakupów dodaje przedmiot, domyślnie ukryty, po czym go animujemy do wyświetlenia.
    $listaZakupow.append(dodawaniePrzedmiotu(wartoscFormularza)).children(':last').hide().fadeIn(500);
    
    // Wyczyść pole input
    $poleInput.val('')
  })

  // Po kliknięciu zmień status przedmiotu
  $listaZakupow.on('click', 'li', function() {
    $(this).toggleClass('kupiony')
  })
  // nasłuchuj ul kliknięcia na buttonie i odpal funkcję ktora pobierze z buttona rodzica i go usunie
  // Dodanie do ununięcia przedmiotu animacji
  $listaZakupow.on('click', 'button', function() {
    $(this).parent().fadeOut()
  })  
  
  // Usunięcie zaznaczonych
  $usunZaznaczone.click(function(){
        var $kupiony = $('.kupiony')
        // Animacja znikania zaznaczonych
       $kupiony.fadeOut()
  })
  // usunięcie całości
  $usunCalosc.click(function() {
     // Dodanie animacji znikania listy
     $listaZakupow.children().fadeOut(500, function() {
          $listaZakupow.empty()   
       })
   })   

})

// Funkcja dodajaca przedmiot (element <li> z <button> w środku)
function dodawaniePrzedmiotu (nazwa, kupiony) {
  // Utwórz pole przedmiotu
  var $przedmiot = $('<li />', {
    //text: nazwa,    
    class: kupiony ? 'kupiony' : ''
  })
  // Utwórz przedmiot
  var $span = $('<span />', { text: nazwa })
  // Utwórz przycisk
  var $button = $('<button />', { text: 'X' })
  
  // Dodaj przycisk do elementu li
  $przedmiot.append($span).append($button)
  // Zwróc całość
  return $przedmiot
}


