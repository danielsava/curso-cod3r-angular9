import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {

  @Input('myForEm') 
  numeros: number[]

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) { }


  ngOnInit() {

    for(let numero of this.numeros)
      this.container.createEmbeddedView(this.template, { $implicit: numero })

    console.log('Valores do Array', this.numeros)
    
  }

}
