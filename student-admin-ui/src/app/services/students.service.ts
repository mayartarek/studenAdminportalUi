import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Student } from '../models/api_models/student';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  private baseUrl = 'https://localhost:44343';
  constructor(private httpClient: HttpClient) {}
  getStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.baseUrl + '/Students');
  }
}
