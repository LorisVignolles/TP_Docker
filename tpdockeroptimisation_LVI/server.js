const express = require('express');
const fs = require('fs');
const path = require('path');


const app = express();


// Middleware verbeux et un peu inutile
app.use((req, res, next) => {
console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
next();
});


app.get('/', (req, res) => {
res.send('Hello world — serveur volontairement non optimisé mais fonctionnel');
});



app.get('/big', (req, res) => {
  const filePath = path.join(__dirname, 'maybe-big-file.txt');

  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      return res.status(404).send('Fichier introuvable');
    }

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.write('<div style="white-space: pre-line;">');

    const stream = fs.createReadStream(filePath, { encoding: 'utf8' });
    stream.on('data', chunk => res.write(chunk));
    stream.on('end', () => res.end('</div>'));
    stream.on('error', () => res.status(500).end('Erreur lecture'));
  });
});


const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});

const shutdown = (signal) => {
  console.log(`Signal ${signal} reçu, arrêt progressif du serveur...`);
  server.close(() => {
    console.log('Connexions fermées, conteneur arrêté proprement.');
    process.exit(0);
  });
};

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));