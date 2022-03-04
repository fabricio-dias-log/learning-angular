import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    {{ valor }}
    <button (click)="adicionar()">Adicionar</button>
    <br>
    <app-title *ngIf="destruir"></app-title>
    <br>
    <button (click)="destruirComponente()">Destruir Componente</button>
    <router-outlet></router-outlet>
    `, // verifica se tem rotas definidas no angular e carrega o que tiver na pagina
})
export class AppComponent implements OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked {
  public valor: number = 1;
  public destruir: boolean = true;

  constructor() { }

  public adicionar(): number{
    return this.valor += 1;
  }

  public destruirComponente(): void {
    this.destruir = false;
  }

  ngOnInit(): void { //adicionar eventos ou funcionalidades ao iniciar a aplicação
    setTimeout(() => {
      console.log("teste");

    }, 5000);
  }

  ngDoCheck(): void { // vai verificar se há alterações em dados no componente
     console.log("ngDoCheck");
  }

  ngAfterContentInit(): void {
        //Called after ngOnInit when the component's or directive's content has been initialized.
        //Add 'implements AfterContentInit' to the class.
        console.log("ngAfterContentInit");
  }
  ngAfterContentChecked(): void { // é chamado sempre que há alteração no conteúdo
      console.log("ngAfterContentChecked");
  }
  ngAfterViewInit(): void {
      console.log("ngAfterViewInit");
  }
  ngAfterViewChecked(): void { //é chamado quando a alteração é carregada na view/componente
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    console.log("ngAfterViewChecked");
  }


}
