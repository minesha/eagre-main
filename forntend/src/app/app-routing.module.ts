import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './view/login/login.component';
import { HomeComponent } from './view/home/home.component';
import { RegistationnComponent } from './view/registationn/registationn.component';
import { ProfileComponent } from './view/profile/profile.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { AboutComponent } from './view/about/about.component';
import { ProfiledetailsComponent } from './view/profiledetails/profiledetails.component';
import { ItemComponent } from './view/item/item.component';
import { AdditemComponent } from './view/additem/additem.component';

const routes: Routes = [

  {
    path:'',component:LoginComponent,
  },
  {
    path:'home',component:HomeComponent,
    children:[
      {
      path:'profile',component:ProfileComponent,
      children:[
        {
          path:'profiledetails',component:ProfiledetailsComponent ,

      },
      {
        path:'item',component:ItemComponent ,
      },
      
       {
        path:'additem',component:AdditemComponent,
       }
      ]
  
  },
  {
    path:'dashboard',component:DashboardComponent
  },
  {
    path:'about',component:AboutComponent
  }

]
  },
  {
    path:'registation',component:RegistationnComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
