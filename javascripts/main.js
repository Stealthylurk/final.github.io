//navigation bar background changing when scroll
const navEL = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
        navEL.classList.add('navbar-scrolled')
    } else if (window.scrollY < 50) {
        navEL.classList.remove('navbar-scrolled');
    }
})

// Извлечение сообщения из localStorage
const gameMessage = localStorage.getItem('gameMessage');

// Проверка, было ли сообщение получено со страницы game.html
if (gameMessage) {
  console.log(gameMessage);
  
  // Удаление сообщения из localStorage после его использования
  localStorage.removeItem('gameMessage');
}

// Инициализация маски для поля ввода номера телефона
$(document).ready(function() {
  $('input[type="tel"]').inputmask();
});

//smooth scrool between the sections when the related link is clicked
$(document).ready(function() {
    $('a[href^="#"]').click(function() {
      var target = $(this.hash);
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 50
        }, 1200);
        return false;
      }
    });
  });

  //AboutUs slider script
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      grabCursor: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    // Прослушивание события нажатия клавиш на странице
    document.addEventListener("keydown", function (event) {
      // Проверка нажатия клавиши влево
      if (event.key === "ArrowLeft") {
        swiper.slidePrev(); // Переключение на предыдущий слайд
      }
      // Проверка нажатия клавиши вправо
      else if (event.key === "ArrowRight") {
        swiper.slideNext(); // Переключение на следующий слайд
      }
    });

    function openModal(modalId) {
      var modal = document.getElementById(modalId);
      modal.style.display = "block";
  }

  function closeModal(modalId) {
      var modal = document.getElementById(modalId);
      modal.style.display = "none";
  }

  function switchModal(currentModalId, targetModalId) {
      var currentModal = document.getElementById(currentModalId);
      var targetModal = document.getElementById(targetModalId);
      currentModal.style.display = "none";
      targetModal.style.display = "block";
  }

  window.onclick = function(event) {
      var modalRegistration = document.getElementById("myModalRegistration");
      if (event.target == modalRegistration) {
          modalRegistration.style.display = "none";
      }

      var modalLogin = document.getElementById("myModalLogin");
      if (event.target == modalLogin) {
          modalLogin.style.display = "none";
      }
  };

  function showAlertReg() {
  

  // Получение значений полей формы
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phoneInput').value;
  var password = document.getElementById('password').value;

  // Создание элемента оповещения
  var alertElement = document.createElement('div');
  alertElement.classList.add('notification', 'alert', 'alert-success');
  alertElement.textContent = 'You have Registered!';
  document.body.appendChild(alertElement);
  
  // Закрытие оповещения через 3 секунды
  setTimeout(function() {
    $(alertElement).fadeOut('slow', function() {
      alertElement.remove();

  // Вывод значений полей в консоль после удаления оповещения
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Phone:', phone);
  console.log('Password:', password);

    });
  }, 3000);

  closeModal('myModalRegistration');

  }

  function showAlertLog() {

    // Создание элемента оповещения
    var alertElement = document.createElement('div');
    alertElement.classList.add('notification', 'alert', 'alert-success');
    alertElement.textContent = 'You have Logged in!';
    document.body.appendChild(alertElement);
    
    // Закрытие оповещения через 3 секунды
    setTimeout(function() {
      $(alertElement).fadeOut('slow', function() {
        alertElement.remove();
      });
    }, 3000);

    closeModal('myModalLogin');
  
    }

  