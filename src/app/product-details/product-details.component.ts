import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() product: Product;
  @Output() goToDetail = new EventEmitter();
  constructor(private router: Router) { }

  goBack(): void {
    this.goToDetail.emit();
  }
}
