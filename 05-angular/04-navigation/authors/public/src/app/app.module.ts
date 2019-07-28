import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NewAuthorComponent } from './new-author/new-author.component';
import { AllAuthorsComponent } from './all-authors/all-authors.component';
import { HttpClientModule } from '@angular/common/http';
import { EditAuthorComponent } from './edit-author/edit-author.component';

@NgModule({
  declarations: [AppComponent, NewAuthorComponent, AllAuthorsComponent, EditAuthorComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
