import { Component, OnInit } from '@angular/core';
import { AuthService} from '../services/auth.service'

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {

  constructor(private authApi:AuthService) { }

  ngOnInit(): void {
    this.authApi.getProduct().subscribe(res=>{
      console.log(res)
    })
  }

}
