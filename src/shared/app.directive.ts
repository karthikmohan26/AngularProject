import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({

    selector : '[sectionBackGround]'
})

export class sectionBackGround  implements OnInit {


constructor(private elref:ElementRef,private renderer:Renderer2) {


}

ngOnInit() {

}

@HostListener('mouseenter')  mouseover(event:Event) {

    this.renderer.setStyle(this.elref.nativeElement,'background-color', 'green');


}

@HostListener('mouseleave')  mouseleave(event:Event) {

    this.renderer.setStyle(this.elref.nativeElement,'background-color', 'transparent');


}


}