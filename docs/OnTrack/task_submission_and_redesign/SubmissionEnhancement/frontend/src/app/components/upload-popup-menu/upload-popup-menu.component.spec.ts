import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPopupMenuComponent } from './upload-popup-menu.component';

describe('UploadPopupMenuComponent', () => {
  let component: UploadPopupMenuComponent;
  let fixture: ComponentFixture<UploadPopupMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadPopupMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadPopupMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
