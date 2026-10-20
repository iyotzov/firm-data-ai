// Screenshots of the AI questions as they appear in each country's survey.
// To add a country, put its screenshots in screenshots/<country-id>/ and append an
// entry to `surveys` below. The country buttons on the Survey Questions tab are built
// from this list, in this order. `surveyUrl` and `note` are optional.
const surveyQuestionsData = {
  surveys: [
    {
      id: "us",
      country: "US",
      survey: "Survey of Business Uncertainty (SBU)",
      surveyUrl: "https://www.atlantafed.org/research-and-data/surveys/business-uncertainty",
      questions: [
        {
          title: "Current and expected AI adoption",
          image: "screenshots/us/AIadoption_SBU_Jun2026.png",
          alt: "Which of the following artificial intelligence (AI) technologies, if any, does your firm currently use? And which do you expect your firm to use over the next three years? Options: generative AI like ChatGPT, Claude, or Gemini; robotic and autonomous vehicles; data processing using machine learning; visual content creation; image processing using machine learning; other AI technology; we are not using / do not expect to use any AI technologies."
        },
        {
          title: "Personal AI use",
          image: "screenshots/us/AIpersonal_SBU_screenshot.png",
          alt: "On average, how frequently do you personally use AI technologies in a typical working week? Options: not at all; up to 1 hour a week; 1 to 5 hours a week; more than 5 hours a week."
        },
        {
          title: "Employment impacts",
          image: "screenshots/us/sbu-ai_emp.png",
          alt: "How has the adoption of AI technologies affected the number of employees of your business over the past three years? And how do you expect this to affect your number of employees over the next three years? Options for each horizon: a large negative influence, subtracting 5% or more; a minor negative influence, subtracting less than 5%; no material impact; a minor positive influence, adding less than 5%; a large positive influence, adding 5% or more."
        },
        {
          title: "Productivity impacts",
          image: "screenshots/us/sbu-ai_prod.png",
          alt: "How has the adoption of AI technologies affected the volume of sales per employee of your business over the past three years? And how do you expect this to affect your volume of sales per employee over the next three years? Options for each horizon: a large negative influence, subtracting 5% or more; a minor negative influence, subtracting less than 5%; no material impact; a minor positive influence, adding less than 5%; a large positive influence, adding 5% or more."
        },
        {
          title: "AI spending in 2025",
          image: "screenshots/us/AIspending2025_SBU_screenshot.png",
          alt: "Thinking back to last year, calendar year 2025, how much did your firm spend on AI adoption and AI related technologies? Include software, subscription services, hardware, worker training, and IT staff support. Answer: about $ (free entry)."
        },
        {
          title: "AI spending in 2026",
          image: "screenshots/us/AISpendingMar2026_SBU_screenshot.png",
          alt: "For calendar year 2026, how much will your firm spend on AI adoption and AI related technologies? Include software, subscription services, hardware, worker training, and IT staff support. Answer: about $ (free entry)."
        }
      ]
    },
    {
      id: "uk",
      country: "UK",
      survey: "Decision Maker Panel (DMP)",
      surveyUrl: "https://decisionmakerpanel.co.uk/",
      questions: [
        {
          title: "Current and expected AI adoption",
          image: "screenshots/uk/screenshot-dmp-ai-technology-v2.png",
          alt: "Which of the following artificial intelligence technologies, if any, does your business currently use? And which do you expect to make use of over the next three years? Please select all that apply. Options: robotics and autonomous vehicles; data processing using machine learning; image processing using machine learning; generative AI like ChatGPT, Claude or Gemini; visual content creation; other AI technology (please specify); not using / do not expect to use any artificial intelligence technologies."
        },
        {
          title: "Personal AI use",
          image: "screenshots/uk/screenshot-dmp-ai-freq.png",
          alt: "On average, how frequently do you personally use artificial intelligence technologies in a typical working week? Options: not at all; up to 1 hour a week; 1 to 5 hours a week; more than 5 hours a week."
        },
        {
          title: "Employment impacts",
          image: "screenshots/uk/screenshot-dmp-ai-emp.png",
          alt: "How has the adoption of artificial intelligence technologies affected the number of employees in your business over the past three years? And how do you expect this to affect your number of employees over the next three years? Options for each horizon: a large positive influence, adding 5% or more; a minor positive influence, adding less than 5%; no material impact; a minor negative influence, subtracting less than 5%; a large negative influence, subtracting 5% or more."
        },
        {
          title: "Productivity impacts",
          image: "screenshots/uk/screenshot-dmp-ai-prod.png",
          alt: "How has the adoption of artificial intelligence technologies affected the volume of sales per employee in your business over the past three years? And how do you expect this to affect your volume of sales per employee over the next three years? Options for each horizon: a large positive influence, adding 5% or more; a minor positive influence, adding less than 5%; no material impact; a minor negative influence, subtracting less than 5%; a large negative influence, subtracting 5% or more."
        },
        {
          title: "AI spending in 2025",
          image: "screenshots/uk/screenshot-dmp-ai-spend-25.png",
          alt: "Thinking back to last year (calendar year 2025), approximately how much did your firm spend on artificial intelligence adoption and AI related technologies (in £ thousands)? Please include software, subscription services, hardware, worker training and IT staff support. Please answer zero if you did not spend anything on AI or your business does not make use of AI. Answer: £ (free entry),000."
        },
        {
          title: "AI spending in 2026",
          image: "screenshots/uk/screenshot-dmp-ai-spend-26.png",
          alt: "Now think about this year. For calendar year 2026, approximately how much do you expect your firm will spend on artificial intelligence adoption and AI related technologies (in £ thousands)? Please include software, subscription services, hardware, worker training and IT staff support. Please answer zero if you did not spend anything on AI or your business does not make use of AI. Answer: £ (free entry),000."
        }
      ]
    },
    {
      id: "mexico",
      country: "Mexico",
      survey: "Monthly Survey on Regional Economic Activity (EMAER)",
      note: "The survey is conducted in Spanish.",
      questions: [
        {
          title: "Current and expected AI adoption",
          image: "screenshots/mexico/AI Questions EMAER_1-2.png",
          alt: "In Spanish. Use of artificial intelligence (AI) in firms: among others, AI technologies include those that generate text using large language models (for example, Microsoft Copilot, ChatGPT or Claude), those that process data using machine learning, or those that generate visual content. Question 7: Among the following options, select which AI technologies your firm currently uses and which it expects to use or keep using over the next 3 years. Columns: currently (select all that apply); next 3 years (select all the new technologies you expect to use and those you expect to keep using). Options: robotics and/or autonomous vehicles; data processing using machine learning; image processing using machine learning; text generation using large language models; visual content creation; other AI technology (please specify); does not use / does not expect to use any AI technology."
        },
        {
          title: "Employment and productivity impacts; personal AI use",
          image: "screenshots/mexico/AI Questions EMAER_2-2.png",
          alt: "In Spanish. Note: if your firm currently uses at least one AI technology, please answer question 8 for the past 3 years; if your firm expects to use at least one AI technology over the next three years, please answer question 8 for the next three years. Question 8: For the specified periods, indicate the impact that the adoption of AI technologies has had or is expected to have on the following variables of your firm: number of workers; sales or gross revenue per worker. Options for the past 3 years and the next 3 years: large negative impact (reduction of 5% or more); small negative impact (reduction of less than 5%); no significant impact; small positive impact (increase of less than 5%); large positive impact (increase of 5% or more). Question 9: On average, how often do you personally use AI technologies in a typical working week? Options: does not use; less than 1 hour a week; between 1 and 5 hours a week; more than 5 hours a week."
        }
      ]
    },
    {
      id: "australia",
      country: "Australia",
      survey: "Business Outlook Scenarios Survey (BOSS)",
      surveyUrl: "https://www.mq.edu.au/macquarie-business-school/our-departments/department-of-economics/our-research/business-outlook-scenarios-survey-boss",
      questions: [
        {
          title: "Current and expected AI adoption",
          image: "screenshots/australia/88.CSAIUseGRID.jpg",
          alt: "Which of the following artificial intelligence (AI) technologies, if any, does your business currently use? And which do you expect to make use of over the next three years? Please select all that apply for each column. Options: image processing using machine learning; text generation using large language models; visual content creation; robotics and autonomous vehicles; data processing using machine learning; other AI technology; we are not using / do not expect to use any AI technologies."
        },
        {
          title: "Personal AI use",
          image: "screenshots/australia/87.CSAIPersonaluse.jpg",
          alt: "We now would like to ask your views about the use of artificial intelligence (AI). On average, how frequently do you personally use artificial intelligence technologies in a typical working week? Note: amongst other things, AI technologies could include text generation using large language models (e.g. Microsoft Copilot or ChatGPT), data or image processing using machine learning and visual content creation. Options: not at all; up to 1 hour a week; 1 to 5 hours a week; more than 5 hours a week."
        },
        {
          title: "Employment impacts",
          image: "screenshots/australia/94.CSAIUseEmpGRID.jpg",
          alt: "How has the adoption of AI technologies affected the number of employees in your business over the past three years? And how do you expect this to affect your number of employees over the next three years? Please provide an answer for each column. Options for each horizon: no material impact; a minor negative influence, subtracting less than 5%; a large negative influence, subtracting 5% or more; a large positive influence, adding 5% or more; a minor positive influence, adding less than 5%."
        },
        {
          title: "Productivity impacts",
          image: "screenshots/australia/95.CSAIUseSalesGRID.jpg",
          alt: "How has the adoption of AI technologies affected the volume of sales per employee in your business over the past three years? And how do you expect this to affect your volume of sales per employee over the next three years? Options for each horizon: a large positive influence, adding 5% or more; a minor positive influence, adding less than 5%; no material impact; a minor negative influence, subtracting less than 5%; a large negative influence, subtracting 5% or more; I don't know."
        }
      ]
    },
    {
      id: "south_africa",
      country: "South Africa",
      survey: "Quarterly inflation expectations survey (Bureau for Economic Research)",
      surveyUrl: "https://www.ber.ac.za/documents/index/inflation-expectations",
      questions: [
        {
          title: "Current and expected AI adoption",
          image: "screenshots/safrica/safrica-ai_technology.png",
          alt: "Which of the following artificial intelligence technologies, if any, does your business currently use? And which do you expect to make use of over the next three years? Please select all that apply. If you are currently using an AI technology and expect to keep using it, please click both the 'Currently using' and 'Expect to use in next 3 years' boxes. Options: robotics and autonomous vehicles; data processing using machine learning; image processing using machine learning; text generation using large language models; visual content creation; other AI technology; not using / do not expect to use any artificial intelligence technologies."
        },
        {
          title: "Personal AI use",
          image: "screenshots/safrica/safrica-ai_freq.png",
          alt: "On average, how frequently do you personally use AI technologies in a typical working week? Note: among other things, AI technologies could include text generation using large language models (e.g. Microsoft Copilot), data or image processing using machine learning, and visual content creation. Options: more than 5 hours a week; 1 to 5 hours a week; up to 1 hour a week; not at all."
        },
        {
          title: "Employment impacts",
          image: "screenshots/safrica/safrica-ai_emp.png",
          alt: "How has the adoption of AI technologies affected the number of employees of your business over the past three years? And how do you expect this to affect your number of employees over the next three years? Options for each horizon: a large negative influence, subtracting 5% or more; a minor negative influence, subtracting less than 5%; no material impact; a minor positive influence, adding less than 5%; a large positive influence, adding 5% or more."
        },
        {
          title: "Productivity impacts",
          image: "screenshots/safrica/safrica-ai_prod.png",
          alt: "How has the adoption of AI technologies affected the volume of sales per employee of your business over the past three years? And how do you expect this to affect your volume of sales per employee over the next three years? Options for each horizon: a large negative influence, subtracting 5% or more; a minor negative influence, subtracting less than 5%; no material impact; a minor positive influence, adding less than 5%; a large positive influence, adding 5% or more."
        }
      ]
    },
    {
      id: "canada",
      country: "Canada",
      survey: "Business Leaders' Pulse (BLP)",
      surveyUrl: "https://www.bankofcanada.ca/2022/06/staff-discussion-paper-2022-14/",
      questions: [
        {
          title: "Current AI adoption",
          image: "screenshots/canada/canada-ai_technology_now.png",
          alt: "Which of the following AI technologies does your business currently use? Select all that apply. Options: robotics; generative AI, like ChatGPT, Claude, or Gemini; autonomous vehicles; image processing using machine learning; data processing using machine learning; visual content creation; other AI technology; I don't know; we are not using any AI technologies."
        },
        {
          title: "Expected AI adoption",
          image: "screenshots/canada/canada-ai_technology_3y.png",
          alt: "And which AI technologies do you expect your business to make use of over the next three years? Include new AI technologies that your business plans to adopt, and AI technologies your business is currently using and plans to continue using. Select all that apply. Options: visual content creation; image processing using machine learning; robotics; data processing using machine learning; generative AI, like ChatGPT, Claude, or Gemini; autonomous vehicles; other AI technology; I don't know; we do not expect to use any AI technologies."
        },
        {
          title: "Personal AI use",
          image: "screenshots/canada/canada-ai_freq.png",
          alt: "On average, how frequently do you personally use AI technologies in a typical working week? Options: more than 10 hours a week; 5 to 10 hours a week; 1 to 5 hours a week; up to 1 hour a week; not at all."
        },
        {
          title: "Employment impacts",
          image: "screenshots/canada/canada-ai_emp.png",
          alt: "How has the adoption of AI technologies affected the number of employees in your business over the past three years? And how do you expect this to affect your number of employees over the next three years? Options for each horizon: a large positive influence, adding 5% or more; a minor positive influence, adding less than 5%; no material impact; a minor negative influence, subtracting less than 5%; a large negative influence, subtracting 5% or more."
        },
        {
          title: "Productivity impacts",
          image: "screenshots/canada/canada-ai_prod.png",
          alt: "How has the adoption of AI technologies affected the volume of sales per employee in your business over the past three years? And how do you expect this to affect the volume of your sales per employee over the next three years? Options for each horizon: a large positive influence, adding 5% or more; a minor positive influence, adding less than 5%; no material impact; a minor negative influence, subtracting less than 5%; a large negative influence, subtracting 5% or more."
        }
      ]
    },
    {
      id: "germany",
      country: "Germany",
      survey: "Bundesbank Online Panel – Firms (BOP-F)",
      surveyUrl: "https://www.bundesbank.de/en/bundesbank/research/rdsc/research-data/bop-f-618166",
      note: "The survey is conducted in German.",
      questions: [
        {
          title: "Current and expected AI adoption",
          image: "screenshots/germany/germany-ai_technology_now_3y.jpg",
          alt: "In German. Which of the following AI technologies are currently used in your firm? And which do you expect your firm to use over the next three years? Note: please select all answers that apply. If you are currently using an AI technology and expect to keep using it, please tick both the 'currently used' box and the 'expected to be used in the next three years' box. Options, asked separately for currently used and for expected to be used in the next three years: data processing using machine learning; image processing using machine learning; generative AI such as ChatGPT, Claude or Gemini; robotics and autonomous vehicles; visual content creation; other AI technologies; we do not currently use / do not expect to use any AI technologies."
        },
        {
          title: "Personal AI use",
          image: "screenshots/germany/germany-ai_freq.jpg",
          alt: "In German. On average, how often do you yourself use artificial intelligence (AI) in a typical working week? Options: not at all; up to 1 hour a week; 1 to 5 hours a week; more than 5 hours a week."
        },
        {
          title: "Employment impacts",
          image: "screenshots/germany/germany-ai_emp-jan2026.jpg",
          alt: "In German. How has the adoption of AI technologies affected the number of employees in your firm over the past three years? And how do you expect it to affect the number of employees in your firm over the next three years? Options for each horizon: large positive influence, increase of 5% or more; positive influence, increase of up to 5%; no material impact; negative influence, decrease of up to 5%; large negative influence, decrease of 5% or more."
        },
        {
          title: "Productivity impacts",
          image: "screenshots/germany/germany-ai_prod-jan2026.jpg",
          alt: "In German. How has the adoption of AI technologies affected sales per employee in your firm over the past three years? And how do you expect it to affect sales per employee in your firm over the next three years? Options for each horizon: large positive influence, increase of 5% or more; positive influence, increase of up to 5%; no material impact; negative influence, decrease of up to 5%; large negative influence, decrease of 5% or more."
        }
      ]
    }
  ]
};
