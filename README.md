# Ejercicio para Club La Nacion
#### ejercicio-club-la-nacion

## ● Autor:

[**Marcelo Angel Fanego.**](https://www.linkedin.com/in/maf248/)

## ● Descripción y stack:

Sitio desarrollado a partir de los assets y diseño entregados. Servido mediante **Node.js** con **Express**, generando endpoints **API** desde el backend, que luego son consumidos desde frontend con **React**.

Partiendo del **JSON** provisto, se sirve el mismo en el endpoint /api. Luego se crearon los **endpoints** ***/tourism*** y ***/discount*** sirviendo los correspondientes datos en cada uno.

Los datos en /tourism estan ordenados primeras aquellas que cuenten con la sucursal más cercanas. En el caso de los datos servidos en /discount con los codigos de descuentos, estan ordenados de forma alfabetica descendiente segun sus nombres.
Ambas rutas aceptan paginado con query string Ej: "*/api/tourism?page=X&limit=X*", proveyendo el contenido en el formato de paginado elegido mediante query string.

...

## [★ Live version:](https://ejercicio-club-la-nacion.herokuapp.com)

Aquí se puede observar la última versión funcionando mediante un deploy en [Heroku](https://ejercicio-club-la-nacion.herokuapp.com).


## ● Endpoints de la API:

○ Main - todas las cuentas (**/api**)

○ Turismo en Buenos Aires (**/tourism**)

○ Codigos de descuentos (**/discount**)

● Las rutas /tourism y /discount ambas soportan paginado mediante query string. Ej: "*/api/tourism?page=1&limit=4*" y en caso de query invalido, redirección a /tourism dando todos los resultados.

