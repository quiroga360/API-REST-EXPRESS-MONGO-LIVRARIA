import { autor } from "../models/Autor.js";

class AutorController {

    static async listarAutores(_, res) {
        try {
            const listaAutores = await autor.find({});
            res.status(200).json(listaAutores);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao listar autores` });
        };
    };

    static async listarAutorPorId(req, res) {
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            res.status(200).json(autorEncontrado);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao buscar autor` });
        };
    };

    static async cadastrarAutor(req, res) {
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json({ message: "autor cadastrado com sucesso", "autor": novoAutor });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar autor` })
        };
    };

    static async atualizarAutorPorId(req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "autor atualizado" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao atualizar autor` });
        };
    };

    static async deletarAutorPorId(req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({ message: "autor deletado" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao deletar autor` });
        };
    };

};

export default AutorController;