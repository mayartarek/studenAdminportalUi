import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SearchPipe, Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [],
  imports: [CommonModule, Ng2SearchPipeModule],
  exports: [CommonModule],
})
export class SharedModule {}
