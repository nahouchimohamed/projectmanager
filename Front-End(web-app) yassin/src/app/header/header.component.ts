import { Component, OnInit ,Input} from '@angular/core';

import { TokenStorageService } from "../components/sign-up/token.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() deviceXs: boolean;

  isLoggedIn = false;
  professionnel=false;
  user=false;
  admin:boolean;
  empty1=false
  empty=false
  id:string
  email:string
  emailnotification:any
  idnotification:any
  x=0
  y=0
  
    constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    this.admin = this.tokenStorageService.getUser().admin
    if (this.admin==true){
      this.professionnel=true
      this.user=false;

    }else if (this.admin==false){
      this.user=true
      this.professionnel=false;


    }
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();


    }
    this.id = this.tokenStorageService.getUser().id;
    this.email = this.tokenStorageService.getUser().email;


 
   
    
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.href =    ""

  }

}
