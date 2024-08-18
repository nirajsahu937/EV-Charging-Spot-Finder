// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { UserRegisterComponent } from './user-register.component';

// describe('UserRegisterComponent', () => {
//   let component: UserRegisterComponent;
//   let fixture: ComponentFixture<UserRegisterComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [UserRegisterComponent]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(UserRegisterComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserRegisterComponent } from './user-register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UserRegisterComponent', () => {
  let component: UserRegisterComponent;
  let fixture: ComponentFixture<UserRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserRegisterComponent],
      imports: [FormsModule, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Additional tests can be added here
});

