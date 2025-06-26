# XLSX-Generador 📊

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

Una aplicación web moderna y fácil de usar para generar archivos Excel con datos aleatorios personalizables. Perfecta para pruebas, demos, análisis de datos y desarrollo de aplicaciones.

## ✨ Características Principales

- **🎯 Interfaz Intuitiva**: Diseño moderno y responsive con gradientes atractivos
- **📝 Columnas Personalizables**: Crea tus propias columnas con diferentes tipos de datos
- **⚡ Ejemplos Predefinidos**: 6 plantillas listas para usar (Productos, Empleados, Clientes, etc.)
- **📊 Múltiples Tipos de Datos**: Soporte para 15 tipos diferentes de datos
- **📱 Responsive**: Funciona perfectamente en dispositivos móviles y desktop
- **💾 Descarga Directa**: Genera y descarga archivos Excel (.xlsx) instantáneamente
- **🎨 Sin Dependencias**: Solo HTML, CSS y JavaScript vanilla

## 🚀 Tipos de Datos Soportados

| Tipo         | Descripción             | Ejemplo                   |
| ------------ | ----------------------- | ------------------------- |
| `text`       | Texto libre             | "Producto 1"              |
| `number`     | Números enteros         | 42                        |
| `price`      | Precios con formato     | $123.45                   |
| `email`      | Direcciones de email    | usuario@email.com         |
| `phone`      | Números de teléfono     | +34 123456789             |
| `date`       | Fechas                  | 15/12/2024                |
| `boolean`    | Valores Sí/No           | Sí                        |
| `category`   | Categorías predefinidas | "Electrónica"             |
| `name`       | Nombres de personas     | "Ana García"              |
| `company`    | Nombres de empresas     | "TechCorp"                |
| `address`    | Direcciones             | "Calle 123, 45"           |
| `city`       | Ciudades                | "Madrid"                  |
| `country`    | Países                  | "España"                  |
| `url`        | Enlaces web             | "https://www.ejemplo.com" |
| `percentage` | Porcentajes             | "75.5%"                   |

## 📋 Ejemplos Predefinidos

### 🛍️ Productos

- Nombre, Precio, Cantidad, Categoría

### 👥 Empleados

- Nombre Completo, Email, Teléfono, Departamento, Salario, Fecha Ingreso

### 🤝 Clientes

- Nombre, Email, Teléfono, Ciudad, País, Cliente Premium

### 📦 Inventario

- Código, Producto, Stock, Precio Unitario, Proveedor, Fecha Ingreso

### 💰 Ventas

- ID Venta, Cliente, Producto, Cantidad, Total, Fecha, Vendedor

### 🎓 Estudiantes

- Nombre, Email, Edad, Carrera, Semestre, Promedio, Activo

## 🛠️ Cómo Usar

### 1. Configurar Columnas

1. Ingresa el **nombre de la columna**
2. Selecciona el **tipo de dato**
3. (Opcional) Agrega **opciones** para categorías
4. Haz clic en "Agregar Columna"

### 2. Configurar Archivo

- Define el **nombre del archivo** (sin extensión)
- Establece la **cantidad de registros** (1-1000)

### 3. Generar Excel

- Haz clic en "Generar y Descargar Excel"
- El archivo se descargará automáticamente

### 4. Usar Ejemplos Rápidos

- Haz clic en cualquier botón de ejemplo
- Las columnas se configurarán automáticamente
- Personaliza según necesites

## 🎨 Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Gradientes, animaciones y diseño responsive
- **JavaScript ES6+**: Lógica de generación de datos
- **SheetJS (XLSX)**: Biblioteca para generar archivos Excel
- **Font Awesome**: Iconos modernos y atractivos

## 📁 Estructura del Proyecto

```
generador/
├── index.html          # Página principal
├── main.js            # Lógica de la aplicación
├── styles.css         # Estilos y diseño
├── README.md          # Documentación
└── LICENSE            # Licencia del proyecto
```

## 🌟 Características Técnicas

### Generación de Datos Inteligente

- **Nombres**: Base de datos de nombres hispanos realistas
- **Emails**: Generación automática basada en nombres
- **Teléfonos**: Formato internacional español
- **Fechas**: Rango de fechas realistas (último año)
- **Precios**: Valores monetarios realistas
- **Categorías**: Opciones personalizables por el usuario

### Interfaz de Usuario

- **Diseño Moderno**: Gradientes y sombras elegantes
- **Responsive**: Adaptable a todos los dispositivos
- **Feedback Visual**: Mensajes de estado con iconos
- **Animaciones**: Transiciones suaves y profesionales

### Funcionalidades Avanzadas

- **Validación**: Verificación de datos de entrada
- **Gestión de Errores**: Manejo robusto de excepciones
- **Limpieza Automática**: Campos se limpian después de agregar columnas
- **Persistencia**: Configuración se mantiene durante la sesión

## 🚀 Instalación y Uso

### Opción 1: Uso Directo

1. Descarga todos los archivos
2. Abre `index.html` en tu navegador
3. ¡Listo para usar!

### Opción 2: Servidor Local

```bash
# Con Python
python -m http.server 8000

# Con Node.js
npx serve .

# Con PHP
php -S localhost:8000
```

## 📱 Compatibilidad

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Dispositivos móviles

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para contribuir:

1. Haz un fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Sebastián Rodelo** - Desarrollador Full Stack y Riwi Coder

- 🌐 [GitHub](https://github.com/MillerSebastian)
- 📚 [LinkedIn](https://www.linkedin.com/in/sebastian-rodelo-2a30041b1/)
- 📧 [Correo](mailto:sebastianrodelog@gmail.com.com)

## 🙏 Agradecimientos

- [SheetJS](https://sheetjs.com/) por la excelente librería XLSX
- [Font Awesome](https://fontawesome.com/) por los iconos
- [CDNJS](https://cdnjs.com/) por el hosting de las librerías

---

⭐ **¡Si te gusta este proyecto, dale una estrella en GitHub!** ⭐

¡Gracias por usar mi generador! 🎉
