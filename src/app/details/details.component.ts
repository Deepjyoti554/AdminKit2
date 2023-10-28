import { Component } from '@angular/core';
import { FormService } from '../form.service';

interface User {
  id?: number,
  name: string,
  email: string,
  password: number
}


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  displayData: Array<User> = []

  constructor(private detailService: FormService) { }

  ngOnInit(): void {
    let userData = this.detailService.getUser()
    console.log(userData);
    this.displayData.push(...userData)
  }
}
