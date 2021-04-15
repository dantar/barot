import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxSpinningComponent } from './fx-spinning.component';

describe('FxSpinningComponent', () => {
  let component: FxSpinningComponent;
  let fixture: ComponentFixture<FxSpinningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FxSpinningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FxSpinningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
