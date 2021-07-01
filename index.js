$(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
    $('.topnav').addClass('bg-white scroll-nav text-black')
    $('.link').addClass('text-black')
    $('.image').addClass('invert')
    } else {
    $('.topnav').removeClass('bg-white scroll-nav text-black' )
    $('.link').removeClass('text-black')
    $('.image').removeClass('invert')
    }
});




$(document).ready(function(){
     document.getElementById("defaultOpen").click();
      $.ajax({
        url: '../ajax/tab1.json',
        method: 'GET',
        success: function(res) {
          var dati = res;
          console.log(res)
          document.getElementById("defaultOpen").innerHTML = dati.item.title
          document.getElementById("tabonetext").innerHTML = dati.item.content
        },
        error: function() {
          console.log('Si è verificato un errore');
        }
      });
      $.ajax({
        url: '../ajax/tab2.json',
        method: 'GET',
        success: function(res) {
          var dati = res;
          console.log(res)
          document.getElementById("titletwo").innerHTML = dati.item.title
          document.getElementById("tabtwotext").innerHTML = dati.item.content
        },
        error: function() {
          console.log('Si è verificato un errore');
        }
      });
      $.ajax({
        url: '../ajax/tab3.json',
        method: 'GET',
        success: function(res) {
          var dati = res;
          console.log(res)
          document.getElementById("titlethree").innerHTML = dati.item.title
          document.getElementById("tabthreetext").innerHTML = dati.item.content
        },
        error: function() {
          console.log('Si è verificato un errore');
        }
      });
});

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  
  