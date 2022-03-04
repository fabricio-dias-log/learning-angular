import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  public nome: string = "Fabricio";
  public idade: number = 29;

  public checkedDisabled: boolean = false;
  public imgSrc: string = "https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg";
  public imgTitle: string = "Título da imagem";
  public imgAlt: string = "Alt da imagem";


  public position: { x: number, y: number } = { x: 0, y: 0 };
  public position1: any = { x: 0, y: 0 };

  public alertaInfo(valor: MouseEvent): void{
    console.log(valor);
  }

  public mouseMoveTeste(valor: MouseEvent) {
    // console.log(valor);
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;

  }
  constructor() { }

  ngOnInit(): void {

  }

}
