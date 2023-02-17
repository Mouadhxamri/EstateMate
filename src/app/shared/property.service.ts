import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Property} from '../model/property';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  private baseURL = 'http://localhost:8088/RE-XPERT/servlet/all';
  private addURL = 'http://localhost:8088/RE-XPERT/servlet/addprop';
  private getByIdURL = 'http://localhost:8088/RE-XPERT/servlet/getProperty';
  private updateURL = 'http://localhost:8088/RE-XPERT/servlet/updateProperty';
  private deleteURL = 'http://localhost:8088/RE-XPERT/servlet/Property/delete';
  private getByUserIdURL = 'http://localhost:8088/RE-XPERT/servlet/getPropertyByUser/1';
  private idUser  = 3;

  constructor(private httpClient: HttpClient) { }

  getPropertiesList(): Observable<Property[]>{
    return this.httpClient.get<Property[]>(`${this.baseURL}`);
  }

  createProperty(property: Property): Observable<Object>{
    return this.httpClient.post(`${this.addURL}`, property, {responseType: 'text'} );
  }

  getPropertyById(id: number): Observable<Property>{
    return this.httpClient.get<Property>(`${this.getByIdURL}/${id}`);
  }

  updateProperty(id: number, property: Property): Observable<Object>{
    return this.httpClient.put(`${this.updateURL}/${id}`, property, {responseType: 'text'});
  }

  deleteProperty(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.deleteURL}/${id}`, {responseType: 'text'});
  }
  getPropertiesByUserId(): Observable<Property[]>{
    return this.httpClient.get<Property[]>(`${this.getByUserIdURL}`);
  }
}
