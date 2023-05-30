import { Injectable } from '@angular/core';
import { User } from './models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  NODE_API_SERVER = 'http://localhost:3002/users'

  constructor(private httpClient: HttpClient) {  }
  readUsers(): Observable<User[]> {

    return this.httpClient.get<User[]>(`${this.NODE_API_SERVER}`)
  }
  createUser(user: User): Observable<User> {

    return this.httpClient.post<User>(`${this.NODE_API_SERVER}`,user)

  }
}
