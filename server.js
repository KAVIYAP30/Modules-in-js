var http=require('http');
var mod=require('./mod');


http.createServer(function(req,res)
{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("MATHEMATICAL OPERATIONS : <br><br>")
    res.write('The addition of a and b is : '+mod.addition(3,2)+'<br>');
    res.write('The subtraction of a and b is : '+mod.subtration(3,2)+'<br>');
    res.write('The multiplication of a and b is : '+mod.multiplication(3,2)+'<br>');
    res.write('The division of a and b is : '+mod.division(3,2)+'<br>');
    res.write('The power of a to b is : '+mod.power(3,2)+'<br><br><br>');
    
    res.write("CURRENT DATE AND TIME : ")
    res.write('The current date and time is : <br>');
    res.write(mod.date());
    res.write('<br><br><br>');
    res.write('UPPER AND LOWER CASE : <br>');
    res.write(mod.upper());
    res.write('<br>');
    res.write(mod.lower());

    res.write('<br><br><br>');
    res.write('SQUARE NUMBER : '+mod.square(2));
    res.write('<br><br><br>');
    res.write('TAN VALUE : '+mod.tangent(30));
    res.write('<br><br><br>');
    res.write('ROUND OF : '+mod.roundof(20.7));
    res.write('<br><br><br>');
    res.write('RANDOM NUMBER : '+mod.ran());
    res.write('<br><br><br>');
    res.write('LOG VALUE : '+mod.logval(10));
    res.write('<br><br><br>');
    res.end();
}).listen(8888);
console.log("Server started running....");