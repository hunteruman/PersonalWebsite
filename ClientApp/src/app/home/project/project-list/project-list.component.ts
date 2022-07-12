import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  Projects: Array<any> = [
    {
      "Id": 1,
      "Name": "This Website!",
      "Langs": "Angular",
      "Year": 2022,
      "Desc": "Temp"
    },
    {
      "Id": 2,
      "Name": "Movie Magic",
      "Langs": "C++",
      "Year": 2021,
      "Desc": "Temp"
    },
    {
      "Id": 3,
      "Name": "RGB",
      "Langs": "HTML, CSS, Twine",
      "Year": 2018,
      "Desc": "Temp"
    },
    {
      "Id": 4,
      "Name": "Gon",
      "Langs": "Python",
      "Year": 2017,
      "Desc": "Temp"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
