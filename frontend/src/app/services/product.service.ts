import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { MensagensService } from './mensagens.service';



@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit, OnDestroy {


  constructor(private msg: MensagensService) { 
    console.log('# ProductService criado ... ')
  }


  showMessage(msg: string): void {
    this.msg.snackInfo(msg)
  }



  ngOnInit(): void {
    console.log('# ProductService inicializado ... ')
  }

  ngOnDestroy(): void {
    console.log('# ProductService destruído ... ')
    //throw new Error('Method not implemented.');
  }


}
