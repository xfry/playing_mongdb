var express     = require( 'express' ),
    mongo       = require( 'mongodb' ),
    books       = require( "./routes/books.js" );


var app = express();

app.configure(function(){
  app.use( express.logger('dev') );
  app.use(app.router);
  app.use( express.bodyParser() );
  app.use( express.static(__dirname + '/') );
});

app.get( '/books', books.findAllBooks );
app.get( '/books/:id', books.findOneBook );
app.post( '/books', books.newBook);
app.put( '/books/:id', books.updateOneBook);
app.delete( '/books/:id', books.deleteOneBook);

app.listen(3000);
console.log("listing on Port: 3000");