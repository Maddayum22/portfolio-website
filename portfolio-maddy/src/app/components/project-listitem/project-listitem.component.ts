import { Component } from '@angular/core';
import { projects } from 'src/app/project-model';

@Component({
  selector: 'app-project-listitem',
  templateUrl: './project-listitem.component.html',
  styleUrls: ['./project-listitem.component.css'],
})
export class ProjectListitemComponent {
  public bracketLeft: string = '{';
  public bracketRight: string = '};';

  public projects = projects;
}
