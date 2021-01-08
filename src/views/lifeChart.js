import React, { Component } from 'react';
import axios from 'axios';
import { getUsername, API_DOMAIN } from "./helpers";
import Chart from "chart.js";


class LifeGraph extends Component {
  chartRef = React.createRef();

  state = {
    data: null
  }

  getGraphData = () => {
    axios.get(`${API_DOMAIN}/Survey/UserResponse`, {
      params: {
        surveyName: "Life_Circle",
        userName: getUsername()
      }
    })
      .then((response) => {
        console.log("pobrano dane grafu.", response);
        let dataset = response.data.userResponseQuestionAndAnswerViewModels;
        let data = [];

        for (let i = 0; i < dataset.length; i=i+3) {
          let temp = parseInt(dataset[i].answerText) + parseInt(dataset[i+1].answerText) + parseInt(dataset[i+2].answerText);
          temp = temp/3;
          data = [...data, temp];
        }
        this.setState({data: data});
      })
      .catch((error) => {
        console.error("Błąd pobierania danych grafu.", error);
      });
  }

  componentDidMount() {
    this.getGraphData();

    setTimeout(() => {
      const myChartRef = this.chartRef.current.getContext("2d");

      Chart.Legend.prototype.afterFit = function () {
        this.height = this.height + 30;
      };

      new Chart(myChartRef, {
        type: 'polarArea',
        data: {
          labels: ['Rozwój osobisty', 'Kariera', 'Finanse', 'Otoczenie', 'Partner', 'Rodzina', 'Wypoczynek', 'Zdrowie'],
          datasets: [{
            data: this.state.data,
            backgroundColor: ['rgba(255,61,0 ,1)', 'rgba(255,171,0 ,1)', 'rgba(174,234,0 ,1)', 'rgba(0,200,83 ,1)', 'rgba(0,184,212 ,1)', 'rgba(41,98,255 ,1)', 'rgba(98,0,234 ,1)', 'rgba(213,0,0 ,1)']
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
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
    }, 650);
  }
  render() {
    return (
      <div className="c-chart--life-graph">
        <canvas width="350" height="400"
          id="myChart"
          ref={this.chartRef}
        />
      </div>
    )
  }
}

export default LifeGraph;