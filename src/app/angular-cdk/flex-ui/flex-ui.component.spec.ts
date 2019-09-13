import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexUiComponent } from './flex-ui.component';

describe('FlexUiComponent', () => {
  let component: FlexUiComponent;
  let fixture: ComponentFixture<FlexUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
