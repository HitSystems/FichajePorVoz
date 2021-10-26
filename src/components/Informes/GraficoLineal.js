import React from 'react'
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
  datasets: [
    {
      label: 'Informe anual',
      data: [150, 140, 130, 100, 180, 120, 150, 140, 130, 100, 180, 120],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true
    }
  }
};
const GraficoLineal = () => {
    return (
        <Line data={data} options={options} />
    )
}

export default GraficoLineal
