import ApexCharts from "apexcharts";
import { RedBlueBrown12 } from "chartjs-plugin-colorschemes/src/colorschemes/colorschemes.tableau";

Apex.colors = RedBlueBrown12;
// console.log(Apex.theme);

function roundNumbers(arr) {
  const roundedNumbers = arr.map((num) => Math.round(num));
  return roundedNumbers;
}

function createChart(obj) {
  const barTemplate = {
    chart: {
      type: "bar",
      height: 380,
    },

    legend: {
      show: false,
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
      formatter: function (val, opt) {
        return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
      },
      offsetX: 0,
      style: {
        colors: ["#000"],
      },
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

  const pieTemplate = {
    series: [],
    chart: {
      height: 380,
      type: "pie",
    },

    labels: [],
    legend: {
      position: "bottom",

      fontSize: 15,
    },
    plotOptions: {
      pie: {},
    },
    responsive: [
      {
        breakpoint: 480,
        chart: {
          height: 480,
        },
        options: {
          legend: {
            position: "bottom",
            fontSize: "13px",
          },
        },
      },
    ],
  };

  if (obj.type === "bar") {
    barTemplate.series[0].data = obj.data;
    barTemplate.xaxis.categories = obj.categories;
    const ctx = document.getElementById(obj.id);
    const chart = new ApexCharts(ctx, barTemplate);
    chart.render();
    return;
  }

  if (obj.type === "circle") {
    pieTemplate.series = obj.data;
    pieTemplate.labels = obj.categories;
    const ctx = document.getElementById(obj.id);
    const chart = new ApexCharts(ctx, pieTemplate);
    chart.render();
    return;
  }
}

export const data = {
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
    name: "Worked Well for Online Events",
    type: "bar",
    id: "onlinePositives",
  },
  // Third set of data
  onlineNegatives: {
    data: roundNumbers([
      56.91489362, 38.82978723, 78.19148936, 78.19148936, 11.17021277,
      20.21276596,
    ]),
    categories: [
      "Flow of discussion/Q&A",
      "Basic communication due to tech failures",
      "Fostering existing friendships through social time",
      "Initiating new collegial relationships",
      "Accessibility for those with sensory impairments",
      "Other",
    ],
    name: "Worked Poorly for Online Events",
    type: "bar",
    id: "onlineNegatives",
  },
  // Fourth set of data
  diffInPerson: {
    data: roundNumbers([
      25.53191489, 44.14893617, 7.978723404, 6.914893617, 40.42553191,
      23.40425532, 21.27659574, 10.10638298,
    ]),
    categories: [
      "Care obligations",
      "Teaching/admin obligations",
      "Sensory impairments",
      "Medical conditions (excluding sensory impairments)",
      "Lack of funds",
      "Visa issues",
      "Geographical location (independent of funding and visa issues)",
      "Other",
    ],
    name: "Difficulties for In-Person Conferences",
    type: "bar",
    id: "diffInPerson",
  },
  //Fifth set of data
  diffOnline: {
    data: roundNumbers([
      50, 4.255319149, 2.659574468, 68.08510638, 15.95744681,
    ]),
    categories: [
      "Time zone differences",
      "Sensory impairments",
      "Medical conditions (excluding sensory impairments)",
      "Zoom fatigue",
      "Other",
    ],
    name: "Difficulties for Online Conferences",
    type: "bar",
    id: "diffOnline",
  },
  //Sixth set of data
  ipccGoals: {
    data: roundNumbers([100, 49, 1, 10, 14]),
    categories: [
      "Yes - I would be interested in reducing it by 50% or more",
      "Yes - I would be interested in reducing it to some degree",
      "No - I would prefer my research activity to remain unaffected",
      "Unsure",
      "Other",
    ],
    name: "Are You Interested in Reducing the Carbon Footprint Associated with Your Research Activity?",
    type: "circle",
    id: "ipccGoals",
  },
  //Seventh set of data
  futureOnline: {
    data: roundNumbers([95, 34, 31, 26]),
    categories: ["Yes", "No", "Unsure", "Other"],
    name: "Should Many Conferences/Workshops Continue to Be Hosted Online?",
    type: "circle",
    id: "futureOnline",
  },
  //Eighth set of data
  defaultOnline: {
    data: roundNumbers([64, 68, 52]),
    categories: ["Yes", "No", "Unsure"],
    name: "Should Virtual Be the Default Setting for Future Conferences?",
    type: "circle",
    id: "defaultOnline",
  },
  //Ninth set of data
  carbonFootprint: {
    data: roundNumbers([
      69.68085106, 65.95744681, 41.4893617, 61.17021277, 29.25531915,
      57.44680851, 10.10638298,
    ]),
    categories: [
      "Home energy improvements in efficiency and/or electrification",
      "Changing personal transport modes",
      "Advocating for institutional change at your home institution",
      "Advocating for societal policies to aid decarbonization",
      "Pursuing carbon offsets",
      "Changing dietary habits",
      "Other",
    ],
    name: "Actions Being Taken to Reduce Carbon Footprint",
    type: "bar",
    id: "carbonFootprint",
  },
  //Tenth set of data
  PSAException: {
    data: roundNumbers([126, 26, 33]),
    categories: ["Agree", "Disagree", "Unsure"],
    name: "“There Is Special Reason to Host the PSA Biennial Conference as Fully or Partly In-Person”",
    type: "circle",
    id: "PSAException",
  },
  //Eleventh set of data
  remoteParticipation: {
    data: roundNumbers([18, 24, 24, 59, 26, 35]),
    categories: [
      "Certainly",
      "Most likely",
      "More likely than not",
      "Unlikely",
      "Certainly not",
      "Unsure",
    ],
    name: "Would You Participate Remotely in a Hybrid PSA Conference?",
    type: "circle",
    id: "remoteParticipation",
  },
  //Twelfth set of data
  onlinePreference: {
    data: roundNumbers([13, 11, 15, 40, 85, 20]),
    categories: [
      "Certainly",
      "Most likely",
      "More likely than not",
      "Unlikely",
      "Certainly not",
      "Unsure",
    ],
    name: "Would You Prefer PSA 2024 to Be Held Fully Remotely?",
    type: "circle",
    id: "onlinePreference",
  },
  //Thirteenth set of data
  employment: {
    data: roundNumbers([1, 20, 10, 20, 40, 69, 4, 10, 3, 2, 1, 8]),
    categories: [
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
    name: "Employment Status",
    type: "circle",
    id: "employment",
  },
  //Fourteenth set of data
  region: {
    data: roundNumbers([133, 3, 39, 4, 6, 1]),
    categories: [
      "US/Canada",
      "South Asia/East Asia",
      "Europe/UK",
      "Mexico/Central America/South America",
      "Australasia",
      "Middle East",
    ],
    name: "Region of Residence",
    type: "circle",
    id: "region",
  },
  //Fifteenth set of data
  raceEthnicity: {
    data: roundNumbers([139, 17, 6, 10, 2, 1, 2, 2, 1]),
    categories: [
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
    name: "Race or Ethicity",
    type: "circle",
    id: "raceEthnicity",
  },
  //Sixteenth set of data
  gender: {
    data: roundNumbers([102, 13, 63, 1, 1, 2, 1, 1]),
    categories: [
      "Man",
      "Prefer not to answer",
      "Woman",
      "Woman, A gender category/identity not listed",
      "Agender",
      "Non-binary",
      "Agender, Non-binary",
      "Trans, Man",
    ],
    name: "Gender Identity",
    type: "circle",
    id: "gender",
  },
};

// Render charts
function renderChart(id) {
  createChart(data[id]);
  import("./qualitative").then((module) => {
    module.writeCommentsToDom(id);
  });
}

let options = {
  threshold: 0.5,
  // rootMargin: "0px 0px -25%",
};

let callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      renderChart(entry.target.id);
      observer.unobserve(entry.target);
    }
  });
};

let observer = new IntersectionObserver(callback, options);

const graphs = document.querySelectorAll(".container > div");

export default function renderCharts() {
  graphs.forEach((graph) => observer.observe(graph));
}
