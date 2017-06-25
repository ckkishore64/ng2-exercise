import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { ProductList } from './product-list';
import { Product } from './product';

@Injectable()
export class ProductService {
  private url = 'https://www.dropbox.com/s/nlpz9o8o5e1t602/Data.json?dl=0';

  constructor(private http: Http) { }

  getData(): Promise<ProductList> {
    return this.http.get(this.url)
              .toPromise()
              .then(res => res.json().data as ProductList)
              .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }

}
