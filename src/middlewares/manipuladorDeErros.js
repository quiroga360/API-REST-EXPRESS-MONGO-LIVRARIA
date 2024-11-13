import mongoose from "mongoose";

function manipuladorDeErros(error, req, res, next) {
    if (error instanceof mongoose.Error.CastError) {
        res.status(400).json({ message: "Um ou mais dados fornecidos estão incorretos." });
    } else {
        res.status(500).json({ message: "Erro interno do servidor." });
    };
};

export default manipuladorDeErros;