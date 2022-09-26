# WeatherApp

## Template

Este proyecto fue creado con la herramienta [Vite 2.0](https://vitejs.dev/blog/announcing-vite2.html#what-s-new-in-2-0).

## Scripts disponible

En el directorio del proyecto existen 6 scripts:

### `yarn dev`

Corre la aplicación en modo desarrollo, usando los archivos sin minificar.\
Abre [http://127.0.0.1:5173/](http://127.0.0.1:5173/) para visualizar el proyecto en tu navegador.

La aplicación se refrescara automáticamente al realizar cambios.

### `yarn test`

Inicia el chequeo de las pruebas sobre los componentes internos del proyecto.\
Para obtener mas información de cada prueba debe filtrar la búsqueda en consola.

### `yarn build`

Crea la versión para producción de la aplicación en la carpeta `dist`.\
Esta versión mejora respecto a su optimización y rendimiento.

La apariencia de los archivo de la carpeta puede no ser muy legible para el desarrollador!!

## `yarn preview`

Inicia el servidor local en el puerto [http://127.0.0.1:5173/](http://127.0.0.1:5173/) para visualizar el proyecto esta vez\
haciendo use de los archivos minificados generados por el script previo yarn build.

### `yarn format`

Formatea el código de todos los archivos existentes en el momento de ejecución.\
Esto es útil cuando se quiere formatear varios archivos rápidamente.

## `yarn lint`

Escanea el estilo de codificación de todos los archivos del directorio.\
El estilo elegido para el proyecto es una versión personalizada creada a partir de la guía Standart de eslint.

# Detalles

WeatherApp es una aplicación de consulta meteorológica para cualquier ciudad del globo.\
La información proviene de 2 API's del repertorio de [OpenWeather](https://openweathermap.org/api).\

Para forzar el estilo de código se ha utilizado [ESlint](https://eslint.org/) en conjunto con [prettier](https://prettier.io/).\

La configuración de rutas que convierten este proyecto en una SPA es hecha usando react-router.\

Para la gestión del estado se hace uso del hook useContex, [redux](https://es.redux.js.org/) y thunk para las peticiones asincronas a las API's.\
La aplicación posee persistencia de estado valiendose del LocalStorage del navegador.

Para el estilo del proyecto se usa una implementación de [Bootstrap 5](https://getbootstrap.com/docs/5.2/getting-started/introduction/) con clases. También se ha implementado un tema oscuro\
para activarlo solo es necesario accionar el switch de la parte superior derecha.\

La parte del testing se implementó haciendo uso de [Testing Library](https://testing-library.com/) y [Jest](https://jestjs.io/). Se prestó especial atención a la correcta\
renderización de los componentes.

Este proyecto tiene margen de mejora, pero el tiempo de desarrollo fue ligeramente ajustado (menos de 1 semana).\

Comentarios, propuestas y cualquier tipo de feedback es bien recibido. Siempre que sea respetuosamente.
