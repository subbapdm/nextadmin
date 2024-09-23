
import ReactApexChart from "react-apexcharts";

  const options = {
    chart: {
      type: 'line',
      sparkline: {
        enabled: true
      },
      group: 'sparklines'
    },
    series: [{
      name: 'Views',
      data: [12, 14, 2, 47, 32, 44, 14, 55, 41, 69]
    }],
    stroke: {
      curve: 'smooth'
    },
    markers: {
      size: 0
    },
    tooltip: {
      fixed: {
        enabled: true,
        position: 'right'
      },
      x: {
        show: false
      }
    },
    title: {
      show: false,
      text: undefined,
      style: {
        fontSize: '26px'
      }
    },
    colors: ['#2dd4bf']
  }

const Line = ({ width, height }) => {
  return (
    <div className="w-full p-4">
        <ReactApexChart options={options} series={options.series} type="line" height={height} width={width + "%"} />
    </div>
  )
}

export default Line