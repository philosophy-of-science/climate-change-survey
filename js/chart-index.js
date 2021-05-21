import Chart from "chart.js";
import { HueCircle19 } from "../node_modules/chartjs-plugin-colorschemes/src/colorschemes/colorschemes.tableau";

console.log(HueCircle19);

// GLOBALS
Chart.defaults.plugins.title.fontSize = 16;
// Chart.defaults.plugins.legend.display = false;
Chart.defaults.font.family = "'Inter','sans-serif'";
Chart.defaults.font.size = 14;

console.log(Chart.defaults);

function truncateArr(arr) {
  const truncatedArr = arr.map(num => Math.round(num));
  return truncatedArr;
}

let onlineActivitiesctx = document
  .getElementById("onlineActivities")
  .getContext("2d");
const onlineActivities = new Chart(onlineActivitiesctx, {
  type: "bar",
  data: {
    labels: [
      "Zoom reading groups - home institution",
      "Zoom reading groups - other institutions",
      "Home campus colloquium talks",
      "Other campus colloquium talks",
      "Workshops or conferences",
      "Remote vivas",
      "Remote PhD supervision",
      "Increased remote collaboration/co-authoring",
      "Other",
    ],
    datasets: [
      {
        label: "Total",
        data: truncateArr([
          57.44680851, 50.53191489, 82.9787234, 68.61702128, 86.70212766,
          26.59574468, 52.12765957, 42.55319149, 70.21276596,
        ]),
        backgroundColor: HueCircle19,
      },
    ],
  },
  options: {
    indexAxis: "y",
  },
});

let onlinePositivesctx = document
  .getElementById("onlinePositives")
  .getContext("2d");
let onlinePositives = new Chart(onlinePositivesctx, {
  type: "bar",
  data: {
    labels: [
      "Ability to include most suitable/in-demand participants",
      "Accessibility to those from relatively remote locations or with financial constraints",
      "Accessibility for those with mobility issues or sensory impairments",
      "Overall convenience for participants",
      "Ability to record event",
      "Other",
    ],
    datasets: [
      {
        label: "Total",
        data: truncateArr([
          43.61702128, 75.53191489, 25, 56.38297872, 38.82978723, 10.10638298,
        ]),
        backgroundColor: HueCircle19,
      },
    ],
  },
  options: {
    indexAxis: "y",
  },
});

let onlineNegativesctx = document
  .getElementById("onlineNegatives")
  .getContext("2d");
new Chart(onlineNegativesctx, {
  type: "bar",
  data: {
    labels: [
      "Flow of discussion/Q&A",
      "Basic communication due to tech failures",
      "Fostering existing friendships through social time",
      "Initiating new collegial relationships",
      "Accessibility for those with sensory impairments",
      "Other",
    ],
    datasets: [
      {
        label: "number/total",
        data: truncateArr([
          56.91489362, 38.82978723, 78.19148936, 78.19148936, 11.17021277,
          20.21276596,
        ]),
        backgroundColor: HueCircle19,
      },
    ],
  },
  options: {
    indexAxis: "y",
  },
});

let diffInPersonctx = document.getElementById("diffInPerson").getContext("2d");
new Chart(diffInPersonctx, {
  type: "bar",
  data: {
    labels: [
      "Care obligations",
      "Teaching/admin obligations",
      "Sensory impairments",
      "Medical conditions (excluding sensory impairments)",
      "Lack of funds",
      "Visa issues",
      "Geographical location (independent of funding and visa issues)",
      "Other",
    ],
    datasets: [
      {
        label: "Total",
        data: truncateArr([
          25.53191489, 44.14893617, 7.978723404, 6.914893617, 40.42553191,
          23.40425532, 21.27659574, 10.10638298,
        ]),
        backgroundColor: HueCircle19,
      },
    ],
  },
  options: {
    indexAxis: "y",
  },
});

let diffOnlinectx = document.getElementById("diffOnline").getContext("2d");
new Chart(diffOnlinectx, {
  type: "bar",
  data: {
    labels: [
      "Time zone differences",
      "Sensory impairments",
      "Medical conditions (excluding sensory impairments)",
      "Zoom fatigue",
      "Other",
    ],
    datasets: [
      {
        label: "number/total",
        data: truncateArr([
          50, 4.255319149, 2.659574468, 68.08510638, 15.95744681,
        ]),
        backgroundColor: HueCircle19,
      },
    ],
  },
  options: {
    indexAxis: "y",
  },
});

let ipccGoalsctx = document.getElementById("ipccGoals").getContext("2d");
new Chart(ipccGoalsctx, {
  type: "pie",
  data: {
    labels: [
      "Yes - I would be interested in reducing it by 50% or more",
      "Yes - I would be interested in reducing it to some degree",
      "No - I would prefer my research activity to remain unaffected",
      "Unsure",
      "Other",
    ],
    datasets: [
      {
        label: "number/total",
        data: [100, 49, 1, 10, 14],
        backgroundColor: HueCircle19,
      },
    ],
  },
  options: {},
});

let futureOnlinectx = document.getElementById("futureOnline").getContext("2d");
new Chart(futureOnlinectx, {
  type: "pie",
  data: {
    labels: ["Yes", "No", "Unsure", "Other"],
    datasets: [
      {
        label: "number/total",
        data: [95, 34, 31, 26],
        backgroundColor: HueCircle19,
      },
    ],
  },
  options: {},
});

