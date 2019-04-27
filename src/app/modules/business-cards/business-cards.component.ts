import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-business-cards',
  templateUrl: './business-cards.component.html',
  styleUrls: ['./business-cards.component.scss']
})
export class BusinessCardsComponent implements OnInit {
  users: any[];

  constructor(public srvUsers: UserService) { }

  ngOnInit() {
    this.srvUsers.getUsers().subscribe( data => {
      this.users = data;
    })
  }

}
