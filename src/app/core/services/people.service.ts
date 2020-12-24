import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getHeaders() {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Access-Control-Allow-Headers', 'Content-Type')
      .append('Access-Control-Allow-Methods', 'GET')
      .append('Access-Control-Allow-Origin', '*');
  }
  getUser(username) {
    const  headers = new  HttpHeaders().set('access-control-allow-origin',"https://torre.bio/api/bios/");
    return this.http.get(`https://torre.bio/api/bios/${username}`, {headers});
  }

  searchPeople(payload, params) {
    return this.http.post(`https://search.torre.co/people/_search/?[offset=${params.offset}&size=${params.size}&aggregate=${params.aggregate}]`, payload);
  }
}
