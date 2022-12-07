import { Component, OnInit } from '@angular/core';
import { AuthService} from "../../auth/services/auth.service"

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private AuthService:AuthService) { }

  ngOnInit(): void {
  }

  logout(){
   this.AuthService.signOut()
  }

}
