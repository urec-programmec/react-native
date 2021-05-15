const http = require("http");
const fs = require("fs");
var url = require( "url" );
var queryString = require( "querystring" );
const randomPhrases = [
    "Hello from HELL!!!",
    "Do you want to master machine learning and start in your career?",
    "The XXX.com is inviting you! Welcome!",
    "Tag. Tap. Stop. CHhhhh... Chat bot relaxing... Chhhh...",
    "Radio TAPOK online.",
    "Freedom.com is dom, DOM or home?",
    "[ W.E.L.L.C.O.M ]",
    "Шпатель не забудьте пожалуйста",
    "А гидрогелевые патчи где продаются?",
    "I'm not interactive, i am stupid.",
]

http.createServer(function(request,response){    
    // console.log(request.url);

    if(request.url === "/"){
        // console.log("Главная страница");
        fs.readFile("index.html", "utf8", function(error, data){
            data = data.replace("{send}", "return sendData();");
            response.end(data);
        })
    }
    else if(request.url === "/take"){
        console.log("Запрос с данными");
        
        var data = '';
        request.on('data', function(chunk) {
            data += chunk.toString();
        });
        request.on('end', function() {
            let message = JSON.parse(data)["message"];
            console.log(message);

            let json = JSON.stringify({
                "message": randomPhrases[Math.round(Math.random() * 9)]
            });

            response.end(json);
        });
    }
    else {
        // console.log("Ошибка");
        fs.readFile("error404.html", "utf8", function(error, data){
            response.end(data);
        })
    }
     
}).listen(3000, "127.0.0.1",function(){
    console.log("Сервер начал прослушивание запросов на порту 3000");
});