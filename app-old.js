
const http = require('http');

http.createServer( (req, res) => {

    res.writeHead( 200, {'Content-Type': 'application/json'} );

    let salida =  {
        nombre: 'Balta',
        edad: 33,
        url: req.url
    }

    //res.write('Hola Mundo');
    res.write( JSON.stringify(salida) );
    res.end();

}).listen(3000);

  console.log('Corriendo en el puerto 3000');