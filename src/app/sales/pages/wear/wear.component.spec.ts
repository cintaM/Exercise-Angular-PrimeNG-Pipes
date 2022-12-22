import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WearComponent } from './wear.component';

describe('WearComponent', () => {
  let component: WearComponent;
  let fixture: ComponentFixture<WearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
