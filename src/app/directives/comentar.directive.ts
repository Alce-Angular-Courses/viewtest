import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[vwnComentar]'
})
export class ComentarDirective {
    @Input() vwnComentar!: string;
  
    constructor(
      private eTarget: ElementRef,
      private renderer: Renderer2) {

      }

  ngOnInit() {
    // this.elem.nativeElement,
    this.renderer.setAttribute(this.eTarget.nativeElement, 'title', this.vwnComentar)
  } 
    
  @HostListener('click') anular() {
      //this.elem.nativeElement, 	
    this.renderer.setAttribute(this.eTarget.nativeElement,'title', 'Tema comprobado')
  } 
  
}
