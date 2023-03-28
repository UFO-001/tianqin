var myChart = echarts.init(document.getElementById('content-bottom'))

fetch('https://edu.telking.com/api/?type=month')
  .then(response => response.json())

  .then(({ data }) => {
    var chartDom = document.getElementById('content-center')
    var myChart = echarts.init(chartDom)
    var option

    option = {
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: data.xAxis
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: data.series,
          type: 'line',
          areaStyle: {},
          label: {
            show: true,
            position: 'top'
          }
        }
      ]
    }

    option && myChart.setOption(option)
  })

  .catch(error => console.error(error))

fetch('https://edu.telking.com/api/?type=week')
  .then(response => response.json())
  .then(({ data }) => {
    var chartDom = document.getElementById('content-bottom')
    var myChart = echarts.init(chartDom)
    var option

    option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: data.xAxis,
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Direct',
          type: 'bar',
          barWidth: '60%',
          data: data.series
        }
      ]
    }

    option && myChart.setOption(option)
  })
  .catch(error => console.error(error))
