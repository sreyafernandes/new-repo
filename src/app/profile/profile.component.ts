import { Component, OnInit } from '@angular/core';
import { ProfileServiceService } from '../profile-service.service';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  Users: any[];
  constructor(db: AngularFireDatabase) {
    db.list('/Users')
    .valueChanges().subscribe(Users => {
      this.Users = Users;
      console.log(this.Users);
    });
  }

  ngOnInit() {
    // this.userInfo1 = this.profileService.getUser();
    // console.log('---' + this.userInfo1.fn);
    // private profileService: ProfileServiceService,
  }

}
