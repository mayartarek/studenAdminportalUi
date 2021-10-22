import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { LayoutModule } from './layout/layout.module';
import { NgbModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentsModule } from './pages/students/students.module';

import { LoadingBarModule } from '@ngx-loading-bar/core';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoadingBarModule,
    NgbModule,
    FormsModule,
    LayoutModule,
    StudentsModule,
    LoadingBarModule,
    NgbToastModule,
    HttpClientModule,
    NgbToastModule,
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
