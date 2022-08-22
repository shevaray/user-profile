import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HTTP_URL } from "src/app/core/enums/requests.enum";
import { environment } from "src/environments/environment";


@Injectable({
  providedIn:'root'
})
export class AuthService {
  constructor(
    private http : HttpClient
  ){}

  signup(email: string, password:string){
    return  this.http.post(
      environment.baseURL+HTTP_URL.register ,
      {
        email: email,
        password: password,
        returnSecureToken:true
      }
      );
  }

  signIn(email:string, password:string){
    return  this.http.post(environment.baseURL+HTTP_URL.login,
    {
      email: email,
      password: password,
      returnSecureTo:true
    }
    );
  }

  // loggedIn(){
  //   return !!localStorage.setItem('token')
  // }

  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('user-email')
  }
}
