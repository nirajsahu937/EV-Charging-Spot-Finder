export class User {
    id: number;
    username: string;
    email: string;
    password: string;
    roles: string[];
  
    constructor(id: number = 0, username: string = '', email: string = '', password: string = '', roles: string[] = []) {
      this.id = id;
      this.username = username;
      this.email = email;
      this.password = password;
      this.roles = roles;
    }
  }
  