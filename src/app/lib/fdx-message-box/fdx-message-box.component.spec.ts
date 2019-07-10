import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdxMessageBoxComponent } from './fdx-message-box.component';

describe('FdxMessageBoxComponent', () => {
  let component: FdxMessageBoxComponent;
  let fixture: ComponentFixture<FdxMessageBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdxMessageBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdxMessageBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
