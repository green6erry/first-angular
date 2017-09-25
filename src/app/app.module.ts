import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule, MatSidenavModule} from '@angular/material';

import { AppComponent } from './app.component';
import { NgbdAlertCloseable } from './alert-closeable/alert-closeable';
import { NgbdCarouselBasic } from './carousel/carousel-basic';
import { KnowledgeNote } from './knowledge-note/knowledge-note';
import { SidenavComponent } from './sidenav/sidenav.component';


@NgModule({
  declarations: [
    AppComponent,
    NgbdAlertCloseable,
    NgbdCarouselBasic,
    KnowledgeNote,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    MdButtonModule, 
    MdCheckboxModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
