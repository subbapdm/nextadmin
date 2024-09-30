import ReactApexChart from "react-apexcharts";

  var options = {
    chart: {
      type: 'donut',
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        customScale: 1,
        donut: {
          size: '60%',
        },
        dataLabels: {
          enabled: false
        }
      }
    },
    colors: ['#eee', '#0891B2', '#2dd4bf'],
    title: {
      text: undefined
    },
    series: [25, 60, 15],
    labels: ['Social Media', 'Blog', 'External'],
    legend: {
      show: true,
      fontWeight: 400,
      fontSize: '11px',
      fontFamily: 'Poppins, Arial',
      floating: false,
      position: 'bottom',
      horizontalAlign: 'center',
      offsetY: 0,

      labels: {
        colors: "#bbb",
        useSeriesColors: false,
      },
      markers: {
        size: 6
      },
      itemMargin: {
        horizontal: 5,
        vertical: 5
      },
      
    },
    
  }

const Pie = ({ width, height }) => {
  return (
    <div className="w-full p-4">
        <ReactApexChart options={options} series={options.series} type="donut" height={height} width={width + "%"} />
    </div>
  )
}

export default Pie