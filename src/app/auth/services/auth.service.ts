import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http"
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject:BehaviorSubject<any>
  public currentUser: Observable<any>;

  constructor(
    private http:HttpClient,
    private router: Router
  ) { 
    this.currentUserSubject= new BehaviorSubject<any>(localStorage.getItem('Token'));
    this.currentUser=this.currentUserSubject.asObservable()
  
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

   url="http://localhost:8083/api/v1/login/login"
   restapi="https://dummyjson.com/products"

  login(data:any){
    return this.http.post<any>(this.url,data.value).pipe(map(loginRes=>{
      if(loginRes.success){
        localStorage.setItem('Token',JSON.stringify(loginRes))
        this.currentUserSubject.next(loginRes);
      }
      else{
       // localStorage.removeItem('Token')
      }
      return loginRes

    }))
  }



  public signOut(): void {
    localStorage.removeItem('Token');
    
      this.router.navigate(['/']);
    
  }


  getProduct(){
     return this.http.get(this.restapi)
  }


}
