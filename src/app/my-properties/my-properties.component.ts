import { Component, OnInit } from '@angular/core';
import {Property} from '../model/property';
import {PropertyService} from '../shared/property.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-properties',
  templateUrl: './my-properties.component.html',
  styleUrls: ['./my-properties.component.css']
})
export class MyPropertiesComponent implements OnInit {

  properties: Property[];

  constructor(private propertyService: PropertyService,
              private router: Router) { }

  ngOnInit(): void {
    this.getPropertiesByUserId();
  }

  private getPropertiesByUserId() {
    this.propertyService.getPropertiesByUserId().subscribe(data => {
      this.properties = data;
    });
  }

  updateProperty(id: number) {
    this.router.navigate(['update-property', id]);

  }

  deleteProperty(id: number){
    this.propertyService.deleteProperty(id).subscribe( data => {
      console.log(data);
      this.getPropertiesByUserId();
    });
  }

}
