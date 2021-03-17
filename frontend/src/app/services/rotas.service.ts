import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RotasService implements OnInit, OnDestroy {


  constructor(private router: Router) {
    console.log('# RotasService criado ... ')
  }


  productsCreate() {
    this.router.navigate(['/products/create'])
  }

  products() {
    this.router.navigate(['/products'])
  }


  ngOnInit(): void {
    console.log('# RotasService inicializado ... ')
  }

  ngOnDestroy(): void {
    console.log('# RotasService destruído ... ')
    //throw new Error('Method not implemented.');
  }

}
