import {Component} from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: white;
    }
  `]
})
export class ServerComponent {
  serverId = 10;   // could do : serverId: number = 10;
  serverStatus: string = 'Offline';  // also type definition is done automatically

  constructor(){
    this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
  }

  getServerStatus(){
    return this.serverStatus;
  }


  getColor(){
    return this.serverStatus === 'Online' ? 'green' : 'red';
  }

  isOnline(){
    return this.serverStatus === 'Online'
  }

}
