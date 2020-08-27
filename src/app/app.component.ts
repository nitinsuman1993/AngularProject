import { Country } from './country';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

//import {RequestOptions, Request, RequestMethod} from '@angular/http';
import {  HttpHeaders } from '@angular/common/http';
import { zip } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],  
})
export class AppComponent   {
   country:Country[];
  // co:string[]=['usa','uk','argentian']
  default:string='uk';
  selectedCountry:Number;
  selectedValue:string;
  form: FormGroup;

     constructor(public formBuilder: FormBuilder, public http: HttpClient) 
     {
       this.form=formBuilder.group({
        firstname:[""],
        lastname:[""],
        name:[""],
        
        country:['']
       })
       this.form.controls['country'].setValue(this.default,{onlyself:true});     
      } 
        ngOnInit()
        {
          this.country=[
           {countryID:1,city:'washington'},
            {countryID:2,city:'newyork'},
          ];
         this.selectedCountry=1;
           }

      
    //  onFileSelect(event) {
  //   if (event.target.files.length > 0) {
  //     const file = event.target.files[0];
  //     this.uploadForm.get('profile').setValue(file);
  //   }
  // }
  // onSubmit() {
  //   const formData = new FormData();
  //   formData.append('file', this.uploadForm.get('profile').value);

  //   this.httpClient.post<any>(this.SERVER_URL, formData).subscribe(
  //     (res) => console.log(res),
  //     (err) => console.log(err)
  //   );
  // }


  onSubmit = function (user) {
    console.log(user.firstname);
    console.log(user.lastname);
    console.log(user.country);

   // headers: this._getHeaders()
//    let options = new RequestOptions({
//     headers: this._getHeaders()
//  });

    var body ={ 
      Url :user.firstname,
      Password : user.lastname, 
      Name : user.name,
      country:user.country
    }
    //ud.push(body);
    //this.http.post("http://localhost:3000/form", body).subscribe((data) => {data});;

   const req = this.http.post('http://localhost:3000/form',
    JSON.stringify(body),
    {
     headers:new HttpHeaders()
     .set('Content-Type','application/json')
     }).subscribe(
       obj =>{
         console.log('post log is successful',obj)
       },
       error =>{
         console
         .log('ERROR',error);
         
       }
     );
  }

}
