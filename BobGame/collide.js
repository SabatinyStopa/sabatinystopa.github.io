function collide(s1,s2){
	var hit = false;

	var vetX = s1.centerX() - s2.centerX();
	var vetY = s1.centerY() - s2.centerY();

	var somaMetadeLargura = s1.metadeLargura() + s2.metadeLargura();
	var somaMetadeAltura = s1.metadeAltura() + s2.metadeAltura();

	if(Math.abs(vetX) < somaMetadeLargura && Math.abs(vetY) < somaMetadeAltura){
		hit = true;
	}
	return hit;	
}