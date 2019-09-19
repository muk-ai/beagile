import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SignInModule } from "./commons/sign-in/sign-in.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBE6-TKF0vPwC7B0OxXKrtVvNJZzf22nsQ",
      authDomain: "beagile.firebaseapp.com",
      databaseURL: "https://beagile.firebaseio.com",
      projectId: "beagile",
      storageBucket: "beagile.appspot.com",
      messagingSenderId: "256420537000"
    }),
    AngularFireAuthModule,
    SignInModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
