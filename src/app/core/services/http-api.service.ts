/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

// import { environment } from '@env/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = environment.baseurl;
  onlogin: any;
  onLogin: any;

  constructor(private http: HttpClient) {}

  get<T>(endpoint: string, params?: HttpParams): Observable<T> {
    const url = `${this.apiUrl}/${endpoint}`;
    const options = { params };
    return this.http.get<T>(url, options).pipe(retry(2));
  }

  post<T>(endpoint: string, body: any, queryParams?: any): Observable<T> {
    const url = `${this.apiUrl}/${endpoint}`;

    // Create headers and handle the body as before
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    // Append query parameters if provided
    const params = queryParams ? { params: new HttpParams({ fromObject: queryParams }) } : {};

    return this.http.post<T>(url, body, { headers, ...params }).pipe(
      retry(2),
      catchError((error) => {
        console.error('Error response from server:', error);
        return throwError(error);
      }),
    );
  }

  // patch<T>(endpoint: string, id: number, body: any): Observable<T> {
  //   const url = `${this.apiUrl}/${endpoint}`;
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //   });
  //   return this.http.patch<T>(url, body, { headers }).pipe();
  // }

  // patch<T>(endpoint: string,body: any): Observable<T> {
  //   const url = `${this.apiUrl}/${endpoint}`;
  //   // const headers = new HttpHeaders({
  //   //   'Content-Type': 'application/json',
  //   // });{headers}
  //   return this.http.patch<T>(url, body,).pipe(
  //     catchError((error) => {
  //       console.error('Error response from server:', error);
  //       return throwError(error);
  //     })
  //   );
  // }

  patch<T>(endpoint: string, body: any): Observable<T> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.patch<T>(url, body).pipe(
      catchError((error) => {
        console.error('HTTP Error:', error);
        // You can handle the error here, show an error message to the user, or rethrow it.
        return throwError('An error occurred while making the PATCH request.');
      }),
    );
  }

  put<T>(endpoint: string, body: any): Observable<T> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.put<T>(url, body).pipe();
  }

  delete<T>(endpoint: string, data: any): Observable<T> {
    const url = `${this.apiUrl}/${endpoint}`;
    const options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: data,
    };

    return this.http.request<T>('delete', url, options);
  }
}
