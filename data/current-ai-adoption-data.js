const currentAiAdoptionData = {
  id: "current_ai_adoption",
  title: "AI Technologies Currently Used (% of respondents)",
  sourceSheet: "Figure 5",
  tabLabel: "Current Use",
  downloadBase: "current-ai-adoption",
  countries: [
    {
      id: "all_firms",
      label: "All Firms",
      source: "Average across all firms in the four countries",
      responses: 5888,
      responseShare: 1
    },
    {
      id: "us",
      label: "US",
      source: "US Survey of Business Uncertainty",
      responses: 1032,
      responseShare: 0.17527173913043478
    },
    {
      id: "uk",
      label: "UK",
      source: "UK Decision Maker Panel",
      responses: 1972,
      responseShare: 0.33491847826086957
    },
    {
      id: "germany",
      label: "Germany",
      source: "Germany Bundesbank Online Panel - Firms",
      responses: 2282,
      responseShare: 0.3875679347826087
    },
    {
      id: "australia",
      label: "Australia",
      source: "Australia Business Outlook Scenarios Survey",
      responses: 602,
      responseShare: 0.10224184782608696
    }
  ],
  technologies: [
    {
      name: "Any AI Technology",
      values: {
        uk: 71.25387,
        us: 77.5,
        australia: 59.3023255813954,
        germany: 64.66675,
        all_firms: 68.57373558763587
      }
    },
    {
      name: "Other",
      values: {
        uk: 35.01939,
        us: 34,
        australia: 12.7906976744186,
        germany: 19.77835,
        all_firms: 26.661078766983696
      }
    },
    {
      name: "Data processing using ML",
      values: {
        uk: 33.21537,
        us: 36.9,
        australia: 22.093023255814,
        germany: 21.27957,
        all_firms: 28.098078868885874
      }
    },
    {
      name: "Visual content creation",
      values: {
        uk: 29.01178,
        us: 32.5,
        australia: 20.0996677740864,
        germany: 29.50955,
        all_firms: 28.904895254755438
      }
    },
    {
      name: "Text generation using LLMs",
      values: {
        uk: 33.48138,
        us: 53.5,
        australia: 30.0664451827243,
        germany: 45.9774,
        all_firms: 41.48398576086957
      }
    },
    {
      name: "Image processing using ML",
      values: {
        uk: 24.51033,
        us: 26.7,
        australia: 11.7940199335548,
        germany: 14.50985,
        all_firms: 19.718112849864127
      }
    },
    {
      name: "Robotics",
      values: {
        uk: 13.64889,
        us: 13,
        australia: 7.47508305647841,
        germany: 3.858204,
        all_firms: 9.10938053804348
      }
    },
    {
      name: "Autonomous vehicles",
      values: {
        uk: 2.991963,
        us: 4.5,
        australia: 6.64451827242525,
        germany: 2.638384,
        all_firms: 3.4926873851902176
      }
    }
  ],
  notes:
    "The data are based on responses to the question: \"Which of the following artificial intelligence technologies, if any, does your business currently use?\" Firms could select more than one option. The data from the US Survey of Business Uncertainty was collected in November 2025. The data from the UK Decision Maker Panel was collected over November 2025 - January 2026. The data from the German Bundesbank Online Panel-Firms (BOP-F) was collected in January 2026. The data from the Australian Business Outlook Scenarios Survey was collected in December 2025. The data results from the SBU, DMP, and BOP-F are employment-weighted; the results from the BOSS are unweighted. The results for all firms is the average of the four surveys, weighted by the respective number of responses."
};

function currentAiAdoptionToCsv() {
  const header = ["Technology", ...currentAiAdoptionData.countries.map((country) => country.label)];
  const rows = currentAiAdoptionData.technologies.map((technology) => {
    const values = currentAiAdoptionData.countries.map((country) => technology.values[country.id]);
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
