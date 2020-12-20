import React, { Component } from 'react';
import Chart from "chart.js";

class LifeGraph extends Component {
    chartRef = React.createRef();
    
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: 'polarArea',
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
                        precision: 0
                    }
                },
                legend: {
                    display: true,
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