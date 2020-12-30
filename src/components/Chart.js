import React, {useEffect} from 'react';
import Chart from 'chart.js';

const MyChart = (props) => {
    useEffect(()=>{
        let ctx = document.getElementById('myChart').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                datasets: [{
                    label: 'Commodity 1',
                    data: [10, 20, 70, 40, 90],
                    type: 'line',
                    borderColor: '#C40F70',
                    pointBackgroundColor: "transparent",
                    fill: 'none'
                }, {
                    label: 'Commodity 2',
                    data: [50, 70, 150, 20, 126],
                    type: 'line',
                    borderColor: '#5843BE',
                    pointBackgroundColor: "transparent",
                    fill: 'none'
                }],
                labels: ['January', 'February', 'March', 'April', 'May']
            },
            options: {
                showLines: true, 
                showGaps: true,
                scales: {
                    yAxes: [{
                        stacked: true
                    }]
                },
                backgroundColor: '#FFFDF7'
            }
        });
    },[])
    return (
        <canvas id="myChart" width="500" height="200"></canvas>
    )
}

export default MyChart;