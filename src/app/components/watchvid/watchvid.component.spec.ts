import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchvidComponent } from './watchvid.component';

describe('WatchvidComponent', () => {
  let component: WatchvidComponent;
  let fixture: ComponentFixture<WatchvidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchvidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchvidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
