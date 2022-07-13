import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IProject } from '../home/project/IProject.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http:HttpClient) { }

  getAllProjects(): Observable<IProject[]> {
    return this.http.get('data/projects.json').pipe(
      map(data => {
        const projectsArray: Array<IProject> = [];
        for (const id in data){
          if (data.hasOwnProperty(id)){
            projectsArray.push(data[id]);
          }
        }
        return projectsArray;
      })
    );
  }
}
