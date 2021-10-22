import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Student } from 'src/app/pages/students/models/student';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  private baseUrl = 'https://localhost:44343';
  constructor(private httpClient: HttpClient) {}
  getStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.baseUrl + '/Students');
  }
  getStudent(studentId: string) {
    return this.httpClient.get<Student>(
      this.baseUrl + '/Students/' + studentId
    );
  }
}
