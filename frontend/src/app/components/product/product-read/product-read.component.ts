import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {


  products: Product[]

  colunasTabela: string[]


  constructor(private productService: ProductService) { }


  ngOnInit(): void {

    this.configurarTabela()

    this.productService.read()
      .subscribe(produtos => {
        this.products = produtos
        console.log(this.products)
      })
  }

  configurarTabela(): void {
    this.colunasTabela = ['id', 'name', 'price', 'action']
  }


}
