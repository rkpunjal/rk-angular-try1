import { Component, OnInit } from '@angular/core';

@Component({
 selector: 'app-servers',   // tag-name selector (default)
//  selector: '[app-servers]',   // attribute-name selector
//   selector: '.app-servers',   // css class-name selector
//  template:
//  `
//    <app-server></app-server> 1
//    <br/> inline template <br/>
//    <app-server></app-server> 2
//  `
//  ,
  templateUrl:  `servers.component.html`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;

  constructor() {
    setTimeout(() => {
        this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  }

}
