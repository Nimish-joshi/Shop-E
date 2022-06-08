import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewformsComponent } from './reviewforms.component';

describe('ReviewformsComponent', () => {
  let component: ReviewformsComponent;
  let fixture: ComponentFixture<ReviewformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewformsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
