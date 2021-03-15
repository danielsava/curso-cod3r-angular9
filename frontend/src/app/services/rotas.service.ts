import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RotasService {


  constructor(private router: Router) { }


  productsCreate() {
    this.router.navigate(['/products/create'])
  }

}
