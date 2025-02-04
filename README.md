# Encuesta de Satisfacción con React y Google Sheets

Este proyecto es una aplicación web desarrollada con **React** que permite realizar una encuesta de satisfacción utilizando **Google Sheets** como base de datos. Se han implementado dos tablas en Google Sheets:

1. **Tokens**: Contiene los identificadores únicos generados para cada usuario que participará en la encuesta.
2. **Respuestas**: Almacena la información enviada por los usuarios después de completar la encuesta.

## Características Principales

- **Generación de URLs con Token**: Se genera un enlace único para cada usuario basado en un token.
- **Formulario de Encuesta**: Diseño amigable para que los usuarios puedan responder de manera fácil y rápida.
- **Integración con Google Sheets**: Uso de la API de Google Sheets para guardar y recuperar datos en tiempo real.

## Estructura del Proyecto

El proyecto cuenta con dos componentes clave:

1. **Página de Satisfacción**: Muestra el formulario donde los usuarios responden la encuesta.
2. **Generador de URLs y Tokens**: Se encarga de crear los enlaces personalizados con los tokens asignados a cada usuario.

## Tecnologías Utilizadas

- React (Create React App)
- Google Sheets API
- CSS para el diseño del formulario

## Instalación y Configuración

### Prerrequisitos

Asegúrate de tener instalado Node.js y npm en tu sistema.

### Instalación
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/EluJLM/Encuesta_Satisfacion.git
   cd Encuesta_Satisfacion
   ```
2. Instalar las dependencias:
   ```bash
   npm install
   ```

### Configuración de Google Sheets

Para habilitar la integración con Google Sheets, sigue estos pasos:

  ```
  [HOJA PUBLICA PARA PRUEBAS](https://docs.google.com/spreadsheets/d/1xpqeRVU4XHIfs7f92kGHcOAMl2PDoUVF2HvlSP3i7aU/edit?gid=0#gid=0)
  ```
   
1. **Crear una Hoja de Cálculo en Google Sheets** con dos pestañas: `Tokens` y `Respuestas`.
2. **Obtener la URL de la Hoja de Cálculo** y usarla en el código de Google Apps Script.
3. **Configurar Google Apps Script**:
   - Abre Google Sheets y ve a `Extensiones` > `Apps Script`.
   - Pega el siguiente código en el editor de Apps Script:

   ```javascript
   const sheets = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1xpqeRVU4XHIfs7f92kGHcOAMl2PDoUVF2HvlSP3i7aU/edit?gid=0#gid=0");
   // Cambia "Respuestas" y "Tokens" por los nombres reales de tus hojas si son diferentes.
   const sheetRespuestas = sheets.getSheetByName("Respuestas");
   const sheetTokens = sheets.getSheetByName("Tokens");

   function doPost(e) {
     let data = e.parameter;
     
     if (!data.token) {
       return ContentService.createTextOutput("Error: Falta el token.").setMimeType(ContentService.MimeType.TEXT);
     }

     // Buscar el token en la hoja "Tokens"
     const tokenData = buscarToken(data.token);

     if (!tokenData || tokenData.estado !== "Disponible") {
       return ContentService.createTextOutput("Error: Token inválido o ya utilizado.").setMimeType(ContentService.MimeType.TEXT);
     }

     // Marcar el token como "Usado"
     actualizarEstadoToken(tokenData.fila, "Usado");

     // Agregar los datos a la hoja "Respuestas"
     sheetRespuestas.appendRow([
       new Date(), // Fecha actual
       data.service,
       data.clientName,
       data.priceRating,
       data.deliveryTimeRating,
       data.recommendation,
       data.deviceCondition,
       data.comments,
       data.improve
     ]);

     return ContentService.createTextOutput("¡Tu mensaje fue enviado exitosamente a la base de datos de Google Sheets!").setMimeType(ContentService.MimeType.TEXT);
   }

   function buscarToken(token) {
     const tokens = sheetTokens.getDataRange().getValues(); // Obtener todos los datos de la hoja "Tokens"
     for (let i = 1; i < tokens.length; i++) { // Empezar desde la fila 1 (asumiendo que la fila 0 son encabezados)
       if (tokens[i][0] === token) { // Columna 0: Token
         return { 
           fila: i + 1, // Fila en la hoja (índice + 1 porque las filas en Apps Script empiezan en 1)
           estado: tokens[i][1] // Columna 1: Estado
         };
       }
     }
     return null; // Token no encontrado
   }

   function actualizarEstadoToken(fila, nuevoEstado) {
     sheetTokens.getRange(fila, 2).setValue(nuevoEstado); // Columna 2: Estado
   }
   ```

4. **Guardar y desplegar el script** como un servicio web:
   - Ve a `Implementar` > `Nueva Implementación`.
   - Selecciona `Aplicación Web`.
   - En "Ejecutar como", selecciona `Tú`.
   - En "Quién tiene acceso", elige `Cualquiera`.
   - Haz clic en `Implementar` y copia la URL generada.

5. **Usar la URL del Webhook** en tu aplicación React para enviar respuestas de la encuesta a Google Sheets.

## Ejecutar el Proyecto

Para iniciar la aplicación en modo desarrollo, usa el siguiente comando:
```bash
npm start
```
La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

## Despliegue
Para construir la versión de producción:
```bash
npm run build
```
Luego, puedes desplegar la aplicación en servicios como **Firebase Hosting**, **Vercel**, o **Netlify**.

## Contribución
Si deseas contribuir a este proyecto, puedes hacer un fork del repositorio, crear una nueva rama con tus cambios y hacer un pull request.

## Contacto
Si tienes preguntas o sugerencias, puedes contactarme en [elulozano92@gmail.com](mailto:elulozano92@gmail.com).

---
© 2025 - Todos los derechos reservados.

