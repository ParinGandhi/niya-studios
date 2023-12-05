import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxMasonryModule } from 'ngx-masonry';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgxMasonryModule, BrowserAnimationsModule],
  exports: [RouterModule, NgxMasonryModule]
})
export class AppRoutingModule { }
