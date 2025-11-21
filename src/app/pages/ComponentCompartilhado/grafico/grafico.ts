import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, registerables, ChartConfiguration } from 'chart.js';

Chart.register(...registerables);

interface CategoriaItem {
  nome: string;
  valor: number;
}

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.html',
  styleUrls: ['./grafico.css']
})
export class Grafico implements AfterViewInit {

  @ViewChild('financasChart') financasChart!: ElementRef<HTMLCanvasElement>;

  // --- DADOS ---
  proventos: CategoriaItem[] = [];
  despesas: CategoriaItem[] = [];

  // --- CONSTANTES VISUAIS (Cores) ---
  private readonly CORES_PROVENTOS = [
    '#2ecc71', '#3498db', '#1abc9c', '#9b59b6', '#34495e', 
    '#16a085', '#2980b9', '#8e44ad', '#2c3e50', '#27ae60'
  ];

  private readonly CORES_DESPESAS = [
    '#e74c3c', '#e67e22', '#f1c40f', '#c0392b', '#d35400', 
    '#f39c12', '#bdc3c7', '#7f8c8d', '#e55039', '#fa983a'
  ];

  // --- CICLO DE VIDA ---
  ngAfterViewInit(): void {
    this.carregarDadosDoStorage();
  }

  // --- LÓGICA DE DADOS ---
  carregarDadosDoStorage(): void {
    const dadosStorage = localStorage.getItem('dadosFinanceiros');

    if (dadosStorage) {
      const dadosParsed = JSON.parse(dadosStorage);
      this.proventos = dadosParsed.proventos || [];
      this.despesas = dadosParsed.despesas || [];
    } else {
      console.warn('Nenhum dado encontrado no localStorage.');
      this.proventos = [];
      this.despesas = [];
    }

    this.renderizarGrafico();
  }

  // --- LÓGICA DO GRÁFICO ---
  renderizarGrafico(): void {
    const ctx = this.financasChart.nativeElement.getContext('2d');
    if (!ctx) return;

    // 1. Limpeza: Destrói gráfico anterior se existir
    const chartExisting = Chart.getChart(this.financasChart.nativeElement);
    if (chartExisting) chartExisting.destroy();

    // 2. Preparação: Cria os datasets de Proventos e Despesas
    const datasets = [
      ...this.criarDatasets(this.proventos, 'provento'),
      ...this.criarDatasets(this.despesas, 'despesa')
    ];

    // 3. Renderização: Cria o gráfico com as configurações definidas
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Proventos', 'Despesas'],
        datasets: datasets
      },
      options: this.obterConfiguracoesGrafico() // Configurações extraídas para função separada
    });
  }

  /**
   * Transforma os dados brutos (CategoriaItem) no formato que o Chart.js entende.
   * Evita repetição de código para Proventos e Despesas.
   */
  private criarDatasets(lista: CategoriaItem[], tipo: 'provento' | 'despesa'): any[] {
    const cores = tipo === 'provento' ? this.CORES_PROVENTOS : this.CORES_DESPESAS;
    
    return lista.map((item, index) => ({
      label: item.nome,
      // Se for provento: [valor, 0]. Se for despesa: [0, valor]
      data: tipo === 'provento' ? [item.valor, 0] : [0, item.valor],
      backgroundColor: cores[index % cores.length],
      borderColor: '#222',
      borderWidth: 1,
      stack: 'pilhaUnica' // Garante o empilhamento
    }));
  }

  /**
   * Retorna todas as configurações visuais (legendas, tooltips, eixos).
   */
  private obterConfiguracoesGrafico(): ChartConfiguration['options'] {
    return {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
          labels: { color: '#fff', usePointStyle: true }
        },
        title: {
          display: true,
          text: 'Balanço Financeiro Acumulado',
          color: '#fff',
          font: { size: 18 }
        },
        tooltip: {
          mode: 'nearest',
          intersect: true,
          callbacks: {
            label: (context) => {
              let label = context.dataset.label || '';
              if (label) label += ': ';
              if (context.parsed.y !== null) {
                label += new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(context.parsed.y);
              }
              return label;
            }
          }
        }
      },
      scales: {
        x: {
          stacked: true,
          ticks: { color: '#ccc' },
          grid: { display: false }
        },
        y: {
          stacked: true,
          ticks: { color: '#ccc' },
          grid: { color: 'rgba(255,255,255,0.1)' },
          beginAtZero: true
        }
      }
    };
  }
}