import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {


  constructor() {
    console.debug('NavComponent criado ...')
  }



  ngOnInit(): void {
    console.debug('NavComponent inicializado ...')
  }

  ngOnDestroy(): void {
    console.debug('NavComponent destruído ...')
    //throw new Error('Method not implemented.');
  }

}
