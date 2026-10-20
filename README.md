# Firm Data on AI — Interactive Dashboard

An interactive data dashboard accompanying the NBER Working Paper **"Firm Data on AI"**. It visualises firm-level survey results on AI adoption, personal AI use, and the employment and productivity impacts of AI across multiple countries.

> **Citation:** Yotzov, I., J. M. Barrero, N. Bloom, P. Bunn, C. Chawla, S. J. Davis, K. M. Foster, A. Jalca, B. H. Meyer, P. Mizen, M. A. Navarrete, S. Oh, P. Smietanka, K. Garcia Loredo, M. Reid, G. Thwaites and B. Z. Wang (2026), "Firm Data on AI", *NBER Working Paper* 34836.

---

## Features

| Tab | Description |
|-----|-------------|
| **Current AI Adoption** | AI technologies currently in use by firms |
| **Expected AI Adoption** | AI technologies firms expect to adopt over the next 3 years |
| **Personal AI Use** | Weekly AI use frequency reported by survey respondents |
| **Employment Impacts** | Distribution and cumulative employment effects of AI (past 3 years / next 3 years) |
| **Productivity Impacts** | Distribution and cumulative productivity effects of AI (past 3 years / next 3 years) |
| **Survey Questions** | Screenshots of the AI questions as asked in each country's survey |
| **About Us** | Information about the research team and surveys |

- Compare a single technology across countries, or view the full technology mix for a selected country
- Toggle between backward-looking and forward-looking horizons in the impact tabs
- Download the underlying data as CSV directly from the dashboard

---

## Getting Started

No build step or server is required — the dashboard is a static HTML/CSS/JS application.

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/firm-data-ai.git
   ```
2. Open `index.html` in any modern web browser.

---

## Project Structure

```
firm-data-ai/
├── index.html          # Dashboard layout and markup
├── styles.css          # Styling and responsive layout
├── app.js              # Interaction logic and chart rendering
├── data/
│   ├── *-data.js       # JavaScript data modules for each tab
│   └── *.csv           # Flat CSV exports of each dataset
├── screenshots/
│   └── <country>/      # Survey question screenshots, one folder per country
├── scripts/
│   └── build_impact_data.py  # Builds the impact tabs' data from the workbook
└── README.md
```

---

## Updating the Impact Data

The Employment Impacts and Productivity Impacts data files are generated from the "Main Data for Sharing" workbook:

```bash
pip install openpyxl
python3 scripts/build_impact_data.py "data/Firm Data on AI - Main Data for Sharing - October 2026.xlsx"
```

This rewrites `data/employment-impacts-data.js`, `data/productivity-impacts-data.js` and their CSVs. Before writing, it checks each table against the workbook's own formulas: every cumulative impact must match its shares, and every "All Firms" column must be the response-weighted average of its countries. Fieldwork dates and notes are not in the workbook's tables, so they live in the `WAVES` list at the top of the script. To add a new survey wave, append it there and point it at the new table's row.

---

## Adding Survey Question Screenshots

The Survey Questions tab is driven by `data/survey-questions-data.js`. To add another country:

1. Put its screenshots in a new folder, e.g. `screenshots/uk/`.
2. Append an entry to `surveys` in `data/survey-questions-data.js` with the country label, survey name and link, and one `{ title, image, alt }` item per screenshot. The `alt` text should give the question wording, for screen readers.

A country button appears on the tab for each entry, in the order listed.

---

## Data Coverage

**AI technologies** tracked (Current & Expected Adoption tabs):

- Any AI Technology · Text generation using LLMs · Data processing using ML · Image processing using ML · Visual content creation · Robotics · Autonomous vehicles · Other

**Personal AI use** frequency categories:

- Not at all · Up to 1 hour a week · 1–5 hours a week · >5 hours a week

**Countries:** UK · US · Australia · Germany (plus an all-firms aggregate)

---

## License

Please refer to the terms of the NBER working paper for data usage and citation requirements.
