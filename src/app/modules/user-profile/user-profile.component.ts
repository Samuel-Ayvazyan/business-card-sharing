import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserService } from 'src/app/shared/services/user/user.service';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  frm: FormGroup;
  user: any;

  constructor(fb: FormBuilder, public auth: AuthService, public uService: UserService) {
    this.frm = fb.group({
      displayName: ['', Validators.required],
      position: ['', Validators.required],
      company: ['', Validators.required],
      contact_email: ['', Validators.required],
      phone: ['', ],
      address: ['', ],
      website: ['', ],
      uid: ['', ],
    });
  }

  ngOnInit() {
    this.auth.user.subscribe( user =>{
      delete user.email;
      delete user.photoURL;
      this.user = user;
      console.log(user);
      this.frm.setValue(user);
    })
  }

  onUpdate() {
    this.uService.updateUser(this.user.uid, this.frm.value).then( () =>{
      this.frm.markAsPristine();
    })
  }
}
