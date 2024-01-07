// using node modules such as inquirer and qr-image create a qr code generator 

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs'


inquirer
    .prompt([
        // question is an object which takes some key value pairs, 
        // using message property which will be shown as a prompt.
        // and URL for url
        {
            "message": "Please type in your URL:",
            "name": "URL"
        }])
    .then((answers) => {
        // after the prompt 
        // saved the url in variable
        const url = answers.URL;

        // converted url into qr image of size 4
        let qr_png = qr.image(url, { size: 4 });

        // writing image using fs module into the directory
        qr_png.pipe(fs.createWriteStream('qr_img.png'));

        // writing the url in
        fs.writeFile('url-text.txt', url, (err)=> {
            if(err) throw err;
            console.log('File saved!')
        })
    })
    .catch((error) => {
        console.log(error);
    });