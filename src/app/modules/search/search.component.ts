import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../core/services/people.service';
import { JobService } from '../../core/services/job.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search: string;
  list = [];
  constructor(
    private peopleService: PeopleService,
    private jobService: JobService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.search = Object.keys(this.activatedRoute.snapshot.queryParams)[0];
    let queryValue = '';
    
    if (this.search === 'people') {
      queryValue = this.activatedRoute.snapshot.queryParams.people;
      this.peopleService.searchPeople({name: {term: queryValue}}, {offset:0, size:10, aggregate:false}).subscribe((data:any) => {
        data.results.forEach(element => {
          this.list.push({
            name: element.name,
            username: element.username,
            locationName: element.locationName
          });
        });
      });
    } else {
      queryValue = this.activatedRoute.snapshot.queryParams.jobs;
      this.jobService.searchJobs({organization: {term: queryValue}}, {offset:0, size:10, aggregate:false}).subscribe((data:any) => {
        console.log(data);
      });
    }
    
    
    
  }

  onSubmit() {
    console.log('data');
    
  }
}
