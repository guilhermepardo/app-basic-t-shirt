import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'
 
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';


import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/template/navbar/navbar.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { MenuComponent } from './components/template/menu/menu.component';
import { CreateComponent } from './components/stock/create/create.component';
import { ViewComponent } from './components/stock/view/view.component';
import { EditComponent } from './components/stock/edit/edit.component';
import { DeleteComponent } from './components/stock/delete/delete.component';
import { ShirtStockComponent } from './views/shirt-stock/shirt-stock.component';
import { MainPageComponent } from './views/main-page/main-page.component';
import { TableSchematicComponent } from './components/schematics/table-schematic/table-schematic.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { BtnConfirmDirective } from './directives/btn-confirm.directive';
import { BtnCancelDirective } from './directives/btn-cancel.directive';
import { ShowcaseMainComponent } from './components/showcase/showcase-main/showcase-main.component';
import { ShowcaseBasicComponent } from './components/showcase/showcase-basic/showcase-basic.component';
import { ShowcaseStampedComponent } from './components/showcase/showcase-stamped/showcase-stamped.component';
import { ViewShirtComponent } from './views/view-shirt/view-shirt.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MenuComponent,
    CreateComponent,
    ViewComponent,
    EditComponent,
    DeleteComponent,
    ShirtStockComponent,
    MainPageComponent,
    TableSchematicComponent,
    BtnConfirmDirective,
    BtnCancelDirective,
    ShowcaseMainComponent,
    ShowcaseBasicComponent,
    ShowcaseStampedComponent,
    ViewShirtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
