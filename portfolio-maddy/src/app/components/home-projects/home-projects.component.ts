import { Component } from '@angular/core';

@Component({
  selector: 'app-home-projects',
  templateUrl: './home-projects.component.html',
  styleUrls: ['./home-projects.component.css'],
})
export class HomeProjectsComponent {
  public bracketLeft: string = '{';
  public bracketRight: string = '};';

  public projects = [
    {
      title: '"SDG - Website"',
      typeOfProject: '"Schoolwork by order of the Green Office"',
      techstack:
        '"Typescript", "NodeJs/Express", "Sequelize/MySQL", "Angular", "Mocha/Chai"',
      img1: '../../../assets/sdg-website/controller.png',
      img2: '../../../assets/sdg-website/home.png',
      img3: '../../../assets/sdg-website/post.png',
      stateOfProject: 'Finished',
    },
    {
      title: '"Weather app"',
      typeOfProject: '"Personal project to learn C#"',
      techstack: '"C#", ".NET", "WinForm"',
      img1: '../../../assets/weatherapp/form.png',
      img2: '../../../assets/weatherapp/app.png',
      img3: '../../../assets/weatherapp/weatherdata.png',
      stateOfProject: 'In Progress...',
    },
  ];
}
