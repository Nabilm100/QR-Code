/* 


1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
//var qr = require('qr-image');
import inquirer from 'inquirer';
import qr from 'qr-image';
import { createWriteStream } from 'fs';
import { writeFile } from 'fs/promises';

async function run() {
  try {
    // Prompt for URL input
    const answers = await inquirer.prompt([{
      message: "What is the URL?",
      name: "URL",
    }]);

    const url = answers.URL;

    // Generate QR code image
    const qr_svg = qr.image(url);
    const writeStream = createWriteStream('qr_img.png');

    // Wait for the QR code image to be fully written
    await new Promise((resolve, reject) => {
      qr_svg.pipe(writeStream);
      writeStream.on('finish', resolve);
      writeStream.on('error', reject);
    });

    // Write the URL to a text file
    await writeFile('msg.txt', url);
    console.log('The file has been saved!');

    // Now you can safely print this after all tasks are done
    console.log("letsgoooo");
    console.log("yala bena")

  } catch (error) {
    console.error('An error occurred:', error);
  }
}

run();





