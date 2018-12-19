import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

interface Product {
  id: number;
  name: string;
  price: number;
  color: number;
  description: string;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  formGroup: FormGroup;
  products: Product[] = [
    { id: 0, name: 'Produkt 1', price: 100, color: 1, description: 'Przydatny w domu i w pracy'},
    { id: 1, name: 'Produkt 2', price: 200, color: 2, description: 'Dla dorosłych i dla dzieci'}
  ];
  @ViewChild('submitBtn') submitBtn: ElementRef;

  constructor(
    private formBuilder: FormBuilder,
    ) {
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      products: this.formBuilder.array(this.products.map(product => this.createProductGroup(product)))
    });
  }

  createProductGroup(product: Product): FormGroup {
    return this.formBuilder.group({
      ...product,
      ...{
        name: [product.name, Validators.required],
        price: product.price,
        color: [product.color, Validators.required],
        description: product.description
      }
    });
  }

}
