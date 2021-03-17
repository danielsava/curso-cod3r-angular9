import { Component, OnDestroy, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/product.service';
import { RotasService } from 'src/app/services/rotas.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit, OnDestroy {

  constructor(
    private productService: ProductService,
    private rotas: RotasService
  ) {
    console.log('ProductCreateComponent criado ...')
  }


  createProduct(): void {
    this.productService.showMessage('Salvando Produto ...')  
  }

  cancel(): void {
    this.productService.showMessage('Cancelando ...')
    this.rotas.products()  
  }


  
  ngOnInit(): void {
    console.log('ProductCreateComponent Inicializado ...')
  }

  ngOnDestroy(): void  {
    console.log('ProductCreateComponent Destruído ...')
  }

}
