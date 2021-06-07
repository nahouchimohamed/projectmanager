import { Component,ViewChild, OnInit ,AfterViewInit,Inject} from '@angular/core';
import { FormArray } from '@angular/forms';
import {jsPDF} from 'jspdf';
import { Admin } from "../components/sign-up/Admin.component";

import {TokenStorageService} from "../components/sign-up/token.component"
import autoTable, { Table } from 'jspdf-autotable';
import {clientpost} from "../select-category/kita.component"
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule  } from '@angular/forms';

import {MustMatch} from "../Validators/mustMuch"



export interface DialogData {
  Cin: Number;
  Firstname: string;
  Lastname: string;
  Admin:Boolean
  team: string;
  email: string;
  phone: Number;



}

@Component({
  selector: 'app-offre-details',
  templateUrl: './offre-details.component.html',
  styleUrls: ['./offre-details.component.css']
})
export class OffreDetailsComponent  implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  id=""
  empty=false
  empty1=false

  show1= [false]
  email=false;
  errorMessage="";
  x:String
  
  constructor( private tokenStorage: TokenStorageService,private clientpost: clientpost ,public dialog: MatDialog) { }

  tabledeuser:any  


  

  ngOnInit(): void {
   
      this.email = false;
console.log(this.email)
 
this.id = this.tokenStorage.getUser().id;
console.log(this.id)


    this.clientpost.getusers(this.email).subscribe(
      
      data => {

        this.tabledeuser = data;
        console.log(this.tabledeuser);

        if( this.tabledeuser.length===0 ){

          this.empty=true
           this.x= "Pas d'users"
        }

                    
      }
    
      
    );
  
   
   
   

  }
  non(id1) {
  this.show1[id1]=false

  }
  delete(id1) {
    const email = this.tabledeuser[id1].email

    this.clientpost.deleteuser(email).subscribe(
      data => {
        console.log(data);
        //this.ischangefailed=false;
    
        //this.isSuccessful = true;
        window.location.reload()
      },);
  }
  Delete(id1) {
    this.show1[id1]=true

  }
  openDialog(id1){
   const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
    width: '50%',
    height: "73%",

    data: {Lastname: this.tabledeuser[id1].Lastname,
      Cin: this.tabledeuser[id1].Cin,
      Firstname: this.tabledeuser[id1].Firstname,
      Admin: this.tabledeuser[id1].Admin,

      team: this.tabledeuser[id1].team,
      email: this.tabledeuser[id1].email,
      phone: this.tabledeuser[id1].phone,
    _id: this.tabledeuser[id1]._id,
  }
       
  });

  dialogRef.afterClosed().subscribe(data => {
    console.log(data);
     
     if (data.status==false){
      this.tabledeuser[id1].status=false
    }else    if (data.status==true){
      this.tabledeuser[id1].status=true
    }
  
 
   
  });
    
  };

  
  

}

@Component({
  
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./offre-details.component.css']

})

export class DialogOverviewExampleDialog implements OnInit{

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,private clientpost: clientpost,private tokenStorage: TokenStorageService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private formBuilder: FormBuilder) {}
    update: FormGroup;
    submitted1=false
    selectedOption:String;
    Admin:Admin[];

    status2=0
    descreption1=false
    Edit1=false
    delete1=false
    showi1=false;
    isSuccessful=false
    empty=false
    x=""
    Admin2:Boolean
    email=""
    id2=""
    errorMessage=""
    isSignUpFailed=false
  onNoClick(): void {
    this.dialogRef.close();

  }
  ngOnInit(): void {

      


    
    

  this.update = this.formBuilder.group({
    Admin: [this.data.Admin,[Validators.required]],
    Cin: [this.data.Cin, [ Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(8) ,Validators.maxLength(8)]],
    team: [this.data.team, [Validators.required,Validators.minLength(3),Validators.maxLength(8), Validators.pattern("^[a-zA-Z ]*$")]],
    Firstname: [this.data.Firstname, [Validators.required,Validators.minLength(3),Validators.maxLength(8), Validators.pattern("^[a-zA-Z ]*$")]],
    Lastname: [this.data.Lastname, [Validators.required,Validators.minLength(3),Validators.maxLength(8), Validators.pattern("^[a-zA-Z ]*$")]],
    // validates date format yyyy-mm-dd
    phone: [this.data.phone, [ Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(8) ,Validators.maxLength(8)]],
    email: [this.data.email, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    password: ['', [ Validators.minLength(6)]],
    password2: ['', ],
  
  },{
    validator: MustMatch('password', 'password2')
  }    );
  
 
  }
  
  get y() { return this.update.controls; }
  onSubmit(){
    this.submitted1=true
    if (this.update.invalid) {
      return;
  }
  const token =this.tokenStorage.getToken();
  const {  Cin,team,Firstname, Lastname, phone,email,password} = this.update.value;
  console.log(team)
  if (this.selectedOption==="Oui"){
    this.Admin2=true
  }else if (this.selectedOption==="Non"){
    this.Admin2=false
  
  }
this.clientpost.Updateuser( token,this.Admin2, Cin,team,Firstname,Lastname, phone,email,password).subscribe(
  data => {
  

  this.isSuccessful = true;
  window.location.reload()

  },
err =>{

}
);

}

 
  

  deletepost(){
 
  
}
showi(){
  this.showi1=!this.showi1
}

}







