import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './views/main-page/main-page.component';
import { ShirtStockComponent } from './views/shirt-stock/shirt-stock.component';
import { CreateComponent } from './components/stock/create/create.component';

const routes : Routes = [
  {
    path: "",
    component: MainPageComponent
  },
  {
    path: "estoque",
    component: ShirtStockComponent
  },
  {
    path: "estoque/criar",
    component: CreateComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
