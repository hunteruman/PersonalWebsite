import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SideNavComponent } from './home/side-nav/side-nav.component';
import { HomeComponent } from './home/home.component';
import { ProjectCardComponent } from './home/project/project-card/project-card.component';
import { ProjectListComponent } from './home/project/project-list/project-list.component';
import { PortfolioService } from './services/portfolio.service';

/*

//Create PageNotFound Component

const appRoutes: Routes = [
  {path: '**', component: PageNotFound}
]
*/

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HomeComponent,
    ProjectCardComponent,
    ProjectListComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
    ])
  ],
  providers: [
    PortfolioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
