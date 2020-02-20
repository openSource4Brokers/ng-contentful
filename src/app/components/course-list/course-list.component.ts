import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ContentfulService } from './../../_services/contentful.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  entriesList$: Observable<any>;

  constructor(
    private router: Router,
    private contentfulService: ContentfulService
  ) {}

  ngOnInit() {
    this.entriesList$ = this.contentfulService.getContentList('courses');

    // Only for development purpose
    this.contentfulService.consoleLogContentList('courses');
  }

  courseDetail(id) {
    console.log(id);
  }

  goToList() {
    this.router.navigate(['/contenttypes']);
  }
}
