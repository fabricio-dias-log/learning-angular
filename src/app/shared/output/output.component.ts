import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {
  constructor() { }

  @Output() public enviarDados  = new EventEmitter();

  public list: Array<{nome: string, idade: number}> = [
    {nome: "Fabricio Dias", idade: 23},
    {nome: "José Silva", idade: 12},
    {nome: "Emily Santos", idade: 66},
    {nome: "Nair Muller", idade: 43}
  ]


  ngOnInit(): void {
  }

  public getDados(event: number): void{

    this.enviarDados.emit(this.list[event]);
    // console.log("🚀 ~ file: output.component.ts:25 ~ OutputComponent ~ getDados ~ this.list[event]:", this.list[event])
  }
}
