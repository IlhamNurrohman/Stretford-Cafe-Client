import React, { useEffect, useState } from "react";
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
import axios from "axios";

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
  const [dashboard, setDashboard] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_HOST}/transactions/dashboard`)
      .then(result => {
        setDashboard(result.data.data)
      }).catch(error => {
        console.log(error)
      })

  },[])
  console.log(dashboard)
    return (
        <div>
        <Bar
            data={{
                labels: dashboard.map(item => item.date),
                datasets: [
                    {
                        label: ['Income'],
                        data: dashboard.map(item => item.revenue),
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