import { Component, OnInit } from '@angular/core';
import { Emitters } from 'src/app/emitters/emitters';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})


export class NavComponent implements OnInit {
  isShowing = true;
  authenticated = false;

  constructor() {

  }

  ngOnInit(): void {
    Emitters.authEmitter.subscribe(auth => {
      this.authenticated = auth


    })
  }


  toggleSidenav() {
    this.isShowing = !this.isShowing;
  }

  callMethods() {
    this.toggleSidenav();
  }


}
