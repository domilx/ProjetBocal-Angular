import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Output() isLogout = new EventEmitter<void>()
  constructor(public auth: AuthService) { }


  ngOnInit(): void {

  }

}
