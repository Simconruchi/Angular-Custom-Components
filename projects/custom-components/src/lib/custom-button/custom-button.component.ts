import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'custom-button',
  templateUrl: 'custom-button.component.html',
  styleUrls: ['custom-button.component.scss']
})
export class CustomButtonComponent implements OnInit {
  @Input() title = "";
  @Input() icon?= "";
  @Input() image?= "";
  @Input() showLogoOnEnd?: boolean = false;
  @Input() disabled?: boolean = false;
  @Input() button?= "primary";
  @Output() btnClick = new EventEmitter();
  @Input() height?: string = '44px';
  @Input() color?: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onBtnClick() {
    this.btnClick.emit();
  }
}
