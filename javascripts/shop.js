function openModal() {
    var modalOverlay = document.getElementById('modalOverlay');
    modalOverlay.style.display = 'flex';
  }

  function closeModal(event) {
    if (event.target === event.currentTarget) {
      var modalOverlay = document.getElementById('modalOverlay');
      modalOverlay.style.display = 'none';
    }
  }

  function openModalFav() {
    var modalOverlay = document.getElementById('modalOverlayFav');
    modalOverlay.style.display = 'flex';
  }

  function closeModalFav(event) {
    if (event.target === event.currentTarget) {
      var modalOverlay = document.getElementById('modalOverlayFav');
      modalOverlay.style.display = 'none';
    }
  }
  
  
      // Функция для добавления товара в корзину
      function addToCart(item) {
      var cartItems = document.getElementById('cartItems');
      
      // Проверка наличия текста "Your Cart is Empty" перед его удалением
      if (cartItems.textContent === "Your Cart is Empty") {
        cartItems.textContent = "";
      }
      
        var newItem = document.createElement('p');
        newItem.textContent = item;
        cartItems.appendChild(newItem);
        var cartBadge = document.getElementById('cartBadge');
        cartBadge.textContent = parseInt(cartBadge.textContent) + 1;
      }

      // Функция для добавления товара в избранные
      function addToFav(item) {
        var favItems = document.getElementById('FavItems');
        
        // Проверка наличия текста "Your Cart is Empty" перед его удалением
        if (favItems.textContent === "Put Here your Favourite Products") {
          favItems.textContent = "";
        }
        
          var newItem = document.createElement('p');
          newItem.textContent = item;
          favItems.appendChild(newItem);
          var favBadge = document.getElementById('favBadge');
          favBadge.textContent = parseInt(favBadge.textContent) + 1;
        }

  
      // Функция для удаления товара из корзины
      function dropCart(event) {
      var cartItems = document.getElementById('cartItems');

      cartItems.innerHTML = "";
      cartItems.textContent = "Your Cart is Empty";
        
      var nameInput = document.getElementById('nameInput');
      var phoneInput = document.getElementById('phoneInput');
      var nameError = document.getElementById('nameError');
      var phoneError = document.getElementById('phoneError');
        
      nameInput.value = "";
      phoneInput.value = "";
      nameError.style.display = 'none';
      phoneError.style.display = 'none';

      var cartBadge = document.getElementById('cartBadge');
      cartBadge.textContent = "0";
      }
  
      function openModal() {
        var modalOverlay = document.getElementById('modalOverlay');
        modalOverlay.style.display = 'flex';
      }
  
      function closeModal(event) {
        if (event.target === event.currentTarget) {
          var modalOverlay = document.getElementById('modalOverlay');
          modalOverlay.style.display = 'none';
        }
      }
  
      //Функция для оформления заказа
      function sendOffer(event) {
        var cartItems = document.getElementById('cartItems');
        var nameInput = document.getElementById('nameInput');
        var phoneInput = document.getElementById('phoneInput');
      
        // Проверка наличия товаров в корзине
        if (cartItems.textContent === "Your Cart is Empty")
      
        // Вывод информации в консоль
        console.log("Заказчик: " + nameInput.value + "\nНомер: " + phoneInput.value + "\nЗаказ: " + cartItems.textContent);
        
        var modalOverlay = document.getElementById('modalOverlay');
        modalOverlay.style.display = 'none';

      }
  
        function buttonclick(itemName) {
        // Добавление товара в корзину
        addToCart(itemName);
      }

        function buttonclickFav(itemName) {
          // Добавление товара в корзину
          addToFav(itemName);
        }