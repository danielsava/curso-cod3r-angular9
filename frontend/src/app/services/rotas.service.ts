import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RotasService implements OnInit, OnDestroy {


  constructor(private router: Router) {
    console.debug('# RotasService criado ... ')
  }


  productsCreate(): void {
    this.router.navigate(['/products/create'])
  }

  products(): void {
    this.router.navigate(['/products'])
  }


  ngOnInit(): void {
    console.debug('# RotasService inicializado ... ')
  }

  ngOnDestroy(): void {
    console.debug('# RotasService destruído ... ')
    //throw new Error('Method not implemented.');
  }

}
