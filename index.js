// 1 - Ecrire une fonction qui prend un tableau en argument et retourne le tableau sans le premier élément

function withoutFirst(array) {
  let newTable = array.shift()
  return array
}

console.log(withoutFirst([2, 3, 4]))

// 2 - Ecrire un fonction qui prend un tableau de chiffres en argument et retourne un tableau qui ne contien que les chiffres divisible par deux.

function divisibleByTwo(params) {
  return params.filter(params => params%2 ===  0)
}

console.log(divisibleByTwo([3, 6, 12]))

// 3 - Écrire une fonction qui prend un tableau avec deux nombres qui représentent la longeur et largeur d'un carré et détermine si il s'agit d'un carré ou d'un rectangle:
// Ex:
// ([16, 16]) => 'Carré'
// ([10, 22]) => 'Rectangle

function rectangleOrSquare(array) {
  if (array[0] == array[1]) {
    return 'Carré'
  } else {
    return 'Rectangle'
  }
}

console.log(rectangleOrSquare([10, 15]))

// 4 - Ecrire une fonction qui retourne le nom du fichier et son extension dans un objet à partir de l'URL
// Ex: "C:/Projects/pil_tests/ascii/edabit.txt" => { name: "edabit", extension: 'txt' }

function getFileName(url) {

}

// 5 - Ecrire qui emule le comportement d'une machine à sous.
// Exectuer la fonction retourne un tableau de 4 elements au hasard et un string du résultat: "Perdu..." ou "JACKPOT !".
// () => 
function jackpot() {
  const cards = ['$', '`£', '@', '€']
  cards.sort()
  if (cards[0] == cards[1] == cards[2] == cards[3]){
    return cards + 'JACKPOT'
  } else {
    return cards + ' Perdu'
  }

}

console.log(jackpot())