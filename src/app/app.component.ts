import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'business-card-sharing';
  user: any;
  loading: boolean = true;
  constructor(public auth: AuthService) {
    this.auth.user.subscribe( user =>{
      this.user = user;
      this.loading = false;
    })
  }
}
