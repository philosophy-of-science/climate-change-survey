import ApexCharts from "apexcharts";
import { HueCircle19 } from "../node_modules/chartjs-plugin-colorschemes/src/colorschemes/colorschemes.tableau";

// GLOBALS
// ApexCharts.defaults.plugins.title.fontSize = 16;
// // Chart.defaults.plugins.legend.display = false;
// ApexCharts.defaults.font.family = "'Inter','sans-serif'";
// ApexCharts.defaults.font.size = 14;

// console.log(ApexCharts.defaults);
Apex.colors = HueCircle19;
function roundNumbers(arr) {
  const roundedNumbers = arr.map(num => Math.round(num));
  return roundedNumbers;
}

let onlineActivitiesctx = document.getElementById("onlineActivities");

const onlineActivities = new ApexCharts(onlineActivitiesctx, {
  chart: {
    type: "bar",
    height: 380,
  },
  series: [
    {
      name: "Online Activities",
      data: roundNumbers([
        57.44680851, 50.53191489, 82.9787234, 68.61702128, 86.70212766,
        26.59574468, 52.12765957, 42.55319149, 70.21276596,
      ]),
    },
  ],
  plotOptions: {
    bar: {
      // borderRadius: 4,
      horizontal: true,
      distributed: true,
      barHeight: "100%",
      dataLabels: {
        position: "bottom",
      },
    },
  },
  dataLabels: {
    enabled: true,
    textAnchor: "start",
    style: {
      colors: ["#000"],
    },
    formatter: function (val, opt) {
      return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
    },
    offsetX: 0,
  },

  yaxis: {
    labels: {
      show: false,
    },
  },
  xaxis: {
    categories: [
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
  },
});

onlineActivities.render();

let onlinePositivesctx = document.getElementById("onlinePositives");

let onlinePositives = new ApexCharts(onlinePositivesctx, {
  chart: {
    type: "bar",
    height: 350,
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: [
      "Ability to include most suitable/in-demand participants",
      "Accessibility to those from relatively remote locations or with financial constraints",
      "Accessibility for those with mobility issues or sensory impairments",
      "Overall convenience for participants",
      "Ability to record event",
      "Other",
    ],
  },
  series: [
    {
      data: roundNumbers([
        43.61702128, 75.53191489, 25, 56.38297872, 38.82978723, 10.10638298,
      ]),
    },
  ],
});
onlinePositives.render();
// let onlineNegativesctx = document.getElementById("onlineNegatives");

// new ApexCharts(onlineNegativesctx, {
//   type: "bar",
//   data: {
//     labels: [
//       "Flow of discussion/Q&A",
//       "Basic communication due to tech failures",
//       "Fostering existing friendships through social time",
//       "Initiating new collegial relationships",
//       "Accessibility for those with sensory impairments",
//       "Other",
//     ],
//     datasets: [
//       {
//         label: "number/total",
//         data: truncateArr([
//           56.91489362, 38.82978723, 78.19148936, 78.19148936, 11.17021277,
//           20.21276596,
//         ]),
//         backgroundColor: HueCircle19,
//       },
//     ],
//   },
//   options: {
//     indexAxis: "y",
//   },
// });

// let diffInPersonctx = document.getElementById("diffInPerson");
// new ApexCharts(diffInPersonctx, {
//   type: "bar",
//   data: {
//     labels: [
//       "Care obligations",
//       "Teaching/admin obligations",
//       "Sensory impairments",
//       "Medical conditions (excluding sensory impairments)",
//       "Lack of funds",
//       "Visa issues",
//       "Geographical location (independent of funding and visa issues)",
//       "Other",
//     ],
//     datasets: [
//       {
//         label: "Total",
//         data: truncateArr([
//           25.53191489, 44.14893617, 7.978723404, 6.914893617, 40.42553191,
//           23.40425532, 21.27659574, 10.10638298,
//         ]),
//         backgroundColor: HueCircle19,
//       },
//     ],
//   },
//   options: {
//     indexAxis: "y",
//   },
// });

// let diffOnlinectx = document.getElementById("diffOnline");
// new ApexCharts(diffOnlinectx, {
//   type: "bar",
//   data: {
//     labels: [
//       "Time zone differences",
//       "Sensory impairments",
//       "Medical conditions (excluding sensory impairments)",
//       "Zoom fatigue",
//       "Other",
//     ],
//     datasets: [
//       {
//         label: "number/total",
//         data: truncateArr([
//           50, 4.255319149, 2.659574468, 68.08510638, 15.95744681,
//         ]),
//         backgroundColor: HueCircle19,
//       },
//     ],
//   },
//   options: {
//     indexAxis: "y",
//   },
// });

// let ipccGoalsctx = document.getElementById("ipccGoals");
// new ApexCharts(ipccGoalsctx, {
//   type: "pie",
//   data: {
//     labels: [
//       "Yes - I would be interested in reducing it by 50% or more",
//       "Yes - I would be interested in reducing it to some degree",
//       "No - I would prefer my research activity to remain unaffected",
//       "Unsure",
//       "Other",
//     ],
//     datasets: [
//       {
//         label: "number/total",
//         data: [100, 49, 1, 10, 14],
//         backgroundColor: HueCircle19,
//       },
//     ],
//   },
//   options: {},
// });

// let futureOnlinectx = document.getElementById("futureOnline");
// new ApexCharts(futureOnlinectx, {
//   type: "pie",
//   data: {
//     labels: ["Yes", "No", "Unsure", "Other"],
//     datasets: [
//       {
//         label: "number/total",
//         data: [95, 34, 31, 26],
//         backgroundColor: HueCircle19,
//       },
//     ],
//   },
//   options: {},
// });

// let defaultOnlinectx = document.getElementById("defaultOnline");

// new ApexCharts(defaultOnlinectx, {
//   type: "pie",
//   data: {
//     labels: ["Yes", "No", "Unsure"],
//     datasets: [
//       {
//         label: "number/total",
//         data: [64, 68, 52],
//         backgroundColor: HueCircle19,
//       },
//     ],
//   },
//   options: {},
// });

// let carbonFootprintctx = document.getElementById("carbonFootprint");

// let carbonFootprint = new ApexCharts(carbonFootprintctx, {
//   type: "bar",
//   data: {
//     labels: [
//       "Home energy improvements in efficiency and/or electrification",
//       "Changing personal transport modes",
//       "Advocating for institutional change at your home institution",
//       "Advocating for societal policies to aid decarbonization",
//       "Pursuing carbon offsets",
//       "Changing dietary habits",
//       "Other",
//     ],
//     datasets: [
//       {
//         label: "number/total",
//         data: truncateArr([
//           69.68085106, 65.95744681, 41.4893617, 61.17021277, 29.25531915,
//           57.44680851, 10.10638298,
//         ]),
//         backgroundColor: HueCircle19,
//       },
//     ],
//   },
//   options: {
//     indexAxis: "y",
//   },
// });

// let PSAExceptionctx = document.getElementById("PSAException");
// new ApexCharts(PSAExceptionctx, {
//   type: "pie",
//   data: {
//     labels: ["Agree", "Disagree", "Unsure"],
//     datasets: [
//       {
//         label: "number/total",
//         data: [126, 26, 33],
//         backgroundColor: HueCircle19,
//       },
//     ],
//   },
//   options: {},
// });

// var remoteParticipationctx = document.getElementById("remoteParticipation");

// new ApexCharts(remoteParticipationctx, {
//   type: "pie",
//   data: {
//     labels: [
//       "Certainly",
//       "Most likely",
//       "More likely than not",
//       "Unlikely",
//       "Certainly not",
//       "Unsure",
//     ],
//     datasets: [
//       {
//         label: "number/total",
//         data: [18, 24, 24, 59, 26, 35],
//         backgroundColor: HueCircle19,
//       },
//     ],
//   },
//   options: {},
// });

// var onlinePreferencectx = document.getElementById("onlinePreference");

// var onlinePreferences = new ApexCharts(onlinePreferencectx, {
//   type: "pie",
//   data: {
//     labels: [
//       "Certainly",
//       "Most likely",
//       "More likely than not",
//       "Unlikely",
//       "Certainly not",
//       "Unsure",
//     ],
//     datasets: [
//       {
//         label: "number/total",
//         data: [13, 11, 15, 40, 85, 20],
//         backgroundColor: HueCircle19,
//       },
//     ],
//   },
//   options: {},
// });

// var employmentctx = document.getElementById("employment");
// var employment = new ApexCharts(employmentctx, {
//   type: "pie",
//   data: {
//     labels: [
//       "Undergraduate student",
//       "Graduate student",
//       "Post-doctoral fellow",
//       "Assistant professor",
//       "Associate professor",
//       "Full professor",
//       "Non-tenure track faculty",
//       "Retired scholar",
//       "Non-academic employment",
//       "Other position",
//       "Prefer not to answer",
//       "Multiple positions",
//     ],
//     datasets: [
//       {
//         label: "number/total",
//         data: [1, 20, 10, 20, 40, 69, 4, 10, 3, 2, 1, 8],
//         backgroundColor: HueCircle19,
//       },
//     ],
//   },
//   options: {},
// });

// var regionctx = document.getElementById("region");
// var region = new ApexCharts(regionctx, {
//   type: "pie",
//   data: {
//     labels: [
//       "US/Canada",
//       "South Asia/East Asia",
//       "Europe/UK",
//       "Mexico/Central America/South America",
//       "Australasia",
//       "Middle East",
//     ],
//     datasets: [
//       {
//         label: "number/total",
//         data: [133, 3, 39, 4, 6, 1],
//         backgroundColor: HueCircle19,
//       },
//     ],
//   },
//   options: {},
// });

// var raceEthnicityctx = document.getElementById("raceEthnicity");

// var raceEthnicity = new ApexCharts(raceEthnicityctx, {
//   type: "pie",
//   data: {
//     labels: [
//       "White",
//       "Prefer not to answer",
//       "Latino/Latina/Latinx/Hispanic",
//       "Asian/South Asian",
//       "Asian/South Asian, White",
//       "White, A race or ethnicity not listed",
//       "Middle Eastern/North African",
//       "A race or ethnicity not listed",
//       "Black, Middle Eastern/North African",
//     ],
//     datasets: [
//       {
//         label: "number/total",
//         data: [139, 17, 6, 10, 2, 1, 2, 2, 1],
//         backgroundColor: HueCircle19,
//       },
//     ],
//   },
//   options: {},
// });

// var genderctx = document.getElementById("gender");
// var gender = new ApexCharts(genderctx, {
//   type: "pie",
//   data: {
//     labels: [
//       "Man",
//       "Prefer not to answer",
//       "Woman",
//       "Woman, A gender category/identity not listed",
//       "Agender",
//       "Non-binary",
//       "Agender, Non-binary",
//       "Trans, Man",
//     ],
//     datasets: [
//       {
//         label: "number/total",
//         data: [102, 13, 63, 1, 1, 2, 1, 1],
//         backgroundColor: HueCircle19,
//       },
//     ],
//   },
//   options: {},
// });
