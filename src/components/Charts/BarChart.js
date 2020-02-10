import React from 'react';
import Chart from 'chart.js';

class BarChart extends React.Component {
    constructor(props) {
      super(props);
      this.canvasRef = React.createRef();
    }
  
    componentDidUpdate() {
      this.myChart.data.labels = this.props.data.map(d => d.label);
      this.myChart.data.datasets[0].data = this.props.data.map(d => d.value);
      this.myChart.update();
    }
  
    componentDidMount() {
      var canvas = document.getElementById('barCanvas');
      var ctx = canvas.getContext('2d');
      const gradient1 = ctx.createLinearGradient(0, 0, 0, 600);
            gradient1.addColorStop(0, '#FF95DA');
            gradient1.addColorStop(1, '#E50497');
      
      const gradient2 = ctx.createLinearGradient(0, 0, 0, 600);
            gradient2.addColorStop(0, '#45C19C');
            gradient2.addColorStop(1, '#10523D');
    
      const gradient3 = ctx.createLinearGradient(0, 0, 0, 600);
            gradient3.addColorStop(0, '#FFD062');
            gradient3.addColorStop(1, '#D59704');
    
      const gradient4 = ctx.createLinearGradient(0, 0, 0, 600);
            gradient4.addColorStop(0, '#BE72FF');
            gradient4.addColorStop(1, '#7B0ED9');
    
      const gradient5 = ctx.createLinearGradient(0, 0, 0, 600);
            gradient5.addColorStop(0, '#7B8AFF');
            gradient5.addColorStop(1, '#2F44E3');
    
      const gradient6 = ctx.createLinearGradient(0, 0, 0, 600);
            gradient6.addColorStop(0, '#FF8B58');
            gradient6.addColorStop(1, '#C7521F');
    
      const gradient7 = ctx.createLinearGradient(0, 0, 0, 600);
            gradient7.addColorStop(0, '#FA9F9F');
            gradient7.addColorStop(1, '#F06161');
    
      const gradient8 = ctx.createLinearGradient(0, 0, 0, 600);
            gradient8.addColorStop(0, '#7FAFFD');
            gradient8.addColorStop(1, '#3B86FF');
    
      const gradient9 = ctx.createLinearGradient(0, 0, 0, 600);
            gradient9.addColorStop(0, '#44F2BD');
            gradient9.addColorStop(1, '#00B27C');
    
      const gradient10 = ctx.createLinearGradient(0, 0, 0, 600);
            gradient10.addColorStop(0, '#FF6A6A');
            gradient10.addColorStop(1, '#9F4242');
    
      const gradient11 = ctx.createLinearGradient(0, 0, 0, 600);
            gradient11.addColorStop(0, '#767DAE');
            gradient11.addColorStop(1, '#4D4F5C');
    
      const gradient14 = ctx.createLinearGradient(0, 0, 800, 800);
            gradient14.addColorStop(0, '#00BA81');
            gradient14.addColorStop(0.1, '#9102FC');
            gradient14.addColorStop(0.2, '#45C19C');
            gradient14.addColorStop(0.3, '#FFD062');
            gradient14.addColorStop(0.4, '#005EF7');
            gradient14.addColorStop(0.5, '#C7521F');
            gradient14.addColorStop(0.6, '#FF95DA');
            gradient14.addColorStop(0.7, '#7B8AFF');
            gradient14.addColorStop(0.8, '#FF8B58');
            gradient14.addColorStop(0.9, '#BE72FF');
            gradient14.addColorStop(1.0, '#44F2BD');

      const gradhalf0 = ctx.createLinearGradient(0, 0, 0, 400);
            gradhalf0.addColorStop(1, '#000000');
            gradhalf0.addColorStop(0.5, '#000000');
            gradhalf0.addColorStop(0, '#00BA81');

      const gradhalf1 = ctx.createLinearGradient(0, 0, 0, 400);
            gradhalf1.addColorStop(1, '#000000');
            gradhalf1.addColorStop(0.5, '#000000');
            gradhalf1.addColorStop(0, '#3B86FF');

      const gradhalf2 = ctx.createLinearGradient(0, 0, 0, 400);
            gradhalf2.addColorStop(1, '#000000');
            gradhalf2.addColorStop(0.5, '#000000');
            gradhalf2.addColorStop(0, '#FF6A6A');

      const gradhalf3 = ctx.createLinearGradient(0, 0, 0, 400);
            gradhalf3.addColorStop(1, '#000000');
            gradhalf3.addColorStop(0.5, '#000000');
            gradhalf3.addColorStop(0, '#D9581F');

      const gradhalf4 = ctx.createLinearGradient(0, 0, 0, 400);
            gradhalf4.addColorStop(1, '#000000');
            gradhalf4.addColorStop(0.5, '#000000');
            gradhalf4.addColorStop(0, '#3349F0');

      const gradhalf5 = ctx.createLinearGradient(0, 0, 0, 400);
            gradhalf5.addColorStop(1, '#000000');
            gradhalf5.addColorStop(0.5, '#000000');
            gradhalf5.addColorStop(0, '#850CED');

      const gradhalf6 = ctx.createLinearGradient(0, 0, 0, 400);
            gradhalf6.addColorStop(1, '#000000');
            gradhalf6.addColorStop(0.5, '#000000');
            gradhalf6.addColorStop(0, '#E5A100');

      const gradhalf7 = ctx.createLinearGradient(0, 0, 0, 400);
            gradhalf7.addColorStop(1, '#000000');
            gradhalf7.addColorStop(0.5, '#000000');
            gradhalf7.addColorStop(0, '#1A8162');

      const gradhalf8 = ctx.createLinearGradient(0, 0, 0, 400);
            gradhalf8.addColorStop(1, '#000000');
            gradhalf8.addColorStop(0.5, '#000000');
            gradhalf8.addColorStop(0, '#FF07A9');

      const gradhalf9 = ctx.createLinearGradient(0, 0, 0, 400);
            gradhalf9.addColorStop(1, '#000000');
            gradhalf9.addColorStop(0.5, '#000000');
            gradhalf9.addColorStop(0, '#711466');

      const gradhalf10 = ctx.createLinearGradient(0, 0, 0, 400);
            gradhalf10.addColorStop(1, '#000000');
            gradhalf10.addColorStop(0.5, '#000000');
            gradhalf10.addColorStop(0, '#4D4F5C');

      const backgroundColor = 
      [ 
        gradient1,gradient2,gradient3,
        gradient4,gradient5,gradient6,
        gradient7,gradient8,gradient9,
        gradient10,gradient11,
        gradient1,gradient2,gradient3,
        gradient4,gradient5,gradient6,
        gradient7,gradient8,gradient9,
        gradient10,gradient11,gradient1  
      ]; 
      const  hoverBackgroundColor = 
      [
        gradient1,gradient2,gradient3,
        gradient4,gradient5,gradient6,
        gradient7,gradient8,gradient9,
        gradient10,gradient11,
        gradient1,gradient2,gradient3,
        gradient4,gradient5,gradient6,
        gradient7,gradient8,gradient9,
        gradient10,gradient11,gradient1
      ];
      const  shadowColor = 
      [  
        '#FF07A9','#1A8162','#E5A100',
        '#850CED','#3349F0','#D9581F',
        '#FF6A6A','#3B86FF','#00BA81',
        '#9F4242','#4D4F5C',
        '#FF07A9','#1A8162','#E5A100',
        '#850CED','#3349F0','#D9581F',
        '#FF6A6A','#3B86FF','#00BA81',
        '#9F4242','#4D4F5C','#FF07A9'
      ];

      Chart.defaults.global.defaultFontFamily = " 'JF-Flat-regular', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";
      Chart.defaults.global.defaultFontSize = 12;
      const ctx_font = Chart.helpers.fontString(25, 700, Chart.defaults.global.defaultFontFamily);

      this.myChart = new Chart(this.canvasRef.current, {
        type: 'bar',
        options: {
            layout: {
              padding: {
                  left: 0,
                  right: 0,
                  top: 30,
                  bottom: 10
              }
          },
          legend: {
              display : false
          },
          animation: {
              duration: 500,
              onComplete: function() {
              var chartInstance = this.chart,
                  ctx = chartInstance.ctx;
      
              ctx.font = ctx_font;
              ctx.textAlign = 'center';
              ctx.textBaseline = 'bottom';
              ctx.fillStyle = "#FF07A9";
      
              this.data.datasets.forEach(function(dataset, i) {
                  var meta = chartInstance.controller.getDatasetMeta(i);
                  meta.data.forEach(function(bar, index) {
                  var data = dataset.data[index];
                  ctx.fillText(data, bar._model.x, bar._model.y + 5);
                  });
              });
              }
          },
          scales: {
              pointlabels :{
                  fontColor: "red",
              },
              yAxes: [{
                  ticks: {
                      display: false,
                      beginAtZero:true
                  },
                  gridLines: {
                      color: '#E2E2E2',
                      zeroLineColor: '#707070',
                      zeroLineWidth: 1
                  }
              }],
              xAxes: [{
                  ticks: {
                      fontColor: '#FF07A9',
                      stepSize: 1,
                      min: 0,
                      autoSkip: false,
                      
                  },
                  gridLines: {
                      display:false,
                      zeroLineWidth: 4,
                  },
                  barPercentage: 1.0,
                  categoryPercentage: 0.4
              }]
          },
          tooltips: {
              enabled: false
          }          
        },
        data: {
          labels: this.props.data.map(d => d.label),
          datasets: [{
            label: this.props.title,
            data: this.props.data.map(d => d.value),
            backgroundColor: backgroundColor,
            hoverBackgroundColor: hoverBackgroundColor,
            shadowColor: shadowColor,
            shadowOffsetX: 3,
            shadowOffsetY: 3,
            shadowBlur: 20,
          }]
        }
      });
    }
    render() {
      return (
        <div className="chart-row">
          <div className="row transaction justify-content-center w-100">
            <div className="col-12 px-3 mb-5">
						  <div className="h-100 py-4 mediacl-bar-chart bar_line_chart_col">
                <div className="chart-small">
                  <canvas id="barCanvas" ref={this.canvasRef} />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  export default BarChart;