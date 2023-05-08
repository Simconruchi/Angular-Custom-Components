import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'custom-input',
  templateUrl: 'custom-input.component.html',
  styleUrls: ['custom-input.component.scss']
})
export class CustomInputComponent implements OnInit {
  @Input() inputType?= "text";
  @Input() placeholder?= "";
  @Input() ngModelData?: any = "";
  @Input() maxlength?: any;
  @Input() id?= null;
  @Input() textAlign?= 'left';
  @Input() value?= "";
  @Input() name?= "";
  @Input() accept?= "";
  @Input() imgPath?= null;
  @Input() imgPath1?= null;
  @Input() onButtonClick?: boolean = false;
  @Input() title?= "";
  @Input() button?= "";
  @Input() rows?= "";
  @Input() iconPosition: string = 'right';
  @Input() for?: boolean = false;
  @Input() isNumber?: boolean = false;
  @Input() isReadOnly?: boolean = false;

  @Output() keyUp = new EventEmitter();
  @Output() inputChange = new EventEmitter();
  @Output() pasteData = new EventEmitter();
  @Output() radioChange = new EventEmitter();
  @Output() fileChange = new EventEmitter();
  @Output() dateChange = new EventEmitter();
  @Output() imgPathIconClick = new EventEmitter();
  @Output() imgPath1IconClick = new EventEmitter();
  @Output() checkboxChange = new EventEmitter();

  isNumberAllow?: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onKeyUp(event) {
    let obj = {
      event: event,
      ngModelData: this.ngModelData,
      id: this.id
    }
    this.keyUp.emit(obj);
  }

  onRadioCheck(event) {
    let obj = {
      event: event,
      ngModelData: this.ngModelData,
      id: this.id,
      name: this.name
    }
    this.radioChange.emit(obj);
  }

  onCheckboxCheck(event) {
    let obj = {
      event: event,
      ngModelData: this.ngModelData,
      id: this.id,
      name: this.name
    }
    this.checkboxChange.emit(obj);
  }

  fileChangeEvent(event) {
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.ngModelData = reader.result;
      let obj = {
        event: event,
        ngModelData: this.ngModelData,
      }

      this.fileChange.emit(obj);
    }
  }

  onInputChange(event) {
    if (this.inputType == 'date') {
      let obj = {
        event: event,
        ngModelData: this.ngModelData,
      }
      this.dateChange.emit(obj);
    } else {
      let obj = {
        event: event,
        ngModelData: event.target.value,
        id: this.id
      }
      this.inputChange.emit(obj);
    }
  }

  onPaste(event: ClipboardEvent) {
    let clipboardData = event.clipboardData;
    let pastedText = clipboardData.getData('text');
    let obj = {
      event: event,
      ngModelData: pastedText,
      id: this.id
    }
    this.pasteData.emit(obj);
  }

  focusOnActiveField() {
    var element = document.getElementById(this.id);
    element.scrollIntoView(true);
  }

  imgPathClick() {
    this.imgPathIconClick.emit();
  }

  imgPath1Click() {
    this.imgPath1IconClick.emit();
  }

  onkeyPressNumber(evt) {
    if (this.isNumber) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
      }
      return true;
    }
  }
}