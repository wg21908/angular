import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WescomponentComponent } from './wescomponent.component';

describe('WescomponentComponent', () => {
  let component: WescomponentComponent;
  let fixture: ComponentFixture<WescomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WescomponentComponent]
    });
    fixture = TestBed.createComponent(WescomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
