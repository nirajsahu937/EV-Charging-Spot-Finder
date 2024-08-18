// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { UserLoginComponent } from './user-login.component';

// describe('UserLoginComponent', () => {
//   let component: UserLoginComponent;
//   let fixture: ComponentFixture<UserLoginComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [UserLoginComponent]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(UserLoginComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserLoginComponent } from './user-login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserLoginComponent', () => {
  let component: UserLoginComponent;
  let fixture: ComponentFixture<UserLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserLoginComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Additional tests can be added here
});
