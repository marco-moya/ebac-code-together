# 🛒 Tienda Adidas - E-commerce

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![SASS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📋 Descripción del Proyecto

Tienda online de productos deportivos Adidas, desarrollada como práctica del curso EBAC Code Together. Es una aplicación web dinámica, responsiva y funcional que simula una experiencia de e-commerce completa.

### Características principales:
- ✅ Catálogo de productos renderizado dinámicamente
- ✅ Carrito de compras funcional con persistencia en Local Storage
- ✅ Diseño responsive adaptable a diferentes dispositivos
- ✅ Menú de navegación lateral animado
- ✅ Botón de scroll to top
- ✅ Badge dinámico que muestra cantidad de productos en el carrito

## 🔗 Demo

- **Live Site:** [GitHub Pages](https://marco-moya.github.io/ebac-code-together/)

## 🛠️ Tecnologías Utilizadas

| Tecnología | Uso |
|------------|-----|
| **HTML5** | Estructura semántica de la página |
| **CSS3** | Estilos base y diseño responsive |
| **SASS** | Preprocesador CSS con variables, mixins y anidación |
| **JavaScript (ES6+)** | Lógica del carrito, renderizado dinámico, interactividad |
| **Google Fonts** | Tipografías Lexend y Montagu Slab |
| **Local Storage** | Persistencia de datos del carrito |

## 📦 Instalación

### Prerrequisitos
- [Node.js](https://nodejs.org/) (v14 o superior)
- npm (incluido con Node.js)

### Pasos de instalación

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/marco-moya/ebac-code-together.git
   ```

2. **Navegar al directorio del proyecto:**
   ```bash
   cd ebac-code-together
   ```

3. **Instalar dependencias:**
   ```bash
   npm install
   ```

4. **Compilar SASS (opcional):**
   ```bash
   npx sass sass/style.scss css/style.css --watch
   ```

5. **Abrir `index.html` en tu navegador** o usar una extensión como Live Server.

## 🚀 Uso

### Navegación básica

1. **Ver productos:** Al cargar la página, se muestra el catálogo completo de productos deportivos.

2. **Agregar al carrito:** Haz clic en el botón "+" de cualquier producto para agregarlo al carrito.

3. **Ver carrito:** Haz clic en el icono del carrito de compras en el header para ver los productos agregados.

4. **Eliminar productos:** Dentro del carrito, haz clic en el icono de eliminar para quitar un producto.

5. **Menú de navegación:** Haz clic en el icono de menú (hamburguesa) para abrir el menú lateral.

### Código de ejemplo

```javascript
// Estructura de un producto
class Product {
  constructor(name, price, image) {
    this.name = name;
    this.price = price;
    this.image = image;
  }
}

// Crear un nuevo producto
const nuevoProducto = new Product("Jersey México 2023", 1000, "./img/jersey.jpg");
```

## 📁 Estructura del Proyecto

```
ebac-code-together/
├── index.html          # Página principal
├── package.json        # Configuración de npm y dependencias
├── README.md           # Documentación del proyecto
├── css/
│   └── style.css       # Estilos compilados
├── sass/
│   └── style.scss      # Estilos fuente (SASS)
├── js/
│   └── main.js         # Lógica JavaScript
└── img/                # Imágenes de productos y assets
```

## 📸 Capturas de Pantalla

### Vista Desktop
*La página se visualiza con un grid de productos de múltiples columnas.*

### Vista Mobile
*El diseño se adapta a una columna con menú hamburguesa lateral.*

### Carrito de Compras
*Panel lateral deslizable que muestra los productos agregados.*

> 💡 **Nota:** Visita el [sitio en vivo](https://marco-moya.github.io/ebac-code-together/) para ver la aplicación en funcionamiento.

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si deseas colaborar:

1. **Fork** el repositorio
2. **Crea** una rama para tu feature:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. **Commit** tus cambios:
   ```bash
   git commit -m "Agrega nueva funcionalidad"
   ```
4. **Push** a la rama:
   ```bash
   git push origin feature/nueva-funcionalidad
   ```
5. **Abre** un Pull Request

### Ideas para contribuir:
- Agregar filtros de productos por categoría
- Implementar búsqueda de productos
- Agregar página de detalle de producto
- Integrar pasarela de pago simulada
- Mejorar accesibilidad (a11y)

## 📄 Licencia

Este proyecto está bajo la Licencia ISC.

## 👤 Autor

Desarrollado como parte del curso **EBAC Code Together**.

---

⭐ Si te gustó este proyecto, ¡no olvides darle una estrella!
