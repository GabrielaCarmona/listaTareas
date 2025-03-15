# Documentación
## Antes de comenzar
Permiteme darte las gracias por tomarte el tiempo de revisar la documentación incluida en este repositorio, me esforzare en ser lo suficientemente clara para que puedas hacer una descarga y uso satisfactorios de esta aplicacion. Para que esto suceda me tomaré la libertad de hacerte un par de recomendaciones muy sencillas:

1. Asegurate de tener instalados Node.js (En su version 18 o superior) y npm (generalmente incluido con Node) porque son de vital importancia para poder instalar y ejecutar la aplicacion.
2. Si ya los tienes instalados, te recomiendo verificar las versiones ejecutando 'node -v' y 'npm -v' en tu terminal de comandos. 

Siguiendo estas sencillas indicaciones puedo asegurarte que no tendrás problemas para llevar a cabo los pasos de instalación y ejecución.

## Pasos de instalación y ejecución
1. Clona este repositorio en un medio local.
2. En tu terminal de comandos ingresa al directorio "listaTareas/".
3. Para instalar las dependendecias del proyecto ejecuta el comando 'npm install'.
4. Para iniciar el proyecto ejecuta el comando 'npm run dev'.
5. En tu navegador web ingresa la dirección "http://localhost:3000/".

## Decisiones de diseño
UX
1. El objetivo principal de esta aplicacion es aliviar la carga mental del usuario ofreciendo ser una herramienta de manejo sencillo que le permita gestionar múltiples tareas en sus tres estados basicos: pendiente, en progreso y completada. 
2. A modo de tutorial, aparecen 4 tareas predeterminadas que ayudan al usuario a comprender como interactuar con las funcionalidades de la aplicacion. 
3. Para mantener una gestion simple, las tareas tienen un límite de 100 caracteres y no se permite agrear tareas sin contenido.
4. Una vez que la tarea ha cambiado su estatus a "Completada" queda inhabilitado el icono "En progreso". Para habilitarlo nuevamente es necesario volver a marcar la tarea como "Pendiente" haciendo click en ella. Esta particularidad evita que tareas ya realizadas puedan puedan marcarse como "En progreso" por error de dedo.
5. Para algunos usuarios es necesario llevar un registro de lo que se ha realizado durante su jornada o simplemente les motiva poder ver el progreso obtenido. En cambio, para otros usuarios solo es importante mantener visible lo que se está haciedo o falta por hacer. Por esa razón la opción "Eliminar tarea" se encuentra disponible independientemente del estado de la tarea.

UI
1. Dark mode: El usuario puede configurar el esquema de colores que mejor le permita visualizar la aplicación en condiciones de poca o mucha luz.
2. Diseño responsivo: La aplicación es adaptable al tamaño de distintos dispositivos, sin perder armonia y resolución, tampoco se cortan o traslapan sus elementos.
3. Los iconos muestran de manera intuitiva cuál es su funcion.

## Estructura del proyecto
📦 LISTATAREAS
├── 📂 src
│   ├── 📂 actions         # Funciones para despachar acciones a Redux
│   ├── 📂 assets          # Imágenes y recursos
│   ├── 📂 components      # Componentes
│   ├── 📂 reducers        # Funciones para manejar el estado global con Redux
│   ├── 📂 styles          # Hoja de estilos para los componentes
│   ├── 📂 types           # Definiciones de tipos clave para el proyecto
│   ├── 📂 utils           # Herramientas de utilidad
│   ├── 📜 App.css         # Estilos del componente principal
│   ├── 📜 App.jsx         # Componente principal
│   ├── 📜 index.css       # Estilos del punto de entrada
│   ├── 📜 main.jsx        # Punto de entrada
│   └── 📜 store.js        # Contiene el estado de la aplicación
├── 📂 public              # Archivos estáticos
│   ├── 📜 vite.svg        # Archivo svg del logo vite
├── 📜 .gitignore          # Archivos y carpetas ignorados por Git
├── 📜 eslint.config.js    # Archivo de configuración que indica a ESLint los criterios o reglas que debe usar para analizar el código JavaScript
├── 📜 index.html          # Archivo HTML principal
├── 📜 package-lock.json   # Archivo autogenerado de versiones exactas de las dependencias
├── 📜 package.json        # Dependencias y configuración del proyecto
├── 📜 README.md           # Documentación del proyecto
└── 📜 vite.config         # Configuración de Vite, plugins y puertos
