import { Component, OnInit } from '@angular/core';
import {Visit} from "../model/visit";
import {VisitService} from "../services/visit.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-create-visit',
  templateUrl: './create-visit.component.html',
  styleUrls: ['./create-visit.component.css']
})
export class CreateVisitComponent implements OnInit {
  visit: Visit = new Visit();

  constructor(private visitService: VisitService, private router: Router) { }

  ngOnInit(): void {
  }
  saveVisit(){
    this.visitService.createVisit(this.visit).subscribe( data =>{
        console.log(data);
        this.goToVisitList();
      },
      error => console.log(error));
  }
  goToVisitList(){
    this.router.navigate(['/visits']);
  }
onSubmit(){
    console.log(this.visit);
  this.saveVisit();
}
}
