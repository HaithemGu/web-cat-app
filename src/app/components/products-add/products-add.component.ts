import { Router } from '@angular/router';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/service/products.service';
import { ProductActionTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.css']
})
export class ProductsAddComponent implements OnInit {


  productFormGroup?:FormGroup ;
  submitted:boolean = false ;
constructor(private fb:FormBuilder, private productService:ProductService,
   private router: Router ){}

ngOnInit(): void {
//price valeur par defaut 0
//biding avec formGroup
  this.productFormGroup = this.fb.group({

    name:["",Validators.required],
    price:[0,Validators.required],
    quantity:[0,Validators.required],
    selected: [true,Validators.required],
    available: [true,Validators.required],
  });
}

onSaveProduct() {
  // this.submitted =true ;
  //if (this.productFormGroup?.invalid) return;
  this.productService.save(this.productFormGroup?.value)
  .subscribe(data => {
     alert("save avec success projet")
     this.router.navigate(['/products']);
  });
}

}
