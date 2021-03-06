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
  serverCreated = false;
  serverCreationStatus = 'No Server was created';
  serverName = 'Initial Value';
  userName = '';
  servers = ['server-1', 'server-2'];
  displayMessage = true;
  logValues = [];

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created ! : ' + this.serverName;

  }

  onUpdateServerName(event: any){
  //  this.serverName = event.target.value;

    // explicitly informing TS about target element type
    this.serverName = (<HTMLInputElement>event.target).value;

    console.log("serverName : " + this.serverName);
    //console.log(event);
  }

  isUserNameEmpty(){
    return this.userName === '';
  }

  resetUserName(){
    this.userName = '';
  }

  manageToggle(){
    this.displayMessage = !this.displayMessage;
    this.logValues.push(this.logValues.length + 1);
  }

  getLogBackground(value){
     return value >= 5 ? 'blue' : 'white';
  }



  constructor() {
    setTimeout(() => {
        this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  }

}
