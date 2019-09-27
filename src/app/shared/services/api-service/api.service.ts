import { HttpService } from '../http-service/http.service';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpService: HttpService) { }

  displayTodo() {
    return this.httpService.callApi('GET', '', 'showTodo', '')
  }

  displayTodoById(query) {
    return this.httpService.callApi('GETBYQUERY', '', 'showTodoUserId', query)
  }
}
