import { inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { signInWithEmailAndPassword, getAuth, signInWithPopup } from 'firebase/auth';
import { User } from '../models/user.model';
import { GoogleAuthProvider } from 'firebase/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  auth = inject(AngularFireAuth);
  router = inject(Router);

  signIn(user: User) {
    return signInWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  get currentUser(): Observable<any> {
    return this.auth.authState;
  }

  getauth() {
    return getAuth();
  }

  async iniciarGoogle() {
    return await signInWithPopup(getAuth(), new GoogleAuthProvider());
  }

  routerLink(url: string) {
    return this.router.navigate([url]);
  }

}
