var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')
const DBSOURCE = "db.sqlite"
let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        // Cannot open database
        console.error(err.message)
        throw err
    } else {
        console.log('Connected to the SQlite database.')
        db.run(`CREATE TABLE products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            productName text, 
            description text,
            category text,
            brand text,
            expiredDate text,
            manufacturedDate text,
            batchNumber INTEGER,
            unitPrice INTEGER,
            quantity INTEGER,
            createdDate text
            )`, (err) => {
            if (err) {
                // Table already created
            } else {
                // Table just created, creating some rows
                var insert = 'INSERT INTO products (productName, description, category, brand, expiredDate, manufacturedDate, batchNumber, unitPrice, quantity, createdDate) VALUES (?,?,?,?,?,?,?,?,?,?)'
                db.run(insert, ["White Basmathi Rice", "White Basmathi Rice imported from Pakistan. High-quality rice with extra fragrance. Organically grown.", "Rice", "CIC", "2023.05.04", "2022.02.20", 324567, , 1020, 200, "2022.02.24"])
            }
        })


        db.run(`CREATE TABLE suppliers (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            supplierName text, 
        db.run(`CREATE TABLE customer (
            customerId INTEGER PRIMARY KEY AUTOINCREMENT,
            name text, 
            address text,
            joinedDate text,
            mobileNo text
            email text,
            dateOfBirth text,
            gender text,       
            age INTEGER,
            cardHolderName text,
            cardNumber INTEGER,
            expiryDate text,
            cvv INTERGER,
            timeStamp text
            )`, (err) => {
            if (err) {
                // Table already created
            } else {
                // Table just created, creating some rows
                var insert = 'INSERT INTO suppliers (supplierName, address, joinedDate, mobileNo) VALUES (?,?,?,?)'
                db.run(insert, ["D.J.Ishara", "345A ,R.A De Mel Road, Colombo 3", "16/3/2022", "0776600933"])
                
                var insert = 'INSERT INTO customer (name, address, email, dateOfBirth, gender, age, cardHolderName, cardNumber, expiryDate, cvv,timeStamp) VALUES (?,?,?,?,?,?,?,?,?,?,?)'
                db.run(insert, ["Yusuf T-Deen", "4 Rosmead Place, Colombo 7", "definitelynotafakeemail@gmail.com", "2000.02.28", "Male", 24, "Yusuf T-Deen", 4444777722228888, "12/2028",911,"2023-10-08 07:59:59"])
            }
        })



    }
})

module.exports = db
