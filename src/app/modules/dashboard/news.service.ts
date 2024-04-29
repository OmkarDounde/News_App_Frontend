/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/http-api.service';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private apiService: ApiService, private router: Router) {}

  getAllCountry(): Observable<any> {
    return this.apiService.get<any>('exec?sheet=Sheet1');
  }
}
