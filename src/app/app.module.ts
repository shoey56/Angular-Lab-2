import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
