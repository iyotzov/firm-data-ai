const employmentImpactsData = {
  id: "employment_impacts",
  title: "Employment impacts of AI",
  sourceSheets: ["Figure 8", "Figure 9"],
  tabLabel: "Employment Impacts",
  rowLabel: "Impact Category",
  downloadBase: "employment-impacts-ai",
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
      sourceSheet: "Figure 8",
      categories: [
        {
          name: "Large negative impact, reducing employment by >5%",
          values: {
            all_firms: 0.9268578076525338,
            us: 1.6,
            uk: 1.2,
            germany: 0.46,
            australia: 0.6645
          }
        },
        {
          name: "Small negative impact, reducing employment by <5%",
          values: {
            all_firms: 4.134996001378835,
            us: 4.8,
            uk: 6.57,
            germany: 1.47,
            australia: 4.9834
          }
        },
        {
          name: "No impact",
          values: {
            all_firms: 90.52406938986556,
            us: 89.2,
            uk: 88.89,
            germany: 95,
            australia: 81.3953
          }
        },
        {
          name: "Small positive impact, increasing employment by <5%",
          values: {
            all_firms: 3.217072871423647,
            us: 3.7,
            uk: 2.79,
            germany: 1.7,
            australia: 9.4684
          }
        },
        {
          name: "Large positive impact, increasing employment by >5%",
          values: {
            all_firms: 1.2106337125129265,
            us: 0.8,
            uk: 0.54,
            germany: 1.37,
            australia: 3.4884
          }
        }
      ],
      cumulative: {
        name: "Cumulative impact over past 3 years (%)",
        values: {
          all_firms: -0.0016648853843502405,
          us: -0.0875,
          uk: -0.14400000000000002,
          germany: 0.07400000000000001,
          australia: 0.3239175
        }
      }
    },
    {
      id: "next_3_years",
      label: "Expected impacts over next 3 years",
      sourceSheet: "Figure 9",
      categories: [
        {
          name: "Large negative impact, reducing employment by >5%",
          values: {
            all_firms: 8.455095572207084,
            us: 12.1,
            uk: 13.66,
            germany: 3.19,
            australia: 5.3156
          }
        },
        {
          name: "Small negative impact, reducing employment by <5%",
          values: {
            all_firms: 18.337399761580382,
            us: 31.1,
            uk: 27.14,
            germany: 6.98,
            australia: 11.2957
          }
        },
        {
          name: "No impact",
          values: {
            all_firms: 62.64174335831063,
            us: 41.9,
            uk: 50.69,
            germany: 80.95,
            australia: 66.9435
          }
        },
        {
          name: "Small positive impact, increasing employment by <5%",
          values: {
            all_firms: 7.619689339237056,
            us: 12.4,
            uk: 5.95,
            germany: 6.29,
            australia: 10.1329
          }
        },
        {
          name: "Large positive impact, increasing employment by >5%",
          values: {
            all_firms: 2.9421738079019075,
            us: 2.5,
            uk: 2.56,
            germany: 2.58,
            australia: 6.3123
          }
        }
      ],
      cumulative: {
        name: "Cumulative impact over next 3 years (%)",
        values: {
          all_firms: -0.6814118928814714,
          us: -1.1875,
          uk: -1.3622500000000002,
          germany: -0.06299999999999997,
          australia: 0.04568250000000013
        }
      }
    }
  ],
  notes:
    "The data are based on responses to the question: \"How has the adoption of artificial intelligence technologies affected the number of employees in your business over the past three years? And how do you expect this to affect your number of employees over the next 3 years?\" The data from the US Survey of Business Uncertainty was collected in November 2025. The data from the UK Decision Maker Panel was collected over November 2025 – January 2026. The data from the German Bundesbank Online Panel-Firms (BOP-F) was collected in January 2026. The data from the Australian Business Outlook Scenarios Survey was collected in December 2025. The data results from the SBU, DMP, and BOP-F are employment-weighted; the results from the BOSS are unweighted. To calculate the average impacts (Panel B), values are assigned to each of the options in Panel A: large negative/large positive impacts are treated as ±7.5%; small negative/small positive impacts are treated as ± 2.5%. The impact for all firms is the average of the impacts for the four surveys, weighted by the respective number of responses."
};
