import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './top-nav/top-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TopNavComponent],
  imports: [CommonModule, MatToolbarModule, RouterModule],
  exports: [TopNavComponent],
})
export class LayoutModule {}
