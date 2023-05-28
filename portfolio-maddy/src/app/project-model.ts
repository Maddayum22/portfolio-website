export interface Project {
  id: number;
  title: string;
  typeOfProject: string;
  techstack: string;
  img1: string;
  img2: string;
  img3: string;
  stateOfProject: string;
  about: string;
  responsibilities: string;
  github: string;
  collaborators: string;
}

export const projects = [
  {
    id: 1,
    title: '"SDG - Website"',
    typeOfProject: '"Schoolwork HVA the Green Office"',
    techstack:
      '"Typescript", "NodeJs/Express", "Sequelize/MySQL", "Angular", "Mocha/Chai"',
    img1: '../../../assets/sdg-website/controller.png',
    img2: '../../../assets/sdg-website/home.png',
    img3: '../../../assets/sdg-website/post.png',
    stateOfProject: 'Finished',
    about: `The Sustainable Development Goals (SDGs), also known as the Global Goals, were adopted by the United Nations in 2015 as a universal call to action to 
    eradicate poverty, preserve the environment, and ensure that all people can experience peace and prosperity by 2030. These goals hold particular significance for 
    students, which is why the HVA Green Office has approached us for assistance in fostering greater student engagement with the world of SDGs.
    <br><br>
    With this objective in mind, three fellow students and I brainstormed ways to motivate students like ourselves. Eventually, 
    we decided to create a forum-like website that features concise posts, SDG information, and updates. Our unique selling point is the "Post Quiz" functionality, 
    where students can share their SDG projects or pose questions while incorporating quizzes. This allows other students to answer the questions and provide feedback
    on their respective projects.
      `,
    responsibilities: `
      • Server setup, the base of the server and later the configuration to easily switch between two databases, one that uses an ORM and one that uses SQL queries.
      <br>
      • The base OOP structure, Routing, Server setup, layers and classes.
      <br>
      • The posts structure, from creating a post, to getting all the posts etc.
      <br>
      • The session authentication and creation. Both the cookie management and saving the info in a database.
      <br>
      • Testing for post and session structure.
      <br>
      • Database configuration and other database management.
      <br>
      • Creating a post, Post feed, News feed and small other FrontEnd work.
      <br>
      • Setup for sequelize models.
      <br>
      • Bug fixing and helping other with their code.`,
    github: 'https://github.com/Maddayum22/SDG-Website',
    collaborators: '"Rowen Zaal", "Sven Molenaar", "William Nguyen"',
  },
  {
    id: 2,
    title: '"Weather app"',
    typeOfProject: '"Personal project to learn C#"',
    techstack: '"C#", ".NET", "WinForm"',
    img1: '../../../assets/weatherapp/form.png',
    img2: '../../../assets/weatherapp/app.png',
    img3: '../../../assets/weatherapp/weatherdata.png',
    stateOfProject: 'In Progress...',
    about: `After starting with Python and learning Typescript at school, I felt the desire to expand my knowledge of programming languages. 
    As a first step, I delved into C++ and created some games to familiarize myself with Visual Studio. I found C++ to be enjoyable and it ignited 
    my passion to explore even more languages. That's when I became interested in learning C#.
    <br><br>
    Not too long ago, I developed a small weather app that utilized an API and ran in the console. 
    This experience sparked the idea of recreating the app using C# and incorporating a GUI library to build a fully-fledged application. 
    After conducting some research, I discovered that WinForm provided an easy starting point for this endeavor. Currently, I am still working on this project, 
    and I will provide further updates as soon as possible.`,
    responsibilities: `
    • Project setup in C#/.NET.
      <br>
    • Setting up API connection and request.
      <br>
    • Creating a simple GUI using WinForm.
      <br>`,
    github: 'https://github.com/Maddayum22/weather-app',
    collaborators: '"Personal Project"',
  },
  {
    id: 2,
    title: '"Small Practice Projects"',
    typeOfProject: '"Small projects to learn to code"',
    techstack: '"Python"',
    img1: '../../../assets/small-projects/code1.png',
    img2: '../../../assets/small-projects/code2.png',
    img3: '../../../assets/small-projects/code3.png',
    stateOfProject: 'Finished for now.',
    about: `When I embarked on my coding journey in 2022, I began by immersing myself in Python. Initially, I worked on small console applications and 
    experimented with simple GUI and Turtle apps. While these projects may have been relatively straightforward, they ignited a deep sense of motivation
     within me to further develop my coding skills.
    <br><br>
    These early projects served as a solid foundation for observing the evolution of my coding abilities. What started as small console 
    apps gradually paved the way for tackling more complex challenges, such as developing complete backend web APIs. Witnessing the progression 
    from basic console apps to advanced web development was a testament to my growing expertise and encouraged me to delve deeper into the world of coding.
    <br><br>
    As I transitioned from simple Python projects to more ambitious undertakings, I discovered the limitless possibilities that coding offered. 
    The process of continuously honing my skills and exploring new horizons became an exhilarating journey, propelling me towards the pursuit of 
    even greater coding feats.`,
    responsibilities: `
    • Project setup using Python.
      <br>
    • Installing libraries and other imports.
      <br>
    • Learning to code.
      <br>`,
    github: 'https://github.com/Maddayum22/small-python-projects',
    collaborators: '"Personal Project"',
  },
];
