import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent,
  },
  {
    path: 'home',
    component:HomeComponent,
  },
  {
    path: 'contact-us',
    component:ContactUsComponent,
  },
  {
    path: 'about',
    component:AboutComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


/**
 {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  },
  {
    path: 'home',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  },
  {
    path: 'about',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: AboutComponent
      }
    ]
  },
  {
    path: 'contact',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: ContactUsComponent
      }
    ]
  },
 */
