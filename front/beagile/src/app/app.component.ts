import { Component } from "@angular/core";

import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";
import { HttpClient } from "@angular/common/http";

import { environment } from "src/environments/environment";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(public afAuth: AngularFireAuth, private http: HttpClient) {}

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  request(user: firebase.User) {
    user.getIdToken().then(idToken => {
      const url = `${environment.apiOrigin}/api/v1/organizations/org_id`;
      const options = {
        headers: {
          Authorization: idToken
        }
      };
      this.http.get(url, options).subscribe(response => console.log(response));
    });
  }
}
