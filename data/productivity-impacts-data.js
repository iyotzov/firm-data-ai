const productivityImpactsData = {
  id: "productivity_impacts",
  title: "Impact of AI on productivity",
  tabLabel: "Productivity Impacts",
  rowLabel: "Impact Category",
  downloadBase: "productivity-impacts-ai",
  measureLabel: "productivity",
  defaultPeriod: "past_3_years",
  categories: [
    "Large negative impact, reducing productivity by >5%",
    "Small negative impact, reducing productivity by <5%",
    "No impact",
    "Small positive impact, increasing productivity by <5%",
    "Large positive impact, increasing productivity by >5%"
  ],
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
  // One entry per impact horizon, each with its survey waves in chronological order, earliest first. Charts show
  // the latest wave; the change chart compares all waves. Each entry's "average" is its cumulative impact (%).
  periods: [
    {
      id: "past_3_years",
      label: "Impacts over last 3 years",
      sourceSheet: "AI Prod Past 3y",
      title: "Impact of AI on productivity over the past 3 years (% of respondents, cumulative impact)",
      horizon: "over the past 3 years",
      averageLabel: "Cumulative impact over past 3 years (%)",
      questionNote:
        "The data are based on responses to the question: \"How has the adoption of artificial intelligence technologies affected the volume of sales per employee in your business over the past three years?\"",
      waves: [
        {
          id: "2025_nov_jan",
          label: "Nov 2025 – Jan 2026",
          shortLabel: "Nov 25–Jan 26",
          data: {
            all_firms: { fieldwork: "Nov 2025 – Jan 2026", responses: 5813, values: [0.23195843798382934, 0.819202167555479, 89.41142126268709, 7.8135707896094955, 1.7029785996903493], average: 0.2851857276793394 },
            us: { fieldwork: "Nov 2025", responses: 988, values: [0.0, 0.5, 91.4, 7.0, 1.0], average: 0.2375 },
            uk: { fieldwork: "Nov 2025 – Jan 2026", responses: 1972, values: [0.16, 0.71, 89.32, 8.28, 1.53], average: 0.29200000000000004 },
            germany: { fieldwork: "Jan 2026", responses: 2251, values: [0.37, 0.43, 91.34, 6.12, 1.73], average: 0.24425 },
            australia: { fieldwork: "Dec 2025", responses: 602, values: [0.3322, 3.1561, 79.2359, 13.9535, 3.3223], average: 0.4941925 }
          },
          notes:
            "The data from the US Survey of Business Uncertainty was collected in November 2025. The data from the UK Decision Maker Panel was collected over November 2025 – January 2026. The data from the German Bundesbank Online Panel – Firms (BOP-F) were collected in January 2026. The data from the Australian Business Outlook Scenarios Survey was collected in December 2025. The results from the SBU, DMP, and BOP-F are employment-weighted; the results from the BOSS are unweighted."
        },
        {
          id: "2026_may_jul",
          label: "May – Jul 2026",
          shortLabel: "May–Jul 26",
          data: {
            all_firms: { fieldwork: "May – Jul 2026", responses: 8438, values: [0.39157169945484704, 1.1395679070869873, 83.3759567670064, 12.214340033183218, 2.8964043138184405], average: 0.4647317492296753 },
            us: { fieldwork: "Jun 2026", responses: 964, values: [0.0, 1.4, 82.8, 13.5, 2.3], average: 0.475 },
            canada: { fieldwork: "May – Jun 2026", responses: 517, values: [0.5802707930367504, 1.7408123791102514, 85.49323017408123, 9.284332688588007, 2.9013539651837523], average: 0.36266924564796904 },
            uk: { fieldwork: "May – Jul 2026", responses: 1964, values: [0.13, 0.57, 82.24, 14.4, 2.66], average: 0.5355000000000001 },
            germany: { fieldwork: "Jan 2026", responses: 2251, values: [0.37, 0.43, 91.34, 6.12, 1.73], average: 0.24425, footnote: "Germany data were collected in January 2026; no newer data on AI impacts are available." },
            australia: { fieldwork: "Jun 2026", responses: 908, values: [1.2115, 2.533, 81.6079, 9.4714, 5.1762], average: 0.47081249999999997 },
            mexico: { fieldwork: "Jun 2026", responses: 1719, values: [0.3, 1.5, 74.8, 19.6, 3.9], average: 0.7225 },
            south_africa: { fieldwork: "May 2026", responses: 115, values: [2.61, 3.48, 84.35, 7.83, 1.74], average: 0.04350000000000001 }
          },
          notes:
            "The data from the US Survey of Business Uncertainty was collected in June 2026. The data from the UK Decision Maker Panel was collected over May – July 2026. The data from the German Bundesbank Online Panel – Firms (BOP-F) were collected in January 2026, as no newer data on AI impacts are available. The data from the Australian Business Outlook Scenarios Survey was collected in June 2026. The data from the Canadian Business Leaders' Pulse was collected over May – June 2026. The data from the Mexican Monthly Survey on Regional Economic Activity was collected in June 2026. The data from the South African Quarterly inflation expectations survey was collected in May 2026. The results from the SBU, DMP, BOP-F, and EMAER are employment-weighted; the results from the BOSS, BLP, and South African Quarterly inflation expectations survey are equal-weighted."
        }
      ]
    },
    {
      id: "next_3_years",
      label: "Expected impacts over next 3 years",
      sourceSheet: "AI Prod Next 3y",
      title: "Expected impact of AI on productivity over the next 3 years (% of respondents, cumulative impact)",
      horizon: "over the next 3 years",
      averageLabel: "Cumulative impact over next 3 years (%)",
      questionNote:
        "The data are based on responses to the question: \"How has the adoption of artificial intelligence technologies affected the volume of sales per employee in your business over the past three years? And how do you expect this to affect your volume of sales per employee over the next 3 years?\"",
      waves: [
        {
          id: "2025_nov_jan",
          label: "Nov 2025 – Jan 2026",
          shortLabel: "Nov 25–Jan 26",
          data: {
            all_firms: { fieldwork: "Nov 2025 – Jan 2026", responses: 5878, values: [1.044084926845866, 1.4927284450493365, 59.735004423273224, 25.45746781218101, 12.291723239197006], average: 1.4426913576046274 },
            us: { fieldwork: "Nov 2025", responses: 1005, values: [1.0, 0.9, 38.7, 42.4, 17.1], average: 2.245 },
            uk: { fieldwork: "Nov 2025 – Jan 2026", responses: 1972, values: [0.82, 1.25, 53.24, 28.01, 16.68], average: 1.8585 },
            germany: { fieldwork: "Jan 2026", responses: 2299, values: [0.92, 1.22, 72.44, 18.7, 6.73], average: 0.87275 },
            australia: { fieldwork: "Dec 2025", responses: 602, values: [2.3256, 4.3189, 67.608, 14.6179, 11.1296], average: 0.917775 }
          },
          notes:
            "The data from the US Survey of Business Uncertainty was collected in November 2025. The data from the UK Decision Maker Panel was collected over November 2025 – January 2026. The data from the German Bundesbank Online Panel – Firms (BOP-F) were collected in January 2026. The data from the Australian Business Outlook Scenarios Survey was collected in December 2025. The results from the SBU, DMP, and BOP-F are employment-weighted; the results from the BOSS are unweighted."
        },
        {
          id: "2026_may_jul",
          label: "May – Jul 2026",
          shortLabel: "May–Jul 26",
          data: {
            all_firms: { fieldwork: "May – Jul 2026", responses: 8568, values: [1.3158200280112045, 2.360974509803921, 53.38538870214753, 27.363175443510737, 15.594968207282914], average: 1.6959911367880487 },
            us: { fieldwork: "Jun 2026", responses: 1018, values: [2.0, 3.1, 35.5, 37.9, 21.5], average: 2.3325 },
            canada: { fieldwork: "May – Jun 2026", responses: 542, values: [1.845018450184502, 2.029520295202952, 49.6309963099631, 25.461254612546124, 21.03321033210332], average: 2.024907749077491 },
            uk: { fieldwork: "May – Jul 2026", responses: 1964, values: [0.68, 2.38, 35.17, 38.05, 23.71], average: 2.619 },
            germany: { fieldwork: "Jan 2026", responses: 2299, values: [0.92, 1.22, 72.44, 18.7, 6.73], average: 0.87275, footnote: "Germany data were collected in January 2026; no newer data on AI impacts are available." },
            australia: { fieldwork: "Jun 2026", responses: 908, values: [3.7445, 5.1762, 65.6388, 15.3084, 10.1322], average: 0.7323824999999999 },
            mexico: { fieldwork: "Jun 2026", responses: 1719, values: [0.4, 1.8, 53.9, 27.6, 16.4], average: 1.845 },
            south_africa: { fieldwork: "May 2026", responses: 118, values: [5.93, 5.93, 55.08, 25.42, 7.63], average: 0.6147500000000001 }
          },
          notes:
            "The data from the US Survey of Business Uncertainty was collected in June 2026. The data from the UK Decision Maker Panel was collected over May – July 2026. The data from the German Bundesbank Online Panel – Firms (BOP-F) were collected in January 2026, as no newer data on AI impacts are available. The data from the Australian Business Outlook Scenarios Survey was collected in June 2026. The data from the Canadian Business Leaders' Pulse was collected over May – June 2026. The data from the Mexican Monthly Survey on Regional Economic Activity was collected in June 2026. The data from the South African Quarterly inflation expectations survey was collected in May 2026. The results from the SBU, DMP, BOP-F, and EMAER are employment-weighted; the results from the BOSS, BLP, and South African Quarterly inflation expectations survey are equal-weighted."
        }
      ]
    }
  ],
  methodNote:
    "The results for all firms are the average of the surveys in each wave, weighted by the respective number of responses. To calculate the cumulative impact, values are assigned to each of the options: large negative/large positive impacts are treated as ±7.5%; small negative/small positive impacts are treated as ±2.5%."
};
