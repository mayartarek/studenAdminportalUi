import { NgModule } from '@angular/core';

import { StudentsRoutingModule } from './students-routing.module';
import {
  NgbDatepicker,
  NgbDatepickerModule,
  NgbPaginationModule,
} from '@ng-bootstrap/ng-bootstrap';
import { OrderByPipe } from 'src/app/CustomPipes/order-by.pipe';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipe, Ng2SearchPipeModule } from 'ng2-search-filter';
import { StudentsComponent } from './students/students.component';
import { ViewStudentComponent } from './view_student/view-student/view-student.component';

@NgModule({
  declarations: [StudentsComponent, OrderByPipe, ViewStudentComponent],
  imports: [
    SharedModule,
    NgbDatepickerModule,
    StudentsRoutingModule,
    NgbPaginationModule,
    FormsModule,
    Ng2SearchPipeModule,
  ],
  bootstrap: [NgbPaginationModule],
})
export class StudentsModule {}
