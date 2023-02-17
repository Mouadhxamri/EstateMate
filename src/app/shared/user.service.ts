import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Property} from '../model/property';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private getByIdURL = 'http://localhost:8088/Dari/servlet/getUser';

  constructor(private httpClient: HttpClient) { }

  getUserById(id: number): Observable<User>{
    return this.httpClient.get<User>(`${this.getByIdURL}/${id}`);
  }
}
