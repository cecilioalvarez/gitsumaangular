
var express=require("express");
var bodyParser=require("body-parser");
var cors= require("cors");
var listaLibros=[];

listaLibros.push({"titulo":"titulo1","autor":"autor1","paginas":100,"categoria":"misterio"});
listaLibros.push({"titulo":"titulo2","autor":"autor2","paginas":100,"categoria":"romantica"});
listaLibros.push({"titulo":"titulo3","autor":"autor3","paginas":100,"categoria":"historica"});

var app=express();
app.use(bodyParser.json());
app.use(cors());

app.get("/libros",function(req,res) {
    res.send(listaLibros);

});

app.get("/libros/:titulo",function(req,res) {

    var libro= listaLibros.filter(function(e) {

        return e.titulo==req.params.titulo;

    })[0];
    res.send(libro);

})

app.delete("/libros/:titulo",function(req,res) {

    console.log(req.params.titulo);

    var borrable=listaLibros.filter(function(e) {

        return e.titulo==req.params.titulo;
    })[0];
    var indice= listaLibros.indexOf(borrable);
    listaLibros.splice(indice,1);
    res.send({"mensaje":"ok"});

});

app.post("/libros",function(req,res) {

    listaLibros.push(req.body);
    console.log(req.body);
    res.send(req.body);


});

app.listen(3000,function() {

    console.log("applicacion arrancada");
})
