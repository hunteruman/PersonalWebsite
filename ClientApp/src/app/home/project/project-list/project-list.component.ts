import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { IProject } from '../IProject.interface';


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  Projects: Array<IProject>;

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.getAllProjects().subscribe(
      {next: data => {
        this.Projects=data;
        console.log(data);
      },
      error: error => {
        console.log(error);
      }}
    );
  }

}
