import { Component } from "@angular/core";


@Component({
  selector: 'app-project-card',
  templateUrl: 'project-card.component.html',
  styleUrls: ['project-card.component.css']
}

)
export class ProjectCardComponent{
  Project: any = {
    "Id": 1,
    "Name": "This Website!",
    "Langs": "Angular",
    "Year": 2022,
    "Desc": "Temp"
  }
}
