import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtableComponent } from './ftable.component';

describe('FtableComponent', () => {
  let component: FtableComponent;
  let fixture: ComponentFixture<FtableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
