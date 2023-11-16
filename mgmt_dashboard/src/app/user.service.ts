import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/api/v1'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/getUser`);
  }

  createUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/postUser`, user);
  }


  // searchUsers(query: string): Observable<any[]> {
  //   const url = `${this.apiUrl}/users/search?query=${query}`; // Adjust the endpoint based on your API design
  //   return this.http.get<any[]>(url).pipe(
  //     catchError(this.handleError)
  //   );
  // }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError('Something went wrong, please try again later.');
  }

  generateUserReport(id: string): Observable<any> {
    // Assuming your server has an endpoint for generating user reports
    const url = `${this.apiUrl}/users/${id}`;
    return this.http.post<any>(url, {});
  }
}
