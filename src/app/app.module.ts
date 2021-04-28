import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { InfoPageComponent } from './shared/components/info-page/info-page.component';
import { ProductsPageComponent } from './shared/components/products-page/products-page.component';
import { CreateProductComponent } from './shared/components/create-product/create-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryPipe } from './shared/pipes/category.pipe';
import { FilterByCategoryPipe } from './shared/pipes/filter-by-category.pipe';
import { FilterByAvailablePipe } from './shared/pipes/filter-by-available.pipe';
import { WeightPipe } from './shared/pipes/weight.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InfoPageComponent,
    ProductsPageComponent,
    CreateProductComponent,
    CategoryPipe,
    FilterByCategoryPipe,
    FilterByAvailablePipe,
    WeightPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
