import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

// Function to generate and save QR code
const generateQRCode = (url, size) => {
    const qrImage = qr.image(url, { size });
    qrImage.pipe(fs.createWriteStream('qr_img.png'));
};

const saveURLToFile = (url) => {
    fs.writeFile('url-text.txt', url, (err) => {
        if (err) throw err;
        console.log('URL saved to file!');
    });
};

inquirer
    .prompt([
        {
            message: 'Please type in your URL:',
            name: 'URL',
        },
    ])
    .then((answers) => {
        const url = answers.URL;
        generateQRCode(url, 4);
        saveURLToFile(url);
    })
    .catch((error) => {
        console.error(error);
    });
