import { Component, OnInit } from '@angular/core';
import {PropertyService} from '../shared/property.service';
import {Router} from '@angular/router';
import {Property} from '../model/property';



@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  searchText;
  properties: Property[];

  constructor(private propertyService: PropertyService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getProperties();
  }

  private getProperties() {
    this.propertyService.getPropertiesList().subscribe(data => {
      this.properties = data;
    });
  }

  propertyDetails(id: number){
    this.router.navigate(['property-details', id]);
  }
}
