import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InActive } from './in-active';

describe('InActive', () => {
  let component: InActive;
  let fixture: ComponentFixture<InActive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InActive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InActive);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
