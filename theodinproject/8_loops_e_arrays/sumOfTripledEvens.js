function sumOfTripledEvens(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    // Step 1: If the element is an even number
    if (array[i] % 2 === 0) {
      // Step 2: Multiply this number by three
      const tripleEvenNumber = array[i] * 3;

      // Step 3: Add the new number to the total
      sum += tripleEvenNumber;
    }
  }
  return sum;
}
const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sumOfTripledEvens(vetor));


function somaDosParesTriplicados(vet){

}


