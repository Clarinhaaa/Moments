import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoMomentComponent } from './novo-moment.component';

describe('NovoMomentComponent', () => {
  let component: NovoMomentComponent;
  let fixture: ComponentFixture<NovoMomentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NovoMomentComponent]
    });
    fixture = TestBed.createComponent(NovoMomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
