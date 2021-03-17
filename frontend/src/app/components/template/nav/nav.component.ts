import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {


  constructor() {
    console.log('NavComponent criado ...')
  }



  ngOnInit(): void {
    console.log('NavComponent inicializado ...')
  }

  ngOnDestroy(): void {
    console.log('NavComponent destruído ...')
    //throw new Error('Method not implemented.');
  }

}
