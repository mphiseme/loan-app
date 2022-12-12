import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { BaseLayoutComponent } from './base-layout/base-layout.component';

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: AboutComponent
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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
