import { Component, OnInit } from '@angular/core';
import {Visit} from "../model/visit";
import {VisitService} from "../services/visit.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-update-visit',
  templateUrl: './update-visit.component.html',
  styleUrls: ['./update-visit.component.css']
})
export class UpdateVisitComponent implements OnInit {
  id: number;
  visit: Visit = new Visit();
  constructor(private visitService: VisitService,
              private route: ActivatedRoute,
  private router: Router         ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.visitService.getVisitById(this.id).subscribe(data => {
      this.visit = data;
    }, error => console.log(error));
  }
  onSubmit(){
    this.visitService.updateVisit(this.id, this.visit).subscribe( data =>{
        this.goToVisitList();
      }
      , error => console.log(error));
  }

  goToVisitList(){
    this.router.navigate(['/visits']);
  }
}
