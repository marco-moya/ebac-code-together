// Clase que contiene las propiedades deL producto.
class Product {
  constructor (name, price, image) {
    this.name = name;
    this.price = price;
    this.image = image;
  }
}

// Array que contiene como valores una instacia de la clase Product.
const arrProducts = [
  new Product("Jersey México 2023", 1000, "./img/Jersey_Local_Seleccion_Nacional.jpg"),
  new Product("Chamarra Adidas Special", 2000, "./img/Chamarra_Deportiva_Ajustada_AERO.jpg"),
  new Product("Adidas LG2", 2300, "./img/Zapatillas_LG2_SPZL_Blanco_IF835.jpg"),
  new Product("Pants Train Essentials 3-Stripes", 999, "./img/pants_train.jpg"),
  new Product("Calcetines a Media Pantorrilla 3 Pares", 299, "./img/Calcetines_a_Media_Pantorrilla_3.jpg"),
  new Product("Mochila Monograma", 799, "./img/Mochila_Monograma_Beige_IX7463_0.jpg"),
  new Product("Gorra de Béisbol adidas x FARM Rio", 549,"./img/Gorra_de_Beisbol_adidas_x_FARM_R.jpg"),
  new Product("Bandas de Entrenamiento para Cabeza Paquete de 3", 349, "./img/Bandas_de_Entrenamiento_para_Cab.jpg"),
  new Product("Balón UCL League 24/25 League Phase", 1099, "./img/Balon_UCL_League_24-25_League_Ph.jpg"),
  new Product("Porta Botella Running", 649, "./img/Porta_Botella_Running_Negro_IT20.jpg"),
  new Product("Cinturón Braided Stretch", 899, "./img/Cinturon_Braided_Stretch_Gris_HZ.jpg"),
  new Product("Balón de Básquet de Caucho X 3 Franjas", 399, "./img/Balon_de_Basquet_de_Caucho_X_3_F.jpg"),
  new Product("Gorro Pescador Adicolor Trifolio", 649, "./img/Gorro_Pescador_Adicolor_Trifolio.jpg"),
  new Product("Guante Aditech 24 Single", 399, "./img/Guante_Aditech_24_Single_Blanco.jpg"),

];

const $nav = document.getElementById("nav"),
  $template = document.getElementById("products-template").content,
  $produtcContent = document.querySelector(".products"),
  $fragment = document.createDocumentFragment(),
  $fragmentCart = document.createDocumentFragment(),
  $cart = document.querySelector(".cart"),
  $cartItems = document.querySelector(".cart__items"),
  $templateCart = document.getElementById("cart__template").content,
  arrCart = [];

// Crear cada una de las cards de forma dinamica. 
arrProducts.forEach((product) => {
  $template.querySelector("img").setAttribute("src", product.image);
  $template.querySelector("img").setAttribute("alt", product.name);
  $template.querySelector("h3").textContent = product.name;
  $template.querySelector("p").textContent = `$${product.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  let $clone = document.importNode($template, true);
  
  const $buttonAddToCart = $clone.querySelector("button");
  
  // Añadir evento de clic para agregar al carrito
  $buttonAddToCart.addEventListener("click", () => {
    addToCart(product);
  });

  $fragment.appendChild($clone);
})

// Inserta el fragment con todas las cards en el DOM.
$produtcContent.appendChild($fragment);

// Función para agregar un producto al carrito
function addToCart(product) {
  arrCart.push(product);
  updateCart();
}

// Función para eliminar un producto del carrito
function removeFromCart(index) {
  arrCart.splice(index, 1); // Eliminar el producto por su índice en el array
  updateCart();
}

// Función para actualizar el carrito en el DOM
function updateCart() {
  $cartItems.innerHTML = ''; // Limpiar el contenido anterior.
  
  arrCart.forEach((item, index) => {
    $templateCart.querySelector("img").setAttribute("src", item.image);
    $templateCart.querySelector("img").setAttribute("alt", item.name);
    $templateCart.querySelector("p").textContent = item.name;
    $templateCart.querySelector(".cart__product-price").textContent = `$${item.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    
    let $cloneCart = document.importNode($templateCart, true);

    const $deleteIcon = $cloneCart.querySelector('.cart__icon-delete');

    $fragmentCart.appendChild($cloneCart);
    $cartItems.appendChild($fragmentCart);
    
    // Añadir evento de clic para eliminar producto
    $deleteIcon.addEventListener('click', () => {
      removeFromCart(index);
    });
  });
  addBadge();
}

// Función para agregar el badge cuando exista al menos un producto.
function addBadge() {
  const $badge = document.querySelector(".badge");
  if (arrCart.length >= 1) {
    $badge.style.setProperty("display", "block");
    $badge.textContent = arrCart.length;
  } else {
    $badge.style.setProperty("display", "none");
  }
}


document.addEventListener("click", (e) => {
  if (e.target.matches(".header__icon-menu")){
    $nav.classList.add("nav__show");
  }

  if (e.target.matches(".nav__icon-close")){
    $nav.classList.remove("nav__show");
  }

  if (e.target.matches(".header__icon-cart") || e.target.matches(".badge")) {
    $cart.classList.add("cart__show");
  }

  if(e.target.matches(".cart__icon-close")) {
    $cart.classList.remove("cart__show");
  }
})