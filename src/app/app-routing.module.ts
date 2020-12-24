import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './modules/search/search.component';
import { JobProfileComponent } from './modules/job-profile/job-profile.component';
import { GenomeComponent } from './modules/genome/genome.component';


const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'job/:jobId', component: JobProfileComponent },
  { path: 'genome/genomeId', component: GenomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
