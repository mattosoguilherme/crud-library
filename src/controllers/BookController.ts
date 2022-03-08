import { Request, Response } from "express";
import LibraryService from "../service/library.service";

import Book from "../schemas/Book";

class BookController {
  public async library(req: Request, res: Response): Promise<Response> {
    const books = await Book.find();

    return res.json(books);
  }

  public async register(req: Request, res: Response): Promise<Response> {
    const book = await LibraryService.create(req.body)

    return res.json(book);
  }
}

export default new BookController();