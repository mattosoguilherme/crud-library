import { BookInterface } from "../interface/book.interface";

import Book from "../schemas/Book";

class LibraryService {
  public async create(book: BookInterface) {
    return await Book.create(book);
  }

  public async update(id: string, book: BookInterface) {
    return await Book.updateOne({ _id: id }, book);
  }

  public async remove(id: string) {
    return await Book.deleteOne({ _id: id });
  }

  public async findUnique(id: string) {
    return await Book.findById(id);
  }

  public async findMany() {
    return await Book.find();
  }
}

export default new LibraryService();
