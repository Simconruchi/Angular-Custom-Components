import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'custom-input',
  templateUrl: 'custom-input.component.html',
  styleUrls: ['custom-input.component.scss']
})
export class CustomInputComponent implements OnInit {
  @Input() inputType?= "text";
  @Input() placeholder?= '';
  @Input() ngModelData?= "";
  @Output() keyUp = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onKeyUp() {
    console.log(this.ngModelData)
    this.keyUp.emit(this.ngModelData);
  }

}
