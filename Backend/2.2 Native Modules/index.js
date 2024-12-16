const fs = require("fs");

// fs.writeFile("message.txt", "Bonjour à partir de NodeJS!", (err) => {
//     if (err) throw err;
//     console.log('le fichier a bien été enregistré!');
//   });

fs.readFile('message.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });