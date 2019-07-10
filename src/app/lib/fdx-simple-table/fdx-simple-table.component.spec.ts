import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdxSimpleTableComponent } from './fdx-simple-table.component';

describe('FdxSimpleTableComponent', () => {
  let component: FdxSimpleTableComponent;
  let fixture: ComponentFixture<FdxSimpleTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdxSimpleTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdxSimpleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
