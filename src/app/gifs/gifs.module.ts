import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { GifsListComponent } from './components/gifs-list/gifs-list.component';



@NgModule({
  declarations: [
    HomeComponent,
    SearchBoxComponent,
    GifsListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class GifsModule { }
