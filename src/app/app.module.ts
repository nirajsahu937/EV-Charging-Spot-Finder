import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // Assuming you have a routing module
import { UserModule } from './user/user.module';
import { ChargingSpotModule } from './charging-spot/charging-spot.module';
import { SharedModule } from './shared/shared.module'; // Assuming you have a SharedModule

// NG ZORRO IMPORTS
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule} from 'ng-zorro-antd/button';
import { NzInputModule} from 'ng-zorro-antd/input';
import { NzLayoutModule} from 'ng-zorro-antd/layout';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent ,
    UserRegisterComponent,
    ChargingSpotListComponent ,
    ChargingSpotRegisterComponent
    // Add other component declarations here if needed
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,  // Define your routes inside the array or import from a separate file
    AppRoutingModule, // Import the routing module
    UserModule, // Import User module
    ChargingSpotModule, // Import ChargingSpot module
    SharedModule, // Import Shared module if any shared services/components are used

    NzSpinModule ,
    NzButtonModule,
    NzInputModule,
    NzLayoutModule

  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }


