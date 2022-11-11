import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Product';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Product[] =[];
  constructor(private productServ:ProductserviceService
    ,private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.productServ.getProductList().subscribe(
      data=>{
        this.products = data;
      }
    );
  }

  updateProduct(id:number){
    this.router.navigate(['updateproductdetails',id]);
  }

  removeProduct(id:number){
    this.productServ.deleteProduct(id).subscribe(
      result=>{
        console.log(result);
        alert(id + "deleted successfully");
        this.reloadData();
      },error => console.log(error));
  }

  

  productDetails(id:number){
    this.router.navigate(['productdetails',id]);
  }

}
