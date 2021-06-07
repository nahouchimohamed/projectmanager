import { Component, OnInit,Inject } from '@angular/core';
import {TokenStorageService} from "../../components/sign-up/token.component"
import {clientpost} from "../../select-category/kita.component"
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Admin } from '../sign-up/Admin.component';

export interface DialogData2 {
  comentair: string;
  projetid: string;
  description: string;
  email: string;
  date: string;
  date2: string;
  mat:string,
  matstat:Boolean
etat:Boolean
_id:String


}
export interface DialogData {
  comentair: string;
  team: string;
  titre: string;
  categorie: string;
etat:Boolean
image:String
_id:String


}
@Component({
  selector: 'app-portofolio',
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.css']
})
export class PortofolioComponent implements OnInit {
  team:any
  x:String 
  image:any
  empty=false
  id1:string
  show1= [false]
  isSuccessful=[false]
  
  email="";
  errorMessage="";
  tabledeprojet:any  
  status=true
  professionnel=false;
  user=false;
  isLoggedIn=false;
  admin:Boolean;
  constructor(private sanitizer:DomSanitizer,private tokenStorage: TokenStorageService,private clientpost: clientpost,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorage.getToken();

    this.team = this.tokenStorage.getUser().team;


    this.admin = this.tokenStorage.getUser().admin
if (this.admin==true){
  this.professionnel=true
  this.user=false;
  this.clientpost.getallprojet(this.admin).subscribe(
      
    data => {
     

      this.tabledeprojet = data;
     this.image=this.sanitizer.bypassSecurityTrustResourceUrl(this.tabledeprojet.image);

      if( this.tabledeprojet.length===0 ){
        console.log(this.tabledeprojet);

        this.empty=true
         this.x= "no projets"
      }

      console.log(data)

    }
  
    
  );

}else if (this.admin==false){
  this.user=true
  this.professionnel=false;
  this.clientpost.getprojetbyteam(this.team).subscribe(
      
    data => {
     

      this.tabledeprojet = data;
     this.image=this.sanitizer.bypassSecurityTrustResourceUrl(this.tabledeprojet.image);

      if( this.tabledeprojet.length===0 ){
        console.log(this.tabledeprojet);

        this.empty=true
         this.x= "no projets"
      }

      console.log(data)

    }
  
    
  );


}
    
    

}

non(id1) {
  this.show1[id1]=false

  }
  delete(id1) {
    const id = this.tabledeprojet[id1]._id
console.log(id)
    this.clientpost.deleteproject(id).subscribe(
      data => {
        console.log(data);
    
        this.isSuccessful = [true];
        window.location.reload()
      },);
  }
  Delete(id1) {
    this.show1[id1]=true

  }
openDialog(id){
  console.log(id)
console.log(this.show1[id])
console.log(this.tabledeprojet[id].code)
const dialogRef = this.dialog.open(DialogOverviewExampleDialog1, {
  width: '90%',
  height: "90%",

  data: {titre: this.tabledeprojet[id].titre,
    comentair: this.tabledeprojet[id].comentair,
    team: this.tabledeprojet[id].team,
    etat: this.tabledeprojet[id].etat,

    image: this.tabledeprojet[id].image,
    categorie: this.tabledeprojet[id].categorie,
    _id: this.tabledeprojet[id]._id
   
  },
    
     
});

;
  
};
}
@Component({
  
  selector: 'app-dialog1',
  templateUrl: './dialog1.component.html',
  styleUrls: ['./portofolio.component.css']

})

