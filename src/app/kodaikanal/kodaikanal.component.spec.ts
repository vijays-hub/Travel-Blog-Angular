import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KodaikanalComponent } from './kodaikanal.component';

describe('KodaikanalComponent', () => {
  let component: KodaikanalComponent;
  let fixture: ComponentFixture<KodaikanalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KodaikanalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KodaikanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
