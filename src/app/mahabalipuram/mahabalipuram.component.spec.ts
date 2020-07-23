import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MahabalipuramComponent } from './mahabalipuram.component';

describe('MahabalipuramComponent', () => {
  let component: MahabalipuramComponent;
  let fixture: ComponentFixture<MahabalipuramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MahabalipuramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MahabalipuramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
