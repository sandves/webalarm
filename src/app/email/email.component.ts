import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})

export class EmailComponent implements OnInit {

  state = '';
  error: any;

    constructor(public af: AngularFire, private router: Router) {
    this.af.auth.subscribe(auth => {
      if(auth) {
        this.router.navigateByUrl('/alarms');
      }
    });
  }


  onSubmit(user) {
      this.af.auth.login({
        email: user.email,
        password: user.password
      },
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
      }).then(
        (success) => {
        console.log(success);
        this.router.navigate(['/alarms']);
      }).catch(
        (err) => {
        console.log(err);
        this.error = err;
      });
  }

  ngOnInit() {
  }

}
