

// toggle side-bar
function toggleclass(){
    document.getElementById('Side_navigation').classList.toggle('inActiveSideBar')
    document.getElementById('main').classList.toggle('inActiveMain')
    document.getElementById('mobiledocker').classList.toggle('mobile-docker')
}


var  subnavEmail = document.getElementById('subNavEmail')
var  subnavEmail = document.getElementById('subNavPos')


// dropdown carret
function dropdownCarret1(){
        document.getElementById('subNavEmail').classList.toggle('subnav-inactive')
}

function dropdownCarret2(){
    document.getElementById('subNavPos').classList.toggle('subnav-inactive')
}
function dropdownCarret3(){
    document.getElementById('subNavUikits').classList.toggle('subnav-inactive')
}

function dropdownCarret4(){
    document.getElementById('subNavForms').classList.toggle('subnav-inactive')
}
function dropdownCarret5(){
    document.getElementById('subNavTables').classList.toggle('subnav-inactive')
}

function dropdownCarret6(){
    document.getElementById('subNavCharts').classList.toggle('subnav-inactive')
}

function dropdownCarret7(){
    document.getElementById('subNavLayout').classList.toggle('subnav-inactive')
}
function dropdownCarret8(){
    document.getElementById('subNavPages').classList.toggle('subnav-inactive')
}








var bar = {
    chart: {
        height: '100%',
        parentHeightOffset: 0,
        sparkline: {
            enabled: true
          },
      type: 'bar',
      toolbar: {
        show: true,
        tools:{
            download: false,
        },
    },

    xaxis:{
      lines:{
          show: false
        } 
      },

    
    },
    plotOptions:{
        bar:{
            columnWidth:  '54%',
            barHeight: '40%',
        },
      
    },

    series: [{
      name: "",
      data: [100,40,80,50,60,70,40,125,40,80,50,100,40,80,50,60],
    
    }],

   
    xaxis:{
      categories: ['']
    },

    legend:{
      show:false
    },
   
    grid:{
      borderColor: false,
      xaxis:{
        lines:{
          show: false
        }

      },
      padding: {
        bottom: 7,
        right: 0,
        top:0,
        left: 0
     }, 
      
    },
    yaxis: {
      lines: {
        show: false
      },
      show: false,
      showAlways: false,
     
    },
    dataLabels:{
      enabled: false  

     },


    fill: {
      colors: '#29b6f6',
      type: 'solid',
      opacity: .9
  },
  
}

var pie = {
  series: [44, 55, 13, 43, 22],
  chart: {
  height: '100%',
  width: '100%',
  type: 'pie',
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
colors: ['#4fc3f7', '#29b6f6','#0d47a1','#039be5','#0288d1', '#01579b'],

fill: {
  opacity: .9
},

labels: ['','','','','',''],

};


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
colors: ['#4fc3f7', '#29b6f6','#03a9f4','#039be5','#0d47a1', '#01579b'],

fill: {
  opacity: .9
},

labels: ['','','','','',''],

};

var topLine = {
  series: [{
    name: "",
    data: [10, 41, 95, 11, 49, 100, 69, 91, 148]
}],
  chart: {
  height: '100%',
  type: 'line',
  zoom: {
    enabled: false,

  },
  sparkline: {
    enabled: true
  },
  parentHeightOffset: 0,

},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'smooth'
},

grid: {
  show:false,
  
},
xaxis: {
  categories: ['', '', '', '', '', '', '', '', ''],
},
fill: {
  type: "gradient",
  gradient: {
    shadeIntensity: 1,
    opacityFrom: 0.7,
    opacityTo: 0.9,
    colorStops: [
      {
        offset: 0,
        color: "#0d47a1",
        opacity: 1
      },
      {
        offset: 20,
        color: "#0d47a1",
        opacity: 1
      },
      {
        offset: 60,
        color: "#0c81d0",
        opacity: 1
      },
      {
        offset: 100,
        color: "#0c81d0",
        opacity: 1
      }
    ]
  }
},


};

var lineTopChart = new ApexCharts(document.querySelector("#lineTopChart"), topLine);
lineTopChart.render();




var line = {
  series: [{
  name: 'Expenses',
  data: [44, 55, 57, 56, 61, 58, 63, 60, 66,44, 55, 57, 56, 61,66,44, 55, 57, 56, 61],
  colors: ['#4fc3f7', '#29b6f6','#03a9f4','#039be5','#0288d1', '#01579b'],
}, {
  name: 'Revenue',
  data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 101, 98, 87, 105, 91,76, 85, 101, 98, 87,]
}
],
  chart: {
  type: 'bar',
  foreColor: '#fff',
  toolbar:{
    show: false,  
  },
  height: 280
},
grid:{
  show: true,
  position: 'back',
  borderColor: '#6D6D6D',
},
plotOptions: {
  bar: {
    horizontal: false,
    columnWidth: '85%',
    endingShape: 'rounded',
    
  },
},
dataLabels: {
  enabled: false
},
stroke: {
  show: true,
  width: 2,
  colors: ['transparent']
},
xaxis: {
  categories: ['', '', '', '', '', '', '', '', ''],
 
},


colors: ['#0c81d0', '#7cecfc'],
fill: {
  opacity: .9
},
tooltip: {
  y: {
    formatter: function (val) {
      return "$ " + val + " thousands"
    }
  }
}
};

var area = {
  chart: {
    foreColor: '#fff',
    height: 280,
    type: "area",
    toolbar:{
      show: false,  
    },
    stacked: true,
  },
  
  dataLabels: {
    enabled: false
  },
  series: [
    {
      name: "Series 1",
      data: [10, 48, 19, 52, 38, 52, 45]
    }
  ],

  grid: {
    borderColor: '#6D6D6D',
    strokeDashArray: 0,
    position: 'back',
    xaxis: {
        lines: {
            show: true
        }
    },   
    
 },
  fill: {

    type: "gradient",
    gradient: {
      shade: 'dark',
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 100]
    }
  },

  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "June",
      "July"
    ]
  }
};

var areachart = new ApexCharts(document.querySelector("#areaChart"), area);

areachart.render();






var lineChart = new ApexCharts(document.querySelector("#lineChart"), line);
lineChart.render();

var pieChart = new ApexCharts(document.querySelector("#pieChart"), pie);
pieChart.render();

var donutChart = new ApexCharts(document.querySelector("#donutChart"), donut);
donutChart.render();
var donut2Chart = new ApexCharts(document.querySelector("#donut2Chart"), donut);
donut2Chart.render();
   
var barChart = new ApexCharts(document.querySelector("#barChart"), bar);
barChart.render();
