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
    about: `The Sustainable Development Goals (SDGs), also known as the Global Goals, were adopted by the United Nations in 2015 
      as a universal call to action to end poverty, protect the planet, and ensure that by 2030 all people enjoy peace and prosperity. These goals are especially important
      for us students and this is why the HVA Green Office asked us to help make students more motivated to dive in the world of SDGs.
      <br><br>
      With this goal in mind, three other students and me started to think what students like us would find motivating. After a while we decided to make a forum-like website,
      containing small posts, sdg information and sdg news. Our unique selling point is the so called Post Quiz. Students can create a small post about their SDG project or question
      and add a quiz, so other students can answer questions and give feedback about their project!.
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
    about: `After starting with Python and learning Typescript at school, I started looking at expanding my language knowledge. At first I created some games using
    C++ to get to know Visual Studio a bit more. I really liked C++ and it made me excited to learn even more languages. That's when I wanted to learn C#.
    <br>
    A while ago I created a little weather app using an API that ran in the console. This gave me the idea to make the app again in C#, using a GUI library to really create an
    app. After some research I found WinForm to be an easy start. Right now this project is still in progress and I will update more when possible.`,
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
];
