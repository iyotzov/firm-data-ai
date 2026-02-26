const personalAiUseData = {
  id: "personal_ai_use",
  title: "Frequency of AI use by survey respondent (% of respondents, average use)",
  sourceSheet: "Figure 7",
  tabLabel: "Personal AI Use",
  rowLabel: "Category",
  downloadBase: "personal-ai-use",
  countries: [
    {
      id: "all_firms",
      label: "All Firms",
      source: "Average across all firms in the four countries",
      responses: 6418,
      responseShare: 1
    },
    {
      id: "us",
      label: "US",
      source: "US Survey of Business Uncertainty",
      responses: 1084,
      responseShare: 0.16889996883764413
    },
    {
      id: "uk",
      label: "UK",
      source: "UK Decision Maker Panel",
      responses: 2007,
      responseShare: 0.3127142411966345
    },
    {
      id: "germany",
      label: "Germany",
      source: "Germany Bundesbank Online Panel - Firms",
      responses: 2725,
      responseShare: 0.4245870987846681
    },
    {
      id: "australia",
      label: "Australia",
      source: "Australia Business Outlook Scenarios Survey",
      responses: 602,
      responseShare: 0.09379869118105329
    }
  ],
  technologies: [
    {
      name: "Not at all",
      values: {
        uk: 25.44,
        us: 27.8,
        australia: 33.7209302325581,
        germany: 29.21,
        all_firms: 28.216037706450606
      }
    },
    {
      name: "Up to 1 hour a week",
      values: {
        uk: 44.9,
        us: 35,
        australia: 35.7142857142857,
        germany: 41.02,
        all_firms: 40.718884387659706
      }
    },
    {
      name: "1 to 5 hours a week",
      values: {
        uk: 23.19,
        us: 28.6,
        australia: 22.093023255814,
        germany: 22.58,
        all_firms: 23.741855718292307
      }
    },
    {
      name: ">5 hours a week",
      values: {
        uk: 6.47,
        us: 8.7,
        australia: 8.47176079734219,
        germany: 7.2,
        all_firms: 7.344358055468993
      }
    }
  ],
  additionalRows: [
    {
      name: "Average use per week (hours)",
      values: {
        uk: 1.40545,
        us: 1.6855000000000002,
        australia: 1.4767441860465127,
        germany: 1.4225,
        all_firms: 1.4666769476472425
      }
    }
  ],
  notes:
    "The data are based on responses to the question: \"On average, how frequently do you personally use artificial intelligence technologies in a typical working week?\" The data from the US Survey of Business Uncertainty was collected in November 2025. The data from the UK Decision Maker Panel was collected over November 2025 – January 2026. The data from the Australian Business Outlook Scenarios Survey was collected in December 2025. The data from the German Bundesbank Online Panel – Firms (BOP-F) were collected in January 2026. The data results from the SBU, DMP, and BOP-F are employment-weighted; the results from the BOSS are unweighted. The results for all firms is the average of the four surveys, weighted by the respective number of responses. To calculate the average use per week, values are assigned to each of the options: 0 to \"Not at all\"; 0.5 to \"up to 1 hour a week\"; 3 to \"1 to 5 hours a week\"; 7.5 to \">5 hours a week\"."
};

function personalAiUseToCsv() {
  const header = ["Category", ...personalAiUseData.countries.map((country) => country.label)];
  const mainRows = personalAiUseData.technologies.map((entry) => {
    const values = personalAiUseData.countries.map((country) => entry.values[country.id]);
    return [entry.name, ...values];
  });
  const extraRows = (personalAiUseData.additionalRows || []).map((entry) => {
    const values = personalAiUseData.countries.map((country) => entry.values[country.id]);
    return [entry.name, ...values];
  });

  return [header, ...mainRows, ...extraRows]
    .map((row) =>
      row
        .map((cell) => {
          if (typeof cell === "number") {
            return cell.toString();
          }
          const escaped = String(cell).replace(/"/g, '""');
          return /[",\n]/.test(escaped) ? `"${escaped}"` : escaped;
        })
        .join(",")
    )
    .join("\n");
}
