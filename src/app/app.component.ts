import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-title title="hello world"></app-title>
    <router-outlet></router-outlet>
    `, // verifica se tem rotas definidas no angular e carrega o que tiver na pagina
})
export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { //adicionar eventos ou funcionalidades ao iniciar a aplicação
    setTimeout(() => {
      console.log("teste");

    }, 5000);

  }


}
