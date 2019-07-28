import { Author } from './author.interface';

export class AuthorJson {
  message: string;
  author: Author;
  errors?: {
    name: {
      message: string;
    };
  };
}
