import { Component } from "@angular/core";

import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(public afAuth: AngularFireAuth) {}

  signOut() {
    this.afAuth.auth.signOut();
  }
}
