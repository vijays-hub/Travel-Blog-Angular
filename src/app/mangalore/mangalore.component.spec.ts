import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MangaloreComponent } from './mangalore.component';

describe('MangaloreComponent', () => {
  let component: MangaloreComponent;
  let fixture: ComponentFixture<MangaloreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangaloreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangaloreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
