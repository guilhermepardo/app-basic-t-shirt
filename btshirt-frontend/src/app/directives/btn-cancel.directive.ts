import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBtnCancel]'
})
export class BtnCancelDirective {

  constructor(
    private renderer : Renderer2,
    private elementRef : ElementRef
  ) { 

    const DOM_ELEMENT = elementRef.nativeElement

    const BUTTON_CANCEL_STYLE = {
      'background-color': '#f54e4e',
      'border': 'none',
      'color': 'white',
      'padding': '15px 32px',
      'text-align': 'center',
      'text-decoration': 'none',
      'display:': 'inline-block',
      'font-size': '16px'  
    }

    Object.keys(BUTTON_CANCEL_STYLE).forEach(newStyle => {
      renderer.setStyle(
        DOM_ELEMENT,
        `${newStyle}`,
        BUTTON_CANCEL_STYLE[newStyle]
      )
    })

  }

}
