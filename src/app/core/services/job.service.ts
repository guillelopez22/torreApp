import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) { }

  getJob(id) {
    return this.http.get(`https://torre.co/api/opportunities/${id}`);
  }

  searchJobs(payload, params) {
    return this.http.post(`https://search.torre.co/opportunities/_search/?[offset=${params.offset}&size=${params.size}&aggregate=${params.aggregate}]`, payload);
  }
}
