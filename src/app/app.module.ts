import { InsurancesListComponent } from './components/insurances-list/insurances-list.component';
import { CourseDetailComponent } from './components/course-list/course-detail/course-detail.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MdToHtmlPipe } from './_helpers/md-to-html.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContentfulService } from './_services/contentful.service';
import { ContentTypeListComponent } from './components/contenttype-list.component';
import { CompanytListComponent } from './components/company-list/company-list.component';
import { MarkdownListComponent } from './components/markdown-list/markdown-list.component';
import { MarkdownDetailComponent } from './components/markdown-list/markdown-detail/markdown-detail.component';
import { InsuranceDetailComponent } from './components/insurances-list/insurance-detail/insurance-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentTypeListComponent,
    CompanytListComponent,
    CourseListComponent,
    CourseDetailComponent,
    MarkdownListComponent,
    MarkdownDetailComponent,
    InsurancesListComponent,
    InsuranceDetailComponent,
    MdToHtmlPipe
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ContentfulService],
  bootstrap: [AppComponent]
})
export class AppModule {}
