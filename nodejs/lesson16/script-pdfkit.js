//Node 14.15.1 LTS
//PDFKit

//npm install pdfkit
//yarn add pdfkit

const PDFDocument = require('pdfkit');
const fs = require('fs');
const doc = new PDFDocument();

doc.pipe(fs.createWriteStream('nodejs/data/pdf/output.pdf'));

doc
  //.font('fonts/<FONT_NAME>.ttf')
  .fontSize(25)
  .text('Some text with an embedded font!', 100, 100);

//doc.image('path/to/image.png', {
//  fit: [250, 300],
//  align: 'center',
//  valign: 'center'
//});
//
//doc
//  .addPage()
//  .fontSize(25)
//  .text('Here is some vector graphics...', 100, 100);
//
//// Draw a triangle
//doc
//  .save()
//  .moveTo(100, 150)
//  .lineTo(100, 250)
//  .lineTo(200, 250)
//  .fill('#FF3300');
//
//// Add some text with annotations
//doc
//  .addPage()
//  .fillColor('blue')
//  .text('Here is a link!', 100, 100)
//  .underline(100, 100, 160, 27, { color: '#0000FF' })
//  .link(100, 100, 160, 27, 'http://google.com/');

doc.end();