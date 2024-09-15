jQuery(document).ready(function() {

    var options = {
        series: [44, 55, 67, ],
        colors:['#198754','#dc3545' ,'#f59e0b'],
        chart: {
        width:'100%',
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '0px',
            },
            value: {
              fontSize: '0px',
            },
            total: {
              show: false,
              label: 'Total',
              
            }
          }
        },
        
        
      },
      stroke: {
        lineCap: 'round'
      },
      labels: ['Apples', 'Oranges', 'Bananas',],
      };

      var chart = new ApexCharts(document.querySelector("#tasksChart"), options);
      chart.render();
});