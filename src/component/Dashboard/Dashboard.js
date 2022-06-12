import React from "react";
import { Bar } from 'react-chartjs-2';
import { ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip, Chart } from "chart.js";
//import BarElement from "chartjs-plugin-datalabels";
import "../Dashboard/Dashboard.css";

Chart.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip
);

const BarChart = () => {
    return (
        <div>
        <Bar
            data={{
                labels: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
                datasets: [
                    {
                        label: ['Income'],
                        data: [3000000, 5000000, 4500000, 5000000, 2000000, 3000000],
                        backgroundColor: ['rgba(255, 186, 51, 1)'],
                        borderColor: [
                          'rgba(255, 186, 51, 1)',
                        ],
                        borderWidth: 1,
                    }
                ]
            }}
            height={'360px'}
            options={{
                plugins: {
                  legend: {
                    position: 'bottom',
                    display: true
  
                  }
                }
              }}
        />
        </div>
    )
}

export default BarChart;