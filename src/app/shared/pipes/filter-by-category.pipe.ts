import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models/product.model';
@Pipe({
  name: 'filterByCategory',
})
export class FilterByCategoryPipe implements PipeTransform {
  transform(products: IProduct[], searchCategory: number): any[] {
    if (searchCategory === 5) {
      return products;
    } else {
      const filterProducts = products?.filter(
        (product) => product.category === searchCategory
      );
      return filterProducts;
    }
  }
}
