// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
// const valid1 = [4, 5, 3, 9, 6, 8, 9, 8, 8, 7, 7, 0, 5, 7, 9, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
// let myKey = batch[0];



// function creditCardsNumbers(creditCard) {
//   creditCard = myKey;
//   for (indexOdd = creditCard.length-1; indexOdd > 0 ; indexOdd-- ) {
//   console.log(creditCard[indexOdd])
//   };
// };
// console.log('Credit Card Numbers: '); 
// creditCardsNumbers();


// function creditCardsNumbersOdd(creditCard) {
//   creditCard = myKey;
//   for (indexOdd = creditCard.length-1; indexOdd >= 0 ; indexOdd-=2 ) {

//     console.log(creditCard[indexOdd]);
//   };
// };
// console.log('Credit Card Numbers Odd: '); 
// creditCardsNumbersOdd();


// function creditCardsNumbersEven(creditCard) {
//   creditCard = myKey;
//   for (indexEven = creditCard.length-2; indexEven >= 0 ; indexEven-=2 ) {
//   console.log(creditCard[indexEven])
//   };
// };
// console.log('Credit Card Numbers Even: '); 
// creditCardsNumbersEven();


// function creditCardsNumbersEvenFormula(creditCard) {
//   creditCard = myKey;
//   for (indexEven = creditCard.length-2; indexEven > 0 ; indexEven-=2 ) {
//     if((creditCard[indexEven]*2) > 9) {
//     console.log((creditCard[indexEven]*2)-9)
//     }
//   };
// };
// console.log('Credit Card Numbers Even Formula: '); 
// creditCardsNumbersEvenFormula();


// function creditCardsNumbersEvenFormulaNotApplied(creditCard) {
//   creditCard = myKey;
//   for (indexEven = creditCard.length-2; indexEven >= 0 ; indexEven-=2 ) {
//     if((creditCard[indexEven]*2) <= 9) {
//     console.log(creditCard[indexEven]*2)
//     }
//   };
// };
// console.log('Credit Card Numbers Even Formula Not Applied: '); 
// creditCardsNumbersEvenFormulaNotApplied();

// function creditCardArray() {
//  return creditCardsNumbersOdd() + creditCardsNumbersEvenFormula() + creditCardsNumbersEvenFormulaNotApplied();
// };

// console.log('Credit Card Array: ')
// creditCardArray();




// // New stuff
// console.log('New Stuff');
// myKey = batch[0]
// // Array of Credit Card Numbers
// let ccArray = [];

// // Credit Card Numbers Odd: 
// for (indexOdd = myKey.length-1; indexOdd >= 0 ; indexOdd-=2 ) {
//     ccArray.push(myKey[indexOdd])
// };

// // Credit Card Numbers Even Formula: 
// for (indexEven = myKey.length-2; indexEven >= 0 ; indexEven-=2 ) {
//   if((myKey[indexEven]*2) > 9) {
//   ccArray.push((myKey[indexEven]*2)-9)  
//   }
// };

// // Credit Card Numbers Even Formula Not Applied: 
// for (indexEven = myKey.length-2; indexEven >= 0 ; indexEven-=2 ) {
//   if((myKey[indexEven]*2) <= 9) {
//   ccArray.push(myKey[indexEven]*2)
//   }
// };

// console.log('Credit Card Numbers Result Array: ' + ccArray);

// // Sum up all digits credit card number
// let sumDigits = ccArray.reduce((a, b) => a + b, 0);
// console.log('Sum up all digits credit card number: ' + sumDigits);

// // Sum Modulo
// let sumModulo = sumDigits % 10;
// console.log('Sum Modulo: ' + sumModulo);

// // Validate Card
// function validateCred2() {
//   if(sumModulo === 0) {
//      return 'true' 
//   } else {
//     return 'false'
//   }
// };

// console.log('Validate Credit Function: ' + validateCred2())




const validateCred = (creditCardNumber) => {
  let validationHolder = [ ];
  // Credit Card Numbers 1st set of Numbers Rule 2 | Check number: 
  for (indexOdd = creditCardNumber.length-1; indexOdd >= 0 ; indexOdd-=2 ) {
      validationHolder.push(creditCardNumber[indexOdd]);
  };
  // Credit Card Numbers 2nd set of Numbers Rule 2 | Other Greater than 9: 
  for (indexEven = creditCardNumber.length-2; indexEven >= 0 ; indexEven-=2 ) {
    if((creditCardNumber[indexEven]*2) > 9) {
      validationHolder.push((creditCardNumber[indexEven]*2)-9)  
    }
  };
  // Credit Card Numbers 3rd set of Numbers Rule 2 | Other not Greater than 9:  
  for (indexEven = creditCardNumber.length-2; indexEven >= 0 ; indexEven-=2 ) {
    if((creditCardNumber[indexEven]*2) <= 9) {
    validationHolder.push(creditCardNumber[indexEven]*2)
    }
  };
  //console.log(validationHolder);
  // Sum up all digits credit card number
  let sumDigits = validationHolder.reduce((a, b) => a + b, 0);
  //console.log('Sum up all digits credit card number: ' + sumDigits);
  // Sum Modulo
  let sumModulo = sumDigits % 10;
  //console.log('Sum Modulo: ' + sumModulo);
  if(sumModulo === 0) {
     return true
  } else {
    return false
  }
};

console.log('This is my function to validate Credit Cards: ' + validateCred(invalid1));


const batch2 = [valid1, invalid1, invalid2, valid2];
const batch3 = [invalid1];


const findInvalidCards = (nestedBatchArray) => {
  let invalidCardsHolder = [];
  for (batchIndex = 0; batchIndex < nestedBatchArray.length; batchIndex++) {
    // console.log(nestedBatchArray[batchIndex])
    if(validateCred(nestedBatchArray[batchIndex]) === true) {
       // console.log('good credit card')
       } else if (validateCred(nestedBatchArray[batchIndex]) === false) {
       // console.log('bad credit card');
       invalidCardsHolder.push(nestedBatchArray[batchIndex]); 
       } else { }; 
  };
  return invalidCardsHolder;
}

console.log('This is my function to pull Invalid Credit Card Numbers from a Batch: ' + findInvalidCards(batch));

const idInvalidCardCompanies = (invalidNumbers) => {
  console.log('Invalid Cards Numbers: ' + findInvalidCards(invalidNumbers));
  if (5 === 5) {
      
      } else {
    console.log('nothing happen')
  }
};

// idInvalidCardCompanies(batch);






