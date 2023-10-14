const Car = require("../models/car");
module.exports = {
    async create(req, res) {
        try {
            const data = await Car.create(req.body);
            return res.status(201).send({ response: data });
        } catch (error) {
            return res.status(400).send({ error });

        }

    },
    async index(req, res) {

        try {
            const data = await Car.find({});
            return res.status(201).send({ response: data });


        } catch (error) {

            return res.status(400).send({ error });


        }

    },
    async edit(req, res) {
        const { chassi } = req.params;
        const { marca, modelo, cor, preco, ano } = req.body;

        try {

            const carroExistente = await Car.findOne({ chassi });

            if (!carroExistente) {
                return res.status(404).json({ error: 'Carro não encontrado' });
            }


            carroExistente.marca = marca;
            carroExistente.modelo = modelo;
            carroExistente.cor = cor;
            carroExistente.preco = preco;
            carroExistente.ano = ano;
            carroExistente.chassi = chassi;

            const carroAtualizado = await carroExistente.save();

            res.status(201).send({ response: carroAtualizado });
        } catch (error) {
            console.error('Erro ao editar o carro:', error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    },
    async delete(req, res) {
        const { chassi } = req.params;

        try {

            const car = await Car.findOne({ chassi });

            if (!car) {
                return res.status(404).json({ error: 'Veículo não encontrado' });
            }
            await Car.deleteOne({ chassi });
            return res.status(201).send({ message: 'Veículo deletado com sucesso' });
        } catch (error) {
            console.error('Erro ao deletar veículo:', error);
            return res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }
}