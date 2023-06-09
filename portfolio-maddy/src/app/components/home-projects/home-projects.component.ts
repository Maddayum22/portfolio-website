import { Component } from '@angular/core';
import { projects } from 'src/app/project-model';

@Component({
  selector: 'app-home-projects',
  templateUrl: './home-projects.component.html',
  styleUrls: ['./home-projects.component.css'],
})
export class HomeProjectsComponent {
  public bracketLeft: string = '{';
  public bracketRight: string = '};';

  public projects = projects;
}
