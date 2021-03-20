import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { MensagensService } from './mensagens.service';



@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit, OnDestroy {


  private baseUrl: string = "http://localhost:3001/products"
  

  constructor(
    private msg: MensagensService,
    private http: HttpClient
  ) {
    console.debug('# ProductService criado ... ')
  }



  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product);
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  readById(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url); 
  }

  update(produto: Product): Observable<Product> {
    const url = `${this.baseUrl}/${produto.id}`
    return this.http.put<Product>(url, produto)
  }

  delete(produto: Product): Observable<any> {
    const url = `${this.baseUrl}/${produto.id}`
    return this.http.delete<any>(url)
  }



  showMessage(msg: string): void {
    this.msg.snackInfo(msg)
  }



  ngOnInit(): void {
    console.debug('# ProductService inicializado ... ')
  }

  ngOnDestroy(): void {
    console.debug('# ProductService destruído ... ')
    //throw new Error('Method not implemented.');
  }


}
