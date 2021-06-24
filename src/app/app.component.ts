import { Component } from '@angular/core';
import { Emitters } from './emitters/emitters';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudcoder';
  isShowing = true;
  authenticated = false;

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    Emitters.authEmitter.subscribe(auth => {
      this.authenticated = auth


    })
  }

  logout() {
    localStorage.removeItem('user')
    this.router.navigate(['/'])

    this.authenticated = false
  }

  toggleSidenav() {
    this.isShowing = !this.isShowing;
  }

  callMethods() {
    this.toggleSidenav();
  }
}
