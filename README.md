# 📄 PDF Table Extractor

A Node.js utility to **extract tables from PDF files** and **export them as Excel (.xlsx)** files.

---

## 🚀 Tech Stack

- **Node.js** - JavaScript runtime
- **pdf-parse** - For extracting raw text and metadata from PDFs
- **pdf-table-extractor** - For detecting and parsing tables
- **xlsx** - For generating Excel files from extracted data

---

## 📁 Folder Structure

```
project-root/
├── pdfs/              # Put your input PDF files here
├── tables/            # Extracted Excel files will be saved here
├── Pdf Table Extractor.js
├── .gitignore
└── README.md
```

---

## 🔧 Installation & Setup

1. **Clone the repo** or **download the source code**.
2. **Navigate to the project directory**:

```bash
cd Pdf-Extractor
```

3. **Install dependencies**:

```bash
npm install pdf-parse xlsx
```

> If `pdf-table-extractor` is not in your `node_modules`, you can add it manually or use a local copy as shown in the project.

---

## 📅 How to Use

1. **Add PDF files** to the `pdfs/` folder.
2. **Run the script**:

```bash
node "Pdf Table Extractor.js"
```

3. **Output**: The script will create Excel files for each PDF in the `tables/` folder.

Each sheet in the Excel file represents a detected table from the corresponding PDF.

---

## 📆 Example

```
pdfs/
├── invoice1.pdf
├── invoice2.pdf

tables/
├── invoice1.xlsx
├── invoice2.xlsx
```

---

## 🚧 Limitations

- Only structured tables are detected (complex formatting may not be parsed well).
- Ensure your PDFs contain clear, grid-like tables for best results.

---



---

## 📄 Author

**Prateek202** — [GitHub](https://github.com/Prateek202)

