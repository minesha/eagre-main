import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistationnComponent } from './registationn.component';

describe('RegistationnComponent', () => {
  let component: RegistationnComponent;
  let fixture: ComponentFixture<RegistationnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistationnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistationnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
