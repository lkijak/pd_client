import React, { Component } from 'react'
import axios from 'axios';
import { getUsername, API_DOMAIN } from "../helpers";
import Chart from "chart.js";

export class ChartsHistory extends Component {
  state = {
    chartsReady: null,
    data: null
  }

  chartRef0 = React.createRef();
  chartRef1 = React.createRef();
  chartRef2 = React.createRef();

  getChartsData = () => {
    axios.get(`${API_DOMAIN}/Survey/UserResponse/List`, {
      params: {
        surveyName: "Life_Circle",
        userName: getUsername()
      }
    },
    {
      'Content-Type': 'application/json'
    })
    .then((response) => {
        this.setState({data: response.data});
        this.setState({chartsReady: true});
        console.info("Wysłano żądanie o wyniki historii koła życia.", response);
    })
    .catch((error) => {
      console.error("Błąd żądania o wyniki historii koła życia.", error);
    });
  }

  renderCharts = () => {
    const myChartRef0 = this.state.data[0] ? this.chartRef0.current.getContext("2d") : null;
    const myChartRef1 = this.state.data[1] ? this.chartRef1.current.getContext("2d") : null;
    const myChartRef2 = this.state.data[2] ? this.chartRef2.current.getContext("2d") : null;
    let arr = [myChartRef0, myChartRef1, myChartRef2];
    
    let j = 0;
    arr.forEach(chart => {
      if (chart) {
        let dataset = this.state.data[j].userResponseQuestionAndAnswerViewModels;
        let data = [];
        let date = this.state.data[j].dateCompleting;
        date = date.slice(0, date.indexOf("T"));

        for (let i = 0; i < dataset.length; i++) {
          for (let j = 0; j < dataset.length; j++) {
            if(dataset[j+1]){
              if(dataset[j].questionNo > dataset[j+1].questionNo){
                let temp = dataset[j+1];
                dataset[j+1] = dataset[j];
                dataset[j] = temp;
              }
            }
          }
        }

        for (let i = 0; i < dataset.length; i=i+3) {
          let temp = parseInt(dataset[i].answerText) + parseInt(dataset[i+1].answerText) + parseInt(dataset[i+2].answerText);
          temp = temp/3;
          temp = parseFloat(temp.toFixed(2))
          data = [...data, temp];
        }

        Chart.Legend.prototype.afterFit = function () {
          this.height = this.height + 20;
        };
  
        new Chart(chart, {
          type: 'polarArea',
          data: {
            labels: ['Rozwój osobisty', 'Kariera', 'Finanse', 'Otoczenie', 'Partner', 'Rodzina', 'Wypoczynek', 'Zdrowie'],
            datasets: [{
              data: data,
              backgroundColor: ['rgba(255,61,0 ,1)', 'rgba(255,171,0 ,1)', 'rgba(174,234,0 ,1)', 'rgba(0,200,83 ,1)', 'rgba(0,184,212 ,1)', 'rgba(41,98,255 ,1)', 'rgba(98,0,234 ,1)', 'rgba(213,0,0 ,1)']
            }]
          },
          options: {
            responsive: false,
            maintainAspectRatio: false,
            title: {
              text: date,
              display: true,
              fontSize: 18,
              position: "bottom",
              padding: 25
            },
            scale: {
              angleLines: {
                display: false
              },
              ticks: {
                min: 0,
                max: 5,
                precision: 0,
                z: 1,
                display: false,
              },
              gridLines: {
                drawOnChartArea: true,
                lineWidth: 2,
              },
            },
            legend: {
              display: true,
              labels: {
                fontColor: 'black'
              }
            },
            tooltips: {
              enabled: true
            },
            animation: {
              tension: {
                duration: 1000,
                easing: 'easeOutCubic',
                from: 1,
                to: 0,
                loop: true
              }
            },
          }
        });
      j++;
      }
    });
  }


  closeCharts = () => {
    const content = document.querySelectorAll(".overlay canvas");
    const overlay = document.querySelector(".overlay");
    content.forEach((el) => {
      el.classList.add('fading-out');
    });
    overlay.classList.add('fading-out');
    setTimeout(()=>{
      this.setState({
        chartsReady: null
      });
      this.props.hideChartHistory();
    }, 500);
  }

  componentDidMount(){
    this.getChartsData();
  }
  componentDidUpdate(){
      this.state.chartsReady &&
      this.renderCharts();
  }

  render() {
    return (
      <div id="survey" className="overlay bg-flex">

        {this.state.chartsReady &&
          <div className="c-closing" onClick={this.closeCharts}>&times;</div>
        }

        { this.state.data && this.state.data[0] &&
          <canvas 
            width="350" 
            height="400"
            id="myChart0"
            ref={this.chartRef0}
          />
        }
        { this.state.data && this.state.data[1] &&
          <canvas 
            width="350" 
            height="400"
            id="myChart1"
            ref={this.chartRef1}
          />
        }
        { this.state.data && this.state.data[2] &&
          <canvas 
            width="350" 
            height="400"
            id="myChart2"
            ref={this.chartRef2}
          />
        }
      </div>
    )
  }
} 

export default ChartsHistory
