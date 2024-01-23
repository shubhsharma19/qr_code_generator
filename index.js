import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs/promises'; // Using fs.promises for async/await

const generateQRCode = (url, size) => {
    const qrImage = qr.image(url, { size });
    qrImage.pipe(fs.createWriteStream('qr_img.png'));
};

const saveURLToFile = async (url) => {
    try {
        await fs.writeFile('url-text.txt', url);
        console.log('URL saved to file!');
    } catch (err) {
        console.error('Error saving URL to file:', err.message);
    }
};

const main = async () => {
    try {
        const answers = await inquirer.prompt([
            {
                message: 'Please type in your URL:',
                name: 'URL',
            },
        ]);

        const url = answers.URL;
        generateQRCode(url, 4);
        await saveURLToFile(url);
    } catch (error) {
        console.error('An error occurred:', error.message);
    }
};

// Call the main function
main();
