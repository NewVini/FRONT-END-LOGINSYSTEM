import { Component, OnInit } from '@angular/core';
import { Emitters } from 'src/app/emitters/emitters';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  forms: any = {
    email: '',
    password: ''
  }

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  logar() {
    this.loginService.execLogin(this.forms).subscribe(res => {
      console.log(res)

      localStorage.setItem('user', JSON.stringify(res))

      Emitters.authEmitter.emit(true)

      this.router.navigate(['/home'])

    },
      err => {
        Emitters.authEmitter.emit(false)
      }

    )
  }



}
