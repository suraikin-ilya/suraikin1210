import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoPageComponent } from './shared/components/info-page/info-page.component';
import { ProductsPageComponent } from './shared/components/products-page/products-page.component';

const routes: Routes = [
  {
    path: '',
    component: InfoPageComponent,
  },
  {
    path: 'products',
    component: ProductsPageComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
