import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  CommonModule, LocationStrategy,
  PathLocationStrategy
} from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullComponent } from './layouts/full/full.component';


import { NavigationComponent } from './shared/header/navigation.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

import { Approutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/spinner.component';
import { WebsiteComponent } from './website/website.component';
import { HeaderWebComponent } from './header-web/header-web.component';
import { ContentWebComponent } from './content-web/content-web.component';
import { ContentFirstWebComponent } from './content-first-web/content-first-web.component';
import { ContentSecondWebComponent } from './content-second-web/content-second-web.component';
import { ContentThirdWebComponent } from './content-third-web/content-third-web.component';
import { ContentFourthWebComponent } from './content-fourth-web/content-fourth-web.component';


@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    WebsiteComponent,
    HeaderWebComponent,
    ContentWebComponent,
    ContentFirstWebComponent,
    ContentSecondWebComponent,
    ContentThirdWebComponent,
    ContentFourthWebComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(Approutes, { useHash: false }),
    FullComponent,
    SidebarComponent,
    NavigationComponent,

  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
