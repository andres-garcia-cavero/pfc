import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsIperfComponent } from './tools-iperf.component';

describe('ToolsIperfComponent', () => {
  let component: ToolsIperfComponent;
  let fixture: ComponentFixture<ToolsIperfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolsIperfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolsIperfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
