import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl, FormControl, FormsModule} from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
@Component({
  selector: 'app-formular',
  templateUrl: './formular.component.html',
  styleUrls: ['./semantic.min.css']
})
export class FormularComponent implements OnInit {

  myForm: FormGroup;
  constructor(fb: FormBuilder) {  
    this.myForm = fb.group({'nume':['',Validators.required],
                            'prenume':['',Validators.required],         
                            'dataNasterii': ['',Validators.compose([Validators.required,CustomValidators.date])]
                           });

    this.myForm.controls['nume'].valueChanges.subscribe(
    (value:string) => console.log(`Numele s-a schimbat in ${value}`)
    );
   
  }

  onSubmit(value: string):void {
      
     
     if( !this.myForm.hasError['valid']){
       console.log('you submitted value: ', value);
     } else {
       console.log('formular invalid');
     }
  }

  ngOnInit() {
  }

}
