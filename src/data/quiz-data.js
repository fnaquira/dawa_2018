import React from 'react';

export const questions = [
  {
    'id': 3,
    'question': <span>Si el precio de un artículo es aumentado en un 10 por 100 y luego reducido en un 10 por 100, ¿qué sucede?</span>,
    'answers': [
      <span>No se puede hacer</span>,
      <span>No varía</span>,
      <span>Es menor</span>,
      <span>Es mayor</span>
    ],
    'correct': 'Es menor'
  },
  {
    'id': 5,
    'question': <span>Indicar cuál es el error del siguiente código:<br /><img src="http://35.193.107.240:8000/images/quiz01-01.png" /></span>,
    'answers': [
      <span>Los argumentos no deben llamarse solicitud y respuesta, sino req y res.</span>,
      <span>Están prohibidos los bucles infinitos en NodeJS.</span>,
      <span>No hay un cierre de consulta al navegador (end).</span>,
      <span>Todas las anteriores</span>
    ],
    'correct': 'No hay un cierre de consulta al navegador (end).'
  },
  {
    'id': 6,
    'question': <span>Para iniciar un proyecto con NPM basta con utilizar el comando:</span>,
    'answers': [
      <span>npm start</span>,
      <span>npm create &lt;Nombre del proyecto&gt;</span>,
      <span>npm init</span>,
      <span>npm install</span>
    ],
    'correct': 'npm init'
  },
  {
    'id': 7,
    'question': <span>La siguiente porción de código <br /><img src="http://35.193.107.240:8000/images/quiz01-02.png" /><br /> es equivalente a:</span>,
    'answers': [
      <span>Opción 1 <img src="http://35.193.107.240:8000/images/quiz01-02-01.png" /></span>,
      <span>Opción 2 <img src="http://35.193.107.240:8000/images/quiz01-02-02.png" /></span>,
      <span>Opción 3 <img src="http://35.193.107.240:8000/images/quiz01-02-03.png" /></span>,
      <span>Todas las anteriores</span>
    ],
    'correct': 'Todas las anteriores'
  },
  {
    'id': 8,
    'question': <span>Indique cuál de estas afirmaciones es la correcta.</span>,
    'answers': [
      <span>2xx: se tratan de códigos de redirección.</span>,
      <span>3xx: se tratan de códigos de éxito.</span>,
      <span>4xx: se tratan de códigos de error del lado del servidor.</span>,
      <span>5xx: se tratan de códigos de error del lado del servidor.</span>
    ],
    'correct': '5xx: se tratan de códigos de error del lado del servidor.'
  },
  {
    'id': 9,
    'question': <span>require('http') es utilizado para:</span>,
    'answers': [
      <span>Incluir toda la funcionalidad de javascript de navegador</span>,
      <span>Importar el módulo necesario para levantar un servidor en NodeJS</span>,
      <span>Requerir un puerto libre para nuestra aplicación</span>,
      <span>Todas las anteriores</span>
    ],
    'correct': 'Importar el módulo necesario para levantar un servidor en NodeJS'
  },
  {
    'id': 4,
    'question': <span>¿Cuántas veces se puede restar el número 1 del número 1234?</span>,
    'answers': [
      <span>1 vez</span>,
      <span>1233 veces</span>,
      <span>1234 veces</span>,
      <span>No es posible determinar</span>
    ],
    'correct': '1 vez'
  },
  {
    'id': 10,
    'question': <span>Se denomina paquete a:</span>,
    'answers': [
      <span>Un comprimido especial</span>,
      <span>Una libreria obligatoria para una funcionalidad en específico</span>,
      <span>Un conjunto de ficheros que componen una aplicación</span>,
      <span>La forma de crear instaladores</span>
    ],
    'correct': 'Un conjunto de ficheros que componen una aplicación'
  },
  {
    'id': 11,
    'question': <span>Indique que concepto define mejor a package.json</span>,
    'answers': [
      <span>Índice de dependencias</span>,
      <span>Manifiesto de proyecto NPM</span>,
      <span>Archivo base de servidore node</span>,
      <span>Manifiesto de aplicación web</span>
    ],
    'correct': 'Manifiesto de proyecto NPM'
  },
  {
    'id': 12,
    'question': <span>Las operaciones en NodeJS se realizan de manera asíncrona gracias a</span>,
    'answers': [
      <span>POE (Programación Orientada a Eventos)</span>,
      <span>MEAN (Memory Extender Application Node)</span>,
      <span>Node Package Manager</span>,
      <span>Event loop</span>,
    ],
    'correct': 'Event loop'
  },
  {
    'id': 13,
    'question': <span>Mencione cual de estas afirmaciones es verdadera como desventaja de trabajar con NodeJS</span>,
    'answers': [
      <span>Falta de una librería estándar</span>,
      <span>Sólo funciona con Javascript</span>,
      <span>Para utilizarlo solamente se pueden usar bases de datos no relacionales</span>,
      <span>NPM tiene muchos paquetes</span>
    ],
    'correct': 'jejeje2'
  },
  {
    'id': 14,
    'question': <span>Señale cuál de los siguientes es un ejemplo de error lógico</span>,
    'answers': [
      <span>1 <img src="http://35.193.107.240:8000/images/quiz01-03-01.png"/></span>,
      <span>2 <img src="http://35.193.107.240:8000/images/quiz01-03-02.png"/></span>,
      <span>3 <img src="http://35.193.107.240:8000/images/quiz01-03-03.png"/></span>,
      <span>Todos son errores lógicos</span>
    ],
    'correct': '2 '
  },
  {
    'id': 15,
    'question': <span>Indique cuál de las siguientes invocaciones es la más funcional y eficiente</span>,
    'answers': [
      <span>1 <img src="http://35.193.107.240:8000/images/quiz01-04-01.png"/></span>,
      <span>2 <img src="http://35.193.107.240:8000/images/quiz01-04-02.png"/></span>,
      <span>3 <img src="http://35.193.107.240:8000/images/quiz01-04-03.png"/></span>,
      <span>4 <img src="http://35.193.107.240:8000/images/quiz01-04-04.png"/></span>,
    ],
    'correct': '3 '
  },
  {
    'id': 16,
    'question': <span><img src="http://35.193.107.240:8000/images/quiz01-05.png" /></span>,
    'answers': [
      <span>NodeJS</span>,
      <span>MERN</span>,
      <span>MEAN</span>,
      <span>FullStack</span>
    ],
    'correct': 'MEAN'
  },
  {
    'id': 17,
    'question': <span>REPL significa</span>,
    'answers': [
      <span>Read, Edit, Procedure, Low</span>,
      <span>Read, Eval, Print, Loop</span>,
      <span>Read, Eval, Printer, Lopper</span>,
      <span>Recognize, Evalute, Promote, LAN</span>
    ],
    'correct': 'Read, Eval, Print, Loop'
  },
  {
    'id': 1,
    'question': <span>En un reloj, la aguja del minutero es más rápida que la aguja horaria, pero ¿cuantas veces más rápida?</span>,
    'answers': [
      <span>6 veces</span>,
      <span>12 veces</span>,
      <span>24 veces</span>,
      <span>3.14 veces</span>
    ],
    'correct': '12 veces'
  },
  {
    'id': 2,
    'question': <span>Durante un periodo de 8 años, ¿cuántos meses tienen 28 días?</span>,
    'answers': [
      <span>2</span>,
      <span>4</span>,
      <span>48</span>,
      <span>96</span>
    ],
    'correct': '96'
  },
];
