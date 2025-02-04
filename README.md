# Encuesta de Satisfacción con React y Google Sheets

Este proyecto es una aplicación web desarrollada con **React** que permite realizar una encuesta de satisfacción utilizando **Google Sheets** como base de datos. La aplicación está alojada en:

🔗 **[Encuesta de Satisfacción - App](https://en-de-satisfaccion.web.app/)**

La hoja de Google Sheets utilizada para almacenar los datos está disponible en:

📄 **[Google Sheets - Tokens y Respuestas](https://docs.google.com/spreadsheets/d/1xpqeRVU4XHIfs7f92kGHcOAMl2PDoUVF2HvlSP3i7aU/edit?gid=971993185#gid=971993185)**

## **Cómo Usar la Aplicación**

### **Paso 1: Generar un Token**

1. Accede a la página de la aplicación.
2. Dirígete a la sección **"Generar Token"**.
3. Ingresa los siguientes datos:
   - **Nombre del servicio**.
   - **Nombre del cliente**.
   - **Token** (puede ser cualquier valor).
4. Copia el token generado.

### **Paso 2: Registrar el Token en Google Sheets**

1. Abre la hoja de Google Sheets en el siguiente enlace:
   📄 **[Google Sheets - Tokens y Respuestas](https://docs.google.com/spreadsheets/d/1xpqeRVU4XHIfs7f92kGHcOAMl2PDoUVF2HvlSP3i7aU/edit?gid=971993185#gid=971993185)**
2. Pega el token en una fila disponible dentro de la pestaña **"Tokens"**.
3. Guarda los cambios.

### **Paso 3: Enviar la Encuesta al Cliente**

1. Regresa a la página de **"Generar Token"**.
2. Copia la URL generada para la encuesta.
3. Envía el enlace al cliente para que complete la encuesta.

## **Características Principales**

- **Generación de URLs con Token**: Se crea un enlace único para cada cliente.
- **Formulario de Encuesta**: Diseño intuitivo para responder rápidamente.
- **Integración con Google Sheets**: Datos guardados en tiempo real.

## **Tecnologías Utilizadas**

- React (Create React App)
- Google Sheets API
- CSS para el diseño del formulario

## **Instalación y Configuración**

### **Prerrequisitos**
Asegúrate de tener instalado Node.js y npm en tu sistema.

### **Instalación**

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/EluJLM/Encuesta_Satisfacion.git
   cd Encuesta_Satisfacion
   ```
2. Instalar las dependencias:
   ```bash
   npm install
   ```

### **Ejecutar el Proyecto**

Para iniciar la aplicación en modo desarrollo:
```bash
npm start
```
La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

### **Despliegue**

Para construir la versión de producción:
```bash
npm run build
```
Puedes desplegar la aplicación en servicios como **Firebase Hosting**, **Vercel** o **Netlify**.

## **Contribución**
Si deseas contribuir a este proyecto, puedes hacer un fork del repositorio, crear una nueva rama con tus cambios y hacer un pull request.

## **Contacto**
Si tienes preguntas o sugerencias, puedes contactarme en [elulozano92@gmail.com](mailto:elulozano92@gmail.com).

---
© 2025 - Todos los derechos reservados.

