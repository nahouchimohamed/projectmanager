import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../sign-up/aut1.component';
import { TokenStorageService } from '../sign-up/token.component';
import jwt_decode from "jwt-decode";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignINComponent implements OnInit {
  registerForm: FormGroup;
  submitted1=false
  isLoggedIn =false;
  isLoginFailed = false;
  errorMessage = '';
  errorMessage1 = '';

  roles="";
  loading=false
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService ,private formBuilder: FormBuilder) { }
 

  ngOnInit() {
   
      this.registerForm = this.formBuilder.group({

    
        email: ['', [Validators.required,  Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
        password: ['', [Validators.required, Validators.minLength(6)]],
     
    });
    }
    get y()  { return this.registerForm.controls; }


  onSubmit() {
    this.isLoggedIn = !!this.tokenStorage.getToken();

    this.submitted1=true
    if (this.registerForm.invalid) {
      return;
  }  
  console.log("aerq")

  this.loading = true;

    const { email, password } = this.registerForm.value;
    this.authService.login(email, password).subscribe(
      data => {
        this.loading = false;

        this.tokenStorage.saveToken(data.token); //token
        this.tokenStorage.saveUser(jwt_decode(data.token));
        console.log (data.token);        

       this.roles= this.tokenStorage.getUser().Role;

     

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().Role;
        window.location.href =    "/Home"
        




      },
      err => {
        this.loading = false;

        this.errorMessage = err.error.email;
        this.errorMessage1= err.error.password
        this.isLoginFailed = true;

      }
    );

  }

  reloadPage(): void {
    window.location.reload();
  }
}
