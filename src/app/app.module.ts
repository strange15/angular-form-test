import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ReactiveFormsAutoCompleteSearchingComponent } from './reactive-forms-auto-complete-searching/reactive-forms-auto-complete-searching.component';
import { BooleanInZhTwPipe } from './boolean-in-zh-tw.pipe';
import { GoogleMapLinkPipe } from './google-map-link.pipe';
import { LocationStringPipe } from './location-string.pipe';
import { ReactiveFormsDateRangeComponent } from './reactive-forms-date-range/reactive-forms-date-range.component';
import { ErrorMessagePipe } from './error-message.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormsAutoCompleteSearchingComponent,
    BooleanInZhTwPipe,
    GoogleMapLinkPipe,
    LocationStringPipe,
    ReactiveFormsDateRangeComponent,
    ErrorMessagePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
