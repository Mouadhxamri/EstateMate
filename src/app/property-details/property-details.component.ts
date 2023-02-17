import { Component, OnInit } from '@angular/core';
import {Property} from '../model/property';
import {ActivatedRoute} from '@angular/router';
import {PropertyService} from '../shared/property.service';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {

  id: number;
  property: Property;

  constructor(private route: ActivatedRoute, private propertyService: PropertyService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.property = new Property();
    this.propertyService.getPropertyById(this.id).subscribe( data => {
      this.property = data;
    });
  }


}
