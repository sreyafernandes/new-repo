import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {

  userInfo: any;

  constructor() { }

  storeUser(data) {
    this.userInfo = data;
    console.log(this.userInfo);
  }

  getUser() {
    console.log('get USER called' + this.userInfo);
    return this.userInfo;
  }
}
