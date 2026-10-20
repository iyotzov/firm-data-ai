const datasets = [currentAiAdoptionData, expectedAiAdoptionData, personalAiUseData, employmentImpactsData, productivityImpactsData];

const datasetById = Object.fromEntries(datasets.map((dataset) => [dataset.id, dataset]));

// Impact datasets hold one set of survey waves per impact horizon (past / next 3 years).
function isImpactDataset(dataset) {
  return Array.isArray(dataset.periods);
}

function isTechnologyWaveDataset(dataset) {
  return dataset.waveLayout === "technology";
}

function buildInitialSelection(dataset) {
  const selection = {
    selectedCountry: "all_firms"
  };

  if (isTechnologyWaveDataset(dataset)) {
    selection.selectedTechnology = dataset.waves[dataset.waves.length - 1].technologies[0];
  }

  if (isImpactDataset(dataset)) {
    selection.selectedPeriod = dataset.defaultPeriod || dataset.periods[0].id;
  }

  return selection;
}

const state = {
  activeFigureId: "home",
  selectedQuestionsSurvey: surveyQuestionsData.surveys[0].id,
  selections: Object.fromEntries(datasets.map((dataset) => [dataset.id, buildInitialSelection(dataset)]))
};

// Survey waves share one blue hue: earlier wave light, later wave dark.
const waveColors = ["#6aa6dc", "#0b5a8f"];

// Ordinal teal ramp for frequency categories, light (least use) to dark (most use).
const frequencyColors = ["#7dbdb2", "#3f9c8f", "#167a6e", "#0c4a44"];
const frequencyTextColors = ["#102a43", "#102a43", "#ffffff", "#ffffff"];

// Diverging red-gray-blue scale for impact categories, large negative to large positive.
const impactColors = ["#b42318", "#e57565", "#97a1ad", "#5b9bd5", "#1f5f9e"];
const impactNegativeColor = impactColors[0];
const impactPositiveColor = impactColors[impactColors.length - 1];

const citation =
  'For further information, see: Yotzov, I., J. M. Barrero, N. Bloom, P. Bunn, C. Chawla, S. J. Davis, K. M. Foster, A. Jalca, B. H. Meyer, P. Mizen, M. A. Navarrete, S. Oh, P. Smietanka, K. Garcia Loredo, M. Reid, G. Thwaites and B. Z. Wang (2026), "Firm Data on AI", NBER Working Paper 34836.';

const subtitle = document.getElementById("subtitle");
const homeSection = document.getElementById("homeSection");
const noteText = document.getElementById("noteText");
const chartsSection = document.getElementById("chartsSection");
const comparisonChart = document.getElementById("comparisonChart");
const mixChart = document.getElementById("mixChart");
const comparisonTitle = document.getElementById("comparisonTitle");
const mixTitle = document.getElementById("mixTitle");
const comparisonCaption = document.getElementById("comparisonCaption");
const mixCaption = document.getElementById("mixCaption");
const tableSection = document.getElementById("tableSection");
const dataTable = document.getElementById("dataTable");
const aboutSection = document.getElementById("aboutSection");
const mediaSection = document.getElementById("mediaSection");
const questionsSection = document.getElementById("questionsSection");
const questionsCountryButtons = document.getElementById("questionsCountryButtons");
const questionsSurveyName = document.getElementById("questionsSurveyName");
const questionsGrid = document.getElementById("questionsGrid");
const actionsSection = document.getElementById("actionsSection");
const notesSection = document.getElementById("notesSection");
const downloadCsvButton = document.getElementById("downloadCsvButton");
const downloadJsonButton = document.getElementById("downloadJsonButton");
const tabButtons = Array.from(document.querySelectorAll(".tab-button"));
const periodControls = document.getElementById("periodControls");
const periodButtons = document.getElementById("periodButtons");
const changeChart = document.getElementById("changeChart");
const changeTitle = document.getElementById("changeTitle");
const changeCaption = document.getElementById("changeCaption");
const comparisonPanelControl = document.getElementById("comparisonPanelControl");
const comparisonPanelLabel = document.getElementById("comparisonPanelLabel");
const comparisonPanelSelect = document.getElementById("comparisonPanelSelect");
const mixPanelControl = document.getElementById("mixPanelControl");
const mixPanelSelect = document.getElementById("mixPanelSelect");
const chartTooltip = document.getElementById("chartTooltip");

function getActiveDataset() {
  return datasetById[state.activeFigureId];
}

function isAboutTabActive() {
  return state.activeFigureId === "about";
}

function isMediaTabActive() {
  return state.activeFigureId === "media";
}

function isHomeTabActive() {
  return state.activeFigureId === "home";
}

function isQuestionsTabActive() {
  return state.activeFigureId === "questions";
}

function isNonDataTabActive() {
  return isHomeTabActive() || isAboutTabActive() || isMediaTabActive() || isQuestionsTabActive();
}

function getActiveSelection() {
  return state.selections[state.activeFigureId];
}

function getActivePeriod(dataset, selection) {
  return dataset.periods.find((entry) => entry.id === selection.selectedPeriod) || dataset.periods[0];
}

