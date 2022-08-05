import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'custom-otp',
  templateUrl: 'custom-otp.component.html',
  styleUrls: ['custom-otp.component.scss']
})
export class CustomOtpComponent implements OnInit {
  @Input() inputType?= "text";
  @Input() placeholder?= "";

  @ViewChild('otp1', { static: false }) otp1: any;
  @ViewChild('otp2', { static: false }) otp2: any;
  @ViewChild('otp3', { static: false }) otp3: any;
  @ViewChild('otp4', { static: false }) otp4: any;
  @ViewChild('otp5', { static: false }) otp5: any;
  @ViewChild('otp6', { static: false }) otp6: any;

  @Input() otp_input_1: string = '';
  @Input() otp_input_2: string = '';
  @Input() otp_input_3: string = '';
  @Input() otp_input_4: string = '';
  @Input() otp_input_5: string = '';
  @Input() otp_input_6: string = '';

  @Output() enteredOtp = new EventEmitter();

  constructor() { }

  isNumber: boolean = false;

  ngOnInit(): void {
  }

  enterOTP(event, next, prev) {
    if (this.isNumber) {
      let otp_input = this.otp_input_1 +
        this.otp_input_2 +
        this.otp_input_3 +
        this.otp_input_4 +
        this.otp_input_5 +
        this.otp_input_6;
      if (next == '') {
        this.enteredOtp.emit(otp_input);
      }
      if (event.target.value.length < 1 && prev) {
        prev.focus();
      } else if (next && event.target.value.length > 0) {
        next.focus();
      } else {
        return 0;
      }
    }
  }

  onkeyPressNumber(evt) {
    this.isNumber = false;
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      this.isNumber = false;
      return false;
    } else {
      this.isNumber = true;
    }
    return true;
  }

}
