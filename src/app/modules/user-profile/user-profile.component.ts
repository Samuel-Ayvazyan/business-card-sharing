import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  frm: FormGroup;

  constructor(fb: FormBuilder) {
    this.frm = fb.group({
      name: ['', Validators.required],
      position: ['', Validators.required],
      contact_email: ['', Validators.required],
      phone: ['', ],
      address: ['', ],
      website: ['', ],
    });
  }

  ngOnInit() {
  }

  onUpdate() {
    
  }
}
