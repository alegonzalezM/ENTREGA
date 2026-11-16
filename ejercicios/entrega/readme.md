# API de Productos

API REST que gestiona un catálogo de productos. Permite listar, buscar por categoría, crear y eliminar productos. Las rutas están protegidas con autenticación JWT: el usuario obtiene un token al loguearse y lo envía en cada request para acceder a los endpoints.

Base de datos: Firebase Firestore.   

## Iniciar

nodemon start

## Login 
Ingresar las credenciales para crear un token válido:
POST http://localhost:3007/api/login

{ "email": "juan@gmail.com", 
  "password": "juanPerez" }

Devuelve { "token": "eyJ..." }. Expira a los 60 min.
El token obtenido utilizarlo en pestaña Authorization (Bearer Token) para realizar una consulta a alguna de las siguientes rutas:

## Endpoints:
Todas requieren header Authorization: Bearer <token>.

GET http://localhost:3007/auth/api/products — lista productos 
GET http://localhost:3007/auth/api/products/?categoria=calzado - obtiene productos de un sola categoria
GET http://localhost:3007/auth/api/products/:id — producto por ID
POST http://localhost:3007/auth/api/products/create — crear producto

Body para crear
{
  "nombre": "pantalon san lorenzo",
  "precio": 50000,
  "marca": "adidas",
  "categoria": "indumentaria",
  "stock": 10
}

Campos obligatorios: nombre, precio, marca, categoria, stock.
DELETE http://localhost:3007/auth/api/products/:id — eliminar producto



Probar en Postman
Hacé POST /api/login → copiá el token
En cada request: Authorization → Bearer Token → pegá el token
Probá cada endpoint