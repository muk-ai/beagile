import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInWithGoogleButtonComponent } from './sign-in-with-google-button.component';

describe('SignInWithGoogleButtonComponent', () => {
  let component: SignInWithGoogleButtonComponent;
  let fixture: ComponentFixture<SignInWithGoogleButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInWithGoogleButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInWithGoogleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
