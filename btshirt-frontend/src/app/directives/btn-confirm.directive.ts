import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBtnConfirm]'
})
export class BtnConfirmDirective {

  constructor(
    private renderer : Renderer2,
    private elementRef : ElementRef
  ) { 

    const DOM_ELEMENT = elementRef.nativeElement

    const BUTTON_CANCEL_STYLE = {
      'background-color': '#4CAF50',
      'border': 'none',
      'color': 'white',
      'padding': '15px 32px',
      'text-align': 'center',
      'text-decoration': 'none',
      'display:': 'inline-block',
      'font-size': '16px',
      'margin-right': '20px'  
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
