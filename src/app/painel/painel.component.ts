import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASE } from './frase-mock';
@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASE;
  public instrucao = 'Traduza a frase:';
  public resposta: string = "";

  public rodada: number = 0;
  public rodadaFrase: Frase;

  public progresso: number = 0;
  constructor() {
      this.atualizaRodada();
    }

  ngOnInit() {
  }

  public atualizarResposta(resposta: Event): void{
    this.resposta = (<HTMLInputElement> resposta.target).value;
  }

  public verificarResposta(): void {
    if(this.rodadaFrase.frasePtBr == this.resposta){
      if(this.rodada <this.frases.length){
        alert('A tradução está correta!!!');
        this.progresso = this.progresso + (100 / this.frases.length);
        this.atualizaRodada();
        this.rodada++;
      }else{
        this.progresso = 100;
        alert('Você ganhou!!! Parabéns !!!');
      }
    }
  }


  public atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = '';
  }
}
