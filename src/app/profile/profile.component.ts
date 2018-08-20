import { Component, OnInit } from '@angular/core';
import { ProfileServiceService } from '../profile-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ProfileServiceService]
})
export class ProfileComponent implements OnInit {

  userInfo1: any;
  constructor(private profileService: ProfileServiceService) { }

  ngOnInit() {
    this.userInfo1 = this.profileService.getUser();
    console.log('---' + this.userInfo1.f_name);
  }

}
