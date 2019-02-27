var express = require("express");
var app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/angular/online-store-app/src/index.html');
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});
