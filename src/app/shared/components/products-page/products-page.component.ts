import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IProduct } from '../../models/product.model';
import { ProductType } from '../../models/product.type';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css'],
})
export class ProductsPageComponent implements OnInit {
  products: IProduct[];
  title = 'Список товаров';
  public editFormGroup: FormGroup;
  editId: number | null = 0;
  unSortedProducts: IProduct[] = [];
  type = ProductType;
  selectCategory = 5;
  sort = { col: '', dir: '' };
  isAvailable = false;
  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.getProducts();
    this.editFormGroup = new FormGroup({
      id: new FormControl(null),
      title: new FormControl(null, [Validators.required]),
      articulation: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required, Validators.min(0)]),
      madedBy: new FormControl(null),
      category: new FormControl(null, [Validators.required]),
      weight: new FormControl(null, [Validators.required, Validators.min(0)]),
      count: new FormControl(null, [Validators.required, Validators.min(0)]),
    });
  }

  async getProducts() {
    try {
      this.products = await this.http.getProducts();
    } catch (error) {
      console.log(error);
    }
  }

  async onDeleteProduct(id: number) {
    try {
      await this.http.deleteProduct(id);
    } catch (error) {
      console.log(error);
    } finally {
      this.getProducts();
    }
  }
  onEditProduct(product: IProduct) {
    this.editId = product.id;
    this.editFormGroup.patchValue(product);
  }
  async onUpdateProduct() {
    try {
      await this.http.updateProduct(this.editFormGroup.value);
      this.editId = null;
    } catch (error) {
      console.log(error);
    } finally {
      this.getProducts();
    }
  }
  async onAddProduct(product: IProduct) {
    try {
      await this.http.postProduct(product);
    } catch (error) {
      console.log(error);
    } finally {
      this.getProducts();
    }
  }
  async onRaiseCount(product: IProduct) {
    try {
      product.count++;
      await this.http.updateProduct(product);
    } catch (error) {
      console.log(error);
    } finally {
      this.getProducts();
    }
  }
  sortProducts(col, dir) {
    if (!this.unSortedProducts.length)
      this.unSortedProducts = [...this.products];

    if (col === this.sort.col && dir === this.sort.dir) {
      this.products = this.unSortedProducts;
      this.sort = { col: '', dir: '' };
    } else {
      this.products.sort((a, b) => {
        return dir === 'desc' ? a[col] - b[col] : b[col] - a[col];
      });
    }
    this.sort = { col, dir };
  }
  async onReduceCount(product: IProduct) {
    try {
      product.count--;
      if (product.count <= 0) product.count = 0;
      await this.http.updateProduct(product);
    } catch (error) {
      console.log(error);
    } finally {
      this.getProducts();
    }
  }
}
