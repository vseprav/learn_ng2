import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input('title') title: string;
  @Input('id') id: number;

  constructor() {
  }

  ngOnInit() {
  }

}
