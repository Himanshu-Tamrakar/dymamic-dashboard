import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragRopComponent } from './drag-rop.component';

describe('DragRopComponent', () => {
  let component: DragRopComponent;
  let fixture: ComponentFixture<DragRopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragRopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragRopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
