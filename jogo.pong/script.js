let xBolinha = 300;
let yBolinha = 200;
let diametro = 30;
let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;
let raio = diametro / 2;

function setup() {
    createCanvas(600,400);
    }  
    
function draw() {
       background(0);
       moveBolinha();
       bolinha();
    

    function moveBolinha() {
    //VELOCIDADE X BOLINHA - AQUI A BOLINHA RECEBE A VELOCIDADE
       xBolinha += velocidadexBolinha;
    //ADICIONAR VELOCIDADE A BOLINHA
       yBolinha += velocidadeyBolinha;
    }

    function bolinha() {
       circle(xBolinha, yBolinha, diametro);
    }

    //AS DUAS BARRAS SIGNIFICA OU
    if(xBolinha + raio > width || xBolinha - raio < 0) {
       velocidadexBolinha *= -1;
    }

    console.log(velocidadexBolinha)

    //CRIA CONDIÇAO DA BOLINHA
    if(yBolinha + raio > height || yBolinha - raio < 0) {
       velocidadeyBolinha *= -1;
    }

    //CRIAR RAQUETE
    react(10,150,10,90)
    //  react(xRaquete, yRaquete, raqueteComprimento, raqueteAltura)
    
}


