import ReactApexChart from "react-apexcharts";

  var options = {
    chart: {
      type: 'donut',
      offsetY: 20
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        customScale: 0.86,
        donut: {
          size: '60%',
        },
        dataLabels: {
          enabled: false
        }
      }
    },
    colors: ['#775DD0', '#6577F3', '#2dd4bf', '#0FADCF'],
    title: {
      text: undefined
    },
    series: [25, 60, 15],
    labels: ['Social Media', 'Blog', 'External'],
    legend: {
      show: true,
      labels: {
        colors: "#ccc",
        useSeriesColors: false,
      },
      floating: false,
      position: 'bottom',
      horizontalAlign: 'center',
      offsetY: 0
    }
  }

function Pie({ width, height }) {
  return (
    <div className="w-full">
        <ReactApexChart options={options} series={options.series} type="donut" height={height} width={width} />
    </div>
  )
}

export default Pie