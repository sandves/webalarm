import {Component} from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {Alarm} from '../alarms/alarm';
import {ClockTime} from '../alarms/time';

@Component({
  templateUrl: 'dialog.component.html'
})
export class DialogComponent {

  constructor(public dialogRef: MdDialogRef<DialogComponent>) {
  }

  createAlarm(newAlarm) {
    newAlarm.enabled = true;
    this.dialogRef.close(newAlarm);
  }
}
