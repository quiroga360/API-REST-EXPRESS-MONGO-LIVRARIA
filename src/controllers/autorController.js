import { autor } from "../models/Autor.js";

class AutorController {

    static async listarAutores(_, res, next) {
        try {
            const listaAutores = await autor.find({});
            res.status(200).json(listaAutores);
        } catch (error) {
            next(error);
        };
    };

    static listarAutorPorId = async (req, res, next) => {
        try {
            const id = req.params.id;
            const autorResultado = await autor.findById(id);

            if (autorResultado !== null) {
                res.status(200).send(autorResultado);
            } else {
                res.status(404).json({ message: "Id do Autor não localizado." });
            };

        } catch (error) {
            next(error);
        };
    };

    static async cadastrarAutor(req, res, next) {
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json({ message: "autor cadastrado com sucesso", "autor": novoAutor });
        } catch (error) {
            next(error);
        };
    };

    static async atualizarAutorPorId(req, res, next) {
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "autor atualizado" });
        } catch (error) {
            next(error);
        };
    };

    static async deletarAutorPorId(req, res, next) {
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({ message: "autor deletado" });
        } catch (error) {
            next(error);
        };
    };

};

export default AutorController;