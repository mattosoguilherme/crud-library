import { Request, Response } from "express";
import LibraryService from "../service/library.service";

class BookController {
  public async library(req: Request, res: Response) {
    return await LibraryService.findMany().then((books) => {
      res.status(200).send(books);
    });
  }

  public async register(req: Request, res: Response) {
    return await LibraryService.create(req.body)
      .then((book) => {
        res
          .status(200)
          .send({ message: `Livro: ${book.title} cadastrado com sucesso.` });
      })
      .catch((e) => {
        res.status(500).send({ message: `Erro no servidor: ${e}.` });
      });
  }

  public async update(req: Request, res: Response) {
    const id = req.params.id;
    const book = req.body;

    return await LibraryService.update(id, book)
      .then(() => {
        res.status(200).send({ message: "Livro atualizado com sucesso." });
      })
      .catch((e) => {
        res.status(500).send({ message: `Erro no servidor: ${e}` });
      });
  }

  public async remove(req: Request, res: Response) {
    const id = req.params.id;
    const bookFinded = await LibraryService.findUnique(id);

    return await LibraryService.remove(id)
      .then(() => {
        res
          .status(200)
          .send({ message: `Livro:${bookFinded.title} deletado com sucesso.` });
      })
      .catch((e) => {
        res.status(500).send({ message: `Erro no servidor: ${e}` });
      });
  }

  public async findUnique(req: Request, res: Response) {
    const id = req.params.id;

    return await LibraryService.findUnique(id);
  }
}

export default new BookController();
