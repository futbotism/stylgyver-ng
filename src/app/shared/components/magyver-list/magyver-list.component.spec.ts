import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagyverListComponent } from './magyver-list.component';

describe('MagyverListComponent', () => {
  let component: MagyverListComponent;
  let fixture: ComponentFixture<MagyverListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagyverListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagyverListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
