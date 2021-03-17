import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {


  constructor() {
    console.debug("FooterComponent criado ...")
  }

  
  ngOnInit(): void {
    console.debug("FooterComponent inicializado ...")
  }

  ngOnDestroy(): void {
    console.debug("FooterComponent destruído ...")
  }

}
