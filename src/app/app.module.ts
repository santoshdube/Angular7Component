import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { HttpClientModule} from '@angular/common/http';
import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FinputComponent } from './lib/finput/finput.component';
import { FtableComponent } from './lib/ftable/ftable.component';
import { OrderPipePipe } from './lib/order-pipe.pipe';
import { FdxDataTableComponent } from 'fdx-data-table';
import { PageoneComponent } from './pageone/pageone.component';
import { PagetwoComponent } from './pagetwo/pagetwo.component';
import { FdxSimpleTableComponent } from './lib/fdx-simple-table/fdx-simple-table.component';
import { FdxMessageBoxComponent } from './lib/fdx-message-box/fdx-message-box.component';
import { ColpaginationComponent } from './colpagination/colpagination.component'

const routes = [
      {path: '', component: HomeComponent},
      //{path: 'details', component: DetailsComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FinputComponent,
    FtableComponent,
    OrderPipePipe,
    FdxDataTableComponent,
    PageoneComponent,
    PagetwoComponent,
    FdxSimpleTableComponent,
    FdxMessageBoxComponent,
    ColpaginationComponent
    
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
    
      
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
