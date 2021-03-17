import { Injectable, OnDestroy, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';



@Injectable({
  providedIn: 'root'
})
export class MensagensService implements OnInit, OnDestroy {


  constructor(private snackBar: MatSnackBar) {
    console.debug('# MensagensService criado ... ')
  }


  snackInfo(msg: string): void {
    this.snackBar.open(msg, 'fechar', { duration: 3000, horizontalPosition: 'right', verticalPosition: 'top' })
  }

  
  ngOnInit(): void {
    console.debug('# MensagensService inicializado ... ')
  }

  ngOnDestroy(): void {
    console.debug('# MensagensService destruído ... ')
    //throw new Error('Method not implemented.');
  }

}
