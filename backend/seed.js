const mongoose = require('mongoose');
const Car = require('./models/car'); // Substitua 'SuaModelo' pelo nome do seu modelo

// Conectar ao banco de dados MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/carros', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro de conexão ao MongoDB:'));
db.once('open', async () => {
    console.log('Conectado ao MongoDB');

    // Dados para seed
    const dadosParaSeed = [
        {
            marca: 'Ford',
            modelo: 'Fiesta',
            cor: 'Azul',
            preco: '25000',
            chassi: 'ABC123',
            ano: '2018',
        },
        {
            marca: 'Toyota',
            modelo: 'Camry',
            cor: 'Vermelho',
            preco: '35000',
            chassi: 'DEF456',
            ano: '2020',
        },
        {
            marca: 'Honda',
            modelo: 'Civic',
            cor: 'Preto',
            preco: '30000',
            chassi: 'GHI789',
            ano: '2019',
        },
        {
            marca: 'Chevrolet',
            modelo: 'Cruze',
            cor: 'Branco',
            preco: '28000',
            chassi: 'JKL012',
            ano: '2017',
        },
        {
            marca: 'BMW',
            modelo: 'X5',
            cor: 'Prata',
            preco: '50000',
            chassi: 'MNO345',
            ano: '2022',
        },
        {
            marca: 'Toyota',
            modelo: 'Tacoma',
            cor: 'Verde',
            preco: '40000',
            chassi: 'PQR678',
            ano: '2021',
        },
        {
            marca: 'Honda',
            modelo: 'Pilot',
            cor: 'Amarelo',
            preco: '45000',
            chassi: 'STU901',
            ano: '2016',
        },
        {
            marca: 'Chevrolet',
            modelo: 'Silverado',
            cor: 'Laranja',
            preco: '38000',
            chassi: 'VWX234',
            ano: '2015',
        },
        {
            marca: 'BMW',
            modelo: 'i8',
            cor: 'Roxo',
            preco: '70000',
            chassi: 'YZA567',
            ano: '2023',
        },
        {
            marca: 'Toyota',
            modelo: 'Land Cruiser',
            cor: 'Cinza',
            preco: '60000',
            chassi: 'BCD890',
            ano: '2014',
        },
    ];

    // Adicione os carros ao banco de dados
    try {
        await Car.insertMany(dadosParaSeed);
        console.log('Dados adicionados com sucesso');
    } catch (error) {
        console.error('Erro ao adicionar dados:', error);
    } finally {
        // Feche a conexão após a conclusão do seeding
        mongoose.connection.close();
    }
});