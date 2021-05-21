// Import chart library and color scheme
import ApexCharts from "apexcharts";
import { HueCircle19 } from "../node_modules/chartjs-plugin-colorschemes/src/colorschemes/colorschemes.tableau";

// Define colors globally
Apex.colors = HueCircle19;

// Rounds numbers
function roundNumbers(arr) {
  const roundedNumbers = arr.map(num => Math.round(num));
  return roundedNumbers;
}

// Chart function
function createChart(obj) {
  // Template for Bar Chart
  const barTemplate = {
    chart: {
      type: "bar",
      height: 380,
    },

    series: [
      {
        name: "",
        data: [],
      },
    ],

    plotOptions: {
      bar: {
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
      categories: [],
    },
  };

  // if type is bar, then assign the data and get the element
  if (obj.type === "bar") {
    barTemplate.series[0].name = obj.name;
    barTemplate.series[0].data = obj.data;
    barTemplate.xaxis.categories = obj.categories;
    const ctx = document.getElementById(obj.id);
    const chart = new ApexCharts(ctx, barTemplate);
    chart.render();
    return;
  }

  if (obj.type === "circle") {
    // ✅ Will need to write for circle
  }
}

/*
🎯
Dom, 

This is the data object. You need to transfer the existing data into this object below.

*/
const data = {
  // First set of data
  onlineActivities: {
    data: roundNumbers([
      57.44680851, 50.53191489, 82.9787234, 68.61702128, 86.70212766,
      26.59574468, 52.12765957, 42.55319149, 70.21276596,
    ]),
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
    type: "bar",
    name: "Online Activities",
    id: "onlineActivities",
  },
  // Second set of data
  onlinePositives: {
    data: roundNumbers([
      43.61702128, 75.53191489, 25, 56.38297872, 38.82978723, 10.10638298,
    ]),
    categories: [
      "Ability to include most suitable/in-demand participants",
      "Accessibility to those from relatively remote locations or with financial constraints",
      "Accessibility for those with mobility issues or sensory impairments",
      "Overall convenience for participants",
      "Ability to record event",
      "Other",
    ],
    name: "Online Positives",
    type: "bar",
    id: "onlinePositives",
  },
};

/*
Online Activities
*/
createChart(data.onlineActivities);

/*
Online Positives
*/
createChart(data.onlinePositives);

/*
🎯
You can then call the functions here
*/
