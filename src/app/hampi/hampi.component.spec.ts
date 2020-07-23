import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HampiComponent } from './hampi.component';

describe('HampiComponent', () => {
  let component: HampiComponent;
  let fixture: ComponentFixture<HampiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HampiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HampiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
