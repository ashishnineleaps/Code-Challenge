import { HelperService } from './../../shared/services/helper/helper.service';
import { ApiService } from '../../shared/services/api-service/api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Todo } from 'server/models/todos';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AllUsers, Query } from 'src/app/shared/modules/graph/types';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  allUsers: Observable<AllUsers[]>;
  combinedDataArray: any = []
  resultsLength;
  constructor(
    private apollo: Apollo,
    private matDialog: MatDialog,
    private apiService: ApiService) {

  }
  displayedColumns = ['userId', 'name', 'email', 'title', 'completed'];
  dataSource;
  ngOnInit() {
    this.allUsers = this.apollo.watchQuery<Query>({
      query: gql`
        query {
          allUsers {
            id
            email
            name
          }
        }
      `
    })
      .valueChanges
      .pipe(
        map(result => result.data.allUsers)
      );

    this.allUsers.subscribe(graphData => {
      this.apiService.displayTodo().subscribe((expressData: HttpResponse<Todo>) => {
        let express = expressData.body;

        let combinedArray = []
        for (let i = 0; i < 10; i++) {
          let temp = {
            email: graphData[i].email,
            id1: graphData[i].id,
            name: graphData[i].name,
            completed: express[i].completed,
            id2: express[i].id,
            title: express[i].title,
            userId: express[i].userId,
          }
          combinedArray.push(temp)
        }

        this.combinedDataArray = combinedArray;
        this.dataSource = new MatTableDataSource(this.combinedDataArray)
        this.dataSource.paginator = this.paginator;
        this.resultsLength = this.combinedDataArray.length
      });
    });
  }


  showClickData(data) {
    const query = {
      id: data.id2
    }
    this.apiService.displayTodoById(query).subscribe((clickedData: HttpResponse<Todo>) => {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.data = data;
      const dialogRef = this.matDialog.open(DialogComponent, dialogConfig);

    })



  }


}
