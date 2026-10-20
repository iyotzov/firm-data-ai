const personalAiUseData = {
  id: "personal_ai_use",
  title: "Frequency of AI use by survey respondent (% of respondents, average use)",
  sourceSheet: "AI Freq",
  tabLabel: "Personal AI Use",
  rowLabel: "Category",
  downloadBase: "personal-ai-use",
  categories: ["Not at all", "Up to 1 hour a week", "1 to 5 hours a week", ">5 hours a week"],
  averageLabel: "Average use per week (hours)",
  // Display order. "All Firms" in each wave is the response-weighted average of the countries in that wave.
  countries: [
    { id: "all_firms", label: "All Firms", source: "Average across all firms in the surveyed countries" },
    { id: "us", label: "US", source: "US Survey of Business Uncertainty" },
    { id: "canada", label: "Canada", source: "Canada Business Leaders' Pulse (BLP)" },
    { id: "uk", label: "UK", source: "UK Decision Maker Panel" },
    { id: "germany", label: "Germany", source: "Germany Bundesbank Online Panel - Firms" },
    { id: "australia", label: "Australia", source: "Australia Business Outlook Scenarios Survey" },
    { id: "mexico", label: "Mexico", source: "Mexico Monthly Survey on Regional Economic Activity (EMAER)" },
    { id: "south_africa", label: "South Africa", source: "South Africa Quarterly inflation expectations survey" }
  ],
  // Chronological order, earliest first. Charts show the latest wave; the change chart compares all waves.
  waves: [
    {
      id: "2025_nov_jan",
      label: "Nov 2025 – Jan 2026",
      shortLabel: "Nov 25–Jan 26",
      data: {
        all_firms: {
          fieldwork: "Nov 2025 – Jan 2026",
          responses: 6418,
          values: [28.216037706450606, 40.718884387659706, 23.741855718292307, 7.344358055468993],
          average: 1.4666769476472425
        },
        us: { fieldwork: "Nov 2025", responses: 1084, values: [27.8, 35, 28.6, 8.7], average: 1.6855000000000002 },
        uk: { fieldwork: "Nov 2025 – Jan 2026", responses: 2007, values: [25.44, 44.9, 23.19, 6.47], average: 1.40545 },
        germany: { fieldwork: "Jan 2026", responses: 2725, values: [29.21, 41.02, 22.58, 7.2], average: 1.4225 },
        australia: {
          fieldwork: "Dec 2025",
          responses: 602,
          values: [33.7209302325581, 35.7142857142857, 22.093023255814, 8.47176079734219],
          average: 1.4767441860465127
        }
      },
      notes:
        "The data from the US Survey of Business Uncertainty was collected in November 2025. The data from the UK Decision Maker Panel was collected over November 2025 – January 2026. The data from the Australian Business Outlook Scenarios Survey was collected in December 2025. The data from the German Bundesbank Online Panel – Firms (BOP-F) were collected in January 2026. The results from the SBU, DMP, and BOP-F are employment-weighted; the results from the BOSS are unweighted."
    },
    {
      id: "2026_may_jul",
      label: "May – Jul 2026",
      shortLabel: "May–Jul 26",
      data: {
        all_firms: {
          fieldwork: "May – Jul 2026",
          responses: 9224,
          values: [20.835523633998264, 35.276179531656545, 30.427477233304423, 13.472063096270599],
          average: 2.0996099468777105
        },
        us: { fieldwork: "Jun 2026", responses: 1097, values: [16.7, 29.4, 37.3, 16.7], average: 2.5185 },
        uk: { fieldwork: "May – Jul 2026", responses: 2014, values: [15.26, 39.33, 32.2, 13.22], average: 2.15415 },
        germany: { fieldwork: "Jul 2026", responses: 2492, values: [21.78, 36.62, 27.63, 13.96], average: 2.059 },
        australia: { fieldwork: "Jun 2026", responses: 908, values: [24.45, 35.24, 27.53, 12.78], average: 1.9606000000000001 },
        canada: { fieldwork: "May – Jun 2026", responses: 873, values: [20, 30, 32, 18], average: 2.46 },
        mexico: { fieldwork: "Jun 2026", responses: 1719, values: [26.7, 35.3, 28.8, 9.2], average: 1.7305000000000001 },
        south_africa: { fieldwork: "May 2026", responses: 121, values: [27.27, 31.4, 29.75, 11.57], average: 1.9172500000000001 }
      },
      notes:
        "The data from the US Survey of Business Uncertainty was collected in June 2026. The data from the UK Decision Maker Panel was collected over May – July 2026. The data from the German Bundesbank Online Panel – Firms (BOP-F) were collected in July 2026. The data from the Australian Business Outlook Scenarios Survey was collected in June 2026. The data from the Canadian Business Leaders' Pulse was collected over May – June 2026. The data from the Mexican Monthly Survey on Regional Economic Activity was collected in June 2026. The data from the South African Quarterly inflation expectations survey was collected in May 2026. The results from the SBU, DMP, BOP-F, and EMAER are employment-weighted; the results from the BOSS, BLP, and South African Quarterly inflation expectations survey are equal-weighted."
    }
  ],
  questionNote:
    "The data are based on responses to the question: \"On average, how frequently do you personally use artificial intelligence technologies in a typical working week?\"",
  methodNote:
    "The results for all firms are the average of the surveys in each wave, weighted by the respective number of responses. To calculate the average use per week, values are assigned to each of the options: 0 to \"Not at all\"; 0.5 to \"up to 1 hour a week\"; 3 to \"1 to 5 hours a week\"; 7.5 to \">5 hours a week\"."
};
