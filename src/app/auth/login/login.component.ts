import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { AuthService} from '../services/auth.service'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login!:FormGroup 
  returnUrl: any

  constructor( 
    private fb:FormBuilder,
    private authApi:AuthService,
    private router: Router,
    private route: ActivatedRoute,
  
    ) {
       
        if (this.authApi.currentUserValue) { 
          this.router.navigate(['/']);
         }
     }

  ngOnInit(): void {
    this.loginformInti();
    this.authApi.getProduct().subscribe(res=>{
     // console.log(res)
    })
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
  }

 
  loginformInti(){
    this.login=this.fb.group({
      email:['manish@mobilejunction.com'],
      password:['12admin@1234@']
    })
  }
   
  loginfun(){
    this.authApi.login(this.login).pipe(first()).subscribe(data=>{
     console.log('Sucess status',data)
    
     this.router.navigate([this.returnUrl]);
    },error=>{
      console.error('error status',error)
    })

  }
 

 

}
