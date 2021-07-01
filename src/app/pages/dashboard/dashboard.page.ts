import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  showProfile = false;
  constructor() { }

  ngOnInit() {
  }

  toProfile(){
    console.log("profile");
    this.showProfile = true;
  }
}
