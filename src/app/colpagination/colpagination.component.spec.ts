import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColpaginationComponent } from './colpagination.component';

describe('ColpaginationComponent', () => {
  let component: ColpaginationComponent;
  let fixture: ComponentFixture<ColpaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColpaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColpaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
