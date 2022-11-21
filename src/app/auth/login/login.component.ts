import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login!:FormGroup 

  constructor( private fb:FormBuilder,
    ) { }

  ngOnInit(): void {
    this.loginfun()
  }
 
  loginfun(){
    this.login=this.fb.group({
      email:[],
      password:[]
    })

  }
  
  loginfun1(){
    console.log(this.login.value)
  }
 

}
