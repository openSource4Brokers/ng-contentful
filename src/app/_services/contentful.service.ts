// Angular
import { Injectable } from '@angular/core';
import { from } from 'rxjs';
// npm installed
import { createClient, Entry } from 'contentful';
// ours
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private client = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token
  });

  constructor() {}

  getContentTypes() {
    const myContentObservable = from(
      this.client.getContentTypes().then(res => res.items)
    );
    return myContentObservable;
  }

  consoleLogContentTypes() {
    console.log('ContentTypeArray (Only for development purpose)');
    this.client
      .getContentTypes()
      .then(response => console.log(response.items))
      .catch(console.error);
  }

  getContentList(cType: string, query?: object) {
    const myListObservable = from(
      this.client
        .getEntries(
          Object.assign(
            {
              content_type: cType
            },
            query
          )
        )
        .then(res => res.items)
    );
    return myListObservable;
  }

  consoleLogContentList(cType: string, query?: object) {
    // console.log('ContentListArray (Only for development purpose)');
    this.client
      .getEntries(
        Object.assign(
          {
            content_type: cType
          },
          query
        )
      )
      .then(response => console.log(response.items))
      .catch(console.error);
  }

  getContent(contentId) {
    const myContentObservable = from(this.client.getEntry(contentId));
    return myContentObservable;
  }
}
