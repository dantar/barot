import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanCodesComponent } from './scan-codes.component';

describe('ScanCodesComponent', () => {
  let component: ScanCodesComponent;
  let fixture: ComponentFixture<ScanCodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanCodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
