# Encuesta de Satisfacción con React y Google Sheets

Este proyecto es una aplicación web desarrollada con **React** que permite realizar una encuesta de satisfacción utilizando **Google Sheets** como base de datos. La aplicación está alojada en:

🔗 **[Encuesta de Satisfacción - App](https://en-de-satisfaccion.web.app/)**

La hoja de Google Sheets utilizada para almacenar los datos está disponible en:

📄 **[Google Sheets - Tokens y Respuestas](https://docs.google.com/spreadsheets/d/1xpqeRVU4XHIfs7f92kGHcOAMl2PDoUVF2HvlSP3i7aU/edit?gid=971993185#gid=971993185)**

---

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
   📄 **[Google Sheets - Tokens y Respuestas](https://docs.google.com/spreadsheets/d/1xpqeRVU4XHIfs7f92kGHcOAMl2PDoUVF2HvlSP3i7aU/edit?gid=971993185)**
2. Pega el token en una fila disponible dentro de la pestaña **"Tokens"**.
3. Guarda los cambios.

### **Paso 3: Enviar la Encuesta al Cliente**

1. Regresa a la página de **"Generar Token"**.
2. Copia la URL generada para la encuesta.
3. Envía el enlace al cliente para que complete la encuesta.

---

### Configuración de Google Sheets
Para habilitar la integración con Google Sheets, sigue estos pasos:
   
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

---

## **Tecnologías Utilizadas**

- React (Create React App)
- Google Sheets API y Apps Script
- CSS para el diseño del formulario

---

## **Instalación y Configuración en Local**

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

---


