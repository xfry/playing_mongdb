var mongo       = require('mongodb'),
    server      = new mongo.Server('localhost', 27017, {auto_reconnect: true, safe: false}),
    Db          = new mongo.Db('bookdb', server);

//open databse
Db.open(function(err, db){
  if(!err){
    console.log('connected to database BookDb');

    db.collection('Books', {strict: true}, function(err, Books){
      if(err){
        console.log("the Books collections does not exist, creating...");
        seedDB();
      }
    });
  }
});

var findAllBooks = findAllBooks = function ( req, res ){
  Db.collection("books", function(err, collection){
    collection.find().toArray(function(err, books){
      res.send(books);
    });
  });
};

var findOneBook = findById = function ( req, res ){
  res.send({
    id:           req.params.id,
    name:         "el nombre",
    description:  'description'
  });
};

var newBook = addBook = function ( req, res ){
  res.send({id: req.params.id, name: "el nombre", description: 'description'});
};

var updateOneBook = updateBook = function ( req, res ){
  res.send({id: req.params.id, name: "el nombre", description: 'description'});
};

var deleteOneBook = deleteBook = function ( req, res ){
  res.send({id: req.params.id, name: "el nombre", description: 'description'});
};

var seedDB = function(){
  var books = [
    {
        title: "EL CORONEL NO TIENE QUIEN LE ESCRIBA",
        year: "1961",
        author: "Gabriel García Márquez",
        country: "Colombia",
        description: "The aromas of fruit and spice...",
        picture: "cover-coronel.jpg"
    },
    {
        title: "CHANGÓ EL GRAN PUTAS",
        year: "2010",
        author: "Manuel Zapata Olivella",
        country: "Colombia",
        description: "This book is part of the volume Afro Colombian Library Books...",
        picture: "cover-coronel.jpg"
    }];
  
  Db.collection('books', function(err, book){
    book.insert(books, {safe:true}, function(err, result){
    });
  });
}
module.exports = {
  "findAllBooks":      findAllBooks,
  "findOneBook":     findOneBook,
  "newBook":      addBook,
  "updateOneBook":   updateBook,
  "deleteOneBook":   deleteBook
};