// A dataset-shaped view of one impact horizon, so the wave helpers can treat it like any other wave dataset.
function getPeriodView(dataset, period) {
  return {
    ...dataset,
    waves: period.waves,
    title: period.title,
    horizon: period.horizon,
    averageLabel: period.averageLabel,
    questionNote: period.questionNote
  };
}

function getWaveView(dataset) {
  return isImpactDataset(dataset) ? getPeriodView(dataset, getActivePeriod(dataset, getActiveSelection())) : dataset;
}

function findCountry(dataset, countryId) {
  return (dataset.countries || []).find((country) => country.id === countryId);
}

function formatPercent(value) {
  return `${value.toFixed(1)}%`;
}

function formatHours(value) {
  return `${value.toFixed(1)} hrs`;
}

function formatImpact(value) {
  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toFixed(1)} pp`;
}

// Cumulative impacts are small, so they keep two decimals.
function formatImpactLevel(value) {
  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toFixed(2)}%`;
}

function formatImpactChange(value) {
  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toFixed(2)} pp`;
}

function formatResponseCount(value) {
  return Math.round(value).toLocaleString("en-US");
}

function createBarRow({ label, valueLabel, widthPercent, color }) {
  const row = document.createElement("div");
  row.className = "bar-row";

  const header = document.createElement("div");
  header.className = "bar-header";

  const name = document.createElement("span");
  name.className = "bar-label";
  name.textContent = label;

  const value = document.createElement("span");
  value.textContent = valueLabel;

  header.append(name, value);

  const track = document.createElement("div");
  track.className = "bar-track";

  const fill = document.createElement("div");
  fill.className = "bar-fill";
  fill.style.width = `${Math.max(0, Math.min(widthPercent, 100))}%`;
  fill.style.backgroundColor = color;

  track.append(fill);
  row.append(header, track);
  return row;
}

// Bar drawn from zero on a scale that may extend below zero; `scale` is { min, max }.
function createDivergingBarRow({ label, value, valueLabel, scale, color }) {
  const toPercent = (number) => ((number - scale.min) / (scale.max - scale.min)) * 100;
  const row = createElement("div", "bar-row");

  const header = createElement("div", "bar-header");
  header.append(createElement("span", "bar-label", label), createElement("span", "", valueLabel));

  const track = createElement("div", "bar-track bar-track-diverging");

  const zeroLine = createElement("div", "bar-zero-line");
  zeroLine.style.left = `${toPercent(0)}%`;
  track.append(zeroLine);

  const fill = createElement("div", `bar-fill bar-fill-diverging ${value < 0 ? "is-negative" : "is-positive"}`);
  fill.style.left = `${toPercent(Math.min(value, 0))}%`;
  fill.style.width = `${toPercent(Math.abs(value) + scale.min)}%`;
  fill.style.backgroundColor = color;

  track.append(fill);
  row.append(header, track);
  return row;
}

function toCsv(rows) {
  return rows
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

function createElement(tagName, className, text) {
  const element = document.createElement(tagName);
  if (className) {
    element.className = className;
  }
  if (text !== undefined) {
    element.textContent = text;
  }
  return element;
}

function formatHoursChange(value) {
  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toFixed(1)} hrs`;
}

