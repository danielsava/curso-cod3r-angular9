import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { MensagensService } from 'src/app/services/mensagens.service';

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
    private rotas: RotasService,
    private msg: MensagensService
  ) {
    console.debug('ProductCreateComponent criado ...')
  }


  createProduct(): void {
    this.productService
      .create(this.product)
      .subscribe(resultado => {
        this.msg.snackInfo(`Produto Criado: ${resultado.id}, ${resultado.name}, ${resultado.price}`)
        this.rotas.products()
      })
  }

  cancel(): void {
    this.msg.snackInfo('Cancelado')
    this.rotas.products()
  }



  ngOnInit(): void {
    console.debug('ProductCreateComponent Inicializado ...')
  }

  ngOnDestroy(): void {
    console.debug('ProductCreateComponent Destruído ...')
  }


}
