import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from './material.module';
import { BoolFormatPipe } from './pipes/bool-format.pipe';
import { AuthorsComponent } from './components/authors/authors.component';
import { AuthorsAddressComponent } from './components/authors-address/authors-address.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    NotFoundComponent,
    ToolbarComponent,
    FooterComponent,
    BoolFormatPipe,
    AuthorsComponent,
    AuthorsAddressComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MaterialModule,
    HttpClientModule,
  ],
  exports: [
    ToolbarComponent,
    FooterComponent,
    MaterialModule,
    AuthorsComponent,
    AuthorsAddressComponent,
    HttpClientModule,
    BoolFormatPipe,
  ],
})
export class SharedModule {}
