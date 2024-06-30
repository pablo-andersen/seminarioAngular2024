import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LcProductsComponent } from './lc-products/lc-products.component';
import { LcAboutUsComponent } from './lc-about-us/lc-about-us.component';
import { LcContactComponent } from './lc-contact/lc-contact.component';
import { LcLoginComponent } from './lc-login/lc-login.component';
import { LcHomeComponent } from './lc-home/lc-home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { 
    path: 'productos', 
    component: LcProductsComponent 
  },
  { 
    path: 'home', 
    component: LcHomeComponent 
  },
  { 
    path: 'nosotros', 
    component: LcAboutUsComponent
  },
  { 
    path: 'contacto', 
    component: LcContactComponent
  },
  { 
    path: 'acceso', 
    component: LcLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
