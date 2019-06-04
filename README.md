# Organa

### Definición del producto

Primero que nada, el equipo de formación de **Laboratoria** nos planteo 4 retos a eligir para decidir en equipo a cual le daríamos solución, nuestro equipo decidió trabajar sobre el reto **Organa** , que consiste en buscar una forma eficiente de poder llevar un mejor control y registro de asistencia de las Estudiantes.

La solución que nos proponen desarrollar consiste en usar una webcam para leer códigos 
QR que identifique a cada estudiante que va llegando y se almacene en una base de datos por día, logrando de esta forma ahorrar tiempo valioso de la persona que actualmente se encarga de esta actividad por las mañanas.

Como primera iteración consideramos que pueda guardar la asistencia y pueda mostrar en una interface cuántas estudiantes asistieron ese día y cuantas inasistencias hubieron.

Posteriormente nos dimos a la tarea de definir ¿Quiénes serían nuestros principales usuarios?, pensar en ¿Cuál sería el objetivo de nuestros usuarios al usar nuestra página?  y por último con base a las necesidades de los usuarios pensar en ¿Qué datos incluiría nuestra aplicación web?
Quedando de la siguiente forma:

#### ¿Quiénes son los principales usuarios de producto?

* Para esta primera iteración se pretende que el usuario sea la persona en turno encargada de tomar las asistencias durante el bootcamp.

* Para siguientes iteraciones se pretende expandir nuestra visión y llevar esto a escuelas privadas o de gobierno dispuestas a optimizar sus tiempos.

#### ¿Cuáles son los objetivos de estos usuarios en relación con el producto?

* Principalmente optimizar los tiempos de la persona que se encarga de tomar asistencia y llevar un registro en este caso dentro de Laboratoria en excel.

* Posteriormente optimizar tiempos de los maestros en las escuelas que aun siguen tomando lista con pluma y papel durante al rededor de 30 minutos antes de poder iniciar su clase.

#### ¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?

* Pantalla principal con un resumen que diga: Total de estudiantes en el bootcamp, asistencias del día, ausencias del día, retardos del día, estudiantes que ya no se encuentran en el bootcamp.

* Pantalla donde se muestre la fecha del día, la webcam donde las estudiantes podrán mostrar los códigos QR.

* Al momento de que cualquier estudiante muestre su QR a la cámara se le debe mostrar la hora a la que quedo registrada su entrada y si llego después de la hora de tolerancia mostrar la hora a la que se registro más un mensaje de retardo para que se de por enterada.

* Pantalla en la cual se podrá visualizar un resumen en forma de lista donde se vean las asistencias, retardos y ausencias por día.

## Feedback

Con base a la breve entrevista que se realizo con Sam que es en este caso la responsable de tomar asistencia diariamente en la mañana a partir de las 8:00 a.m.
Nos comento que a ella le gustaría tener mas información sobre la falta o retardo de las estudiantes, por lo cual decidimos incluir lo siguiente:

* Se decidió que se haría un LogIn para administrador, que tenga acceso a toda la información y los estudiantes únicamente por default entren a la vista donde tendrán que mostrar su QR.

* En el acceso del administrador en el resumen de asistencias por día tendrá un espacio designado para que pueda introducir el motivo del retardo o de la falta.

* También nos dijeron que tomáramos en cuenta que por día las estudiantes solo podían pasar una vez el código en caso de pasarlo mas veces les mostraría un mensaje que diga que el código ya fue registrado.

* En caso de que no se pueda leer el QR que les muestre un mensaje de error.

También recibimos feedback acerca de la aplicación web y los colores junto con el logo que estábamos utilizando.

Nos dijeron que por ser en este caso una webapp dirigida a Laboratoria debíamos usar sus colores y su logotipo.

-> Esto se resolvió utilizando una paleta de colores de Laboratoria y cambiando el logo a uno que pudiéramos utilizar.


=======================
EJEMPLO PARA SEGUIR REDACTANDO
#### D.O.D 
-> Crear estructura HTML basada en GRID.
-> Crear estructura CSS basada en GRID.
-> Ingresar el contenido HTML en la estructura basada en GRID.

#### El usuario necesita una pantalla de inicio que contenga la información breve sobre que trata el sitio web
#### D.O.D 
-> Crear los botones Home y Pokedex que sirvan para desplazarse dentro de la pagina.
-> Ingresar el texto de bienvenida.
-> Crear un banner que muestre tres imágenes referentes a Pokémon.


## Prototipo de baja fidelidad

En este caso se diseño solo 1 prototipo de baja fidelidad simulando todas las vistas de pantalla que se esperaba tener , para que el equipo nos diéramos una idea de por donde y como íbamos a empezar a trabajar.

FOTO

## Prototipos de alta fidelidad

Los siguientes prototipos fueron realizados en la plataforma de diseño llamada Figma. 

Fueron diseñados para la pantalla de una computadora de escritorio, y se realizaron tres diseños :  Prototipo para pantalla principal, Prototipo para pantalla de inicio y prototipo para pantalla de información de cada Pokémon 

### Prototipo para pantalla principal
FOTO
### Prototipo para pantalla de inicio
FOTO

### Prototipo para pantalla de información
FOTO


<!-- 
# Organa

![leia-organa](https://cdn3.movieweb.com/i/article/O0m8u4sbGThx14jjeuuDUsegz6cXhJ/798:50/Star-Wars-8-Princess-Leia-Carrie-Fisher-Scenes.jpg)

En Laboratoria estamos buscando una manera eficiente de enterarnos quienes asistieron al área de trabajo cada día. Hasta ahora se ha llevado una asistencia manual pero sabemos que toma tiempo valioso.

La idea de este proyecto es solucionar el registro de asistencia con una aplicación web.

La solución que proponemos consiste en usar una webcam para leer [códigos QR](https://es.wikipedia.org/wiki/C%C3%B3digo_QR) que indetifiquen a cada estudiante que va llegando y se almacene en una base de datos por día.

Como primera iteración consideramos que pueda guardar la asistencia y pueda mostrar en una interface cuántas estudiantes asistieron ese día y cuantas inasistencias hubieron.

El listado de estudiantes puede ser indicado desde un JSON o haciendo un fetch a `https://laboratoria-la.firebaseapp.com/cohorts/gdl-2019-01-bc-core-gdl-002/users`.

## UI

Compartimos un prototipo de alta fidelidad que se usó en otra oportunidad, usarlo como referencia:

![prototipo-beta](https://raw.githubusercontent.com/juanjordan/organa-oh/master/prototipo.png)


## Flujo con los Códigos QR

Se espera que cada estudiante tenga un código QR que tiene un identificador de ellas como por ejemplo su correo electrónico, al llegar al área de trabajo cada estudiante mostrará su código QR a la webcam de una laptop y esta laptop registrará la asistencia de ella para ese día.

## Recomendaciones

- Si planeamos usar React podemos usar estos 2 libraries para el manejo de QRs: https://www.npmjs.com/package/react-qr-scanner y https://www.npmjs.com/package/react-qr-svg
- Usar Firebase para la persistencia de la data.
- Usar herramientas online para la creación de QRs de prueba (si lo consideran necesario) ej: https://www.the-qrcode-generator.com/

## ¿Por qué el nombre Organa?

Leia Organa es la general de la resistencia en el universo de Star Wars, nos gusta pensar que está muy pendiente de los intergrantes de su equipo!


<!-- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

-->
