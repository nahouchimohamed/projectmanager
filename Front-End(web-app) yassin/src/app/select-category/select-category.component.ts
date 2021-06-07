import { Component, OnInit } from '@angular/core';
import { Admin } from '../components/sign-up/Admin.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {clientpost} from "./kita.component"
import { DomSanitizer } from "@angular/platform-browser";

import { TokenStorageService } from '../../app/components/sign-up/token.component';
class ImageSnippet {
  constructor(public src: string, public file: File) {}
}
@Component({
  selector: 'app-select-category',
  templateUrl: './select-category.component.html',
  styleUrls: ['./select-category.component.css']
})
export class SelectCategoryComponent implements OnInit {
  projet: FormGroup;
  
role1="";
errorMessage="";
  submitted=false;
  loading=false
  isSuccessful=false;


base64: string = "Base64...";
  fileSelected?: File;
  imageUrl?: string;

  barWidth: string = "0%";
selectedOption1:String;

selectedOption:String;
selectedFile: ImageSnippet;

  constructor(private sant: DomSanitizer,private formBuilder: FormBuilder,private clientpost: clientpost,private tokenStorage: TokenStorageService ) { }

  ngOnInit(): void {
    this.projet = this.formBuilder.group({

      titre: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(8), Validators.pattern("^[a-zA-Z ]*$")]],
      categorie: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(8), Validators.pattern("^[a-zA-Z ]*$")]],
      team: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(8), Validators.pattern("^[a-zA-Z ]*$")]],
      comentair: ['', [Validators.required]],

      
  
  }, );

  
  
   
  }
  get f() { return this.projet.controls; }
 


  onSelectNewFile(elemnt: HTMLInputElement): void {
    if (elemnt.files?.length == 0) return;
    this.fileSelected = (elemnt.files as FileList)[0];
    this.imageUrl = this.sant.bypassSecurityTrustUrl(window.URL.createObjectURL(this.fileSelected)) as string;
    this.base64 = "Base64...";
  }
 
  onSubmit(){
this.submitted=true
if (this.projet.invalid) {
  return;
}
this.loading=true
let reader = new FileReader();
reader.readAsDataURL(this.fileSelected as Blob);
reader.onloadend = () => {
  this.base64 = reader.result as string;
  console.log(this.base64)
  const { titre,team,categorie,comentair} = this.projet.value;
  const token =this.tokenStorage.getToken()
  
  this.clientpost.create(titre,token,categorie,team,comentair,this.base64).subscribe(
  data => {
    console.log(data);
    this.loading=false

      this.isSuccessful = true;

  
  },
  err => {
    this.loading=false

    this.errorMessage = err.error;

  }
  );
  
    }
}

  

  

}
