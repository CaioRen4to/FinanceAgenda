import { Component, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-grafico',
  standalone: true,
  templateUrl: './grafico.html',
  styleUrl: './grafico.css'
})
export class Grafico implements AfterViewInit {
  chart: Chart | null = null;

  ngAfterViewInit(): void {
    const dados = this.buscarDados();
    if (dados.length === 0) {
      alert('Nenhum dado encontrado!');
      return;
    }

    const totalSalario = dados.reduce((sum, item) => sum + item.Salario, 0);
    const totalDespesas = dados.reduce((sum, item) => sum + item.Despesas, 0);

    const canvas = document.getElementById('Grafico') as HTMLCanvasElement;
    if (!canvas) return;

    if (this.chart) this.chart.destroy();

    this.chart = new Chart(canvas, {
      type: 'line',
      data: {
        labels: ['Salário', 'Despesas'],
        datasets: [{
          data: [totalSalario, totalDespesas],
          backgroundColor: ['rgba(75, 192, 192, 0.8)', 'rgba(255, 99, 132, 0.8)'],
          borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom' },
          title: { display: true, text: 'FinanceAgend', font: { size: 18 } },
          tooltip: {
            callbacks: {
              label: (context) => {
                const label = context.dataset.label || '';
                const value = context.parsed.y || 0;
                return `${label}: R$ ${value.toFixed(2)}`;
              } 
            }
          }
        }
      }
    });
}

  private buscarDados(): any[] {
    try {
      const dados = localStorage.getItem('formData');
      return dados ? JSON.parse(dados) : [];
    } catch {
      return [];
    }
  }
}