import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './views/main-page/main-page.component';
import { ShirtStockComponent } from './views/shirt-stock/shirt-stock.component';
import { CreateComponent } from './components/stock/create/create.component';
import { EditComponent } from './components/stock/edit/edit.component';
import { DeleteComponent } from './components/stock/delete/delete.component';

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
  },
  {
    path: "estoque/editar/:id",
    component: EditComponent
  },
  {
    path: "estoque/excluir/:id",
    component: DeleteComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
