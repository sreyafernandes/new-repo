import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ProfileServiceService } from '../profile-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css'],
})
export class AppNavbarComponent implements OnInit {
  Books: any[];
  constructor(private router: Router, private profileService: ProfileServiceService) { }
  userSignUp = new FormGroup({
    fn: new FormControl(''),
    ln: new FormControl(''),
    pn: new FormControl(''),
    email: new FormControl(''),
    pwd: new FormControl('')
  });
  userSignIn = new FormGroup({
    em: new FormControl(''),
    passwd: new FormControl('')
  });
  ngOnInit() { }
  SignIn() {
    alert('Welcome, ' + this.userSignIn.value.em);
    // console.warn(this.userSignIn.value);
    // alert('username: ' + this.userSignIn.value.em);
    console.log(this.userSignIn.value);
  }

  SignUp() {
    this.profileService.storeUser(this.userSignUp.value);
    alert('Welcome, ' + this.userSignUp.value.fn);
    // console.warn(this.userSignIn.value);
    // alert('username: ' + this.userSignIn.value.em);
    console.log(this.userSignUp.value);
    this.router.navigate(['/profile']);
  }

}
