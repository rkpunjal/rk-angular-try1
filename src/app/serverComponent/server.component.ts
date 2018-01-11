import {Component} from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  serverId = 10;   // could do : serverId: number = 10;
  serverStatus: string = 'offline';  // also type definition is done automatically

  getServerStatus(){
    return this.serverStatus;
  }
}
