import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffViewerPopupComponent } from './diff-viewer-popup.component';

describe('DiffViewerPopupComponent', () => {
  let component: DiffViewerPopupComponent;
  let fixture: ComponentFixture<DiffViewerPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiffViewerPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiffViewerPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
