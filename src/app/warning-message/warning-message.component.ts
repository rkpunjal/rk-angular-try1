import {Component} from "@angular/core";

@Component({
  selector : 'warning-message',

 // templateUrl : './warning-message.component.html',

  template: `
    <div class="container">
      <div class="alert alert-warning myWarning">
        This is a Warning Message !!
      </div>
    </div>
  `,

//  styleUrls: ['./warning-message.component.css']

  styles: [`
    .jumbotron{
      background-color: gold;
      color: black;
      font-size: large;

      border-color: orange;
      border: 2px;
      border-style:solid;
    }
  `]

})
export class WarningMessageComponent{}
