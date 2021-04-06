import { Component, OnInit } from '@angular/core';
 import { FormBuilder } from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  info: any;

  constructor(private formBuilder: FormBuilder) {
    this.info = this.formBuilder.group({
      fname: '',
      lname: '',
      email: '',
      contact: '',
      city:''
    })
   }
   onSubmit(values: any){
    console.warn("Form Submit", values)
    }

  ngOnInit(): void {
  }

}
