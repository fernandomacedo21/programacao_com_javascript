
function soma(n1, n2) {
	return n1 + n2
}

function validaIdade(idade){
	var validar;
	if (idade >= 18){
		validar = true
	}else{
		validar = false
	}
	return validar;
}

var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));




/*
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
/*

/*
var count;
for(count=1; count <= 5; count ++){
	alert(count);
};
/*

/*
var count = 0;
while (count <= 5){
	console.log(count);
	alert(count);
	count++;
};
/*

/*
var idade = prompt("Qual sua idade?");
if (idade >= 18){
	alert("maior de idade");
}else{
	alert("menor de idade");
};
*/

/*
var frutas = [{nome: "maça", cor:"vermelha"}, {nome: "uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var fruta = {nome: "maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

/*
var lista = ["maça", "pera", "laranja"];
lista.push("uva");
//lista.pop();
console.log(lista[0]);
console.log(lista.toString()[0]);
console.log(lista.join(" | "));
*/

/*
var n1 = 5
var n2 = 3
var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
console.log(nome);
console.log(n1 * n2);
console.log(frase.toLowerCase());
//alert(frase.replace("Japão", "Brasil"));
*/