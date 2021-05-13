import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './views/main-page/main-page.component';
import { ShirtStockComponent } from './views/shirt-stock/shirt-stock.component';
import { CreateComponent } from './components/stock/create/create.component';
import { EditComponent } from './components/stock/edit/edit.component';
import { DeleteComponent } from './components/stock/delete/delete.component';
import { ViewShirtComponent } from './views/view-shirt/view-shirt.component';
import { BasicPageComponent } from './views/basic-page/basic-page.component';
import { StampedPageComponent } from './views/stamped-page/stamped-page.component';

const routes : Routes = [
  {
    path: "",
    component: MainPageComponent
  },
  {
    path: "basicas",
    component: BasicPageComponent 
  },
  {
    path: "estampadas",
    component: StampedPageComponent
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
  },
  {
    path: "produto/:id",
    component: ViewShirtComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
