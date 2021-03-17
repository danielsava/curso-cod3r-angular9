import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {

  constructor() {
    console.log("FooterComponent criado ...")
  }

  ngOnInit(): void {
    console.log("FooterComponent inicializado ...")
  }

  ngOnDestroy(): void {
    console.log("FooterComponent destruído ...")
  }

}
