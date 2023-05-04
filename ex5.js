// filter

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present', 'away', 'silent', 'generate', 'stunning', 'complete'];

// Usa el método filter para filtrar las palabras que empiezan por la letra 'e'

console.log(words.filter((word) => word[0] === 'e')); // TODO [ 'elite', 'exuberant']
console.log(words.filter((word) => word.charAt(0) === 'e'));
// Usa el método filter para filtrar las palabras que empiezan por vocal
// BONUS: Usa una expresión regular!

console.log(words.filter((word) => /^[aeiou]/i.test(word))); // TODO [ 'elite', 'exuberant', 'away']
