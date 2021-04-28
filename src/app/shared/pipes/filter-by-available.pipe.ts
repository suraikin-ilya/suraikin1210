import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models/product.model';

@Pipe({
  name: 'filterByAvailable',
})
export class FilterByAvailablePipe implements PipeTransform {
  transform(products: IProduct[], isAvailable: boolean): any[] {
    if (!isAvailable) {
      return products;
    } else {
      const filterProducts = products?.filter((product) => product.count > 0);
      return filterProducts;
    }
  }
}
