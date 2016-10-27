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
  var $produkt = $('span')
  var $kupiony = $('.kupiony')
  
  var $przyciskiKasacji = $('.delete-section')
  var $usunCalosc = $('.delete-section__button-all')
  var $usunZaznaczone = $('.delete-section__button-checked')
  var $wyswietlListe = $('.btn')  
  

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
  $listaZakupow.on('click', '.delete', function(e) {
      e.stopPropagation()
    $(this).parent().fadeOut(500, function() {
        $(this).remove()
    })
  })
  
  
  // Edycja nazwy produktu po kliknięciu ołówka edycji http://jsfiddle.net/vh5GR/
  $listaZakupow.on('click', '.edit', function(e) {
      e.stopPropagation()
            
          var $this = $(this)
          if($this.attr('editing') != '1') {
              $this.attr('editing', 1)
              var $input = $('<input type="text" class="editing" />').val($this.siblings('span').text())
              $this.siblings('span').replaceWith($input)
              $input.click(function(e) {
                  e.stopPropagation()
              })
          } else {
              $this.removeAttr('editing')
              var span = $('<span />').text($(this).siblings('input.editing').val())
              $(this).siblings('input.editing').replaceWith(span)
          }
  })


  // Usunięcie zaznaczonych
  $usunZaznaczone.click(function() {      
        // Animacja znikania zaznaczonych       
       $('.kupiony').fadeOut(500, function() {
            $kupiony.remove()
        })               
  })
  // usunięcie całości
  $usunCalosc.click(function() {
     // Dodanie animacji znikania listy
     $listaZakupow.children().fadeOut(500, function() {
          $listaZakupow.empty()   
       })
   })
  // Wyświetl listę json
  $wyswietlListe.click(function() {
      var myArray = []      
      $('span').each(function() {          
          myArray.push({
              "id": $(this).index(),
              "nazwa": $(this).text(),
              "kupiony": $(this).parent().is('.kupiony')
          })
      })
      console.log(myArray)
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
  // Utwórz przycisk edycji
  var $edit = $('<button class="edit" type="submit"><i class="fa fa-pencil-square-o" aria-hidden="true" /></button>')
  // Utwórz przycisk
  var $button = $('<button />', { text: 'X' })  
  // Dodaj przycisk do elementu li
  $przedmiot.append($span).append($button.addClass('delete')).append($edit)
  // Zwróc całość
  return $przedmiot
}


