//import { FormServces } from './app.service';
import { Country } from './country';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {FormService} from './form.service';
import { IForm } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit  {
Idata:IForm[];
country:Country[];
form: FormGroup;

constructor(private formBuilder: FormBuilder,private newform:FormService)
{
  this.form=formBuilder.group({
      URL:["",Validators.required],
      Password:["",Validators.required],
      Name:[""],
      Country:[""]
     })
}   
      ngOnInit(){
           this.country=[
             {countryID:1,city:'Washington DC'},
             {countryID:2,city:'New York'},
           ];}

        onSubmit(user)
        { 
          this.newform.onSub(user).subscribe(data=>{
            this.form.reset();
            console.log('successfull',data);
           alert('Form Submitted succesfully!')
          },
          error=>{
            console.log('error occured',error);
          });

        }         
}
