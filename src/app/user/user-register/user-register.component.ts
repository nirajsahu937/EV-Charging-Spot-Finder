// // import { Component } from '@angular/core';

// // @Component({
// //   selector: 'app-user-register',
// //   standalone: true,
// //   imports: [],
// //   templateUrl: './user-register.component.html',
// //   styleUrl: './user-register.component.scss'
// // })
// // export class UserRegisterComponent {

// // }

// // import { Component, OnInit } from '@angular/core';
// // import { UserService } from '../user.service';
// // import { User } from '../user.model';

// // @Component({
// //   selector: 'app-user-register',
// //   templateUrl: './user-register.component.html',
// //   styleUrls: ['./user-register.component.scss']
// // })
// // export class UserRegisterComponent implements OnInit {
// //   user: User = new User();

// //   constructor(private userService: UserService) { }

// //   ngOnInit(): void {
// //   }

// //   registerUser(): void {
// //     this.userService.registerUser(this.user).subscribe(() => {
// //       console.log('User registered successfully');
// //     });
// //   }
// // }

// import { Component } from '@angular/core';
// import { UserService } from '../user.service';
// import { User } from '../models/user.module';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-user-register',
//   standalone: true, // Ensure standalone is true
//   imports: [CommonModule, FormsModule],
//   templateUrl: './user-register.component.html',
//   styleUrls: ['./user-register.component.scss']
// })
// export class UserRegisterComponent {
//   user: User = new User();

//   constructor(private userService: UserService) { }

//   registerUser(): void {
//     this.userService.registerUser(this.user).subscribe(() => {
//       console.log('User registered successfully');
//     });
//   }
// }
import { Component } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent {
  user: User = new User();
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private userService: UserService) { }

  registerUser(): void {
    this.userService.registerUser(this.user).subscribe(
      response => {
        console.log('User registered successfully', response);
        this.successMessage = 'Registration successful!';
        this.errorMessage = '';
      },
      error => {
        this.successMessage = '';
        this.errorMessage = 'Registration failed. Please try again.';
      }
    );
  }
}
