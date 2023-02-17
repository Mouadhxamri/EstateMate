import { Component, OnInit } from '@angular/core';
import {Visit} from "../model/visit";
import {VisitService} from "../services/visit.service";
import {Router} from "@angular/router";
import {visit} from "@angular/compiler-cli/src/ngtsc/util/src/visitor";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-visit-list',
  templateUrl: './visit-list.component.html',
  styleUrls: ['./visit-list.component.css']
})
export class VisitListComponent implements OnInit {
  visits: Visit[];
  place = new FormControl('');

  constructor(private visitService: VisitService, private router: Router) {
  }

  ngOnInit(): void {
    this.getVisits();
  }

  private getVisits() {
    this.visitService.getVisitList().subscribe(data => {
      this.visits = data;
    });
  }
  visitDetails(id:number){
    this.router.navigate(['visit-details', id]);}
  updateVisit(id: number) {
    this.router.navigate(['update-visit', id]);
  }


  deleteVisit(id: number) {
    this.visitService.deleteVisit(id).subscribe(data => {
      console.log(data);
      this.getVisits();
    })

  }
}
