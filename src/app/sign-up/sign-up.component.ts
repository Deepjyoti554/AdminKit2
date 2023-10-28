import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, FormControlName, FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormService } from '../form.service';

interface User{
  id?: number,
  name: string,
  email: string,
  password: number
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  formData: [] = []
  userForm!: FormGroup;

  constructor(private formService: FormService) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      "name": new FormControl(''),
      "email": new FormControl(''),
      "password": new FormControl('')
    });

  }
  
  submitForm()
  {
    // console.log("Auuuchh");
    let user: User = this.userForm.value;
    console.log("submitForm: " + user);
    this.formService.addUser(user);
    alert('Sign up successful!');
  }

}
