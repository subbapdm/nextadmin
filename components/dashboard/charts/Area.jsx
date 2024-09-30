import React from 'react'
import ReactApexChart from 'react-apexcharts'

const options = {
    chart: {
        type: 'area',
        sparkline: {
            enabled: false
        },
    },
    
    series: [{
        name: "Sales",
        data: [250, 355, 560, 224, 440, 375],
    }],
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    stroke: {
        curve: 'smooth'
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        show: false,
    },
    colors: ["#0891B2", '#CAFAFF'],
    fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 90, 100]
        }
    },
    grid: {
        xaxis: {
          lines: {
            show: false
          },
        },
        yaxis: {
          lines: {
            show: false
          },
        }
    },
    yaxis: {
        axisBorder: {
          show: false
        },
        labels: {
            show: true,
            style: {
                colors:  "#bbb",
                fontSize: '12px',
                fontWeight: 600,
            },
        },
    },
    xaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
            show: false
        },
        labels: {
            show: true,
            style: {
                colors:  "#bbb",
                fontSize: '12px',
                fontWeight: 600,
            },
        },
    },
    tooltip: {
        enabled: true,
        shared: false,
        intersect: false,
        theme: false,
        fixed: {
          enabled: true,
          position: 'right'
        },
        x: {
          show: false
        }
      }
   
};


const Area = ({ width, height }) => {
  return (
    <div className="w-full p-4">
        <ReactApexChart options={options} series={options.series} type="area" height={height} width={width + "%"} />
    </div>
  )
}

export default Area