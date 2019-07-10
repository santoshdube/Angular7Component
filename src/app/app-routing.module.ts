import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageoneComponent } from './pageone/pageone.component';
import { PagetwoComponent } from './pagetwo/pagetwo.component';
import { ColpaginationComponent } from './colpagination/colpagination.component'

const routes: Routes = [
  {path: 'Home', component: HomeComponent},
  {path: 'FindFlow', component: PageoneComponent},
  {path: 'MessagePanel', component: PagetwoComponent},
  {path: 'ColPagination', component: ColpaginationComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
