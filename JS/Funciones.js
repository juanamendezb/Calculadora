//definimos el objeto con propiedades
var ca={
	teclas:document.querySelectorAll("#CuadroCalculadora ul li"),
	operacion:document.querySelector("#resultado"),
	accion:null,
	digito:null,
	cantisignos:0,
	cantidecimal:false,
	resultado:false

}
//objeto con los metodos de la calculadora

var me={
	inicio:function()
	{
		for(var i=0;i<ca.teclas.length; i++)
		{
			ca.teclas[i].addEventListener("click",me.oprimirtecla);
			//	console.log(ca.teclas[i]);
		}
	},
	oprimirtecla:function(teclas)
	{
		ca.accion = teclas.target.getAttribute("class");
		ca.digito = teclas.target.innerHTML;
		me.calculadora(ca.accion,ca.digito);
	},
	calculadora:function(accion,digito)
	{
		switch(accion)
		{
			
		case"numero":
			ca.cantisignos=0;
			//console.log(numero);
			if(ca.operacion.innerHTML=="0")
			{
				ca.operacion.innerHTML=digito;
			}else{
				if(ca.resultado)
				{
					ca.resultado=false;
					ca.resultado.innerHTML=digito;
				}else{
					ca.operacion.innerHTML += digito;
				}
			}
			break;
		}
	}

}
me.inicio();