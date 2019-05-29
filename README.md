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

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify -->
