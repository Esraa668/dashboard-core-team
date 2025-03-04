import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DhikrComponent } from './dhikr.component';

describe('DhikrComponent', () => {
  let component: DhikrComponent;
  let fixture: ComponentFixture<DhikrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DhikrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DhikrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
