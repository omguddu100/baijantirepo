import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http"
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpClient
  ) { }

   url="http://localhost:8083/api/v1/login/login"
   restapi="https://dummyjson.com/products"

  login(data:any){
    return this.http.post<any>(this.url,data.value).pipe(map(loginRes=>{
      if(loginRes.success){
        localStorage.setItem('Token',JSON.stringify(loginRes))
      }
      else{
       // localStorage.removeItem('Token')
      }
      return loginRes

    }))
  }

  getProduct(){
     return this.http.get(this.restapi)
  }
}
