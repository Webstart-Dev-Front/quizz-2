// 1 - Ecrire une fonction qui prend un tableau en argument et retourne le tableau sans le premier élément

function withoutFirst(array) {
  const first = array.shift();
  return array
}

// 2 - Ecrire un fonction qui prend un tableau de chiffres en argument et retourne un tableau qui ne contien que les chiffres divisible par deux.

function divisibleByTwo(params) {
  return params.filter(param => param % 2 === 0);
}

// 3 - Écrire une fonction qui prend un tableau avec deux nombres qui représentent la longeur et largeur d'un carré et détermine si il s'agit d'un carré ou d'un rectangle:
// Ex:
// ([16, 16]) => 'Carré'
// ([10, 22]) => 'Rectangle

function rectangleOrSquare(array) {
  if(array[0] == array[1]) {
    return `A length of ${array[0]} and a width of ${array[1]} make a square.`
  } else {
    return `A length of ${array[0]} and a width of ${array[1]} make a rectangle.`
  }
}

// 4 - Ecrire une fonction qui retourne le nom du fichier et son extension dans un objet à partir de l'URL
// Ex: "C:/Projects/pil_tests/ascii/edabit.txt" => { name: "edabit", extension: 'txt' }

function getFileName(url) {
  const urlArray = url.split('/');
  const fileName = urlArray.pop();
  const fileNameArray = fileName.split('.');
  const file = {
    name: fileNameArray[0],
    extension: fileNameArray[1]
  }
  return file
}

// 5 - Ecrire qui emule le comportement d'une machine à sous.
// Exectuer la fonction retourne un tableau de 4 elements au hasard et un string du résultat: "Perdu..." ou "JACKPOT !".
// () => 
function jackpot() {
  const cards = ['$', '£', '@', '€']
  const random = [cards[Math.floor(Math.random() * cards.length)]];
  for (i = 0; i < 3; i++) {
    random.push(cards[Math.floor(Math.random() * cards.length)])
  }
  if(random.every( (val, i, random) => val === random[0] )) {
    return `${random[0]}-${random[1]}-${random[2]}-${random[3]} - JACKPOT! You won!`
  } else {
    return `${random[0]}-${random[1]}-${random[2]}-${random[3]} - Sorry, you lost...`
  }
}

// 6 - Bonus
// ATTENTION, ne lance pas la fonction, ma boucle while est sans fin, je n'ai pas eu le temps de la corriger mais je voulais te laisser mes essais quand même :)

function tryJackpot() {
  const cards = ['$', '£', '@', '€']
  var random = [cards[Math.floor(Math.random() * cards.length)]];
  for (i = 0; i < 3; i++) {
    random.push(cards[Math.floor(Math.random() * cards.length)])
  }
  let tries = 0
  every = random.every( (val, i, random) => val === random[0])
  while(every == false) {
    tries++
    random = []
    for (i = 0; i < 3; i++) {
      random.push(cards[Math.floor(Math.random() * cards.length)])
    }
  }
  return tries
}

result = tryJackpot();
console.log(result);