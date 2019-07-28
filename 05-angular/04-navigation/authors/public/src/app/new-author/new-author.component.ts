import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';
import { Author } from '../interface/author.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-author',
  templateUrl: './new-author.component.html',
  styleUrls: ['./new-author.component.css'],
})
export class NewAuthorComponent implements OnInit {
  author = new Author();
  constructor(
    private readonly authorsService: AuthorsService,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.authorsService.message = '';
  }
  createAuthor(event: Event): void {
    event.preventDefault();
    this.authorsService.createAuthor(this.author).subscribe(result => {
      console.log('here is the create author result', result);
      if (result) {
        const {
          errors: {
            name: { message: errors },
          },
        } = result;

        this.authorsService.message = errors;
      } else {
        this.authorsService.message = '';
      }
      this.router.navigate(['']);
    });
  }
}
