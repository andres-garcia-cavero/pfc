import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsDItgComponent } from './tools-d-itg.component';

describe('ToolsDItgComponent', () => {
  let component: ToolsDItgComponent;
  let fixture: ComponentFixture<ToolsDItgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolsDItgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolsDItgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
