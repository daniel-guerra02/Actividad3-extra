var num 
var inicio = 1
while (inicio == 1) {
num = Math.floor(Math.random() * 9)+1
var numingresado = parseInt(prompt("ingresa un numero entre el 3 y 6"))

while(numingresado <3 || numingresado > 6){
numingresado = parseInt(prompt("ingresa un numero entre el 3 y 6"))
}
var resp = prompt("¿Crees que el numero que ingresaste es 1. mayor, 2. igual o 3. menor?")

if(resp == 1 && num > numingresado){
  alert("La computadora eligió "+num+", usted eligió"+numingresado+". Su elección es mayor ¡Ha adivinado!")
}else{
  if(resp == 2 && num == numingresado){
alert("La computadora eligió "+num+", usted eligió"+numingresado+". Su elección es igual ¡Ha adivinado!")
  }else
  if(resp == 3 && num < numingresado){
alert("La computadora eligió "+num+", usted eligió"+numingresado+". Su elección es menor ¡Ha adivinado!")
  }else
  alert("La computadora eligió "+num+", usted eligió"+numingresado)
} 
inicio = parseInt(prompt("Deseas jugar otra vez? 1. Si 2. No"))
}
alert("gracias por jugar, Daniel Guerra, 26010539")