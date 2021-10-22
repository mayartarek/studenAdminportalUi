import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from 'src/app/shared/services/students.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Student } from '../../models/student';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
})
export class ViewStudentComponent implements OnInit {
  model: NgbDateStruct;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly studentServices: StudentsService
  ) {}
  studentId: string | null | undefined;
  student: Student = {
    id: '',
    lastName: '',
    dateOfBirth: '',
    firstName: '',
    email: '',
    mobile: '',
    profileImageUrl: '',
    address: {
      id: '',
      portalAddress: '',
      physicalAddress: '',
    },
    gender: {
      id: '',
      description: '',
    },
  };
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.studentId = params.get('id');
      if (this.studentId) {
        this.studentServices.getStudent(this.studentId).subscribe((resp) => {
          this.student = resp;
          console.log(this.student);
        });
      }
    });
  }
}
