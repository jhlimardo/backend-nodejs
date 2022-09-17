# backend-nodejs

### 1 - clonar repositorio
### 2 - ir a la carpeta backend-nodejs\api
### 3 - ejecutar > npm install
### 4 - ejecutar > npm start

## Endpoints:

### User: 
####        metodo GET -> http://localhost:3001/users
####       metodo POST -> http://localhost:3001/users

#### modelo user:     
    {
        "name": "user",
        "email": "user@mail.com",
        "password": "123456"
    }

### Login:  metodo POST -> http://localhost:3001/userlogin

#### modelo login:     

    {
        "email": "jose@mail.com",
        "password": "123456"
    }




##### ** Nota: para loguearse primero crear un usuario **

### StarWars: metodo GET -> http://localhost:3001/starwars/?search=Luke Skywalker

##### ** Nota: funciona para cualquier personaje **

### -> Realizado con Node Js / Express Js

### -> Middleware: JsonWebToken (para generar el Token) / bcryptjs (para encriptar el password)

