import { Component, OnInit } from '@angular/core';

import {Visit} from "../model/visit";


import {visit} from "@angular/compiler-cli/src/ngtsc/util/src/visitor";
import {ActivatedRoute} from "@angular/router";
import {VisitService} from "../services/visit.service";
import {localisation} from "../model/localisation";



@Component({
  selector: 'app-visit-details',
  templateUrl: './visit-details.component.html',
  styleUrls: ['./visit-details.component.css']
})
export class VisitDetailsComponent implements OnInit {
 id:number
  visit: Visit;
  d: localisation;

  constructor ( private route: ActivatedRoute, private visitService: VisitService ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
   this.visit = new Visit();
   this.visitService.getVisitById(this.id).subscribe(data=> {
     this.visit = data;
   });
    this.visitService.getLocalisation(this.id).subscribe(data=> {
      //this.d=JSON.parse(JSON.stringify(data));
      this.d=data;
      console.log(data)
    });

  }

}
