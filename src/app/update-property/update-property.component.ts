import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PropertyService} from '../shared/property.service';
import {Property} from '../model/property';

@Component({
  selector: 'app-update-property',
  templateUrl: './update-property.component.html',
  styleUrls: ['./update-property.component.css']
})
export class UpdatePropertyComponent implements OnInit {

  id: number;
  property: Property = new Property();

  constructor(private propertyService: PropertyService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.propertyService.getPropertyById(this.id).subscribe(data => {
      this.property = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.propertyService.updateProperty(this.id, this.property).subscribe( data => {
        this.goToPropertyList();
      }
      , error => console.log(error));
  }

  goToPropertyList(){
    this.router.navigate(['/properties']);
  }

}
