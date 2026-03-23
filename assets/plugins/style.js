var donut = {
    series: [44, 55, 13, 43, 22],
    chart: {
    height: '100%',
    width: '100%',
    type: 'donut',
    parentHeightOffset: 0,
    borderColor: false,
    sparkline: {
        enabled: true
      },
  },
  grid:{
    show: false,
    borderColor: '#90A4AE',
    

  },

  
  stroke:{
    show:false,
   },
  colors: ['#0d47a1', '#29b6f6','#03a9f4','#039be5','#0d47a1', '#01579b'],
  
  fill: {
    opacity: .9
  },
  
  labels: ['','','','','',''],
  
  };

var donutlb1Chart = new ApexCharts(document.querySelector("#donutlb1Chart"), donut);
var donutlb2Chart = new ApexCharts(document.querySelector("#donutlb2Chart"), donut);
donutlb1Chart.render();
donutlb2Chart.render();