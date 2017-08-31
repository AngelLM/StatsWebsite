var color = Chart.helpers.color;
var GooglegroupsMembers = [];
var GooglegroupsMembersTime = [];
var GooglegroupsMembersArray = [];

var GooglegroupsThreads = [];
var GooglegroupsThreadsTime = [];
var GooglegroupsThreadsArray = [];

var scatterChartData = {
    datasets: [{
        label: "Google Groups Members",
        borderColor: window.chartColors.blue,
        backgroundColor: color(window.chartColors.blue).alpha(0.2).rgbString(),
        data: GooglegroupsMembersArray
    },{
        label: "Google Groups Threads",
        borderColor: window.chartColors.orange,
        backgroundColor: color(window.chartColors.orange).alpha(0.2).rgbString(),
        data: GooglegroupsThreadsArray
    },
    ]
};

window.onload = function() {
    var ctx = document.getElementById("canvas").getContext("2d");
    window.myScatter = Chart.Scatter(ctx, {
        data: scatterChartData,
        options: {
           scales:{
             xAxes: [{
                  type: 'time',
                  time: {
                    format: "HH:mm",
                    unit: 'hour',
                    unitStepSize: 1,
                    displayFormats: {
                      'minute': 'HH:mm',
                      'hour': 'HH:mm',
                    },
                    }
                }],
            yAxes: [{
              display: true,
              ticks: {
                  //suggestedMin: 0,
                  //beginAtZero: true
              }
          }]
              },
            title: {
                display: true,
                fontSize: 20,
                text: 'Google Groups Stats - Daily'
            },
            legend: {
                display: true,
                position: 'bottom'
            }
        }
    });

    GooglegroupsMembers = [];
    GooglegroupsMembersTime = [];
    GooglegroupsMembersArray = [];

    GooglegroupsThreads = [];
    GooglegroupsThreadsTime = [];
    GooglegroupsThreadsArray = [];

    fetch('js/logs/daily.txt')
      .then(yt => yt.text())
      .then(content => {
        let lines = content.split(/\n/);
        lines.forEach(function(line){
          let stats = line.split('-');
          if (stats[0]=='Google Groups'){
            if (stats[1]=='Members'){
              GooglegroupsMembers.push(stats[2]);
              GooglegroupsMembersTime.push(stats[3]);
            };
            if (stats[1]=='Threads'){
              GooglegroupsThreads.push(stats[2]);
              GooglegroupsThreadsTime.push(stats[3]);
            };
          };
        });
        for (var i = 0; i<GooglegroupsMembers.length; i++){
          var obj = {x:GooglegroupsMembersTime[i],y:GooglegroupsMembers[i]};
          GooglegroupsMembersArray.push(obj);
        };
        for (var i = 0; i<GooglegroupsThreads.length; i++){
          var obj = {x:GooglegroupsThreadsTime[i],y:GooglegroupsThreads[i]};
          GooglegroupsThreadsArray.push(obj);
        };
          scatterChartData.datasets[0].data = GooglegroupsMembersArray;
          scatterChartData.datasets[1].data = GooglegroupsThreadsArray;
        window.myScatter.update();
      });
};

document.getElementById('dailyData').addEventListener('click', function() {
  myScatter.destroy();
  var ctx = document.getElementById("canvas").getContext("2d");
  window.myScatter = Chart.Scatter(ctx, {
      data: scatterChartData,
      options: {
         scales:{
           xAxes: [{
                type: 'time',
                time: {
                  format: "HH:mm",
                  unit: 'hour',
                  unitStepSize: 1,
                  displayFormats: {
                    'minute': 'HH:mm',
                    'hour': 'HH:mm',
                  },
                  }
              }],
          yAxes: [{
            display: true,
            ticks: {
                //suggestedMin: 0,
                //beginAtZero: true
            }
        }]
            },
          title: {
              display: true,
              fontSize: 20,
              text: 'Google Groups Stats - Daily'
          },
          legend: {
              display: true,
              position: 'bottom'
          }
      }
  });

  GooglegroupsMembers = [];
  GooglegroupsMembersTime = [];
  GooglegroupsMembersArray = [];

  GooglegroupsThreads = [];
  GooglegroupsThreadsTime = [];
  GooglegroupsThreadsArray = [];

  fetch('js/logs/daily.txt')
    .then(yt => yt.text())
    .then(content => {
      let lines = content.split(/\n/);
      lines.forEach(function(line){
        let stats = line.split('-');
        if (stats[0]=='Google Groups'){
          if (stats[1]=='Members'){
            GooglegroupsMembers.push(stats[2]);
            GooglegroupsMembersTime.push(stats[3]);
          };
          if (stats[1]=='Threads'){
            GooglegroupsThreads.push(stats[2]);
            GooglegroupsThreadsTime.push(stats[3]);
          };
        };
      });
      for (var i = 0; i<GooglegroupsMembers.length; i++){
        var obj = {x:GooglegroupsMembersTime[i],y:GooglegroupsMembers[i]};
        GooglegroupsMembersArray.push(obj);
      };
      for (var i = 0; i<GooglegroupsThreads.length; i++){
        var obj = {x:GooglegroupsThreadsTime[i],y:GooglegroupsThreads[i]};
        GooglegroupsThreadsArray.push(obj);
      };
        scatterChartData.datasets[0].data = GooglegroupsMembersArray;
        scatterChartData.datasets[1].data = GooglegroupsThreadsArray;
      window.myScatter.update();
    });
});

