const Sequelize = require('sequelize')

const db = new Sequelize('mysqlite', '', '', {
    host: '',
    dialect: 'sqlite',
    pool: {
        min: 0,
        max: 5,
    },
    "storage":"./mysqlite.sqlite"
})

const User = db.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    college: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    phone_number: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})

const Book = db.define('books', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    selleremail:{
        type: Sequelize.STRING,
        allowNull: false
    },
    bookname : {
        type: Sequelize.STRING,
        allowNull: false
    },
    authorname : {
        type: Sequelize.STRING,
        allowNull: false
    },
    imageurl : {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    },
    condition: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})


const Wishlist = db.define('wishlist', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    bookid: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    bookname : {
        type: Sequelize.STRING,
        allowNull: false
    },
    authorname : {
        type: Sequelize.STRING,
        allowNull: false
    },
    imageurl : {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    },
    condition: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})


const Message = db.define('messages', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    senderemail: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    bookname:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    message: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    receiveremail: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})



db.sync()
    .then(() => console.log("Database has been synced"))
    .catch((err) => console.error("Error creating database"))

exports = module.exports = {
    User, Book, Wishlist, Message
}