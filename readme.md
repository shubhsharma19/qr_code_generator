# Basic QR Code Generator 

## Overview

This is a simple QR code generator command-line tool built using Node.js. It utilizes the npm modules "inquirer" for user input and "qr-image" for generating QR codes.

User enters a valid URL and then gets an image of QR in png format for that particular URL.

## Prerequisites

Make sure you have Node.js and npm installed on your machine.

## Installation

1. Clone this repository:

```bash
git clone https://github.com/your-username/qr-code-generator.git
```

2. cd into the project directory:

```bash
cd qr-code-generator
```

3. Install dependencies:
```bash 
npm install inquirer qr-image
```

## Usage

Run the generator using the following command:

```bash
node index.js
```

Follow the prompts to enter the URL for your QR code. The generated QR code will be saved as a PNG image in the output directory.

## Features
**Customization:** Generate QR codes with custom data.
**Save Output:** Saves the generated QR code as a PNG and the url into a text file as well.

## Dependencies

[inquirer](https://www.npmjs.com/package/inquirer): A collection of common interactive command-line user interfaces.

[qr-image](https://www.npmjs.com/package/qr-image): A QR code generator for Node.js.

## Contributing

If you'd like to contribute to the project, please open an issue or create a pull request on the GitHub repository.
