import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { MensagensService } from './mensagens.service';



@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit, OnDestroy {


  constructor(private msg: MensagensService) { 
    console.debug('# ProductService criado ... ')
  }


  showMessage(msg: string): void {
    this.msg.snackInfo(msg)
  }



  ngOnInit(): void {
    console.debug('# ProductService inicializado ... ')
  }

  ngOnDestroy(): void {
    console.debug('# ProductService destruído ... ')
    //throw new Error('Method not implemented.');
  }


}
