// generate-messages.js
const fs = require('fs');
const path = require('path');

// Define los locales y namespaces
const locales = ['en', 'es', 'sv'];
const namespaces = ['about', 'banner', 'footer', 'header', 'homePage', 'plans'];

// Crea las carpetas y archivos JSON
locales.forEach(locale => {
  const dir = path.join(__dirname, 'messages', locale);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir); // Crea la carpeta si no existe
  namespaces.forEach(ns => {
    const filePath = path.join(dir, `${ns}.json`);
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, '{}'); // Crea un archivo JSON vacío
      console.log(`Created ${filePath}`);
    } else {
      console.log(`${filePath} already exists, skipping`);
    }
  });
});

console.log('Message directories and files generated successfully!');