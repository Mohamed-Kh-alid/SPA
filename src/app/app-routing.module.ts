import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductsComponent} from './products/products.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {path : 'home' , component : HomeComponent },
  {path : 'component' , component : ProductsComponent },
  {path : 'footer' , component : FooterComponent },
  {path : '' , component : HomeComponent },
  {path : '**' , component : FooterComponent },
  

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
