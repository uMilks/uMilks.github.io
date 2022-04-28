//Função para calcular delta
function doDelta(a, b, c) {
let delta = Math.pow(b,2) - 4*a*c;
return delta;
}

//Função para calcular Báscara
function doBhaskara(a, b, c) { 
let delta = doDelta(a, b, c);
if (delta >= 0){
 let doisa = a*2;
 let x1 = -b + Math.sqrt(delta);
 x1 = x1 / doisa;
 let x2 = -b - Math.sqrt(delta);
 x2 = x2 / doisa;
 return [x1, x2];
}
else{
	return "Resposta não pertence aos números reais.";
}
}

//Array pra botar os números da Báscara
var numeros = ["a","b","c"];

var nulo = '';

//Adicionando event listeners pros inputs da bhaskara
var baka_a = document.getElementById('baka_a');
baka_a.addEventListener('input',() => registerInput(numeros,0,equaçãobhaskara,baka_a))
var baka_b = document.getElementById('baka_b');
baka_b.addEventListener('input',() => registerInput(numeros,1,equaçãobhaskara,baka_b))
var baka_c = document.getElementById('baka_c');
baka_c.addEventListener('input',() => registerInput(numeros,2,equaçãobhaskara,baka_c))

var equaçãobhaskara = numeros[0]+"x² + "+numeros[1]+"x + "+numeros[2]+" = 0"
document.getElementById('equação').innerHTML = equaçãobhaskara

//Função para adicionar números em uma array por uma prompt
function registerInput(arr, ind, str, id) {
	let valor = id.value;
	parseInt(valor);
	if ((ind <= 2 ) && (valor != nulo)){
		arr.splice(ind, 1, valor);
	}
	else {
		return "bota essa porra certakkkkkkkkkk"
	}
	equaçãobhaskara = arr[0]+"x² + "+arr[1]+"x + "+arr[2]+" = 0"
	document.getElementById('equação').innerHTML = equaçãobhaskara
}
equaçãobhaskara = numeros[0]+"x² + "+numeros[1]+"x + "+numeros[2]+" = 0"
document.getElementById('equação').innerHTML = equaçãobhaskara
	
//Função para escrever Báscara no parágrafo HTML 
function writeBhaskara(arr) {
	if (arr.length == 3) {
		let bhaskaraFunction = doBhaskara(arr[0], arr[1], arr[2]);
		let bhaskaraResult = "x' = "+bhaskaraFunction[0]+' x" = '+bhaskaraFunction[1];
		document.getElementById('bhaskaraResult').innerHTML = bhaskaraResult;
		arr[0]='a';
		arr[1]='b';
		arr[2]='c';
		console.log(arr)
	}
	else {
		document.getElementById('bhaskaraResult').innerHTML = "Coloque todos os números.";
	}
}

var dvtvariable = "v";
function changePlaceholders(tipo) {
	if (tipo === 'dvt') {
		if (dvtvariable ==="v") {
		document.getElementsByName('dvtcomp1')[0].placeholder = 'Espaço';
		document.getElementsByName('dvtcomp2')[0].placeholder = 'Tempo';
		}
		if (dvtvariable ==="t") {
		document.getElementsByName('dvtcomp1')[0].placeholder = 'Espaço';
		document.getElementsByName('dvtcomp2')[0].placeholder = 'Velocidade';
		}
		if (dvtvariable ==="e") {
		document.getElementsByName('dvtcomp1')[0].placeholder = 'Velocidade';
		document.getElementsByName('dvtcomp2')[0].placeholder = 'Tempo';
		}
	}
	if (tipo === 'as') {
		if (asimplesvariable ==="v") {
		document.getElementsByName('ascomp1')[0].placeholder = 'Aceleração';
		document.getElementsByName('ascomp2')[0].placeholder = 'Tempo';
		}
		if (asimplesvariable ==="t") {
		document.getElementsByName('ascomp1')[0].placeholder = 'Velocidade';
		document.getElementsByName('ascomp2')[0].placeholder = 'Aceleração';
		}
		if (asimplesvariable ==="a") {
		document.getElementsByName('ascomp1')[0].placeholder = 'Velocidade';
		document.getElementsByName('ascomp2')[0].placeholder = 'Tempo';
		}
	}
}
function doDVT (v){
	var dvtcomp1 = document.getElementById('dvtcomp1').value;
	var dvtcomp2 = document.getElementById('dvtcomp2').value;
	console.log(dvtcomp1+', '+dvtcomp2);
	if (v=="e") {
		document.getElementById('dvtresult').innerHTML = 'd = '+dvtcomp1*dvtcomp2;
	}
	if (v=='t') {
		document.getElementById('dvtresult').innerHTML = 't = '+ dvtcomp1/dvtcomp2;
	}
	if (v=='v') {
		document.getElementById('dvtresult').innerHTML = 'v = '+ dvtcomp1/dvtcomp2;
	}
	console.log(dvtvariable +", "+dvtcomp1+', '+dvtcomp2);
}

var asimplesvariable = 'a';
function doAS(v) {
	var ascomp1 = document.getElementById('ascomp1').value;
	var ascomp2 = document.getElementById('ascomp2').value;
	console.log(ascomp1+', '+ascomp2);
	if (v=="a") {
		document.getElementById('asresult').innerHTML = 'a = '+ascomp1/ascomp2;
	}
	if (v=='t') {
		document.getElementById('asresult').innerHTML = 't = '+ ascomp1/ascomp2;
	}
	if (v=='v') {
		document.getElementById('asresult').innerHTML = 'v = '+ ascomp1*ascomp2;
	}
	console.log(asimplesvariable +", "+ascomp1+', '+ascomp2);
}