import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxFadeinoutComponent } from './fx-fadeinout.component';

describe('FxFadeinoutComponent', () => {
  let component: FxFadeinoutComponent;
  let fixture: ComponentFixture<FxFadeinoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FxFadeinoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FxFadeinoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
