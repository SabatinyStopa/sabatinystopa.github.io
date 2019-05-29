var Sprite = function(img,srcX,srcY,largura,altura,posX,posY){
	this.img = img;
	this.srcX = srcX;
	this.srcY = srcY;
	this.largura = largura;
	this.altura = altura;
	this.posX = posX;
	this.posY = posY;
	this.countAnim = 0;
	this.velocidade = 0;
	this.vida = 1;	
	this.gravidade = 0;
	this.visible = false;	

	this.animation = function(){
		this.countAnim++;		
		if(this.countAnim >= 12){
			this.countAnim = 0;			
			}
			this.srcX = Math.floor(this.countAnim/2)* this.largura;			
		}
}
Sprite.prototype.centerX = function(){
	return this.posX + (this.largura/2);
}
Sprite.prototype.centerY = function(){
	return this.posY + (this.altura/2);
}
Sprite.prototype.metadeLargura = function(){
	return this.largura/2;
}
Sprite.prototype.metadeAltura = function(){
	return this.altura/2;
}

var Alien = function(img,srcX,srcY,largura,altura,posX,posY){	
	this.velocidadeY = 4;
	Sprite.call(this,img,srcX,srcY,largura,altura,posX,posY);


	this.animation = function(){
		
		if(this.countAnim >= 40){
			this.countAnim = 0;			
			}
			this.srcX = Math.floor(this.countAnim/5)* this.largura;			
		}

}
Alien.prototype = Object.create(Sprite.prototype);

var Orc = function(img,srcX,srcY,largura,altura,posX,posY){
	Sprite.call(this,img,srcX,srcY,largura,altura,posX,posY);

	this.animation = function(){
		this.countAnim++;
		if(this.countAnim >= 40){
			this.countAnim = 0;			
			}
			this.srcX = Math.floor(this.countAnim/5)* this.largura;			
		}	
}
Orc.prototype = Object.create(Sprite.prototype);

var Fogo = function(img,srcX,srcY,largura,altura,posX,posY){
	Sprite.call(this,img,srcX,srcY,largura,altura,posX,posY);

	this.animation = function(){
		this.countAnim++;
		if(this.countAnim >= 35){
			this.countAnim = 0;
		}
		this.srcX = Math.floor(this.countAnim/5)*this.largura;
	}
}
Fogo.prototype = Object.create(Sprite.prototype);

var Laser = function(img,srcX,srcY,largura,altura,posX,posY){
	Sprite.call(this,img,srcX,srcY,largura,altura,posX,posY);

	this.animation = function(){
		this.countAnim++;
		
	}
}

var Explode = function(img,srcX,srcY,largura,altura,posX,posY){
	Sprite.call(this,img,srcX,srcY,largura,altura,posX,posY);

	this.animation = function(){
		this.countAnim++;
		if(this.countAnim >= 36){
			this.countAnim = 0;
		}
		this.srcX = Math.floor(this.countAnim/2)*this.largura-6;	
	}
}
Explode.prototype = Object.create(Sprite.prototype);

var Pimenta = function(img,srcX,srcY,largura,altura,posX,posY){
	Sprite.call(this,img,srcX,srcY,largura,altura,posX,posY);

}
Pimenta.prototype = Object.create(Sprite.prototype);
var Message = function(posY,text){
	this.posX = 0;
	this.posY = posY;
	this.text = text;
	this.visible = false;
	this.font = "normal bold 40px algerian";
	this.color = "red";

}