document.getElementById('weeklyData').addEventListener('click', function() {
  myScatter.destroy();
  var ctx = document.getElementById("canvas").getContext("2d");
  window.myScatter = Chart.Scatter(ctx, {
      data: scatterChartData,
      options: {
         scales:{
           xAxes: [{
                type: 'time',
                time: {
                  format: "DD/MMM",
                  unit: 'day',
                  unitStepSize: 1,
                  displayFormats: {
                    'day': 'DD MMM',
                  },
                  }
              }]
            },
          title: {
              display: true,
              fontSize: 20,
              text: 'Google Groups Stats - Weekly'
          },
          legend: {
              display: true,
              position: 'bottom'
          }
      }
  });
  GooglegroupsMembers = [];
  GooglegroupsMembersTime = [];
  GooglegroupsMembersArray = [];

  GooglegroupsThreads = [];
  GooglegroupsThreadsTime = [];
  GooglegroupsThreadsArray = [];

  fetch('js/logs/weekly.txt')
    .then(yt => yt.text())
    .then(content => {
      let lines = content.split(/\n/);
      lines.forEach(function(line){
        let stats = line.split('-');
        if (stats[0]=='Google Groups'){
          if (stats[1]=='Members'){
            GooglegroupsMembers.push(stats[2]);
            GooglegroupsMembersTime.push(stats[3]);
          };
          if (stats[1]=='Threads'){
            GooglegroupsThreads.push(stats[2]);
            GooglegroupsThreadsTime.push(stats[3]);
          };
        };
      });
      for (var i = 0; i<GooglegroupsMembers.length; i++){
        var obj = {x:GooglegroupsMembersTime[i],y:GooglegroupsMembers[i]};
        GooglegroupsMembersArray.push(obj);
      };
      for (var i = 0; i<GooglegroupsThreads.length; i++){
        var obj = {x:GooglegroupsThreadsTime[i],y:GooglegroupsThreads[i]};
        GooglegroupsThreadsArray.push(obj);
      };
        scatterChartData.datasets[0].data = GooglegroupsMembersArray;
        scatterChartData.datasets[1].data = GooglegroupsThreadsArray;
      window.myScatter.update();
    });
  });

  document.getElementById('monthlyData').addEventListener('click', function() {
    myScatter.destroy();
    var ctx = document.getElementById("canvas").getContext("2d");
    window.myScatter = Chart.Scatter(ctx, {
        data: scatterChartData,
        options: {
           scales:{
             xAxes: [{
                  type: 'time',
                  time: {
                    format: "DD/MMM",
                    unit: 'day',
                    unitStepSize: 1,
                    displayFormats: {
                      'day': 'DD MMM',
                    },
                    }
                }]
              },
            title: {
                display: true,
                fontSize: 20,
                text: 'Google Groups Stats - Monthly'
            },
            legend: {
                display: true,
                position: 'bottom'
            }
        }
    });
    GooglegroupsMembers = [];
    GooglegroupsMembersTime = [];
    GooglegroupsMembersArray = [];

    GooglegroupsThreads = [];
    GooglegroupsThreadsTime = [];
    GooglegroupsThreadsArray = [];

    fetch('js/logs/monthly.txt')
      .then(yt => yt.text())
      .then(content => {
        let lines = content.split(/\n/);
        lines.forEach(function(line){
          let stats = line.split('-');
          if (stats[0]=='Google Groups'){
            if (stats[1]=='Members'){
              GooglegroupsMembers.push(stats[2]);
              GooglegroupsMembersTime.push(stats[3]);
            };
            if (stats[1]=='Threads'){
              GooglegroupsThreads.push(stats[2]);
              GooglegroupsThreadsTime.push(stats[3]);
            };
          };
        });
        for (var i = 0; i<GooglegroupsMembers.length; i++){
          var obj = {x:GooglegroupsMembersTime[i],y:GooglegroupsMembers[i]};
          GooglegroupsMembersArray.push(obj);
        };
        for (var i = 0; i<GooglegroupsThreads.length; i++){
          var obj = {x:GooglegroupsThreadsTime[i],y:GooglegroupsThreads[i]};
          GooglegroupsThreadsArray.push(obj);
        };
          scatterChartData.datasets[0].data = GooglegroupsMembersArray;
          scatterChartData.datasets[1].data = GooglegroupsThreadsArray;
        window.myScatter.update();
      });
    });
