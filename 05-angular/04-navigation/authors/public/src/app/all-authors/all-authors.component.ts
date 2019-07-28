import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';
import { Author } from '../interface/author.interface';

@Component({
  selector: 'app-all-authors',
  templateUrl: './all-authors.component.html',
  styleUrls: ['./all-authors.component.css'],
})
export class AllAuthorsComponent implements OnInit {
  authors: Author[];
  message: string;
  constructor(private readonly authorsService: AuthorsService) {}

  ngOnInit() {
    this.getAuthors();
    this.message = this.authorsService.message;
    console.log('here is the message', this.authorsService.message);
  }

  getAuthors(): void {
    this.authorsService.getAuthors().subscribe(authors => {
      console.log('here are the authors', authors.authors);
      this.authorsService.authors = authors.authors;
      this.authors = this.authorsService.authors;
    });
  }
  deleteAuthor(event: Event, id: string): void {
    event.preventDefault();
    this.authorsService.deleteAuthor(id).subscribe(response => {
      if (response) {
        this.getAuthors();
      }
    });
  }
}
