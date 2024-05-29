# DESCRIPTION

Este proyecto simula un backend para una tienda de videojuegos y consolas. Proporciona funcionalidades para almacenar datos en una base de datos y en Cloudinary,
además de un sistema de registro e inicio de sesión.



# FEATURES

-Modelos de productos:

El proyecto incluye dos modelos de productos: “consoles” (consolas) y “games” (videojuegos).

Cada modelo tiene funciones para crear, actualizar y borrar registros.

-Modelo de usuario:

Se ha implementado un modelo de usuario con funcion de registro e inicio de sesión.

-Gestión de imágenes en Cloudinary:

El proyecto permite subir y borrar fotos utilizando Cloudinary.

-Control de acceso según roles:

Los usuarios pueden acceder a diferentes partes del proyecto
según su rol (admin o user).


# API ENDPOINTS

## CONSOLE ROUTES 

|HTTP Method | URI path               | Description              |
|------------|------------------------|--------------------------|
|Get         | '/getConsoles '        | Coger todas las consolas |
|Get         | '/getConsoleById/:id'  | Traerlas segun su id     |
|Post        | '/createConsole'       | Crear consolas           |
|Put         | '/updateConsole/:id'   | Actualizar consolas      |
|Delete      | '/deleteConsole/:id'   | Borrar consolas          |


## GAME ROUTES 

|HTTP Method | URI path               | Description              |
|------------|------------------------|--------------------------|
|Get         | '/getGames '           | Coger todos los juegos   |
|Get         | '/getGameById/:id'     | Traerlos segun su id     |
|Post        | '/createGame'          | Crearjuegos              |
|Put         | '/updateGame/:id'      | Actualizar juegos        |
|Delete      | '/deleteGame/:id'      | Borrar juegos            |




## USER ROUTES 

|HTTP Method | URI path               | Description              |
|------------|------------------------|--------------------------|
|Get         | '/getUsers '           | Coger todos los juegos   |
|Get         | '/getUserById/:id'     | Traerlos segun su id     |
|Post        | '/registerUser'        | Registrar usuario        |
|Post        | '/login'               | Loguear al usuario       |
|Put         | '/updateUser/:id'      | Actualizar usuarios      |
|Delete      | '/deleteUser/:id'      | Borrarusuarios           |


# MIDDLEWARES.

auth: Crea un token para la verificación del usuario.

checkRole: Verifica que tienes rango "admin".

file: Guarda las fotos en cloudinary.




# TECH

-JavaScript (JS): Lenguaje de programación principal.

-Node.js: Entorno de ejecución para JavaScript en el servidor.

-MongoDB Atlas: Servicio de base de datos en la nube.

-Cloudinary: Plataforma para almacenar y gestionar imágenes.

-jsonwebtoken: Librería para la autenticación basada en tokens.

-multer: Middleware para manejar la carga de archivos.

-bcrypt: Librería para el cifrado de contraseñas.




# INSTALLATION

npm i :

-express
-mongoose
-dotenv
-jsonwebtoken
-multer
-multer-storage-cloudinary
-nodemon
-bcrypt
-cloudinary