function formatList(items) {
  if (items.length <= 1) {
    return items.join("");
  }
  return `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;
}

function getLatestWave(dataset) {
  return dataset.waves[dataset.waves.length - 1];
}

// Countries (excluding the aggregate) with new survey data in every wave. A country whose later wave repeats an
// earlier survey round (same fieldwork) has no change to show.
function getPanelCountries(dataset) {
  return dataset.countries.filter((country) => {
    if (country.id === "all_firms" || !dataset.waves.every((wave) => wave.data[country.id])) {
      return false;
    }
    const fieldworks = new Set(dataset.waves.map((wave) => wave.data[country.id].fieldwork));
    return fieldworks.size === dataset.waves.length;
  });
}

// Countries in every wave that are left out of the change chart because their data repeat across waves.
function getRepeatedCountries(dataset) {
  const panelIds = getPanelCountries(dataset).map((country) => country.id);
  return dataset.countries.filter(
    (country) =>
      country.id !== "all_firms" &&
      !panelIds.includes(country.id) &&
      dataset.waves.every((wave) => wave.data[country.id])
  );
}

// Entries carrying a footnote (e.g. data older than the wave) are flagged with an asterisk.
function labelWithFootnote(country, entry) {
  return entry && entry.footnote ? `${country.label}*` : country.label;
}

function createFootnotes(wave, countries) {
  const notes = countries.map((country) => wave.data[country.id]).filter((entry) => entry && entry.footnote);
  if (notes.length === 0) {
    return null;
  }
  const footnotes = createElement("div", "chart-footnote");
  notes.forEach((entry) => footnotes.append(createElement("p", "", `* ${entry.footnote}`)));
  return footnotes;
}

function getWaveCountries(dataset, wave) {
  return dataset.countries.filter((country) => country.id !== "all_firms" && wave.data[country.id]);
}

// Response-weighted average over a subset of countries, matching how "All Firms" is constructed.
function computeWeightedEntry(dataset, wave, countryIds) {
  const entries = countryIds.map((id) => wave.data[id]);
  const responses = entries.reduce((total, entry) => total + entry.responses, 0);
  const weighted = (pick) => entries.reduce((total, entry) => total + pick(entry) * entry.responses, 0) / responses;
  const firstValues = entries[0].values;

  // Values are an array aligned with dataset.categories, or an object keyed by technology name.
  const values = Array.isArray(firstValues)
    ? firstValues.map((_, index) => weighted((entry) => entry.values[index]))
    : Object.fromEntries(Object.keys(firstValues).map((key) => [key, weighted((entry) => entry.values[key])]));

  const weightedEntry = { fieldwork: wave.label, responses, values, derived: true };
  if (typeof entries[0].average === "number") {
    weightedEntry.average = weighted((entry) => entry.average);
  }
  return weightedEntry;
}

// All-firms entry restricted to the countries surveyed in every wave, so changes are like-for-like.
function getComparableAllFirmsEntry(dataset, wave) {
  const panelIds = getPanelCountries(dataset).map((country) => country.id);
  const coversPanelOnly = getWaveCountries(dataset, wave).length === panelIds.length;
  return coversPanelOnly ? wave.data.all_firms : computeWeightedEntry(dataset, wave, panelIds);
}

function getHoursScaleMax(dataset) {
  const maxAverage = Math.max(
    ...dataset.waves.flatMap((wave) => Object.values(wave.data).map((entry) => entry.average))
  );
  return Math.ceil(maxAverage * 2) / 2;
}

function setTooltip(element, title, lines) {
  element.dataset.tipTitle = title;
  element.dataset.tipBody = lines.join("\n");
}

function describeEntry(entry) {
  return `Fieldwork: ${entry.fieldwork} · ${formatResponseCount(entry.responses)} responses`;
}

function createLegend(items, shape) {
  const legend = createElement("div", "chart-legend");
  items.forEach((item) => {
    const entry = createElement("span", "chart-legend-item");
    const swatch = createElement("span", `chart-legend-swatch is-${shape}`);
    swatch.style.backgroundColor = item.color;
    entry.append(swatch, document.createTextNode(item.label));
    legend.append(entry);
  });
  return legend;
}

function createAxis(scaleMin, scaleMax, step, unit) {
  const axis = createElement("div", "hours-axis");
  // Ticks are computed from an index so fractional steps don't accumulate rounding error.
  for (let index = 0; scaleMin + index * step <= scaleMax + 1e-9; index += 1) {
    const tick = Number((scaleMin + index * step).toFixed(6));
    const text = Math.abs(tick - scaleMax) < 1e-9 ? `${tick}${unit}` : String(tick);
    const label = createElement("span", "hours-axis-tick", text);
    label.style.left = `${((tick - scaleMin) / (scaleMax - scaleMin)) * 100}%`;
    axis.append(label);
  }
  return axis;
}

function createHoursAxis(scaleMax) {
  return createAxis(0, scaleMax, 1, " hrs");
}

function fitSegmentLabels() {
  comparisonChart.querySelectorAll(".stack-seg").forEach((segment) => {
    const label = segment.firstElementChild;
    label.classList.remove("is-clipped");
    if (label.offsetWidth + 8 > segment.clientWidth) {
      label.classList.add("is-clipped");
    }
  });
}

function renderWaveDistribution(dataset, wave) {
  comparisonChart.innerHTML = "";
  comparisonChart.append(
    createLegend(
      dataset.categories.map((name, index) => ({ label: name, color: frequencyColors[index] })),
      "square"
    )
  );

  const list = createElement("div", "stack-chart");

  dataset.countries
    .filter((country) => wave.data[country.id])
    .forEach((country) => {
      const entry = wave.data[country.id];
      const row = createElement("div", "stack-row");
      row.classList.toggle("is-aggregate", country.id === "all_firms");
      const bar = createElement("div", "stack-bar");

      entry.values.forEach((value, index) => {
        const segment = createElement("div", "stack-seg");
        segment.style.flexGrow = value;
        segment.style.backgroundColor = frequencyColors[index];
        segment.style.color = frequencyTextColors[index];
        segment.append(createElement("span", "stack-seg-label", `${Math.round(value)}%`));
        setTooltip(segment, `${country.label}, ${wave.label}`, [
          `${dataset.categories[index]}: ${formatPercent(value)}`,
          describeEntry(entry)
        ]);
        bar.append(segment);
      });

      row.append(createElement("div", "stack-label", country.label), bar);
      list.append(row);
    });

  comparisonChart.append(list);
  requestAnimationFrame(fitSegmentLabels);
}

function renderWaveAverages(dataset, wave) {
  mixChart.innerHTML = "";
  const scaleMax = getHoursScaleMax(dataset);

  dataset.countries
    .filter((country) => wave.data[country.id])
    .forEach((country) => {
      const entry = wave.data[country.id];
      const row = createBarRow({
        label: country.label,
        valueLabel: formatHours(entry.average),
        widthPercent: (entry.average / scaleMax) * 100,
        color: waveColors[waveColors.length - 1]
      });
      setTooltip(row.querySelector(".bar-track"), `${country.label}, ${wave.label}`, [
        `Average use: ${formatHours(entry.average)} per week`,
        describeEntry(entry)
      ]);
      row.classList.toggle("is-aggregate", country.id === "all_firms");
      mixChart.append(row);
    });

  mixChart.append(createHoursAxis(scaleMax));
}

// Dot chart of each panel country's value in every wave; `measure` says how to read and format a value.
function renderChangeChart(dataset, measure) {
  changeChart.innerHTML = "";
  const scaleMin = measure.scaleMin || 0;
  const toPercent = (value) => ((value - scaleMin) / (measure.scaleMax - scaleMin)) * 100;
  const panelCountries = getPanelCountries(dataset);
  const allFirms = findCountry(dataset, "all_firms");

  const groups = [
    {
      country: allFirms,
      label: `${allFirms.label} (${panelCountries.length} countries)`,
      entries: dataset.waves.map((wave) => ({ wave, entry: getComparableAllFirmsEntry(dataset, wave) }))
    },
    ...panelCountries.map((country) => ({
      country,
      label: country.label,
      entries: dataset.waves.map((wave) => ({ wave, entry: wave.data[country.id] }))
    }))
  ];

  changeChart.append(
    createLegend(
      dataset.waves.map((wave, index) => ({ label: wave.label, color: waveColors[index] })),
      "dot"
    )
  );

  groups.forEach((group) => {
    const first = measure.getValue(group.entries[0].entry);
    const last = measure.getValue(group.entries[group.entries.length - 1].entry);

    const row = createElement("div", "bar-row");
    row.classList.toggle("is-aggregate", group.country.id === "all_firms");

    const header = createElement("div", "bar-header");
    header.append(
      createElement("span", "bar-label", group.label),
      createElement(
        "span",
        "",
        `${first.toFixed(measure.decimals || 1)} → ${measure.formatValue(last)} (${measure.formatChange(last - first)})`
      )
    );

    const track = createElement("div", "dumbbell-track");
    if (scaleMin < 0) {
      const zeroLine = createElement("div", "dumbbell-zero");
      zeroLine.style.left = `${toPercent(0)}%`;
      track.append(zeroLine);
    }
    const line = createElement("div", "dumbbell-line");
    line.style.left = `${toPercent(Math.min(first, last))}%`;
    line.style.width = `${Math.abs(toPercent(last) - toPercent(first))}%`;
    track.append(line);

    group.entries.forEach(({ wave, entry }, index) => {
      const value = measure.getValue(entry);
      const dot = createElement("div", "dumbbell-dot");
      dot.style.left = `${toPercent(value)}%`;
      dot.style.backgroundColor = waveColors[index];
      setTooltip(dot, `${group.label}, ${wave.label}`, [measure.describe(value), describeEntry(entry)]);
      track.append(dot);
    });

    row.append(header, track);
    changeChart.append(row);
  });

  changeChart.append(createAxis(scaleMin, measure.scaleMax, measure.step, measure.unit));
}

function renderWaveTable(dataset, wave, rowSpecs) {
  const countries = dataset.countries.filter((country) => wave.data[country.id]);

  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  headerRow.append(createElement("th", "", dataset.rowLabel));
  countries.forEach((country) =>
    headerRow.append(createElement("th", "", labelWithFootnote(country, wave.data[country.id])))
  );
  thead.append(headerRow);

  const rows = [
    ...rowSpecs,
    { name: "Number of Survey Responses", format: (entry) => formatResponseCount(entry.responses) },
    { name: "Fieldwork", format: (entry) => entry.fieldwork }
  ];

  const tbody = document.createElement("tbody");
  rows.forEach((rowSpec) => {
    const row = document.createElement("tr");
    row.append(createElement("td", "", rowSpec.name));
    countries.forEach((country) => row.append(createElement("td", "", rowSpec.format(wave.data[country.id]))));
    tbody.append(row);
  });

  dataTable.innerHTML = "";
  dataTable.append(thead, tbody);

  const footnotes = createFootnotes(wave, countries);
  if (footnotes) {
    const caption = createElement("caption");
    caption.append(footnotes);
    dataTable.prepend(caption);
  }
}

function renderWaveIntro(dataset, wave, { changeLabel, extraNote = "" }) {
  const earlierWaves = dataset.waves.slice(0, -1);
  const countryLabels = formatList(getWaveCountries(dataset, wave).map((country) => country.label));
  const panelLabels = formatList(getPanelCountries(dataset).map((country) => country.label));
  subtitle.textContent = `${dataset.title} across the ${countryLabels}, plus the all-firms average. Survey wave: ${wave.label}.`;

  const paragraphs = [
    `${dataset.questionNote} ${wave.notes}`,
    ...earlierWaves.map(
      (earlier) => `The ${changeLabel} compares with the ${earlier.label} survey wave. ${earlier.notes}`
    ),
    `${dataset.methodNote} In the change chart, the all-firms figures use only the countries surveyed in both waves (the ${panelLabels}), so that the comparison covers the same countries.${extraNote} The data for all waves, including these all-firms figures, are available in the CSV download.`
  ];

  noteText.innerHTML = `${paragraphs.map((text) => `<p>${text}</p>`).join("")}<p class="citation">${citation}</p>`;
}

function renderFrequencyWaveDataset(dataset) {
  const wave = getLatestWave(dataset);
  const earliestWave = dataset.waves[0];

  renderWaveIntro(dataset, wave, { changeLabel: "change in average weekly use" });

  comparisonTitle.textContent = "Distribution by Country";
  comparisonCaption.textContent = `Share of respondents by weekly personal AI use, ${wave.label}`;
  mixTitle.textContent = "Average Use per Week (Hours)";
  mixCaption.textContent = `By country, ${wave.label}`;
  changeTitle.textContent = "Change in Average Weekly Use";
  changeCaption.textContent = `${earliestWave.label} to ${wave.label}, countries surveyed in both waves`;

  renderWaveDistribution(dataset, wave);
  renderWaveAverages(dataset, wave);
  renderChangeChart(dataset, {
    getValue: (entry) => entry.average,
    scaleMax: getHoursScaleMax(dataset),
    step: 1,
    unit: " hrs",
    formatValue: formatHours,
    formatChange: formatHoursChange,
    describe: (value) => `Average use: ${formatHours(value)} per week`
  });
  renderWaveTable(dataset, wave, [
    ...dataset.categories.map((name, index) => ({ name, format: (entry) => formatPercent(entry.values[index]) })),
    { name: dataset.averageLabel, format: (entry) => formatHours(entry.average) }
  ]);
}

// Technologies offered under the same name in every wave, so their change can be shown.
function getComparableTechnologies(dataset) {
  return getLatestWave(dataset).technologies.filter((name) =>
    dataset.waves.every((wave) => wave.technologies.includes(name))
  );
}

function quoteList(items) {
  return formatList(items.map((item) => `"${item}"`));
}

function fillSelect(select, options, value) {
  select.innerHTML = "";
  options.forEach((option) => {
    const element = createElement("option", "", option.label);
    element.value = option.value;
    select.append(element);
  });
  select.value = value;
}

function syncTechnologyPanelControls(dataset, wave, selection) {
  comparisonPanelControl.hidden = false;
  mixPanelControl.hidden = false;
  comparisonPanelLabel.textContent = "Technology";

  fillSelect(
    comparisonPanelSelect,
    wave.technologies.map((name) => ({ value: name, label: name })),
    selection.selectedTechnology
  );
  fillSelect(
    mixPanelSelect,
    dataset.countries.filter((country) => wave.data[country.id]).map((country) => ({ value: country.id, label: country.label })),
    selection.selectedCountry
  );
}

function renderTechnologyComparison(dataset, wave, technology) {
  comparisonChart.innerHTML = "";

  dataset.countries
    .filter((country) => wave.data[country.id])
    .forEach((country) => {
      const entry = wave.data[country.id];
      const value = entry.values[technology];
      const row = createBarRow({
        label: country.label,
        valueLabel: formatPercent(value),
        widthPercent: value,
        color: waveColors[waveColors.length - 1]
      });
      setTooltip(row.querySelector(".bar-track"), `${country.label}, ${wave.label}`, [
        `${technology}: ${formatPercent(value)} of firms`,
        describeEntry(entry)
      ]);
      row.classList.toggle("is-aggregate", country.id === "all_firms");
      comparisonChart.append(row);
    });
}

function renderTechnologyMix(wave, country) {
  mixChart.innerHTML = "";
  const entry = wave.data[country.id];

  wave.technologies
    .map((name) => ({ name, value: entry.values[name] }))
    .sort((a, b) => b.value - a.value)
    .forEach(({ name, value }) => {
      const row = createBarRow({
        label: name,
        valueLabel: formatPercent(value),
        widthPercent: value,
        color: waveColors[waveColors.length - 1]
      });
      setTooltip(row.querySelector(".bar-track"), `${country.label}, ${wave.label}`, [
        `${name}: ${formatPercent(value)} of firms`,
        describeEntry(entry)
      ]);
      mixChart.append(row);
    });
}

function renderTechnologyWaveDataset(dataset) {
  const selection = getActiveSelection();
  const wave = getLatestWave(dataset);
  const earliestWave = dataset.waves[0];
  const technology = selection.selectedTechnology;
  const country = findCountry(dataset, selection.selectedCountry);
  const comparable = getComparableTechnologies(dataset);
  const newTechnologies = wave.technologies.filter((name) => !comparable.includes(name));
  const droppedTechnologies = earliestWave.technologies.filter((name) => !wave.technologies.includes(name));

  const changeTechnology = dataset.changeTechnology;
  const measure = dataset.measureLabel;
  const measureTitle = measure.replace(/\b\w/g, (letter) => letter.toUpperCase());

  syncTechnologyPanelControls(dataset, wave, selection);
  renderWaveIntro(dataset, wave, {
    changeLabel: `change in ${measure} of "${changeTechnology}"`,
    extraNote: newTechnologies.length
      ? ` The technology options changed between survey waves: in ${wave.label}, ${quoteList(newTechnologies)} replaced ${quoteList(droppedTechnologies)}.`
      : ""
  });

  comparisonTitle.textContent = "Country Comparison";
  comparisonCaption.textContent = `${technology}, ${wave.label}, by country and overall average`;
  mixTitle.textContent = "Technology Mix";
  mixCaption.textContent = `${country.label}: ${measure} rate by AI technology, ${wave.label}`;
  changeTitle.textContent = `Change in ${measureTitle}`;
  changeCaption.textContent = `${changeTechnology}: ${earliestWave.label} to ${wave.label}, countries surveyed in both waves`;

  renderTechnologyComparison(dataset, wave, technology);
  renderTechnologyMix(wave, country);

  renderChangeChart(dataset, {
    getValue: (entry) => entry.values[changeTechnology],
    scaleMax: 100,
    step: 25,
    unit: "%",
    formatValue: formatPercent,
    formatChange: formatImpact,
    describe: (value) => `${changeTechnology}: ${formatPercent(value)} of firms`
  });

  renderWaveTable(
    dataset,
    wave,
    wave.technologies.map((name) => ({ name, format: (entry) => formatPercent(entry.values[name]) }))
  );
}

// Axis range covering zero and every cumulative impact in the horizon, shared by the level and change charts.
function getImpactScale(dataset) {
  const values = dataset.waves.flatMap((wave) => Object.values(wave.data).map((entry) => entry.average));
  const low = Math.min(0, ...values);
  const high = Math.max(0, ...values);
  // Work in whole steps to avoid floating-point drift; allow at most six steps across the axis.
  const stepsBelow = (step) => Math.floor(low / step + 1e-9);
  const stepsAbove = (step) => Math.ceil(high / step - 1e-9);
  const step = [0.1, 0.25, 0.5, 1, 2].find((size) => stepsAbove(size) - stepsBelow(size) <= 6) || 5;
  const round = (value) => Number(value.toFixed(6));
  return { min: round(stepsBelow(step) * step), max: round(stepsAbove(step) * step), step };
}

function renderImpactDistribution(dataset, wave, country) {
  comparisonChart.innerHTML = "";
  const entry = wave.data[country.id];
  const label = labelWithFootnote(country, entry);

  dataset.categories.forEach((category, index) => {
    const value = entry.values[index];
    const row = createBarRow({
      label: category,
      valueLabel: formatPercent(value),
      widthPercent: value,
      color: impactColors[index]
    });
    setTooltip(row.querySelector(".bar-track"), `${label}, ${wave.label}`, [
      `${category}: ${formatPercent(value)} of firms`,
      describeEntry(entry)
    ]);
    comparisonChart.append(row);
  });

  const footnotes = createFootnotes(wave, [country]);
  if (footnotes) {
    comparisonChart.append(footnotes);
  }
}

function renderImpactLevels(dataset, wave, scale) {
  mixChart.innerHTML = "";
  const countries = dataset.countries.filter((country) => wave.data[country.id]);

  countries.forEach((country) => {
    const entry = wave.data[country.id];
    const label = labelWithFootnote(country, entry);
    const row = createDivergingBarRow({
      label,
      value: entry.average,
      valueLabel: formatImpactLevel(entry.average),
      scale,
      color: entry.average < 0 ? impactNegativeColor : impactPositiveColor
    });
    setTooltip(row.querySelector(".bar-track"), `${label}, ${wave.label}`, [
      `Cumulative impact: ${formatImpactLevel(entry.average)}`,
      describeEntry(entry)
    ]);
    row.classList.toggle("is-aggregate", country.id === "all_firms");
    mixChart.append(row);
  });

  mixChart.append(createAxis(scale.min, scale.max, scale.step, "%"));

  const footnotes = createFootnotes(wave, countries);
  if (footnotes) {
    mixChart.append(footnotes);
  }
}

function renderImpactWaveDataset(dataset) {
  const selection = getActiveSelection();
  const view = getWaveView(dataset);
  const wave = getLatestWave(view);
  const earliestWave = view.waves[0];
  const country = findCountry(view, selection.selectedCountry);
  const scale = getImpactScale(view);
  const measure = view.measureLabel;
  const repeated = getRepeatedCountries(view);

  syncPeriodControls();
  comparisonPanelControl.hidden = false;
  comparisonPanelLabel.textContent = "Country";
  fillSelect(
    comparisonPanelSelect,
    view.countries
      .filter((entry) => wave.data[entry.id])
      .map((entry) => ({ value: entry.id, label: labelWithFootnote(entry, wave.data[entry.id]) })),
    country.id
  );

  renderWaveIntro(view, wave, {
    changeLabel: "change in cumulative impact",
    extraNote: repeated.length
      ? ` ${formatList(repeated.map((entry) => entry.label))} ${repeated.length > 1 ? "are" : "is"} not included in the change chart because the same survey data are used in both waves.`
      : ""
  });

  comparisonTitle.textContent = "Distribution by Country";
  comparisonCaption.textContent = `${labelWithFootnote(country, wave.data[country.id])}: share of firms by impact of AI on ${measure} ${view.horizon}, ${wave.label}`;
  mixTitle.textContent = "Cumulative Impact";
  mixCaption.textContent = `Impact on ${measure} ${view.horizon} by country, ${wave.label}`;
  changeTitle.textContent = "Change in Cumulative Impact";
  changeCaption.textContent = `${earliestWave.label} to ${wave.label}, countries surveyed in both waves`;

  renderImpactDistribution(view, wave, country);
  renderImpactLevels(view, wave, scale);
  renderChangeChart(view, {
    getValue: (entry) => entry.average,
    scaleMin: scale.min,
    scaleMax: scale.max,
    step: scale.step,
    unit: "%",
    decimals: 2,
    formatValue: formatImpactLevel,
    formatChange: formatImpactChange,
    describe: (value) => `Cumulative impact: ${formatImpactLevel(value)}`
  });
  renderWaveTable(view, wave, [
    ...view.categories.map((name, index) => ({ name, format: (entry) => formatPercent(entry.values[index]) })),
    { name: view.averageLabel, format: (entry) => formatImpactLevel(entry.average) }
  ]);
}

function renderWaveDataset() {
  const dataset = getActiveDataset();

  periodControls.hidden = true;
  comparisonPanelControl.hidden = true;
  mixPanelControl.hidden = true;

  if (isImpactDataset(dataset)) {
    renderImpactWaveDataset(dataset);
  } else if (isTechnologyWaveDataset(dataset)) {
    renderTechnologyWaveDataset(dataset);
  } else {
    renderFrequencyWaveDataset(dataset);
  }
}

// One row per (category or technology, value) pair for a country's entry in a wave.
function getEntryCsvRows(dataset, wave, entry) {
  if (Array.isArray(entry.values)) {
    return [
      ...dataset.categories.map((category, index) => [`${category} (%)`, entry.values[index]]),
      [dataset.averageLabel, entry.average]
    ];
  }
  return wave.technologies.map((name) => [name, entry.values[name]]);
}

function getWaveCsvRows(dataset) {
  const rows = [];
  const panelCountries = getPanelCountries(dataset);

  const pushEntry = (wave, label, source, entry) => {
    getEntryCsvRows(dataset, wave, entry).forEach(([name, value]) => {
      rows.push([wave.label, label, source, entry.fieldwork, entry.responses, name, value]);
    });
  };

  dataset.waves.forEach((wave) => {
    dataset.countries
      .filter((country) => wave.data[country.id])
      .forEach((country) => pushEntry(wave, country.label, country.source, wave.data[country.id]));

    const comparable = getComparableAllFirmsEntry(dataset, wave);
    if (comparable.derived) {
      const label = `All Firms (${formatList(panelCountries.map((country) => country.label))} only)`;
      pushEntry(wave, label, "Response-weighted average of the countries surveyed in all waves", comparable);
    }
  });

  return rows;
}

// Impact datasets export every horizon, with a leading "Horizon" column.
function waveDatasetToCsv(dataset) {
  const header = ["Wave", "Country", "Survey", "Fieldwork", "Number of Survey Responses", dataset.rowLabel, "Value"];

  if (isImpactDataset(dataset)) {
    const rows = dataset.periods.flatMap((period) =>
      getWaveCsvRows(getPeriodView(dataset, period)).map((row) => [period.label, ...row])
    );
    return toCsv([["Horizon", ...header], ...rows]);
  }

  return toCsv([header, ...getWaveCsvRows(dataset)]);
}

function setupPanelControls() {
  comparisonPanelSelect.addEventListener("change", (event) => {
    const selection = getActiveSelection();
    if (isImpactDataset(getActiveDataset())) {
      selection.selectedCountry = event.target.value;
    } else {
      selection.selectedTechnology = event.target.value;
    }
    renderWaveDataset();
  });

  mixPanelSelect.addEventListener("change", (event) => {
    getActiveSelection().selectedCountry = event.target.value;
    renderWaveDataset();
  });
}

function setupWaveResize() {
  window.addEventListener("resize", () => {
    if (!isNonDataTabActive()) {
      fitSegmentLabels();
    }
  });
}

function setupTooltip() {
  const positionTooltip = (event) => {
    const offset = 14;
    const { innerWidth, innerHeight } = window;
    const rect = chartTooltip.getBoundingClientRect();
    let left = event.clientX + offset;
    let top = event.clientY + offset;
    if (left + rect.width > innerWidth - 8) {
      left = event.clientX - rect.width - offset;
    }
    if (top + rect.height > innerHeight - 8) {
      top = event.clientY - rect.height - offset;
    }
    chartTooltip.style.left = `${Math.max(8, left)}px`;
    chartTooltip.style.top = `${Math.max(8, top)}px`;
  };

  document.addEventListener("pointerover", (event) => {
    const target = event.target.closest("[data-tip-title]");
    if (!target) {
      chartTooltip.hidden = true;
      return;
    }
    chartTooltip.innerHTML = "";
    chartTooltip.append(
      createElement("strong", "", target.dataset.tipTitle),
      createElement("span", "", target.dataset.tipBody)
    );
    chartTooltip.hidden = false;
    positionTooltip(event);
  });

  document.addEventListener("pointermove", (event) => {
    if (!chartTooltip.hidden) {
      positionTooltip(event);
    }
  });

  document.addEventListener("scroll", () => {
    chartTooltip.hidden = true;
  });
}

function syncPeriodControls() {
  const dataset = getActiveDataset();
  const selection = getActiveSelection();

  periodControls.hidden = false;
  periodButtons.innerHTML = "";

  dataset.periods.forEach((period) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "period-button";
    if (selection.selectedPeriod === period.id) {
      button.classList.add("is-active");
    }
    button.dataset.periodId = period.id;
    button.textContent = period.label;
    periodButtons.append(button);
  });
}

function renderSurveyQuestions() {
  const surveys = surveyQuestionsData.surveys;
  const survey = surveys.find((entry) => entry.id === state.selectedQuestionsSurvey) || surveys[0];

  questionsCountryButtons.innerHTML = "";
  surveys.forEach((entry) => {
    const button = createElement("button", "period-button", entry.country);
    button.type = "button";
    button.dataset.surveyId = entry.id;
    button.classList.toggle("is-active", entry.id === survey.id);
    button.setAttribute("aria-pressed", String(entry.id === survey.id));
    questionsCountryButtons.append(button);
  });

  questionsSurveyName.innerHTML = "";
  if (survey.surveyUrl) {
    const link = createElement("a", "", survey.survey);
    link.href = survey.surveyUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    questionsSurveyName.append(link);
  } else {
    questionsSurveyName.textContent = survey.survey;
  }
  if (survey.note) {
    questionsSurveyName.append(createElement("span", "questions-survey-note", ` ${survey.note}`));
  }

  questionsGrid.innerHTML = "";
  survey.questions.forEach((question) => {
    const figure = createElement("figure", "question-figure");
    const link = createElement("a", "question-image-link");
    link.href = question.image;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    const image = createElement("img");
    image.src = question.image;
    image.alt = question.alt || question.title;
    image.loading = "lazy";
    link.append(image);

    figure.append(createElement("figcaption", "", question.title), link);
    questionsGrid.append(figure);
  });
}

function updateTabStyles() {
  tabButtons.forEach((button) => {
    const isActive = button.dataset.figureId === state.activeFigureId;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });
}

function renderAll() {
  const isDataTab = !isNonDataTabActive();

  updateTabStyles();
  subtitle.hidden = !isDataTab;
  homeSection.hidden = !isHomeTabActive();
  aboutSection.hidden = !isAboutTabActive();
  mediaSection.hidden = !isMediaTabActive();
  questionsSection.hidden = !isQuestionsTabActive();
  periodControls.hidden = true;
  [chartsSection, tableSection, actionsSection, notesSection].forEach((section) => {
    section.hidden = !isDataTab;
  });

  if (isDataTab) {
    renderWaveDataset();
  } else if (isQuestionsTabActive()) {
    renderSurveyQuestions();
  }
}

function triggerDownload(filename, fileContents, mimeType) {
  const blob = new Blob([fileContents], { type: mimeType });
  const url = URL.createObjectURL(blob);

  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  document.body.append(anchor);
  anchor.click();
  anchor.remove();

  URL.revokeObjectURL(url);
}

function setupDownloads() {
  downloadCsvButton.addEventListener("click", () => {
    if (isNonDataTabActive()) {
      return;
    }

    const dataset = getActiveDataset();
    triggerDownload(`${dataset.downloadBase}.csv`, waveDatasetToCsv(dataset), "text/csv;charset=utf-8");
  });

  downloadJsonButton.addEventListener("click", () => {
    if (isNonDataTabActive()) {
      return;
    }

    const dataset = getActiveDataset();
    triggerDownload(
      `${dataset.downloadBase}.json`,
      JSON.stringify(dataset, null, 2),
      "application/json;charset=utf-8"
    );
  });
}

function setupPeriodControls() {
  periodButtons.addEventListener("click", (event) => {
    const button = event.target.closest(".period-button");
    if (!button) {
      return;
    }

    const dataset = getActiveDataset();
    if (!isImpactDataset(dataset)) {
      return;
    }

    const selection = getActiveSelection();
    const nextPeriodId = button.dataset.periodId;
    const periodExists = dataset.periods.some((period) => period.id === nextPeriodId);

    if (!periodExists || selection.selectedPeriod === nextPeriodId) {
      return;
    }

    selection.selectedPeriod = nextPeriodId;
    renderAll();
  });
}

function setupTabs() {
  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const nextId = button.dataset.figureId;
      const isNonDataTab = ["home", "about", "media", "questions"].includes(nextId);
      if ((!datasetById[nextId] && !isNonDataTab) || nextId === state.activeFigureId) {
        return;
      }
      state.activeFigureId = nextId;
      renderAll();
    });
  });
}

function setupQuestionsControls() {
  questionsCountryButtons.addEventListener("click", (event) => {
    const button = event.target.closest(".period-button");
    if (!button || button.dataset.surveyId === state.selectedQuestionsSurvey) {
      return;
    }

    state.selectedQuestionsSurvey = button.dataset.surveyId;
    renderSurveyQuestions();
  });
}

function init() {
  setupPeriodControls();
  setupQuestionsControls();
  setupPanelControls();
  setupWaveResize();
  setupTooltip();
  setupDownloads();
  setupTabs();
  renderAll();
}

init();
