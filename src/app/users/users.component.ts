import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';

interface User {
  id?: number,
  name: string,
  email: string,
  password: number
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  displayData: Array<User> = []

  constructor(private formService: FormService) { }

  ngOnInit(): void {
    let userData = this.formService.getUser()
    console.log(userData);
    this.displayData.push(...userData)
  }

}
