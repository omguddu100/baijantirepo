import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,Validators } from '@angular/forms';
import { first } from 'rxjs';
import { AuthService} from '../services/auth.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login!:FormGroup 

  constructor( 
    private fb:FormBuilder,
    private authApi:AuthService
    ) { }

  ngOnInit(): void {
    this.loginformInti();
    this.authApi.getProduct().subscribe(res=>{
     // console.log(res)
    })
  }

 
  loginformInti(){
    this.login=this.fb.group({
      email:['manish@mobilejunction.com'],
      password:['12admin@1234@']
    })
  }
   obj=
    {
      "email":"manish@mobilejunction.com",
      "password":"12admin@1234@"
    }
  loginfun(){
    this.authApi.login(this.login).pipe(first()).subscribe(data=>{
     console.log('Sucess status',data)
    },error=>{
      console.error('error status',error)
    })

  }
 

 

}
