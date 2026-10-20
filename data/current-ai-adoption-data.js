const currentAiAdoptionData = {
  id: "current_ai_adoption",
  title: "AI Technologies Currently Used (% of respondents)",
  sourceSheet: "AI Use Now",
  tabLabel: "Current Use",
  rowLabel: "Technology",
  downloadBase: "current-ai-adoption",
  waveLayout: "technology",
  measureLabel: "adoption",
  // The change panel always shows this technology, which is offered under the same name in every wave.
  changeTechnology: "Any AI Technology",
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
  // Chronological order, earliest first. Charts show the latest wave; the change chart compares all waves
  // for technologies listed under the same name in every wave.
  waves: [
    {
      id: "2025_nov_jan",
      label: "Nov 2025 – Jan 2026",
      shortLabel: "Nov 25–Jan 26",
      technologies: [
        "Any AI Technology",
        "Other",
        "Data processing using ML",
        "Visual content creation",
        "Text generation using LLMs",
        "Image processing using ML",
        "Robotics",
        "Autonomous vehicles"
      ],
      data: {
        all_firms: {
          fieldwork: "Nov 2025 – Jan 2026",
          responses: 5674,
          values: {
            "Any AI Technology": 70.54373548466691,
            Other: 27.393449379626368,
            "Data processing using ML": 28.91943750088122,
            "Visual content creation": 29.778467264716255,
            "Text generation using LLMs": 42.6454543813888,
            "Image processing using ML": 20.290949675713783,
            Robotics: 9.351891541769476,
            "Autonomous vehicles": 3.5844454219245687
          }
        },
        us: {
          fieldwork: "Nov 2025",
          responses: 818,
          values: {
            "Any AI Technology": 93.5,
            Other: 41,
            "Data processing using ML": 44.9,
            "Visual content creation": 39.5,
            "Text generation using LLMs": 64.7,
            "Image processing using ML": 32.5,
            Robotics: 15.7,
            "Autonomous vehicles": 5.4
          }
        },
        uk: {
          fieldwork: "Nov 2025 – Jan 2026",
          responses: 1972,
          values: {
            "Any AI Technology": 71.25387,
            Other: 35.01939,
            "Data processing using ML": 33.21537,
            "Visual content creation": 29.01178,
            "Text generation using LLMs": 33.48138,
            "Image processing using ML": 24.51033,
            Robotics: 13.64889,
            "Autonomous vehicles": 2.991963
          }
        },
        germany: {
          fieldwork: "Jan 2026",
          responses: 2282,
          values: {
            "Any AI Technology": 64.66675,
            Other: 19.77835,
            "Data processing using ML": 21.27957,
            "Visual content creation": 29.50955,
            "Text generation using LLMs": 45.9774,
            "Image processing using ML": 14.50985,
            Robotics: 3.858204,
            "Autonomous vehicles": 2.638384
          }
        },
        australia: {
          fieldwork: "Dec 2025",
          responses: 602,
          values: {
            "Any AI Technology": 59.3023255813954,
            Other: 12.7906976744186,
            "Data processing using ML": 22.093023255814,
            "Visual content creation": 20.0996677740864,
            "Text generation using LLMs": 30.0664451827243,
            "Image processing using ML": 11.7940199335548,
            Robotics: 7.47508305647841,
            "Autonomous vehicles": 6.64451827242525
          }
        }
      },
      notes:
        "The data from the US Survey of Business Uncertainty was collected in November 2025. The data from the UK Decision Maker Panel was collected over November 2025 – January 2026. The data from the German Bundesbank Online Panel – Firms (BOP-F) were collected in January 2026. The data from the Australian Business Outlook Scenarios Survey was collected in December 2025. The results from the SBU, DMP, and BOP-F are employment-weighted; the results from the BOSS are unweighted."
    },
    {
      id: "2026_may_jul",
      label: "May – Jul 2026",
      shortLabel: "May–Jul 26",
      technologies: [
        "Any AI Technology",
        "Other",
        "Data processing using ML",
        "Visual content creation",
        "Generative AI",
        "Image processing using ML",
        "Robotics and autonomous vehicles"
      ],
      data: {
        all_firms: {
          fieldwork: "May – Jul 2026",
          responses: 8879,
          values: {
            "Any AI Technology": 78.47701247437774,
            Other: 19.214966249577653,
            "Data processing using ML": 32.70480305552427,
            "Visual content creation": 34.41504148778015,
            "Generative AI": 62.91700671021511,
            "Image processing using ML": 22.379504640162178,
            "Robotics and autonomous vehicles": 8.407349523595
          }
        },
        us: {
          fieldwork: "Jun 2026",
          responses: 1012,
          values: {
            "Any AI Technology": 94.9,
            Other: 36.3,
            "Data processing using ML": 46.6,
            "Visual content creation": 42.5,
            "Generative AI": 87.7,
            "Image processing using ML": 33.2,
            "Robotics and autonomous vehicles": 11
          }
        },
        uk: {
          fieldwork: "May – Jul 2026",
          responses: 1964,
          values: {
            "Any AI Technology": 87.94905,
            Other: 23.1092,
            "Data processing using ML": 42.00483,
            "Visual content creation": 43.19571,
            "Generative AI": 82.10366,
            "Image processing using ML": 32.07541,
            "Robotics and autonomous vehicles": 10.4243
          }
        },
        germany: {
          fieldwork: "Jul 2026",
          responses: 2303,
          values: {
            "Any AI Technology": 77.85892,
            Other: 18.63771,
            "Data processing using ML": 22.73627,
            "Visual content creation": 32.67331,
            "Generative AI": 69.73438,
            "Image processing using ML": 17.17882,
            "Robotics and autonomous vehicles": 4.16094
          }
        },
        australia: {
          fieldwork: "Jun 2026",
          responses: 908,
          values: {
            "Any AI Technology": 68.3921,
            Other: 19.8238,
            "Data processing using ML": 28.1938,
            "Visual content creation": 24.5595,
            "Generative AI": 38.2159,
            "Image processing using ML": 17.0705,
            "Robotics and autonomous vehicles": 6.9383
          }
        },
        canada: {
          fieldwork: "May – Jun 2026",
          responses: 872,
          values: {
            "Any AI Technology": 81.9,
            Other: 12.3,
            "Data processing using ML": 21,
            "Visual content creation": 22.5,
            "Generative AI": 73.9,
            "Image processing using ML": 10,
            "Robotics and autonomous vehicles": 3.7
          }
        },
        mexico: {
          fieldwork: "Jun 2026",
          responses: 1719,
          values: {
            "Any AI Technology": 63.7,
            Other: 8.4,
            "Data processing using ML": 36.1,
            "Visual content creation": 33.6,
            "Generative AI": 26.7,
            "Image processing using ML": 21.6,
            "Robotics and autonomous vehicles": 13.4
          }
        },
        south_africa: {
          fieldwork: "May 2026",
          responses: 101,
          values: {
            "Any AI Technology": 56.44,
            Other: 23.76,
            "Data processing using ML": 23.76,
            "Visual content creation": 27.72,
            "Generative AI": 29.7,
            "Image processing using ML": 11.88,
            "Robotics and autonomous vehicles": 8.91
          }
        }
      },
      notes:
        "The data from the US Survey of Business Uncertainty was collected in June 2026. The data from the UK Decision Maker Panel was collected over May – July 2026. The data from the German Bundesbank Online Panel – Firms (BOP-F) were collected in July 2026. The data from the Australian Business Outlook Scenarios Survey was collected in June 2026. The data from the Canadian Business Leaders' Pulse was collected over May – June 2026. The data from the Mexican Monthly Survey on Regional Economic Activity was collected in June 2026. The data from the South African Quarterly inflation expectations survey was collected in May 2026. The results from the SBU, DMP, BOP-F, and EMAER are employment-weighted; the results from the BOSS, BLP, and South African Quarterly inflation expectations survey are equal-weighted."
    }
  ],
  questionNote:
    "The data are based on responses to the question: \"Which of the following artificial intelligence technologies, if any, does your business currently use?\" Firms could select more than one option.",
  methodNote:
    "The results for all firms are the average of the surveys in each wave, weighted by the respective number of responses."
};
