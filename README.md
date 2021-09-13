# Ejercicio para Club La Nacion
#### ejercicio-club-la-nacion

## ● Autor:

[**Marcelo Angel Fanego.**](https://www.linkedin.com/in/maf248/)

## ● Descripción y stack:

#### BACK-END:

Sitio desarrollado a partir de los assets y diseño entregados. Servido mediante **Node.js** con **Express**, generando endpoints **API** desde el backend, que luego son consumidos desde frontend con **React**.

Partiendo del **JSON** provisto, se sirve el mismo en el endpoint /api. Luego se crearon los **endpoints** ***/tourism*** y ***/discount*** sirviendo los correspondientes datos en cada uno.

Los datos en /tourism estan ordenados primeras aquellas que cuenten con la sucursal más cercanas. En el caso de los datos servidos en /discount con los codigos de descuentos, estan ordenados de forma alfabetica descendiente segun sus nombres.
Ambas rutas aceptan paginado con query string Ej: "*/api/tourism?page=X&limit=X*", proveyendo el contenido en el formato de paginado elegido mediante query string.

#### FRONT-END:

Mediante Create React App se creó un repositorio en /client donde se sirve el frontend. Se desarrolló un diseño similar al provisto, mediante **HTML** y **CSS**. Se crearon en **React** los componentes: Header (Navbar), MainSlider, UI (Button y Card) y DiscountSlider. Se alimentan las cards de los sliders por los endpoints preparados en Backend, y los requisitos previstos. Los estados de los componentes se manejan mediante Hooks (useState y useEffect).

#### ACLARACIONES:

NO se utilizó ninguna libreria de terceros, todo el codigo fue escrito "desde cero / from scratch" (Considero que hubiera sido más práctico en un caso real utilizar librerias de terceros para los sliders, pero comprendo que en un ejercicio tiene sentido).

NO se terminó aún diseño responsive, por ahora es desktop first.

NO se implemento aún Server side rendering.


## [★ Live version:](https://ejercicio-club-la-nacion.herokuapp.com)

Aquí se puede observar la última versión funcionando mediante un deploy en [Heroku](https://ejercicio-club-la-nacion.herokuapp.com).


## ● Endpoints de la API:

○ Main - todas las cuentas (**/api**)

○ Turismo en Buenos Aires (**/tourism**)

○ Codigos de descuentos (**/discount**)

Las rutas /tourism y /discount ambas soportan paginado mediante query string. Ej: "*/api/tourism?page=1&limit=4*" y en caso de query invalido, redirección a /tourism dando todos los resultados.

