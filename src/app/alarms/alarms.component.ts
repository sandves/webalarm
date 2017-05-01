import {Component} from '@angular/core';
import {MdIconRegistry, MdDialog} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {DialogComponent} from '../dialog/dialog.component';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {Alarm} from './alarm';
import {Router} from '@angular/router';

@Component({
  selector: 'app-alarms',
  templateUrl: './alarms.component.html',
  styleUrls: ['./alarms.component.css'],
})

export class AlarmsComponent {

  selectedAlarm: Alarm;
  alarms: FirebaseListObservable<Alarm[]>;
  isDarkTheme = true;

  constructor(public af: AngularFire, iconRegistry: MdIconRegistry,
    sanitizer: DomSanitizer, private dialog: MdDialog, private router: Router) {
    // To avoid XSS attacks, the URL needs to be trusted from inside of your application.
    const avatarsSafeUrl = sanitizer.bypassSecurityTrustResourceUrl('../assets/avatars.svg');
    iconRegistry.addSvgIconSetInNamespace('avatars', avatarsSafeUrl);

    const alarmClockSafeUrl = sanitizer.bypassSecurityTrustResourceUrl('../assets/alarm-clock.svg');
    iconRegistry.addSvgIcon('alarm-clock', alarmClockSafeUrl);
    const uid = af.auth.getAuth().uid;
    this.alarms = af.database.list('/users/' + uid + '/alarms');
  }

  add(alarm: Alarm) {
    this.alarms.push(alarm);
  }

  update(key: string, alarm: Alarm) {
    this.alarms.update(key, alarm);
  }

  delete(key: string) {
    this.alarms.remove(key);
  }

  deleteEverything() {
    this.alarms.remove();
  }

  logout() {
     this.af.auth.logout();
     this.router.navigateByUrl('/login');
  }

  private openAdminDialog() {
    this.dialog.open(DialogComponent).afterClosed()
      .filter(result => !!result)
      .subscribe(alarm => {
        alarm.time = {
          hour: alarm.hour,
          minute: alarm.minute
        };
        this.add(alarm);
        this.selectedAlarm = alarm;
      });
  }

}
