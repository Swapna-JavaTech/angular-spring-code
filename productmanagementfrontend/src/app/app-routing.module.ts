import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes:Routes = [
  {path:'productlist',component:ProductListComponent},
  {path:'',component:HomeComponent},
  {path:'productdetails/:pid',component:ProductDetailsComponent},
  {path:'addproduct',component:CreateProductComponent},
  {path:'updateproductdetails/:pid',component:UpdateProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
