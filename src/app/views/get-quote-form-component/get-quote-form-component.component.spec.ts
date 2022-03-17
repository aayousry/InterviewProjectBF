import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetQuoteFormComponentComponent } from './get-quote-form-component.component';

describe('GetQuoteFormComponentComponent', () => {
  let component: GetQuoteFormComponentComponent;
  let fixture: ComponentFixture<GetQuoteFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetQuoteFormComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetQuoteFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
