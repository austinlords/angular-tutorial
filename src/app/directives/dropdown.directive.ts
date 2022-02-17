import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective implements OnInit {
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  @HostBinding('class.open') isOpen = false;

  ngOnInit() {
    this.isOpen = false;
  }
}
