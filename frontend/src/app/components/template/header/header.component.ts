import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {


  constructor() {
    console.log('HeaderComponent criado ... ')
  }



  ngOnInit(): void {
    console.log('HeaderComponent inicializado ... ')
  }

  ngOnDestroy(): void {
    console.log('HeaderComponent destruído ... ')
  }

}
