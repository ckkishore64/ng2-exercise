import { Component, Input, Output, EventEmitter, Inject } from '@angular/core';
import { Router } from '@angular/router';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';

import { Product } from '../product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  providers: [{ provide: 'Window', useValue: window }]
})
export class ProductDetailsComponent {
  @Input() product: Product;
  @Output() goToDetail = new EventEmitter();
  constructor(
    private router: Router,
    @Inject('Window') private window: Window
  ) { }

  goBack(): void {
    this.goToDetail.emit();
  }

  saveAsPdf(): void {
    this.getCanvas().then(canvas => {
      const img = canvas.toDataURL("image/png");
      const doc = new jsPDF({ unit: 'px', format: 'a4' });
      doc.addImage(img, 'JPEG', 20, 20);
      doc.save(`${this.product.category}_${this.product.title}.pdf`);
    })
  }

  private getCanvas(): any {
    return html2canvas(document.getElementById('product-pdf'));
  }
}
