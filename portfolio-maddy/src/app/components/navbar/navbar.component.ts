import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  public hamburgerMenu() {
    var x = document.getElementById('myTopnav');
    if (x!.className === 'topnav') {
      x!.className += ' responsive';
    } else {
      x!.className = 'topnav';
    }
  }
}
