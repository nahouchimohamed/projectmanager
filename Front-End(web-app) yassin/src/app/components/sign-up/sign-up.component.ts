import { Component, OnInit } from '@angular/core';
import { AuthService } from './aut1.component';
import { Admin } from './Admin.component';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MustMatch} from "../../Validators/mustMuch"
 

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  registerForm: FormGroup;
  submitted1 = false;
  role2="";
  isClient = false ;
  isPro = false ;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  Admin:Admin[];
  selectedOption:String;
  loading=false
  Admin2:Boolean

  constructor(private formBuilder: FormBuilder,private authService: AuthService) { }

 ngOnInit() {
 
this.registerForm = this.formBuilder.group({
  Admin: ['', Validators.required],
  Cin: ['', [ Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(8) ,Validators.maxLength(8)]],
  team: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(8), Validators.pattern("^[a-zA-Z ]*$")]],

  FirstName: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(8), Validators.pattern("^[a-zA-Z ]*$")]],
  LastName: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(8), Validators.pattern("^[a-zA-Z ]*$")]],
  // validates date format yyyy-mm-dd
  phone: ['', [ Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(8) ,Validators.maxLength(8)]],
  email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
  password: ['', [Validators.required, Validators.minLength(6)]],
  password2: ['', Validators.required],

},{
  validator: MustMatch('password', 'password2')
}    );
}
    // convenience getter for easy access to form fields
   get y()  { return this.registerForm.controls; }
 
  
    onSubmit1() {
console.log(this.selectedOption)
      this.submitted1 = true;
      if (this.registerForm.invalid) {
          return;
      }        
    
      this.loading = true;

     

      const { Cin,team,Admin,FirstName, LastName,phone,email, password, password2} = this.registerForm.value;
if (this.selectedOption==="Oui"){
  this.Admin2=true
}else if (this.selectedOption==="Non"){
  this.Admin2=false

}
      this.authService.register(this.Admin2,Cin,team,FirstName, LastName,phone,email, password, password2).subscribe(
        data => {
          this.loading = false;

          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          
        },
        err => {
          this.loading = false;

          this.isSignUpFailed = true;

          this.errorMessage = err.error.email;
        }
      );
   
  }


   }
