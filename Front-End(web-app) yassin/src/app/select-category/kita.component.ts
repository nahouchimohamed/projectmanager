import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


const api = 'http://localhost:5000/api/createprojet';
const api1 = 'http://localhost:5000/api/getusers';
const api2 = 'http://localhost:5000/api/getallprojet';
const api3 = 'http://localhost:5000/api/updateetat';
const api5 = 'http://localhost:5000/api/Updateuser';
const api6 = 'http://localhost:5000/api/updateprojet';
const api7 = 'http://localhost:5000/api/updatetache';
const api8 = 'http://localhost:5000/api/updateetattache';
const api9 = 'http://localhost:5000/api/sendingcomentair';
const api10 = 'http://localhost:5000/api/getbyprojet';
const api11 = 'http://localhost:5000/api/createtache';
const api12 = 'http://localhost:5000/api/deleteproject';
const api13 = 'http://localhost:5000/api/getprojetbyteam';
const api102 = 'http://localhost:5000/api/deletetache';

const api101 = 'http://localhost:5000/api/getbyemail';










const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class clientpost {
  constructor(private http: HttpClient) { }



  create(titre: String ,token:String,categorie: String, team: String,comentair: String,image: string): Observable<any> {

    return this.http.post(api , {
      titre,
        token,
        categorie,
        team,
        image,
        comentair,
        
    }, httpOptions)
    
   
  }
  creationtache(projetid:String,token: String ,email:String,date: String, date2: String,description: String ,mat:String,matstat:Boolean): Observable<any> {

    return this.http.post(api11 , {
      projetid,
      token,
      email,
      date,
      date2,
      description,
      mat,
      matstat
    }, httpOptions)
    
   
  }
  updatetache(id:String,token: String ,email:String,date: String, date2: String,description: String,mat:String,matstat:Boolean): Observable<any> {

    return this.http.post(api7 , {
      id,
      token,
      email,
      date,
      date2,
      description,
      mat,
      matstat
    }, httpOptions)
    
   
  }
  updateprojet(_id:String,titre: String ,token:String,categorie: String, team: String,comentair: String,image: string): Observable<any> {

    return this.http.post(api6 , {
      _id,
      titre,
        token,
        categorie,
        team,
        image,
        comentair,
        
    }, httpOptions)
    
   
  }
  Updateuser(token:string,Admin: Boolean, Cin: Number,team:string,Firstname: String,Lastname: String, phone:Number,email: string,password: string): Observable<any> {
    return this.http.post(api5, {
      token, Admin, Cin,team,Firstname, Lastname, phone,email,password
    }, httpOptions)
   
  }
  updateetat(_id: String, etat: Boolean): Observable<any> {
    return this.http.post(api3, {
      _id,
      etat
   
    }, httpOptions)
   
  }
  updateetattache(_id: String, etat: Boolean): Observable<any> {
    return this.http.post(api8, {
      _id,
      etat
   
    }, httpOptions)
   
  }
  accpete(email: String ,id:String ,id2:String): Observable<any> {
    return this.http.post(api11, {
      email,
      id,
      id2

      
   
    }, httpOptions)
   
  }
  deleteproject(id: String  ): Observable<any> {
    return this.http.post(api12, {
   id

      
   
    }, httpOptions)
   
  }
  getbyprojet(id: String): Observable<any> {
    return this.http.post(api10, {
      id
      
   
    }, httpOptions)
   
  }
  deletetache(id: String): Observable<any> {
    return this.http.post(api102, {
      id
      
   
    }, httpOptions)
   
  }
  getbyemail(id: String,email: string): Observable<any> {
    return this.http.post(api101, {
      id,
      email
      
   
    }, httpOptions)
   
  }
  deleteuser(email: String): Observable<any> {
    return this.http.post(api6, {
email   
    }, httpOptions)
   
  }
  getusers(email:Boolean): Observable<any> {
    return this.http.post(api1, {
      email,
    },httpOptions);
    
    
}
getprojetbyteam(team:string): Observable<any> {
  return this.http.post(api13, {
    team,
    
  },httpOptions);
  
  
}

getallprojet(admin:Boolean): Observable<any> {
  return this.http.post(api2, {
    admin,
    
  },httpOptions);
  
  
}
sendingcomentair(id:String,comentair:string ): Observable<any> {
  return this.http.post(api9, {
    id,
    comentair
  },httpOptions);
  
  
}
Interese(id:String,id1:String ): Observable<any> {
  return this.http.post(api7, {
    id,
    id1
    
  },httpOptions);
}
neInterese(id:String,id1:String ): Observable<any> {
  return this.http.post(api8, {
    id,
    id1
    
  },httpOptions);
}
}