// <!--  Скрипт, открывающий/закрывающий попап от ссылки "Напишите нам!". 
//    --> 
   
      var link = document.querySelector(".btn-mail");
      var popup = document.querySelector(".modal-content");
      var close = popup.querySelector(".modal-content-close");

      link.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.add("modal-content-show");
      });

      close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("modal-content-show");
        popup.classList.remove("modal-error");
      });

      window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (popup.classList.contains("modal-content-show")) {
            popup.classList.remove("modal-content-show");
            popup.classList.remove("modal-error");
          }
        }
      });
		
//		  <!--  Скрипт, открывающий/закрывающий попап от ссылки "карта". 
//    -->
   
      var mapLink = document.querySelector(".btn-map");
      var mapPopup = document.querySelector(".modal-content-map");
      var mapClose = mapPopup.querySelector(".modal-content-close");

      mapLink.addEventListener("click", function(event) {
        event.preventDefault();
        mapPopup.classList.add("modal-content-map-show");
      });

      mapClose.addEventListener("click", function(event) {
        event.preventDefault();
        mapPopup.classList.remove("modal-content-map-show");
        mapPopup.classList.remove("modal-error");
      });

      window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (mapPopup.classList.contains("modal-content-map-show")) {
            mapPopup.classList.remove("modal-content-map-show");
            mapPopup.classList.remove("modal-error");
          }
        }
      });

//		  <!--  Скрипт, открывающий/закрывающий попап от ссылки "купить". 
//    -->

      var basketLink = document.querySelectorAll(".buy");
      var basketPopup = document.querySelector(".modal-content-basket");
      var basketClose = basketPopup.querySelector(".modal-content-close");

      basketLink.addEventListener("click", function(event) {
        event.preventDefault();
        basketPopup.classList.add("modal-content-basket-show");
      });

      basketClose.addEventListener("click", function(event) {
        event.preventDefault();
        basketPopup.classList.remove("modal-content-basket-show");
        basketPopup.classList.remove("modal-error");
      });

      window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (basketPopup.classList.contains("modal-content-basket-show")) {
            basketPopup.classList.remove("modal-content-basket-show");
            basketPopup.classList.remove("modal-error");
          }
        }
      });























































//
//
//var link = document.querySelector(".form-link");
//var popup = document.querySelector(".form");
//var formBtn = document.querySelector(".form-btn");
//var form = document.querySelector("form");
//var arrivalDate = document.querySelector("[name=arrival-date]");
//var dateOfDeparture = document.querySelector("[name=date-of-departure]");
//var adults = document.querySelector("[name=adults]");
//var children = document.querySelector("[name=children]");
//
//
//popup.classList.remove("form-show");
//popup.classList.remove("form-error");
//
//link.addEventListener("click", function(event) {
//  event.preventDefault();
//  popup.classList.toggle("form-show");
//});
//
//window.addEventListener("keydown", function(event) {
//  if (event.keyCode === 27) {
//    if (popup.classList.contains("form-show")) {
//      popup.classList.remove("form-show");
//      popup.classList.remove("form-error");
//    }
//  }
//});
//
//formBtn.addEventListener("click", function(event) {
//  event.preventDefault();
//  var valid = true;
//
//  if (!arrivalDate.value) {
//    valid = false;
//    addErrorDecoration(arrivalDate);
//  }
//  if (!dateOfDeparture.value) {
//    valid = false;
//    addErrorDecoration(dateOfDeparture);
//  }
//  if (!adults.value || typeof adults.value != 'number') {
//    valid = false;
//    addErrorDecoration(adults);
//  }
//  if (!children.value || typeof children.value != 'number') {
//    valid = false;
//    addErrorDecoration(children);
//  }
//
//  if (!valid) {
//    popup.offsetWidth = popup.offsetWidth;
//    if (!arrivalDate.value || !dateOfDeparture.value || !adults.value || !children.value) {
//      event.preventDefault();
//      popup.classList.remove("form-error");
//      popup.offsetWidth = popup.offsetWidth;
//      console.log("Нужно ввести значение");
//      popup.classList.add("form-error");
//    } else {
//      form.submit();
//    }
//
//    function addErrorDecoration(item) {
//      item.classList.add('input-error');
//      item.addEventListener('click', function() {
//        item.classList.remove('input-error');
//      });
//    }
//
//  }
//});
