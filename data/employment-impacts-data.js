const employmentImpactsData = {
  id: "employment_impacts",
  title: "Impact of AI on employment",
  tabLabel: "Employment Impacts",
  rowLabel: "Impact Category",
  downloadBase: "employment-impacts-ai",
  measureLabel: "employment",
  defaultPeriod: "past_3_years",
  categories: [
    "Large negative impact, reducing employment by >5%",
    "Small negative impact, reducing employment by <5%",
    "No impact",
    "Small positive impact, increasing employment by <5%",
    "Large positive impact, increasing employment by >5%"
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
      sourceSheet: "AI Emp Past 3y",
      title: "Impact of AI on employment over the past 3 years (% of respondents, cumulative impact)",
      horizon: "over the past 3 years",
      averageLabel: "Cumulative impact over past 3 years (%)",
      questionNote:
        "The data are based on responses to the question: \"How has the adoption of artificial intelligence technologies affected the number of employees in your business over the past three years?\"",
      waves: [
        {
          id: "2025_nov_jan",
          label: "Nov 2025 – Jan 2026",
          shortLabel: "Nov 25–Jan 26",
          data: {
            all_firms: { fieldwork: "Nov 2025 – Jan 2026", responses: 5802, values: [0.9268578076525338, 4.134996001378835, 90.52406938986556, 3.217072871423647, 1.2106337125129265], average: -0.0016648853843502405 },
            us: { fieldwork: "Nov 2025", responses: 988, values: [1.6, 4.8, 89.2, 3.7, 0.8], average: -0.0875 },
            uk: { fieldwork: "Nov 2025 – Jan 2026", responses: 1972, values: [1.2, 6.57, 88.89, 2.79, 0.54], average: -0.14400000000000002 },
            germany: { fieldwork: "Jan 2026", responses: 2240, values: [0.46, 1.47, 95.0, 1.7, 1.37], average: 0.07400000000000001 },
            australia: { fieldwork: "Dec 2025", responses: 602, values: [0.6645, 4.9834, 81.3953, 9.4684, 3.4884], average: 0.3239175 }
          },
          notes:
            "The data from the US Survey of Business Uncertainty was collected in November 2025. The data from the UK Decision Maker Panel was collected over November 2025 – January 2026. The data from the German Bundesbank Online Panel – Firms (BOP-F) were collected in January 2026. The data from the Australian Business Outlook Scenarios Survey was collected in December 2025. The results from the SBU, DMP, and BOP-F are employment-weighted; the results from the BOSS are unweighted."
        },
        {
          id: "2026_may_jul",
          label: "May – Jul 2026",
          shortLabel: "May–Jul 26",
          data: {
            all_firms: { fieldwork: "May – Jul 2026", responses: 8744, values: [1.1837397072278133, 5.032369441903019, 86.57333183897529, 5.416494190301921, 1.7940648215919488], average: 0.05537750228728272 },
            us: { fieldwork: "Jun 2026", responses: 974, values: [0.3, 4.6, 88.2, 5.6, 1.3], average: 0.1 },
            canada: { fieldwork: "May – Jun 2026", responses: 799, values: [1.5018773466833542, 4.130162703379224, 88.36045056320401, 3.504380475594493, 2.5031289111389237], average: 0.059449311639549446 },
            uk: { fieldwork: "May – Jul 2026", responses: 1988, values: [0.91, 6.97, 87.54, 3.87, 0.71], average: -0.0925 },
            germany: { fieldwork: "Jan 2026", responses: 2240, values: [0.46, 1.47, 95.0, 1.7, 1.37], average: 0.07400000000000001, footnote: "Germany data were collected in January 2026; no newer data on AI impacts are available." },
            australia: { fieldwork: "Jun 2026", responses: 908, values: [4.185, 8.1498, 74.3392, 9.9119, 3.4141], average: -0.013765000000000001 },
            mexico: { fieldwork: "Jun 2026", responses: 1719, values: [1.0, 6.5, 79.5, 10.3, 2.7], average: 0.2225 },
            south_africa: { fieldwork: "May 2026", responses: 116, values: [4.31, 4.31, 81.9, 7.76, 1.72], average: -0.10799999999999996 }
          },
          notes:
            "The data from the US Survey of Business Uncertainty was collected in June 2026. The data from the UK Decision Maker Panel was collected over May – July 2026. The data from the German Bundesbank Online Panel – Firms (BOP-F) were collected in January 2026, as no newer data on AI impacts are available. The data from the Australian Business Outlook Scenarios Survey was collected in June 2026. The data from the Canadian Business Leaders' Pulse was collected over May – June 2026. The data from the Mexican Monthly Survey on Regional Economic Activity was collected in June 2026. The data from the South African Quarterly inflation expectations survey was collected in May 2026. The results from the SBU, DMP, BOP-F, and EMAER are employment-weighted; the results from the BOSS, BLP, and South African Quarterly inflation expectations survey are equal-weighted."
        }
      ]
    },
    {
      id: "next_3_years",
      label: "Expected impacts over next 3 years",
      sourceSheet: "AI Emp Next 3y",
      title: "Expected impact of AI on employment over the next 3 years (% of respondents, cumulative impact)",
      horizon: "over the next 3 years",
      averageLabel: "Cumulative impact over next 3 years (%)",
      questionNote:
        "The data are based on responses to the question: \"How has the adoption of artificial intelligence technologies affected the number of employees in your business over the past three years? And how do you expect this to affect your number of employees over the next 3 years?\"",
      waves: [
        {
          id: "2025_nov_jan",
          label: "Nov 2025 – Jan 2026",
          shortLabel: "Nov 25–Jan 26",
          data: {
            all_firms: { fieldwork: "Nov 2025 – Jan 2026", responses: 5872, values: [8.455095572207084, 18.337399761580382, 62.64174335831063, 7.619689339237056, 2.9421738079019075], average: -0.6814118928814714 },
            us: { fieldwork: "Nov 2025", responses: 1009, values: [12.1, 31.1, 41.9, 12.4, 2.5], average: -1.1875 },
            uk: { fieldwork: "Nov 2025 – Jan 2026", responses: 1972, values: [13.66, 27.14, 50.69, 5.95, 2.56], average: -1.3622500000000002 },
            germany: { fieldwork: "Jan 2026", responses: 2289, values: [3.19, 6.98, 80.95, 6.29, 2.58], average: -0.06299999999999997 },
            australia: { fieldwork: "Dec 2025", responses: 602, values: [5.3156, 11.2957, 66.9435, 10.1329, 6.3123], average: 0.04568250000000013 }
          },
          notes:
            "The data from the US Survey of Business Uncertainty was collected in November 2025. The data from the UK Decision Maker Panel was collected over November 2025 – January 2026. The data from the German Bundesbank Online Panel – Firms (BOP-F) were collected in January 2026. The data from the Australian Business Outlook Scenarios Survey was collected in December 2025. The results from the SBU, DMP, and BOP-F are employment-weighted; the results from the BOSS are unweighted."
        },
        {
          id: "2026_may_jul",
          label: "May – Jul 2026",
          shortLabel: "May–Jul 26",
          data: {
            all_firms: { fieldwork: "May – Jul 2026", responses: 8869, values: [7.7896725673694895, 19.58038795805615, 56.74974472883076, 10.28794141391363, 5.572504769421581], average: -0.39859874844965604 },
            us: { fieldwork: "Jun 2026", responses: 1030, values: [12.0, 36.3, 37.5, 10.4, 3.8], average: -1.2625 },
            canada: { fieldwork: "May – Jun 2026", responses: 841, values: [6.658739595719382, 19.500594530321045, 54.4589774078478, 10.93935790725327, 8.442330558858501], average: -0.08026159334126057 },
            uk: { fieldwork: "May – Jul 2026", responses: 1964, values: [12.1, 34.78, 40.75, 9.29, 3.09], average: -1.3130000000000002 },
            germany: { fieldwork: "Jan 2026", responses: 2289, values: [3.19, 6.98, 80.95, 6.29, 2.58], average: -0.06299999999999997, footnote: "Germany data were collected in January 2026; no newer data on AI impacts are available." },
            australia: { fieldwork: "Jun 2026", responses: 908, values: [14.207, 14.6476, 51.652, 10.6828, 8.8106], average: -0.50385 },
            mexico: { fieldwork: "Jun 2026", responses: 1719, values: [3.7, 11.8, 58.5, 15.7, 10.2], average: 0.585 },
            south_africa: { fieldwork: "May 2026", responses: 118, values: [6.78, 16.95, 51.69, 16.95, 7.63], average: 0.06375000000000007 }
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
