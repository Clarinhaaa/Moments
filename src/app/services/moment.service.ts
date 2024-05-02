import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Moment } from '../interfaces/Moment';
import { Response } from '../interfaces/Response';

import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class MomentService {
  private apiUrl = `${environment.baseApiUrl}api/moments`;

  constructor(private http: HttpClient) {}

  getMoments(): Observable<Response<Moment[]>> {
    return this.http.get<Response<Moment[]>>(this.apiUrl);
  }

  getMoment(id: number): Observable<Response<Moment>> {
    return this.http.get<Response<Moment>>(`${this.apiUrl}/${id}`);
  }

  createMoment(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData);
  }
}