export class DialogOverviewExampleDialog1 implements OnInit{

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog1>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private sant: DomSanitizer,private clientpost: clientpost,private tokenStorage: TokenStorageService,private formBuilder: FormBuilder,public dialog: MatDialog) {}
    submitted1=false
    selectedOption:String;
    descreption1=false
    encour:Boolean
    projet:FormGroup;
    tache:FormGroup;
    projetid:String
    submitted=false
    professionnel=false
    user=false
    isSuccessful=false
    isSuccessful1=false
    loading1=false
    matstat1:Boolean
    modifier=false
    loading=false
    empty=false
    admin:Boolean
    comentair2=[false]
    comentair=[false]
    creationtache1=false
    modifier2=[false]
    id:String
    email:any
    tabletach:any
    x=""
    admin1:Admin[];
    x1=""

    errorMessage=""
    base64: string = "Base64...";
  fileSelected?: File;
  imageUrl?: string;

  barWidth: string = "0%";
    onNoClick(): void {
      this.dialogRef.close();
    }
    creationtache(){
      this.creationtache1=!this.creationtache1

    }
    ngOnInit(): void {
      this.admin = this.tokenStorage.getUser().admin
      this.email = this.tokenStorage.getUser().email


      if (this.admin==true){
        this.professionnel=true
        this.user=false;
        this.clientpost.getbyprojet(this.data._id).subscribe(
          data => {
            this.tabletach=data
            console.log(data);
           
            if( this.tabletach.length===0 ){
              console.log(this.tabletach);
    
              this.empty=true
               this.x= "no taches"
            }
  
          
          },
          err => {
          
        
          }
          );
   
  
      }else if (this.admin==false){
        this.user=true
        this.professionnel=false;
        this.clientpost.getbyemail(this.data._id,this.email).subscribe(
          data => {
            this.tabletach=data
            console.log(data);
           
            if( this.tabletach.length===0 ){
              console.log(this.tabletach);
    
              this.empty=true
               this.x= "no taches"
            }
 
          
          },
          err => {
          
        
          }
          );
   
  
      }
      
    this.projet = this.formBuilder.group({

      titre: [this.data.titre, [Validators.required,Validators.minLength(3),Validators.maxLength(8), Validators.pattern("^[a-zA-Z ]*$")]],
      categorie: [this.data.categorie, [Validators.required,Validators.minLength(3),Validators.maxLength(8), Validators.pattern("^[a-zA-Z ]*$")]],
      team: [this.data.team,[Validators.required,Validators.minLength(3),Validators.maxLength(8), Validators.pattern("^[a-zA-Z ]*$")]],
      comentair: [this.data.comentair, [Validators.required]],

      
  
  }, );
    this.tache = this.formBuilder.group({

      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      description: ['', [Validators.required]],
      date: ['', [Validators.required]],
      date2: ['', Validators.required],
      mat: ["", [Validators.required]],
      matstat: ["", [Validators.required]],


  
  }, );
  
    
  this.admin1 =[
    {id:1,name:"Oui"},
    { id:2,name:"Non" },
    
  ];
     
    
      if (this.data.etat==false){
this.encour=false
      }
      if (this.data.etat==true){
        this.encour=true

      }
    }
    get f() { return this.projet.controls; }
    get a() { return this.tache.controls; }

    showcomentair(id1){
      this.comentair[id1]= !this.comentair[id1]
    }
    onSubmit1(){
      this.submitted1=true
      if (this.tache.invalid) {
        return;
      }
      this.loading1=true
      const {email,description,date,date2,mat,matstat} = this.tache.value;
      if(matstat==="Oui"){
        this.matstat1=true
      }
      else if (matstat==="Non"){
        this.matstat1=false

      }
      const token =this.tokenStorage.getToken()
      this.projetid=this.data._id
      this.clientpost.creationtache(this.projetid,token,email,date,date2,description,mat,this.matstat1).subscribe(
        data => {
          console.log(data);
          this.loading1=false
      
            this.isSuccessful1 = true;
            window.location.reload()

        
        },
        err => {
          this.loading1=false
      
          this.errorMessage = err.error;
      
        }
        );
        
    }
    status(){
      this.data.etat=!this.data.etat
      const _id = this.data._id
      const etat=this.data.etat
      this.clientpost.updateetat(_id,etat).subscribe(
        data => {
          console.log(data);
          window.location.reload()

          //this.ischangefailed=false;
      
          //this.isSuccessful = true;
        },
      
      );
    }
    onSelectNewFile(elemnt: HTMLInputElement): void {
      if (elemnt.files?.length == 0) return;
      this.fileSelected = (elemnt.files as FileList)[0];
      this.imageUrl = this.sant.bypassSecurityTrustUrl(window.URL.createObjectURL(this.fileSelected)) as string;
      this.base64 = "Base64...";
    }
    showcomentair1(id1){
      this.comentair2[id1]=!this.comentair2[id1]
    }

    onSubmit(){
      this.submitted=true
      if (this.projet.invalid) {
        return;
      }
      this.loading=true
      let reader = new FileReader();
  if (this.fileSelected){
      reader.readAsDataURL(this.fileSelected as Blob);
      reader.onloadend = () => {
        this.base64 = reader.result as string;
        console.log(this.base64)
        const { titre,team,categorie,comentair} = this.projet.value;
        const token =this.tokenStorage.getToken()
        
        this.clientpost.updateprojet(this.data._id,titre,token,categorie,team,comentair,this.base64).subscribe(
        data => {
          console.log(data);
          this.loading=false
      
            this.isSuccessful = true;
            window.location.reload()

        
        },
        err => {
          this.loading=false
      
          this.errorMessage = err.error;
      
        }
        );
        
          }}else {
            this.base64=""
            const { titre,team,categorie,comentair} = this.projet.value;
            const token =this.tokenStorage.getToken()
            
            this.clientpost.updateprojet(this.data._id,titre,token,categorie,team,comentair,this.base64).subscribe(
            data => {
              console.log(data);
              this.loading=false
          
                this.isSuccessful = true;
                window.location.reload()
    
            
            },
            err => {
              this.loading=false
          
              this.errorMessage = err.error;
          
            }
            );
          }
    }
    descreption(){
      this.descreption1=!this.descreption1
    };
    status1(id){
      this.tabletach[id].etat=!this.tabletach[id].etat
      const _id = this.tabletach[id]._id
      const etat=this.tabletach[id].etat
      this.clientpost.updateetattache(_id,etat).subscribe(
        data => {
          console.log(data);

          //this.ischangefailed=false;
      
          //this.isSuccessful = true;
        },
      
      );
    }
    Modifier(){
      this.modifier=!this.modifier
    }
    Modifier2(id1){
      this.modifier2[id1]=!this.modifier2[id1]

    }
    
    openDialog2(id1){
      console.log(id1)
   
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog3, {
      width: '50%',
      height: "50%",
    
      data: {date: this.tabletach[id1].date,
        comentair: this.tabletach[id1].comentair,
        description: this.tabletach[id1].description,
        etat: this.tabletach[id1].etat,
        email: this.tabletach[id1].email,
    
        date2: this.tabletach[id1].date2,
        projetid: this.tabletach[id1].projetid,
        _id: this.tabletach[id1]._id,
        mat: this.tabletach[id1].mat,
        matstat: this.tabletach[id1].matstat}
         
    });
    
    ;
      
    };
  }
  @Component({
  
    selector: 'app-dialog3',
    templateUrl: './dialog3.component.html',
    styleUrls: ['./portofolio.component.css']
  
  })
  export class DialogOverviewExampleDialog3 implements OnInit{
    comentair1:FormGroup
    tache:FormGroup
    matstat1:Boolean
    submitted1=false
    isSuccessful1=false
    submitted3=false
    professionnel=false
    admin:Boolean
    isSuccessful2=false
    user=false
    admin1:Admin[];

  loading1=false
  show1=false
  errorMessage=""
    constructor(
      public dialogRef: MatDialogRef<DialogOverviewExampleDialog3>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData2,private sant: DomSanitizer,private clientpost: clientpost,private tokenStorage: TokenStorageService,private formBuilder: FormBuilder,) {}
      ngOnInit(): void {
        this.admin = this.tokenStorage.getUser().admin

        if (this.admin==true){
          this.professionnel=true
          this.user=false;
    
        }else if (this.admin==false){
          this.user=true
          this.professionnel=false;
    
    
        }
        this.tache = this.formBuilder.group({

          email: [this.data.email, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
          description: [this.data.description, [Validators.required]],
          date: [this.data.date, [Validators.required]],
          date2: [this.data.date2, Validators.required],
          mat: [this.data.mat, [Validators.required]],
          matstat: [this.data.matstat, [Validators.required]],
          
      
      }, );
      this.admin1 =[
        {id:1,name:"Oui"},
        { id:2,name:"Non" },
        
      ];
         
        this.comentair1 = this.formBuilder.group({

     
          comentair: ["", [Validators.required]],
    
          
      
      }, );
      }
      get b() { return this.comentair1.controls; }
      get a() { return this.tache.controls; }

      comanter(){
        this.submitted3=true
        if (this.comentair1.invalid) {
          return;
        }
        this.loading1=true

        const {comentair} = this.comentair1.value;

        console.log(this.data._id)
        this.clientpost.sendingcomentair(this.data._id,comentair).subscribe(
        data => {
          console.log(data);
          this.loading1=false
          this.isSuccessful1 = true;

           // window.location.reload()
  
        
        },
        err => {
      
          this.loading1=false
          this.errorMessage = err.error;


        }
        );
           }
           non() {
            this.show1=false
          
            }
            delete() {
              const id = this.data._id
          console.log(id)
              this.clientpost.deletetache(id).subscribe(
                data => {
                  console.log(data);
              
                  this.isSuccessful2 = true;
                  window.location.reload()
                },);
            }
            Delete() {
              this.show1=true
          
            }
           onSubmit1(){
            this.submitted1=true
            if (this.tache.invalid) {
              return;
            }
            this.loading1=true
            const {email,description,date,date2,mat,matstat} = this.tache.value;
            if(matstat==="Oui"){
              this.matstat1=true
            }
            else if (matstat==="Non"){
              this.matstat1=false

            }
            const token =this.tokenStorage.getToken()
            this.clientpost.updatetache(this.data._id,token,email,date,date2,description,mat,this.matstat1).subscribe(
              data => {
                console.log(data);
                this.loading1=false
            
                  this.isSuccessful1 = true;
                  window.location.reload()
      
              
              },
              err => {
                this.loading1=false
            
                this.errorMessage = err.error;
            
              }
              );
              
          }

    }