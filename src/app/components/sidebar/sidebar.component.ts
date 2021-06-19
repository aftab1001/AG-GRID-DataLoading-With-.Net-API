import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SideBarComponent implements OnInit {
   menuItems: Array<RouteInfo> = [];
  constructor() { }

  ngOnInit() {
    
    this.menuItems.push(
      { title: 'Home', path: '/Home', icon: '', class:'' }, 
      { title: 'Dashboard', path: '/Dashboard', icon: '', class:'' } ,
      { title: 'Dashboard-2', path: '/Dashboard-2', icon: '', class:'' } ,
      { title: 'User Profile', path: '/Userprofile', icon: '', class:'' } 
    )
  }

}
