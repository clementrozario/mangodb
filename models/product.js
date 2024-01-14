const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

class Product {
<<<<<<< HEAD
  constructor(title, price, description, imageUrl, id) {
=======
  constructor(title, price, description, imageUrl, id, userId) {
>>>>>>> 4d456e3 (creating user table)
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
<<<<<<< HEAD
    this._id = id;
=======
    this._id = id ? new mongodb.ObjectId(id) : null;
    this.userId = userId;
>>>>>>> 4d456e3 (creating user table)
  }

  save() {
    const db = getDb();
    let dbOp;
    if (this._id) {
      // Update the product
      dbOp = db
        .collection('products')
<<<<<<< HEAD
        .updateOne({ _id: new mongodb.ObjectId(this._id) }, { $set: this });
=======
        .updateOne({ _id: this._id }, { $set: this });
>>>>>>> 4d456e3 (creating user table)
    } else {
      dbOp = db.collection('products').insertOne(this);
    }
    return dbOp
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  }

  static fetchAll() {
    const db = getDb();
    return db
      .collection('products')
      .find()
      .toArray()
      .then(products => {
        console.log(products);
        return products;
      })
      .catch(err => {
        console.log(err);
      });
  }

  static findById(prodId) {
    const db = getDb();
    return db
      .collection('products')
      .find({ _id: new mongodb.ObjectId(prodId) })
      .next()
      .then(product => {
        console.log(product);
        return product;
      })
      .catch(err => {
        console.log(err);
      });
  }
<<<<<<< HEAD
=======

  static deleteById(prodId) {
    const db = getDb();
    return db
      .collection('products')
      .deleteOne({ _id: new mongodb.ObjectId(prodId) })
      .then(result => {
        console.log('Deleted');
      })
      .catch(err => {
        console.log(err);
      });
  }
>>>>>>> 4d456e3 (creating user table)
}

module.exports = Product;
