// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { AdminDashboardComponent } from './admin-dashboard.component';

// describe('AdminDashboardComponent', () => {
//   let component: AdminDashboardComponent;
//   let fixture: ComponentFixture<AdminDashboardComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [AdminDashboardComponent]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(AdminDashboardComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AdminDashboardComponent', () => {
  let component: AdminDashboardComponent;
  let fixture: ComponentFixture<AdminDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashboardComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

