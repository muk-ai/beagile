import { Component } from "@angular/core";

import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(public afAuth: AngularFireAuth) {}

  signIn() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  signOut() {
    this.afAuth.auth.signOut();
  }
}
