var tan_solo_lyric = require("./lyrics/tan_solo");
var bicho_ciudad_lyric = require("./lyrics/bicho_ciudad");
var todo_pasa_lyric = require("./lyrics/todo_pasa");
var ando_ganas_lyric = require("./lyrics/ando_ganas");
var desde_lejos_lyric = require("./lyrics/desde_lejos");
var muy_despacito_lyric = require("./lyrics/muy_despacito");
var verano_92_lyric = require("./lyrics/verano_92");
var vine_hasta_aqui_lyric = require("./lyrics/vine_hasta_aqui");
var el_farolito_lyric = require("./lyrics/el_farolito");
var como_ali_lyric = require("./lyrics/como_ali");
var buenos_tiempos_lyric = require("./lyrics/buenos_tiempos");

var express = require("express");
var cors = require("cors");
var corsOptions = {
  origin: "*",
  optionSucessStatus: 200
};
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.use(cors(corsOptions));

// for files
app.use('/files', express.static('public'));

var chactuchac_album = "";
var civilizacion_album = "";
var tercer_arco_album = "";
var ay_ay_ay_album = "";
var azul_album = "";
var verde_album = "";
var maquina_album = "";

var albums = [{
    id: "chactuchac",
    name: "Chac tu chac"
  }, {
    id: "tercer_arco",
    name: "3er Arco"
  }, {
    id: "civilizacion",
    name: "Civilización"
  }, {
    id: "ay_ay_ay",
    name: "Ay Ay Ay"
  }, {
    id: "azul",
    name: "Azul"
  }, {
    id: "verde",
    name: "Verde paisaje del infierno"
  }, {
    id: "maquina",
    name: "Máquina de sangre"
  }
];

var canciones = [
  {
    id_album: "chactuchac",
    id_cancion: "tan_solo",
    titulo: "Tan Solo",
    nombre_album: "Chac tu chac",
    foto_album: chactuchac_album
  },{
    id_album: "civilizacion",
    id_cancion: "bicho_ciudad",
    titulo: "Bicho De Ciudad",
    nombre_album: "Civilización",
    foto_album: civilizacion_album 
  },{
    id_album: "tercer_arco",
    id_cancion: "todo_pasa",
    titulo: "Todo Pasa",
    nombre_album: "3er Arco",
    foto_album: tercer_arco_album
  },{
    id_album: "ay_ay_ay",
    id_cancion: "ando_ganas",
    titulo: "Ando Ganas",
    nombre_album: "Ay Ay Ay",
    foto_album: ay_ay_ay_album
  },{
    id_album: "tercer_arco",
    id_cancion: "verano_92",
    titulo: "Verano del '92",
    nombre_album: "3er Arco",
    foto_album: tercer_arco_album
  },{
    id_album: "ay_ay_ay",
    id_cancion: "verano_92",
    titulo: "Muy despacito",
    nombre_album: "Ay Ay Ay",
    foto_album: ay_ay_ay_album
  },{
    id_album: "azul",
    id_cancion: "desde_lejos",
    titulo: "Desde lejos no se ve",
    nombre_album: "Azul",
    foto_album: azul_album
  },{
    id_album: "verde_album",
    id_cancion: "vine_hasta_aqui",
    titulo: "Vine hasta aqui",
    nombre_album: "Verde paisaje del infierno",
    foto_album: verde_album
  },{
    id_album: "tercer_arco",
    id_cancion: "el_farolito",
    titulo: "El farolito",
    nombre_album: "3er Arco",
    foto_album: tercer_arco_album
  },{
    id_album: "maquina",
    id_cancion: "como_ali",
    titulo: "Como Alí",
    nombre_album: "Máquina de sangre",
    foto_album: maquina_album
  },{
    id_album: "azul",
    id_cancion: "buenos_tiempos",
    titulo: "Buenos Tiempos",
    nombre_album: "Azul",
    foto_album: azul_album
  }
];

var cancion_descrip = [{
    id_cancion: "tan_solo",
    titulo: "Tan Solo",
    letra: tan_solo_lyric
  },{
    id_cancion: "bicho_ciudad",
    titulo: "Bicho De Ciudad",
    letra: bicho_ciudad_lyric
  },{
    id_cancion: "todo_pasa",
    titulo: "Todo Pasa",
    letra: todo_pasa_lyric
  },{
    id_cancion: "ando_ganas",
    titulo: "Ando Ganas",
    letra: ando_ganas_lyric
  },{
    id_cancion: "verano_92",
    titulo: "Verano del '92",
    letra: verano_92_lyric
  },{
    id_cancion: "muy_despacito",
    titulo: "Muy Despacito",
    letra: muy_despacito_lyric
  },{
    id_cancion: "desde_lejos",
    titulo: "Desde lejos no se ve",
    letra: desde_lejos_lyric
  },{
    id_cancion: "vine_hasta_aqui",
    titulo: "Vine hasta aqui",
    letra: vine_hasta_aqui_lyric
  },{
    id_cancion: "el_farolito",
    titulo: "El farolito",
    letra: el_farolito_lyric
  },{
    id_cancion: "como_ali",
    titulo: "Como Alí",
    letra: como_ali_lyric
  },{
    id_cancion: "buenos_tiempos",
    titulo: "Buenos Tiempos",
    letra: buenos_tiempos_lyric
  }
];

app.get("/albums", function (req, res) {
  res.send(albums);
});
app.get("/canciones", function (req, res) {
  res.send(canciones);
});
app.get("/descripcion/:id", function (req, res) {
  var id = req.params.id;
  var retorno = null;
  cancion_descrip.forEach(c => {
    if (c.id_cancion == id) {
      retorno = c;
    }
  });
  res.send(retorno);
});

app.post("/nuevaCancion", function (req, res) {
  setTimeout(function () {
    console.log("Llego al servidor " + JSON.stringify(req.body));
    if (
      (req.body.titulo != undefined && req.body.titulo != "") && 
      (req.body.nombre_album != undefined && req.body.nombre_album != "") && 
      (req.body.foto_album != undefined && req.body.foto_album != "") 
      ) {
      console.log("Sale del servidor " + "{'respuesta': 'ok'}");
      var nueva = {
        id_album: req.body.nombre_album.trim().toLowerCase(),
        id_cancion: req.body.titulo.trim().toLowerCase(),
        titulo: req.body.titulo,
        nombre_album: req.body.nombre_album,
        foto_album: req.body.foto_album
      };
      canciones.push(nueva);
      res.send({
        respuesta: 'ok',
        id_album: nueva.id_album,
        id_cancion: nueva.id_cancion
      });
      return;
    }
    console.log("Sale del servidor " + "{'respuesta': 'error'}")
    res.send({
      'respuesta': 'error'
    });
  }, 2000);
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Api en el puerto 3000");
});
