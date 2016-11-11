import {Component, OnInit, Inject} from '@angular/core';
import {FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('Nancy', Validators.required),
  });
  get name(): any { return this.form.get('name'); }
  ngOnInit() {
  }
}
