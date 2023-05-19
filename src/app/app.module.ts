import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { DataInterchangeComponent } from './data-interchange/data-interchange.component';
import { InterchargeComponent } from './data-interchange/intercharge/intercharge.component';
import { DirectivesModule } from './_directives/directives.module';
import { AuthGuard, DataStorageService, ShoppingListService } from './_services';
import { TestimonalComponent } from './testimonal/testimonal.component';
import { ShortenPipe, FilterPipe, RevercePipe, CapitalizePipe } from './_pipes';
import { PipesComponent } from './pipes/pipes.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthIntercepterService } from './http-requests/intercepter/auth-intercepter.service';
import { LoggingInterceptor } from './http-requests/intercepter/logging-intercepter.service';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoadingPageComponent } from './authentication/loading-page/loading-page.component';


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
    RevercePipe,
    CapitalizePipe,
    AuthenticationComponent,
    LoadingPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DirectivesModule,
    HttpClientModule
  ],
  providers: [ShoppingListService, AuthGuard,
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthIntercepterService, multi: true
    },
    {
      provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
