function Divisor(){
    let a = document.getElementById("valor1");
    let b = document.getElementById("valor2");
    let resultado = document.getElementById("resultado");

    let v1 = parseInt(a.value);
    let v2 = parseInt(b.value);
    let resto = v1%v2;

    while(resto!=0){

        v1 = v2;
        v2 = resto;
        resto = v1 % v2;
    }
    document.getElementById("resultado").textContent = v2;
}
