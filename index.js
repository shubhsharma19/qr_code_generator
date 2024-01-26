import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs/promises';

const QR_CODE_SIZE = 4;
const URL_REGEX = /^https?:\/\/.+/;

const generateQRCode = (url, size) => {
    const qrImage = qr.image(url, { size });
    qrImage.pipe(fs.createWriteStream('qr_img.png'));
};

const saveURLToFile = async (url) => {
    try {
        await fs.writeFile('url-text.txt', url);
        console.log('URL saved to file: url-text.txt');
    } catch (err) {
        console.error('Error saving URL to file:', err.message);
    }
};

const validateURL = (url) => {
    return URL_REGEX.test(url);
};

const main = async () => {
    try {
        const answers = await inquirer.prompt([
            {
                message: 'Please type in your URL:',
                name: 'URL',
                validate: (input) => {
                    return validateURL(input) ? true : 'Please enter a valid URL';
                },
            },
        ]);

        const url = answers.URL;
        generateQRCode(url, QR_CODE_SIZE);
        await saveURLToFile(url);
        
        console.log('QR Code generated and URL saved successfully!');
    } catch (error) {
        console.error('An error occurred:', error.message);
    }
};

// Call the main function
main();
