import { Country } from './country';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {FormService} from './form.service';
import { IForm } from './data';
import {MatDialog , MatDialogConfig } from '@angular/material/dialog';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit  {
Idata: IForm[];
country: Country[];
reg: any = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?' ;
dialog: MatDialog;

 constructor(public formBuilder: FormBuilder, public newform: FormService){}

form = new FormGroup({
 URL : new FormControl('', [
   Validators.required,
   Validators.pattern(this.reg)
  ]),
 Password: new FormControl('', Validators.required),
 Name: new FormControl('', [
   Validators.required,
   Validators.minLength(3)
  ]),
Country: new FormControl('')
});

// openConfirmDial(){
//   this.dialog.open(ConfirmDialougComponent,{
//     width: '390px',
//     disableClose: true
//   });
// }

     ngOnInit()
     {

            this.country = [
              {countryID: 1, city: 'Washington DC'},
              {countryID: 2, city: 'New York'},
            ]; }

         onSubmit(user)
         {
           if (this.form.valid){
             this.form.reset();
             this.newform.onSub(user).subscribe(data => {
             console.log('successfull', data);
             //alert('Form Submitted succesfully!');
             //this.openConfirmDial()
           },
           error => {
             console.log('error occured',error);
           });
         }
       }

}
