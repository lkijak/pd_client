import React, { Component } from 'react';
import Chart from "chart.js";

class LifeGraph extends Component {
    chartRef = React.createRef();
    
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: 'radar',
            data: {
                labels: ['Rozwój osobisty', 'Kariera', 'Finanse', 'Otoczenie', 'Partner', 'Rodzina', 'Wypoczynek', 'Zdrowie'],
                datasets: [{
                    data: [
                        Math.floor(Math.random() * 5) + 1,
                        Math.floor(Math.random() * 5) + 1,
                        Math.floor(Math.random() * 5) + 1,
                        Math.floor(Math.random() * 5) + 1,
                        Math.floor(Math.random() * 5) + 1,
                        Math.floor(Math.random() * 5) + 1,
                        Math.floor(Math.random() * 5) + 1,
                        Math.floor(Math.random() * 5) + 1,
                    ],
                    backgroundColor: 'rgba(54, 162, 235, 0.5)',
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
                        precision: 0
                    }
                },
                legend: {
                    display: false,
                    labels: {
                        fontColor: 'black'
                    }
                },
                tooltips: {
                    enabled: true
                }
            }
        });
    }
    render() {
        return (
            <div className="c-chart--life-graph">
                <canvas width="350" height="300"
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}

export default LifeGraph;