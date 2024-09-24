class Bola{ 
    constructor(c,pad){
        this.c = c;
        this.pad = pad;
        this.dirX = -1;
        this.dirY = 0;
        this.largura = 30;
        this.altura = 30;
        this.x=(this.c.canvas.width/2)-(this.largura/2);
        this.y=(this.c.canvas.height/2)-(this.altura/2);
        this.vel=5;
        this.movendo = false;
        
        this.bolaImagem = new Image ();
        this.bolaImagem.width = 30;
        this.bolaImagem.height = 30;
        this.bolaImagem.src = "assets/bola.png";
        this.bolaImagem.addEventListener('load', () => {
            this.draw()
        });
// this.c.drawImage(this.bolaImagem, this.x, this.y, this.bolaImagem.width, this.bolaImagem.height);


    }

    startGame(){
        this.movendo=true;
        this.dirY = (Math.random()*10 > 5 ? -1 : 1);
    }

    management(){
        if (this.movendo){
            this.x += (this.dirX * this.vel);
            this.y += (this.dirY * this.vel);
            if (this.x >= (this.c.canvas.width - this.largura)){
                pontoJogador1++;
                this.resetBall();
                this.dirX = 1;
                console.log(this.dirX);

            }
            if (this.x <= 0){
                pontoJogador2++;
                this.resetBall();
                this.dirX = -1;

            }
            if (this.y >= (this.c.canvas.height - this.altura)){
                this.dirY *= -1;
            }
            if (this.y <= 0){
                this.dirY *= -1;
            }
            if ((this.x <= this.pad.x + this.pad.largura) && (this.x + this.largura >= this.pad.x)
                && ((this.y + this.altura >= this.pad.y) && (this.y <= this.pad.altura+ this.pad.y)))
                {
                    this.dirX = 1;
                }
            if ((this.x <= this.pad.x + this.pad.largura) && (this.x + this.largura >= this.pad.x)
                && ((this.y + this.altura >= this.pad.y) && (this.y <= this.pad.altura+ this.pad.y)))
                {
                    this.dirX = 1;
                    this.dirY = ((this.y + (this.altura/2))-(this.pad.y + (this.pad.altura/2)))/16;
                    
                } 

    }
    }

    resetBall()
    {
        this.movendo=false;
        setTimeout(() => 
        { 
            this.x=(this.c.canvas.width/2)-(this.largura/2);
            this.y=(this.c.canvas.height/2)-(this.altura/2);
            pad.x=5;
            pad.y=(this.c.canvas.height/2)-(pad.altura/2);
            cpu.x=(this.c.canvas.width - cpu.largura - 5);
            cpu.y=(this.c.canvas.height/2)-(cpu.altura/2);
        }, 1000);
    }

    draw(){
        this.management();

        this.c.drawImage(this.bolaImagem, this.x, this.y, this.bolaImagem.width, this.bolaImagem.height);
       // this.c.fillRect(this.x, this.y, this.largura, this.altura);
    }
   
}






