import { Country } from './country';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective } from '@angular/forms';
import {FormService} from './form.service';
import { IForm } from './data';
import {MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit
{
Idata: IForm[];
country: Country[];
hide = true;
reg: any = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?' ;

 constructor(public formBuilder: FormBuilder, public newform: FormService, public dialog: MatDialog){}

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

openDialog() {
this.dialog.open(DialogComponent);
}

ngOnInit()
{
 this.country = [
 {countryID: 1, city: 'Washington DC'},
 {countryID: 2, city: 'New York'},
 ];
}

onSubmit(user, formDirec: FormGroupDirective)
{
  if (this.form.valid){
   formDirec.resetForm();
   this.form.reset();
   this.form.setErrors(null);
   this.newform.onSub(user).subscribe(data => {
   console.log('successfull', data || JSON);
   },
    error => {
    console.log('error occured', error);
     });
    }
}

}
