const productivityImpactsData = {
  id: "productivity_impacts",
  title: "Productivity impacts of AI",
  sourceSheets: ["Figure 10", "Figure 11"],
  tabLabel: "Productivity Impacts",
  rowLabel: "Impact Category",
  downloadBase: "productivity-impacts-ai",
  defaultPeriod: "past_3_years",
  countries: [
    {
      id: "all_firms",
      label: "All Firms",
      source: "Average across all firms in the four countries"
    },
    {
      id: "us",
      label: "US",
      source: "US Survey of Business Uncertainty"
    },
    {
      id: "uk",
      label: "UK",
      source: "UK Decision Maker Panel"
    },
    {
      id: "germany",
      label: "Germany",
      source: "Germany Bundesbank Online Panel - Firms"
    },
    {
      id: "australia",
      label: "Australia",
      source: "Australia Business Outlook Scenarios Survey"
    }
  ],
  periods: [
    {
      id: "past_3_years",
      label: "Impacts over last 3 years",
      sourceSheet: "Figure 10",
      responses: {
        all_firms: 5813,
        us: 988,
        uk: 1972,
        germany: 2251,
        australia: 602
      },
      categories: [
        {
          name: "Large negative impact, reducing productivity by >5%",
          values: {
            all_firms: 0.23195843798382934,
            us: 0,
            uk: 0.16,
            germany: 0.37,
            australia: 0.3322
          }
        },
        {
          name: "Small negative impact, reducing productivity by <5%",
          values: {
            all_firms: 0.819202167555479,
            us: 0.5,
            uk: 0.71,
            germany: 0.43,
            australia: 3.1561
          }
        },
        {
          name: "No impact",
          values: {
            all_firms: 89.41142126268709,
            us: 91.4,
            uk: 89.32,
            germany: 91.34,
            australia: 79.2359
          }
        },
        {
          name: "Small positive impact, increasing productivity by <5%",
          values: {
            all_firms: 7.8135707896094955,
            us: 7,
            uk: 8.28,
            germany: 6.12,
            australia: 13.9535
          }
        },
        {
          name: "Large positive impact, increasing productivity by >5%",
          values: {
            all_firms: 1.7029785996903493,
            us: 1,
            uk: 1.53,
            germany: 1.73,
            australia: 3.3223
          }
        }
      ],
      cumulative: {
        name: "Cumulative impact over past 3 years (%)",
        values: {
          all_firms: 0.2851857276793394,
          us: 0.2375,
          uk: 0.29200000000000004,
          germany: 0.24425,
          australia: 0.4941925
        }
      }
    },
    {
      id: "next_3_years",
      label: "Expected impacts over next 3 years",
      sourceSheet: "Figure 11",
      responses: {
        all_firms: 5878,
        us: 1005,
        uk: 1972,
        germany: 2299,
        australia: 602
      },
      categories: [
        {
          name: "Large negative impact, reducing productivity by >5%",
          values: {
            all_firms: 1.044084926845866,
            us: 1,
            uk: 0.82,
            germany: 0.92,
            australia: 2.3256
          }
        },
        {
          name: "Small negative impact, reducing productivity by <5%",
          values: {
            all_firms: 1.4927284450493365,
            us: 0.9,
            uk: 1.25,
            germany: 1.22,
            australia: 4.3189
          }
        },
        {
          name: "No impact",
          values: {
            all_firms: 59.735004423273224,
            us: 38.7,
            uk: 53.24,
            germany: 72.44,
            australia: 67.608
          }
        },
        {
          name: "Small positive impact, increasing productivity by <5%",
          values: {
            all_firms: 25.45746781218101,
            us: 42.4,
            uk: 28.01,
            germany: 18.7,
            australia: 14.6179
          }
        },
        {
          name: "Large positive impact, increasing productivity by >5%",
          values: {
            all_firms: 12.291723239197006,
            us: 17.1,
            uk: 16.68,
            germany: 6.73,
            australia: 11.1296
          }
        }
      ],
      cumulative: {
        name: "Cumulative impact over next 3 years (%)",
        values: {
          all_firms: 1.4426913576046274,
          us: 2.245,
          uk: 1.8585,
          germany: 0.87275,
          australia: 0.917775
        }
      }
    }
  ],
  notes:
    "The data are based on responses to the question: \"How has the adoption of artificial intelligence technologies affected volume of sales per employee in your business over the past three years? And how do you expect this to affect your volume of sales per employee over the next 3 years?\" The data from the US Survey of Business Uncertainty was collected in November 2025. The data from the UK Decision Maker Panel was collected over November 2025 – January 2026. The data from the German Bundesbank Online Panel-Firms (BOP-F) was collected in January 2026. The data from the Australian Business Outlook Scenarios Survey was collected in December 2025. The data results from the SBU, DMP, and BOP-F are employment-weighted; the results from the BOSS are unweighted. To calculate the average impacts (Panel B), values are assigned to each of the options in Panel A: large negative/large positive impacts are treated as ±7.5%; small negative/small positive impacts are treated as ±2.5%. The impact for all firms is the average of the impacts for the four surveys, weighted by the respective number of responses."
};
