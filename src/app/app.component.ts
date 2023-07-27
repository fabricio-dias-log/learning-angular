import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- {{ valor }}
    <button (click)="adicionar()">Adicionar</button>
    <br>
    <app-title *ngIf="destruir"></app-title>
    <br>
    <button (click)="destruirComponente()">Destruir Componente</button> -->
    <!-- <app-data-binding></app-data-binding> -->
    <!-- <app-diretivas-estruturais></app-diretivas-estruturais> -->

    <!-- <app-diretivas-atributos>
      <h1>Aulas de Diretivas de Atributo</h1>
      <h3>Final da Aula</h3>
    </app-diretivas-atributos>
    <app-new-component></app-new-component>
    <app-input [contador]="addValue">
    </app-input>
    <br>
    <button (click)="add()">ADD</button>
    <hr> -->
    <ng-template [ngIf]="getDados">
      <h2>{{ getDados.nome }}</h2>
      <h2>{{ getDados.idade }}</h2>
    </ng-template>
    <app-output (enviarDados)="setDados($event)"></app-output>
    <router-outlet></router-outlet>
    `, // verifica se tem rotas definidas no angular e carrega o que tiver na pagina
})
export class AppComponent implements OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked {
  public valor: number = 1;
  public destruir: boolean = true;

  public addValue: number = 1;
  public getDados: {nome: string, idade: number} | undefined;

  constructor() { }

  public add(): void{
    this.addValue += 1;
  }

  public adicionar(): number{
    return this.valor += 1;
  }

  public destruirComponente(): void {
    this.destruir = false;
  }


  public setDados(event: {nome: string, idade: number}):void {
    this.getDados = event;
  }

  ngOnInit(): void { //adicionar eventos ou funcionalidades ao iniciar a aplica��o
    setTimeout(() => {
      console.log("teste");

    }, 5000);
  }

  ngDoCheck(): void { // vai verificar se h� altera��es em dados no componente
     console.log("ngDoCheck");
  }

  ngAfterContentInit(): void {
        //Called after ngOnInit when the component's or directive's content has been initialized.
        //Add 'implements AfterContentInit' to the class.
        console.log("ngAfterContentInit");
  }
  ngAfterContentChecked(): void { // � chamado sempre que h� altera��o no conte�do
      console.log("ngAfterContentChecked");
  }
  ngAfterViewInit(): void {
      console.log("ngAfterViewInit");
  }
  ngAfterViewChecked(): void { //� chamado quando a altera��o � carregada na view/componente
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    console.log("ngAfterViewChecked");
  }


}
