import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
   experiments: string[] = ['Moon soil sample', 'Plant growth in orbit', 'Human bone density changes', 'Water droplet podcast for grades K-5', 'Satellite launch'];
   chosenExperiments: string[] =[];
   constructor() { }

   ngOnInit() { }

   addExperiment(experiment: string) {
     if (!this.chosenExperiments.includes(experiment)) {
       this.chosenExperiments.push(experiment);
     } else {
       this.chosenExperiments.splice(this.chosenExperiments.indexOf(experiment), 1);
     }
   }
}
