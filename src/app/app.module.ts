import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MdToHtmlPipe } from './_helpers/md-to-html.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContentfulService } from './_services/contentful.service';
import { ContentTypeListComponent } from './components/contenttype-list.component';
import { CompanytListComponent } from './components/company-list/company-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentTypeListComponent,
    CompanytListComponent,
    MdToHtmlPipe
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ContentfulService],
  bootstrap: [AppComponent]
})
export class AppModule {}
