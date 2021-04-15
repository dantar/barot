import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListenTrackComponent } from './listen-track.component';

describe('ListenTrackComponent', () => {
  let component: ListenTrackComponent;
  let fixture: ComponentFixture<ListenTrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListenTrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListenTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
