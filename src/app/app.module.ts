import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReverseWordPipe } from './reverse-word.pipe';
import { SortArrayPipe } from './sort-array.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ReverseWordPipe,
    SortArrayPipe
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
