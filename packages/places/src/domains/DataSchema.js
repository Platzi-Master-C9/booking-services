const { DataTypes } = require('sequelize');

const database = require('../drivers/mysql/connection');

const {
    STRING, SMALLINT, BOOLEAN, INTEGER, DECIMAL, DATE
} = DataTypes;

const is_active = {
    type: BOOLEAN,
    allowNull: false,
    defaultValue: true
};

const Place = database.define('Place', {

    place_name: {
        type: STRING(150),
        allowNull: false
    },
    price_per_night_usd: {
        type: SMALLINT,
        allowNull: false
    },
    host_id: {
        type: INTEGER,
        allowNull: false
    },
    rating: {
        type: DECIMAL(2, 1)
    },
    is_active

}, { tableName: 'places' });

const Image = database.define('Image', {
    url: {
        type: STRING(300),
        allowNull: false
    },
    place_id: {
        type: INTEGER,
        allowNull: false
    },
    is_active
}, { tableName: 'images' });

const Perk = database.define('Perk', {
    perk: {
        type: STRING(50),
        allowNull: false
    },
    place_id: {
        type: INTEGER,
        allowNull: false
    },
    is_active

}, { tableName: 'perks' });

const Space = database.define('Space', {
    space: {
        type: STRING(50),
        allowNull: false
    },
    place_id: {
        type: INTEGER,
        allowNull: false
    },
    is_active
}, { tableName: 'spaces' });

const Rule = database.define('Rule', {
    rule: {
        type: STRING(200),
        allowNull: false
    },
    place_id: {
        type: INTEGER,
        allowNull: false
    },
    is_active
}, { tableName: 'rules' });

const Book = database.define('Book', {
    user_id: {
        type: INTEGER,
        allowNull: false
    },
    in_date: {
        type: DATE,
        allowNull: false
    },
    out_date: {
        type: DATE,
        allowNull: false
    },
    place_id: {
        type: INTEGER,
        allowNull: false
    },
    is_active
}, { tableName: 'books' });

const fkGenerator = (Model) => {
    Model.belongsTo(Place, {
        foreignKey: 'place_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    });
};

fkGenerator(Image);

fkGenerator(Perk);

fkGenerator(Space);

fkGenerator(Rule);

fkGenerator(Book);

module.exports = {
    Place,
    Image,
    Perk,
    Space,
    Book,
    Rule

};
