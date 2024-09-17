class Jogador{ 
    constructor(c, keyboard){
        this.c = c;
        this.keyboard = keyboard;
        this.x=0;
        this.y=0;
        this.vel=5;
        this.jump = 12;
        this.fly = 10;
        this.gravity = 8;
        this.dinosaur = new Image ();
        this.dinosaur.src = "assets/dinosaur.png";
        this.dinosaur.width=150;
        this.dinosaur.height=150;
        this.dinosaur.addEventListener('load',()=>{
           this.draw()
        })
        

    }
    management(){
        if (this.keyboard.esquerda==true) 
            if (this.x > 0)
                this.x-=this.vel; 
        if (this.keyboard.direita) 
            if (this.x < this.c.canvas.width-this.dinosaur.width){
                this.x+=this.vel;
            }
        if (this.keyboard.cima) 
            if (this.y > 0)
                this.y-=this.fly;
        if (this.keyboard.baixo)
            if (this.y < this.c.canvas.height-this.dinosaur.height) 
                this.y+=this.vel;
        if (this.keyboard.jump) 
            if (this.y > 300)
                this.y-=this.jump;
        if (this.keyboard.jump == false)
            if (this.y < this.c.canvas.height-this.dinosaur.height)
                this.y += this.gravity;
            
    }
    draw(){
        this.management();
        this.c.drawImage(this.dinosaur, this.x, this.y, this.dinosaur.width, this.dinosaur.height);
    }
   
}






