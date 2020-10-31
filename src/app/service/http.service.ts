import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) {}


  public sendPostRequest(url: string, data: any): Observable<any> {
    return this.httpClient.post<any>(environment.apiUrl + url, data);
  }

  public sendGetRequest(url: string): Observable<any> {
    return this.httpClient.get<any>(environment.apiUrl + url);
  }

}
