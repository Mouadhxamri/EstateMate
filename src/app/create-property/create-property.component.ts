import { Component, OnInit } from '@angular/core';
import {PropertyService} from '../shared/property.service';
import {Router} from '@angular/router';
import {Property} from '../model/property';
import {UserService} from '../shared/user.service';
import {User} from '../model/user';

@Component({
  selector: 'app-create-property',
  templateUrl: './create-property.component.html',
  styleUrls: ['./create-property.component.css']
})
export class CreatePropertyComponent implements OnInit {


  property: Property = new Property();


  constructor(private propertyService: PropertyService,
              private router: Router) { }

  ngOnInit(): void {

  }
  saveProperty(){
    this.propertyService.createProperty(this.property).subscribe(data => {
     console.log(data);
     this.goToProperty();
    });
  }

    goToProperty(){
      this.router.navigate(['/properties']);
    }

    onSubmit(){
    console.log(this.property);
    this.saveProperty();
    }


}
