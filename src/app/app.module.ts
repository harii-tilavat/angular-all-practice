import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { DataInterchangeComponent } from './data-interchange/data-interchange.component';
import { InterchargeComponent } from './data-interchange/intercharge/intercharge.component';
import { DirectivesModule } from './_directives/directives.module';
import { ShoppingListService } from './_services';
import { TestimonalComponent } from './testimonal/testimonal.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthenticationComponent } from './authentication/authentication.component';
import { SharedModule } from './shared/shared.module';
import { AuthInterceptor, LoggingInterceptor, TestAuthIntercepter } from './_intercepter';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DataInterchangeComponent,
    InterchargeComponent,
    TestimonalComponent,
    AuthenticationComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DirectivesModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [ShoppingListService,
    {
      provide: HTTP_INTERCEPTORS, useClass: TestAuthIntercepter, multi: true
    },
    {
      provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true
    },
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
