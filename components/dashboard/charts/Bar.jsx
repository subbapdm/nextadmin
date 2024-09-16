'use client'

import ReactApexChart from "react-apexcharts";

  const options = {
    chart: {
      type: 'bar',
      stacked: true,
      foreColor: '#ccc',
      toolbar: {
        show: false,
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false,
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom',
          offsetX: -10,
          offsetY: 0
        }
      }
    }],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '60%',
        borderRadius: 5,
        borderRadiusApplication: 'end', // 'around', 'end'
        borderRadiusWhenStacked: 'last', // 'all', 'last'
        dataLabels: {
          total: {
            enabled: false,
            style: {
              fontSize: '13px',
              fontWeight: 700
            }
          }
        }
      },
    },
    colors: ["#0891B2", '#CAFAFF'],
    series: [{
      name: "Sales",
      data: [250, 555, 770, 224, 440, 375],
    }, {
      name: "Revenue",
      data: [500, 300, 600, 446, 225, 772],
    }],
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    xaxis: {
      axisBorder: {
        show: false
      },
      labels: {
        show: false
      },
    },
    yaxis: {
      axisBorder: {
        show: false
      },
      labels: {
        show: false
      },
    },
    grid: {
      show: false,
      borderColor: '#eee',
      strokeDashArray: 3,
      position: 'back',
      xaxis: {
        lines: {
          show: true
        },
      },
      yaxis: {
        lines: {
          show: true
        },
      }
    },
    tooltip: {
      shared: true,
      intersect: false
    }
  }


function Bar({ width, height }) {
  return (
    <div className="w-full">
        <ReactApexChart options={options} series={options.series} type="bar" height={height} width={width} />
    </div>
  )
}

export default Bar