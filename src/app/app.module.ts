import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainDemoComponent } from './main-demo/main-demo.component';
import {FormsModule} from '@angular/forms';
import { ServerComponent } from './server/server.component';
import { AssignmentComponent } from './assignment/assignment.component';
@NgModule({
  declarations: [
    AppComponent,
    MainDemoComponent,
    ServerComponent,
    AssignmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
