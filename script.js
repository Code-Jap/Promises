
 const testNum = (number) => {
    return new Promise((resolve, reject) => {
        
        if (number > 10) {
            resolve(number + ' is greater then 10');
        } else {
            reject(number + ' is less then 10 ');
        };
    });
    };

   testNum(9)
   .then(result => console.log(result))
   .catch(error => console.log(error));

   testNum(10)
   .then(result => console.log(result))
   .catch(error => console.log(error));

   testNum(11)
   .then(result => console.log(result))
   .catch(error => console.log(error));








   const makeAllCaps = (words) => {
    return new Promise((resolve, reject) => {
      if (
        words.every(word => {
          return typeof word === 'string';
        })
      ) {
        resolve(
          sortWords(
            words.map(word => {
              return word.toUpperCase();
            })
          )
        );
      } else {
        reject('Not a string!');
      }
    });
  };
  
  const sortWords = (words) => {
    return new Promise((resolve, reject) => {
      if (words) {
        resolve(words.sort());
      } else {
        reject('strings only!');
      }
    });
  };
  
  const theseAreWords = ['promise', 'practice', 'break'];
  
  makeAllCaps(theseAreWords)
    .then(sortWords(theseAreWords))
    .then(result => console.log(result))
    .catch(error => console.log(error));
  
  const theseAreNotWords = [1, 'hello', 9];
  
  makeAllCaps(theseAreNotWords)
    .then(sortWords(theseAreNotWords))
    .then(result => console.log(result))
    .catch(error => console.log(error));

