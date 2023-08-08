import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskSheetComponent } from './components/task-sheet/task-sheet.component';
import { CommentSectionComponent } from './components/comment-section/comment-section.component';
import { UploadPopupMenuComponent } from './components/upload-popup-menu/upload-popup-menu.component';
import { DiffViewerPopupComponent } from './components/diff-viewer-popup/diff-viewer-popup.component';
import { FormsModule } from '@angular/forms';
import { TestDiffComponent } from './components/test-diff/test-diff.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    TaskListComponent,
    TaskSheetComponent,
    CommentSectionComponent,
    UploadPopupMenuComponent,
    DiffViewerPopupComponent,
    TestDiffComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSelectModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatProgressBarModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
