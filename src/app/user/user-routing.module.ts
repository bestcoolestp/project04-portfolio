import { Routes, RouterModule } from '@angular/router';
import { DeleteBookComponent } from './components/delete-book/delete-book.component';
import { AddBooksComponent } from './components/add-books/add-books.component';
import { UserComponent } from './user.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'add-books', component: AddBooksComponent },
  { path: 'delete-book', component: DeleteBookComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
