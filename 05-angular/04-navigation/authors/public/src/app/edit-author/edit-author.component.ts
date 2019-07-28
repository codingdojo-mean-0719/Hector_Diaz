import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';
import { Author } from '../interface/author.interface';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css'],
})
export class EditAuthorComponent implements OnInit {
  author: Author;
  constructor(
    private readonly authorService: AuthorsService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      this.author = this.authorService.authors.find(
        author => author._id === param.get('id')
      );
    });
  }

  updateAuthor(event: Event): void {
    event.preventDefault();
    this.authorService
      .updateAuthor(this.author)
      .subscribe(results => console.log('subscription', results));
    this.router.navigate(['']);
  }
}
