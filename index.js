var express = require('express');
var cors = require('cors');
require('dotenv').config()
//heeramienta para informaciond leer el archivo
const multer  = require('multer')
const upload = multer()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});


//endopoint para extraer informacion de archivo
app.route("/api/fileanalyse")
.post(upload.single('upfile'), async(req, res)=>{
  res.json({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
  })
})


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});