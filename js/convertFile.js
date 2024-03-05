'use strict';

const fs = require('fs');
const markdownToHTML = require('./markdownToHTML');

const convertFile = (inputPath, outputPath = null) => {
  fs.readFile(inputPath, 'utf8', (err, data) => {
      if (err) {
          console.error(`Error reading file: ${err}`);
          process.exit(1);
      }

      try {
          const html = markdownToHTML(data);

          if (outputPath) {
              fs.writeFile(outputPath, html, (err) => {
                  if (err) {
                      console.error(`Error writing file: ${err}`);
                      process.exit(1);
                  }
              });
          } else {
              console.log(html);
          }
      } catch (err) {
          console.error(`Error converting markdown to HTML: ${err}`);
          process.exit(1);
      }
  });
}

module.exports = convertFile;
