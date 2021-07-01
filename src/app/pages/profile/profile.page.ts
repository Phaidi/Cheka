import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user =  {
    user_id: "134324",
    fullname: "User 1",
    lastname: "User lName",
    emailAddress: "user1@gmail.com",
  }
  constructor() { }

  ngOnInit() {
  }

}
