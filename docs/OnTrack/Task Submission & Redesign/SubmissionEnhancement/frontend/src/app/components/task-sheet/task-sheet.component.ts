import { Component, ViewChild, ViewContainerRef, Directive } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { UploadPopupMenuComponent } from '../upload-popup-menu/upload-popup-menu.component';
import { DiffViewerPopupComponent } from '../diff-viewer-popup/diff-viewer-popup.component';


@Component({
  selector: 'app-task-sheet',
  templateUrl: './task-sheet.component.html',
  styleUrls: ['./task-sheet.component.css']
})
export class TaskSheetComponent {
  options = [
    {value: 'view-task-details-0', viewValue: 'View Task Details'},
    {value: 'view-submission-1', viewValue: 'View Submission'},
    {value: 'view-task-sheet-2', viewValue: 'View Task Sheet'},
    {value: 'download-submission-pdf-3', viewValue: 'Download Submission PDF'},
    {value: 'download-submitted-files-4', viewValue: 'Download Submitted Files'},
    {value: 'view-all-submissions', viewValue: 'View All Submission Files'}
  ];
  constructor(public dialog: MatDialog){}


  openDialog(): void{
    const dialogRef = this.dialog.open(UploadPopupMenuComponent, {
      width: '900px',
      height: '600px',
    })
  }
  openDropdown(): void{
    document.getElementById("myDropdown")?.classList.toggle("show");
  }
  openDiffView(): void{
    const dialogRef = this.dialog.open(DiffViewerPopupComponent, {
      width: '100%',
      height: '100%',
    })
  }
}
