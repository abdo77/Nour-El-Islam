jQuery(document).ready(function() {
    
    var options = {
        series: [{
          name :'Income',
            color:'#dedddd',
        data: [80, 55, 57, 56, 61, 58, 63, 60, 66]
      }, {
        name :'Expense',
        color:'#1654c8',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
      },],
        chart: {
        type: 'bar',
        width : '100%',
        height: '300px',
        
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '35%',
          endingShape: 'rounded'
        },
      },
      legend :{
        show: true,
      },
      dataLabels: {
        enabled: false
        
      },
      stroke: {
        show: true,
        width: 0,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','Nov','Dec'],
      },
      
      fill: {
        opacity: 1
      },
      tooltip: {
        shared: true,
        intersect: false,
        x:{
            show:true,
        },
        y: {
          show:false,
          formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
            // if(seriesIndex === 0){

            //   // return `<div class="bg-light arrow_box"><p class="mb-0">${value +1}</p> 
            //   //           <p class="${(series[0][dataPointIndex] - series[1][dataPointIndex])>0 ?"text-success":"text-danger"} mb-0">
            //   //           ${(series[0][dataPointIndex] - series[1][dataPointIndex])>0 ?"<span><i class='fa-solid fa-arrow-up'></i></span>":"<span><i class='fa-solid fa-arrow-down'></i></span>"}
            //   //           ${Math.abs(series[0][dataPointIndex] - series[1][dataPointIndex])} <span class="text-muted">vs Last month</span> </p>
            //   //         </div>`    ;
            // }
            // else if(seriesIndex === 1){
            //   return series[1][dataPointIndex] - series[0][dataPointIndex]    ;
            // }
            if(seriesIndex === 0 ){
              if(dataPointIndex === 0){
                return value
              }
              else{
                   if(series[seriesIndex][dataPointIndex] - series[seriesIndex][dataPointIndex -1] >0){
                    return `<div class="bg-light arrow_box"><p class="mb-0">$ ${value}</p> 
                        <p class="text-success mb-0">
                        <span>+%</span>
                        ${Number.parseFloat((Math.abs(series[seriesIndex][dataPointIndex] - series[seriesIndex][dataPointIndex-1])/series[seriesIndex][dataPointIndex-1])*100).toFixed(2)} <span class="text-muted">vs Last month</span> </p>
                      </div>`    ;
                   }
                   else{
                    return `<div class="bg-light arrow_box"><p class="mb-0">$ ${value}</p> 
                        <p class="text-danger mb-0">
                        <span>-%</span>
                        ${Number.parseFloat((Math.abs(series[seriesIndex][dataPointIndex] - series[seriesIndex][dataPointIndex-1])/series[seriesIndex][dataPointIndex-1])*100).toFixed(2)} <span class="text-muted">vs Last month</span> </p>
                      </div>`    ;
                   }
              }
            }
            else if(seriesIndex === 1){
              if(dataPointIndex === 0){
                return value
              }
              else{
                   if(series[seriesIndex][dataPointIndex] - series[seriesIndex][dataPointIndex -1] >0){
                    return `<div class="bg-light arrow_box"><p class="mb-0">$ ${value}</p> 
                        <p class="text-success mb-0">
                        <span>+%</span>
                        ${Number.parseFloat((Math.abs(series[seriesIndex][dataPointIndex] - series[seriesIndex][dataPointIndex-1])/series[seriesIndex][dataPointIndex-1])*100).toFixed(2)} <span class="text-muted">vs Last month</span> </p>
                      </div>`    ;
                   }
                   else{
                    return `<div class="bg-light arrow_box"><p class="mb-0">$ ${value}</p> 
                        <p class="text-danger mb-0">
                        <span>-%</span>
                        ${Number.parseFloat((Math.abs(series[seriesIndex][dataPointIndex] - series[seriesIndex][dataPointIndex-1])/series[seriesIndex][dataPointIndex-1])*100).toFixed(2)} <span class="text-muted">vs Last month</span> </p>
                      </div>`    ;
                   }
              }
            }
          }
        }
      },
      };

      var chart = new ApexCharts(document.querySelector("#chart"), options);
      chart.render();

})