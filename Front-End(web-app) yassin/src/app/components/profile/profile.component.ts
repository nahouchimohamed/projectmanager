import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../sign-up/token.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 
  currentUser: any;
  
  form=false;
  errorMessage1="";

  errorMessage="";
  constructor( private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    
    this.currentUser = this.tokenStorage.getUser();


    
  }
  
 
}

