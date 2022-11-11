import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../Product';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  pid:number =0;
  product!: Product;
  submitted = false;
constructor(private route:ActivatedRoute,
  private router:Router,private productService:ProductserviceService) { }

  ngOnInit(): void {
    this.product = new Product();
    this.pid = this.route.snapshot.params['pid'];
    this.productService.getProduct(this.pid).subscribe(result_product=>{
          console.log(result_product)
          this.product = result_product
      },error=>console.log(error));
  }
  onSubmit(){
    this.UpdateProduct();
  }

  UpdateProduct() {
    this.productService.updateProduct(this.pid,this.product).subscribe(
      result=>{
        console.log(result);
        this.product = result;
        this.goToProductList();
    },error=>console.log(error));
  }
  goToProductList() {
    this.router.navigate(['productlist']);
  }
}


