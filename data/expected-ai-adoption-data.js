const expectedAiAdoptionData = {
  id: "expected_ai_adoption",
  title: "AI Technologies Expected to be Used over next 3 years (% of respondents)",
  sourceSheet: "AI Use 3y",
  tabLabel: "Expected Use (Next 3 Years)",
  rowLabel: "Technology",
  downloadBase: "expected-ai-adoption",
  waveLayout: "technology",
  measureLabel: "expected adoption",
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
  // Chronological order, earliest first. Charts show the latest wave; the change chart compares all waves.
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
          responses: 5516,
          values: {
            "Any AI Technology": 76.92426184372734,
            Other: 33.995059849528644,
            "Data processing using ML": 41.45087113125452,
            "Visual content creation": 33.79011205039883,
            "Text generation using LLMs": 32.429401069615665,
            "Image processing using ML": 30.480821047860772,
            Robotics: 21.327073711022475,
            "Autonomous vehicles": 16.474875697969544
          }
        },
        us: {
          fieldwork: "Nov 2025",
          responses: 815,
          values: {
            "Any AI Technology": 92.5,
            Other: 41.5,
            "Data processing using ML": 56.4,
            "Visual content creation": 39.9,
            "Text generation using LLMs": 34.9,
            "Image processing using ML": 38.6,
            Robotics: 27.3,
            "Autonomous vehicles": 17.9
          }
        },
        uk: {
          fieldwork: "Nov 2025 – Jan 2026",
          responses: 1972,
          values: {
            "Any AI Technology": 79.15066,
            Other: 38.30006,
            "Data processing using ML": 43.51269,
            "Visual content creation": 35.10621,
            "Text generation using LLMs": 29.81724,
            "Image processing using ML": 32.4202,
            Robotics: 21.335,
            "Autonomous vehicles": 13.58206
          }
        },
        germany: {
          fieldwork: "Jan 2026",
          responses: 2127,
          values: {
            "Any AI Technology": 72.46903,
            Other: 31.48403,
            "Data processing using ML": 36.61024,
            "Visual content creation": 31.75285,
            "Text generation using LLMs": 34.33826,
            "Image processing using ML": 27.1935,
            Robotics: 18.39117,
            "Autonomous vehicles": 17.53789
          }
        },
        australia: {
          fieldwork: "Dec 2025",
          responses: 602,
          values: {
            "Any AI Technology": 64.2857142857143,
            Other: 18.6046511627907,
            "Data processing using ML": 31.5614617940199,
            "Visual content creation": 28.4053156146179,
            "Text generation using LLMs": 30.8970099667774,
            "Image processing using ML": 24.7508305647841,
            Robotics: 23.5880398671096,
            "Autonomous vehicles": 20.265780730897
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
          responses: 8610,
          values: {
            "Any AI Technology": 82.24257126132404,
            Other: 28.001608882694544,
            "Data processing using ML": 48.64995934494774,
            "Visual content creation": 38.782303986062715,
            "Generative AI": 45.10174446457607,
            "Image processing using ML": 34.11969893147503,
            "Robotics and autonomous vehicles": 22.30594030197445
          }
        },
        us: {
          fieldwork: "Jun 2026",
          responses: 902,
          values: {
            "Any AI Technology": 95.9,
            Other: 52.4,
            "Data processing using ML": 60.1,
            "Visual content creation": 47.7,
            "Generative AI": 47.9,
            "Image processing using ML": 49.5,
            "Robotics and autonomous vehicles": 34
          }
        },
        uk: {
          fieldwork: "May – Jul 2026",
          responses: 1964,
          values: {
            "Any AI Technology": 91.02414,
            Other: 36.78454,
            "Data processing using ML": 57.90871,
            "Visual content creation": 43.65805,
            "Generative AI": 51.94322,
            "Image processing using ML": 40.62047,
            "Robotics and autonomous vehicles": 21.55069
          }
        },
        germany: {
          fieldwork: "Jul 2026",
          responses: 2148,
          values: {
            "Any AI Technology": 79.7416,
            Other: 29.56324,
            "Data processing using ML": 40.08424,
            "Visual content creation": 31.37674,
            "Generative AI": 41.66872,
            "Image processing using ML": 27.04594,
            "Robotics and autonomous vehicles": 16.29183
          }
        },
        australia: {
          fieldwork: "Jun 2026",
          responses: 908,
          values: {
            "Any AI Technology": 73.0176,
            Other: 21.4758,
            "Data processing using ML": 37.1145,
            "Visual content creation": 34.3612,
            "Generative AI": 34.9119,
            "Image processing using ML": 31.8282,
            "Robotics and autonomous vehicles": 27.0925
          }
        },
        canada: {
          fieldwork: "May – Jun 2026",
          responses: 868,
          values: {
            "Any AI Technology": 83.4,
            Other: 22,
            "Data processing using ML": 50.6,
            "Visual content creation": 38.6,
            "Generative AI": 71.3,
            "Image processing using ML": 25.5,
            "Robotics and autonomous vehicles": 14.3
          }
        },
        mexico: {
          fieldwork: "Jun 2026",
          responses: 1719,
          values: {
            "Any AI Technology": 73.1,
            Other: 9.3,
            "Data processing using ML": 48,
            "Visual content creation": 39.7,
            "Generative AI": 32.7,
            "Image processing using ML": 33.4,
            "Robotics and autonomous vehicles": 26.5
          }
        },
        south_africa: {
          fieldwork: "May 2026",
          responses: 101,
          values: {
            "Any AI Technology": 71.29,
            Other: 34.65,
            "Data processing using ML": 46.53,
            "Visual content creation": 47.52,
            "Generative AI": 37.62,
            "Image processing using ML": 27.72,
            "Robotics and autonomous vehicles": 14.85
          }
        }
      },
      notes:
        "The data from the US Survey of Business Uncertainty was collected in June 2026. The data from the UK Decision Maker Panel was collected over May – July 2026. The data from the German Bundesbank Online Panel – Firms (BOP-F) were collected in July 2026. The data from the Australian Business Outlook Scenarios Survey was collected in June 2026. The data from the Canadian Business Leaders' Pulse was collected over May – June 2026. The data from the Mexican Monthly Survey on Regional Economic Activity was collected in June 2026. The data from the South African Quarterly inflation expectations survey was collected in May 2026. The results from the SBU, DMP, BOP-F, and EMAER are employment-weighted; the results from the BOSS, BLP, and South African Quarterly inflation expectations survey are equal-weighted."
    }
  ],
  questionNote:
    "The data are based on responses to the question: \"Which of the following artificial intelligence technologies, if any, does your business currently use? And which do you intend to make use of over the next three years?\" Firms could select more than one option.",
  methodNote:
    "The results for all firms are the average of the surveys in each wave, weighted by the respective number of responses."
};
