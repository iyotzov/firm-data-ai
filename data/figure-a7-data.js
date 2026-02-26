const figureA7Data = {
  id: "figure_a7",
  title: "AI Technologies Expected to be Used over next 3 years (% of respondents)",
  sourceSheet: "Figure A7",
  tabLabel: "Expected Use (Next 3 Years)",
  downloadBase: "figure-a7-ai-technologies",
  countries: [
    {
      id: "all_firms",
      label: "All Firms",
      source: "Average across all firms in the four countries",
      responses: 5733,
      responseShare: 1
    },
    {
      id: "us",
      label: "US",
      source: "US Survey of Business Uncertainty",
      responses: 1032,
      responseShare: 0.18001046572475143
    },
    {
      id: "uk",
      label: "UK",
      source: "UK Decision Maker Panel",
      responses: 1972,
      responseShare: 0.34397348683062967
    },
    {
      id: "germany",
      label: "Germany",
      source: "Germany Bundesbank Online Panel - Firms",
      responses: 2127,
      responseShare: 0.3710099424385139
    },
    {
      id: "australia",
      label: "Australia",
      source: "Australia Business Outlook Scenarios Survey",
      responses: 602,
      responseShare: 0.10500610500610501
    }
  ],
  technologies: [
    {
      name: "Any AI Technology",
      values: {
        uk: 79.15066,
        us: 76.6,
        australia: 64.2857142857143,
        germany: 72.46903,
        all_firms: 74.65165329321472
      }
    },
    {
      name: "Other",
      values: {
        uk: 38.30006,
        us: 34.7,
        australia: 18.6046511627907,
        germany: 31.48403,
        all_firms: 33.0550584563056
      }
    },
    {
      name: "Data processing using ML",
      values: {
        uk: 43.51269,
        us: 45.9,
        australia: 31.5614617940199,
        germany: 36.61024,
        all_firms: 40.126601283795566
      }
    },
    {
      name: "Visual content creation",
      values: {
        uk: 35.10621,
        us: 32.8,
        australia: 28.4053156146179,
        germany: 31.75285,
        all_firms: 32.74330334379905
      }
    },
    {
      name: "Text generation using LLMs",
      values: {
        uk: 29.81724,
        us: 28.8,
        australia: 30.8970099667774,
        germany: 34.33826,
        all_firms: 31.424851962323388
      }
    },
    {
      name: "Image processing using ML",
      values: {
        uk: 32.4202,
        us: 31.6,
        australia: 24.7508305647841,
        germany: 27.1935,
        all_firms: 29.528067137624284
      }
    },
    {
      name: "Robotics",
      values: {
        uk: 21.335,
        us: 22.3,
        australia: 23.5880398671096,
        germany: 18.39117,
        all_firms: 20.653102841444266
      }
    },
    {
      name: "Autonomous vehicles",
      values: {
        uk: 13.58206,
        us: 14.5,
        australia: 20.265780730897,
        germany: 17.53789,
        all_firms: 15.916782548403976
      }
    }
  ],
  notes:
    "The data are based on responses to the question: \"Which of the following artificial intelligence technologies, if any, does your business currently use? And which do you intend to make use of over the next three years?\" Firms could select more than one option. The data from the US Survey of Business Uncertainty was collected in November 2025. The data from the UK Decision Maker Panel was collected over November 2025 – January 2026. The data from the German Bundesbank Online Panel – Firms (BOP-F) were collected in January 2026. The data from the Australian Business Outlook Scenarios Survey was collected in December 2025. The data results from the SBU, DMP, and BOP-F are employment-weighted; the results from the BOSS are unweighted. The results for all firms is the average of the four surveys, weighted by the respective number of responses."
};

function figureA7ToCsv() {
  const header = ["Technology", ...figureA7Data.countries.map((country) => country.label)];
  const rows = figureA7Data.technologies.map((technology) => {
    const values = figureA7Data.countries.map((country) => technology.values[country.id]);
    return [technology.name, ...values];
  });

  return [header, ...rows]
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
