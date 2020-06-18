import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogdeleteitemComponent } from './dialogdeleteitem.component';

describe('DialogdeleteitemComponent', () => {
  let component: DialogdeleteitemComponent;
  let fixture: ComponentFixture<DialogdeleteitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogdeleteitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogdeleteitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
