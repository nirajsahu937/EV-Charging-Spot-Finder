// // import { Component } from '@angular/core';

// // @Component({
// //   selector: 'app-user-login',
// //   standalone: true,
// //   imports: [],
// //   templateUrl: './user-login.component.html',
// //   styleUrl: './user-login.component.scss'
// // })
// // export class UserLoginComponent {

// // }

// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-user-login',
//   templateUrl: './user-login.component.html',
//   styleUrls: ['./user-login.component.scss']
// })
// export class UserLoginComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../shared/models/user.model';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent {
  user: User = new User();
  errorMessage: string = '';

  constructor(private userService: UserService, private router: Router) { }

  loginUser(): void {
    this.userService.loginUser(this.user).subscribe(
      response => {
        console.log('Login successful', response);
        // Redirect to dashboard or home
        this.router.navigate(['/dashboard']);
      },
      error => {
        this.errorMessage = 'Invalid credentials. Please try again.';
      }
    );
  }
}

