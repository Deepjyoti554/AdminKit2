import { Injectable } from '@angular/core';

interface User{
  id?: number,
  name: string,
  email: string,
  password: number
}

@Injectable({
  providedIn: 'root'
})
export class FormService{

  userArray: Array<User> = []
  
  constructor() { }
  
  count: number = 0;
  addUser(user: User): void {
    this.count++;
    user.id = this.count;
    this.userArray.push(user);
    localStorage.setItem('userArray', JSON.stringify(this.userArray));
    // console.log("id: ", JSON.stringify(user));
  }
  
  getUser(): User[] {
    let userData = localStorage.getItem('userArray');
    let users: User[] = [];
  
    if (userData !== null) {
      users = JSON.parse(userData);
    }
  
    return users;
  }
}
