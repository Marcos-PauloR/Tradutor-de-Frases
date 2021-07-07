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
  public resposta! : string

  public rodada:number =0
  public rodadaFrase: Frase
  
  constructor() { 
    this.rodadaFrase = this.frases[this.rodada]
    console.log(this.frases)
  
  }


  ngOnInit(): void {
  }

  public atualizaResposta(resposta: Event):void {
    this.resposta =(<HTMLInputElement>resposta.target).value
    console.log(this.resposta)
  }

  public verificaResposta(): void {

    if(this.rodadaFrase.frasePtBr==this.resposta){
      this.rodada++
      console.log(this.rodada)
      this.rodadaFrase=this.frases[this.rodada]
      console.log(this.rodadaFrase)
    }else{
      console.log('Resposta Errada!')
    }

  }

}
