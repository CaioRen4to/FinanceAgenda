import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

interface CategoriaFinanceira {
  nome: string;
  valor: number;
}

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.html',
  styleUrls: ['./grafico.css']
})
export class Grafico implements AfterViewInit {

  @Output() dados = new EventEmitter<void>();

  @ViewChild('graficoCanvas') graficoCanvas!: ElementRef<HTMLCanvasElement>;

  proventos: CategoriaFinanceira[] = [];
  despesas: CategoriaFinanceira[] = [];

  CORES = {
    proventos: ['#2ecc71','#3498db','#1abc9c','#9b59b6','#34495e','#16a085','#2980b9','#8e44ad','#2c3e50','#27ae60'],
    despesas:  ['#e74c3c','#e67e22','#f1c40f','#c0392b','#d35400','#f39c12','#bdc3c7','#7f8c8d','#e55039','#fa983a']
  };

  ngAfterViewInit(): void {
    this.carregarDados();
  }

  // Carrega ou inicializa dados
  private carregarDados(): void {
    const dadosSalvos = localStorage.getItem('dadosFinanceiros');

    if (dadosSalvos) {
      const dados = JSON.parse(dadosSalvos);
      this.proventos = dados.proventos || [];
      this.despesas = dados.despesas || [];
    }



    this.criarGrafico();
  }

  // Monta e exibe o gráfico
  private criarGrafico(): void {
    const canvas = this.graficoCanvas.nativeElement;

    Chart.getChart(canvas)?.destroy(); // remove gráfico anterior

    new Chart(canvas.getContext('2d')!, {
      type: 'bar',
      data: {
        labels: ['Proventos', 'Despesas'],
        datasets: [
          ...this.gerarBarras(this.proventos, 'proventos'),
          ...this.gerarBarras(this.despesas, 'despesas')
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: true, position: 'bottom', labels: { color: '#fff' } },
          title: { display: true, text: 'Resumo Financeiro', color: '#fff' },
          tooltip: {
            callbacks: {
              label: ctx =>
                `${ctx.dataset.label}: ${new Intl.NumberFormat('pt-BR',{
                  style:'currency', currency:'BRL'
                }).format(ctx.parsed.y ?? 0)}`
            }
          }
        },
        scales: {
          x: { stacked: true, ticks: { color: '#ccc' }, grid: { display: false } },
          y: { stacked: true, ticks: { color: '#ccc' }, grid: { color: 'rgba(255,255,255,0.1)' } }
        }
      }
    });
  }

  // Cria as barras do gráfico
  private gerarBarras(lista: CategoriaFinanceira[], tipo: 'proventos' | 'despesas') {
    return lista.map((item, i) => ({
      label: item.nome,
      data: tipo === 'proventos' ? [item.valor, 0] : [0, item.valor],
      backgroundColor: this.CORES[tipo][i % this.CORES[tipo].length],
      borderColor: '#222',
      borderWidth: 1,
      stack: 'grupo'
    }));
  }
}
