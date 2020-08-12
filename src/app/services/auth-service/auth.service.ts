import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  Router,
} from '@angular/router';
import { SignUser } from 'src/app/interfaces/sign-user.interface';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  busy: boolean;
  constructor(private authentication: AngularFireAuth) {
    this.busy = false;
  }

  signIn(user: SignUser): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        this.busy = true;

        await this.authentication.signInWithEmailAndPassword(
          user.email,
          user.password
        );
        resolve();
      } catch (error) {
        reject(error);
      } finally {
        this.busy = false;
      }
    });
  }

  signOut = () => this.authentication.signOut();

  status(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.authentication.authState.subscribe(
        (user) => resolve(user !== null),
        (err) => reject(err)
      );
    });
  }
}

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivateChild {
  constructor(public authService: AuthService) {}
  async canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    try {
      return await this.authService.status();
    } catch (error) {
      console.log("You're not authenticated!\nRedirecting to Home...", error);
      window.location.href = '/';
      return false;
    }
  }
}
