import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';



@Injectable({
  providedIn: 'root'
})
export class MensagensService {

  constructor(private snackBar: MatSnackBar) { }

  snackInfo(msg: string): void {

    this.snackBar.open(msg, '',  { duration: 3000, horizontalPosition: 'right', verticalPosition: 'top' })

  }


}
