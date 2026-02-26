# Firm AI Use Dashboard

This provides a dashboard to visualise data based on the NBER Working Paper "Firm Data on AI"

Citation: Yotzov, I, J M Barrero, N Bloom, P Bunn, S J Davis, K M Foster, A Jalca, B H Meyer, P Mizen, M A Navarrete, P Smietanka, G Thwaites and B Z Wang (2026), "Firm Data on AI", NBER Working Paper 34836.

This dashboard visualizes:

- `current-ai-adoption`: AI technologies currently used
- `expected-ai-adoption`: AI technologies expected to be used over the next 3 years
- `personal-ai-use`: personal AI use frequency by survey respondent
- `Figure 8 + Figure 9`: employment impacts of AI (single tab with in-tab horizon switch)
- `Figure 10 + Figure 11`: productivity impacts of AI (single tab with in-tab horizon switch)
- `About`: static layout tab with sections for team and survey details

## Open the dashboard

1. Open `/Users/iyotzov/Documents/GitHub/firm-data-ai/index.html` in a web browser.
2. Use the tabs to switch between datasets (`current-ai-adoption`, `expected-ai-adoption`, `personal-ai-use`, `Employment Impacts`, `Productivity Impacts`, and `About`).
3. In `Employment Impacts` and `Productivity Impacts`, use the in-tab horizon switch to toggle:
   - `Impacts over last 3 years` (Figure 8/10, depending on tab)
   - `Expected impacts over next 3 years` (Figure 9/11, depending on tab)
4. Use the selectors to:
   - compare one technology across countries
   - view the technology mix for a selected country
5. Use **Download CSV** to export the underlying data used in the active tab.

## Files

- `index.html`: dashboard structure
- `styles.css`: visual style and responsive layout
- `app.js`: interaction logic and rendering
- `data/current-ai-adoption-data.js`: extracted data from the spreadsheet + CSV export helper
- `data/expected-ai-adoption-data.js`: extracted data from the spreadsheet + CSV export helper
- `data/personal-ai-use-data.js`: extracted data from the spreadsheet + CSV export helper
- `data/employment-impacts-data.js`: combined extracted data from `Figure 8` and `Figure 9`
- `data/productivity-impacts-data.js`: combined extracted data from `Figure 10` and `Figure 11`
- `data/current-ai-adoption.csv`: flat CSV copy of the visualized dataset
- `data/expected-ai-adoption.csv`: flat CSV copy of the visualized dataset
- `data/personal-ai-use.csv`: flat CSV copy of the visualized dataset
- `data/employment-impacts.csv`: flat CSV copy of employment impacts data
- `data/productivity-impacts.csv`: flat CSV copy of productivity impacts data

## Scope

The dashboard includes these technology rows for both `current-ai-adoption` and `expected-ai-adoption`:

- Any AI Technology
- Other
- Data processing using ML
- Visual content creation
- Text generation using LLMs
- Image processing using ML
- Robotics
- Autonomous vehicles

`personal-ai-use` includes personal use frequency categories:

- Not at all
- Up to 1 hour a week
- 1 to 5 hours a week
- >5 hours a week

`Employment Impacts` includes:

- Distribution categories by country (left chart)
- Cumulative impact by country (right chart)
- In-tab horizon switch between `Figure 8` and `Figure 9`

`Productivity Impacts` includes:

- Distribution categories by country (left chart)
- Cumulative impact by country (right chart)
- In-tab horizon switch between `Figure 10` and `Figure 11`

`About` includes:

- `The Team` section placeholder
- `The Surveys` section placeholder
