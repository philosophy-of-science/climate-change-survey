import Chart from "chart.js";
import { HueCircle19 } from "../node_modules/chartjs-plugin-colorschemes/src/colorschemes/colorschemes.tableau";

console.log(HueCircle19);

// GLOBALS
Chart.defaults.plugins.title.fontSize = 16;
Chart.defaults.plugins.legend.display = false;
Chart.defaults.font.family = "'Inter','sans-serif'";
Chart.defaults.font.size = 14;

console.log(Chart);

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
