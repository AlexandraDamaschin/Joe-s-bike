import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BikeListComponent } from './bike-list/bike-list.component';
import { StarComponent } from './shared/star-component/star-component';

@NgModule({
  declarations: [
    AppComponent,
    BikeListComponent,
    StarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
