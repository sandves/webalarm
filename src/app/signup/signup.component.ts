import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  state = '';
  error: any;

  constructor(public af: AngularFire, private router: Router) {

  }

  onSubmit(user) {
      this.af.auth.createUser({
        email: user.email,
        password: user.password
      }).then(
        (success) => {
        console.log(success);
        this.router.navigate(['/login']);
      }).catch(
        (err) => {
        console.log(err);
        this.error = err;
      });
  }

  ngOnInit() {
  }

}
