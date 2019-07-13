import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './view/login/login.component';
import { HomeComponent } from './view/home/home.component';
import {FormsModule} from "@angular/forms";
import { RegistationnComponent } from './view/registationn/registationn.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistationService } from './service/registation-service/registation.service';
import { ViewComponent } from './view/view.component';
import { ProfileComponent } from './view/profile/profile.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { AboutComponent } from './view/about/about.component';
import { ProfiledetailsComponent } from './view/profiledetails/profiledetails.component';
import { ItemComponent } from './view/item/item.component';
import { AdditemComponent } from './view/additem/additem.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegistationnComponent,
    ViewComponent,
    ProfileComponent,
    DashboardComponent,
    AboutComponent,
    ProfiledetailsComponent,
    ItemComponent,
    AdditemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RegistationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
