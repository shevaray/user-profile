import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HTTP_URL } from '../enums/requests.enum';

@Injectable({
  providedIn: 'root'
})
export class AllServicesService {

  constructor(
    private http: HttpClient
  ) { }

   listEmployees(){
    return this.http.get(
      environment.baseURL+HTTP_URL.listUsers
    )
   }
}
