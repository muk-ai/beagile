import { Component, OnInit } from "@angular/core";

import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";

@Component({
  selector: "ba-sign-in-with-google-button",
  templateUrl: "./sign-in-with-google-button.component.html",
  styleUrls: ["./sign-in-with-google-button.component.scss"]
})
export class SignInWithGoogleButtonComponent implements OnInit {
  constructor(private afAuth: AngularFireAuth) {}

  ngOnInit() {}

  signIn() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
}
