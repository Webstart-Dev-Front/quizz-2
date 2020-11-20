// 1 - Ecrire une fonction qui prend un tableau en argument et retourne le tableau sans le premier élément

function withoutFirst(array) {
  array.shift()
  return array
}

// console.log(withoutFirst([1, 2, 3]))

// 2 - Ecrire un fonction qui prend un tableau de chiffres en argument et retourne un tableau qui ne contien que les chiffres divisible par deux.

function divisibleByTwo(params) {
  const array = []
  for (let i = 0; i < params.length; i++) if (params[i] % 2 == 0) array.push(params[i])
  return array
}

// console.log(divisibleByTwo([1, 2, 3, 4, 5, 6, 7, 8]))

// 3 - Écrire une fonction qui prend un tableau avec deux nombres qui représentent la longeur et largeur d'un carré et détermine si il s'agit d'un carré ou d'un rectangle:
// Ex:
// ([16, 16]) => 'Carré'
// ([10, 22]) => 'Rectangle

function rectangleOrSquare(array) {
  return array[0] == array[1] ? 'Carré' : 'Rectangle'
}

// console.log(rectangleOrSquare([16, 16]))
// console.log(rectangleOrSquare([10, 22]))

// 4 - Ecrire une fonction qui retourne le nom du fichier et son extension dans un objet à partir de l'URL
// Ex: "C:/Projects/pil_tests/ascii/edabit.txt" => { name: "edabit", extension: 'txt' }

function getFileName(url) {
  var temp = url.split('/')
  var file = temp[temp.length - 1]
  var temp2 = file.split('.')
  const object = { 'name': '', 'extension': ''}
  object.name = temp2[0]
  object.extension = temp2[1]
  return object
}

// console.log(getFileName('C:/Projects/pil_tests/ascii/edabit.txt'))

// 5 - Ecrire qui emule le comportement d'une machine à sous.
// Exectuer la fonction retourne un tableau de 4 elements au hasard et un string du résultat: "Perdu..." ou "JACKPOT !".
// () => 

function jackpot() {
  const cards = ['$', '`£', '@', '€']
  const results = []
  for (let i = 0; i < 4; i++) {
    var card = cards[Math.floor(Math.random() * cards.length)]
    results.push(card)
  }
  if (results.every(val => val === results[0])) return results.join('-') + ' JACKPOT !'
  return results.join('-') + ' Perdu...'
}

// console.log(jackpot())

function tryJackpot() {
  let i = 0;
  while(1) {
    var returnString = jackpot()
    var result = returnString.split(' ')
    i++
    if (result[1] == 'JACKPOT') return result[0] + ` ${i} tentatives avant le JACKPOT !`
  }
}

// console.log(tryJackpot())