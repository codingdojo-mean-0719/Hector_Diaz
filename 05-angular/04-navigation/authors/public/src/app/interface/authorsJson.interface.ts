import { Author } from './author.interface';

export class AuthorsJson {
  message: string;
  authors: Author[];
  errors?: {
    name: {
      message: string;
    };
  };
}
