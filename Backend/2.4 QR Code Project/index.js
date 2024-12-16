/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import fs from "fs";
import qr from "qr-image";

inquirer
    .prompt([
        {
            message: 'Quel est l\'URL ?',
            name: 'url',
        }
    ])
    .then((answers) => {
        var qr_svg = qr.image(answers.url);
        qr_svg.pipe(fs.createWriteStream("url.png"));

        fs.writeFile("url.txt", answers.url, (err) => {
            if (err) throw err;
            console.log('le fichier a bien été enregistré!');
        });
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });
