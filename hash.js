function base37Decrypt(base37Number, increment) {

        let positionArray = [], decryptedArray = [], 
        moduloRemainder = 0, hashKey = 'acdegilmnoprstuw';

        while (increment > 0) {        
                increment--;
                moduloRemainder = ( base37Number % 37 );
                positionArray[increment] = moduloRemainder;
                base37Number = (base37Number - moduloRemainder)/37;
                decryptedArray[increment+1] = hashKey.charAt(positionArray[increment]);		
            }

  return decryptedArray.join("");
    
}

console.log(base37Decrypt(680131659347, 7))
console.log(base37Decrypt(1317985395604951854, 11))
