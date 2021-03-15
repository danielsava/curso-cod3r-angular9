import { Component, OnInit } from '@angular/core';
import { RotasService } from 'src/app/services/rotas.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {


  constructor(private rotas: RotasService) { }


  navigateToProductCreate() {
    this.rotas.productsCreate()
  }

  ngOnInit(): void {
  }

}
