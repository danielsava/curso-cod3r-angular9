import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { MensagensService } from 'src/app/services/mensagens.service';
import { ProductService } from 'src/app/services/product.service';
import { RotasService } from 'src/app/services/rotas.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {


  produto: Product = {name: null, price: null}


  constructor(
    private productService: ProductService,
    private rotas: RotasService,
    private route: ActivatedRoute,
    private msg: MensagensService
  ) { }


  deleteProduct(): void {
    this.productService
      .delete(this.produto)
      .subscribe(() => {
        this.msg.snackInfo(`Produto Excluído: ${this.produto.id}, ${this.produto.name}, ${this.produto.price}`)
        this.rotas.products()
      })
  }

  cancel(): void {
    this.msg.snackInfo('Exclusão Cancelada')
    this.rotas.products()
  }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')

    this.productService
      .readById(id)
      .subscribe(p => this.produto = p)

  }


}
