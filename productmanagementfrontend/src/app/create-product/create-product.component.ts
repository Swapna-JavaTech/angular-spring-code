import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../Product';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product: Product = new Product();
  submitted:boolean = false;
  constructor(private route:ActivatedRoute,
    private productServ:ProductserviceService
    ,private router:Router) { }

  ngOnInit(): void {
  }
    onSubmit(){
      this.submitted = true;
    this.createProduct();
    }
  createProduct() {
    this.productServ.createProduct(this.product).subscribe(result =>{
      console.log(result);
      this.product = new Product();
      this.goToProductList();
    },error=>console.log(error));
    
  }
  goToProductList() {
    this.router.navigate(['productlist']);
  }
}
