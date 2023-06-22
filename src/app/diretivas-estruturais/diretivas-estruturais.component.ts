import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {

  public condition: boolean = true;
  public conditionClick: boolean = true;

  public list: Array<{nome: string, idade: number}> = [
    {nome: "Fabricio", idade: 22},
    {nome: "César", idade: 35},
    {nome: "Gabriel", idade: 45},
    {nome: "Lucas", idade: 67},
    {nome: "Rafael", idade: 11}
  ];

  public nome: string = 'Fabricio';
  constructor() { }

  ngOnInit(): void {

    //ngIf
    setInterval(()=>{
      if (this.condition) {
        this.condition = false;
      }else{
        this.condition = true;
      }
    },2000);
  }
  //ngIf
  public handleClick(): void{
    if (this.conditionClick) {
      this.conditionClick = false;
    }else{
      this.conditionClick = true;
    }
  }
  public handleClickAddList(): void{
    this.list.push({nome: "Otávio", idade: 33});
  }
  public handleClickEventList(event: number): void{
    this.list.splice(event, 1);
  }
}
