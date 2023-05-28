import { Component, Input, OnInit } from '@angular/core';
import { Project, projects } from 'src/app/project-model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
})
export class ProjectDetailComponent implements OnInit {
  public bracketLeft: string = '{';
  public bracketRight: string = '};';

  @Input() project?: Project;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getProject();
  }

  private getProject() {
    const id = Number(this.route.snapshot.paramMap.get('project'));
    projects.forEach((project) => {
      if (project.id === id) {
        this.project = project;
      }
    });
  }
}
