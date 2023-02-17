# GREEN_UX_BackEnd

Desarrollo de la estructura del Backend como servidor, las rutas y la base de datos de la app GreenUX
con el fin de actualizar y mejorar la aplicación web con una experiencia de usuario ligera y sostenibles. 



## Tech Stack

**Server:** Nodejs, Express; PostgresSQL y Sequelize.


## Documentation

[Nodejs](https://nodejs.org/es/docs/)
[Express](https://expressjs.com/)
[PostgresSQL](https://www.postgresql.org/docs/current/)
[Sequelize.](https://sequelize.org/)
## Run Locally

Clone the project

```bash
  git clone https://github.com/GreenUX-org/Green-UX.git
```

Go to the project directory

```bash
  cd api
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```


## API Reference
#### Peticiones SECCIONES
#### Trae todas la Secciones activas de la documentación.

```http
  GET /sections
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |


#### Post para crear una sección. 

```http
  POST /sections
```

| Parameter   | Type     | Description                                |
| :--------   | :------- | :----------------------------------------  |
| `name`      | `string` | **Required**. Pasar parametro name por body|


#### Ruta PUT para modificar el nombre de la sección.
```http
  PUT /sections/update/:id
```

| Parameter | Type     | Description                                    |
| :-------- | :------- | :--------------------------------------------- |
| `id`      | `string` | **Required**.  pasar por params el ID, es UUID |
|`name`     | `string` |**Required** Pasar por body                     |

#### Ruta PUT para hacer un borrado lógico de la sección.
```http
  PUT /sections/disabled/:id
```

| Parameter | Type     | Description                                    |
| :-------- | :------- | :--------------------------------------------- |
| `id`      | `string` | **Required**.  pasar por params el ID, es UUID |




#### Peticiones con los TÍTULOS.
#### Ruta GET para traer todos los títulos activos.
```http
  GET /titles
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |


#### Post para crear un título.

```http
  POST /titles
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| name      | `string` | **Required** Pasar por body       |
|sectionName|`string`  |**Required** Pasar por body        |




#### Ruta PUT para modificar el nombre de un título.
```http
  PUT /titles/update/:id
```

| Parameter | Type     | Description                                    |
| :-------- | :------- | :--------------------------------------------- |
| `id`      | `string` | **Required**.  pasar por params el ID, es UUID |
|  name     | `string` | **Required** Pasar por body                    |

#### Ruta PUT para hacer un borrado lógico del título.
```http
  PUT /titles/disabled/:id
```

| Parameter | Type     | Description                                    |
| :-------- | :------- | :--------------------------------------------- |
| `id`      | `string` | **Required**.  pasar por params el ID, es UUID |


#### Peticiones con los INFO.
#### Ruta GET para traer toda la info activa.
```http
  GET /info
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |


#### Post para crear Info de la documentación.

```http
  POST /info
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| img       | `TEXT`   | **Required** Pasar por body       |
|data       |`TEXT`    | **Required** Pasar por body       |
|titleName  |`TEXT`    | **Required** Pasar por body       |



#### Ruta PUT para modificar la data.
```http
  PUT /info/update/:id
```

| Parameter | Type     | Description                                    |
| :-------- | :------- | :--------------------------------------------- |
| `id`      | `string` | **Required**.  pasar por params el ID, es UUID |
|  data     | `TEXT`   | **Required** Pasar por body                    |
| img       | `TEXT`   | **Required** Pasar por body                    |

#### Ruta PUT para hacer un borrado lógico del título.
```http
  PUT /info/disabled/:id
```

| Parameter | Type     | Description                                    |
| :-------- | :------- | :--------------------------------------------- |
| `id`      | `string` | **Required**.  pasar por params el ID, es UUID |



