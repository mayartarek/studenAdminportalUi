import { Component, OnInit } from '@angular/core';
import { OrderByPipe } from 'src/app/CustomPipes/order-by.pipe';
import { StudentsService } from 'src/app/shared/services/students.service';
import { Student } from '../models/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
})
export class StudentsComponent implements OnInit {
  constructor(private studentservice: StudentsService) {}
  Students: Student[];
  filterArray: Student[];
  displayColumns: string[] = [
    'First Name',
    'Last Name',
    'Date Of Birth',
    'Email',
    'Mobile',
    'Gender',
  ];
  page = 1;
  filterString: string;
  id?: number;
  pageSize = 9;

  ngOnInit(): void {
    this.studentservice.getStudents().subscribe(
      (res) => {
        this.Students = this.filterArray = res;
        console.log(this.Students);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
