import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Product } from '../Product';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productid:number =0;
  product!: Product;
  constructor(private route:ActivatedRoute,private productServ:ProductserviceService
    ,private router:Router) {
  }

  ngOnInit(): void {
    this.product = new Product();
    this.productid = this.route.snapshot.params['pid'];
    this.productServ.getProduct(this.productid).subscribe(
        data=>{
            this.product = data;
    },error=>console.error(error));
  }
  goToProductList(){
    this.router.navigate(['productlist']);
}
}
