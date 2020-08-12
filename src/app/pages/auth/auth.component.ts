import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  signInForm: FormGroup;
  constructor(public authService: AuthService, private router: Router) {
    document.title = 'Felipe 0liveira - Manager/Auth (Win98)';
    this.signInForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  ngOnInit(): void {}

  async submit() {
    try {
      if (this.signInForm.valid) {
        await this.authService.signIn(this.signInForm.value);
        this.router.navigate(['/manager/dashboard']);
      }
    } catch (error) {
      alert(`${error.code}\n\n${error.message}`);
    }
  }
}
