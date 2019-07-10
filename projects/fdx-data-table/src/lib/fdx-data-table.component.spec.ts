import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdxDataTableComponent } from './fdx-data-table.component';

describe('FdxDataTableComponent', () => {
  let component: FdxDataTableComponent;
  let fixture: ComponentFixture<FdxDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdxDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdxDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
