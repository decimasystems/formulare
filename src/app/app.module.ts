import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule,ValidatorFn } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CustomValidators } from 'ng2-validation';
import { AppComponent } from './app.component';
import { FormularComponent } from './formular/formular.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularComponent,
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
  ],
  providers: [CustomValidators],
  bootstrap: [AppComponent]
})
export class AppModule { }
