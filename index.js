// 1 - Ecrire une fonction qui prend un tableau en argument et retourne le tableau sans le premier élément

function withoutFirst(array) {
  return array.shift()
}
console.log(withoutFirst([0,1,2,3,4]))

// 2 - Ecrire un fonction qui prend un tableau de chiffres en argument et retourne un tableau qui ne contien que les chiffres divisible par deux.
//const array = [1, 33, 54, 30, 15];
//const param = arr => arr.filter(val => val % 3 == 0);
//function divisibleByTwo(params) {
const numbers = [1,2,3,4,5,6,7,8,9,10];

function divisibleByTwo(numbers) {
   numbers.filter(function(num){
   return num % 2;
});

console.log(divisibleByTwo);

// 3 - Écrire une fonction qui prend un tableau avec deux nombres qui représentent la longeur et largeur d'un carré et détermine si il s'agit d'un carré ou d'un rectangle:
// Ex:
// ([16, 16]) => 'Carré'
// ([10, 22]) => 'Rectangle

const array = [a,b]
function rectangleOrSquare(array) {
  if (a === b) {
    result = 'square';
  } else {
    result = 'rectangle';
  }
  return result;
}

console.log(rectangleOrSquare(10,10))
// 4 - Ecrire une fonction qui retourne le nom du fichier et son extension dans un objet à partir de l'URL
// Ex: "C:/Projects/pil_tests/ascii/edabit.txt" => { name: "edabit", extension: 'txt' }

const url =  "C:/Projects/pil_tests/ascii/edabit.txt"
function getFileName(url) {
    return url.split()
}
//console.log(getFileName())


// 5 - Ecrire qui emule le comportement d'une machine à sous.
// Exectuer la fonction retourne un tableau de 4 elements au hasard et un string du résultat: "Perdu..." ou "JACKPOT !".
