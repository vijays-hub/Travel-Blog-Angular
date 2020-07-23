import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KanyakumariComponent } from './kanyakumari.component';

describe('KanyakumariComponent', () => {
  let component: KanyakumariComponent;
  let fixture: ComponentFixture<KanyakumariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KanyakumariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanyakumariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
