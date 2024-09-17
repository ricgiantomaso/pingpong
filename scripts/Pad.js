class Pad{ 
    constructor(c, keyboard){
        this.c = c;
        this.keyboard = keyboard;
        this.x=5;
        this.largura = 60;
        this.altura = 80;
        this.y=(this.c.canvas.height/2)-(this.altura/2);
        this.vel=5;

        this.padJogador = new Image ();
        this.padJogador.width = 60;
        this.padJogador.height = 80;
        this.padJogador.src = "assets/padJogador.png";
        this.padJogador.addEventListener('load', () => {
            this.draw()
        });
 



    }

    management(){

        if (this.keyboard.cima) 
            if (this.y > 0 && this.y - 5)
                this.y-=this.vel;
        if (this.keyboard.baixo)
            if (this.y < this.c.canvas.height-this.altura -5) 
                this.y+=this.vel;           
    }

    draw(){
        this.management();

   //     this.c.fillRect(this.x, this.y, this.largura, this.altura);
        this.c.drawImage(this.padJogador, this.x, this.y, this.padJogador.width, this.padJogador.height);
    }
   
}






