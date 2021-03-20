import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { MensagensService } from 'src/app/services/mensagens.service';
import { ProductService } from 'src/app/services/product.service';
import { RotasService } from 'src/app/services/rotas.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {


  product: Product = { name: null, price: null }


  constructor(
    private productService: ProductService,
    private rotas: RotasService,
    private route: ActivatedRoute,
    private msg: MensagensService
  ) { }


  updateProduct(): void {
    this.productService
      .update(this.product)
      .subscribe(resultado => {
        this.productService.showMessage(`Produto Alterado: ${resultado.id}, ${resultado.name}, ${resultado.price}`)
        this.rotas.products()
      })
  }

  cancel(): void {
    this.msg.snackInfo('Alteração Cancelada')
    this.rotas.products()
  }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id')

    this.productService
      .readById(id)
      .subscribe(p => this.product = p)

  }


}
