import { Component } from '@angular/core';
import * as DiffMatchPatch from 'diff-match-patch';
import { diff_match_patch } from 'diff-match-patch';

@Component({
  selector: 'app-test-diff',
  templateUrl: './test-diff.component.html',
  styleUrls: ['./test-diff.component.css'],
})
export class TestDiffComponent {
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
