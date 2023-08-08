import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DiffViewerPopupComponent } from './components/diff-viewer-popup/diff-viewer-popup.component';

const routes: Routes = [
  { path: 'main-component', component: AppComponent },
  { path: 'diff-viewer', component: DiffViewerPopupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
