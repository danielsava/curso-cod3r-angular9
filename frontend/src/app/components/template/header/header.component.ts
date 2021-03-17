import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {


  constructor() {
    console.debug('HeaderComponent criado ... ')
  }



  ngOnInit(): void {
    console.debug('HeaderComponent inicializado ... ')
  }

  ngOnDestroy(): void {
    console.debug('HeaderComponent destruído ... ')
  }

}
