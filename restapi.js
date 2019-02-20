//const http = require('http');
const express = require('express');
const app = express();

/*app.get('/', function(request, response) {
   response.writeHead(200);
   response.write('<html><body><p> Please specify an player in the url Path </p></body></html>');
   
   response.end();
});
*/

app.get('/player/datatable', function(request, response) {
    
  let dataSet = [
      ["Player1", "sword"],
      ["Player2", "shield"],
      ["Player3", "helmet"],
      
  ];
    
    response.end(JSON.stringify(dataSet));
    
});


   app.get('/', function(request, response) {
   response.writeHead(200);
   response.write('{"field1": "data1", "field2": "data2"}');
   response.end();
});
////////////////
//player calls//
////////////////

//get all players
app.get('/player', function(request, response){
       response.writeHead(200);
    response.write("<html><body><p>GET players. this will theoretically display players</p>" + 
    request.url + "</p>"); //Response body
    response.end();
});
//pull specific player
app.get('/player/:player', function(request, response){
    const player = request.params.player;
       response.writeHead(200);
    response.write("<html><body><p>GET specific player. this will theoretically display " + player + "</p>");
    response.end();
});
//delete
app.delete('/player/:player', function(request, response){
    const player = request.params.player;
       response.writeHead(200);
    response.write("<html><body><p>DELETE player. This will theoretically delete " + player + "</p>");
    response.end();
});
//create
app.post('/player/:player', function(request, response){
     const player = request.params.player;
       response.writeHead(200);
    response.write("<html><body><p>POST player. this will theoretically add " + player + "</p>") ;
    response.end();
});
//update
app.put('/player/:player', function(request, response){
     const player = request.params.player;
       response.writeHead(200);
    response.write("<html><body><p>UPDATE player. this will theoretically update " + player + "</p>") ;
    response.end();
});

//////////////
//item calls//
//////////////

//get all items
app.get('/item', function(request, response){
       response.writeHead(200);
    response.write("<html><body><p>GET item. this will theoretically display items</p>" + 
    request.url + "</p>"); //Response body
    response.end();
});
//get specific item
app.get('/item/:item', function(request, response){
    const item = request.params.player;
       response.writeHead(200);
    response.write("<html><body><p>" + item + "</p>" + 
    "<p>I see u r calling: " + 
    request.url + "</p>"); //Response body
    response.end();
});
//delete
app.delete('/item/:item', function(request, response){
    const item = request.params.item;
       response.writeHead(200);
    response.write("<html><body><p>DELETE item. This will theoretically delete " + item + "</p>"); 
    response.end();
});
//create
app.post('/item/:item', function(request, response){
     const item = request.params.item;
       response.writeHead(200);
    response.write("<html><body><p>POST item. this will theoretically add " + item + "</p>") ;
    response.end();
});
//update
app.put('/item/:item', function(request, response){
     const item = request.params.item;
       response.writeHead(200);
    response.write("<html><body><p>UPDATE item. this will theoretically update " + item + "</p>"); 
    response.end();
});

////////////////
//custom calls//
////////////////


//get player level
app.get('/player/:player/:race', function(request, response){
    const race = request.params.race;
    const player = request.params.player;
       response.writeHead(200);
    response.write("<html><body><p>This shows "+ player + "'s character race. He/she is a(n) " + race + "</p>"); //Response body
    response.end();
});
//get player location
app.get('/player/:player/:location', function(request, response){
    const location = request.params.item;
    const player = request.params.player;
       response.writeHead(200);
    response.write("<html><body><p>DELETE item. This will theoretically get the players location. " + player + " is located in" + location + "</p>"); 
    response.end();
});

//get player gender
app.get('/player/:player/:gender', function(request, response){
    const gender = request.params.gender;
    const player = request.params.player;
       response.writeHead(200);
    response.write("<html><body><p>This shows "+ player + "'s character gender. They are " + gender + "</p>"); //Response body
    response.end();
});

//ad player skill
app.put('/player/:player/:skill', function(request, response){
     const skill = request.params.skill;
       response.writeHead(200);
    response.write("<html><body><p>UPDATE item. this will theoretically update " + skill + " to the players skill list</p>"); 
    response.end();
});


//listens to port
app.listen(8080, function() {
   console.log('express is now working on port 8080...'); 
});
