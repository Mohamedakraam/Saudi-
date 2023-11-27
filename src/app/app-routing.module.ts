import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { ContentWebComponent } from './content-web/content-web.component';
import { ContentFirstWebComponent } from './content-first-web/content-first-web.component';
import { ContentSecondWebComponent } from './content-second-web/content-second-web.component';
import { ContentThirdWebComponent } from './content-third-web/content-third-web.component';
import { ContentFourthWebComponent } from './content-fourth-web/content-fourth-web.component';

export const Approutes: Routes = [
  {
    path: '', component: ContentWebComponent
  },
  {
    path: 'first', component: ContentFirstWebComponent
  },
  {
    path: 'second', component: ContentSecondWebComponent
  },
  {
    path: 'third', component: ContentThirdWebComponent
  },
  {
    path: 'fourth', component: ContentFourthWebComponent
  },

];
