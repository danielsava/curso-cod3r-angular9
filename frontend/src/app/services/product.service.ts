import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MensagensService } from './mensagens.service';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private msg: MensagensService) { }


  showMessage(msg: string): void {
    this.msg.snackInfo(msg)
  }


}
