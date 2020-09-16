function base37Decrypt(base37Number, decrement) {

        let positionArray = [], decryptedArray = [], 
        moduloRemainder = 0, hashKey = 'acdegilmnoprstuw';

        while (decrement > 0) {        
                decrement--;
                moduloRemainder = ( base37Number % 37 );
                positionArray[decrement] = moduloRemainder;
                base37Number = (base37Number - moduloRemainder)/37;
                decryptedArray[decrement+1] = hashKey.charAt(positionArray[decrement]);		
            }

  return decryptedArray.join("");
    
}

console.log(base37Decrypt(680131659347, 7))
console.log(base37Decrypt(1317985395604951854, 11))
