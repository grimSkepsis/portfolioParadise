import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VanguardProjectComponent } from './vanguard-project.component';

describe('VanguardProjectComponent', () => {
  let component: VanguardProjectComponent;
  let fixture: ComponentFixture<VanguardProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VanguardProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VanguardProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
