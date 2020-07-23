import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChidambaramComponent } from './chidambaram.component';

describe('ChidambaramComponent', () => {
  let component: ChidambaramComponent;
  let fixture: ComponentFixture<ChidambaramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChidambaramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChidambaramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
