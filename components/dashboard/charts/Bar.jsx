"use client";

import ReactApexChart from "react-apexcharts";

const options = {
  chart: {
    type: "bar",
    stacked: true,
    foreColor: "#ccc",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: "bottom",
          offsetX: -10,
          offsetY: 0,
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "50%",
      borderRadius: 5,
      borderRadiusApplication: "end", // 'around', 'end'
      borderRadiusWhenStacked: "last", // 'all', 'last'
      dataLabels: {
        total: {
          enabled: false,
          style: {
            fontSize: "13px",
            fontWeight: 700,
          },
        },
      },
    },
  },
  colors: ["#0891B2", "#CAFAFF"],
  series: [
    {
      name: "Sales",
      data: [250, 555, 770, 224, 440, 375],
    },
    {
      name: "Revenue",
      data: [500, 300, 600, 446, 225, 772],
    },
  ],
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  xaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: true,
      style: {
        colors: "#bbb",
        fontSize: "12px",
        fontWeight: 600,
      },
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
    labels: {
      show: true,
      style: {
        colors: "#bbb",
        fontSize: "12px",
        fontWeight: 600,
      },
    },
  },
  grid: {
    show: true,
    borderColor: "#eee",
    strokeDashArray: 4,
    position: "back",
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  tooltip: {
    enabled: true,
    shared: true,
    intersect: false,
    theme: false,
  },
};

const Bar = ({ width, height }) => {
  return (
    <div className="w-full h-full">
      <ReactApexChart
        options={options}
        series={options.series}
        type="bar"
        height={height + "%"}
        width={width + "%"}
      />
    </div>
  );
};

export default Bar;
