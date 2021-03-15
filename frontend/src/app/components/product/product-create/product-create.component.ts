import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/product.service';
import { RotasService } from 'src/app/services/rotas.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private rotas: RotasService
  ) { }



  createProduct(): void {
    this.productService.showMessage('Salvando Produto ...')  
  }

  cancel(): void {
    this.productService.showMessage('Cancelando ...')
    this.rotas.products()  
  }


  ngOnInit(): void {
  }

}
