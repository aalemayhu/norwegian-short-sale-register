const https = require('https');
const path = require('path');
const fs = require('fs');

const fileUrl = 'https://ssr.finanstilsynet.no/api/v2/openapi.json';
const outputFolder = './config';

if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder);
}

const filePath = path.join(outputFolder, 'openapi.json');

https.get(fileUrl, (response) => {
  if (response.statusCode === 200) {
    const fileStream = fs.createWriteStream(filePath);
    response.pipe(fileStream);
    fileStream.on('finish', () => {
      fileStream.close(() => {
        console.log(`🟢 File downloaded to: ${filePath}`);
      });
    });
  } else {
    console.error(`Failed to download file. Status Code: ${response.statusCode}`);
  }
}).on('error', (error) => {
  console.error(`Error: ${error.message}`);
});
