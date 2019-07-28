import { AllAuthorsComponent } from './all-authors/all-authors.component';
import { NewAuthorComponent } from './new-author/new-author.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { all } from 'q';
import { EditAuthorComponent } from './edit-author/edit-author.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'authors',
    pathMatch: 'full',
  },
  {
    path: 'authors',
    children: [
      {
        path: '',
        component: AllAuthorsComponent,
      },
      {
        path: ':id/edit',
        component: EditAuthorComponent,
      },
      {
        path: 'new',
        component: NewAuthorComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
