import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MalnaduComponent } from './malnadu.component';

describe('MalnaduComponent', () => {
  let component: MalnaduComponent;
  let fixture: ComponentFixture<MalnaduComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MalnaduComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MalnaduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
