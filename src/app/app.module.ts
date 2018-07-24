import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatAutocompleteModule,MatFormFieldModule,MatFormFieldControl,
  MatInputModule, MatSnackBarModule, MatMenuModule, MatButtonModule,
  MatIconModule, MatSlideToggleModule, MatSliderModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { SampleComponent } from './sample/sample.component';
import { NestedComponent } from './nested/nested.component';
import { ToggleComponent } from './toggle/toggle.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    NestedComponent,
    ToggleComponent,
    SliderComponent
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    MatSliderModule
    

  ],
  exports: [MatSnackBarModule],
  
  providers: [],
  bootstrap: [AppComponent],
 
})
  
  
export class AppModule { 
  
}
