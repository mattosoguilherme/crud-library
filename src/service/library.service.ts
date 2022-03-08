import { BookInterface } from "../interface/Book";

import Book from "../schemas/Book";

class LibraryService {
  public async create(book: BookInterface): Promise<BookInterface> {
    return await Book.create(book);
  }
}

export default new LibraryService();
