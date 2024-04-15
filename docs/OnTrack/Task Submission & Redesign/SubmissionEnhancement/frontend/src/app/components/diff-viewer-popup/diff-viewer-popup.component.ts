import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgIf } from '@angular/common';
import { TestDiffComponent } from '../test-diff/test-diff.component';
import * as DiffMatchPatch from 'diff-match-patch';
import { diff_match_patch } from 'diff-match-patch';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-diff-viewer-popup',
  templateUrl: './diff-viewer-popup.component.html',
  styleUrls: ['./diff-viewer-popup.component.css'],
})
export class DiffViewerPopupComponent {
  isChecked = false;
  isAlsoChecked = false;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(TestDiffComponent, {
      width: '900px',
      height: '600px',
    });
  }

  text1 = '';
  text2 = '';
  diff: string | undefined;

  computeDiff() {
    const dmp = new DiffMatchPatch.diff_match_patch();
    const diffs = dmp.diff_main(this.text1, this.text2);
    dmp.diff_cleanupSemantic(diffs);

    this.diff = dmp
      .diff_prettyHtml(diffs)
      .replace(/&lt;ins&gt;(.*?)&lt;\/ins&gt;/g, '<span class="diff-ins"></span>')
      .replace(/&lt;del&gt;(.*?)&lt;\/del&gt;/g, '<span class="diff-del"></span>');
  }
}
