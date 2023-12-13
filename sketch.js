//Oi :)


//IMAGEM
let imagem = []; //imagem
let verify = []; //escolhas usuáruo
let n; //número da imagem 

let test; //habilita ou desabilita o teste
let resultado; //resultado

let human;

function esrutura() //cabeçalho superior
{

  textFont('Helvetica');
  createCanvas(350,510);
  background(255);
  
  robot= 0;
  
  //cabeçalho
  push();
  noStroke();
  fill(50);
  rect(0,0,350,100);
  pop();
  //texto
  push();
  fill(255);
  textSize(18);
  text('Aperte "sim" se você vê uma', 10, 30);
  textSize(36);
  text("Pantera",10,70);
  pop();

  human = 0;
  
}

function botao() //botões inferiores
{
  //BOTÃO SIM
  if((mouseX>250)&&(mouseX<340)&&(mouseY>460)&&(mouseY<495))
    {
      fill('BLUE');
    }
  else
    {
      fill(94, 131, 229);
    }
  
  stroke(90);
  rect(240,460,100,40);
  
  fill(255);
  textSize(20);
  text('Sim',271,485);
  
  if((mouseX>120)&&(mouseX<220)&&(mouseY>460)&&(mouseY<495))
    {
      fill('BLUE');
    }
  else
    {
      fill(94, 131, 229);
    }
  
  stroke(90);
  rect(120,460,100,40);
  
  push();
  fill(255);
  textSize(20);
  text('Não',152,485);
  pop();

}


function setup() 
{  
  esrutura();

  //carregar imagens
  for(var i = 1 ; i <= 10 ; i++)
    {
      imagem[i] = loadImage(""+i+".jpg"); //as imagens são numeradas de 1 a 10
      verify[i] = false;
    }
  
  
  test=true;
  
  resultado=false;
  
  n = 1;
}


function draw()
{
  
  if(test)
    {
    //otimizar apagando a imagem anterior
    if(n==11)
      {
        results();
      }

    if((n>=1)&&(n<=10))
      {
        imagem[n].resize(350,350);
        image(imagem[n],0,100); 

        botao();
      }
    }
  
  if(resultado)
    {
      if(human>=8)
        {
          fill(255);
          textSize(48);
          textAlign(CENTER);
          text("Você não é um robô!",50,100,250,350);
          textSize(24);
          text("Resultado:"+human+"",50,250,250,350);
        }
      if(human<8)
        {
          fill(255);
          textSize(48);
          textAlign(CENTER);
          text("Você é um robô!",50,100,250,350);
          
          text(">:(",50,250,250,350);
        }
    }
  

}

function mouseClicked()
{
  if(test)
    {
    //SIM
    if((mouseX>250)&&(mouseX<340)&&(mouseY>460)&&(mouseY<495))
     {
       verify[n] = true;
       n++;
     }
    //NÃO
    if((mouseX>120)&&(mouseX<220)&&(mouseY>460)&&(mouseY<495))
      {
        n++;
      }
    }
  
  if(!test)
    {
      return;
    }
  
}

function results()
{
  if(verify[1]==true)
    {
      human++;
    }
   if(verify[2]==false)
    {
      human++;
    }
   if(verify[3]==true)
    {
      human++;
    }
   if(verify[4]==true)
    {
      human++;
    }
   if(verify[5]==false)
    {
      human++;
    }
   if(verify[6]==false)
    {
      human++;
    }
   if(verify[7]==false)
    {
      human++;
    }
   if(verify[8]==true)
    {
      human++;
    }
   if(verify[9]==false)
    {
      human++;
    }
   if(verify[10]==true)
    {
      human++;
    }
  
  

  //print(int(human));
  
  test=false;
  end();


}

function end()
{
  
  n=0;
  
  resultado = true;
  clear();
  background(50);
  draw();
  
}
