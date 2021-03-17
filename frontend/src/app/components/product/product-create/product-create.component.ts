import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

import { ProductService } from 'src/app/services/product.service';
import { RotasService } from 'src/app/services/rotas.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit, OnDestroy {


  product: Product = {
    name: null,
    price: null
  }


  constructor(
    private productService: ProductService,
    private rotas: RotasService
  ) {
    console.debug('ProductCreateComponent criado ...')
  }


  createProduct(): void {
    this.productService
      .create(this.product)
      .subscribe(resultado => {
        this.productService.showMessage(`Produto Criado: ${resultado.id}, ${resultado.name}, ${resultado.price}`)
        this.rotas.products()
      })
  }

  cancel(): void {
    this.productService.showMessage('Cancelado')
    this.rotas.products()
  }



  ngOnInit(): void {
    console.debug('ProductCreateComponent Inicializado ...')
  }

  ngOnDestroy(): void {
    console.debug('ProductCreateComponent Destruído ...')
  }


}
