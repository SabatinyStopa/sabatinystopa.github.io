(function(){
	var canvas = document.querySelector("canvas"),
		ctx = canvas.getContext("2d");
	//teclas
		var ENTER = 13, SPACO = 32, CIMA = 38, E = 69;
	//arrays
		var sprites = [], tiros = [], especiais = [], aliens = [], aliens2 = [], aliens3 = [], aliens4 = [], orcs = [], personagens = [], explodes = [], mensagens = [], tirosInimigo = [], inimigos = [], pimentas = [],chuvas = [];

	//Estados do jogo
		var inicio = 0, jogando = 1, paused = 2, over = 3, tutorial = 4, escolhaModo = 5;
		var estado = inicio;
		var normal = 0, classico = 1;
		var modo = normal; 
	//Modos de jogo
		//Ondas
			var onda1 = false, onda2 = false, onda3 = false, onda4 = false, onda5 = false, onda6 = false, onda7 = false, onda8 = false, onda9 = false, onda10 = false, onda11 = false, onda12 = false, onda13 = false, onda14 = false, onda15 = false, onda16 = false, onda17 = false, onda18 = false, onda19 = false, onda20 = false;
			var onda = 0;			
	//Imagens
		//Fundo
			var backgroundI = new Image();
				backgroundI.src = "background.jpg";
		//Torre
			var torreI = new Image();
				torreI.src = "torre.png";
		//Orc
			var orcI = new Image();
				orcI.src = "orc.png";
		//Alien
			var alienI = new Image();
				alienI.src = "alien.png";
		//Alien Azul
			var alien2I = new Image();
				alien2I.src = "alien2.png";
		//Alien Branco
			var alien3I = new Image();
				alien3I.src = "alien3.png";				
		//Alien Cinza
			var alien4I = new Image();
				alien4I.src = "alien4.png";
		//Personagem
			var personagemI = new Image();
				personagemI.src = "personagem.png";
		//Tiro de fogo
			var fogoI = new Image();
				fogoI.src = "fogo.png";
		//Explsão
			var explodeI = new Image();
				explodeI.src = "explode.png";
		//Caveira
			var caveiraI = new Image();
				caveiraI.src = "caveira.png";
		//Vida
			var vidaI = new Image();
				vidaI.src = "vida.png";
		//fogo Ícone
			var municaoI = new Image();
				municaoI.src = "fire.png";
		//Especial
			var especialI = new Image();
				especialI.src = "especial.png";		
		//Munição infinita
			var infinitoI = new Image();
				infinitoI.src = "infinito.png";
		//Pimenta
			var pimentaI = new Image();
				pimentaI.src = "pimenta.png";
		//Tutorial		
			var hudTutorialI = new Image();
				hudTutorialI.src = "hudTutorial.png";
		//Menu
			var menuI = new Image();
				menuI.src = "menu.png";
			//Variaveis do menu
				var bt1 = new Botao(500,85,300,200);
				var bt2 = new Botao(500,170,300,200);				
					
	//Personagem
		//Movimento e tiro
			var mvC = false, mvT = false, mvE = false;
			var spaceIsDown = false;
		//Cria o personagem
			var personagem = new Sprite(personagemI,0,0,64,64,100,10);
				personagem.vida = 5;
				sprites.push(personagem);
				personagens.push(personagem);
		//Animação de ataque
			var iniciaAnimacao = false;
		//Especiais
			var laserOn = false;
			var infinito = false;
			var infinitoCont = 0;
		//Chuva de fogo Especial
			var chuvaDeFogo = false;
			var chuvaCont = 0;			
		//Abastecimento
			var abastecido = false;
			var abastecidoTiro = 0;	
		//Pimenta
			var taxaCriaPimenta = 0;	
	//Inimigos
		//Taxas de criação dos inimigos
			var taxaA = 200, taxaO = 100, taxaA2 = 200, taxaA3 = 200, taxaA4 = 200;
			var	taxaCriaAlien = 0, taxaCriaOrc = 0, taxaCriaAlien2 = 0, taxaCriaAlien3 = 0, taxaCriaAlien4 = 0;

		//Taxa de tiro dos aliens
			var taxaTiroVermelho = 200, taxaTiroAzul = 100, taxaTiroCinza = 70;
			var taxaParaTiroVermelho = 0, taxaParaTiroCinza = 0, taxaParaTiroAzul = 0;
	//HUD
		var matou = 0, vida = 5, energia = 0, municao = 60;	
		//Energia
			var energia = 0;
	//Mensagens do jogo
		var mensagemInicio = new Message(canvas.height/2+62,"Aperte ENTER para jogar");			
			mensagens.push(mensagemInicio);
		var mensagemPause = new Message(canvas.height/2,"Parado");
			mensagens.push(mensagemPause);
		var mensagemFim = new Message(canvas.height/2+200,"A torre foi invadida");
			mensagens.push(mensagemFim);		
			
	//MenuClique
		canvas.onclick = function(e){
			var rectNav = canvas.getBoundingClientRect();
			var pos = {
				x: e.clientX - rectNav.left,
				y: e.clientY - rectNav.top
			};
			if(estado === inicio){
				//Modo Normal
				if(pos.x>bt1.posX && pos.x<(bt1.posX + bt1.largura) && pos.y>bt1.posY && pos.y<(bt1.posY+bt1.altura)){
					estado = tutorial;
					modo = normal;					
					mensagemInicio.visible = false;
				}
				//Modo clássico
				if(pos.x>bt2.posX && pos.x<(bt2.posX + bt2.largura) && pos.y>bt2.posY && pos.y<(bt2.posY+bt2.altura)){
					estado = tutorial;
					modo = classico;					
					mensagemInicio.visible = false;
					municao = 80;					
				}

				
			}
		}
	window.addEventListener("keydown",function(e){
		switch(e.keyCode){
			case CIMA:
				mvC = true;
			break;
			case SPACO:
				if(!spaceIsDown && estado === jogando){
					mvT = true;
					iniciaAnimacao = true;				
				}
			break;
			case E:
				mvE = true;
			break;
			case ENTER:
				if(estado === inicio){
					estado = tutorial;					
					mensagemInicio.visible = false;

				}else
				if(estado === tutorial || estado === paused){
					estado = jogando;
					mensagemPause.visible = false;
					mensagemInicio.visible = false;
				}else				
				if(estado === jogando){
					estado = paused;
					mensagemPause.visible = true;
				}else
				if(estado === over){
					location.reload();
				}				
			break;
		}
	},false);

	window.addEventListener("keyup",function(e){
		switch(e.keyCode){
			case CIMA:
				mvC = false;
			break;
			case E:
				mvE = false;
			break;
			case SPACO:				
				spaceIsDown = false;							
			break;
		}
	},false);
	//funções do jogo
	function loop(){
		window.requestAnimationFrame(loop,canvas);
		if(estado === jogando){
			atualiza();					
			mensagemInicio.visible = false;
			
		}
		//Mensagem que aparece depois de um tempo
			if(estado === tutorial){
				setTimeout(function(){
					mensagemInicio.visible = true;
				},7000);
			}		
		desenha();
	}
	function atualiza(){			
		//Personagem
			//Movimento
				for(var i in personagens){
					var per = personagens[i];
					if(per.visible){
						per.gravidade = 5;
						per.posY += per.gravidade;
						per.posY = Math.max(0,Math.min(canvas.height - per.altura - 100,per.posY));					
							//CIMA
								if(mvC){
									per.velocidade = 10;
									per.posY -= per.velocidade;
								}
						//Colisão com o tiro do alien
						for(var j in tirosInimigo){
							var t = tirosInimigo[j];
							if(collide(t,per)){
								per.vida--;
								removeObjects(t,sprites);
								removeObjects(t,tirosInimigo);
								if(per.vida < 0){
									fimDeJogo();
								}
							}
						}
						//Colisão da pimenta com o alien
						for(var z in pimentas){
							var p = pimentas[z];
								if(collide(p,per)){
									municao += 7;
									removeObjects(p,sprites);
									removeObjects(p,pimentas);
								}if(collide(p,per) && infinito){
									infinitoCont = 0;
									removeObjects(p,sprites);
									removeObjects(p,pimentas);
								}
						}
					}
				}
			//Ações
				//animação
					if(iniciaAnimacao){
						personagem.animation();

					}
					if(personagem.countAnim === 0){
						iniciaAnimacao = false;
					}
				//Tiro
					//Tiro com o infinito 
						if(infinito){							
							infinitoCont++;
							if(infinitoCont >= 350){
								infinito = false;
								infinitoCont = 0;
							}
						}
					if(mvT && municao > 0 && personagem.visible){												
						atira();
						spaceIsDown = true;
						mvT = false;						
					}
					//Movimenta o tiro
						for(var i in tiros){
							var t = tiros[i];
							t.animation();						
							t.posX += t.velocidade;
							if(t.posX >= canvas.width){
								removeObjects(t,sprites);
								removeObjects(t,tiros);
							}
						}
				//Especial
					if(energia >= 100){
						energia = 100;
					}
					if(energia >= 100 && mvE){
						chuvaDeFogo = true;
						energia = 0;						
					}
				//Chuva de fogo					
					if(chuvaDeFogo){
						atiraChuvaDeFogo();
						setTimeout(function(){
							chuvaDeFogo = false;
						},2000)
					}

		//Inimigos
			//cria os inimigos								
				if(taxaCriaAlien > taxaA){
					taxaCriaAlien = 0;
				}
				if(taxaCriaOrc > taxaO){
					taxaCriaOrc = 0;
				}
				if(taxaCriaAlien2 > taxaA2){
					taxaCriaAlien2 = 0;
				}
				if(taxaCriaAlien3 > taxaA3){
					taxaCriaAlien3 = 0;
				}
				if(taxaCriaAlien4 > taxaA4){
					taxaCriaAlien4 = 0;
				}
				if(taxaCriaAlien >= taxaA || taxaCriaOrc >= taxaO || taxaCriaAlien2 >= taxaA2 || taxaCriaAlien3 >= taxaA3 || taxaCriaAlien4 >= taxaA4){
					criarInimigos();
				}
				//Taxa de tiro dos aliens aumentando
					taxaParaTiroVermelho++;
					taxaParaTiroAzul++;
					taxaParaTiroCinza++;

			//Movimento
				//Alien vermelho			
					for(var i in aliens){
						var a = aliens[i];
						if(a.visible){						
							a.posX -= a.velocidade;
							if(a.posX < 0){
								fimDeJogo();
							}
							//Tiro dos aliens							
							if(taxaParaTiroVermelho >= taxaTiroVermelho){							
								if(onda9||onda11||onda15||onda16||onda17||onda18||onda19){
									alienTiro(a);
								}
								taxaParaTiroVermelho = 0;
							}						
							//Colisão com os tiros comuns
								for(var i in tiros){
									var t = tiros[i];
									if(collide(t,a)){
										a.vida--;
										removeObjects(t,tiros);
										removeObjects(t,sprites);
										if(a.vida <= 0){
											matou++;
											municao++;
											energia += 3;
											destroiInimigo(a);
										}
									}
								}						
							//Colisão com o especial
								for(var j in especiais){
									var e = especiais[j];
									if(collide(e,a)){
										matou++;
										municao++;
										destroiInimigo(a);
									}
								}
							//colisão com a chuva
								for(var k in chuvas){
									var ch = chuvas[k];
									if(collide(ch,a)){
										matou++;
										municao++;
										destroiInimigo(a);
									}
								}							
						}
					}				
				//alien branco
					for(var i in aliens3){
						var a = aliens3[i];						
						if(a.visible){
							//Movimento
								a.posX -= a.velocidade;
								a.posY += a.velocidadeY;
									//Movimento diferenciado
										if(a.posY < 0){
											a.velocidadeY *= -1;
										}
										if(a.posY + a.altura > canvas.height-100){
											a.velocidadeY *= -1;
										}
										if(a.posX < 0){
											fimDeJogo();
										}
							//Colisão com os tiros
								for(var j in tiros){
									var t = tiros[j];
									if(collide(t,a)){
											a.vida--;
											removeObjects(t,tiros);
											removeObjects(t,sprites);
											if(a.vida <= 0){
												matou++;
												municao++;
												energia += 3;
												destroiInimigo(a);
											}
									}
								}
							//Colisão com o especial
								for(var j in especiais){
									var e = especiais[j];
									if(collide(e,a)){
										matou++;
										municao++;
										destroiInimigo(a);
									}
								}
							//colisão com a chuva
							for(var k in chuvas){
								var ch = chuvas[k];
								if(collide(ch,a)){
									matou++;
									municao++;
									destroiInimigo(a);
								}
							}
						}
					}

				//Alien cinza
					for(var i in aliens4){
						var a = aliens4[i];
						if(a.visible){
							//Movimento								
								a.posX -= a.velocidade;								
								a.posY -= a.velocidadeY;																	
									//Limites e fim do jogo se chegar na torre
										if(a.posY < 0){
											a.velocidadeY *= -1;
										}
										if(a.posY + a.altura > canvas.height-100){
											a.velocidadeY *= -1;
										}
										if(a.posX < 0){
											fimDeJogo();
										}
									//tiro do alien
									if(taxaParaTiroCinza >= taxaTiroCinza){										
										alienTiro(a);
										taxaParaTiroCinza = 0;						
									}
							//Colisão com o tiro
								for(var j in tiros){
									var t = tiros[j];
									if(collide(t,a)){
											a.vida--;
											removeObjects(t,tiros);
											removeObjects(t,sprites);
											if(a.vida <= 0){
												matou++;
												municao++;
												energia += 3;
												destroiInimigo(a);
											}
									}
								}
							//Colisão com o especial
								for(var j in especiais){
									var e = especiais[j];
									if(collide(e,a)){
										matou++;
										municao++;
										destroiInimigo(a);
									}
								}
							//colisão com a chuva
							for(var k in chuvas){
								var ch = chuvas[k];
								if(collide(ch,a)){
									matou++;
									municao++;
									destroiInimigo(a);
								}
							}
						}
					}
				//Alien Azul					
					for(var i in aliens2){
						var a = aliens2[i];
						//Movimento
							a.posX -= a.velocidade;									
								//Movimento diferenciado 
									if(a.posX < canvas.width/2){										
										a.velocidade = 0;
										a.posY -= a.velocidadeY;
										if(a.posY < 0){
											a.velocidadeY *= -1;
										}
										if(a.posY - a.altura - 100 >= canvas.height){
											a.velocidadeY *= -1;
										}																	
									}
						//Tiro do alien azul							
								if(taxaParaTiroAzul >= taxaTiroAzul){
									alienTiro(a);
									taxaParaTiroAzul = 0;									
								}

						//Colisão com os tiros
							for(var j in tiros){
								var t = tiros[j];
								if(collide(t,a)){
									a.vida--;
									removeObjects(t,tiros);
									removeObjects(t,sprites);
									if(a.vida <= 0){
										matou++;
										municao++;
										energia += 3;
										destroiInimigo(a);
									}
								} 
							}
						//Colisão com o especial
							for(var j in especiais){
								var e = especiais[j];
								if(collide(e,a)){
									matou++;
									municao++;
									destroiInimigo(a);
								}
							}
						//colisão com a chuva
							for(var k in chuvas){
								var ch = chuvas[k];
								if(collide(ch,a)){
									matou++;
									municao++;
									destroiInimigo(a);
								}
							}						
					}
				//Orc
					for(var i in orcs){
						var o = orcs[i];
						if(o.visible){
							o.posX -= o.velocidade;
							o.animation();
							if(o.posX < 0){
								fimDeJogo();
							}
							//Colisão com os tiros comuns						
							for(var i in tiros){
								var t = tiros[i];
								if(collide(t,o)){
									o.vida--;
									removeObjects(t,tiros);
									removeObjects(t,sprites);
									if(o.vida <= 0){
										matou++;
										municao++;
										energia += 2;
										destroiInimigo(o);										
									}

								}
							}
							//Colisão com o especial						
							for(var j in especiais){
								var e = especiais[j];
								if(collide(e,o)){
									matou++;
									municao++;
									destroiInimigo(o);
								}
							}
							//colisão com a chuva
							for(var k in chuvas){
								var ch = chuvas[k];
								if(collide(ch,o)){
									matou++;
									municao++;
									destroiInimigo(o);
								}
							}														
						}
					}

		//Explosões
			//Cria a explosão
				for(var i in explodes){
					var e = explodes[i];
					e.animation();
						setTimeout(function(){
							removeObjects(e,sprites);
							removeObjects(e,explodes);
						},500);
				}
		//Pimenta
			//Movimento
				for(var i in pimentas){
					var p = pimentas[i];
					p.posX += p.velocidade;
					if(p.posX < 0){
						removeObjects(p,sprites);
						removeObjects(p,pimentas);
					}
				}
			taxaCriaPimenta++;
			if(taxaCriaPimenta >= 300){

				if(Math.floor(Math.random()*11) >= 9){
					criaPimenta();
				}
				taxaCriaPimenta = 0;
			}			
		//Especial			
			//Movimento
				for(var i in especiais){
					var es = especiais[i];
					es.posX += es.velocidade;
					es.animation();
					if(es.posX >= canvas.width){
						removeObjects(es,especiais);
						removeObjects(es,sprites);
					}
				}
			//Chuva de fogo
				//Movimento
					for(var i in chuvas){
						var es = chuvas[i];						
						es.posY += es.velocidade;
						es.animation();
					}
		//Tiro do alien
			//Movimento
				for(var i in tirosInimigo){
					var t = tirosInimigo[i];
					t.posX -= t.velocidade;
					t.animation();
					if(t.posX < 90){
						removeObjects(t,sprites);
						removeObjects(t,tirosInimigo);
					}
					//Colisão entre tiros
					for(var j in tiros){
						var ti = tiros[j];
						if(collide(ti,t)){
							municao++;							
							destroiInimigo(t);							
							removeObjects(ti,sprites);
							removeObjects(ti,tiros);
						}
					}
					//Colisão entre o tiro do alien e o especial
					for(var j in especiais){
						var es = especiais[j];
						if(collide(es,t)){
							municao++;
							destroiInimigo(t);							
						}
					}
				}		
		//Modo normal
			if(modo === normal){
				//Ondas			
					//Onda 1
						if(matou === 0){
							onda1 = true;
							onda = 1;												
						}
						if(onda1){
							onda = 1;
							//Cria os inimigos
								taxaCriaOrc++;
								taxaCriaAlien++;
						}		
					//Onda 2
						if(matou === 30){
							onda2 = true;
							onda1 = false;

						}
						if(onda2){
							onda = 2;
							//Cria inimigos
								taxaCriaAlien++;
								taxaCriaOrc++;
							//Diminui o tempo do respawn
								taxaO = 80;
								taxaA = 150;

						}						
					//Onda 3
						if(matou === 60){
							onda3 = true;
							onda2 = false;
						}
						if(onda3){
							onda = 3;
							//Cria os inimigos
								taxaCriaOrc++;
								taxaCriaAlien++;
							//Ajusta o respawn
								taxaO = 100;
								taxaA = 200;
							//Ajusta a velocidade
								for(var i in aliens){
									var a = aliens[i];
									a.velocidade = 6;
								}
						}						 
					//Onda 4
						if(matou === 90){
							onda4 = true;
							onda3 = false;
						}
						if(onda4){
							onda = 4;
							//Cria os inimigos
								taxaCriaAlien++;
								taxaCriaOrc++;
							//ajusta o spawn
								taxaO = 70;
								taxaA = 100;
						}						 
					//Onda 5
						if(matou === 120){
							onda5 = true;
							onda4 = false;
								//Refill munição
									abastecido = true;
									if(abastecido && abastecidoTiro === 0){
										abastecidoTiro = 1;
										municao += 50;
									}
						}				
						if(onda5){
							onda = 5;
							//Cria os inimigos
								taxaCriaAlien++;
								taxaCriaOrc++;
							//Ajusta a velocidade
								for(var i in aliens){
									var a = aliens[i];
									a.velocidade = 7;
								}
						}		 
					//Onda 6
						if(matou === 150){
							onda6 = true;
							onda5 = false;
						}
						if(onda6){
							onda = 6;
							//Cria o alien azul
							taxaCriaAlien2++;
						}

					//Onda 7
						if(matou === 180){
							onda7 = true;
							onda6 = false;
						}
						if(onda7){
							onda = 7;
							//Cria os inimigos
								taxaCriaAlien2++;
								taxaCriaAlien++;
							//Ajusta o spawn
								taxaA2 = 150;
						}		
					//Onda 8
						if(matou === 210){
							onda8 = true;
							onda7 = false;
						}
						if(onda8){
							onda = 8;
							//Cria os inimigos
								taxaCriaAlien++;					
						}		
					//Onda 9
						if(matou === 240){
							onda9 = true;
							onda8 = false;
						}
						if(onda9){
							onda = 9;
							//Cria os inimigos
								taxaCriaAlien++;					
						}		
					//Onda 10
						if(matou === 270){
							onda10 = true;
							onda9 = false;
								//Refill munição
									abastecido = true;
									if(abastecido && abastecidoTiro === 1){
										abastecidoTiro = 2;
										municao += 50;
									}
						}
						if(onda10){
							onda = 10;
							//Cria os inimigos
								taxaCriaAlien2++;
								taxaCriaOrc++;
						}		
					//Onda 11
						if(matou === 300){
							onda11 = true;
							onda10 = false;
						}
						if(onda11){
							onda = 11;
							//Cria os inimigos
								taxaCriaOrc++;
								taxaCriaAlien++;
								taxaCriaAlien2++;					
						}		
					//Onda 12
						if(matou === 330){
							onda12 = true;
							onda11 = false;
						}
						if(onda12){
							onda = 12;
							//Cria Inimigos
								taxaCriaAlien3++;
						}		

					//Onda 13
						if(matou === 360){
							onda13 = true;
							onda12 = false;
						}
						if(onda13){
							onda = 13;
							//Cria inimigos
								taxaCriaAlien3++;
								taxaCriaAlien2++;
							//Taxa de criação
								taxaA3 = 150;
						}		
					//Onda 14
						if(matou === 390){
							onda14 = true;
							onda13 = false;
						}
						if(onda14){
							onda = 14;
							//Cria inimigos
								taxaCriaAlien++;
								taxaCriaOrc++;				
						}	
					//Onda 15
						if(matou === 420){
							onda15 = true;
							onda14 = false;
								//Refill munição
									abastecido = true;
									if(abastecido && abastecidoTiro === 2){
										abastecidoTiro = 3;
										municao += 50;
									}
						}
						if(onda15){
							onda = 15;
							//Cria inimigos
								taxaCriaAlien3++;
								taxaCriaOrc++
								taxaCriaAlien++;
								taxaCriaAlien2++;
						}		
					//Onda 16
						if(matou === 450){
							onda16 = true;
							onda15 = false;
						}
						if(onda16){
							onda = 16;
							//Cria inimigos
								taxaCriaAlien4++;
								taxaCriaAlien++;
						}		
					//Onda 17
						if(matou === 480){
							onda17 = true;
							onda16 = false;
								//Refill munição
									abastecido = true;
									if(abastecido && abastecidoTiro === 3){
										abastecidoTiro = 4;
										municao += 50;
									}
						}
						if(onda17){
							onda = 17;
							//Cria inimigos
								taxaCriaAlien4++;
								taxaCriaAlien++;
								taxaCriaAlien2++;
						}		
					//Onda 18
						if(matou === 510){
							onda18 = true;
							onda17 = false;					
						}
						if(onda18){
							onda = 18;
							//Cria inimigos
								taxaCriaAlien++;
								taxaCriaAlien2++;
								taxaCriaOrc++;
								taxaCriaAlien4++;
								taxaCriaAlien3++;
						}		
					//Onda 19
						if(matou === 540){
							onda19 = true;
							onda18 = false;
						}
						if(onda19){
							onda = 19;
							//Cria inimigos
								taxaCriaAlien++;
								taxaCriaAlien2++;
								taxaCriaAlien3++;
								taxaCriaAlien4++;					
						}		
					//Onda 20 - final
						if(matou === 570){
							onda20 = true;
							onda19 = false;
						}
						if(onda20 && modo === normal){
							onda = 20;
							fimDeJogo();
						}
			}
		//Modo clássico
			if(modo === classico && matou >=0){				
					//Cria inimigos
						taxaCriaAlien += 2;
						taxaCriaAlien2 += 2;
						taxaCriaOrc += 2;
						taxaCriaAlien4 += 2;
						taxaCriaAlien3 += 2;					
						criaAleatorio();							
			}
			if(modo === classico && matou >= 1000){
				fimDeJogo();
			}			

	}
	function criaAleatorio(){
		var numeroAleatorio = Math.floor(Math.random()*5);
		var numeroAleatorioMov = Math.floor(Math.random()*11);		
		//Alien comun
		if(taxaCriaAlien === taxaA && numeroAleatorio >=0){
			var alienP = Math.floor(Math.random()*60)*8;
			var alien = new Alien(alienI,0,0,64,64,canvas.width,alienP);
				alien.velocidade = 3;					
				sprites.push(alien);
				aliens.push(alien);
				inimigos.push(alien);
		}
		//Orc		
		if(taxaCriaOrc === taxaO && numeroAleatorio >= 1){
			var orc = new Orc(orcI,0,64*9,64,64,canvas.width,canvas.height-160);
				orc.velocidade = 3;									
				sprites.push(orc);
				orcs.push(orc);
				inimigos.push(orc);
		}
		//Alien azul		
		if(taxaCriaAlien2 === taxaA2 && numeroAleatorio >= 2){
			var alienP = Math.floor(Math.random()*60)*8;
			var alien2 = new Alien(alien2I,0,0,64,64,canvas.width,alienP);
			alien2.velocidade = 5;
				//Movimento Aleatório do alien
					if(numeroAleatorioMov >= 5){
						alien2.velocidadeY *= -1;
					}				
			sprites.push(alien2);
			aliens2.push(alien2);
			inimigos.push(alien2);
		}
		//Alien branco		
		if(taxaCriaAlien3 === taxaA3 && numeroAleatorio >= 3){
			var alienP = Math.floor(Math.random()*60)*8;
			var alien3 = new Alien(alien3I,0,0,64,64,canvas.width,alienP);
			alien3.velocidade = 6;
			//Movimento aleatório
				if(numeroAleatorioMov >= 5){
					alien3.velocidadeY *= -1;
				}										
			sprites.push(alien3);
			aliens3.push(alien3);
			inimigos.push(alien3);
		}
		//Alien Cinza		
		if(taxaCriaAlien4 === taxaA4 && numeroAleatorio >= 4){
			var alienP = Math.floor(Math.random()*60)*8;
			var alien4 = new Alien(alien4I,0,0,64,64,canvas.width,alienP);
			alien4.velocidade = 5;	
			if(numeroAleatorioMov >= 5){
				alien4.velocidadeY *= -1;
			}										
			sprites.push(alien4);
			aliens4.push(alien4);
			inimigos.push(alien4);
		}		
	}
	function criarInimigos(){
		var numeroAleatorioMov = Math.floor(Math.random()*11);
		if(modo === normal){
			//Cria os Aliens Comuns
			if(taxaCriaAlien === taxaA){
				var alienP = Math.floor(Math.random()*60)*8;
				var alien = new Alien(alienI,0,0,64,64,canvas.width,alienP);
					alien.velocidade = 3;
						//Vida de acordo com a onda
							if(onda8 || onda9 || onda14 || onda19){
								alien.vida = 2;
							}
					sprites.push(alien);
					aliens.push(alien);
					inimigos.push(alien);
			}
			//Cria os orcs
			if(taxaCriaOrc === taxaO){
				var orc = new Orc(orcI,0,64*9,64,64,canvas.width,canvas.height-160);
					orc.velocidade = 3;
						//Vida de acordo com a onda
							if(onda14 || onda19){
								orc.vida = 2;
							}				
					sprites.push(orc);
					orcs.push(orc);
					inimigos.push(orc);
			}
			//Cria o alien Azul Apenas Depois da onda 6
			if(taxaCriaAlien2 === taxaA2){
				var alienP = Math.floor(Math.random()*60)*8;
				var alien2 = new Alien(alien2I,0,0,64,64,canvas.width,alienP);
				alien2.velocidade = 5;
					//Vida de acordo com a onda
						if(onda19){
							alien2.vida = 2;
						}
					//Movimento Aleatório do alien
						if(numeroAleatorioMov >= 5){
							alien2.velocidadeY *= -1;
						}
				sprites.push(alien2);
				aliens2.push(alien2);
				inimigos.push(alien2);
			}
			//Cria alien branco
			if(taxaCriaAlien3 === taxaA3){
				var alienP = Math.floor(Math.random()*60)*8;
				var alien3 = new Alien(alien3I,0,0,64,64,canvas.width,alienP);
				alien3.velocidade = 6;
					//Vida de acordo com a onda
						if(onda19){
								alien3.vida = 2;
						}
					//Movimento Aleatório do alien
						if(numeroAleatorioMov >= 5){
							alien3.velocidadeY *= -1;
						}

				sprites.push(alien3);
				aliens3.push(alien3);
				inimigos.push(alien3);
			}
			//Cria alien cinza
			if(taxaCriaAlien4 === taxaA4){
				var alienP = Math.floor(Math.random()*60)*8;
				var alien4 = new Alien(alien4I,0,0,64,64,canvas.width,alienP);
				alien4.velocidade = 5;
					//Vida de acordo com a onda
						if(onda19){
								alien4.vida = 2;
						}
					//Movimento Aleatório do alien
						if(numeroAleatorioMov >= 5){
							alien4.velocidadeY *= -1;
						}
				sprites.push(alien4);
				aliens4.push(alien4);
				inimigos.push(alien4);
			}
		}

	}
	function criaPimenta(){
		var pimentaP = Math.floor(Math.random()*60)*7;		
		var pimenta = new Pimenta(pimentaI,0,0,200,200,canvas.width,pimentaP);
		pimenta.velocidade -= 5;
		pimentas.push(pimenta);
		sprites.push(pimenta);
	}
	function atiraEspecial(){
		var especial = new Fogo(especialI,0,0,75,200,personagem.posX,personagem.posY);
			especial.velocidade += 8;
			sprites.push(especial);
			especiais.push(especial);
	}
	function atiraChuvaDeFogo(){
		var chuvaP = Math.floor(Math.random()*90)*13;  
		var chuva = new Fogo(fogoI,0,0,75,75,chuvaP,0);
			chuva.velocidade += 8;
			sprites.push(chuva);
			chuvas.push(chuva);

	}
	function atira(){
		if(!infinito){
			municao--;
		}
		var fogo = new Fogo(fogoI,0,76*2,75,75,personagem.posX,personagem.posY);
			fogo.velocidade = 8;
			sprites.push(fogo);
			tiros.push(fogo);
	}
	function removeObjects(objectToRemove,array){
		var i = array.indexOf(objectToRemove);
		if(i !== -1){
			array.splice(i,1);
		}
	}
	function destroiInimigo(inimigo){
		var explode = new Explode(explodeI,0,0,50,100,inimigo.posX,inimigo.posY);			
			sprites.push(explode);
			explodes.push(explode);
				removeObjects(inimigo,sprites);
				removeObjects(inimigo,orcs);
				removeObjects(inimigo,aliens);
				removeObjects(inimigo,tiros);
				removeObjects(inimigo,tirosInimigo);
				removeObjects(inimigo,aliens2);
				removeObjects(inimigo,aliens3);
				removeObjects(inimigo,aliens4);
				removeObjects(inimigo,inimigos);
	}
	function alienTiro(inimigo){
		var fogoInimigo = new Fogo(fogoI,0,76,75,75,inimigo.posX,inimigo.posY);
			fogoInimigo.velocidade = 5;
			sprites.push(fogoInimigo);
			tirosInimigo.push(fogoInimigo);
	}
	function fimDeJogo(){
		estado = over;		
		if(matou<570){
			mensagemFim.visible = true;
		}
		if(matou >=570 && modo === normal){
			var mensagemVitoria = new Message(canvas.height/2,"Parabéns, guardião! Você derrotou os invasores");
				mensagemVitoria.visible = true;
				mensagens.push(mensagemVitoria);
		}
		if(matou >=1000 && modo === classico){
			var mensagemVitoria = new Message(canvas.height/2,"Parabéns, guardião! Você derrotou os invasores");
				mensagemVitoria.visible = true;
				mensagens.push(mensagemVitoria);
		}

		var mensagemPlacar = new Message(canvas.height/4,"Você matou " + matou);
			mensagemPlacar.visible = true;
			mensagens.push(mensagemPlacar);
			setTimeout(function(){
				mensagemInicio.visible = true;
			},3000)
	}	
	function Botao(posX,posY,largura,altura){
		this.posX = posX;
		this.posY = posY;
		this.largura = largura;
		this.altura = altura;
	}
	function desenha(){
		ctx.clearRect(0,0,canvas.width,canvas.height);
		//Fundo
			ctx.drawImage(backgroundI,0,0,1200,600);
		//torre
			ctx.drawImage(torreI,0,0,128,350,5,155,128,350);
		//Sprites
			for(var i in sprites){
				var d = sprites[i];
				if(estado === jogando){
					d.visible = true;
				}
				if(d.visible){
					ctx.drawImage(d.img,d.srcX,d.srcY,d.largura,d.altura,d.posX,d.posY,d.largura,d.altura);
				}
			}
		//Vida dos inimigos
			for(var i in inimigos){
				var e = inimigos[i];
				ctx.fillStyle = "green";
				ctx.font = "20px algerian";
				ctx.fillText(e.vida,e.posX+25,e.posY);
			}
		//Mensagens
			for(var i in mensagens){
				var m = mensagens[i];
				if(m.visible){
					ctx.font = m.font;
					ctx.fillStyle = m.color;
					m.posX = (canvas.width - ctx.measureText(m.text).width)/2;
					ctx.fillText(m.text,m.posX,m.posY);
				}
			}
		//Tutorial
			if(estado === tutorial){
				ctx.drawImage(hudTutorialI,0,0,1300,800,0,0,1200,600);
			}
		//Menu
			if(estado === inicio){
				ctx.drawImage(menuI,0,0,1300,866,300,0,600,600);			
			}					
		//HUD
			if(estado === jogando || estado === paused){
				//Imagens
					//Caveira
						ctx.drawImage(caveiraI,0,0,526,720,5,10,40,40);
					//Municao												
						ctx.drawImage(municaoI,0,0,250,250,5,60,40,40);
					//Munição infinita
						if(infinito){
							ctx.drawImage(infinitoI,0,0,64,64,45,65,40,40);
						}
					//Vida
						ctx.drawImage(vidaI,0,0,512,512,100,10,40,40);
				//Textos
					//Mortes
						ctx.fillStyle = "green";
						ctx.font = "normal bold 20px algerian";
						ctx.fillText(matou,50,40);
					//Munição
						if(!infinito){	
							ctx.fillStyle = "green";
							ctx.font = "normal bold 20px algerian";
							ctx.fillText(municao,50,95);
						}
					//Energia
						ctx.fillStyle = "red";
						ctx.font = "normal bold 20px algerian";
						ctx.fillText(energia,50,120);
					//Vida
						ctx.fillStyle = "blue";
						ctx.font = "normal bold 20px algerian";
						ctx.fillText(personagem.vida,150,40);
				//Barra de energia
					ctx.fillStyle = "red";				
					ctx.fillRect(10,130,energia,10);				
					ctx.strokeRect(10,130,100,10);
				if(modo === normal){
					//Ondas
						ctx.fillStyle = "blue";
						ctx.font = "normal bold 30px algerian";
						ctx.fillText("Onda " + onda,canvas.width/2,30);
				}

			}
	}
loop();
}());