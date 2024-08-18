// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { ChargingSpotListComponent } from './charging-spot-list.component';

// describe('ChargingSpotListComponent', () => {
//   let component: ChargingSpotListComponent;
//   let fixture: ComponentFixture<ChargingSpotListComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [ChargingSpotListComponent]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(ChargingSpotListComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChargingSpotListComponent } from './charging-spot-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ChargingSpotListComponent', () => {
  let component: ChargingSpotListComponent;
  let fixture: ComponentFixture<ChargingSpotListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChargingSpotListComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargingSpotListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
