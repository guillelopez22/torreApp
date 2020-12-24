import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../core/services/people.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-genome',
  templateUrl: './genome.component.html',
  styleUrls: ['./genome.component.css']
})
export class GenomeComponent implements OnInit {

  constructor(
    private peopleService: PeopleService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.peopleService.getUser(this.activatedRoute.snapshot.params.userId).subscribe(data => {
      console.log(data);
    })
  }

}