let defaultOnlinectx = document
  .getElementById("defaultOnline")
  .getContext("2d");
new Chart(defaultOnlinectx, {
  type: "pie",
  data: {
    labels: ["Yes", "No", "Unsure"],
    datasets: [
      {
        label: "number/total",
        data: [64, 68, 52],
        backgroundColor: HueCircle19,
      },
    ],
  },
  options: {},
});

let carbonFootprintctx = document
  .getElementById("carbonFootprint")
  .getContext("2d");
let carbonFootprint = new Chart(carbonFootprintctx, {
  type: "bar",
  data: {
    labels: [
      "Home energy improvements in efficiency and/or electrification",
      "Changing personal transport modes",
      "Advocating for institutional change at your home institution",
      "Advocating for societal policies to aid decarbonization",
      "Pursuing carbon offsets",
      "Changing dietary habits",
      "Other",
    ],
    datasets: [
      {
        label: "number/total",
        data: truncateArr([
          69.68085106, 65.95744681, 41.4893617, 61.17021277, 29.25531915,
          57.44680851, 10.10638298,
        ]),
        backgroundColor: HueCircle19,
      },
    ],
  },
  options: {
    indexAxis: "y",
  },
});

let PSAExceptionctx = document.getElementById("PSAException").getContext("2d");
new Chart(PSAExceptionctx, {
  type: "pie",
  data: {
    labels: ["Agree", "Disagree", "Unsure"],
    datasets: [
      {
        label: "number/total",
        data: [126, 26, 33],
        backgroundColor: HueCircle19,
      },
    ],
  },
  options: {},
});

var remoteParticipationctx = document
  .getElementById("remoteParticipation")
  .getContext("2d");
new Chart(remoteParticipationctx, {
  type: "pie",
  data: {
    labels: [
      "Certainly",
      "Most likely",
      "More likely than not",
      "Unlikely",
      "Certainly not",
      "Unsure",
    ],
    datasets: [
      {
        label: "number/total",
        data: [18, 24, 24, 59, 26, 35],
        backgroundColor: HueCircle19,
      },
    ],
  },
  options: {},
});

var onlinePreferencectx = document
  .getElementById("onlinePreference")
  .getContext("2d");
var onlinePreferences = new Chart(onlinePreferencectx, {
  type: "pie",
  data: {
    labels: [
      "Certainly",
      "Most likely",
      "More likely than not",
      "Unlikely",
      "Certainly not",
      "Unsure",
    ],
    datasets: [
      {
        label: "number/total",
        data: [13, 11, 15, 40, 85, 20],
        backgroundColor: HueCircle19,
      },
    ],
  },
  options: {},
});

var employmentctx = document.getElementById("employment").getContext("2d");
var employment = new Chart(employmentctx, {
  type: "pie",
  data: {
    labels: [
      "Undergraduate student",
      "Graduate student",
      "Post-doctoral fellow",
      "Assistant professor",
      "Associate professor",
      "Full professor",
      "Non-tenure track faculty",
      "Retired scholar",
      "Non-academic employment",
      "Other position",
      "Prefer not to answer",
      "Multiple positions",
    ],
    datasets: [
      {
        label: "number/total",
        data: [1, 20, 10, 20, 40, 69, 4, 10, 3, 2, 1, 8],
        backgroundColor: HueCircle19,
      },
    ],
  },
  options: {},
});

var regionctx = document.getElementById("region").getContext("2d");
var region = new Chart(regionctx, {
  type: "pie",
  data: {
    labels: [
      "US/Canada",
      "South Asia/East Asia",
      "Europe/UK",
      "Mexico/Central America/South America",
      "Australasia",
      "Middle East",
    ],
    datasets: [
      {
        label: "number/total",
        data: [133, 3, 39, 4, 6, 1],
        backgroundColor: HueCircle19,
      },
    ],
  },
  options: {},
});

var raceEthnicityctx = document
  .getElementById("raceEthnicity")
  .getContext("2d");
var raceEthnicity = new Chart(raceEthnicityctx, {
  type: "pie",
  data: {
    labels: [
      "White",
      "Prefer not to answer",
      "Latino/Latina/Latinx/Hispanic",
      "Asian/South Asian",
      "Asian/South Asian, White",
      "White, A race or ethnicity not listed",
      "Middle Eastern/North African",
      "A race or ethnicity not listed",
      "Black, Middle Eastern/North African",
    ],
    datasets: [
      {
        label: "number/total",
        data: [139, 17, 6, 10, 2, 1, 2, 2, 1],
        backgroundColor: HueCircle19,
      },
    ],
  },
  options: {},
});

var genderctx = document.getElementById("gender").getContext("2d");
var gender = new Chart(genderctx, {
  type: "pie",
  data: {
    labels: [
      "Man",
      "Prefer not to answer",
      "Woman",
      "Woman, A gender category/identity not listed",
      "Agender",
      "Non-binary",
      "Agender, Non-binary",
      "Trans, Man",
    ],
    datasets: [
      {
        label: "number/total",
        data: [102, 13, 63, 1, 1, 2, 1, 1],
        backgroundColor: HueCircle19,
      },
    ],
  },
  options: {},
});
