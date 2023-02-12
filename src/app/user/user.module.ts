import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBooksComponent } from './components/add-books/add-books.component';
import { DeleteBookComponent } from './components/delete-book/delete-book.component';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [AddBooksComponent, DeleteBookComponent, UserComponent],
  imports: [CommonModule, UserRoutingModule],
})
export class UserModule {}
