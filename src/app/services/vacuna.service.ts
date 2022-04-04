import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vacuna } from '../models/vacuna.model';
const baseUrl = 'http://localhost:8080/api/vacuna';

@Injectable({
  providedIn: 'root'
})
export class VacunaService {
  constructor(private http: HttpClient) { }
  getAll(): Observable<Vacuna[]> {
    return this.http.get<Vacuna[]>(baseUrl);
  }
}
