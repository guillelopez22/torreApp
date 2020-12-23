import { Injectable } from '@angular/core';
import  { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getUser(username) {
    return this.http.get(`https://torre.bio/api/bios/${username}`);
  }

  searchPeople(payload, params) {
    return this.http.post(`https://search.torre.co/people/_search/?[offset=${params.offset}&size=${params.size}&aggregate=${params.aggregate}]`, payload);
  }
}
