import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDiffComponent } from './test-diff.component';

describe('TestDiffComponent', () => {
  let component: TestDiffComponent;
  let fixture: ComponentFixture<TestDiffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestDiffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestDiffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
