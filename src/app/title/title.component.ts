import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit,OnChanges, OnDestroy {

  @Input() public title:string = "Bem-Vindo!";

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(): void {
    // console.log("Alterado com sucesso!");

  }
  ngOnDestroy(): void { //é chamada quando um conteudo do componente ou o próprio componente
    console.log("Destruido");

  }
}
