import { Request, Response } from "express";
import LibraryService from "../service/library.service";
import mongoose from "mongoose";

class BookController {
  public async library(req: Request, res: Response) {
    return await LibraryService.findMany()
      .then((books) => res.status(200).send(books))
      .catch((e) =>
        res.status(500).send({ message: `Erro no servidor: ${e}.` })
      );
  }

  public async register(req: Request, res: Response) {
    return await LibraryService.create(req.body)
      .then((book) =>
        res
          .status(200)
          .send({ message: `Livro: ${book.title} cadastrado com sucesso.` })
      )
      .catch((e) =>
        res.status(500).send({ message: `Erro no servidor: ${e}.` })
      );
  }

  public async update(req: Request, res: Response) {
    const id = req.params.id;
    const book = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).send({ message: "Id invalido." });
    }


    return await LibraryService.update(id, book)
      .then(() =>
        res.status(200).send({ message: "Livro atualizado com sucesso." })
      )
      .catch((e) =>
        res.status(500).send({ message: `Erro no servidor: ${e}` })
      );
  }

  public async remove(req: Request, res: Response) {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).send({ message: "Id inválido." });
    }

    const bookFinded = await LibraryService.findUnique(id);

    if (!bookFinded) {
      res.status(404).send({ message: "Livro não encontrado." });
    }

    return await LibraryService.remove(id)
      .then(() =>
        res
          .status(200)
          .send({ message: `Livro:${bookFinded.title} deletado com sucesso.` })
      )
      .catch((e) =>
        res.status(500).send({ message: `Erro no servidor: ${e}` })
      );
  }

  public async findUnique(req: Request, res: Response) {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).send({ message: "Id invalido." });
    }

    const bookFinded = await LibraryService.findUnique(id);

    if (!bookFinded) {
      res.status(404).send({ message: "Livro não encontrado." });
    }

    return res.status(200).send(bookFinded);
  }
}

export default new BookController();
