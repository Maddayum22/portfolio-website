import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectListitemComponent } from './project-listitem.component';

describe('ProjectListitemComponent', () => {
  let component: ProjectListitemComponent;
  let fixture: ComponentFixture<ProjectListitemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectListitemComponent]
    });
    fixture = TestBed.createComponent(ProjectListitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
