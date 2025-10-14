import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InOpening } from './in-opening';

describe('InOpening', () => {
  let component: InOpening;
  let fixture: ComponentFixture<InOpening>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InOpening]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InOpening);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
