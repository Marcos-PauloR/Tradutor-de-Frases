import { Component, OnInit } from '@angular/core';
import {Frase} from "src/app/shared/frase.model"
import {FRASES} from "src/app/painel/frases-mock"

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES
  public instrucao: string = "Traduza a Frase: "
  public resposta : string = ''
  public progresso: number=0
  public rodada:number =0
  public rodadaFrase!: Frase
  public tentativas: number = 3
  
  constructor() { 
    this.atualizaRodada()  
  }
  ngOnInit(): void {
  }

  public atualizaResposta(resposta: Event):void {
    this.resposta =(<HTMLInputElement>resposta.target).value
  }

  public verificaResposta(): void {

    if(this.rodadaFrase.frasePtBr==this.resposta){
      alert('Tradução está Correta')
      this.rodada++
      this.progresso=this.progresso+(100/this.frases.length)
      this.atualizaRodada()

    }else{
      this.tentativas--
      if(this.tentativas === -1){
        alert('Você perdeu Todas as Tentativas')
      }
    }

  }

  public atualizaRodada(): void{
    this.rodadaFrase = this.frases[this.rodada]
    this.resposta=""
  }

}
