// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { ChargingSpotDetailComponent } from './charging-spot-register.component';

// describe('ChargingSpotDetailComponent', () => {
//   let component: ChargingSpotDetailComponent;
//   let fixture: ComponentFixture<ChargingSpotDetailComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [ChargingSpotDetailComponent]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(ChargingSpotDetailComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChargingSpotRegisterComponent } from './charging-spot-register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ChargingSpotRegisterComponent', () => {
  let component: ChargingSpotRegisterComponent;
  let fixture: ComponentFixture<ChargingSpotRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChargingSpotRegisterComponent ],
      imports: [ FormsModule, HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargingSpotRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
