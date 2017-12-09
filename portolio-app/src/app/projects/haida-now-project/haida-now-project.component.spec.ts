import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaidaNowProjectComponent } from './haida-now-project.component';

describe('HaidaNowProjectComponent', () => {
  let component: HaidaNowProjectComponent;
  let fixture: ComponentFixture<HaidaNowProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaidaNowProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaidaNowProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
