import { AllUsers, Query } from './../../modules/graph/types';
import { ApiService } from './../api-service/api.service';
import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { Todo } from 'server/models/todos';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  // allUsers: Observable<AllUsers[]>;
  // showData;
  constructor(
    private apiService: ApiService,
    private apollo: Apollo) {

    // this.allUsers = this.apollo.watchQuery<Query>({
    //   query: gql`
    //     query {
    //       allUsers {
    //         id
    //         email
    //         name
    //       }
    //     }
    //   `
    // })
    //   .valueChanges
    //   .pipe(
    //     map(result => result.data.allUsers)
    //   );



  }

  showDataExpress()
  {
    // this.apiService.displayTodo().subscribe((response: HttpResponse<Todo>) => {
    //   this.showData = response.body;
    //   return this.showData;
    // });
  }
  // ngOnInit() {

  // }

}
