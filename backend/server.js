const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');
const pdfTable = require('pdf2table');
const xlsx = require('xlsx');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ dest: 'uploads/' });

const PORT = 5000;

app.post('/upload', upload.single('file'), (req, res) => {
  const filePath = req.file.path;
  const fileName = req.file.originalname.split('.pdf')[0];
  const outputFile = `output/${fileName}.xlsx`;

  fs.readFile(filePath, (err, buffer) => {
    if (err) return res.status(500).send('Failed to read uploaded file.');

    pdfTable.parse(buffer, (err, rows) => {
      if (err) return res.status(500).send('Failed to extract tables.');

      const wb = xlsx.utils.book_new();
      const ws = xlsx.utils.aoa_to_sheet(rows);
      xlsx.utils.book_append_sheet(wb, ws, "Sheet1");
      xlsx.writeFile(wb, outputFile);

      res.download(outputFile, `${fileName}.xlsx`, () => {
        fs.unlinkSync(filePath); // Clean up PDF
        fs.unlinkSync(outputFile); // Optional: Clean Excel after download
      });
    });
  });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
