import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVisitComponent } from './update-visit.component';

describe('UpdateVisitComponent', () => {
  let component: UpdateVisitComponent;
  let fixture: ComponentFixture<UpdateVisitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateVisitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
