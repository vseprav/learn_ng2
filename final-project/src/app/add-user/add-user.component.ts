import { Component, OnInit } from '@angular/core';
import { User }    from '../models/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})

export class AddUserComponent implements OnInit {

  model = new User(12, '', '');

  constructor() { }

  ngOnInit() {
  }

}
