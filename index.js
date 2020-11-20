// 1 - Ecrire une fonction qui prend un tableau en argument et retourne le tableau sans le premier élément

function withoutFirst(array) {
  return array.slice(1);
}

// 2 - Ecrire un fonction qui prend un tableau de chiffres en argument et retourne un tableau qui ne contien que les chiffres divisible par deux.

function divisibleByTwo(params) {
  var arr= []

  for (let i = 0; i < params.length; i++) {
    if (params[i] % 2 === 0) {
      arr.push(params[i])
    }
  }
  return arr
}

// 3 - Écrire une fonction qui prend un tableau avec deux nombres qui représentent la longeur et largeur d'un carré et détermine si il s'agit d'un carré ou d'un rectangle:
// Ex:
// ([16, 16]) => 'Carré'
// ([10, 22]) => 'Rectangle

function rectangleOrSquare(array) {
  if (array[0] == array[1])
    return "Carré"
  return "Rectangle"
}

// 4 - Ecrire une fonction qui retourne le nom du fichier et son extension dans un objet à partir de l'URL
// Ex: "C:/Projects/pil_tests/ascii/edabit.txt" => { name: "edabit", extension: 'txt' }

function getFileName(url) {
  var new_url = url.substring(url.lastIndexOf('/')+1)
  new_url = new_url.split('.')

  return arr = {clé: "name: ", valeur:new_url[0], clé: "extension: ", valeur:new_url[1]}
}

// 5 - Ecrire qui emule le comportement d'une machine à sous.
// Exectuer la fonction retourne un tableau de 4 elements au hasard et un string du résultat: "Perdu..." ou "JACKPOT !".
// () => 
function jackpot() {
  const cards = ['$', '`£', '@', '€']
  var arr = []
  for (let i = 0; i < 4; i++) {
    arr.push(cards[Math.floor(Math.random() * cards.length)])
  }
  var isSame = true;

  for (let i = 0; isSame && i < arr.length; i++) {
    isSame = (arr[0] == arr[i])
  }
  if (isSame == false) {
    return arr + " Perdu..."
  } else {
    return arr + " JACKPOT !"
  }
}

function tryJackpot() {
  let i = 0;
  while(1) {
    var returnString = jackpot()
    var result = returnString.split(' ')
    i++
    if (result[1] == 'JACKPOT') return result[0] +  ` ${i} tentatives avant le JACKPOT !`
  }
}



const cards = ['$', '`£', '@', '€']
var arr = [1, 2, 3, 4, 5, 6, 7]

console.log(withoutFirst(cards))
console.log(divisibleByTwo(arr))
console.log(rectangleOrSquare([12, 12]))
console.log(rectangleOrSquare([12, 13]))
console.log(getFileName("C:/Projects/pil_tests/ascii/edabit.txt"))
console.log(jackpot())
console.log(tryJackpot())