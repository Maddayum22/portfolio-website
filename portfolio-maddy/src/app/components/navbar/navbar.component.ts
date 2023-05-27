import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  public name1: string = '{Madelief van Slooten: ';
  public name2: string = 'Software Developer';
  public name3: string = '};';

  public hamburgerMenu() {
    var x = document.getElementById('myTopnav');
    if (x!.className === 'topnav') {
      x!.className += ' responsive';
    } else {
      x!.className = 'topnav';
    }
  }
}
