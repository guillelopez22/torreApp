import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../core/services/people.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-genome',
  templateUrl: './genome.component.html',
  styleUrls: ['./genome.component.css']
})
export class GenomeComponent implements OnInit {
  userData = {
    professionalHeadline: '',
    name: '',
    pictureThumbnail: '',
    links: [],
    location: {
      shortName: '',
      country: '',
      timezone: '',
    },
    interests: []

  };
  
  constructor(
    private peopleService: PeopleService,
    private activatedRoute: ActivatedRoute
    ) { }
    
  ngOnInit(): void {
    this.peopleService.getUser(this.activatedRoute.snapshot.params.userId).subscribe((data:any) => {
      console.log(data);
      this.userData = data.person;
    })
  }

}
