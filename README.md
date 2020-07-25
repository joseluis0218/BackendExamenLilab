
# BackendExamenLilab

Proyecto de Api :

Para este proyecto se utilizó, **Express**, como base de datos **MySQL** y el **ORM Sequelize**.

Seguir los pasos siguientes para poder utilizar:

1. Primero descargar el repositorios
2. Abrir una consola en la ubicación descarga del proyecto y ejecutar 
    ### **npm install**
3. Crear una base de datos en MySQL.
4. Para cambiar la cadena de conexión accedemos al archivo ubicado en la carpeta **config** y en el archivo **config.json**

    Inline

        "development": {
        "username": "root",
        "password": "mypassword",
        "database": "mydataabase",
        "host": "127.0.0.1",
        "dialect": "mysql"
        }
4. Si no contamos con el paquete npx, lo instalamos con el siguiente comando
    ### **npm install -g npx* 
4. Luego para que se creen las tablas ejecutamos las migraciones con el siguiente comando.
    ### **npx sequelize-cli db:migrate** 
    
5. Luego insertar los meses en la bd, copiando las sentencias del archivo **months.sql** ubicado en la base del proyecto
6. Asimismo, crear el store procedure en la bd, el código se encuentra en el archivo **storeprocedur.sql** ubicado en la base del proyecto
5. Por último para iniciar la aplicación ejecutamos el siguiente comando
    ### **npm start**
