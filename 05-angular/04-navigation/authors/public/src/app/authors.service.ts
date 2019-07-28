import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Author } from './interface/author.interface';
import { Observable } from 'rxjs';
import { AuthorJson } from './interface/authorJson.interface';
import { AuthorsJson } from './interface/authorsJson.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  authors: Author[];
  base = '/api/v1/authors';
  message: string;
  constructor(private readonly http: HttpClient) {}

  getAuthors(): Observable<AuthorsJson> {
    return this.http.get<AuthorsJson>(this.base);
  }
  getAuthor(id: string): Observable<AuthorJson> {
    return this.http.get<AuthorJson>(`authors/${id}`);
  }
  createAuthor(author: Author): Observable<AuthorJson> {
    return this.http.post<AuthorJson>(this.base, author);
  }

  updateAuthor(author: Author): Observable<AuthorJson> {
    console.log('here is the author', author);
    return this.http.put<AuthorJson>(`${this.base}/${author._id}`, author);
  }

  deleteAuthor(id: string): Observable<AuthorJson> {
    return this.http.delete<AuthorJson>(`${this.base}/${id}`);
  }
}
