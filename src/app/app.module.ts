import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { DataInterchangeComponent } from './data-interchange/data-interchange.component';
import { InterchargeComponent } from './data-interchange/intercharge/intercharge.component';
import { DirectivesModule } from './_directives/directives.module';
import { AuthGuard, ShoppingListService } from './_services';
import { TestimonalComponent } from './testimonal/testimonal.component';
import { PipesComponent } from './pipes/pipes.component';
import { FilterPipe, RevercePipe, ShortenPipe } from './_pipes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DataInterchangeComponent,
    InterchargeComponent,
    TestimonalComponent,
    PipesComponent,
    ShortenPipe,
    FilterPipe,
    RevercePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DirectivesModule
  ],
  providers: [ShoppingListService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
