import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/api_models/student';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
})
export class StudentsComponent implements OnInit {
  constructor(private studentservice: StudentsService) {}
  Students: Student[];
  displayColumns: string[] = [
    'First Name',
    'Last Name',
    'Date Of Birth',
    'Email',
    'Mobile',
    'Gender',
  ];

  ngOnInit(): void {
    this.studentservice.getStudents().subscribe(
      (res) => {
        this.Students = res;
        console.log(this.Students);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
