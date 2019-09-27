import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as Rx from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public callApi(method: any, body: any, api: any, param: any): any {
    switch (method) {
      case 'POST':
        const postObserver = new Rx.Observable(observer => {
          this.post(body, api).subscribe(data => {
            observer.next(data);
          });
        });
        return postObserver;
      case 'GET':
        const getObserver = new Rx.Observable(observer => {
          this.get(api).subscribe(data => {
            observer.next(data);
          });
        });
        return getObserver;
      case 'GETBYQUERY':
        const getQueryObserver = new Rx.Observable(observer => {
          this.getbyquery(api, param).subscribe(data => {
            observer.next(data);
          });
        });
        return getQueryObserver;
    }
  }

  private post(body: any, api: any) {
    return this.http.post(`${environment.BASE_URL}/${api}`, body, { observe: 'response' });
  }

  private get(api: any) {
    return this.http.get(`${environment.BASE_URL}/${api}`, { observe: 'response' });
  }
  private getbyquery(api: any, query: any) {
    return this.http.get(`${environment.BASE_URL}/${api}`, { params: query, observe: 'response' });
  }
}

