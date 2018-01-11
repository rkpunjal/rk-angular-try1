import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {ServerComponent} from "./serverComponent/server.component";
import { ServersComponent } from './servers/servers.component';
import {SucccessMessageComponent} from "./success-message/succcess-message.component";
import {WarningMessageComponent} from "./warning-message/warning-message.component";


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SucccessMessageComponent,
    WarningMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
